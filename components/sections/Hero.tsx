"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Download, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { FusionWave } from "@/components/ui/FusionWave";
import { Typewriter } from "@/components/ui/Typewriter";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          rec · {profile.status}
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-10 items-end">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-[13vw] sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-text uppercase break-words"
            >
              <Typewriter
                text={profile.name}
                delay={0.3}
                speed={60}
                cursor={true}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 text-lg sm:text-xl font-mono text-muted"
            >
              <span className="gradient-text font-semibold">
                {profile.title}
              </span>{" "}
              {"// "}
              {profile.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-muted font-body"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-md bg-primary text-background font-mono font-medium px-6 py-3 text-sm transition-transform hover:scale-[1.02] active:scale-95"
              >
                ./connect
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="/Gayathiri_V_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-mono text-text hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Download size={16} />
                resume.pdf
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex items-center gap-5 text-muted"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="hover:text-primary transition-colors"
              >
                <Mail size={18} />
              </a>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono">
                <MapPin size={14} />
                {profile.location}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass bracket rounded-lg p-5"
          >
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted mb-1">
              signature_project.wav
            </p>
            <p className="text-sm text-text font-mono mb-4">
              adaptive_confidence_fusion — live
            </p>
            <FusionWave />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
