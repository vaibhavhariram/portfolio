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
      className="fixed bottom-6 left-6 z-20 flex flex-wrap gap-x-5 gap-y-3 text-[14px] max-w-[450px]"
    >
      {categories.map((category) => (
        <span
          key={category}
          className="flex items-center gap-2 text-white"
        >
          <span
            className="w-[10px] h-[10px] rounded-full flex-shrink-0"
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

