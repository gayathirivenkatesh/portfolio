# Gayathiri V — Portfolio

A production-ready personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. All content is sourced directly from the resume — no fabricated projects, companies, or metrics.

## Stack

- **Next.js 14** (App Router) + **TypeScript** (strict mode)
- **Tailwind CSS** for styling, with a custom design-token palette
- **Framer Motion** for scroll reveals, page micro-interactions, and the scroll-progress bar
- **React Hook Form + Zod** for validated contact form
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                  |
| ---------------- | ----------------------------- |
| `npm run dev`     | Start local dev server        |
| `npm run build`   | Production build              |
| `npm run start`   | Serve the production build    |
| `npm run lint`    | Run ESLint                    |

## Structure

```
app/                 Routes, layout, metadata, sitemap, 404
components/sections/ Page sections (Hero, About, Skills, Experience, Projects, Education, Contact, Footer, Navbar)
components/ui/       Reusable UI pieces (ProjectCard, ProjectModal, FusionWave, CommandPalette, ScrollProgress)
components/common/   ThemeProvider, Reveal (scroll-in animation wrapper)
lib/data.ts           Single source of truth for all resume content
public/               Static assets — favicon, manifest, robots.txt, resume PDF
```

## Notable features

- **Dark/light theme** persisted to `localStorage`, respecting system preference on first visit.
- **Signature visual**: an animated canvas "fusion wave" in the hero, a literal nod to the Adaptive Confidence-Based Audio-Visual Emotion Fusion project — two signals converging into one.
- **Command palette** (`Cmd/Ctrl+K`) for quick section navigation.
- **Filterable skills and projects** grids with search.
- **Accessible by default**: semantic HTML, visible focus rings, `aria-label`s on icon-only controls, `prefers-reduced-motion` respected throughout (including the canvas animation).
- **SEO**: metadata, Open Graph, Twitter cards, canonical URL, `sitemap.ts`, `robots.txt`.
- **PWA-ready manifest** (`manifest.json` + SVG icon).

## Updating content

Everything lives in `lib/data.ts`. Edit that file to update copy, links, skills, projects, experience, education, or certifications — the whole site re-renders from it, so there's no need to touch individual components for content changes.

## Deploying

Push to a GitHub repo and import it on [Vercel](https://vercel.com/new) — zero configuration required.

## Scope note

This build focuses on a fast, accessible, recruiter-facing experience rather than every possible bell and whistle (e.g. it does not include a 3D WebGL scene, a live GitHub API activity feed, or offline service-worker caching). Those can be layered on later without touching the core structure.
