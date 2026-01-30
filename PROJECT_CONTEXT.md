# Project Context

## Overview
- Marketing website for Agroking Implements Industries.
- Stack: Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.
- Static export target for Cloudflare Pages (no server-only features).

## Architecture
- Content managed via `src/content/site.ts` and localized strings in `src/content/i18n.ts`.
- UI composed from reusable components in `src/components`.
- App routes under `src/app`.

## Deployment
- Cloudflare Pages static export.
- `next.config.ts` configured for static output.
- `wrangler.toml` present for Pages build output.

## Constraints
- No server-side features unless explicitly approved.
- Fully static HTML output.

## Major Components
- Navigation with language and theme toggles.
- Product listing and product detail views.
- Brochure listing page.
- Forms are client-only placeholders.
