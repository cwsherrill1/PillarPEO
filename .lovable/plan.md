

# LeadConnector Chat Widget — SMS Compliance Review

## Your question
LeadConnector requires you to confirm that no forms on pages where the chat widget is embedded collect phone numbers or SMS opt-in consent (contact forms, lead forms, landing page forms, appointment forms).

## What's on the site today

The chat widget will load on **every page** (it's added to `index.html`). I reviewed all forms and phone number collection points:

**Forms that collect phone numbers:** None found.
- `src/pages/Contact.tsx` — collects Name, Email, Company, Employees, Message. **No phone field.**
- `src/components/quiz/QuizEmailCapture.tsx` — collects First Name, Email, Company. **No phone field.**
- No other forms exist (Resources pages, guides, etc. all use external HubSpot booking links, not on-site forms).

**Phone numbers displayed (not collected):**
- `src/components/Footer.tsx` and `src/pages/Contact.tsx` display `(704) 787-1261` as a clickable `tel:` link. This is outbound contact info, not a collection field.

**SMS opt-in consent:** No SMS checkboxes, opt-in language, or consent fields exist anywhere in the codebase.

**External booking (HubSpot):** All "Book a Call" CTAs link out to `https://meetings.hubspot.com/caleb-sherrill`. That booking page is on HubSpot's domain — the chat widget is not embedded there, so it's outside this compliance scope.

## Answer

**Yes, you can confirm the statement as true** for your Lovable site as it stands today:
- No on-site form collects phone numbers
- No on-site form collects SMS opt-in consent
- The only phone number on the site is your *outbound* contact number, displayed as a `tel:` link

## Plan

No code changes needed for compliance right now. I'll add a short note to `.lovable/plan.md` documenting this audit so you have a record, and flag two things to keep in mind going forward:

1. **If you ever add a phone field** to the Contact form or Quiz email capture, you'll need to either remove the chat widget from that page or add proper SMS consent language.
2. **HubSpot booking page** is on hubspot.com, not your site — it's not covered by this confirmation either way.

### File change
- `.lovable/plan.md` — replace current contents with a brief audit summary and the two future-state reminders above.

