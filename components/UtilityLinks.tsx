'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';
import { useState } from 'react';

interface LinkItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  download?: boolean;
}

const links: LinkItem[] = [
  {
    href: 'https://github.com/vaibhav',
    label: 'GitHub',
    icon: <Github className="w-5 h-5" />,
  },
  {
    href: 'https://linkedin.com/in/vaibhav',
    label: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    href: '/resume.pdf',
    label: 'Resume',
    icon: <FileText className="w-5 h-5" />,
    download: true,
  },
  {
    href: 'mailto:vaibhav@email.com',
    label: 'Email',
    icon: <Mail className="w-5 h-5" />,
  },
];

export default function UtilityLinks() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-20 flex gap-2 md:gap-4"
    >
      {links.map((link) => (
        <div key={link.label} className="relative">
          <a
            href={link.href}
            aria-label={link.label}
            download={link.download}
            target={link.download ? undefined : '_blank'}
            rel={link.download ? undefined : 'noopener noreferrer'}
            className="
              block p-2
              text-white/60 
              hover:text-white 
              transition-colors duration-200
            "
            onMouseEnter={() => setHoveredLink(link.label)}
            onMouseLeave={() => setHoveredLink(null)}
            onFocus={() => setHoveredLink(link.label)}
            onBlur={() => setHoveredLink(null)}
          >
            {link.icon}
          </a>
          
          {/* Tooltip */}
          {hoveredLink === link.label && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                absolute top-full left-1/2 -translate-x-1/2 mt-2
                px-2 py-1
                bg-[#1a1a1f]/95
                border border-[#2a2a2f]
                rounded
                text-xs text-white
                whitespace-nowrap
                pointer-events-none
              "
            >
              {link.label}
            </motion.div>
          )}
        </div>
      ))}
    </motion.nav>
  );
}

