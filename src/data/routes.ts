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

const D = "2026-09-05";

export const siteRoutes: SiteRoute[] = [
  { path: "/", lastmod: D, changefreq: "weekly" },

  // Services
  { path: "/services", lastmod: D, changefreq: "monthly" },
  { path: "/services/hr-audit", lastmod: D, changefreq: "monthly" },
  { path: "/services/hr-projects", lastmod: D, changefreq: "monthly" },
  { path: "/services/fractional-hr", lastmod: D, changefreq: "monthly" },
  { path: "/services/transitions", lastmod: D, changefreq: "monthly" },
  { path: "/services/peo-brokerage", lastmod: D, changefreq: "monthly" },
  { path: "/pricing", lastmod: D, changefreq: "monthly" },
  { path: "/how-we-get-paid", lastmod: D, changefreq: "monthly" },

  // Company
  { path: "/about", lastmod: D, changefreq: "monthly" },
  { path: "/about/caleb-sherrill", lastmod: D, changefreq: "monthly" },
  { path: "/contact", lastmod: D, changefreq: "monthly" },

  // Still-live legacy pages (replacements arrive in batches 4 and 5)
  { path: "/peo-for-nonprofits", lastmod: D, changefreq: "monthly" },
  { path: "/do-we-need-a-peo", lastmod: D, changefreq: "monthly" },
  { path: "/peo-broker-charlotte", lastmod: D, changefreq: "monthly" },
  { path: "/peo-broker-north-carolina", lastmod: D, changefreq: "monthly" },
  { path: "/peo-broker-south-carolina", lastmod: D, changefreq: "monthly" },
  { path: "/hr-headache-score", lastmod: D, changefreq: "monthly" },

  // Resources
  { path: "/resources", lastmod: D, changefreq: "weekly" },
  { path: "/resources/5-questions", lastmod: D },
  { path: "/resources/co-employment", lastmod: D },
  { path: "/resources/peo-cost-guide", lastmod: D },
  { path: "/resources/peo-vs-aso-vs-inhouse", lastmod: D },
  { path: "/resources/peo-for-nonprofits-guide", lastmod: D },
  { path: "/resources/peo-readiness", lastmod: D },
  { path: "/resources/peo-vs-payroll-service", lastmod: D },
  { path: "/resources/best-peo-for-small-business", lastmod: D },
  { path: "/resources/top-peo-companies", lastmod: D },
  { path: "/resources/peo-for-startups", lastmod: D },
  { path: "/resources/peo-benefits", lastmod: D },
  { path: "/resources/peo-broker-vs-direct", lastmod: D },
  { path: "/resources/what-is-a-peo", lastmod: D },
  { path: "/blog/employee-health-benefits-options", lastmod: "2026-03-31" },
  { path: "/blog/peo-for-venture-backed-startups", lastmod: "2026-04-21" },
  { path: "/blog/signs-outgrown-peo-charlotte", lastmod: "2026-05-05" },
  { path: "/blog/peo-for-nonprofits-charlotte", lastmod: "2026-05-12" },
  { path: "/blog/peo-industry-transparency", lastmod: "2026-05-19" },

  { path: "/privacy", lastmod: D, changefreq: "yearly" },
  { path: "/terms", lastmod: D, changefreq: "yearly" },
];
