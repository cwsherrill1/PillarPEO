

# Add Pillar PEO Logo to Header and Footer

## What changes

The site currently uses a text-only "PILLAR" wordmark with a green accent bar in both the **Header** (line 39-48) and **Footer** (line 38-43). We'll replace those with the uploaded transparent-background logo image.

## File: `public/pillar-logo.png`
Copy `user-uploads://pillar-peo-logo_1.png` (transparent background) to the public directory.

## File: `src/components/Header.tsx` (lines 39-48)
Replace the text logo with an `<img>` tag:
```tsx
<Link to="/" className="flex items-center">
  <img
    src="/pillar-logo.png"
    alt="Pillar PEO Advisors"
    className="h-10 md:h-12 w-auto"
  />
</Link>
```

## File: `src/components/Footer.tsx` (lines 37-43)
Replace the text logo with the same image, inverted/brightened for the dark background:
```tsx
<div className="lg:col-span-1">
  <img
    src="/pillar-logo.png"
    alt="Pillar PEO Advisors"
    className="h-10 w-auto brightness-0 invert"
  />
```
The `brightness-0 invert` classes turn the dark logo white so it's visible on the dark primary background. If the logo's colors should stay as-is (the green accent is already light enough), we can drop those classes.

## File: `index.html`
Update the favicon reference if desired (optional, separate step).

Three files changed total. No structural or layout changes beyond swapping the logo elements.

