'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function MouseSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;

      const { clientX, clientY } = e;
      spotlightRef.current.style.left = `${clientX}px`;
      spotlightRef.current.style.top = `${clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed w-96 h-96 -translate-x-1/2 -translate-y-1/2 z-10"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
