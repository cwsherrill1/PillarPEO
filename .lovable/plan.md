

# Visual Roadmap + More Life for the Site

## 1. Visual Roadmap on How It Works

Replace the current plain bullet-list timeline section with a **horizontal visual progress bar** (desktop) / **vertical timeline** (mobile) showing the ~60-day journey. Each phase gets a labeled segment with week ranges, colored proportionally.

**Design:**
- Horizontal bar divided into 5 colored segments (using brand colors: accent, secondary, primary shades)
- Each segment labeled with the phase name and week range
- Animated fill on scroll (via Reveal + CSS transition)
- On mobile, stacks vertically as cards with a connecting line

Also upgrade the six-stage section: wrap each stage in a `Card` with a left accent border and subtle hover elevation, replacing the plain flex layout. The vertical timeline line gets a gradient from accent to primary.

## 2. Adding Life to the Website

Three targeted additions across the site, no heavy libraries needed:

**A. Animated counters on the How It Works page** — Add a small stats strip (e.g., "~60 days", "6 stages", "Zero cost") with numbers that count up when scrolled into view. Pure CSS + a small hook.

**B. Subtle gradient backgrounds** — Replace flat `bg-primary` hero sections with a gradient (`bg-gradient-to-br from-primary via-primary to-[hsl(236_70%_22%)]`) and add a faint radial glow dot. Adds depth without changing the brand.

**C. Hover micro-interactions on cards** — Add `transition-transform hover:-translate-y-1` and `hover:shadow-lg` to the stage cards and any other card grids. Small but noticeable lift.

## Files Changed

### `src/pages/HowItWorks.tsx` — Major rewrite
- Replace timeline bullet list with a visual progress bar component (inline)
- Wrap each stage in a Card with left accent border
- Add animated stat counters section between hero and stages
- Apply gradient to hero and CTA sections
- Add hover lift to stage cards

### `src/index.css` — Add keyframes
- `@keyframes count-up` — for counter animation
- `@keyframes bar-fill` — for progress bar segments
- A utility class `.hover-lift` for the card interaction

### `src/components/Reveal.tsx` — No changes needed
Existing Reveal component handles scroll-triggered visibility.

### `src/pages/Index.tsx` — Minor polish
- Add gradient to hero background
- Add `hover-lift` class to problem cards and path selector cards

