

# Remaining Readability Fixes

After reviewing all pages, the three solution pages (SwitchYourPeo, PeoForNonprofits, DoWeNeedAPeo) have proper text sizing now. However, several other pages still have small text or low-contrast issues that were missed.

## Issues Found

| File | Line | Problem | Fix |
|------|------|---------|-----|
| `Team.tsx` | 83 | Founder bios use `text-sm` — these are long paragraphs that are hard to read at 14px | `text-base` |
| `Team.tsx` | 141 | CTA subtext uses `/60` opacity — too faint | `/80` |
| `Team.tsx` | 43 | Hero subtext uses `/70` opacity | `/80` |
| `About.tsx` | 21 | Hero subtext uses `/70` opacity | `/80` |
| `Contact.tsx` | 220 | "What to Expect" step descriptions use `text-sm` | `text-base` |
| `Resources.tsx` | 99 | Hero subtext uses `/70` opacity | `/80` |
| `Resources.tsx` | 232 | Final CTA subtext uses `/70` opacity | `/80` |

## Scope

7 class changes across 4 files. All are CSS-only — no content or layout changes.

