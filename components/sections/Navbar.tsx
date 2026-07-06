"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/common/ThemeProvider";

const links = [
  { href: "#about", label: "about", num: "01" },
  { href: "#skills", label: "skills", num: "02" },
  { href: "#experience", label: "experience", num: "03" },
  { href: "#projects", label: "projects", num: "04" },
  { href: "#education", label: "education", num: "05" },
  { href: "#contact", label: "contact", num: "06" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 600);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav
          className={`glass rounded-lg flex items-center justify-between px-4 sm:px-6 transition-all duration-300 ${
            scrolled ? "h-12" : "h-14"
          }`}
          aria-label="Primary"
        >
          <a
            href="#top"
            className="font-display font-semibold tracking-tight text-sm text-text flex items-center"
          >
            gayathiri&apos;s@portfolio<span className="text-muted">:~$</span>
            <span
              className={`ml-1 w-2 h-4 bg-primary ${blink ? "opacity-100" : "opacity-0"}`}
              aria-hidden="true"
            />
          </a>

          <ul className="hidden md:flex items-center gap-6 text-xs font-mono text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative hover:text-primary transition-colors"
                >
                  <span className="text-primary/60 mr-1">{l.num}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="btn-icon"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden btn-icon"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.25 }}
              className="glass mt-2 rounded-lg flex flex-col md:hidden overflow-hidden"
            >
              {links.map((l) => (
                <li key={l.href} className="border-b border-border last:border-0">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3 text-xs font-mono text-muted hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-primary/60 mr-2">{l.num}</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
