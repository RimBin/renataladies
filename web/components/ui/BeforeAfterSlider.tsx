'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ActionIcon } from './ActionIcon';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'PRIEŠ',
  afterLabel = 'PO',
  alt,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const currentRef = containerRef.current;
    if (currentRef) {
      currentRef.addEventListener('pointerenter', () => setIsHovering(true));
      currentRef.addEventListener('pointerleave', () => setIsHovering(false));
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('pointerenter', () => setIsHovering(true));
        currentRef.removeEventListener('pointerleave', () => setIsHovering(false));
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[2/3] overflow-hidden rounded-t-2xl cursor-ew-resize select-none group bg-neutral-100"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onPointerMove={handlePointerMove}
    >
      <AnimatePresence>
        {isHovering && !isDragging && (
          <motion.div
            style={{
              position: 'absolute',
              left: mousePosition.x,
              top: mousePosition.y,
              x: '-50%',
              y: '-50%',
              zIndex: 20,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            <ActionIcon />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Before Image (base layer) */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt={`${alt} - prieš`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        {/* Before Label */}
        <div className="absolute top-3 left-3 bg-black/60 text-white px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider backdrop-blur-sm pointer-events-none">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (clipped layer) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src={afterImage}
          alt={`${alt} - po`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        {/* After Label */}
        <div className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider backdrop-blur-sm pointer-events-none">
          {afterLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/80 backdrop-blur-sm cursor-ew-resize -translate-x-1/2 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
        style={{ left: `${sliderPosition}%` }}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-white/90 shadow-xl backdrop-blur-md flex items-center justify-center"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <svg className="w-6 h-6 text-neutral-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
          </svg>
        </div>
      </div>

      {/* Initial Hint (removed for cleaner look, but keeping code for reference) */}
      {/* 
      <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
        <div className="p-4 bg-white/80 rounded-full shadow-lg backdrop-blur-sm">
          <svg className="w-8 h-8 text-neutral-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h18m-7.5 4.5L21 16.5m0 0L16.5 12M21 16.5H3" />
          </svg>
        </div>
      </div> 
      */}
    </div>
  );
}
