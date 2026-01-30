# Agroking Implements Industries Website

Premium, export-ready marketing site built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Install & Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content Editing

All site copy and product data live in:

- `src/content/site.ts`

Update this single file to change company details, products, testimonials, FAQs, and contact info.

## Routes

- `/` Home
- `/products` Product catalog with filters
- `/products/[slug]` Product detail pages
- `/applications` Industries & applications
- `/about` Company overview
- `/support` FAQs + service request
- `/contact` Contact form
- `/brochure` Brochure download placeholder

## Forms

Forms submit to the API route:

- `POST /api/lead`

This is a placeholder endpoint with basic validation. Replace with email/CRM integration as needed.

## SEO

- Dynamic metadata per route
- OpenGraph defaults in `src/app/layout.tsx`
- `src/app/sitemap.ts` and `src/app/robots.ts`

## Deploy

### Vercel

1. Push to a Git repo
2. Import into Vercel
3. Build command: `npm run build`
4. Output: `.next`

### Cloudflare Pages (Next on Pages)

Use the Next.js on Pages adapter, or export static assets.

### Static Export

If you want a static site:

1. Add `output: "export"` to `next.config.ts`
2. Run `npm run build`
3. Deploy the `out` directory

## Assets

Placeholder images are in `public/images`. Replace with real photography or product renders.
