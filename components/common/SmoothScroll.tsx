'use client';

import { useEffect } from 'react';

export function SmoothScroll() {
  useEffect(() => {
    // Dynamically import and init Lenis
    let lenis: any;

    const initLenis = async () => {
      const { default: Lenis } = await import('lenis');
      
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 2,
        wheelMultiplier: 1.05,
        autoRaf: true,
      });
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
