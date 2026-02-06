# Agroking Implements Industries

Live site: https://agroking-website.pages.dev/

A static-export marketing site built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started
```bash
npm install
npm run dev
```
Visit http://localhost:3000.

## Content Editing
All copy, product data, FAQs, testimonials, and contact details are defined in `src/content/site.ts`. Translations are in `src/content/i18n.ts`.

## Routes
- `/` Home
- `/products` Catalog + filters
- `/products/[slug]` Product details
- `/applications` Industry uses
- `/about` Company profile
- `/support` FAQs and service request
- `/contact` Contact form
- `/brochure` Brochure downloads (placeholder)

## Documentation
- Architecture: `ARCHITECTURE.md`
- Deployment: `DEPLOYMENT.md`

## Notes
- Static export is enabled (`output: "export"`). No API routes or server actions are used.
- Placeholder images live in `public/images`; replace as needed.
