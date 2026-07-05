'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;

    const node = nodeRef.current;
    const controls = {
      from: from,
      to: to,
    };

    const updateDisplay = (value: number) => {
      node.textContent =
        prefix + value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;
    };

    updateDisplay(from);

    let startTime: number | null = null;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const value = from + (to - from) * easeOutQuad;

      updateDisplay(value);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [from, to, duration, suffix, prefix, decimals]);

  return <span ref={nodeRef} />;
}
