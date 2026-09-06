import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const LINKEDIN_URL = "https://www.linkedin.com/in/calebsherrill/";

export const ArticleByline = ({ datePublished = "2025" }: { datePublished?: string }) => (
  <div className="mt-6 flex items-center justify-center gap-3 text-sm text-primary-foreground/80">
    <Avatar className="h-9 w-9">
      <AvatarFallback className="bg-accent/15 text-green text-xs font-heading font-700">
        CS
      </AvatarFallback>
    </Avatar>
    <div className="text-left">
      <p className="font-semibold text-primary-foreground">
        By{" "}
        <Link to="/about/caleb-sherrill" className="underline-offset-2 hover:underline">
          Caleb Sherrill
        </Link>
        <span className="font-normal text-primary-foreground/70"> · Founder, PEO Advisor</span>
      </p>
      <p className="text-xs">
        Published {datePublished} ·{" "}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-green hover:underline"
        >
          <Linkedin className="h-3 w-3" /> LinkedIn
        </a>
      </p>
    </div>
  </div>
);

export const ArticleAuthorBio = () => (
  <section className="py-12">
    <div className="container max-w-3xl">
      <div className="rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Avatar className="h-16 w-16 shrink-0">
            <AvatarFallback className="bg-accent/15 text-green-ink text-xl font-heading font-700">
              CS
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-heading text-lg font-700 text-foreground">About the author</p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              <Link to="/about/caleb-sherrill" className="font-semibold text-foreground hover:underline">
                Caleb Sherrill
              </Link>{" "}
              is the founder
              of Pillar PEO Advisors. After living through payroll mistakes and compliance fines
              in a previous business, he built Pillar to help small and mid-sized employers
              compare PEO options as an independent broker, at no cost to the employer.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-green-ink hover:underline"
            >
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/** Build Article + BreadcrumbList JSON-LD for a resource article. */
export const buildArticleJsonLd = ({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) => {
  const url = `https://pillarpeo.com${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        url,
        datePublished,
        dateModified: dateModified ?? datePublished,
        author: { "@id": "https://pillarpeo.com/#caleb" },
        publisher: { "@id": "https://pillarpeo.com/#organization" },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      },
      {
        "@type": "Person",
        "@id": "https://pillarpeo.com/#caleb",
        name: "Caleb Sherrill",
        jobTitle: "Founder & HR Advisor",
        url: "https://pillarpeo.com/about/caleb-sherrill",
        sameAs: [LINKEDIN_URL],
        worksFor: { "@id": "https://pillarpeo.com/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pillarpeo.com/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Resources",
            item: "https://pillarpeo.com/resources",
          },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      },
    ],
  };
};
