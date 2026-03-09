

# Phase 2: Homepage Hero + Top Sections

Build the first 5 sections of the homepage as defined in the build prompt: Hero, Trust Strip, Path Selector, Problem Section, and Myth vs Truth.

## Sections to Build

### 1. Hero Section
- Dark navy background with subtle gradient/glow
- Large headline: "Compare PEO options without guessing."
- Subhead copy as specified
- Two CTA buttons: "Compare My Options" (green) + "See How It Works" (outline)
- 4 support points as icon chips (Structured guidance, Side-by-side comparisons, Better-fit decisions, Support through transition)
- Decorative vertical pillar shapes with soft green/blue glow (CSS)

### 2. Trust Strip
- Slim section below hero with 5 icon chips: Guided comparison process, Buyer-side support, Proposal review help, Transition support, Secure document workflow
- Light background, compact layout

### 3. Path Selector (3 cards)
- 3 premium cards with distinct styling for each ICP
- Switch Your PEO / Nonprofits / First-Time PEO
- Each with headline, short text, and CTA linking to the respective page

### 4. Problem Section
- Headline: "The wrong setup costs more than the monthly fee."
- 6 problem cards with icons
- Editorial spacing, card-based layout

### 5. Myth vs Truth Section
- Headline: "A lot of bad PEO decisions start with bad advice."
- 3 alternating myth/truth card pairs
- Visually distinctive (myth = muted/red-ish, truth = green accent)

## Implementation

All sections built directly in `src/pages/Index.tsx` using Tailwind classes and the existing design tokens (navy, green, soft-blue, etc.). Uses `lucide-react` icons. Scroll fade-up animations via a simple `useScrollReveal` hook or intersection observer utility.

### Files
| File | Action |
|------|--------|
| `src/pages/Index.tsx` | Replace placeholder with full 5-section homepage |
| `src/hooks/useScrollReveal.ts` | Create intersection observer hook for fade-up on scroll |

