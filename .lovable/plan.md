

# Phase 13: Code Cleanup and UX Polish

Two issues to address now that all pages are built.

## Problem 1: No Scroll-to-Top on Navigation

When navigating between pages, the browser stays at the current scroll position. Users clicking "Learn more" from the bottom of the homepage land mid-page on the next route. This is a common SPA issue.

**Fix**: Create a `ScrollToTop` component that listens to `useLocation()` pathname changes and calls `window.scrollTo(0, 0)`. Mount it inside `BrowserRouter` in `App.tsx`.

## Problem 2: Duplicated Reveal Component

The identical `Reveal` wrapper is copy-pasted in all 11 page files. Extract it into a shared component.

**Fix**: Create `src/components/Reveal.tsx` and update all 11 page files to import from it, removing the local definitions.

## Implementation

| File | Action |
|------|--------|
| `src/components/Reveal.tsx` | Create shared Reveal component |
| `src/components/ScrollToTop.tsx` | Create scroll-to-top on route change |
| `src/App.tsx` | Add `<ScrollToTop />` inside `BrowserRouter` |
| 11 page files | Remove local Reveal, import from `@/components/Reveal` |

