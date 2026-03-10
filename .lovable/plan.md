

# Phase 1: Homepage Audit + Navigation Audit

This is phase 1 of 6 in the full website audit. This phase covers the homepage evaluation and navigation review only.

---

## HOMEPAGE AUDIT

### 1. Hero Section

**What works:**
- Headline is clear and passes the 5-second test: "Compare PEO options without guessing." Simple, specific, no jargon.
- Subhead explains what the company does in plain language.
- Primary CTA ("Schedule a PEO Strategy Call") is specific and low-friction.
- Two CTAs (primary + secondary) is the right amount.

**Problems:**
- **Support chips feel decorative, not functional.** "Buyer-side guidance", "Better-fit comparisons", "Clear process", "Steady support" — these are abstract benefit labels that don't communicate concrete value. A first-time visitor won't know what "Buyer-side guidance" means. They add visual noise without earning trust.
- **No social proof in the hero.** No client count, no industry mention, no credibility marker. The hero relies entirely on messaging with zero evidence. Even a line like "Trusted by 50+ employers" or "Serving teams of 5–150" would add weight.
- **The hero background decorative elements (gradient lines, blur circles) are subtle but add unnecessary complexity** to an otherwise clean section. They don't hurt but they don't help either.

**Recommended fixes:**
1. Replace support chips with a single social proof line or remove them. Example: "Serving employers with 5–150 employees across the Southeast."
2. Or convert chips into concrete proof points: "60-day average process", "Side-by-side comparisons", "Zero cost to employers" (if applicable).

### 2. Visual Hierarchy

**Problems:**
- **The homepage is extremely long — 11 sections.** That's a lot of scrolling. Sections 4 (Problem), 6 (Guide), and 8 (Outcomes) all use the same 6-card grid layout with identical visual treatment. This creates visual monotony. The eye stops differentiating between sections.
- **Section 6 (Guide) and Section 8 (Outcomes) are nearly identical visually** — same 3-column card grid, same icon + title + description pattern, same padding. A user scanning will think they're the same section.
- **Section 9 (Why Pillar Preview) is weak.** It's a single centered paragraph with a "Read Our Story" button floating in space. It doesn't earn the click because it doesn't give the user a reason to care yet. It should either be removed or combined with the Guide section.
- **The Myth vs Truth section (5) uses a 2-column card layout** that breaks the visual rhythm in a good way — but at 4 rows of paired cards, it becomes repetitive.

**Recommended fixes:**
1. Merge the Guide section (6) and Outcomes section (8) into a single "What you get" section with two visual treatments (e.g., left-aligned list for the process, right-side outcome summary).
2. Reduce Myth vs Truth to 2-3 items max on the homepage. Link to a full version if needed.
3. Remove or redesign the "Why Pillar Preview" section — it's a dead zone that breaks flow before the FAQ.

### 3. Messaging Clarity (StoryBrand)

**StoryBrand element check:**

| Element | Present? | Quality |
|---------|----------|---------|
| Character (customer) | Yes | Implied as "employers" — could be more specific |
| Problem | Yes | Section 4 does this well with 6 pain points |
| Guide | Yes | Section 6 positions Pillar as guide |
| Plan | Yes | 3-step plan in section 7 |
| CTA | Yes | Clear and consistent |
| Success | Yes | Section 8 (outcomes) |
| Failure | Weak | Not explicitly stated — what happens if they DON'T act? |

**Problems:**
- **The Problem section (4) has 6 cards, which dilutes focus.** StoryBrand recommends ONE clear problem. Six problems overwhelm and make the visitor think "this is complicated." Pick the top 2-3 that resonate most.
- **No failure state.** The copy says "the wrong setup costs more than the monthly fee" but never explicitly shows what continued inaction looks like. There's no urgency.
- **"You do not need to figure this out alone" (Guide section) is good** but the 6-card treatment underneath makes it feel like a product feature list, not a guide introduction. The guide should feel personal, not like a feature matrix.

