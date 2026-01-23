'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import { pins, Pin, categoryColors, categoryLabels, PinCategory } from '@/data/pins';

interface MobileListViewProps {
  isOpen: boolean;
  onClose: () => void;
  onPinSelect: (pin: Pin) => void;
}

const categoryOrder: PinCategory[] = [
  'projects',
  'research',
  'education',
  'personal',
  'travel',
  'interests',
  'bucket',
];

export default function MobileListView({ isOpen, onClose, onPinSelect }: MobileListViewProps) {
  // Group pins by category
  const groupedPins = categoryOrder.reduce((acc, category) => {
    acc[category] = pins.filter(pin => pin.category === category);
    return acc;
  }, {} as Record<PinCategory, Pin[]>);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
          className="
            fixed inset-0 z-50
            bg-[#0a0a0f]
            overflow-y-auto
            custom-scrollbar
          "
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-[#0a0a0f] border-b border-[#2a2a2f] p-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">
              Explore
            </h2>
            <button
              onClick={onClose}
              className="
                w-10 h-10 
                flex items-center justify-center 
                rounded-full 
                bg-[#1a1a1f] 
                border border-[#2a2a2f]
                text-[#a0a0a0] 
                hover:text-white
                transition-colors
              "
              aria-label="Close list view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Categories */}
          <div className="p-4 space-y-6">
            {categoryOrder.map((category) => {
              const categoryPins = groupedPins[category];
              if (categoryPins.length === 0) return null;
              
              return (
                <div key={category}>
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: category === 'bucket' ? 'transparent' : categoryColors[category],
                        border: category === 'bucket' ? '2px solid white' : 'none',
                      }}
                    />
                    <h3 className="text-sm font-semibold text-[#a0a0a0] uppercase tracking-wider">
                      {categoryLabels[category]}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {categoryPins.map((pin) => (
                      <button
                        key={pin.id}
                        onClick={() => {
                          onPinSelect(pin);
                          onClose();
                        }}
                        className="
                          w-full p-4
                          bg-[#111116]
                          border border-[#2a2a2f]
                          rounded-lg
                          text-left
                          hover:bg-[#1a1a1f]
                          hover:border-[#3a3a3f]
                          transition-all
                          group
                        "
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-white group-hover:text-white/90 truncate">
                              {pin.title}
                            </h4>
                            {pin.subtitle && (
                              <p className="text-sm text-[#a0a0a0] truncate">
                                {pin.subtitle}
                              </p>
                            )}
                            <div className="flex items-center gap-1 mt-1 text-xs text-[#6b6b6b]">
                              <MapPin className="w-3 h-3" />
                              <span className="truncate">{pin.location}</span>
                            </div>
                          </div>
                          <span 
                            className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                            style={{
                              backgroundColor: category === 'bucket' ? 'transparent' : categoryColors[category],
                              border: category === 'bucket' ? '1.5px solid white' : 'none',
                            }}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

