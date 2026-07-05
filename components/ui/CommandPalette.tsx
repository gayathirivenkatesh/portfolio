"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, X } from "lucide-react";

const destinations = [
  { label: "Home", href: "#top", category: "navigation" },
  { label: "About", href: "#about", category: "navigation" },
  { label: "Skills", href: "#skills", category: "navigation" },
  { label: "Experience", href: "#experience", category: "navigation" },
  { label: "Projects", href: "#projects", category: "navigation" },
  { label: "Education", href: "#education", category: "navigation" },
  { label: "Contact", href: "#contact", category: "navigation" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      (inputRef.current as HTMLInputElement).focus();
    }
  }, [open]);

  const filtered = destinations.filter((d) =>
    d.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-start justify-center pt-20 px-4 bg-background/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="glass bracket relative w-full max-w-lg rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
              <Command size={18} className="text-primary" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections and commands…"
                className="bg-transparent outline-none text-sm text-text flex-1 placeholder:text-muted"
              />
              <button
                onClick={() => setOpen(false)}
                className="text-muted hover:text-text transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <ul className="max-h-64 overflow-y-auto py-2">
              {filtered.map((d) => (
                <li key={d.href}>
                  <a
                    href={d.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm text-muted hover:text-text hover:bg-primary/10 transition-colors flex items-center justify-between"
                  >
                    <span>{d.label}</span>
                    <span className="text-xs font-mono text-muted/60">{d.category}</span>
                  </a>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="px-4 py-8 text-center text-sm text-muted">
                  No sections found.
                </li>
              )}
            </ul>
            <div className="px-4 py-3 border-t border-border flex items-center justify-between text-xs text-muted/70">
              <span>Press ⌘K to open • ESC to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
