import { Linkedin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const LINKEDIN_URL = "https://www.linkedin.com/in/calebsherrill/";

export const ArticleByline = ({ datePublished = "2025" }: { datePublished?: string }) => (
  <div className="mt-6 flex items-center justify-center gap-3 text-sm text-primary-foreground/80">
    <Avatar className="h-9 w-9">
      <AvatarFallback className="bg-accent/15 text-green-ink text-xs font-heading font-700">
        CS
      </AvatarFallback>
    </Avatar>
    <div className="text-left">
      <p className="font-semibold text-primary-foreground">
        By Caleb Sherrill
        <span className="font-normal text-primary-foreground/70"> · Founder, PEO Advisor</span>
      </p>
      <p className="text-xs">
        Published {datePublished} ·{" "}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-green-ink hover:underline"
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
              <span className="font-semibold text-foreground">Caleb Sherrill</span> is the founder
              of Pillar PEO Advisors. After living through payroll mistakes and compliance fines
              in a previous business, he built Pillar to help small and mid-sized employers
              compare PEO options as an independent broker — at no cost to the employer.
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
  datePublished = "2025-01-01",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
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
        dateModified: datePublished,
        author: {
          "@type": "Person",
          "@id": "https://pillarpeo.com/#caleb",
          name: "Caleb Sherrill",
          jobTitle: "Founder & PEO Advisor",
          url: LINKEDIN_URL,
          sameAs: [LINKEDIN_URL],
        },
        publisher: {
          "@type": "Organization",
          name: "Pillar PEO Advisors",
          url: "https://pillarpeo.com",
          logo: {
            "@type": "ImageObject",
            url: "https://pillarpeo.com/pillar-logo.png",
          },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
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
