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
        let text = await response.text();
        
        if (isMounted) {
          // Process the SVG to apply proper styling
          // 1. Update the root SVG element attributes
          text = text.replace(
            /<svg([^>]*)>/,
            (match, attrs) => {
              // Remove existing fill, stroke, stroke-width from SVG root
              let newAttrs = attrs
                .replace(/\s*fill="[^"]*"/g, '')
                .replace(/\s*stroke="[^"]*"/g, '')
                .replace(/\s*stroke-width="[^"]*"/g, '')
                .replace(/\s*stroke-linecap="[^"]*"/g, '')
                .replace(/\s*stroke-linejoin="[^"]*"/g, '');
              
              // Add preserveAspectRatio and ensure viewBox is present
              if (!newAttrs.includes('preserveAspectRatio')) {
                newAttrs += ' preserveAspectRatio="xMidYMid meet"';
              }
              
              return `<svg${newAttrs} class="world-map-svg">`;
            }
          );
          
          // 2. Add map-path class to all path elements for animation
          text = text.replace(/<path/g, '<path class="map-path"');
          
          // 3. Fix any existing class attributes that got duplicated
          text = text.replace(/class="map-path" class="/g, 'class="map-path ');
          
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
  }, []);

  useEffect(() => {
    if (!svgContent) return;

    // Trigger callback after animation completes (~2s for draw + buffer)
    const timer = setTimeout(() => {
      onMapLoaded?.();
    }, 2200);

    return () => clearTimeout(timer);
  }, [svgContent, onMapLoaded]);

  return (
    <div
      className="w-full h-full world-map-container"
      aria-label="World map"
      role="img"
      dangerouslySetInnerHTML={{ __html: svgContent ?? '' }}
    />
  );
}
