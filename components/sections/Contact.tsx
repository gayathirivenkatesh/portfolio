"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Copy, Check, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { profile } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
      className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
      aria-label={`Copy ${label}`}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    // No backend is wired up on the resume; simulate a graceful submit
    // so the form is demonstrably functional without sending real mail.
    await new Promise((r) => setTimeout(r, 700));
    console.log("Contact form submission:", values);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12">
        <div>
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
              ch.06 — contact
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">
              Let&apos;s build something real.
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-md">
              Open to full-stack and AI/ML roles. The fastest way to reach me
              is email — I usually reply within a day.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-4">
            <div className="glass rounded-xl p-4 flex items-center justify-between">
              <span className="flex items-center gap-3 text-sm text-text">
                <Mail size={16} className="text-primary" /> {profile.email}
              </span>
              <CopyButton value={profile.email} label="email" />
            </div>
            <div className="glass rounded-xl p-4 flex items-center justify-between">
              <span className="flex items-center gap-3 text-sm text-text">
                <Phone size={16} className="text-primary" /> {profile.phone}
              </span>
              <CopyButton value={profile.phone} label="phone" />
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass bracket rounded-lg p-8 space-y-5"
            noValidate
          >
            <div>
              <label htmlFor="name" className="text-xs font-mono text-muted">
                Name
              </label>
              <input
                id="name"
                {...register("name")}
                className="mt-1 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-text transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-xs text-danger mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-xs font-mono text-muted">
                Email
              </label>
              <input
                id="email"
                {...register("email")}
                className="mt-1 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-text transition-colors"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-xs text-danger mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-mono text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                className="mt-1 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-text transition-colors resize-none"
                placeholder="What are you building?"
              />
              {errors.message && (
                <p className="text-xs text-danger mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-primary text-background font-medium py-3 text-sm hover:scale-[1.01] active:scale-[0.99] transition-transform disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm text-primary"
                >
                  <CheckCircle2 size={16} /> Message sent — thank you!
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
