import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import { ArticleAuthorBio } from "@/components/ArticleByline";
import { SITE_URL, breadcrumb, articleSchema } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "Why doesn't anyone else publish this?",
    a: "Most PEO content is written by PEOs or by sites paid to send them leads. Explaining where the money hides costs those writers money. We are paid a commission by the PEO only when one is placed, and we are just as willing to tell you not to place one, so we can afford to be specific.",
  },
  {
    q: "Is PEO pricing negotiable?",
    a: "Much of it is. The administrative fee, the SUTA rate assumption, the term length, the notice window and whether a renewal cap exists are all negotiable before signature. After signature, almost none of it is.",
  },
  {
    q: "What is the single most expensive mistake employers make?",
    a: "Comparing quotes on the headline fee alone. The headline fee is the part the PEO wants compared. The SUTA assumption, the fee basis and the exit clauses usually move more money over three years than the fee ever does.",
  },
  {
    q: "Does Pillar publish its own fees?",
    a: "No. Pillar's engagements are fixed price, quoted before the work starts, and scoped to your headcount and the states you employ in. PEO brokerage is free to you: the PEO pays the commission and we disclose it in writing.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "How PEO pricing works", path: "/resources/peo-pricing-explained" },
    ]),
    articleSchema({
      headline: "How PEO Pricing Actually Works",
      description:
        "Where PEO pricing hides money: first-year discounts, pooled SUTA rates, fee basis, and the exit clauses. Written from the proposals we review.",
      path: "/resources/peo-pricing-explained",
      datePublished: "2026-09-06",
      dateModified: "2026-09-06",
    }),
    faqSchema(faqs),
  ],
};

const pages = [
  {
    href: "/resources/peo-honeymoon-pricing",
    title: "Why your PEO renewal jumped",
    desc: "First-year rates priced to win the business, repriced once your switching cost is at its highest.",
  },
  {
    href: "/resources/peo-suta-rates",
    title: "The SUTA line nobody checks",
    desc: "Pooled, top-of-band unemployment rates quoted to a stable firm that has never earned one, and the basis error underneath.",
  },
  {
    href: "/resources/peo-admin-fees",
    title: "Per-employee vs percentage of payroll",
    desc: "Why the fee model matters more than the fee, and what a fully unbundled quote has to show.",
  },
  {
    href: "/resources/peo-contract-terms",
    title: "The clauses that decide what leaving costs",
    desc: "Term, auto-renewal, notice windows, termination fees, and mid-year plan-year damage.",
  },
  {
    href: "/resources/when-a-peo-is-the-wrong-answer",
    title: "When a PEO is the wrong answer",
    desc: "The cases where a PEO costs more than it saves, with a worked illustration.",
  },
  {
    href: "/resources/peo-renewal-review",
    title: "The free renewal review",
    desc: "What we need, what you get back, and why the window opens about 120 days out.",
  },
];

