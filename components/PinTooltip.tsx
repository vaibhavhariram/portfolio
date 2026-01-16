'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Pin, categoryColors } from '@/data/pins';

interface PinTooltipProps {
  pin: Pin | null;
  position: { x: number; y: number } | null;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function PinTooltip({ pin, position, containerRef }: PinTooltipProps) {
  if (!pin || !position || !containerRef.current) return null;

  const containerRect = containerRef.current.getBoundingClientRect();
  const color = categoryColors[pin.category];
  
  // Calculate position as percentage
  const xPercent = (position.x / 1009.6727) * 100;
  const yPercent = (position.y / 665.96301) * 100;
  
  // Determine if tooltip should appear above or below, left or right
  const showAbove = yPercent > 30;
  const showLeft = xPercent > 70;

  return (
    <AnimatePresence>
      {pin && (
        <motion.div
          initial={{ opacity: 0, y: showAbove ? 10 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: showAbove ? 10 : -10 }}
          transition={{ duration: 0.15 }}
          className="absolute z-30 pointer-events-none"
          style={{
            left: `${xPercent}%`,
            top: `${yPercent}%`,
            transform: `translate(${showLeft ? '-100%' : '0'}, ${showAbove ? '-100%' : '0'})`,
            marginTop: showAbove ? '-12px' : '12px',
            marginLeft: showLeft ? '-12px' : '12px',
          }}
        >
          <div 
            className="
              bg-[#1a1a1f]/95 
              border border-[#2a2a2f] 
              rounded-lg 
              px-4 py-3 
              shadow-xl shadow-black/30
              backdrop-blur-sm
              min-w-[180px]
            "
          >
            <p className="text-[10px] font-mono text-[#6b6b6b] mb-1">
              {pin.coordinates.display}
            </p>
            <p className="text-sm font-semibold text-white">
              {pin.location}
            </p>
            <p 
              className="text-xs mt-0.5"
              style={{ color }}
            >
              {pin.title}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

