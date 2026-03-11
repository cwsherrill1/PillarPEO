

# Expand the Myths Section on the Homepage

## Current State
The homepage has 2 myth/truth pairs in a side-by-side card layout (lines 296-354). The current myths cover "All PEOs are basically the same" and "Switching is too disruptive."

## Proposed Structure

Expand from 2 to 4 myths. Four keeps the section impactful without overwhelming the page. The layout stays as side-by-side Myth/Truth cards but stacks well on mobile.

### Proposed myths (existing + 2 new):

| # | Myth | Truth |
|---|------|-------|
| 1 | "All PEOs are basically the same." | Pricing, service structure, support quality, and long-term fit can vary more than people realize. *(existing)* |
| 2 | "Switching is too disruptive." | Staying in the wrong setup often creates its own ongoing disruption. A guided transition can be far more manageable than people expect. *(existing)* |
| 3 | "We're too small to need a PEO." | Employers with as few as 5 employees often benefit the most — better benefits, compliance coverage, and time back for leadership. |
| 4 | "PEOs are just glorified payroll companies." | Payroll is one piece. The real value is in benefits access, risk management, and HR infrastructure you'd otherwise have to build yourself. |

## Change

**File: `src/pages/Index.tsx`** — Add 2 new entries to the myths array (lines 308-318). No layout or structural changes needed; the existing `.space-y-8` stack handles any number of items cleanly.

