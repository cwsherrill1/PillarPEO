

# Build "What's Your HR Headache Score?" Quiz

## Overview
A multi-step interactive quiz at `/hr-headache-score` — landing page, 15 one-at-a-time questions, optional email capture, and a personalized results page with animated gauge, tiered feedback, and dynamic action plan cards.

## New Files

### `src/pages/HrHeadacheQuiz.tsx`
The entire quiz lives in one page component with client-side state management. Four screens managed by a `step` state variable:

1. **Landing** — Hero with headline "Is Your HR a Headache?", subheadline, CTA button, trust line
2. **Quiz (steps 1-15)** — Progress bar, question text, 3 clickable answer cards. Selecting auto-advances. Each answer scored 1/2/3. Slide/fade transition between questions
3. **Email Capture** — Name, email, company fields. "Show Me My Score" button posts to `YOUR_WEBHOOK_URL` placeholder. "Skip and see my score" link bypasses
4. **Results** — Animated gauge (CSS/SVG arc from green→yellow→red with needle), score number, tier badge, personalized pain points pulled from highest-scoring answers, action plan cards for all score-3 answers, CTAs to book a call

### `src/data/quizQuestions.ts`
All 15 questions with their 3 options and scores, plus metadata for the results page (topic label, quick win text, longer-term fix text) used to generate personalized action plan cards.

### `src/components/quiz/QuizLanding.tsx`
Landing screen component with branded hero.

### `src/components/quiz/QuizQuestion.tsx`
Single question display — progress bar, question text, 3 answer cards with hover/select states. Handles fade/slide transitions.

### `src/components/quiz/QuizEmailCapture.tsx`
Email form with webhook POST placeholder and skip link.

### `src/components/quiz/QuizResults.tsx`
Results display — animated SVG gauge, tier badge/headline/body, dynamic pain point highlights, action plan cards, share button (copies URL or generates summary), footer CTA.

### `src/components/quiz/ScoreGauge.tsx`
Animated SVG semicircle gauge — green→yellow→red gradient arc with a needle that animates to the score position on mount.

## Modified Files

### `src/App.tsx`
- Import `HrHeadacheQuiz`
- Add route: `<Route path="/hr-headache-score" element={<HrHeadacheQuiz />} />`

## Technical Details

- **State**: `useState` for `currentStep`, `answers` (array of scores), `formData`, `showResults`
- **Scoring**: Sum of 15 answer values (15–45). Tier 1: 15–24 (green), Tier 2: 25–34 (amber), Tier 3: 35–45 (red)
- **Highest-scoring answers**: Sort by score descending, show top 2/3/4 based on tier
- **Transitions**: CSS `animate-fade-in` + `animate-slide-in-right` already in tailwind config
- **Gauge**: SVG path arc with `stroke-dashoffset` animation via CSS transition on mount
- **Share**: Copy-to-clipboard with score summary text
- **Webhook**: `fetch(WEBHOOK_URL, { method: 'POST', body: JSON.stringify(formData) })` — placeholder URL
- **Mobile-first**: Full-width cards, stacked layout, large tap targets
- **No Layout wrapper change needed** — quiz page renders inside existing Layout (header/footer)
- **Brand colors**: Uses existing CSS variables (`--primary`, `--accent`) plus tier-specific colors (green/amber/red) applied inline

