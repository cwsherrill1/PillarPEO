# Swap hero image to real photo of Caleb & Josiah

## Steps

1. **Convert the HEIC upload** to a web-friendly JPG using ImageMagick (HEIC isn't supported by browsers). Save as `src/assets/hero-team.jpg`, replacing the existing stock photo. Target ~1200px on the long side, quality 85, for a sharp but lightweight hero.

2. **Update the hero `<img>` in `src/pages/Index.tsx`:**
   - Change `alt` to `"Caleb and Josiah Sherrill, founders of Pillar PEO Advisors"` (real names = better E-E-A-T and AEO signals)
   - Adjust the image container so faces aren't clipped at the 884px viewport (object-position tuning, slightly taller aspect ratio if needed)
   - Add a small caption under the photo: *"Caleb & Josiah Sherrill, Founders"* — subtle trust signal that ties the hero to the About page

3. **Update Organization JSON-LD** in `src/pages/Index.tsx` to add an `image` field pointing at the new hero photo (absolute URL), reinforcing the real-human signal for search/AI.

4. **Visual QA** after the swap: load the homepage at 884px and at desktop width, confirm both faces are visible and the crop looks natural. If the framing is off, I'll adjust object-position or come back to you for a different shot.

## Notes / risks

- I cannot preview the HEIC in this environment, so I'm trusting that the photo meets the guidelines we discussed (both visible, decent lighting, uncluttered background). If after the swap it doesn't land, easiest fix is a different photo.
- No copy changes, no layout restructure beyond the hero image block.
