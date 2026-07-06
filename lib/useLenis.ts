import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    let lenis: any;
    let rafId: number;

    const initLenis = async () => {
      const { default: Lenis } = await import("lenis");

      lenis = new Lenis({
        duration: 1.2,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      cancelAnimationFrame(rafId);

      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);
}