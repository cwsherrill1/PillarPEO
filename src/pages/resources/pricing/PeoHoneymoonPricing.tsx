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
    q: "Why did my PEO renewal go up so much?",
    a: "Most often because the first-year price was set to win the business rather than to be sustainable, and the renewal is the first price that reflects the real cost of serving you. Claims experience and benefit trend also matter, but a very large single-year jump usually means the first year was discounted.",
  },
  {
    q: "Can I negotiate the renewal after I get the notice?",
    a: "You have some room, but far less than you had before signing. Your leverage at renewal depends almost entirely on whether you can credibly leave, which depends on your notice window and your plan year, both of which were set at signature.",
  },
  {
    q: "What is a renewal cap?",
    a: "A contractual ceiling on how much the administrative fee, and sometimes the benefit renewal, can increase at the next renewal. It has to be negotiated before you sign. Asking for one after the first invoice almost never works.",
  },
  {
    q: "Is a low first-year quote always a warning sign?",
    a: "Not always, but a quote far below comparable market pricing is usually borrowed against year two. The question to ask is not whether the discount is real, but how it is funded and what happens when the funding stops.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "Why your PEO renewal jumped", path: "/resources/peo-honeymoon-pricing" },
    ]),
    articleSchema({
      headline: "Why Your PEO Renewal Jumped",
      description:
        "First-year PEO pricing is often set below sustainable levels to win the business, then repriced at renewal once switching cost is highest.",
      path: "/resources/peo-honeymoon-pricing",
      datePublished: "2026-09-06",
      dateModified: "2026-09-06",
    }),
    faqSchema(faqs),
  ],
};

const PeoHoneymoonPricing = () => (
  <>
    <SEOHead
      title="Why Your PEO Renewal Jumped"
      fullTitle
      description="First-year PEO rates are often priced to win the business, then repriced at renewal once your switching cost peaks. The tell, and what to ask before signing."
      canonical={`${SITE_URL}/resources/peo-honeymoon-pricing`}
      ogType="article"
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="PEO pricing · 1 of 6"
      title="Why your PEO renewal jumped"
      intro="The first year was the offer. The renewal is the price."
    />

    <Section title="Why did my PEO renewal jump?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Because the first-year rate was often set below a sustainable level to
        win your business, and the renewal is the first price that reflects what
        serving you costs. By then your payroll, benefits and HR records
        all sit inside the PEO, so your cost of leaving is at its highest point,
        which is exactly when the reprice lands.
      </p>
    </Section>

    <Section title="What we see in the proposals we review" alt>
      <p>
        We broker PEO placements and we read renewal notices every week. This is
        our own first-hand observation, not a statistic: a meaningful share of
        the proposals we review price the first year at a level the provider
        cannot hold, and the increase arrives at the first renewal rather than
        being spread across the term.
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">The discount is real, and it is
          temporary.</strong> The first-year rate is a customer-acquisition cost.
          It is recovered over the life of the relationship, and the recovery
          starts at renewal number one.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Your leverage inverts at
          signature.</strong> Before you sign, you are a prospect with options.
          After migration, moving means re-running payroll history, re-enrolling
          every employee, re-issuing W-2s from two entities in the same year, and
          re-papering your benefit plans.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">The increase is rarely explained
          line by line.</strong> Renewal notices we see frequently present a
          single new blended number rather than showing which component moved:
          administrative fee, benefit trend, workers' compensation, or the
          unemployment assumption.
        </Bullet>
      </ul>
    </Section>

    <Section title="The tell: a plan priced far below comparable market rates">
      <p>
        You cannot spot honeymoon pricing from a single quote. You spot it by
        comparison. When one proposal sits well below several comparable ones for
        the same census, the same plan designs and the same states, the gap is
        usually not efficiency. It is borrowed against year two.
      </p>
      <p>
        The useful question is not "is this cheap?" but "how is this funded?"
        There are legitimate answers: a genuinely better workers' compensation
        master policy, a plan whose network fits your geography unusually well,
        real scale in the states where your people are. There are also answers
        that mean a reprice is coming: an introductory administrative fee, a
        benefit plan being sold below its own trend, or a pooled unemployment
        rate set optimistically for the first year only.
      </p>
      <p>
        Ask which of those it is, in writing, before you sign. A provider
        confident in its pricing will answer. If the answer is vague, that is
        itself information.
      </p>
    </Section>

    <Section title="What to ask before you sign" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Is the administrative rate
          guaranteed for the full term, or only for year one?</strong> Get the
          answer as a clause, not as a sentence in an email. A term-length rate
          guarantee and a one-year introductory rate can look identical in a
          proposal summary.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">How is the first-year discount
          funded?</strong> Ask them to name the component. If the discount sits
          in the administrative fee, the reprice will land there.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Is there a renewal cap?</strong> A
          ceiling on the administrative fee increase, and where possible a
          ceiling or a defined methodology on the benefit renewal. This has to be
          negotiated before signature; a cap requested after the first invoice
          is a request, not a right.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">How much notice will I get of the
          renewal, and how does that compare to my notice window?</strong> If the
          renewal lands after your window to give notice has closed, you have no
          decision to make. See{" "}
          <Link to="/resources/peo-contract-terms" className="text-green-ink hover:underline">
            the clauses that decide what leaving costs
          </Link>
          .
        </Bullet>
        <Bullet>
          <strong className="text-foreground">What unemployment rate are you
          assuming for me?</strong> A pooled, top-of-band rate is a cost you are
          absorbing quietly from day one. See{" "}
          <Link to="/resources/peo-suta-rates" className="text-green-ink hover:underline">
            the SUTA line nobody checks
          </Link>
          .
        </Bullet>
      </ul>
    </Section>

    <Section title="Why the cap has to be negotiated before signing">
      <p>
        A renewal cap is worth more than an equivalent first-year discount for a
        firm that intends to stay put, and almost nobody asks for one. The reason
        is timing: at proposal stage the provider is competing and a cap is a
        concession it can make to win. At renewal stage the provider is not
        competing, because it knows what leaving costs you.
      </p>
      <p>
        If you already signed without one, you are not out of options, but your
        options are the same as your exit options. That is why the useful moment
        to start work is roughly 120 days before your renewal date, not the week
        the notice arrives. See{" "}
        <Link to="/resources/peo-renewal-review" className="text-green-ink hover:underline">
          the free renewal review
        </Link>
        .
      </p>
      <LegalNote verified="2026-09-06" />
    </Section>

    <Section title="Questions about PEO renewal increases" alt>
      <FaqBlock faqs={faqs} />
    </Section>

    <ArticleAuthorBio />

    <ServiceCta
      heading="Renewal notice in hand? Let us read it before you sign it."
      body="We will show you which component moved, what the market would charge for the same census, and whether your notice window is still open."
      proof="anonymised renewal increase, professional-services firm, with the component that moved and the outcome."
      secondary={{ label: "The free renewal review", href: "/resources/peo-renewal-review" }}
    />
  </>
);

export default PeoHoneymoonPricing;
