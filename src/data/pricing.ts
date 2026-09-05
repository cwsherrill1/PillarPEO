/**
 * Single source of truth for every price shown on the site.
 * Nothing anywhere else may hardcode a dollar figure.
 * Prices are proposed and under review.
 */

export const PRICES_ARE_PROVISIONAL = true;

export const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

/** The label used for the primary CTA everywhere on the priced-service pages. */
export const PRIMARY_CTA = "Book an HR audit · from $2,500";

export const pricing = {
  audit: {
    mark: "A-1",
    name: "HR Audit (the Load Report)",
    from: "$2,500",
    who: "Firms that need to know what their HR risk actually is",
    bands: [
      {
        label: "10–25 employees",
        price: "$2,500",
        states: "Up to 2 states priced in",
      },
      {
        label: "26–75 employees",
        price: "$4,000",
        states: "Up to 5 states priced in",
      },
      {
        label: "76–150 employees",
        price: "$6,000",
        states: "Unlimited states priced in",
      },
    ],
    overLimit: "Over 150 employees: custom quote.",
  },
  projects: {
    mark: "P-1",
    name: "HR Projects",
    range: "$1,500–$7,500 fixed per project",
    who: "Firms that need one specific thing fixed",
  },
  fractional: {
    mark: "F-1",
    name: "Fractional HR",
    range: "$2,000–$6,000 per month",
    who: "Firms that need ongoing HR help without a full-time hire",
    note: "3-month minimum.",
    tiers: [
      {
        label: "Advisor",
        hours: "8 hrs / month",
        price: "$2,000 / month",
        who: "A senior HR voice on call for the questions that come up.",
      },
      {
        label: "Partner",
        hours: "20 hrs / month",
        price: "$3,750 / month",
        who: "Standing project work plus manager support and escalation.",
      },
      {
        label: "Embedded",
        hours: "40 hrs / month",
        price: "$6,000 / month",
        who: "A part-time HR function inside your firm, in every state you employ.",
      },
    ],
  },
  transitions: {
    mark: "T-1",
    name: "Transitions",
    range: "$3,000–$10,000 fixed",
    who: "Firms moving into, out of, or between a PEO or system",
  },
  brokerage: {
    mark: "B-1",
    name: "PEO brokerage",
    price: "$0 to the client",
    who: "Firms comparing PEO providers",
    note: "Provider commission disclosed in writing before any placement.",
  },
} as const;

/** Ordered list used by the /services and /pricing tables. */
export const serviceLadder = [
  {
    mark: pricing.audit.mark,
    name: "HR Audit — the Load Report",
    price: "$2,500 / $4,000 / $6,000 by headcount band",
    who: pricing.audit.who,
    href: "/services/hr-audit",
  },
  {
    mark: pricing.projects.mark,
    name: "HR Projects",
    price: pricing.projects.range,
    who: pricing.projects.who,
    href: "/services/hr-projects",
  },
  {
    mark: pricing.fractional.mark,
    name: "Fractional HR",
    price: "$2,000 · $3,750 · $6,000 per month",
    who: pricing.fractional.who,
    href: "/services/fractional-hr",
  },
  {
    mark: pricing.transitions.mark,
    name: "Transitions",
    price: pricing.transitions.range,
    who: pricing.transitions.who,
    href: "/services/transitions",
  },
  {
    mark: pricing.brokerage.mark,
    name: "PEO brokerage",
    price: pricing.brokerage.price,
    who: pricing.brokerage.who,
    href: "/services/peo-brokerage",
  },
] as const;

/** The six fixed-price projects listed on /services/hr-projects. */
export const hrProjects = [
  {
    name: "NC/SC employee handbook",
    price: "$3,500–$5,500",
    desc: "A handbook written for the states your people actually work in, with the policies your firm is required to carry and the ones you asked for.",
  },
  {
    name: "FLSA classification review",
    price: "$2,500–$5,000",
    desc: "Every role tested against the exemption tests, with a written position on each and a plan for anything that needs to change.",
  },
  {
    name: "I-9 and E-Verify remediation",
    price: "$1,500–$4,000",
    desc: "A file-by-file review of your I-9s, corrections made the way the rules allow, and a process that keeps the next ones clean.",
  },
  {
    name: "Compensation benchmarking",
    price: "$3,000–$7,500",
    desc: "Market ranges for each role in your markets, a banding structure, and the language to explain it to your people.",
  },
  {
    name: "Performance management system",
    price: "$3,000–$6,500",
    desc: "A review cycle your managers will actually run: forms, cadence, calibration, and documentation that holds up later.",
  },
  {
    name: "Manager training",
    price: "$1,500–$4,500",
    desc: "Working sessions for the people who make employment decisions — hiring, documentation, discipline, and leave conversations.",
  },
] as const;

/** The five transitions covered by T-1. */
export const transitionTypes = [
  {
    name: "PEO exit",
    desc: "Leaving a PEO and standing your own payroll, benefits, and workers' comp back up without a gap.",
  },
  {
    name: "PEO switch",
    desc: "Moving from one PEO to another with the census, benefits, and accruals landing intact.",
  },
  {
    name: "PEO implementation",
    desc: "Going into a PEO for the first time, with your data and policies ready before the first payroll runs.",
  },
  {
    name: "HRIS migration",
    desc: "Moving systems without losing history, permissions, or the reports your leadership relies on.",
  },
  {
    name: "Payroll provider switch",
    desc: "Changing payroll providers, including the state tax registrations that trip most switches up.",
  },
] as const;
