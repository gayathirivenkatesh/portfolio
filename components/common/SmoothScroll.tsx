"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let lenis: any;
    let animationFrameId: number;

    const initLenis = async () => {
      const { default: Lenis } = await import("lenis");

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      };

      animationFrameId = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis?.destroy();
    };
  }, []);

  return null;
}