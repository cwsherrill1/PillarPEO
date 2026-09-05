/**
 * Single source of truth for permanent redirects.
 * `App.tsx` renders <Navigate> routes from this list, and
 * `scripts/generate-redirects.ts` writes `public/_redirects` from it.
 * One hop only — never point a `from` at another `from`.
 *
 * `pending: true` means the destination does not exist yet (it arrives in a
 * later batch). Pending rules are kept here for the record but are NOT
 * rendered as routes and NOT written to `_redirects`, so the old page keeps
 * rendering and nothing 404s in the meantime.
 */

export interface RedirectRule {
  from: string;
  to: string;
  pending?: boolean;
}

export const redirects: RedirectRule[] = [
  // → PEO brokerage (live)
  { from: "/how-it-works", to: "/services/peo-brokerage" },
  { from: "/peo-broker", to: "/services/peo-brokerage" },
  { from: "/why-peo", to: "/services/peo-brokerage" },

  // → Transitions (live)
  { from: "/switch-your-peo", to: "/services/transitions" },
  { from: "/resources/how-to-switch-peos", to: "/services/transitions" },
  { from: "/peo-onboarding", to: "/services/transitions" },
  { from: "/resources/peo-implementation", to: "/services/transitions" },

  // → Cost guide (live) — merges the duplicate pricing page
  { from: "/resources/peo-pricing", to: "/resources/peo-cost-guide" },
  { from: "/blog/how-much-peo-costs", to: "/resources/peo-cost-guide" },

  // Legacy Wix + placeholder pages (live)
  { from: "/services-legacy", to: "/services" },
  { from: "/blank", to: "/" },
  { from: "/blank-1", to: "/about" },
  { from: "/blog", to: "/resources" },
  { from: "/blog/peo-vs-hr-outsourcing", to: "/resources/peo-vs-aso-vs-inhouse" },

  // ── Pending: destinations land in batches 4 and 5 ──
  { from: "/do-we-need-a-peo", to: "/resources/do-we-need-a-peo", pending: true },
  { from: "/resources/peo-readiness", to: "/resources/do-we-need-a-peo", pending: true },
  { from: "/blog/should-your-business-use-peo", to: "/resources/do-we-need-a-peo", pending: true },

  { from: "/roi-calculator", to: "/tools/peo-cost-calculator", pending: true },
  { from: "/blog/peo-roi-calculator", to: "/tools/peo-cost-calculator", pending: true },
  { from: "/hr-headache-score", to: "/tools/hr-risk-score", pending: true },

  { from: "/peo-for-nonprofits", to: "/industries/nonprofits", pending: true },
  { from: "/resources/peo-for-nonprofits-guide", to: "/industries/nonprofits", pending: true },
  { from: "/blog/peo-for-nonprofits-charlotte", to: "/industries/nonprofits", pending: true },
  { from: "/nonprofit-toolkit", to: "/industries/nonprofits", pending: true },
  { from: "/industries", to: "/industries", pending: true },

  { from: "/peo-broker-charlotte", to: "/hr-consulting/charlotte-nc", pending: true },
  { from: "/blog/peo-broker-charlotte-nc", to: "/hr-consulting/charlotte-nc", pending: true },
  { from: "/blog/what-is-a-peo-broker-charlotte-nc", to: "/hr-consulting/charlotte-nc", pending: true },
  { from: "/blog/signs-outgrown-peo-charlotte", to: "/hr-consulting/charlotte-nc", pending: true },

  { from: "/peo-broker-north-carolina", to: "/resources/state-employer-guides/north-carolina", pending: true },
  { from: "/peo-broker-south-carolina", to: "/resources/state-employer-guides/south-carolina", pending: true },

  { from: "/blog/peo-for-venture-backed-startups", to: "/resources/peo-for-startups", pending: true },
];

/** Only the rules whose destination exists today. */
export const activeRedirects = redirects.filter((r) => !r.pending);

/** Wildcard rules for the host only (React Router handles these separately). */
export const wildcardRedirects: RedirectRule[] = [
  // Held until batch 5: several /blog/* URLs still render real pages today,
  // so a blanket wildcard would redirect live content.
  // { from: "/blog/*", to: "/resources/:splat" },
];
