'use client';

import { useState, useEffect } from 'react';

const RAYS = [0, 45, 90, 135, 180, 225, 270, 315];

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

  // The icon shows the mode a click switches to: moon in light, sun in dark.
  return (
    <button
      onClick={toggle}
      className="theme-toggle fixed top-5 right-5 z-50 w-10 h-10 flex items-center justify-center rounded-full border border-[var(--rule)] bg-[var(--paper-bg)] text-[var(--ink)] cursor-pointer"
      data-mode={dark ? 'dark' : 'light'}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      <svg
        className="theme-toggle-icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <g className="theme-toggle-sun">
          <circle cx="12" cy="12" r="4" />
          {RAYS.map((deg, i) => (
            <g key={deg} transform={`rotate(${deg} 12 12)`}>
              <line
                className="theme-toggle-ray"
                style={{ transitionDelay: dark ? `${120 + i * 30}ms` : '0ms' }}
                x1="12"
                y1="2.5"
                x2="12"
                y2="4.5"
              />
            </g>
          ))}
        </g>
        <path
          className="theme-toggle-moon"
          d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"
        />
      </svg>
    </button>
  );
}
