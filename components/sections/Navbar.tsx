"use client";

import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [blink, setBlink] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("top");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);
      setVisible(currentY <= lastScrollY.current || currentY < 120);
      lastScrollY.current = currentY;
      if (open && currentY > 60) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const target = document.getElementById(id);
      if (target) observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setBlink((value) => !value), 600);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav
          className={`glass rounded-full border border-border/70 shadow-black/20 flex items-center justify-between gap-4 px-5 py-3 transition-all duration-500 backdrop-blur-xl ${
            scrolled ? "backdrop-saturate-150 bg-background/80" : "bg-background/50"
          }`}
          aria-label="Primary navigation"
        >
          <a
            href="#top"
            className="font-display font-semibold tracking-tight text-sm text-text flex items-center gap-2"
          >
            gayathiri's@portfolio<span className="text-muted">:~$</span>
            <span
              className={`ml-1 w-2 h-4 bg-primary ${blink ? "opacity-100" : "opacity-0"}`}
              aria-hidden="true"
            />
          </a>

          <ul className="hidden md:flex items-center gap-6 text-xs font-mono">
            {links.map((link) => {
              const section = link.href.replace("#", "");
              const isActive = section === activeSection;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative inline-flex items-center gap-2 transition-colors ${
                      isActive ? "text-primary" : "text-muted hover:text-primary"
                    }`}
                  >
                    <span className={`text-primary/70 ${isActive ? "opacity-100" : "opacity-60"}`}>
                      {link.num}
                    </span>
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-primary transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      } origin-left`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="btn-icon"
              animate={{ rotate: theme === "dark" ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              type="button"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
            <button
              onClick={() => setOpen((previous) => !previous)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden btn-icon"
              type="button"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -16, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -16, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="glass mt-3 rounded-3xl overflow-hidden border border-border/70 bg-background/85 shadow-xl md:hidden"
            >
              {links.map((link) => (
                <li key={link.href} className="border-b border-border last:border-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-sm font-mono text-muted hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-primary/70 mr-2">{link.num}</span>
                    {link.label}
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
