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
  { path: "/how-we-get-paid", lastmod: D, changefreq: "monthly" },

  // Company
  { path: "/about", lastmod: D, changefreq: "monthly" },
  { path: "/about/caleb-sherrill", lastmod: D, changefreq: "monthly" },
  { path: "/contact", lastmod: D, changefreq: "monthly" },


  // Industries (national)
  { path: "/industries", lastmod: D, changefreq: "monthly" },
  { path: "/industries/law-firms", lastmod: D, changefreq: "monthly" },
  { path: "/industries/cpa-firms", lastmod: D, changefreq: "monthly" },
  { path: "/industries/engineering-architecture", lastmod: D, changefreq: "monthly" },
  { path: "/industries/medical-dental", lastmod: D, changefreq: "monthly" },
  { path: "/industries/financial-advisors", lastmod: D, changefreq: "monthly" },
  { path: "/industries/nonprofits", lastmod: D, changefreq: "monthly" },

  // Locations (Carolinas)
  { path: "/hr-consulting", lastmod: D, changefreq: "monthly" },
  { path: "/hr-consulting/charlotte-nc", lastmod: D, changefreq: "monthly" },
  { path: "/hr-consulting/rock-hill-fort-mill-sc", lastmod: D, changefreq: "monthly" },
  { path: "/hr-consulting/raleigh-durham-nc", lastmod: D, changefreq: "monthly" },

  // Resources
  { path: "/resources", lastmod: D, changefreq: "weekly" },
  { path: "/resources/5-questions", lastmod: D },
  { path: "/resources/co-employment", lastmod: D },
  { path: "/resources/peo-cost-guide", lastmod: D },
  { path: "/resources/peo-vs-aso-vs-inhouse", lastmod: D },
  { path: "/resources/peo-vs-payroll-service", lastmod: D },
  { path: "/resources/best-peo-for-small-business", lastmod: D },
  { path: "/resources/top-peo-companies", lastmod: D },
  { path: "/resources/peo-for-startups", lastmod: D },
  { path: "/resources/peo-benefits", lastmod: D },
  { path: "/resources/peo-broker-vs-direct", lastmod: D },
  { path: "/resources/what-is-a-peo", lastmod: D },
  { path: "/resources/employee-health-benefits-options", lastmod: "2026-03-31" },
  { path: "/resources/peo-industry-transparency", lastmod: "2026-05-19" },

  // Tools
  { path: "/tools/hr-risk-score", lastmod: D, changefreq: "monthly" },
  { path: "/tools/peo-cost-calculator", lastmod: D, changefreq: "monthly" },
  { path: "/case-studies", lastmod: D, changefreq: "monthly" },

  // State employer guides and compliance resources
  { path: "/resources/state-employer-guides", lastmod: D, changefreq: "monthly" },
  { path: "/resources/state-employer-guides/north-carolina", lastmod: D, changefreq: "monthly" },
  { path: "/resources/state-employer-guides/south-carolina", lastmod: D, changefreq: "monthly" },
  { path: "/resources/nc-vs-sc-employment-law", lastmod: D, changefreq: "monthly" },
  { path: "/resources/multi-state-employer-checklist", lastmod: D, changefreq: "monthly" },
  { path: "/resources/hr-audit-checklist", lastmod: D, changefreq: "monthly" },
  { path: "/resources/e-verify-north-carolina", lastmod: D, changefreq: "monthly" },
  { path: "/resources/e-verify-south-carolina", lastmod: D, changefreq: "monthly" },
  { path: "/resources/nc-handbook-requirements", lastmod: D, changefreq: "monthly" },
  { path: "/resources/sc-handbook-requirements", lastmod: D, changefreq: "monthly" },
  { path: "/resources/do-we-need-a-peo", lastmod: D, changefreq: "monthly" },

  { path: "/privacy", lastmod: D, changefreq: "yearly" },
  { path: "/terms", lastmod: D, changefreq: "yearly" },
];
