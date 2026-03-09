

# Phase 11: Contact Page

Replace the placeholder Contact page with a full lead-capture and consultation request page.

## Sections

### 1. Hero
- Navy background (`bg-primary`), headline: "Let's find the right PEO for your team."
- Subhead: no-pressure consultation positioning

### 2. Contact Form
- Fields: Name, Email, Company, Number of Employees (select: 5-25, 25-50, 50-150, 150+), Message (textarea)
- Submit button with accent styling
- Uses existing `Input`, `Select`, `Textarea`, `Button`, `Label` components
- Client-side only (no backend) — show a `sonner` toast on submit confirming receipt
- Wrapped in a Card for visual containment

### 3. Other Ways to Reach Us
- 3 cards side-by-side: Email, Phone, Location (all placeholder data)
- Icons: `Mail`, `Phone`, `MapPin`

### 4. What to Expect
- 3-step mini timeline: "We'll reach out within 1 business day" → "Brief discovery call" → "Custom PEO comparison"
- Reinforces the structured, no-pressure process

### 5. Final reassurance strip
- Short text: "No sales pitch. No obligation. Just clarity." — lightweight, no CTA needed

## Implementation

| File | Action |
|------|--------|
| `src/pages/Contact.tsx` | Replace placeholder with full page |

Same patterns: `useScrollReveal`, `Reveal`, `Card`, `Button`, `Input`, `Textarea`, `Label`, `Select`, `sonner` toast, `lucide-react` icons.

