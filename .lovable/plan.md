# SEO/AEO plan — reality-checked against the current site

The Claude audit was written against the old Wix site. A lot of its "quick wins" are already shipped. Here's what's true now, what's worth doing, and what to skip.

## Already done (don't redo)

| Audit claim | Actual status |
|---|---|
| Every page has identical title/description | Fixed — `SEOHead` sets unique title + description per route |
| URLs are `/blank`, `/blank-1` | Doesn't apply — React routes are `/about`, `/how-it-works`, `/peo-for-nonprofits`, etc. |
| No JSON-LD schema | Homepage has `ProfessionalService` + `FAQPage`; Contact has `ProfessionalService` |
| No FAQ on homepage | Homepage has 5-question FAQ block + matching schema |
| No llms.txt | Shipped at `/llms.txt` |
| No sitemap submitted | Submitted to Google Search Console this session |
| Single canonical URL on every page | Fixed — `SEOHead` sets per-page canonical + og:url |

## Worth doing — Tier 1 (this loop, code changes)

These are the audit items that are actually missing and don't require off-site work or net-new long-form content.

1. **Lean into "PEO broker" terminology on the homepage.** Currently positioned as "advisor." The audit is right that "broker" matches the high-intent search query. Update the H1, hero subhead, trust strip, and `ProfessionalService.serviceType` schema to include "PEO broker" naturally 3–5 times. Keep the brand voice; don't make it stuffed.
2. **Per-page schema on the remaining indexable pages.** About, How It Works, Switch Your PEO, PEO for Nonprofits, Do We Need A PEO, Resources hub, and the 8 resource articles. Add `Article` + `BreadcrumbList` to the resource articles, `Service` to the three audience pages, and `AboutPage` + `Person` (Caleb Sherrill) to About.
3. **Author byline + bio block** on the 8 resource articles. Caleb's name + role + LinkedIn at the top, short bio at the bottom. Maps to `Person` schema. This is the single biggest E-E-A-T fix and it's all in code.
4. **Expand homepage FAQ from 5 to 8–10 questions** with the broker-intent ones from the audit ("What is a PEO broker?", "Do I pay anything?", "Broker vs direct?", "Hidden fees?"). Update the FAQPage schema to match.
5. **More descriptive `og:image`.** Currently using the logo, which previews poorly. Generate a proper 1200×630 social card.

## Worth doing — Tier 2 (next loop or two, new content pages)

These are real new pages. Each is a separate ~2-hour build, so I'd ship one or two per loop rather than all at once.

6. **Comparison hub** at `/compare` with 2–3 pages to start: `/compare/rippling-vs-trinet`, `/compare/justworks-vs-insperity`, `/compare/adp-vs-paychex`. Side-by-side tables, pricing ranges, FAQPage schema. This is the audit's strongest call — comparison intent is what LLMs cite.
7. **Industry subpages.** You already have `/peo-for-nonprofits`. Add `/industries/professional-services`, `/industries/healthcare`, `/industries/construction` under a parent `/industries` page. Each gets unique meta + a few hundred words of vertical-specific copy.
8. **"What is a PEO broker" pillar article** — the definitional page that anchors the keyword. Add to Resources.

## Skip or defer (don't bother)

- **"Rename `/blank` to `/about`"** — already correct.
- **"Add Organization schema"** — already there as `ProfessionalService` (which is the more specific, correct type for this business).
- **"Submit sitemap to Search Console"** — done.
- **"Wix form/quiz builder"** — you already have the HR Headache Quiz and the Readiness Assessment, which are better than what the audit suggests.
- **Score "1/10 schema"** — outdated, ignore.

## Off-site (your work, not mine)

The audit is right that these matter, but they're not code:
- Google Business Profile claim
- Listicle outreach (peoplemanagingpeople.com etc.)
- Podcast appearances / guest posts
- Directory listings (Clutch, NAPEO, BBB, Charlotte directories)
- Bing Webmaster Tools submission

I can prep outreach email drafts if helpful, but the relationships are yours.

## Recommended order

**This loop:** Tier 1 items 1–4 (the "broker" repositioning, per-page schema, bylines, expanded FAQ). All in code, ~1 turn.

**Next loop:** Tier 1 item 5 (og:image) + Tier 2 item 6 (first 1–2 comparison pages).

**Following loops:** Remaining comparison pages, industry subpages, pillar article.

## Open question for you

The "PEO broker" repositioning is the most consequential change in Tier 1 — it changes hero copy, trust strip language, and how the site describes itself. Two ways to play it:

- **A. Full rebrand of language** — replace "advisor" with "broker" in headlines, schema, and metadata across the site. Highest SEO upside.
- **B. Hybrid** — keep "advisor" as the brand voice (it's softer, fits the faith-rooted positioning), but add "PEO broker" as a secondary descriptor in H1, intro paragraph, and schema. Smaller but still meaningful SEO lift, no brand dilution.

I'd recommend B. The "trustworthy advisor" voice is part of your brand memory and "broker" can read transactional. Tell me which one and I'll proceed.
