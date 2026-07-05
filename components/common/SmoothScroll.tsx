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
        direction: 'vertical' as const,
        gestureDirection: 'vertical' as const,
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
