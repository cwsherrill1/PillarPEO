## New blog post: How to Choose a PEO Broker in Charlotte NC

Create a new article page following the same pattern as the previous hub post (`EmployeeHealthBenefitsOptions.tsx`) — same hero, byline, alternating sections, FAQ accordion, author bio, and final CTA.

### Files

**Create** `src/pages/resources/PeoBrokerCharlotteNc.tsx`
- `SEOHead`:
  - title: `How to Choose a PEO Broker in Charlotte NC`
  - description: `Most PEO brokers came from the PEO side and quietly send business to old buddies. Here is how to find one who actually works for you in Charlotte.`
  - `ogType="article"`
  - JSON-LD: Article + BreadcrumbList (via `buildArticleJsonLd`) + FAQPage
  - `datePublished: "2026-04-07"`
- Hero (`bg-primary`): Badge "Charlotte Guide", H1 "How to Choose a PEO Broker in Charlotte NC" (last phrase in `text-accent`), subhead, `<ArticleByline datePublished="April 7, 2026" />`, primary CTA → HubSpot.
- Intro: back-to-resources link, bolded summary box (accent-bordered card) with the supplied summary, then the two opening paragraphs.
- Alternating `Section` components for: What independent representation actually means · What a real broker does for you (with bullet list + closing paragraph) · Why this matters in Charlotte specifically · The fee question · Questions to ask any broker before you trust them (bullet list + closing line) · See what your options actually look like.
- FAQ section: Accordion with the 4 Q/A items.
- `<ArticleAuthorBio />`.
- Final CTA section (`bg-primary`) with "Schedule a PEO Strategy Call" → HubSpot.

**Edit** `src/App.tsx`
- Import `PeoBrokerCharlotteNc`.
- Add route: `<Route path="/blog/peo-broker-charlotte-nc" element={<PeoBrokerCharlotteNc />} />`.
- Existing redirect `/blog/what-is-a-peo-broker-charlotte-nc → /about` stays as-is (different slug, no conflict).

### Notes
- Reuses all existing components (`SEOHead`, `ArticleByline`, `ArticleAuthorBio`, `Reveal`, `Accordion`, `Button`, `Badge`).
- All copy, FAQ Q&A, and JSON-LD content used verbatim from the brief.
- No nav or sitemap changes (matches how the previous hub post was shipped).