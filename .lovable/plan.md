

# Fix Header Nav Breakpoint for Tablet

## Problem
At tablet width (768px), the desktop navigation activates via the `md:` breakpoint, but there isn't enough horizontal space for all nav items (Home, How It Works, Solutions dropdown, Resources, About) plus the "Schedule a PEO Strategy Call" CTA button. This causes "How It Works" to wrap to two lines and the nav to look cramped.

## Fix

### `src/components/Header.tsx`
Change all `md:` breakpoints in the header to `lg:` (1024px), so tablet users get the mobile hamburger menu instead of the cramped desktop nav:

- Line 48: `md:flex` → `lg:flex` (desktop nav)
- Line 126: `md:flex` → `lg:flex` (desktop CTA)
- Line 139: `md:hidden` → `lg:hidden` (mobile menu trigger)
- Line 37: `md:h-24` → `lg:h-24` (header height)
- Line 43: `md:h-20` → `lg:h-20` (logo height)

This keeps the hamburger menu active through tablet sizes (768–1023px) where the full nav doesn't fit, and only shows the desktop nav at 1024px+ where there's adequate room.

No other mobile layout issues were found — all cards, sections, CTAs, forms, and the footer stack correctly on mobile and tablet.

