'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SkillBubble {
  name: string;
  category: string;
  x: number;
  y: number;
  radius: number;
}

export function SkillsConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<SkillBubble[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Sample skills data
    const skills = [
      { name: 'React', category: 'Frontend', radius: 8 },
      { name: 'TypeScript', category: 'Language', radius: 7 },
      { name: 'Next.js', category: 'Frontend', radius: 8 },
      { name: 'Python', category: 'Language', radius: 7 },
      { name: 'Node.js', category: 'Backend', radius: 8 },
      { name: 'PostgreSQL', category: 'Database', radius: 7 },
      { name: 'AWS', category: 'Cloud', radius: 7 },
      { name: 'Docker', category: 'DevOps', radius: 6 },
    ];

    // Initialize bubbles with random positions
    bubblesRef.current = skills.map((skill, i) => ({
      ...skill,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(5, 8, 22, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const bubbles = bubblesRef.current;

      // Draw connections
      ctx.strokeStyle = 'rgba(100, 255, 218, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const dx = bubbles[i].x - bubbles[j].x;
          const dy = bubbles[i].y - bubbles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.globalAlpha = 1 - dist / 150;
            ctx.beginPath();
            ctx.moveTo(bubbles[i].x, bubbles[i].y);
            ctx.lineTo(bubbles[j].x, bubbles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;

      // Update and draw bubbles
      bubbles.forEach((bubble) => {
        const dx = mouseRef.current.x - bubble.x;
        const dy = mouseRef.current.y - bubble.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        // Repel from mouse
        if (distance < maxDistance) {
          const angle = Math.atan2(dy, dx);
          const force = (1 - distance / maxDistance) * 2;
          bubble.x -= Math.cos(angle) * force;
          bubble.y -= Math.sin(angle) * force;
        }

        // Boundary wrap
        if (bubble.x < 0) bubble.x = canvas.width;
        if (bubble.x > canvas.width) bubble.x = 0;
        if (bubble.y < 0) bubble.y = canvas.height;
        if (bubble.y > canvas.height) bubble.y = 0;

        // Draw bubble
        ctx.fillStyle = 'rgba(100, 255, 218, 0.6)';
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow
        ctx.strokeStyle = 'rgba(100, 255, 218, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius + 3, 0, Math.PI * 2);
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border bg-card/30">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p className="text-sm text-muted font-mono">Move your mouse to interact</p>
      </div>
    </div>
  );
}
