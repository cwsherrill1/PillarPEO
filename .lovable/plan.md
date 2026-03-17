

# Fix Duplicate CTA and Improve Bottom-of-Page Flow

## Problem
The homepage's **Final CTA section** (section 8) and the **Footer CTA band** both say "Make a confident next-step decision" with nearly identical copy and the same booking button. On mobile, these appear back-to-back as two large dark sections with the same message — it feels broken and repetitive.

## Recommendation

**Remove the Final CTA section (section 8) from the homepage entirely.** The Footer CTA band already serves this purpose on every page. Having both is redundant — the FAQ section flows naturally into the footer's CTA band, which provides the closing call-to-action.

This means the homepage flow becomes:
1. Hero
2. Trust Strip
3. Problem (3 cards)
4. Three-Step Plan
5. Mid-Page CTA
6. Path Selector
7. Myth vs Truth
8. FAQ
9. Footer (with built-in CTA band)

The FAQ section ends on a helpful, informative note, and the footer CTA band immediately follows with the action prompt. Clean transition, no repetition.

## Changes

### `src/pages/Index.tsx`
- Delete the entire "FINAL CTA" section (approximately lines 400–445) — the `<section>` with the dark gradient background containing "Make a confident next-step decision" heading and the two buttons.

That's it — one deletion fixes the duplication while keeping a strong closing CTA via the footer.

