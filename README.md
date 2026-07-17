# Sea Critter — PADI Freediving Training Center

Production-ready marketing site. Next.js 15 App Router · TypeScript · Tailwind · Framer Motion · MDX · JSON-LD.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # verified passing — 29 static pages
```

Requires network access to Google Fonts at build time (`next/font/google` self-hosts them into the bundle).

## What's inside

| Route | Source |
| --- | --- |
| `/` | Homepage: hero → about/stats → courses → reviews → why-us → locations → instructors → journal → FAQ → booking |
| `/courses`, `/courses/[slug]` | 4 course pages from `src/lib/courses.ts` (overview, who-for, prerequisites, structure, skills, safety, equipment, certification, pricing, FAQ, booking) |
| `/locations`, `/locations/[slug]` | 4 destination guides from `src/lib/locations.ts` (why dive, marine life, season, weather, visibility, travel, stays, attractions, map link, FAQ) |
| `/blog`, `/blog/[slug]` | 10 MDX articles in `src/content/blog/` with internal-link clusters |
| `/sitemap.xml` `/robots.txt` `/rss.xml` `/opengraph-image` | Generated |

## SEO / AEO

- Central JSON-LD builders in `src/lib/schema.ts`: Organization + LocalBusiness + SportsActivityLocation, WebSite + SearchAction, Course/Offer, TouristDestination, FAQPage, Article, BreadcrumbList — rendered via `<JsonLd />`.
- Per-page canonical URLs, OG/Twitter metadata via the Metadata API; dynamic OG image at the edge.
- Every page answers what/who/where/when/cost/duration/requirements in the first screens; FAQs mirror real search queries and ship as FAQPage schema.
- All content pages are SSG — HTML is fully crawlable with zero client JS required for content.

## Design system

Palette (Tailwind tokens): `abyss #041E30` · `trench #062A42` · `ocean #0A4D68` · `lagoon #20B2AA` · `shallows #7FDBD4` · `sand #EFE7D8` · `foam #F7FBFC` · `coral #FF6F59`.
Type: Bricolage Grotesque (display) · Figtree (body) · IBM Plex Mono (`font-gauge`, the dive-computer voice).
**Signature:** the page is a descent — every section carries a mono depth marker (`0 M` hero → `−40 M` booking), backgrounds deepen abyss-ward, and light-ray gradients (`.rays`) sit behind heroes.

## Swap-in points (placeholders → real assets)

1. **Hero video** — replace the gradient block in `src/app/page.tsx` with the commented `<video>` element + poster.
2. **Photos/gallery** — `next.config.mjs` already allowlists Unsplash; use `next/image` anywhere.
3. **Leads/newsletter** — `src/app/actions.ts` currently logs; forward to Resend/Brevo/your CRM there.
4. **Google Reviews & Instagram** — testimonial cards and footer are ready; wire the Places API / an IG embed service and map into the same card markup.
5. **Real business details** — everything lives in `src/lib/site.ts` (one edit updates metadata + JSON-LD everywhere).

## Accessibility

Skip link, landmark nav labels, labelled form fields, `aria-expanded` accordions, visible focus rings, `prefers-reduced-motion` respected (Framer reveals and smooth scroll both disable), WCAG-AA contrast on the dark palette.
