"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass bracket relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-lg p-8"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <X size={18} />
            </button>

            <span className="text-xs font-mono uppercase tracking-wider text-muted">
              {project.category}
            </span>
            <h3
              id="project-modal-title"
              className="font-display font-bold text-2xl text-text mt-2 pr-10"
            >
              {project.name}
            </h3>
            <p className="text-muted mt-2">{project.tagline}</p>

            {project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                {project.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-white/5 p-3">
                    <p className="font-display font-bold text-lg gradient-text">
                      {m.value}
                    </p>
                    <p className="text-xs text-muted mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            <ul className="mt-6 space-y-3">
              {project.points.map((point) => (
                <li
                  key={point}
                  className="text-sm text-muted leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-primary/60"
                >
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Github size={16} /> Source
                </a>
              )}
              {"demo" in project.links && project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-background px-5 py-2.5 text-sm font-medium hover:scale-[1.03] transition-transform"
                >
                  <ExternalLink size={16} /> Live demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
