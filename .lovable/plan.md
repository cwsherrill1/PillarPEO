

# SEO Migration: URL Redirect Map + Technical SEO Updates

## Old Site URLs vs New Site — Redirect Map

From the old sitemap at pillarpeo.com, here are all 17 URLs and their mapping:

```text
OLD URL                                    → NEW URL                              STATUS
─────────────────────────────────────────────────────────────────────────────────────────
/                                          → /                                    ✅ Exact match
/about                                     → /about                               ✅ Exact match
/contact                                   → /contact                             ✅ Exact match
/privacy                                   → /privacy                             ✅ Exact match
/terms                                     → /terms                               ✅ Exact match
/services                                  → /how-it-works                        🔀 301 redirect
/why-peo                                   → /do-we-need-a-peo                    🔀 301 redirect
/industries                                → /peo-for-nonprofits                  🔀 301 redirect
/nonprofit-toolkit                         → /peo-for-nonprofits                  🔀 301 redirect
/peo-onboarding                            → /switch-your-peo                     🔀 301 redirect
/roi-calculator                            → /resources/peo-pricing               🔀 301 redirect
/blog                                      → /resources                           🔀 301 redirect
/blog/peo-roi-calculator                   → /resources/peo-pricing               🔀 301 redirect
/blog/how-much-peo-costs                   → /resources/peo-pricing               🔀 301 redirect
/blog/peo-vs-hr-outsourcing                → /resources/peo-vs-aso-vs-inhouse     🔀 301 redirect
/blog/should-your-business-use-peo         → /resources/peo-readiness             🔀 301 redirect
/blog/what-is-a-peo-broker-charlotte-nc    → /about                               🔀 301 redirect
```

## Implementation

### 1. Server-side redirects: `public/_redirects`
Create a Netlify-style `_redirects` file with 301 rules for all old URLs. This ensures search engines receive proper 301 status codes (critical for SEO link equity transfer).

### 2. Client-side fallback: React Router redirects in `src/App.tsx`
Add `<Route path="/services" element={<Navigate to="/how-it-works" replace />} />` for each old URL. This handles users who land on old URLs when client-side routing is active.

### 3. Update domain references
- **`src/components/SEOHead.tsx`**: Change `BASE_URL` from `https://pillarpeo.lovable.app` to `https://pillarpeo.com`
- **`public/sitemap.xml`**: Regenerate with `pillarpeo.com` domain and all current pages
- **`public/robots.txt`**: Update sitemap URL to `https://pillarpeo.com/sitemap.xml`
- **`index.html`**: Update OG image URLs and meta content to use `pillarpeo.com`

### 4. Updated `public/sitemap.xml`
Full regeneration with all 18 current pages using the `pillarpeo.com` domain, with appropriate priority values.

### Files Changed
- `public/_redirects` — new file, 12 redirect rules
- `src/App.tsx` — add 12 `<Navigate>` redirect routes
- `src/components/SEOHead.tsx` — update BASE_URL
- `public/sitemap.xml` — regenerate with correct domain
- `public/robots.txt` — update sitemap URL
- `index.html` — update OG/twitter meta URLs

