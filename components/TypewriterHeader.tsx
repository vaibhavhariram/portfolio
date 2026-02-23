'use client';

import { useState, useEffect } from 'react';

const FULL_TEXT = 'Vaibhav Hariram';
const TYPING_MS = 80;
const CURSOR_BLINK_MS = 530;

export default function TypewriterHeader() {
  const [visibleLength, setVisibleLength] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);

  // Type out character by character
  useEffect(() => {
    if (visibleLength >= FULL_TEXT.length) return;
    const t = setTimeout(() => setVisibleLength((n) => n + 1), TYPING_MS);
    return () => clearTimeout(t);
  }, [visibleLength]);

  // Blinking cursor
  useEffect(() => {
    const t = setInterval(() => setCursorOn((c) => !c), CURSOR_BLINK_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight font-mono">
      {FULL_TEXT.slice(0, visibleLength)}
      <span
        className={`inline-block w-0.5 h-[1em] align-sub ml-0.5 bg-[var(--text-primary)] transition-opacity duration-75 ${
          cursorOn ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden
      />
    </h1>
  );
}
