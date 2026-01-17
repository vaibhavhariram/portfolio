'use client';

import { motion } from 'framer-motion';

interface HeaderProps {
  hasInteracted: boolean;
  isMapLoaded: boolean;
}

export default function Header({ hasInteracted, isMapLoaded }: HeaderProps) {
  return (
    <header className="fixed top-4 left-4 md:top-6 md:left-6 z-20 max-w-[calc(100%-120px)] md:max-w-md">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMapLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-newsreader)] tracking-tight">
          VAIBHAV HARIRAM
        </h1>
        <p className="text-xs md:text-sm text-[#a0a0a0] mt-1">
          UC Berkeley CS & Geography &apos;28 · Geospatial AI/ML
        </p>
        <p className="text-xs md:text-sm text-[#a0a0a0] hidden md:block">
          Building AI for cities, intelligence for the physical world
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMapLoaded && !hasInteracted ? 1 : 0 }}
        transition={{ duration: 0.5, delay: isMapLoaded && !hasInteracted ? 0.3 : 0 }}
        className="mt-4 hidden md:block"
      >
        <p className="text-[13px] text-[#6b6b6b] italic leading-relaxed">
          Welcome to the map of my life.
          <br />
          Click a pin to start exploring.
        </p>
        <p className="text-[10px] text-[#4a4a4a] mt-2">
          this is my portfolio and personal website
        </p>
      </motion.div>
    </header>
  );
}

