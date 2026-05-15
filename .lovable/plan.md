## Plan: Add team photos + Emily Snooks (COO)

### 1. Save uploaded photos
Copy the three uploads into `src/assets/team/`:
- `caleb-sherrill.jpg` (image-2)
- `josiah-sherrill.jpg` (image-3)
- `emily-snooks.jpg` (image-4)

### 2. Update `src/pages/About.tsx`
- Import the three images and `AvatarImage` from the avatar component.
- Extend the `founders` array (rename to `team`) with an `image` field on each member.
- Add Emily as a third entry:
  - **Name:** Emily Snooks
  - **Title:** COO
  - **Bio (shortened):** "Emily brings 6+ years of operations leadership across remote teams, finance, and event management. As COO, she keeps Pillar's workflows, bookkeeping, and client experience running smoothly — so advisory work stays focused on employers."
- Update the team grid: keep `md:grid-cols-2` for 2 cards, switch to `md:grid-cols-3` now that there are 3.
- Render `<AvatarImage src={m.image} alt={m.name} />` with the existing `AvatarFallback` initials as backup.

### 3. Update JSON-LD
Add a third `Person` entry for Emily Snooks (jobTitle: "Chief Operating Officer", worksFor: Pillar PEO Advisors) in the `@graph`.

### Out of scope
- No copy changes elsewhere on the page.
- No new routes, no SEO changes beyond the added Person node.
