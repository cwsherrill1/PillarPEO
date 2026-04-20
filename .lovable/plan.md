# LeadConnector Chat Widget — SMS Compliance Audit

Date: 2026-04-20

## Audit result
The chat widget (loaded globally via `index.html`) is embedded on every page. As of this audit, the site is compliant with LeadConnector's requirement that no page with the widget collects phone numbers or SMS opt-in consent.

## Forms reviewed
- `src/pages/Contact.tsx` — Name, Email, Company, Employees, Message. No phone field. No SMS consent.
- `src/components/quiz/QuizEmailCapture.tsx` — First Name, Email, Company. No phone field. No SMS consent.
- No other on-site forms exist.

## Phone numbers on site
- `(704) 787-1261` is displayed as an outbound `tel:` link in `Footer.tsx` and `Contact.tsx`. This is not collection.

## Reminders for the future
1. If a phone field is ever added to the Contact form, Quiz email capture, or any new form, either remove the chat widget from that page or add explicit SMS opt-in consent language.
2. The HubSpot booking page (`meetings.hubspot.com/caleb-sherrill`) is on HubSpot's domain — not covered by this confirmation.
