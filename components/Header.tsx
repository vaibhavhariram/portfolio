'use client';

import { motion } from 'framer-motion';

interface HeaderProps {
  hasInteracted: boolean;
}

export default function Header({ hasInteracted }: HeaderProps) {
  return (
    <header className="fixed top-4 left-4 md:top-6 md:left-6 z-20 max-w-[calc(100%-120px)] md:max-w-md">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
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
        animate={{ opacity: hasInteracted ? 0 : 1 }}
        transition={{ duration: 0.5, delay: hasInteracted ? 0 : 1 }}
        className="mt-3 md:mt-4 hidden md:block"
      >
        <p className="text-xs text-[#6b6b6b] italic">
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

