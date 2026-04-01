# Premium Portfolio Website (Next.js)

A production-ready, conversion-focused personal portfolio for a **Fullstack Developer + AI Content Manager**.

## Run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build && npm run start
   ```

## Where to edit text/content (no component changes needed)
All editable content is centralized in `/content`:
- `content/site.ts` → site settings, navigation, hero, about, process, trust points, contact info
- `content/services.ts` → service cards and details
- `content/projects.ts` → project list, categories, case-study data
- `content/testimonials.ts` → testimonials
- `content/faq.ts` → FAQ items

## Where to replace images
Swap image files by keeping (or updating) the referenced paths:
- `/public/images/` for profile/hero/site images (prefer SVG/PNG for repo-friendly placeholders)
- `/public/projects/` for project covers and gallery images
- `/public/testimonials/` for testimonial avatars

> If you rename files, update the path strings in the corresponding content files.

## How to add a new project
1. Open `content/projects.ts`
2. Add a new object to `projects` with a unique `slug`
3. Add cover image and gallery file paths in `/public/projects/`
4. The project will automatically appear on `/projects` and get a detail page at `/projects/[slug]`

## How to add a testimonial
1. Open `content/testimonials.ts`
2. Add a new testimonial object
3. Put avatar image in `/public/testimonials/`

## How to update contact info
- Edit `contactInfo` and `socialLinks` inside `content/site.ts`
- Contact page + footer will update automatically.


## GitHub Pages / GitHub Actions note
If your workflow uses `actions/setup-node` with npm cache, keep `package-lock.json` committed.
Without a lock file, setup-node fails with: `Dependencies lock file is not found`.

## Architecture notes
- App Router structure in `/app`
- Reusable UI components in `/components`
- Centralized editable content model in `/content`
- Shared metadata helpers in `/lib`
- Strong defaults for accessibility, SEO metadata, and responsive UX
