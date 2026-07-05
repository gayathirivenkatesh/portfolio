"use client";

import { useEffect, useRef } from "react";

/**
 * Signature visual: two independent waveforms (audio + visual signal)
 * converge into a single fused line with a live "confidence" readout —
 * a direct, literal reference to the Adaptive Confidence-Based
 * Audio-Visual Emotion Fusion project. Drawn on canvas for performance;
 * respects prefers-reduced-motion by freezing on a single static frame.
 */
export function FusionWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let t = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const mid = h / 2;
      const points = 140;

      // Audio waveform (phosphor green) - upper contribution
      ctx.beginPath();
      ctx.strokeStyle = "#39FF6A";
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.55;
      for (let i = 0; i <= points; i++) {
        const x = (i / points) * w;
        const decay = Math.max(0, 1 - i / points - 0.15);
        const y =
          mid -
          Math.sin(i * 0.35 + t) * 14 * decay -
          Math.sin(i * 0.09 + t * 0.6) * 6 * decay;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Visual waveform (amber) - lower contribution
      ctx.beginPath();
      ctx.strokeStyle = "#FFB020";
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.55;
      for (let i = 0; i <= points; i++) {
        const x = (i / points) * w;
        const decay = Math.max(0, 1 - i / points - 0.15);
        const y =
          mid +
          Math.cos(i * 0.32 + t * 1.1) * 12 * decay +
          Math.sin(i * 0.13 + t * 0.4) * 5 * decay;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Fused signal (bright, solid) - the confidence-weighted result
      ctx.beginPath();
      ctx.strokeStyle = "#E6EDF3";
      ctx.lineWidth = 2.25;
      ctx.globalAlpha = 0.9;
      for (let i = 0; i <= points; i++) {
        const x = (i / points) * w;
        const fade = i / points; // fusion strengthens left -> right
        const a =
          Math.sin(i * 0.35 + t) * 14 -
          Math.sin(i * 0.09 + t * 0.6) * 6;
        const b =
          Math.cos(i * 0.32 + t * 1.1) * 12 +
          Math.sin(i * 0.13 + t * 0.4) * 5;
        const y = mid + (a * 0.5 + b * 0.5) * fade;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.globalAlpha = 1;

      if (!reducedMotion) {
        t += 0.018;
        raf = requestAnimationFrame(draw);
      }
    }

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full h-40 sm:h-52">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        aria-hidden="true"
        role="presentation"
      />
      <div className="absolute -bottom-1 left-0 right-0 flex justify-between text-[10px] sm:text-xs font-mono text-muted px-1 uppercase tracking-wider">
        <span className="text-primary">ch.a — audio</span>
        <span className="text-text/70">fused · 0.85 conf</span>
        <span className="text-secondary">ch.v — visual</span>
      </div>
    </div>
  );
}
