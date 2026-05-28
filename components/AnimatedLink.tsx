'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  className?: string;
}

export default function AnimatedLink({
  href,
  children,
  target,
  rel,
  className,
}: AnimatedLinkProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ display: 'inline-block' }}
    >
      <Link href={href} target={target} rel={rel} className={className}>
        {children}
      </Link>
    </motion.span>
  );
}
