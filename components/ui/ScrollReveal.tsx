'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function ScrollReveal({ children, delay = 0, direction = 'up' }: ScrollRevealProps) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.23, 1, 0.32, 1],
        },
      });
    }
  }, [isInView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
