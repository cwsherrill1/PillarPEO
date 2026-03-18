

# Hero: Two-Column Layout with Left-Aligned Text + Stock Image

## Changes to `src/pages/Index.tsx` (hero section, lines 41-73)

**Layout**: Convert the centered single-column hero into a two-column grid:
- **Left column**: Left-aligned headline, subheadline, and CTA buttons
- **Right column**: Stock image (using `/placeholder.svg` for now)

**Headline**: Two lines only — "Simplify your Human Resources." on line 1, "Focus on your people, not paperwork." on line 2. Left-aligned, not centered.

**Structure**:
```text
┌─────────────────────────────────────────────────┐
│  Simplify your Human       │                    │
│  Resources.                │   [Stock Image]    │
│  Focus on your people,     │                    │
│  not paperwork.            │                    │
│                            │                    │
│  Subheadline text...       │                    │
│  [CTA] [CTA]              │                    │
└─────────────────────────────────────────────────┘
```

On mobile, stacks vertically (image below text). Uses `grid md:grid-cols-2` with `items-center`. Image uses a rounded container with a placeholder for now.

