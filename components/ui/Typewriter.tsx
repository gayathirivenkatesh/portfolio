'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
}

export function Typewriter({
  text,
  speed = 70,
  delay = 300,
  cursor = true,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');

    let index = 0;

    const start = setTimeout(() => {
      const interval = setInterval(() => {
        index++;

        setDisplayedText(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speed);

    }, delay);

    return () => {
      clearTimeout(start);
    };
  }, [text, speed, delay]);

  return (
    <>
      {displayedText}

      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
        >
          |
        </motion.span>
      )}
    </>
  );
}