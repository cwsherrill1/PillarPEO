/**
 * The six industry pages. National in scope: these pages never mention a city.
 * Used by the industries index, the header dropdown and the sitemap.
 */

export interface Industry {
  slug: string;
  name: string;
  navLabel: string;
  summary: string;
}

export const industries: Industry[] = [
  {
    slug: "law-firms",
    name: "Law firms",
    navLabel: "Law firms",
    summary:
      "Paralegal and legal-assistant classification, partner vs employee status, trust-account separation of duties, and contract attorneys.",
  },
  {
    slug: "cpa-firms",
    name: "CPA and accounting firms",
    navLabel: "CPA firms",
    summary:
      "Busy-season overtime, seasonal and temp staffing, per-diem and travel pay, and staff working from other states in the spring.",
  },
  {
    slug: "engineering-architecture",
    name: "Engineering and architecture firms",
    navLabel: "Engineering & architecture",
    summary:
      "Exempt status for designers and drafters, public-contract wage rules, project-based travel, and multi-state project staffing.",
  },
  {
    slug: "medical-dental",
    name: "Medical and dental practices",
    navLabel: "Medical & dental",
    summary:
      "OSHA bloodborne-pathogen requirements, credentialing files kept apart from personnel files, and on-call and shift differentials.",
  },
  {
    slug: "financial-advisors",
    name: "Financial advisors and RIAs",
    navLabel: "Financial advisors & RIAs",
    summary:
      "Where supervision overlaps HR, licensing and registration records, outside business activity policies, and producer pay plans.",
  },
  {
    slug: "nonprofits",
    name: "Nonprofits",
    navLabel: "Nonprofits",
    summary:
      "Volunteers versus employees, exempt status for program staff, grant-funded position documentation, and board and executive comp.",
  },
];
