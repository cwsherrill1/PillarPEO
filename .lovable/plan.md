

# Readability and Spacing Improvements

## Problems Identified

After reviewing all pages, these readability issues stand out:

1. **Card body text too small** — Problem cards, Guide cards, Outcome cards, Myth/Truth cards, and Path Selector cards all use `text-sm` (14px) for descriptions. On a wide screen this feels tiny and hard to scan.

2. **Solution pages feel empty** — PeoForNonprofits and DoWeNeedAPeo have only 3-6 short paragraphs between two full-width hero/CTA sections, wrapped in `py-20 md:py-28` (80px-112px padding). This creates an uncomfortable amount of whitespace around very little content.

3. **Bullet list text is small** — Timeline, Documents, Signs, and belief lists use base or small text with tiny dot markers that are hard to scan.

4. **Myth/Truth cards are dense but small** — The `text-sm` inside these cards makes them feel cramped and hard to read quickly.

5. **Three-step plan descriptions are small** — `text-sm` on the homepage step descriptions.

## Changes

### All Pages — Text Size Bumps

Bump `text-sm` to `text-base` on card descriptions across:
- `Index.tsx`: Problem cards (line 255), Guide cards (line 394), Outcome cards (line 509), Three-step descriptions (line 445), Path Selector descriptions (line 178), Myth/Truth body text (lines 310, 324)
- `SwitchYourPeo.tsx`: Signs list items (line 87), Myth/Truth body text (lines 116, 129)
- `HowItWorks.tsx`: Audience descriptions (line 249), timeline/document list items

### Solution Pages — Reduce Empty Space, Increase Text

**PeoForNonprofits.tsx** and **DoWeNeedAPeo.tsx**:
- Reduce narrative section padding from `py-20 md:py-28` to `py-14 md:py-20`
- Increase narrative text from `text-base md:text-lg` to `text-lg md:text-xl`
- Reduce CTA section padding similarly

### HowItWorks.tsx
- Bump timeline and document list text to `text-base md:text-lg`
- Bump audience card descriptions from `text-sm` to `text-base`

### About.tsx
- Reduce CTA subtext opacity from `text-primary-foreground/60` to `/80` for better contrast

### Resources.tsx
- Bump resource card descriptions from `text-sm` to `text-base`

## Files to Edit

| File | Scope |
|------|-------|
| `src/pages/Index.tsx` | ~8 class changes (text-sm → text-base) |
| `src/pages/SwitchYourPeo.tsx` | ~3 class changes |
| `src/pages/PeoForNonprofits.tsx` | Reduce padding, increase text size |
| `src/pages/DoWeNeedAPeo.tsx` | Reduce padding, increase text size |
| `src/pages/HowItWorks.tsx` | ~4 class changes |
| `src/pages/About.tsx` | 1 opacity fix |
| `src/pages/Resources.tsx` | ~2 class changes |

All changes are CSS class adjustments only — no content or structure changes.

