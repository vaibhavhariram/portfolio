'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Typewriter from '@/components/Typewriter';

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
        <h1 className="text-[28px] md:text-[32px] font-bold tracking-tight text-[#ffffff] min-h-[1.2em]">
          {isMapLoaded && (
            <Typewriter
              text="vaibhav hariram"
              speed={55}
              startDelay={700}
              showCursor={true}
            />
          )}
        </h1>
        <p className="text-[14px] md:text-[16px] text-[#d0d0d0] mt-1 min-h-[1.2em]">
          {isMapLoaded && (
            <Typewriter
              text="cs @ uc berkeley · geospatial ai/ml · building ai for cities, intelligence for the physical world"
              speed={18}
              startDelay={1600}
              showCursor={true}
            />
          )}
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMapLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, delay: isMapLoaded ? 0.3 : 0 }}
        className="mt-6 hidden md:block space-y-1"
      >
        {!hasInteracted && (
          <p className="text-[14px] md:text-[16px] text-[#d0d0d0] leading-relaxed min-h-[1.5em]">
            <Typewriter
              text="click a pin to start exploring. or for a traditional viewing experience, "
              speed={22}
              startDelay={3500}
              showCursor={true}
              suffix={
                <Link 
                  href="/traditional" 
                  className="underline underline-offset-2 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded"
                >
                  click here
                </Link>
              }
            />
          </p>
        )}
        {hasInteracted && (
          <p className="text-[14px] md:text-[16px] text-[#d0d0d0]">
            <Link 
              href="/traditional" 
              className="underline underline-offset-2 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] rounded"
            >
              View traditional portfolio →
            </Link>
          </p>
        )}
      </motion.div>
    </header>
  );
}

