# Architecture

## Overview
- Next.js 16 (App Router) with TypeScript and Tailwind CSS.
- Framer Motion for page and element transitions.
- Static export (`next.config.ts` uses `output: "export"`) for deployment on static hosts.

## Structure
- `src/app` — App Router pages and route handlers for static export (no server code).
- `src/components` — Reusable UI components (buttons, cards, navigation, forms, grids, motion wrappers).
- `src/content/site.ts` — Single source of truth for company info, product catalog, FAQs, testimonials, contact data.
- `src/content/i18n.ts` — Translation map and helper for 10 Indian languages + English.
- `public/` — Placeholder images and static assets.
- `scripts/update_repo.command` — Optional helper to pull latest changes and reinstall dependencies.

## Theming & UX
- Tailwind tokens define sand/ink/gold/orange/green palette with light/dark variables.
- Glassmorphism navigation and mobile “island” controls with Framer Motion transitions.
- Page transitions set in `src/app/template.tsx`.

## Forms
- Client-only validation; no server actions or API routes to keep static export compatible.

## SEO
- Metadata defaults in `src/app/layout.tsx` plus `sitemap.ts` and `robots.ts` for static generation.
