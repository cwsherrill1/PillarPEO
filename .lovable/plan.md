## Goal
Make blog/resource articles easier to read and more visually engaging.

## What I'll change

### 1. Readability bump (all resource articles)
- Bump body copy from `text-base` → `text-lg` (18px) and intro paragraphs from `text-lg` → `text-xl`.
- Increase line-height to `leading-relaxed`/`leading-8` for long-form prose.
- Constrain measure to `max-w-3xl` (already in place on most) and tighten paragraph spacing to `space-y-5`.
- Slightly darken muted body text for contrast (use `text-foreground/80` instead of `text-muted-foreground` for main prose; keep `text-muted-foreground` for captions/meta).
- Apply consistently across `src/pages/resources/*.tsx` and `src/pages/DoWeNeedAPeo.tsx`, `SwitchYourPeo.tsx`, etc.

### 2. Images in blog posts
Two parts:

**a. Hero image per article.** Generate a custom 16:9 hero image for each resource article using the brand palette (Dark Navy + Grass Green, advisor/Exodus aesthetic — no generic SaaS stock). Display it between the hero headline section and the article intro.

**b. One inline supporting image per article** (mid-article visual break) — abstract/editorial illustration, not stock photo people.

Articles getting images (~18 resource pages + 4 location/segment pages). I'll generate with `imagegen` at `standard` quality, save to `src/assets/blog/`, and import per page.

### 3. Shared component
Add a small `<ArticleHero image={...} />` and `<ArticleImage />` wrapper to keep styling consistent (rounded-xl, shadow, proper alt text for SEO/AEO, lazy-loaded).

## What I need from you

1. **Scope** — do all ~22 articles, or start with the top 5–6 (5 Questions, PEO Cost Guide, What Is a PEO, Switch Your PEO, Nonprofits, Startups)?
2. **Image style** — abstract/editorial (architectural, pillars, light, navy/green geometry) OR photographic (real people in offices)? I'd recommend abstract/editorial to stay on-brand and avoid stock-photo feel.
3. **Inline images** — one per article, or just hero images for now?

Once you answer I'll switch to build mode and ship it.
