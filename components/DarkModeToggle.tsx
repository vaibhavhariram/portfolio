'use client';

import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    setDark(stored === 'dark');
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const theme = next ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="fixed top-5 right-5 z-50 w-10 h-10 flex items-center justify-center rounded-full border border-[var(--rule)] bg-[var(--paper-bg)] text-xl cursor-pointer transition-all duration-300 hover:scale-110 shadow-sm"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      <span className="transition-transform duration-300" style={{ display: 'inline-block', transform: dark ? 'rotate(0deg)' : 'rotate(-20deg)' }}>
        {dark ? '\u2600\uFE0F' : '\uD83C\uDF19'}
      </span>
    </button>
  );
}
