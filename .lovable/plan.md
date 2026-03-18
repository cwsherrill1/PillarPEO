

# Add "HR Quiz" to Top-Level Navigation

## Change

**`src/components/Header.tsx`** — Add `{ label: "HR Quiz", href: "/hr-headache-score" }` to the `navLinks` array. It will appear as a top-level nav item between "Resources" and "About" in both the desktop nav bar and the mobile hamburger menu. No other files need changes.

One consideration: at the current viewport (~1021px, right at the `lg` breakpoint), 5 nav items + Solutions dropdown + the CTA button may be tight. I'll verify the spacing works and adjust `gap` or `px` values on nav links if needed to prevent wrapping.

