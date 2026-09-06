# Deployment

## Static prerendered build

```
npm run build:static
```

This runs two steps:

1. `vite build` — the normal, unmodified production build into `dist/`.
2. `tsx scripts/prerender.ts` — serves `dist/` locally, launches headless
   Chrome (Puppeteer), visits every route listed in `src/data/routes.ts`
   (the same source `scripts/generate-sitemap.ts` uses for `sitemap.xml`),
   and writes the fully rendered HTML for each route to `dist/<route>/index.html`
   (the root route overwrites `dist/index.html`).

### Why prerender

This is a client-rendered SPA. On first load, the page's `<title>`, meta
description, canonical link, and JSON-LD structured data are injected at
runtime by React. Crawlers/bots that don't execute JavaScript (or that only
lightly render it) see the generic fallback `<head>` from `index.html`
instead of the per-page SEO tags. Prerendering runs the app once per route in
a real browser and captures the post-render HTML — including the head tags
and JSON-LD — so every route's static file already contains correct SEO
metadata, while the deployed app is still the same interactive SPA (React
hydrates normally on top of the prerendered markup).

The regular `npm run build` script is untouched and still produces the
standard SPA build with a single `dist/index.html` — use `build:static` only
when you want prerendered per-route HTML.

Deployment files in `public/` (`_redirects`, `_headers`, `404.html`,
`sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`) are copied by Vite
into `dist/` during the `vite build` step and are not touched by the
prerender step — it only adds `index.html` files inside per-route
subdirectories.

## Cloudflare Pages deployment

1. **Connect the repo** in the Cloudflare Pages dashboard (Workers & Pages →
   Create → Pages → connect to Git).
2. **Build settings:**
   - Build command: `npm run build:static`
   - Build output directory: `dist`
   - Root directory: (repo root)
3. **`_redirects` / `_headers`:** these live in `public/` and are copied
   verbatim into `dist/` by Vite, so Cloudflare Pages picks them up
   automatically from the build output — no extra configuration needed.
   `_redirects` handles legacy URL redirects; `_headers` sets response
   headers (caching/security). Both apply to the prerendered routes exactly
   as they would to the plain SPA build.
4. **Deploy.** Cloudflare will serve the prerendered `dist/<route>/index.html`
   for each route directly; any route not prerendered still falls back to the
   SPA's `index.html` per `_redirects`/`404.html`, so unlisted paths keep
   working.
5. **Custom domain:** in the Pages project → Custom domains → add
   `pillarpeo.com` (and `www.pillarpeo.com` if used), then follow
   Cloudflare's DNS instructions (CNAME/proxy record) to point the domain at
   the Pages project. Verify the SSL certificate provisions (usually
   automatic within minutes) before treating the domain as live.
