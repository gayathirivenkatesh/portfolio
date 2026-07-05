'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TimelineAnimationProps {
  children: ReactNode;
}

export function TimelineAnimation({
  children,
}: TimelineAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="relative"
    >
      {/* Animated Timeline Line */}
      <motion.div
        className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/60 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: isInView ? 1 : 0,
        }}
        transition={{
          duration: 1.2,
          ease: 'easeInOut',
        }}
        style={{
          originY: 0,
        }}
      />

      {/* Timeline Content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}