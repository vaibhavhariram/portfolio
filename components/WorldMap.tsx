'use client';

import { useEffect, useState } from 'react';

interface WorldMapProps {
  onMapLoaded?: () => void;
}

export default function WorldMap({ onMapLoaded }: WorldMapProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadSvg = async () => {
      try {
        const response = await fetch('/blackmap.svg');
        const text = await response.text();
        if (isMounted) {
          setSvgContent(text);
        }
      } catch {
        if (isMounted) {
          setSvgContent(null);
        }
      }
    };

    loadSvg();

    return () => {
      isMounted = false;
    };
  }, [onMapLoaded]);

  useEffect(() => {
    if (!svgContent) return;

    // Trigger callback after animation completes
    const timer = setTimeout(() => {
      onMapLoaded?.();
    }, 2500);

    return () => clearTimeout(timer);
  }, [svgContent, onMapLoaded]);

  return (
    <div
      className="w-full h-full"
      aria-label="World map"
      role="img"
      dangerouslySetInnerHTML={{ __html: svgContent ?? '' }}
    />
  );
}
