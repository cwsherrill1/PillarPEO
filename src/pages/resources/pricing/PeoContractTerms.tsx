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
    q: "What is a PEO notice window?",
    a: "The period before your renewal date in which you must give written notice if you intend to leave. Miss it, even by a week, and the agreement auto-renews for another term. It is the clause that traps more employers than any other.",
  },
  {
    q: "Why is a January 1 exit cleaner?",
    a: "Because it usually lines up with the benefit plan year and the payroll tax year. Leaving mid-year means employees restart deductibles and out-of-pocket accumulators, and your people may receive wage reporting from two entities for the same year.",
  },
  {
    q: "Do PEO agreements have termination fees?",
    a: "Some do, some do not, and some achieve the same result through the notice window and term length instead. Read the termination article and the renewal article together: the cost of leaving is the sum of both, not just any stated fee.",
  },
  {
    q: "Can I negotiate the notice window before signing?",
    a: "Usually yes, and it is one of the cheapest concessions to ask for because it costs the provider nothing today. A shorter notice window, or a window that opens only after the renewal pricing is delivered, is worth asking for explicitly.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "PEO contract terms", path: "/resources/peo-contract-terms" },
    ]),
    articleSchema({
      headline: "PEO Contract Terms: What Leaving Actually Costs",
      description:
        "Term length, auto-renewal, notice windows, termination fees and mid-year plan-year damage: the clauses that decide the cost of exit.",
      path: "/resources/peo-contract-terms",
      datePublished: "2026-09-06",
      dateModified: "2026-09-06",
    }),
    faqSchema(faqs),
  ],
};

const PeoContractTerms = () => (
  <>
    <SEOHead
      title="PEO Contract Terms: What Leaving Costs"
      fullTitle
      description="Term length, auto-renewal, notice windows, termination fees and mid-year exits: the PEO clauses that decide what leaving actually costs you."
      canonical={`${SITE_URL}/resources/peo-contract-terms`}
      ogType="article"
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="PEO pricing · 4 of 6"
      title="The clauses that decide what leaving costs"
      intro="You negotiate the price once. You live inside the exit terms for years."
    />

    <Section title="Which PEO contract clauses decide the cost of leaving?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Five: the term length, whether it auto-renews, the notice window you must
        hit to stop that, any termination fee, and what happens to your benefit
        plan year if you exit mid-year. Together they set your real cost of
        leaving. That is what determines your leverage at every renewal after
        the first.
      </p>
    </Section>

    <Section title="Term and auto-renewal" alt>
      <p>
        Most agreements we read run for an initial term and then renew
        automatically for successive terms unless notice is given. Auto-renewal
        is not unreasonable in itself (nobody wants payroll to lapse), but it
        shifts the burden entirely onto you to act, on a date you will not be
        thinking about, in a month when you are busy.
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Ask how long the renewal term
          is.</strong> A missed notice window on a one-year renewal is an
          annoyance. On a multi-year renewal it is a serious problem.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Ask what triggers the
          renewal.</strong> A date, or receipt of renewal pricing? These are very
          different. If the term renews on a fixed date regardless of when pricing
          arrives, you can be locked in before you know the price.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Get the date into your own
          calendar.</strong> Not the provider's. Put the notice deadline and a
          reminder 120 days before it into whatever system your firm actually
          uses.
        </Bullet>
      </ul>
    </Section>

    <Section title="The notice window is the clause that traps people">
      <p>
        This is the one we see cost employers the most, and it is entirely
        avoidable. The pattern is consistent: renewal pricing arrives, the firm
        decides it wants to test the market, and by the time it has gathered a
        census and got two quotes underwritten the notice window has closed. The
        firm is in for another term at a price it did not agree to so much as
        fail to refuse in time.
      </p>
      <p>
        The window is usually expressed as a number of days of written notice
        before the renewal date, with a specified delivery method. Both parts
        matter. Notice given by email to your service representative, when the
        contract requires written notice to a named legal address, is not notice.
      </p>
      <p>
        This is precisely why the practical decision window opens roughly 120 days
        before renewal rather than when the notice arrives. Gathering data,
        getting quotes underwritten and giving valid notice inside the window
        takes about that long. See{" "}
        <Link to="/resources/peo-renewal-review" className="text-green-ink hover:underline">
          the free renewal review
        </Link>
        .
      </p>
    </Section>

    <Section title="Termination fees and what replaces them" alt>
      <p>
        Some agreements state a termination fee outright. Others contain no fee at
        all and achieve a stronger lock through a long term, a long notice window
        and an unhelpful renewal date. Do not read the fee clause in isolation and
        conclude there is no exit cost.
      </p>
      <p>
        Read instead for the total: any stated fee, plus the months you would owe
        if you cannot exit on your preferred date, plus the cost of the transition
        itself, plus the benefit consequences below. That total is your leverage
        number, and the provider already knows it.
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Fee on early termination</strong>:
          stated amount or formula, and what triggers it.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Data and records on exit</strong>:
          what you get back, in what format, and how quickly. Payroll history,
          I-9s, personnel files and benefit enrolment records should all be named.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Run-off obligations</strong>: who
          handles final tax filings, W-2s and any open workers' compensation
          claims after you leave.
        </Bullet>
      </ul>
    </Section>

    <Section title="Why a plan-year boundary exit is cleaner and cheaper">
      <p>
        If you leave a PEO mid-year, your employees typically move to a new
        benefit plan mid-plan-year. Deductibles and out-of-pocket accumulators
        generally restart under the new plan, which means an employee who has
        already spent significant money on care that year can be asked to spend it
        again. That is a real cost to your people, and it is the part of a
        transition that generates the most internal anger.
      </p>
      <p>
        Payroll adds a second reason. Exiting mid-year can mean wages reported
        under two different arrangements in the same tax year, which complicates
        year-end reporting and confuses employees who receive documentation from
        an entity they did not think employed them.
      </p>
      <p>
        A January 1 exit, or an exit aligned to whenever your plan year actually
        starts, avoids most of this. Which means the exit date is not a scheduling
        detail. It is a design decision you should make at signature, by lining up
        the contract term and renewal date with the plan year rather than with the
        date you happened to sign.
      </p>
      <p>
        If you are planning a move, the mechanics are covered in{" "}
        <Link to="/services/transitions" className="text-green-ink hover:underline">
          transitions
        </Link>
        , and the reasons a renewal jumped in the first place in{" "}
        <Link to="/resources/peo-honeymoon-pricing" className="text-green-ink hover:underline">
          why your PEO renewal jumped
        </Link>
        .
      </p>
      <LegalNote verified="2026-09-06" />
    </Section>

    <Section title="Questions about PEO contract terms" alt>
      <FaqBlock faqs={faqs} />
    </Section>

    <ArticleAuthorBio />

    <ServiceCta
      heading="Know your notice date before you need it."
      body="Send us the agreement and we will tell you your notice deadline, your renewal date, and whether your plan year lines up with either."
      proof="anonymised example of a notice window caught in time, with what it preserved."
      secondary={{ label: "The free renewal review", href: "/resources/peo-renewal-review" }}
    />
  </>
);

export default PeoContractTerms;