**Recommended fixes:**
1. Reduce Problem cards from 6 to 3. Keep: "Leadership time disappears", "Mistakes get expensive", "Renewals create pressure."
2. Add a failure/urgency line after the Problem section: "Every month you wait, the cost compounds."
3. Simplify the Guide section to 3 bullets max, or convert to a short narrative paragraph instead of a card grid.

### 4. Cognitive Load

**Problems:**
- **11 sections is too many.** The homepage tries to do everything: hero, trust strip, path selector, problem, myth/truth, guide, plan, outcomes, about preview, FAQ, final CTA. This is information overload.
- **Three identical 6-card grids** (Problem, Guide, Outcomes) create decision fatigue even though no decision is required.
- **The path selector (3 cards) appears too early.** A visitor who just arrived doesn't know which path they belong to yet. The Problem section should come first to create tension, THEN the path selector offers relief.

**Recommended fixes:**
1. Reduce homepage to 7-8 sections max: Hero → Problem (3 cards) → Plan (3 steps) → Path Selector → Myth vs Truth (2 items) → FAQ → Final CTA.
2. Move the Path Selector AFTER the Problem section, not before it.
3. Remove the Guide and Outcomes sections from the homepage — they belong on the How It Works page.
4. Remove the "Why Pillar Preview" section entirely.

---

## NAVIGATION AUDIT

### Current structure:
```text
Home | How It Works | Solutions ▾ | Resources | About | Team | Contact
                     ├─ Switch Your PEO
                     ├─ PEO for Nonprofits
                     └─ Do We Need a PEO Yet?

Right side: "Get the Buyer Guide" (text link) | [Schedule a PEO Strategy Call] (button)
```

**Problems:**

1. **Too many top-level items (7 + dropdown + 2 CTAs).** That's 9 clickable things in the nav. For a small advisory firm with a simple offering, this is excessive. It dilutes focus and creates choice paralysis.

2. **"About" and "Team" should be one page.** There's no reason for a visitor to navigate to two separate pages to learn about the company. The Team section (2 founders + 4 placeholder cards) doesn't justify its own page. Merge Team content into About.

3. **"Resources" competes with the primary CTA.** "Get the Buyer Guide" as a separate text link in the nav AND "Resources" as a nav item creates confusion. Which one do I click? They go to different destinations (one to /resources, the other also to /resources).

4. **"Contact" is a separate page** but the primary CTA goes to HubSpot booking. This creates a split funnel — some visitors will go to /contact, others to HubSpot. The site should pick one primary conversion path and stick to it.

5. **The Solutions dropdown labels are confusing.** "Do We Need a PEO Yet?" is a question, not a solution name. "PEO for Nonprofits" and "Switch Your PEO" are action-oriented but inconsistent in style.

**Recommended fixes:**

1. **Reduce nav to 5 items max:** Home | How It Works | Solutions ▾ | About | Resources. Remove Team (merge into About) and Contact (the booking link IS the contact action).
2. **Remove "Get the Buyer Guide" from the nav.** It's redundant with Resources and competes with the primary CTA.
3. **Rename "Do We Need a PEO Yet?" to "First-Time PEO"** for consistency with the other solution labels.
4. **Keep Contact as a footer-only destination**, not a main nav item. The form should be a fallback, not a primary path.

---

## Summary of Phase 1 Recommendations

**High-impact changes:**
1. Reduce homepage from 11 sections to 7-8
2. Reorder: Problem before Path Selector
3. Reduce card grids from 6 items to 3
4. Merge About + Team pages
5. Simplify nav from 7 items to 5

**Quick wins:**
1. Replace support chips with social proof
2. Remove "Why Pillar Preview" section
3. Remove "Get the Buyer Guide" text link from nav
4. Rename "Do We Need a PEO Yet?" to "First-Time PEO" in nav

---

*Phase 2 will cover the page-by-page review (About, Team, How It Works, Solution pages, Resources, Contact). Reply to proceed.*

