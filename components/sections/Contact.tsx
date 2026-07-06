"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Copy,
  Check,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { profile } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(4, "Please enter a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "sending" | "success" | "error";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
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
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (status === "success") {
      const timeout = window.setTimeout(() => setStatus("idle"), 5000);
      return () => window.clearTimeout(timeout);
    }

    if (status === "error") {
      const timeout = window.setTimeout(() => setStatus("idle"), 5000);
      return () => window.clearTimeout(timeout);
    }
  }, [status]);

  async function onSubmit(values: FormValues) {
    setStatus("sending");
    setServerError(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setServerError("Email service is not configured. Please check environment variables.");
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: values.name,
            from_email: values.email,
            subject: values.subject,
            message: values.message,
            reply_to: values.email,
            phone: profile.phone,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("EmailJS request failed.");
      }

      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setServerError(
        "Unable to send your message right now. Please try again later or contact me directly."
      );
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
              ch.06 — contact
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">
              Let&apos;s build something real.
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-md">
              Open to full-stack and AI/ML opportunities. Send a message or use
              the quick contact buttons for email and phone.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-4">
            <div className="glass rounded-3xl border border-border p-5 shadow-lg shadow-primary/5 transition hover:border-primary/40">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-sm text-text">
                  <Mail size={18} className="text-primary" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CopyButton value={profile.email} label="email" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-xs text-muted transition-colors hover:border-primary hover:text-primary"
                  >
                    <ExternalLink size={12} /> Email
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl border border-border p-5 shadow-lg shadow-secondary/5 transition hover:border-secondary/40">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-sm text-text">
                  <Phone size={18} className="text-secondary" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CopyButton value={profile.phone} label="phone" />
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-xs text-muted transition-colors hover:border-secondary hover:text-secondary"
                  >
                    <ExternalLink size={12} /> Call
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-secondary transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted hover:text-accent transition-colors"
                aria-label="Email"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass bracket rounded-3xl border border-border p-8 space-y-5 shadow-xl shadow-primary/5"
            noValidate
          >
            <div>
              <label htmlFor="name" className="text-xs font-mono text-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-text transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-xs text-danger mt-2">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-xs font-mono text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-text transition-colors"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-xs text-danger mt-2">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="text-xs font-mono text-muted">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                {...register("subject")}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-text transition-colors"
                placeholder="What would you like to discuss?"
              />
              {errors.subject && (
                <p className="text-xs text-danger mt-2">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-mono text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-text transition-colors resize-none"
                placeholder="Tell me about your project or role."
              />
              {errors.message && (
                <p className="text-xs text-danger mt-2">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-background transition-all hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>

            {serverError && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-danger"
              >
                {serverError}
              </motion.p>
            )}

            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-success"
                >
                  <span className="font-semibold">Success:</span> your message has been sent.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
