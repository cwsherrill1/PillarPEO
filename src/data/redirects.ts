/**
 * Single source of truth for permanent redirects.
 * `App.tsx` renders <Navigate> routes from this list, and
 * `scripts/generate-redirects.ts` writes `public/_redirects` from it.
 * One hop only — never point a `from` at another `from`.
 */

export interface RedirectRule {
  from: string;
  to: string;
}

export const redirects: RedirectRule[] = [
  { from: "/services", to: "/how-it-works" },
  { from: "/why-peo", to: "/do-we-need-a-peo" },
  { from: "/industries", to: "/peo-for-nonprofits" },
  { from: "/nonprofit-toolkit", to: "/peo-for-nonprofits" },
  { from: "/peo-onboarding", to: "/switch-your-peo" },
  { from: "/roi-calculator", to: "/resources/peo-pricing" },
  { from: "/blog", to: "/resources" },
  { from: "/blog/peo-roi-calculator", to: "/resources/peo-pricing" },
  { from: "/blog/how-much-peo-costs", to: "/resources/peo-pricing" },
  { from: "/blog/peo-vs-hr-outsourcing", to: "/resources/peo-vs-aso-vs-inhouse" },
  { from: "/blog/should-your-business-use-peo", to: "/resources/peo-readiness" },
  { from: "/blog/what-is-a-peo-broker-charlotte-nc", to: "/about" },
  { from: "/blog/peo-broker-charlotte-nc", to: "/peo-broker-charlotte" },
];
