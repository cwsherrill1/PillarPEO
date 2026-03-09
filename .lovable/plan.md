

# Phase 4: How It Works Page

Build the full "How It Works" page — a 4-step guided process walkthrough with timeline layout, supporting sections, and final CTA.

## Sections

### 1. Hero
- Headline: "A clear process for a complicated decision."
- Subhead explaining the guided comparison approach
- Subtle navy background, consistent with homepage hero style

### 2. Four-Step Timeline
- Connected vertical timeline with numbered steps and icons
- **Step 1**: Tell Us What's Not Working — discovery call, understand pain points
- **Step 2**: We Research and Compare Options — side-by-side PEO comparison
- **Step 3**: Review Proposals Together — walkthrough of pricing, coverage, fit
- **Step 4**: Transition With Support — onboarding coordination, warm handoff
- Each step gets a heading, 2-3 sentence description, and icon

### 3. What You Get
- 4-6 cards highlighting deliverables: structured comparison, proposal review, timeline clarity, transition support, document guidance, ongoing check-ins

### 4. Who This Is For
- Three short blurbs mapping to the ICPs (switchers, nonprofits, first-timers) with links to their respective pages

### 5. Final CTA
- "Ready to compare your options?" with dual CTAs, matching homepage final CTA pattern

## Implementation

| File | Action |
|------|--------|
| `src/pages/HowItWorks.tsx` | Replace placeholder with full page |

Reuses `useScrollReveal`, `Card`, `Button`, `lucide-react` icons, and existing brand tokens. Same `Reveal` wrapper pattern from Index.tsx.

