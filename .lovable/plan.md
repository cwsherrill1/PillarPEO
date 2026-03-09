

# Phase 3: Homepage Remaining Sections (6–11)

Sections 1–5 (Hero, Trust Strip, Path Selector, Problem, Myth vs Truth) are complete. Now build the remaining 6 homepage sections as defined in the master prompt.

## Sections to Build

### 6. Guide Section
- Headline: "You do not need to figure this out alone."
- Body copy about Pillar's structured process
- 6 guide cards: Discovery-first approach, Side-by-side option review, Clear process and timeline, Support with required documents, Proposal walkthroughs, Warm handoff into onboarding

### 7. Three-Step Plan
- Timeline/connected layout
- Headline: "A clear path through a complicated decision."
- Step 1: Tell us what is not working
- Step 2: We compare the right options
- Step 3: Move forward with a cleaner plan
- Short explanatory text under each

### 8. Outcomes / Transformation
- Headline: "From guesswork to confident direction."
- 6 transformation cards: More confidence, Less admin drag, Better-fit support, Clearer next steps, Stronger employee experience, Less risk in transition

### 9. Why Pillar Preview
- Subtle bridge section
- Headline: "Guidance matters when the path is not obvious."
- Short body copy + "Read Our Story" CTA linking to `/about`

### 10. FAQ Preview
- 5–6 expandable accordion questions using Radix Accordion
- Questions as specified in prompt

### 11. Final CTA
- Headline: "Make a confident next-step decision."
- Body copy + two CTA buttons: "Compare My Options" + "Get the Buyer Guide"
- Navy background, prominent placement before footer

## Implementation

Append all 6 sections to the existing `src/pages/Index.tsx`. Uses existing design tokens, `Card` components, `useScrollReveal`, and the Radix `Accordion` component for FAQs. New icons from `lucide-react`.

| File | Action |
|------|--------|
| `src/pages/Index.tsx` | Add sections 6–11 after the existing Myth vs Truth section |

