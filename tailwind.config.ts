import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        card: "var(--card)",
        glass: "var(--glass)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--muted)",
        },
        muted: "var(--muted)",
        border: "var(--border)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        "success-light": "var(--success-light)",
        "warning-light": "var(--warning-light)",
        "danger-light": "var(--danger-light)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        wave: "wave 1.2s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
