# Sharan R — Portfolio

A premium, dark, AI-inspired portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `app/` — Next.js App Router pages, layout, SEO metadata, sitemap
- `components/` — all sections (Hero, About, Experience, Skills, Projects, Certificates, Education, GitHub, Resume, Contact) plus shared UI (Navbar, Footer, CustomCursor, ParticleField, ScrollProgress, Reveal, SectionHeading, AnimatedCounter)
- `lib/data.ts` — single source of truth for all resume content (personal info, education, experience, projects, skills, certificates, languages). Edit this file to update content anywhere on the site.
- `public/resume/Sharan_R_Resume.pdf` — the downloadable resume served by the Resume section and Hero CTA.

## Notes

- Custom cursor and particle network auto-disable on touch devices and respect `prefers-reduced-motion`.
- All copy and facts are sourced directly from the two resumes provided — nothing invented.
- Update `siteUrl` in `app/layout.tsx` and `app/sitemap.ts` once you have a real domain, and swap GitHub/LinkedIn URLs in `lib/data.ts` if needed.
- Before deploying, run `npm run build` and check the Lighthouse report in Chrome DevTools to confirm performance/SEO/accessibility scores.
