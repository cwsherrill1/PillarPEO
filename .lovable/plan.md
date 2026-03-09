

# Phase 12: Polish and Missing Pages

All core content pages are built. This phase addresses remaining gaps: the 404 page, Privacy Policy, Terms of Service (both linked from the footer), and the NotFound page upgrade.

## What to Build

### 1. NotFound Page Upgrade (`src/pages/NotFound.tsx`)
- Match site design: navy hero section, branded styling
- Friendly copy, search suggestions (links to popular pages)
- Proper `Link` component instead of `<a>` tag
- Remove `min-h-screen` (Layout already handles structure)

### 2. Privacy Policy Page (`src/pages/Privacy.tsx`)
- Simple legal-style page with placeholder sections: Information We Collect, How We Use It, Data Sharing, Your Rights, Contact
- Placeholder text — client will replace with real legal copy
- Clean typography, no heavy design needed

### 3. Terms of Service Page (`src/pages/Terms.tsx`)
- Similar structure: placeholder legal sections (Acceptance, Services, Limitations, Governing Law, Contact)
- Matching layout to Privacy page

### 4. Register New Routes (`src/App.tsx`)
- Add `/privacy` and `/terms` routes

## Implementation

| File | Action |
|------|--------|
| `src/pages/NotFound.tsx` | Redesign with branded layout |
| `src/pages/Privacy.tsx` | Create with placeholder legal content |
| `src/pages/Terms.tsx` | Create with placeholder legal content |
| `src/App.tsx` | Add Privacy and Terms routes |

Same patterns: `useScrollReveal`, `Reveal` wrapper, `Button`, `Link`.

