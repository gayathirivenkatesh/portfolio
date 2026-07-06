"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ArrowUpRight,
} from "lucide-react";
import { profile } from "@/lib/data";
import { FusionWave } from "@/components/ui/FusionWave";
import { Typewriter } from "@/components/ui/Typewriter";
import { TiltCard } from "@/components/ui/TiltCard";
import { MouseSpotlight } from "@/components/common/MouseSpotlight";

export function Hero() {
  const [activeRole, setActiveRole] = useState(profile.roles[0]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveRole((previous) => {
        const nextIndex = profile.roles.indexOf(previous) + 1;
        return profile.roles[nextIndex % profile.roles.length];
      });
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden pt-28 pb-16"
    >
      <MouseSpotlight />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,156,249,0.15),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.12),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-muted mb-8"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          rec · {profile.status}
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.95fr] items-end">
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-[11vw] sm:text-[5.75rem] leading-[0.88] tracking-[-0.06em] text-text uppercase max-w-2xl"
            >
              <Typewriter text={profile.name} delay={0.3} speed={55} cursor />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="mt-6 max-w-3xl text-base sm:text-lg font-mono text-muted"
            >
              <p className="font-semibold text-primary/90">{profile.title}</p>
              <p className="mt-3 leading-relaxed">{profile.subtitle}</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="mt-8 max-w-3xl text-sm sm:text-base leading-relaxed text-muted"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <span className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                ./connect
                <ArrowUpRight size={16} />
              </a>
              <a
                href="/Gayathiri_V_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-all hover:border-primary hover:text-primary"
              >
                <Download size={16} />
                resume.pdf
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-5 text-muted"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-secondary hover:text-secondary"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Mail size={18} />
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-muted">
                <MapPin size={14} />
                {profile.location}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.65 }}
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
              <span className="font-medium">{activeRole}</span>
            </motion.div>
          </div>

          <TiltCard className="glass bracket relative overflow-hidden rounded-[2rem] border border-border p-6 shadow-2xl shadow-primary/10">
            <div className="absolute -right-12 top-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
            <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-muted mb-3">
              signature_project.wav
            </p>
            <p className="text-sm text-text/80 font-mono mb-6">
              adaptive_confidence_fusion — live
            </p>
            <FusionWave />
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
