/**
 * Single source of truth for every price shown on the site.
 * Prices are proposed and under review — change them here only.
 */

export const pricing = {
  audit: {
    mark: "A-1",
    name: "HR Audit (the Load Report)",
    bands: [
      { label: "Up to 25 people", price: "$2,500" },
      { label: "26–75 people", price: "$4,000" },
      { label: "76–150 people", price: "$6,000" },
    ],
    from: "$2,500",
  },
  projects: {
    mark: "P-1",
    name: "HR Projects",
    range: "$1,500–$7,500 fixed",
  },
  fractional: {
    mark: "F-1",
    name: "Fractional HR",
    tiers: [
      { label: "Advisor — 8 hrs/mo", price: "$2,000 / month" },
      { label: "Partner — 20 hrs/mo", price: "$3,750 / month" },
      { label: "Embedded — 40 hrs/mo", price: "$6,000 / month" },
    ],
    note: "3-month minimum",
  },
  transitions: {
    mark: "T-1",
    name: "Transitions",
    range: "$3,000–$10,000 fixed",
  },
  brokerage: {
    mark: "B-1",
    name: "PEO brokerage",
    price: "$0 to the client",
    note: "Provider commission disclosed.",
  },
} as const;