const PeoPricingExplained = () => (
  <>
    <SEOHead
      title="How PEO Pricing Actually Works"
      fullTitle
      description="Where PEO pricing hides money: first-year discounts, pooled SUTA rates, fee basis and exit clauses, written from the proposals we review every week."
      canonical={`${SITE_URL}/resources/peo-pricing-explained`}
      ogType="article"
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Resources · PEO pricing"
      title="How PEO pricing works"
      intro="Six pages on where the money hides in a PEO proposal, written from the proposals we review as a broker, not from other people's blogs."
    />

    <Section title="How does PEO pricing work?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        A PEO quote has four moving parts: an administrative fee, the benefit
        premiums, the workers' compensation rate, and the payroll taxes it
        assumes on your behalf. Only the first is usually negotiated openly. The
        rest, especially the state unemployment assumption and the basis the
        fee is charged on, are where most of the money quietly moves.
      </p>
      <p>
        Buyers compare the administrative fee because it is the number the
        proposal puts in large type. In the proposals we review, the
        administrative fee is rarely the line that decides whether the
        arrangement is a good deal. Over a three-year term, the unemployment
        assumption, the fee basis and the exit clauses routinely matter more.
      </p>
    </Section>

    <Section title="What this cluster covers" alt>
      <div className="space-y-4">
        {pages.map((p) => (
          <div key={p.href} className="rounded-lg border border-border bg-background p-5">
            <h3 className="font-heading text-lg font-700 text-foreground">
              <Link to={p.href} className="text-green-ink hover:underline">
                {p.title}
              </Link>
            </h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section title="The four parts of a PEO quote">
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Administrative fee.</strong>{" "}
          Charged either per employee per month or as a percentage of payroll.
          The two behave very differently as you hire and give raises. See{" "}
          <Link to="/resources/peo-admin-fees" className="text-green-ink hover:underline">
            per-employee vs percentage of payroll
          </Link>
          .
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Benefits.</strong> Medical, dental,
          vision, life, disability and retirement, usually inside the PEO's
          master plans. What matters is the plan design and the network, not the
          brochure. Our{" "}
          <Link to="/resources/peo-benefits" className="text-green-ink hover:underline">
            benefits explainer
          </Link>{" "}
          covers the structures.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Workers' compensation.</strong>{" "}
          Often genuinely cheaper inside a PEO for a small employer, because the
          PEO buys as a large master policy. This is the line PEOs are right
          about most often.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Payroll taxes, including state
          unemployment.</strong> Frequently quoted as a pooled rate rather than
          your own earned rate. See{" "}
          <Link to="/resources/peo-suta-rates" className="text-green-ink hover:underline">
            the SUTA line nobody checks
          </Link>
          .
        </Bullet>
      </ul>
    </Section>

    <Section title="How we source what's on these pages" alt>
      <p>
        Two rules. Where we describe how the industry behaves: how fees are
        structured, what happens at renewal, how unemployment rates get quoted,
        we are describing what we see first-hand in the proposals and invoices
        we review as a broker. We say so, and we do not dress it up as a
        statistic.
      </p>
      <p>
        Where a number matters, it comes from a primary source and we name and
        link it: the{" "}
        <a
          href="https://www.irs.gov/for-tax-pros/basic-tools/certified-professional-employer-organization"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-ink hover:underline"
        >
          IRS Certified PEO program
        </a>
        , the{" "}
        <a
          href="https://www.dol.gov/agencies/whd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-ink hover:underline"
        >
          U.S. Department of Labor
        </a>
        , the relevant state agency, or{" "}
        <a
          href="https://www.napeo.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-ink hover:underline"
        >
          NAPEO
        </a>
        . If we cannot attribute a figure to one of those, we describe the
        mechanism and leave the number out. That is why you will find fewer
        numbers here than on the average PEO blog, and why the ones that are
        here can be checked.
      </p>
      <LegalNote verified="2026-09-06" />
    </Section>

    <Section title="Where to start">
      <p>
        If your renewal is coming, start with{" "}
        <Link to="/resources/peo-honeymoon-pricing" className="text-green-ink hover:underline">
          why your PEO renewal jumped
        </Link>{" "}
        and then book the{" "}
        <Link to="/resources/peo-renewal-review" className="text-green-ink hover:underline">
          free renewal review
        </Link>
        . If you are considering a first PEO, read{" "}
        <Link to="/resources/when-a-peo-is-the-wrong-answer" className="text-green-ink hover:underline">
          when a PEO is the wrong answer
        </Link>{" "}
        before you take a single sales call. If you are mid-term and just want to
        understand your invoice, start with{" "}
        <Link to="/resources/peo-admin-fees" className="text-green-ink hover:underline">
          the fee models
        </Link>
        . And if you want to know why we can afford to say all this, read{" "}
        <Link to="/how-we-get-paid" className="text-green-ink hover:underline">
          how we get paid
        </Link>
        .
      </p>
    </Section>

    <Section title="Common questions about PEO pricing" alt>
      <FaqBlock faqs={faqs} />
    </Section>

    <ArticleAuthorBio />

    <ServiceCta
      heading="Have a renewal coming? We'll review it free."
      body="Send us your census, two payroll registers, your current invoice and your benefit summaries. You get a side-by-side of what you pay now against what the market would charge."
      proof="anonymised renewal review outcome, professional-services firm, with the line item that moved."
      secondary={{ label: "The free renewal review", href: "/resources/peo-renewal-review" }}
    />
  </>
);

export default PeoPricingExplained;
