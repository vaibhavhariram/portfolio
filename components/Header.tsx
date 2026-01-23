'use client';

import { motion } from 'framer-motion';

interface HeaderProps {
  hasInteracted: boolean;
  isMapLoaded: boolean;
}

export default function Header({ hasInteracted, isMapLoaded }: HeaderProps) {
  return (
    <header className="fixed top-4 left-4 md:top-6 md:left-6 z-20 max-w-[calc(100%-120px)] md:max-w-lg">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMapLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[28px] md:text-[32px] font-bold tracking-tight text-white">
          VAIBHAV HARIRAM
        </h1>
        <p className="text-[14px] md:text-[16px] text-white mt-1">
          CS @ UC Berkeley · Geospatial AI/ML · Building AI for cities, intelligence for the physical world
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMapLoaded && !hasInteracted ? 1 : 0 }}
        transition={{ duration: 0.5, delay: isMapLoaded && !hasInteracted ? 0.3 : 0 }}
        className="mt-4 hidden md:block"
      >
        <p className="text-[15px] text-white leading-relaxed">
          Welcome to the map of my life. Click a pin to start exploring.
        </p>
        <p className="text-[12px] text-white mt-2">
          this is my portfolio and personal website
        </p>
      </motion.div>
    </header>
  );
}

