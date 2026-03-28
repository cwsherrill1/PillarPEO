

# Fix: Quiz Answer Highlight Persisting

## Problem
When navigating back and forward through quiz questions, the previously selected answer button retains browser focus/active styling, making it look "highlighted" even though it shouldn't be.

## Root Cause
The `key={animKey}` on the question container uses a `useState` + `useEffect` pattern that doesn't force an immediate DOM remount — the browser's `:focus` state can carry over. Additionally, there's no explicit focus reset on the buttons.

## Fix — `src/components/quiz/QuizQuestion.tsx`

1. Use `questionIndex` directly as the `key` on the container div (remove the `animKey` state entirely — it's redundant since it just mirrors `questionIndex`)
2. Add `focus:border-border focus:outline-none` to each answer button so even if focus persists, it doesn't visually appear highlighted
3. Blur the active element after clicking an answer by calling `(e.currentTarget as HTMLElement).blur()` in the click handler

These three changes together ensure no visual carryover between questions.

