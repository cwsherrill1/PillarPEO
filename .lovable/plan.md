

# Improve Mobile Tap Feedback on Quiz Answers

## Problem
The `active:` styles (border-accent, shadow, scale) only show while the finger is physically touching the screen — they disappear instantly on release, making it hard to tell what was tapped.

## Solution
Add a brief visual "flash" on tap using a background color change and the letter circle highlight via `active:` states, making the feedback much more obvious:

### Changes to `src/components/quiz/QuizQuestion.tsx`

**Answer button** — add `active:bg-accent/10` (light green background flash) so the entire card visibly responds to touch, not just the border:
- Current: `active:border-accent active:shadow-md active:scale-[0.98]`
- New: `active:border-accent active:bg-accent/10 active:shadow-md active:scale-[0.98]`

**Letter circle** — add `group-active:` styles so the circle also highlights on tap (matching the hover behavior but for touch):
- Add: `group-active:border-accent group-active:bg-accent group-active:text-accent-foreground`

This gives mobile users three simultaneous signals on tap: background tint, border color, and letter circle highlight — clear and immediate feedback without any "sticky" issues since `active:` only applies during the press.

