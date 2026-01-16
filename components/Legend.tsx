'use client';

import { motion } from 'framer-motion';
import { categoryColors, categoryLabels, PinCategory } from '@/data/pins';

const categories: PinCategory[] = [
  'projects',
  'research',
  'education',
  'personal',
  'travel',
  'bucket',
  'interests',
];

export default function Legend() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="fixed bottom-6 left-6 z-20 flex flex-wrap gap-x-4 gap-y-2 text-xs max-w-[400px]"
    >
      {categories.map((category) => (
        <span
          key={category}
          className="flex items-center gap-1.5 text-[#a0a0a0]"
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{
              backgroundColor: category === 'bucket' ? 'transparent' : categoryColors[category],
              border: category === 'bucket' ? '1.5px solid white' : 'none',
            }}
          />
          {categoryLabels[category]}
        </span>
      ))}
    </motion.footer>
  );
}

