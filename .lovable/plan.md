
Update the homepage hero in `src/pages/Index.tsx` so the headline stays as exactly two lines at desktop/tablet widths and the image area shows a real photo instead of the placeholder.

What I’ll change:
- Keep the hero as a two-column layout.
- Make the left text block truly left-aligned and give it a little more usable width.
- Change the headline so each sentence is its own block line:
  - `Simplify your Human Resources.`
  - `Focus on your people, not paperwork.`
- Add responsive no-wrap behavior on medium/desktop screens so each sentence stays on one line there, while still allowing wrapping on small mobile screens.
- Adjust the hero heading sizing if needed so it fits cleanly at the current ~1021px viewport.
- Replace `/placeholder.svg` in the hero with a real stock-style team/HR photo in the right column.
- Keep the mobile behavior stacked, with text first and image below.

Technical details:
- File: `src/pages/Index.tsx`
- Likely approach:
  - Wrap each headline line in its own `<span className="block ...">`
  - Use responsive classes such as `md:whitespace-nowrap`
  - Slightly tune heading size/line-height or grid proportions so the lines fit at the current breakpoint
  - Swap the hero `<img src>` from the placeholder to a real image source and keep rounded corners/shadow styling

Expected result:
- Desktop/tablet: exactly 2 headline lines, one sentence per line
- Mobile: still responsive and readable
- Hero image area: actual photo instead of the gray placeholder
