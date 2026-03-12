

# Install GA4 Tracking

## Changes

### `index.html`
Add the GA4 gtag.js snippet in the `<head>` with measurement ID `G-4JX7T4D8KT`:
- Async script tag for `gtag/js`
- Inline script initializing `dataLayer` and calling `gtag('config', 'G-4JX7T4D8KT')`

That's it — one file, GA4 will start collecting data immediately on deploy.

### HubSpot Form (separate step)
Once you're ready with your HubSpot Portal ID and Form ID, I'll wire up the contact form in a follow-up. Do you have those IDs, or do you need guidance on finding them?

