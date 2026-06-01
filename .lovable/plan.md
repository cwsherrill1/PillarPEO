## Issue

The article "Employee Health Benefits Options" exists and is routed at `/blog/employee-health-benefits-options` (see `src/App.tsx`), but it isn't included in the `resources` array in `src/pages/Resources.tsx`. That's why it doesn't appear in the Resources grid.

A few other `/blog/*` articles have the same problem (venture-backed startups, signs you've outgrown your PEO, nonprofits Charlotte, industry transparency) — they're routed but not surfaced anywhere except via direct URL or sitemap.

## Plan

1. Add a new entry to the `resources` array in `src/pages/Resources.tsx` for the health benefits post:
   - icon: `HelpCircle` (or `FileText`)
   - title: "Employee Health Benefits Options: What Employers Actually Offer"
   - desc: short one-liner about the real options (fully-insured, level-funded, ICHRA, PEO master plans, association health plans) and how to choose
   - category: "Guide"
   - href: `/blog/employee-health-benefits-options`

2. (Optional, recommend) Also add cards for the other orphaned `/blog/*` articles so the Resources page is the single source of truth:
   - PEO for Venture-Backed Startups → `/blog/peo-for-venture-backed-startups`
   - Signs You've Outgrown Your PEO (Charlotte) → `/blog/signs-outgrown-peo-charlotte`
   - PEO for Nonprofits (Charlotte) → `/blog/peo-for-nonprofits-charlotte`
   - PEO Industry Transparency → `/blog/peo-industry-transparency`

No other changes — routes, SEO, and the article pages themselves are already in place.

## Question for you

Do you want me to add just the health benefits post, or also surface the other four orphaned `/blog/*` articles at the same time?
