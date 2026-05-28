'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const shapes = [
    {
      id: 1,
      x: '10%',
      y: '20%',
      size: 200,
      duration: 20,
      delay: 0,
    },
    {
      id: 2,
      x: '80%',
      y: '60%',
      size: 150,
      duration: 25,
      delay: 2,
    },
    {
      id: 3,
      x: '50%',
      y: '80%',
      size: 120,
      duration: 30,
      delay: 4,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full opacity-5 dark:opacity-10"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            background: 'var(--text-primary)',
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
