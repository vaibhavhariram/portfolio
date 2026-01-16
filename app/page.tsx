'use client';

import { useState, useRef, useCallback } from 'react';
import WorldMap from '@/components/WorldMap';
import Pin from '@/components/Pin';
import PinTooltip from '@/components/PinTooltip';
import ContentCard from '@/components/ContentCard';
import Header from '@/components/Header';
import UtilityLinks from '@/components/UtilityLinks';
import Legend from '@/components/Legend';
import MobileListView from '@/components/MobileListView';
import { pins, Pin as PinType } from '@/data/pins';
import { latLngToPixel } from '@/utils/mapProjection';
import { List } from 'lucide-react';

export default function Home() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [selectedPin, setSelectedPin] = useState<PinType | null>(null);
  const [hoveredPin, setHoveredPin] = useState<PinType | null>(null);
  const [hoveredPosition, setHoveredPosition] = useState<{ x: number; y: number } | null>(null);
  const [showListView, setShowListView] = useState(false);
  
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleMapLoaded = useCallback(() => {
    setIsMapLoaded(true);
  }, []);

  const handlePinClick = useCallback((pin: PinType) => {
    setSelectedPin(pin);
    setHasInteracted(true);
    setHoveredPin(null);
  }, []);

  const handlePinHoverStart = useCallback((pin: PinType, position: { x: number; y: number }) => {
    if (!selectedPin) {
      setHoveredPin(pin);
      setHoveredPosition(position);
    }
  }, [selectedPin]);

  const handlePinHoverEnd = useCallback(() => {
    setHoveredPin(null);
    setHoveredPosition(null);
  }, []);

  const handleCloseCard = useCallback(() => {
    setSelectedPin(null);
  }, []);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Header */}
      <Header hasInteracted={hasInteracted} />
      
      {/* Utility Links */}
      <UtilityLinks />
      
      {/* Map Container */}
      <div 
        ref={mapContainerRef}
        className="absolute inset-0 flex items-center justify-center p-4 pt-32 pb-20 md:p-16"
      >
        <div className="relative w-full h-full max-w-[1400px] max-h-[900px]">
          {/* World Map SVG */}
          <WorldMap onMapLoaded={handleMapLoaded} />
          
          {/* Pins Layer */}
          <div className="absolute inset-0">
            {pins.map((pin, index) => {
              const position = latLngToPixel(pin.coordinates.lat, pin.coordinates.lng);
              return (
                <Pin
                  key={pin.id}
                  pin={pin}
                  position={position}
                  index={index}
                  isMapLoaded={isMapLoaded}
                  isSelected={selectedPin?.id === pin.id}
                  onHoverStart={() => handlePinHoverStart(pin, position)}
                  onHoverEnd={handlePinHoverEnd}
                  onClick={() => handlePinClick(pin)}
                />
              );
            })}
          </div>
          
          {/* Tooltip */}
          <PinTooltip 
            pin={hoveredPin} 
            position={hoveredPosition} 
            containerRef={mapContainerRef}
          />
        </div>
      </div>
      
      {/* Legend - Hidden on mobile */}
      <div className="hidden md:block">
        <Legend />
      </div>
      
      {/* Content Card */}
      <ContentCard pin={selectedPin} onClose={handleCloseCard} />
      
      {/* Mobile List View Toggle */}
      <div className="fixed bottom-6 right-6 z-20 md:hidden">
        <button
          className="
            flex items-center gap-2
            px-4 py-2
            bg-[#1a1a1f]
            border border-[#2a2a2f]
            rounded-full
            text-xs
            text-[#a0a0a0]
            hover:text-white
            hover:bg-[#2a2a2f]
            transition-colors
          "
          onClick={() => setShowListView(true)}
        >
          <List className="w-4 h-4" />
          View as List
        </button>
      </div>
      
      {/* Mobile Legend Toggle */}
      <div className="fixed bottom-6 left-6 z-20 md:hidden">
        <div className="flex flex-wrap gap-2 text-[10px]">
          <span className="flex items-center gap-1 text-[#6b6b6b]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
            Projects
          </span>
          <span className="flex items-center gap-1 text-[#6b6b6b]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
            Research
          </span>
          <span className="flex items-center gap-1 text-[#6b6b6b]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
            Education
          </span>
        </div>
      </div>
      
      {/* Mobile List View */}
      <MobileListView
        isOpen={showListView}
        onClose={() => setShowListView(false)}
        onPinSelect={handlePinClick}
      />
    </main>
  );
}
