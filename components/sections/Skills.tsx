"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/common/Reveal";
import { SkillsConstellation } from "@/components/ui/SkillsConstellation";
import { skills, type SkillCategory } from "@/lib/data";

const categories = Object.keys(skills) as SkillCategory[];

export function Skills() {
  const [active, setActive] = useState<SkillCategory | "All">("All");
  const [query, setQuery] = useState("");
  const [showVisualization, setShowVisualization] = useState(true);

  const visible = useMemo(() => {
    const cats = active === "All" ? categories : [active];
    return cats
      .map((cat) => ({
        category: cat,
        items: skills[cat].filter((s) =>
          s.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [active, query]);

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
            ch.02 — skills
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text max-w-2xl">
            Tools for the full stack — and the ML layer on top.
          </h2>
        </Reveal>

        {/* Interactive Constellation Visualization */}
        <Reveal delay={0.1} className="mt-10">
          <SkillsConstellation />
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActive("All")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                active === "All"
                  ? "bg-primary text-background border-primary"
                  : "border-border text-muted hover:text-text hover:border-primary/40"
              }`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  active === c
                    ? "bg-primary text-background border-primary"
                    : "border-border text-muted hover:text-text hover:border-primary/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a skill…"
            aria-label="Search skills"
            className="glass rounded-full px-4 py-2 text-sm text-text placeholder:text-muted/70 outline-none focus:border-primary/50 w-full sm:w-56"
          />
        </Reveal>

        <div className="mt-10 space-y-8">
          {visible.map((group) => (
            <div key={group.category}>
              <p className="text-sm font-mono text-muted mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.02 }}
                    whileHover={{ y: -2 }}
                    className="glass rounded-md px-4 py-2 text-sm font-mono text-text hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
          {visible.length === 0 && (
            <p className="text-muted text-sm">No skills match &ldquo;{query}&rdquo;.</p>
          )}
        </div>
      </div>
    </section>
  );
}
