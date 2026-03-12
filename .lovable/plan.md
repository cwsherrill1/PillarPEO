

# Add Blog/Insights Section Under Resources

## What

Add a "PEO Insights" (blog) sub-section to the Resources page, below the existing guide cards. This gives the old `/blog/*` URLs a natural home and provides a content area for shorter, article-style posts — distinct from the deeper guides above.

## Changes

### `src/pages/Resources.tsx`
- Add a new `insights` array with blog-style entries. Initially seed it with the three old blog topics that currently redirect (reframed as short articles):
  - "How Much Does a PEO Cost?" → links to `/resources/peo-pricing`
  - "PEO vs. HR Outsourcing: What's the Difference?" → links to `/resources/peo-vs-aso-vs-inhouse`
  - "Should Your Business Use a PEO?" → links to `/resources/peo-readiness`
- Add a new section between the resource grid and FAQ titled **"PEO Insights"** with a `Newspaper` icon, rendering these as a simpler list/card layout (smaller cards, date-style metadata, "Article" badge) to visually distinguish them from the deep-dive guides above
- Add a category filter row at the top of the "Explore by topic" section with pills: All, Guide, Checklist, Comparison, Self-Assessment — so users can filter both guides and insights

### `public/_redirects` + `src/App.tsx`
- Update the `/blog/what-is-a-peo-broker-charlotte-nc` redirect to point to `/about` (keep as-is since there's no matching article)
- All other `/blog/*` redirects already point to relevant `/resources/*` pages — no changes needed

### `public/sitemap.xml`
- No new URLs needed since the insights link to existing resource pages

## Result
The Resources page becomes a two-tier content hub: deep-dive Guides up top, shorter Insights/articles below. Old blog visitors land on a page that still feels like a blog. Easy to add new articles later by appending to the `insights` array.

