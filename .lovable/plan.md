

# Phase 5.5: Resource Pages Build-Out

## Overview

Build 8 standalone resource sub-pages, update the Resources hub to link to them, copy the uploaded PDF for download from the Buyer Guide card, and add all new routes.

## Files to Create

| # | Route | File | Type |
|---|-------|------|------|
| 1 | `/resources/5-questions` | `src/pages/resources/FiveQuestions.tsx` | Checklist |
| 2 | `/resources/co-employment` | `src/pages/resources/CoEmployment.tsx` | Guide |
| 3 | `/resources/peo-pricing` | `src/pages/resources/PeoPricing.tsx` | Guide |
| 4 | `/resources/peo-vs-aso-vs-inhouse` | `src/pages/resources/PeoVsAsoVsInhouse.tsx` | Comparison |
| 5 | `/resources/how-to-switch-peos` | `src/pages/resources/HowToSwitchPeos.tsx` | Guide |
| 6 | `/resources/peo-for-nonprofits-guide` | `src/pages/resources/PeoForNonprofitsGuide.tsx` | Guide |
| 7 | `/resources/peo-readiness` | `src/pages/resources/PeoReadiness.tsx` | Self-Assessment (interactive checkboxes) |
| 8 | `/resources/peo-implementation` | `src/pages/resources/PeoImplementation.tsx` | Guide |

## Files to Modify

- **`src/App.tsx`** — Add 8 new `<Route>` entries under `/resources/*`
- **`src/pages/Resources.tsx`** — Update the resource card grid to include all 8 resources with `<Link>` to their pages; update the Buyer Guide card to link to the PDF download (`/guides/Employers_Guide_to_Choosing_the_Right_PEO.pdf`)
- **`public/sitemap.xml`** — Add all 8 new URLs

## PDF Download

Copy `user-uploads://Employers_Guide_to_Choosing_the_Right_PEO.pdf` to `public/guides/Employers_Guide_to_Choosing_the_Right_PEO.pdf`. The Buyer Guide "Get the Guide" button will link directly to this file for download.

## Page Template Pattern

Every resource page follows the same structure:
1. **`<SEOHead>`** with unique title/description
2. **Hero** — dark navy (`bg-primary`), white text, Badge tag, "Talk to an Advisor" CTA
3. **Intro paragraph** — white background section
4. **Content sections** — alternating white / `bg-muted/30` backgrounds, using `Reveal` for scroll animation
5. **Final CTA** — dark navy, "Talk to an Advisor" button linking to `BOOKING_URL`

All pages use existing components: `Button`, `Card`, `Badge`, `Accordion`, `Reveal`, `SEOHead`, and for the Self-Assessment page, `Checkbox` from the UI library.

## Self-Assessment Page (Interactive)

The PEO Readiness page uses `useState` to track checked items and displays a dynamic results section based on count:
- < 5 checked: "May not be the right fit right now"
- 5–10: "Likely in range where a PEO could provide meaningful value"
- 11+: "Strong match for a PEO evaluation"

## Comparison Table (Page 4)

Uses the existing `Table` component for a responsive comparison grid (PEO vs ASO vs In-House HR).

## Resources Hub Update

The resource card grid expands from 4 to 8 cards. Each card links to its sub-page via `<Link to="/resources/...">` with a "Read More" action instead of "Talk to an Advisor." The Buyer Guide featured card gets a direct PDF download link.

## Implementation Order

Due to the volume (8 new pages + 3 modified files), this will be implemented in two batches:
- **Batch 1**: Pages 1–4 + App.tsx routes + Resources.tsx update + PDF copy
- **Batch 2**: Pages 5–8 + remaining routes + sitemap update

