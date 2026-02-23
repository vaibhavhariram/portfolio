'use client';

import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
  suffix?: React.ReactNode;
  onComplete?: () => void;
}

export default function Typewriter({
  text,
  speed = 50,
  startDelay = 0,
  showCursor = true,
  cursorChar = '|',
  className = '',
  suffix,
  onComplete,
}: TypewriterProps) {
  const [displayLength, setDisplayLength] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (text.length === 0) {
      setIsComplete(true);
      onCompleteRef.current?.();
      return;
    }

    const startTimer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        index += 1;
        setDisplayLength(index);
        if (index >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
          onCompleteRef.current?.();
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, speed, startDelay]);

  // Blink cursor while typing
  useEffect(() => {
    if (!showCursor || isComplete) return;
    const blink = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(blink);
  }, [showCursor, isComplete]);

  return (
    <span className={className}>
      {text.slice(0, displayLength)}
      {showCursor && !isComplete && (
        <span className="inline-block align-baseline text-current" aria-hidden>
          {cursorVisible ? cursorChar : '\u00A0'}
        </span>
      )}
      {isComplete && suffix}
    </span>
  );
}
