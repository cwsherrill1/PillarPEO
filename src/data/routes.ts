/**
 * Every route that renders a real page, with the date its content last changed.
 * Redirect sources live in `redirects.ts` and must never appear here.
 * `scripts/generate-sitemap.ts` writes `public/sitemap.xml` from this list.
 */

export interface SiteRoute {
  path: string;
  lastmod: string; // ISO 8601
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
}

export const siteRoutes: SiteRoute[] = [
  { path: "/", lastmod: "2026-09-05", changefreq: "weekly" },
  { path: "/how-it-works", lastmod: "2026-09-05", changefreq: "monthly" },
  { path: "/switch-your-peo", lastmod: "2026-09-05", changefreq: "monthly" },
  { path: "/peo-for-nonprofits", lastmod: "2026-09-05", changefreq: "monthly" },
  { path: "/do-we-need-a-peo", lastmod: "2026-09-05", changefreq: "monthly" },
  { path: "/peo-broker", lastmod: "2026-09-05", changefreq: "monthly" },
  { path: "/peo-broker-charlotte", lastmod: "2026-09-05", changefreq: "monthly" },
  { path: "/peo-broker-north-carolina", lastmod: "2026-09-05", changefreq: "monthly" },
  { path: "/peo-broker-south-carolina", lastmod: "2026-09-05", changefreq: "monthly" },
  { path: "/hr-headache-score", lastmod: "2026-09-05", changefreq: "monthly" },
  { path: "/about", lastmod: "2026-09-05", changefreq: "monthly" },
  { path: "/contact", lastmod: "2026-09-05", changefreq: "monthly" },
  { path: "/resources", lastmod: "2026-09-05", changefreq: "weekly" },
  { path: "/resources/5-questions", lastmod: "2026-09-05" },
  { path: "/resources/co-employment", lastmod: "2026-09-05" },
  { path: "/resources/peo-pricing", lastmod: "2026-09-05" },
  { path: "/resources/peo-vs-aso-vs-inhouse", lastmod: "2026-09-05" },
  { path: "/resources/how-to-switch-peos", lastmod: "2026-09-05" },
  { path: "/resources/peo-for-nonprofits-guide", lastmod: "2026-09-05" },
  { path: "/resources/peo-readiness", lastmod: "2026-09-05" },
  { path: "/resources/peo-implementation", lastmod: "2026-09-05" },
  { path: "/resources/peo-cost-guide", lastmod: "2026-09-05" },
  { path: "/resources/peo-vs-payroll-service", lastmod: "2026-09-05" },
  { path: "/resources/best-peo-for-small-business", lastmod: "2026-09-05" },
  { path: "/resources/top-peo-companies", lastmod: "2026-09-05" },
  { path: "/resources/peo-for-startups", lastmod: "2026-09-05" },
  { path: "/resources/peo-benefits", lastmod: "2026-09-05" },
  { path: "/resources/peo-broker-vs-direct", lastmod: "2026-09-05" },
  { path: "/resources/what-is-a-peo", lastmod: "2026-09-05" },
  { path: "/blog/employee-health-benefits-options", lastmod: "2026-03-31" },
  { path: "/blog/peo-for-venture-backed-startups", lastmod: "2026-04-21" },
  { path: "/blog/signs-outgrown-peo-charlotte", lastmod: "2026-05-05" },
  { path: "/blog/peo-for-nonprofits-charlotte", lastmod: "2026-05-12" },
  { path: "/blog/peo-industry-transparency", lastmod: "2026-05-19" },
  { path: "/privacy", lastmod: "2026-09-05", changefreq: "yearly" },
  { path: "/terms", lastmod: "2026-09-05", changefreq: "yearly" },
];
