
Update the quiz answer interaction so mobile users get a clearly visible confirmation before the quiz auto-advances.

What I’ll change

- `src/components/quiz/QuizQuestion.tsx`
  - Add a short-lived local “selected” state for the tapped answer
  - When a user taps an option:
    - immediately show a stronger selected style on that card
    - briefly disable the other answers
    - wait a moment before calling `onAnswer(...)` so the feedback is actually visible
  - Keep the existing mobile-safe hover setup so nothing stays stuck afterward

Visual feedback improvement

- Make the tapped answer much more obvious than the current `active:` flash by using a temporary selected state such as:
  - accent border
  - light accent background
  - stronger shadow/ring
  - highlighted letter circle
- This selected state will last just long enough to register, then the next question loads

Behavior details

- Add a small delay before advancing, around 150–250ms
- Prevent double taps during that delay
- Clear the temporary selected state when the next question renders, so no answer looks pre-selected afterward

Expected result

- Mobile: it becomes very clear which answer was tapped
- Desktop: normal hover behavior still works
- Back/next flow: no sticky highlight carries over between questions

Technical note

- The current issue is not just styling — the quiz advances so fast that the `active:` state disappears almost instantly
- A temporary selected state is the cleanest fix because it improves tap clarity without reintroducing the old persistent-highlight bug
