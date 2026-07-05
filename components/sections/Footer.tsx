"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {year} {profile.name}. Built with intent.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
          aria-label="Back to top"
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
