## Fix Author Name Visibility + Make Resource Cards Fully Clickable

### Problem 1: Author name invisible on resource pages
The `ArticleByline` component uses `text-foreground` (dark navy) for "By Caleb Sherrill", but it's rendered inside `bg-primary` (dark navy) hero sections. Dark text on dark background = invisible. The `text-muted-foreground` on the parent div and the "Published" line are also at risk.

### Fix 1: Update `src/components/ArticleByline.tsx`
- Change the outer div's text color from `text-muted-foreground` to `text-primary-foreground/80` so all text inherits a light, readable color.
- Change the author name `text-foreground` to `text-primary-foreground` so it stands out.
- Keep `text-muted-foreground` on the "· Founder, PEO Advisor" span, but adjust to `text-primary-foreground/70` for consistency.
- Keep the LinkedIn link as `text-accent` (already visible on dark backgrounds).

### Problem 2: Only the "Read More" button navigates on resource cards
In `src/pages/Resources.tsx`, the resource grid cards have a `<Link>` only around the bottom "Read More" text. Users expect the whole card to be clickable.

### Fix 2: Update `src/pages/Resources.tsx`
- Wrap each `Card` in a `<Link to={r.href}>` so the entire card surface is clickable.
- Remove the inner `<Link>` around "Read More" — replace it with a non-interactive `<span>` that keeps the same visual styling (arrow, accent color, hover state via parent `group-hover`).
- Add `cursor-pointer` to the card wrapper.
- Ensure no nested `<a>` tags (invalid HTML). The card's icon, title, description, and "Read More" area all become part of one single link surface.