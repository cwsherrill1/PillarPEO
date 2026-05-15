## Wire up polished og:image social cards

### Problem
Current og:image points to `/pillar-logo.png` — a small square logo that LinkedIn/Slack/Facebook crop awkwardly. Social crawlers don't execute JS, so they only see what's in `index.html`. We need a proper 1200×630 social card and a system to optionally override it per-route for JS-aware crawlers (Googlebot, Twitter).

### What I'll build

**1. Generate a sitewide og:image (1200×630)**
- `public/og-image.jpg` — Pillar branded card: dark navy background, grass green accent, League Spartan headline "Compare PEO Options With Confidence", "Pillar PEO Advisors" wordmark, subtle Exodus/pillar visual motif. On-brand, no generic SaaS gradients.

**2. Generate 2–3 section-specific og:images** (optional per-route override)
- `public/og/og-switch.jpg` — for Switch Your PEO page ("Switching PEOs? Do it without the chaos.")
- `public/og/og-nonprofits.jpg` — for Nonprofits page ("PEO support built for mission-driven teams.")
- `public/og/og-resources.jpg` — generic resources/article fallback ("Pillar PEO Resources")

Most resource articles will fall back to the sitewide card — that's fine.

**3. Update `index.html`**
- Replace the two logo references with the new `https://pillarpeo.com/og-image.jpg`
- Add `og:image:width` (1200), `og:image:height` (630), `og:image:alt`
- Add `og:site_name`
- Add `twitter:image:alt`

**4. Extend `SEOHead.tsx`** to accept an optional `ogImage` prop
- New prop: `ogImage?: string` (path or absolute URL)
- When provided, overrides `og:image` and `twitter:image` via the same useEffect dedupe pattern
- Resolves relative paths against `BASE_URL`
- Note honestly: this only helps JS-executing crawlers (Googlebot, Twitterbot sometimes). LinkedIn/Slack/Facebook still see the static `index.html` card. That's acceptable — the static card is on-brand and works everywhere.

**5. Wire ogImage on 3 high-value pages**
- `Index.tsx` → sitewide card (no override needed)
- `SwitchYourPeo.tsx` → `/og/og-switch.jpg`
- `PeoForNonprofits.tsx` → `/og/og-nonprofits.jpg`
- `Resources.tsx` → `/og/og-resources.jpg`

### Out of scope
- Per-article custom cards for every resource page (too many; sitewide card is fine)
- SSR / pre-rendering for true per-route social previews
- Twitter handle changes

### After publish
Validate with LinkedIn Post Inspector + Facebook Sharing Debugger to flush their caches.
