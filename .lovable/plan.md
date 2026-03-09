

# Pillar PEO Advisors — Build Plan

## Summary

A 12-phase build of a premium StoryBrand-style advisory website for Pillar PEO Advisors. Starting with Phase 1: Global design system, header, and footer.

## Answers Captured

- **Caleb Sherrill** — CEO. Founded Pillar after experiencing payroll pain firsthand running a previous company (fines, wasted time on a major payroll platform due to setup mistakes).
- **Josiah Sherrill** — Partner. Background in ministry and recruiting (3 years). Caleb's brother, brought in as the company grew.
- **Faith connection** — Decently explicit. Exodus imagery used openly on About page, subtly elsewhere.
- **Photos/testimonials** — Placeholders for now; will be added later.
- **Primary CTA** — "Compare My Options" (form-based consultation request, given the guided sales process).
- **Audience priority** — Balanced, but switchers likely highest-intent; homepage gives equal visual weight to all three paths.

## Phase 1 Plan: Design System + Header + Footer

### Design System (`src/index.css` + `tailwind.config.ts`)

- Replace CSS variables with brand palette:
  - Primary: Dark Navy `#02084B`
  - Accent/success: Grass Green `#2ECC71`
  - Secondary: Soft Blue `#56CCF2`
  - Warning: Bold Yellow `#FFC107`
  - Greys: `#6C757D`, `#E5E5E5`, `#FFFFFF`
- Import Google Fonts: **League Spartan** (headlines), **Nunito Sans** (body) via `index.html`
- Add font-family utilities in Tailwind config (`font-heading`, `font-body`)
- Add custom keyframes: `fade-up`, `fade-in` for scroll animations
- Add subtle glow/glow-green box-shadow utilities
- Set base body styles to Nunito Sans, navy text on white

### Header Component (`src/components/Header.tsx`)

- Sticky desktop header with navy background
- Logo text "PILLAR" in League Spartan with subtle green accent bar (pillar motif)
- Nav links: Home, How It Works, Solutions (dropdown: Switch Your PEO, PEO for Nonprofits, Do We Need a PEO Yet?), Resources, About, Team, Contact
- Primary CTA button: "Compare My Options" (green)
- Secondary link: "Get the Buyer Guide"
- Mobile: hamburger menu with slide-out sheet
- Elegant hover states, no harsh transitions

### Footer Component (`src/components/Footer.tsx`)

- Navy background, white/light text
- Brand statement: short Pillar positioning line
- Link columns: Navigation, Solutions, Resources, Company
- CTA block: "Ready to compare your options?" with green button
- Contact details placeholder (email, phone)
- "Why Pillar" anchor link to About page section
- Legal row: Privacy, Terms, copyright
- Subtle pillar/vertical accent line motif

### Layout Component (`src/components/Layout.tsx`)

- Wraps Header + children + Footer
- Applied to all routes

### Routing Updates (`src/App.tsx`)

- Add all page routes with placeholder page components
- Pages: `/`, `/how-it-works`, `/switch-your-peo`, `/peo-for-nonprofits`, `/do-we-need-a-peo`, `/resources`, `/about`, `/team`, `/contact`

### Files to Create/Modify

| File | Action |
|------|--------|
| `index.html` | Add Google Fonts links |
| `src/index.css` | Replace CSS variables with brand palette |
| `tailwind.config.ts` | Add font families, custom colors, animations |
| `src/components/Header.tsx` | Create sticky nav with dropdown + mobile menu |
| `src/components/Footer.tsx` | Create branded footer |
| `src/components/Layout.tsx` | Create page wrapper |
| `src/App.tsx` | Add all routes with Layout wrapper |
| `src/pages/*.tsx` | Create placeholder pages for all 9 routes |

### Technical Details

- Solutions dropdown uses Radix `NavigationMenu` for accessible keyboard nav
- Mobile menu uses existing `Sheet` component (slide from right)
- Scroll animations via Intersection Observer utility hook (`useScrollReveal`)
- All colors defined as HSL CSS variables for dark mode readiness
- League Spartan weights: 700, 800. Nunito Sans weights: 400, 600, 700.

