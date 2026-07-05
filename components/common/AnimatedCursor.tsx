'use client';

import { useEffect, useRef } from 'react';

export function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(0.8)';
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1)';
      }
    };

    const animate = () => {
      const { x, y } = mousePos.current;

      // Smooth follow
      cursorPos.current.x += (x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (y - cursorPos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRef.current.style.top = `${cursorPos.current.y}px`;
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer cursor ring */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed w-8 h-8 border-2 border-primary rounded-full z-[100] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 hidden lg:block"
        aria-hidden="true"
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed w-2 h-2 bg-primary rounded-full z-[100] transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        aria-hidden="true"
      />
    </>
  );
}
