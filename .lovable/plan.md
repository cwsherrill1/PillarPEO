

# Fix Header: Larger Logo + Lower Nav Breakpoint

## Problems Identified

1. **Logo invisible**: At `h-12 md:h-14` (48-56px), the logo is either too small to notice or not rendering visibly. The header height (`h-16 md:h-20`) barely accommodates it.
2. **Nav links hidden**: The desktop nav uses `lg:flex` (1024px breakpoint). The user's viewport is 1021px — just 3px short — so they only see the hamburger icon, not the menu.

## Solution

### File: `src/components/Header.tsx`

**1. Increase header height and logo size**
- Header: `h-16 md:h-20` → `h-20 md:h-24` (80-96px tall)
- Logo: `h-12 md:h-14` → `h-16 md:h-20` (64-80px, fills the bar)

**2. Lower the nav breakpoint from `lg` to `md`**
All occurrences of `lg:flex` and `lg:hidden` become `md:flex` and `md:hidden`. This shows the full desktop nav at 768px+ instead of 1024px+. There are 4 places:
- Line 48: desktop nav `lg:flex` → `md:flex`
- Line 126: desktop CTA `lg:flex` → `md:flex`
- Line 139: mobile trigger `lg:hidden` → `md:hidden`

**3. Tighten nav spacing for md screens**
Since the nav now appears on smaller screens, reduce padding slightly:
- Nav link text stays `text-sm font-semibold` (already compact)
- Gap between links: `gap-1` (already tight, fine for md)
- CTA button text can stay as-is

These changes ensure the logo is prominent and the navigation is visible on the user's screen size without any layout overflow.

