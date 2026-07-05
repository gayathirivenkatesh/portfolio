"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/common/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

const filters = ["All", "Academic Project", "Personal Project"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
              ch.04 — projects
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text max-w-2xl">
              Things I&apos;ve actually built and shipped.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  filter === f
                    ? "bg-primary text-background border-primary"
                    : "border-border text-muted hover:text-text hover:border-primary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
