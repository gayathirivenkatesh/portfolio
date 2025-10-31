import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ root base for Vercel
  build: {
    outDir: "dist", // ensure correct output directory
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
