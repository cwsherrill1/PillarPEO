# LeadConnector Chat Widget — SMS Compliance Audit

Date: 2026-04-20

## Audit result
Chat widget loads globally via `index.html`. No on-site forms collect phone numbers or SMS opt-in consent.

## Compliance fix applied
GoHighLevel's compliance scanner flagged `tel:` links as "phone number contact info" on pages with the widget. Removed all `tel:` links:
- `src/components/Footer.tsx` — phone number now plain text
- `src/pages/Contact.tsx` — Phone contact card renders as plain text (href set to undefined)

Phone number `(704) 787-1261` is still visible to users; it's just no longer a machine-readable click-to-call link.

## Forms reviewed
- `src/pages/Contact.tsx` — Name, Email, Company, Employees, Message. No phone field.
- `src/components/quiz/QuizEmailCapture.tsx` — First Name, Email, Company. No phone field.

## Reminders for the future
1. **Do not re-add `tel:` links** anywhere on the site while the chat widget is embedded site-wide — GHL's scanner will flag them.
2. If a phone field is ever added to any form, either remove the chat widget from that page or add explicit SMS opt-in consent language.
3. The HubSpot booking page (`meetings.hubspot.com/caleb-sherrill`) is on HubSpot's domain — not covered by this confirmation.
