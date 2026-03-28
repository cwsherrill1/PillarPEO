

# Fix: Sticky Hover/Highlight on Mobile Quiz Answers

## Problem
On mobile (touch devices), tapping a quiz answer triggers the CSS `:hover` state which "sticks" after the tap — unlike desktop where hover clears when the cursor moves away. This makes the previously tapped answer appear highlighted on the next question.

## Root Cause
The existing fix (`.blur()` + `focus:` styles) addresses keyboard/mouse focus but not the mobile-specific sticky `:hover` problem. On touch screens, `:hover` persists on the last-tapped element until another element is tapped.

## Fix — `src/components/quiz/QuizQuestion.tsx`

1. **Use `@media (hover: hover)` for hover styles**: Replace direct `hover:border-accent hover:shadow-md` with a Tailwind media query approach so hover effects only apply on devices that truly support hover (i.e., not touch screens)
2. **Add `active:` styles instead for touch feedback**: Use `active:border-accent active:shadow-md` so mobile users still get visual feedback on tap, but it clears immediately after release
3. **Same treatment for the letter circle**: Move `group-hover:` styles to only apply on hover-capable devices

Specifically, change the button className to use Tailwind's `@media(hover:hover)` variant (available as a custom or inline approach), or more practically: wrap hover styles with `[@media(hover:hover)]{&:hover{...}}` using Tailwind's arbitrary variant syntax:
- `[@media(hover:hover)]:hover:border-accent [@media(hover:hover)]:hover:shadow-md`

This ensures touch devices never get sticky hover highlights while desktop behavior remains unchanged.

