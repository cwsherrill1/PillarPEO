/**
 * The single canonical organization entity for the whole site.
 * Page-level schema must reference it with ORG_REF rather than redeclaring it.
 * No streetAddress — Pillar has no published street address yet.
 */

export const ORG_ID = "https://pillarpeo.com/#organization";
export const SITE_URL = "https://pillarpeo.com";

export const ORG_REF = { "@id": ORG_ID } as const;

export const organization = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "Pillar PEO Advisors",
  url: SITE_URL,
  description:
    "HR advisory for professional-services firms, nationwide, from Charlotte. Fixed-price HR audits, HR projects, fractional HR, and clean PEO transitions.",
  telephone: "+1-704-787-1261",
  email: "info@pillarpeo.com",
  image: `${SITE_URL}/hero-team.jpg`,
  areaServed: [
    { "@type": "Country", name: "US" },
    { "@type": "State", name: "North Carolina" },
    { "@type": "State", name: "South Carolina" },
  ],
  sameAs: ["https://www.linkedin.com/company/pillar-peo-advisors/"],
  founder: { "@id": `${SITE_URL}/#caleb` },
} as const;

export const caleb = {
  "@type": "Person",
  "@id": `${SITE_URL}/#caleb`,
  name: "Caleb Sherrill",
  jobTitle: "Founder & HR Advisor",
  worksFor: ORG_REF,
  sameAs: ["https://www.linkedin.com/in/calebsherrill/"],
} as const;

export function breadcrumb(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@id": `${SITE_URL}/#caleb` },
    publisher: ORG_REF,
  };
}
