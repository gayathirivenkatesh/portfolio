"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function ProjectCard({
  project,
  onOpen,
  index,
}: {
  project: Project;
  onOpen: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <TiltCard className="glass bracket rounded-lg p-6 flex flex-col h-full hover:border-primary/40 transition-colors">
        <div className="flex items-start justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-muted">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-secondary/15 text-secondary">
              Featured
            </span>
          )}
        </div>

        <h3 className="font-display font-semibold text-lg text-text mt-3">
          {project.name}
        </h3>
        <p className="text-sm text-muted mt-2 leading-relaxed flex-1">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-muted">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all"
          >
            Details <ArrowRight size={14} />
          </button>
          <div className="flex items-center gap-3 text-muted">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="hover:text-primary transition-colors"
              >
                <Github size={16} />
              </a>
            )}
            {"demo" in project.links && project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} live demo`}
                className="hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
