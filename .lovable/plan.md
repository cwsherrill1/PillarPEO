

# Phase 14: Full Copy Overhaul + Real Contact Info

The provided copy document contains significant changes across every page. This plan covers all of them, organized by scope.

## Global Changes (affects Header, Footer, and all CTAs)

| Change | Before | After |
|--------|--------|-------|
| Primary CTA label | "Compare My Options" | "Schedule a PEO Strategy Call" |
| CTA destination | `/contact` (form) | `https://meetings.hubspot.com/caleb-sherrill` (external link) |
| Contact email | `hello@pillarpeo.com` | `caleb@pillarpeo.com` |
| Contact phone | `(555) 123-4567` | `704-787-1261` |

The primary CTA buttons site-wide will become external `<a>` links to the HubSpot booking page instead of internal `<Link to="/contact">`. The secondary/transitional CTAs ("See How It Works", "Get the Buyer Guide") stay as internal links.

## Files to Edit

### 1. `src/components/Header.tsx`
- CTA button: "Schedule a PEO Strategy Call" → external link

### 2. `src/components/Footer.tsx`
- CTA button label update
- Fill in real email and phone number

### 3. `src/pages/Index.tsx` (largest change)
- Hero: CTA label change
- Support chips: minor label tweaks ("Buyer-side guidance", "Better-fit comparisons", "Clear process", "Steady support")
- Trust strip: update 4 items to match copy
- Path selector: new headline "Start where you are.", new intro text, new card copy + CTA labels ("Explore PEO Switching", "Explore Nonprofits", "Explore First-Time PEO")
- Problem section: new body text, new card titles/descriptions (6 cards: "Leadership time disappears", "Renewals create pressure", "Service becomes a drain", "Growth exposes weak spots", "Mistakes get expensive", "Delay becomes its own cost")
- Myth vs truth: new headline, 4 myths instead of 3, all new copy
- Guide section: new body text, updated bullet labels
- Three-step plan: updated step descriptions
- Transformation section: updated outcome descriptions
- Why Pillar preview: updated body text
- FAQ: replace all 6 Q&As with the 5 from the copy doc
- Final CTA: new body text, "Schedule a PEO Strategy Call" + "Get the Buyer Guide"

### 4. `src/pages/About.tsx` (full rewrite)
Replace the current generic content with the founder story:
- Hero: "Built to guide employers through weighty decisions."
- Section 1: "How Pillar started" — Caleb's origin story (multiple paragraphs)
- Section 2: "Why the work matters" — employer-deserves-better narrative
- Section 3: "How Josiah joined" — brother/partner story
- Section 4: "Why the name Pillar" — Exodus reference
- Section 5: "What we believe" — 5 bullet values (replaces old 4-card values grid)
- CTA: "Need clarity on what comes next?" with "Schedule a PEO Strategy Call"

### 5. `src/pages/Team.tsx` (full rewrite)
Replace fake team members with real founders:
- Hero: "Meet the team behind Pillar." + new subhead
- Founder intro paragraph
- Caleb Sherrill card (CEO) with real bio from copy
- Josiah Sherrill card (Partner) with real bio from copy
- "Built to grow with purpose" section with 4 placeholder future role cards
- CTA update

### 6. `src/pages/HowItWorks.tsx` (significant expansion)
- Hero: headline stays similar, subhead updated
- Add intro paragraph before steps
- Expand from 4 steps to 6 stages (Discovery, Data gathering, Underwriting, Proposal review, Demos/decision, Signing/onboarding)
- Add "Timeline" section with bullet details
- Add "Documents" section listing what's needed
- CTA: "Schedule a PEO Strategy Call"

### 7. `src/pages/SwitchYourPeo.tsx`
- Hero: "Your current PEO may not be your best fit." + new subhead
- Pain points: replace 6 cards with 5 simpler bullet-style items from copy
- Add Myth vs Truth section (3 pairs)
- Remove differentiators and mini-steps sections (simplify)
- CTA: "Book a PEO Switch Review"

### 8. `src/pages/PeoForNonprofits.tsx`
- Hero: "More mission. Less admin drag." + new subhead
- Replace challenges/lookFor grids with simpler narrative section
- CTA: "Schedule a Nonprofit Strategy Call"

### 9. `src/pages/DoWeNeedAPeo.tsx`
- Hero: "Growth is outrunning your HR." + new subhead
- Replace detailed cards with simpler narrative section
- CTA: "Book a First-Time PEO Strategy Call"

### 10. `src/pages/Contact.tsx`
- Update contact info cards (email, phone)
- Update hero copy
- CTA button labels

## Technical Notes

- All "Schedule a PEO Strategy Call" buttons will use `<a href="https://meetings.hubspot.com/caleb-sherrill" target="_blank" rel="noopener noreferrer">` instead of `<Link to="/contact">`.
- Page-specific CTAs like "Book a PEO Switch Review" and "Schedule a Nonprofit Strategy Call" will also link to the same HubSpot URL.
- The `/contact` page stays as a form-based fallback for general inquiries.
- All existing design patterns, animations, and component usage remain unchanged — only copy and link targets change.

