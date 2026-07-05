"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sections = [
  { id: "top", label: "HERO" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "education", label: "EDUCATION" },
  { id: "contact", label: "CONTACT" },
];

/**
 * A fixed instrument readout that stays on screen through the whole
 * scroll, styled like an oscilloscope's corner HUD. It reports which
 * "channel" (section) is active and a confidence value that climbs
 * with scroll depth — a literal, functioning echo of the Emotion
 * Reliability Index from the flagship project, not a decoration.
 */
export function ConsoleHUD() {
  const { scrollYProgress } = useScroll();
  const confidence = useTransform(scrollYProgress, [0, 1], [12, 97]);
  const [display, setDisplay] = useState("012");
  const [active, setActive] = useState("HERO");

  useEffect(() => {
    const unsub = confidence.on("change", (v) =>
      setDisplay(Math.round(v).toString().padStart(3, "0"))
    );
    return () => unsub();
  }, [confidence]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.id === entry.target.id);
            if (match) setActive(match.label);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="fixed bottom-5 right-5 z-40 hidden sm:block"
      aria-hidden="true"
    >
      <div className="glass bracket rounded-lg px-4 py-3 font-mono text-[10px] leading-relaxed">
        <p className="text-muted uppercase tracking-wider">
          CH · <span className="text-primary">{active}</span>
        </p>
        <p className="text-text mt-1">
          CONF <span className="text-secondary">{display}</span>
          <span className="text-muted">/100</span>
        </p>
      </div>
    </motion.div>
  );
}
