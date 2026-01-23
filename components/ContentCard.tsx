'use client';

import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { Pin, categoryColors } from '@/data/pins';
import Image from 'next/image';
import { useState, useEffect, useSyncExternalStore } from 'react';

interface ContentCardProps {
  pin: Pin | null;
  onClose: () => void;
}

// SSR-safe media query hook that avoids hydration mismatch
function useMediaQuery(query: string): boolean {
  const subscribe = (callback: () => void) => {
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener('change', callback);
    return () => mediaQuery.removeEventListener('change', callback);
  };
  
  const getSnapshot = () => window.matchMedia(query).matches;
  
  // Return false on server, actual value on client
  const getServerSnapshot = () => false;
  
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function ContentCard({ pin, onClose }: ContentCardProps) {
  const color = pin ? categoryColors[pin.category] : '#3b82f6';
  const [hasMounted, setHasMounted] = useState(false);
  const isMobile = useMediaQuery('(max-width: 639px)');
  
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 300], [1, 0]);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y > 100 || info.velocity.y > 500) {
      onClose();
    }
  };
  
  // Don't render until mounted to avoid animation flash
  if (!hasMounted) {
    return null;
  }
  
  return (
    <AnimatePresence>
      {pin && (
        <>
          {/* Backdrop / Dim overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={onClose}
            aria-hidden="true"
          />
          
          {/* Card */}
          <motion.aside
            key={pin.id}
            initial={isMobile ? { y: '100%', x: 0 } : { x: '100%', y: 0 }}
            animate={{ x: 0, y: 0 }}
            exit={isMobile ? { y: '100%', x: 0 } : { x: '100%', y: 0 }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            drag={isMobile ? 'y' : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={handleDragEnd}
            style={isMobile ? { y, opacity } : {}}
            className="
              fixed right-0 bottom-0 
              w-full h-[85vh] 
              sm:top-0 sm:h-screen sm:w-[420px]
              bg-[#111116] 
              border-t sm:border-t-0 sm:border-l border-[#2a2a2f] 
              rounded-t-2xl sm:rounded-none
              z-50
              overflow-y-auto
              custom-scrollbar
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby="card-title"
          >
            {/* Mobile drag handle */}
            <div className="sm:hidden flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 bg-[#3a3a3f] rounded-full" />
            </div>
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 
                w-10 h-10 
                flex items-center justify-center 
                rounded-full 
                bg-[#1a1a1f] 
                border border-[#2a2a2f]
                text-[#a0a0a0] 
                hover:text-white 
                hover:bg-[#2a2a2f]
                transition-all duration-200
                z-10
              "
              aria-label="Close panel"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Header */}
            <div className="p-6 pt-4 sm:pt-8">
              <h1 
                id="card-title"
                className="text-xl sm:text-2xl font-bold pr-12"
              >
                {pin.title}
              </h1>
              {pin.subtitle && (
                <p className="text-sm text-[#a0a0a0] mt-1">
                  {pin.subtitle}
                </p>
              )}
              <p className="text-sm text-[#a0a0a0] mt-1">
                {pin.location}
              </p>
              <p className="text-[11px] font-mono text-[#6b6b6b] mt-1">
                {pin.coordinates.display}
              </p>
            </div>
            
            <hr className="border-[#2a2a2f] mx-6" />
            
            {/* Hero Image */}
            {pin.heroImage && (
              <div className="p-6">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#1a1a1f]">
                  <Image
                    src={pin.heroImage}
                    alt={pin.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 420px"
                    onError={(e) => {
                      // Hide broken images
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback gradient when no image */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${color}40 0%, transparent 60%)`
                    }}
                  />
                </div>
              </div>
            )}
            
            {/* Description */}
            <div className="px-6 pb-4">
              <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
                {pin.description}
              </p>
            </div>
            
            {/* Tech Tags */}
            {pin.tags && pin.tags.length > 0 && (
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {pin.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3 py-1 
                      bg-[#1a1a1f] 
                      border border-[#2a2a2f] 
                      rounded-full 
                      text-xs 
                      font-mono 
                      text-[#a0a0a0]
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Action Buttons */}
            {pin.links && pin.links.length > 0 && (
              <div className="px-6 pb-8 flex flex-wrap gap-3">
                {pin.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center gap-2
                      px-4 py-2 
                      rounded-lg 
                      text-sm 
                      font-medium
                      transition-all duration-200
                      ${link.primary
                        ? 'text-white hover:brightness-110'
                        : 'border border-[#2a2a2f] text-[#a0a0a0] hover:text-white hover:border-[#3a3a3f]'
                      }
                    `}
                    style={link.primary ? { backgroundColor: color } : undefined}
                  >
                    {link.label}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            )}
            
            {/* Category indicator at bottom */}
            <div className="px-6 pb-6">
              <div className="flex items-center gap-2 text-xs text-[#6b6b6b]">
                <span 
                  className="w-2 h-2 rounded-full"
                  style={{ 
                    backgroundColor: pin.category === 'bucket' ? 'transparent' : color,
                    border: pin.category === 'bucket' ? '1.5px solid white' : 'none'
                  }}
                />
                <span className="capitalize">{pin.category.replace('-', ' ')}</span>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
