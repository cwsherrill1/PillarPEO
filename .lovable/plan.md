

# Fix: Invisible Outline Buttons on Dark Backgrounds

## Problem

The `outline` button variant includes `bg-background` (white). When used on navy/dark sections, the white background makes white text invisible. This affects outline buttons across multiple pages — most visibly the "See How It Works" button on the homepage hero.

## Root Cause

In `src/components/ui/button.tsx`, the `outline` variant is defined as:
```
outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
```

The `bg-background` sets a white background, but the inline `text-primary-foreground` (white text) classes on each button can't override the background.

## Fix

Add `bg-transparent` to every outline `Button` used on a dark (`bg-primary`) section. This is the safest approach — it doesn't break outline buttons used on light sections elsewhere.

## Files to Edit

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Add `bg-transparent` to 3 outline buttons (lines ~98, ~572, ~664) |
| `src/pages/HowItWorks.tsx` | Add `bg-transparent` to 1 outline button (line ~261) |
| `src/pages/SwitchYourPeo.tsx` | Add `bg-transparent` to 2 outline buttons (lines ~94, ~240) |
| `src/pages/PeoForNonprofits.tsx` | Add `bg-transparent` to 2 outline buttons (lines ~94, ~240) |
| `src/pages/DoWeNeedAPeo.tsx` | Add `bg-transparent` to 2 outline buttons (lines ~107, ~284) |
| `src/pages/About.tsx` | Add `bg-transparent` to 2 outline buttons (lines ~123, ~279) |
| `src/pages/Team.tsx` | Add `bg-transparent` to 1 outline button (line ~218) |
| `src/pages/Resources.tsx` | Add `bg-transparent` to 1 outline button (line ~270) |

Each fix is a single class addition to the existing `className` string.

