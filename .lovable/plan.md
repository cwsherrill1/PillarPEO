

# Quiz UX Improvements

## Issues Found

1. **No back button** — Users can't correct a misclick. If they accidentally tap the wrong answer, they're stuck with it. This is frustrating, especially on a 15-question quiz.

2. **Pain points and Action Plan overlap** — When someone scores mostly 3s (like the test run with 43/45), the "What's hurting you most right now" section lists 4 pain points with their quickWin tips, then the Action Plan section below repeats nearly all the same topics with the same quickWin tips plus longer-term fixes. The top section feels redundant.

3. **Progress bar starts at 0%** — Question 1 shows "0%" which feels like you haven't started yet even though you're already answering. It should reflect that you're on question 1.

4. **"Learn more at pillarpeo.com" links externally** — The results footer links to `https://pillarpeo.com` with `target="_blank"`, but the user is already on pillarpeo.com. Should link to the homepage internally.

5. **No scroll-to-top on results** — After the email capture screen, the results page loads but the viewport may not be at the top, especially on mobile.

6. **Email capture headline has inconsistent punctuation** — "Your results are ready." ends with a period while other headlines don't.

## Plan

### `src/components/quiz/QuizQuestion.tsx`
- Add a "Back" text button below the answer cards (hidden on question 1)
- Pass an `onBack` callback prop
- Fix progress: change formula to `((questionIndex + 1) / totalQuestions) * 100` so Q1 shows ~7% instead of 0%

### `src/pages/HrHeadacheQuiz.tsx`
- Add `handleBack` function that decrements `currentQ` and pops the last answer from `answers`
- Pass `onBack` to `QuizQuestion`
- Add `window.scrollTo(0, 0)` when transitioning to results step

### `src/components/quiz/QuizResults.tsx`
- **Remove the top "pain points" section entirely** (the cards with quickWin tips) — the Action Plan cards already show all this information in a better format with both quick wins and longer-term fixes
- Instead, after the tier headline/body, go straight to the CTA block, then the Action Plan
- Change the "pillarpeo.com" footer button to use internal `<Link to="/">` instead of external `<a>`
- Add `useEffect` to scroll to top on mount

### `src/components/quiz/QuizEmailCapture.tsx`
- Remove trailing period from "Your results are ready." → "Your results are ready"

