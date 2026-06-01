# PEO Broker Hub, Location Pages & Internal Linking

## Step 1 — Create 4 new pages

All pages reuse existing components (`SEOHead`, `Reveal`, `Section` pattern, `Button`, `Badge`, `Accordion`, CTAs to HubSpot) and the site's design tokens (Dark Navy, Grass Green accent, League Spartan / Nunito Sans). Each follows the standard hero → summary box → alternating sections → FAQ → CTA layout used across the existing resource pages.

### 1a. `/peo-broker` — National Hub
- **Title:** How to Choose a PEO Broker (National Guide)
- **Description:** A PEO broker should work for you, not the providers. Here is how independent advisory works, how brokers get paid, and what to ask before you sign.
- **Sections:** What a PEO broker actually does · Independent vs captive brokers · How brokers are paid (Free Forever model) · Questions to ask any broker · When you don't need one · FAQ
- Links down to the 3 location pages and to `/blog/employee-health-benefits-options`.

### 1b. `/peo-broker-charlotte` — Charlotte Location
- **Title:** PEO Broker in Charlotte NC | Pillar PEO Advisors
- **Description:** An independent Charlotte PEO broker who shops the full market for you. No funneling business back to old employers. Free forever.
- **Sections:** Why local matters in Charlotte (growing finance/healthcare/tech market, NC compliance) · What independent representation means · Questions to ask any broker · Fee transparency · FAQ
- **Content merge from old blog post:** I'll port the unique sentences from `PeoBrokerCharlotteNc.tsx` — the "broker buddy system" framing, the 5 "Questions to ask any broker" bullets, the fee transparency paragraph (Free Forever), the "Why Charlotte specifically" paragraph, and the 4 FAQ items. Anything generic to brokers that's already on the hub stays on the hub only.

### 1c. `/peo-broker-north-carolina` — NC Statewide
- **Title:** PEO Broker in North Carolina | Pillar PEO Advisors
- **Description:** Independent PEO advisory for North Carolina businesses. Multi-state compliance, full-market shopping, and free forever.
- **Sections:** NC employment landscape · Statewide service from Charlotte HQ · Multi-state compliance · How we evaluate providers · FAQ

### 1d. `/peo-broker-south-carolina` — SC Statewide
- **Title:** PEO Broker in South Carolina | Pillar PEO Advisors
- **Description:** Independent PEO broker serving SC employers — Greenville, Columbia, Charleston. Full-market comparison, free forever.
- **Sections:** SC employment landscape · Cross-border NC/SC employer support · How we evaluate providers · FAQ

## Step 2 — Redirect old blog post

- Add route in `src/App.tsx`:
  `<Route path="/blog/peo-broker-charlotte-nc" element={<Navigate to="/peo-broker-charlotte" replace />} />`
- Add to `public/_redirects` for crawler-grade 301:
  `/blog/peo-broker-charlotte-nc /peo-broker-charlotte 301`
- Delete `src/pages/resources/PeoBrokerCharlotteNc.tsx` and its import in `App.tsx` (after content has been merged into the new Charlotte page).
- Add the four new routes to `public/sitemap.xml`; remove the deprecated blog slug.

## Step 3 — Internal linking pass

**Inventory first.** I'll output the complete URL slug list (pages + blog + resources) for confirmation before adding any links.

**Rules I will follow:**
- `/peo-broker` is the hub; every location page + every blog post links to it once with natural anchor text (e.g. "choosing a PEO broker", "independent PEO advisor").
- Charlotte/NC/SC location pages each link up to `/peo-broker` once and cross-link to the other two locations once each.
- `/blog/employee-health-benefits-options` links up to `/peo-broker` in its PEO section; the hub links down once on a health-benefits phrase.
- Each blog post links to its single most relevant destination: broker/startup/switching/nonprofit/transparency posts → `/peo-broker`; any post mentioning Charlotte → also `/peo-broker-charlotte`.
- Older posts/resources only get a link when the existing sentence is genuinely on-topic — no forced links.
- Every page's closing CTA links to `/contact`.
- Descriptive anchor text only, max 3 internal links per page, no body-copy rewrites beyond adding hyperlinks.

**Deliverable:** a summary table at the end listing every link added (source page · anchor text · destination).

## Technical notes

- Pages live in `src/pages/PeoBroker.tsx`, `src/pages/PeoBrokerCharlotte.tsx`, `src/pages/PeoBrokerNorthCarolina.tsx`, `src/pages/PeoBrokerSouthCarolina.tsx` (top-level, since their URLs are not under `/resources` or `/blog`).
- All four use `SEOHead` with per-page meta + JSON-LD. The 3 location pages add `LocalBusiness` schema with NC/SC `areaServed`. Hub uses `Service` schema.
- The Charlotte page absorbs the old blog's `Article` content but is structured as a location page (no byline), so the redirect consolidates SEO equity without duplicate content.
- `public/_redirects` handles static-host 301s; the SPA `<Navigate>` handles in-app navigation for users who land via client-side links.
