## Plan

1. **Read current findings** via `seo_chat--list_findings` to see what's already known from the last scan.
2. **Trigger a fresh full SEO scan** via `seo_chat--trigger_scan` (requires your approval — you'll see an approval card). Scan takes ~1 minute and results appear in the SEO tab.
3. **Triage findings** by impact on indexing/ranking:
   - **Critical (fix first):** robots/noindex issues, broken canonicals, missing/duplicate titles, missing meta descriptions, broken internal links, sitemap errors, missing H1s, JSON-LD validity.
   - **High:** thin metadata on the new pages (`/peo-broker`, `/peo-broker-charlotte`, `/peo-broker-north-carolina`, `/peo-broker-south-carolina`, `/blog/peo-industry-transparency`), Open Graph completeness, alt text on images.
   - **Medium:** heading hierarchy, internal linking depth, schema enrichment.
4. **Fix each actionable finding** in code — most live in `index.html`, per-route `<SEOHead>` / Helmet usage, `public/sitemap.xml`, `public/robots.txt`, `public/_redirects`, and individual page components.
5. **Mark fixed findings** via `seo_chat--update_findings` with a one-line explanation per fix so the next scan re-verifies them.
6. **Summary report** back to you: list of findings found, what was fixed, what (if anything) was intentionally skipped and why.

### Notes
- I won't touch findings labeled `semrush` without confirming with you first (per project rules) unless one is clearly indexing-critical.
- Body copy stays as-is; only metadata, schema, links, and head tags get touched unless a finding specifically requires content change.
- Canonical domain stays `https://pillarpeo.com`.