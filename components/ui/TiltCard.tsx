'use client';

import { ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({
  children,
  className = '',
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
  });

  const springY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(-(y - centerY) / 18);
    rotateY.set((x - centerX) / 18);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 18,
      }}
      className={`
        will-change-transform
        rounded-3xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}