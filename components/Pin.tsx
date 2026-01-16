'use client';

import { motion } from 'framer-motion';
import { Pin as PinType, categoryColors } from '@/data/pins';
import { MAP_DIMENSIONS } from '@/utils/mapProjection';

interface PinProps {
  pin: PinType;
  position: { x: number; y: number };
  index: number;
  isMapLoaded: boolean;
  isSelected: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
}

export default function Pin({
  pin,
  position,
  index,
  isMapLoaded,
  isSelected,
  onHoverStart,
  onHoverEnd,
  onClick,
}: PinProps) {
  const color = categoryColors[pin.category];
  const isBucket = pin.category === 'bucket';
  
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={isMapLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ 
        delay: index * 0.05,
        duration: 0.3,
        type: 'spring',
        stiffness: 500,
        damping: 25
      }}
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      className={`
        absolute w-4 h-4 md:w-3 md:h-3 rounded-full cursor-pointer
        transition-shadow duration-200
        focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0f]
        ${isBucket 
          ? 'border-[1.5px] border-white bg-transparent hover:bg-white/20' 
          : ''
        }
        ${pin.featured && !isBucket ? 'featured-pin' : ''}
        ${isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0a0a0f]' : ''}
      `}
      style={{
        left: `${(position.x / MAP_DIMENSIONS.width) * 100}%`,
        top: `${(position.y / MAP_DIMENSIONS.height) * 100}%`,
        transform: 'translate(-50%, -50%)',
        backgroundColor: isBucket ? 'transparent' : color,
        boxShadow: isBucket ? 'none' : `0 0 8px ${color}`,
        ['--pulse-color' as string]: color,
      }}
      aria-label={`${pin.title} - ${pin.location}`}
    />
  );
}

