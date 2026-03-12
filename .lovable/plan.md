

# Make Logo Visible — White Header Bar

## Problem
The uploaded logo has dark colors that disappear against the dark navy (`bg-primary`) header background.

## Solution
Switch the header to a **white background** with dark navy text. This makes the logo visible and creates a clean contrast between the header and the dark hero section below.

### File: `src/components/Header.tsx`

1. **Header bar** (line 36): Change from `bg-primary/95` to `bg-white/95` with a subtle bottom border
2. **Nav links** (lines 50-60, 109-120): Change text from `text-primary-foreground/80` → `text-foreground/70` and active from `text-accent` → `text-accent` (keep green active state)
3. **Solutions dropdown button** (lines 72-84): Same text color swap
4. **Solutions dropdown panel** (line 92): Change from `bg-primary` to `bg-white` with proper border
5. **Solutions dropdown links** (lines 94-105): Adjust text colors for light background
6. **Mobile menu trigger** (lines 137-139): Change icon color from `text-primary-foreground` to `text-foreground`
7. **Logo size**: Increase to `h-12 md:h-14` for better visibility

### File: `src/components/Footer.tsx`
No changes needed — the `brightness-0 invert` approach works fine on the dark footer.

