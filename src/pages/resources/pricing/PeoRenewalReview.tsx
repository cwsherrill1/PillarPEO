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
    q: "When should I start a PEO renewal review?",
    a: "About 120 days before your renewal date. That leaves time to gather a census, get quotes underwritten, compare them properly and still give valid written notice inside your contract's notice window if you decide to move.",
  },
  {
    q: "What does the renewal review cost?",
    a: "Nothing. PEO brokerage is free to the employer. If you place coverage through us, the provider pays a commission, and we disclose it in writing. If you stay where you are, you owe us nothing and we are paid nothing.",
  },
  {
    q: "What do you need from us?",
    a: "Your current PEO agreement, the most recent renewal or proposal, a census, your last four quarterly unemployment filings, your workers' compensation class codes and loss history, and your current benefit plan documents.",
  },
  {
    q: "Do we have to leave our PEO?",
    a: "No. A large share of the reviews we run end with the firm staying, often on better terms than the renewal letter proposed, because the letter was an opening position and nobody had tested it.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "PEO renewal review", path: "/resources/peo-renewal-review" },
    ]),
    articleSchema({
      headline: "The Free PEO Renewal Review",
      description:
        "A line-by-line read of your PEO renewal about 120 days out: what we need, what you get back, and how we are paid.",
      path: "/resources/peo-renewal-review",
      datePublished: "2026-09-06",
      dateModified: "2026-09-06",
    }),
    faqSchema(faqs),
  ],
};

const PeoRenewalReview = () => (
  <>
    <SEOHead
      title="The Free PEO Renewal Review"
      fullTitle
      description="A free, line-by-line read of your PEO renewal about 120 days out: what we need from you, what you get back, and exactly how we are paid."
      canonical={`${SITE_URL}/resources/peo-renewal-review`}
      ogType="article"
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="PEO pricing · 6 of 6"
      title="The free PEO renewal review"
      intro="Start about 120 days out. That is the whole trick."
    />

    <Section title="What is a PEO renewal review?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        A line-by-line read of your current PEO arrangement and your renewal
        pricing, benchmarked against what the market would quote you today. It is
        free to you, it takes about two weeks, and it works best when it starts
        roughly 120 days before your renewal date.
      </p>
    </Section>

    <Section title="Why 120 days" alt>
      <p>
        Because everything downstream of the decision takes longer than people
        expect. Gathering a clean census and loss history takes a week or two.
        Underwriting a serious quote takes several weeks. Comparing unbundled
        quotes properly takes another. And your contract's notice window, the
        written notice you must give to avoid auto-renewal, closes before your
        renewal date, not on it.
      </p>
      <p>
        Start when the renewal letter lands and you are usually already inside the
        notice window with no leverage left. Start 120 days out and you have a
        real alternative in hand at the moment you need one, which is the only
        thing that makes a renewal conversation a negotiation. The clauses that
        set that clock are covered in{" "}
        <Link to="/resources/peo-contract-terms" className="text-green-ink hover:underline">
          PEO contract terms
        </Link>
        .
      </p>
    </Section>

    <Section title="What we need from you">
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">The current agreement</strong>:
          including any amendments, so we can find your term, renewal date and
          notice window.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">The renewal letter or current
          proposal</strong>: whatever pricing you have been given for the coming
          term.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">A census</strong>: headcount by
          state, role, salary band, and benefit enrolment tier. No names needed.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Four quarters of unemployment
          filings</strong>: plus your current rate notice for each state, so we
          can test the unemployment assumption against your actual experience.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Workers' compensation detail</strong>{" "}
          class codes and loss history.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Benefit plan documents</strong>:
          current plan designs, employer contribution strategy, and recent invoices.
        </Bullet>
      </ul>
    </Section>

    <Section title="What you get back" alt>
      <p>
        A written comparison, not a sales deck. It separates the administrative
        fee from benefits, workers' compensation and payroll taxes, so you can see
        which line is driving the change: see{" "}
        <Link to="/resources/peo-admin-fees" className="text-green-ink hover:underline">
          per-employee vs percentage of payroll
        </Link>{" "}
        for why that separation matters.
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Your renewal, unbundled.</strong>{" "}
          Every line separated and explained, including the unemployment
          assumption and the fee basis.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">What the market would quote.</strong>{" "}
          Comparable unbundled quotes from providers that fit your size, states and
          class codes.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Your dates.</strong> Renewal date,
          notice deadline, and whether your plan year lines up with either.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">A recommendation.</strong> Stay,
          renegotiate, switch, or leave the PEO model entirely, including the
          case for{" "}
          <Link to="/resources/when-a-peo-is-the-wrong-answer" className="text-green-ink hover:underline">
            not using a PEO at all
          </Link>
          .
        </Bullet>
      </ul>
    </Section>

    <Section title="How we are paid, plainly">
      <p>
        The review itself is free. If you place or renew coverage through us, the
        PEO provider pays us a commission, and we disclose the amount and the
        provider in writing before you sign anything. If you stay where you are or
        decide against a PEO, we are paid nothing for the review.
      </p>
      <p>
        We sell no software and place no insurance of our own, so there is no
        second product behind the recommendation. Our paid work, audits, projects,
        fractional HR and transitions, is quoted separately and only if you ask
        for it. Full detail on{" "}
        <Link to="/how-we-get-paid" className="text-green-ink hover:underline">
          how we get paid
        </Link>
        .
      </p>
      <p>
        If your renewal jumped this year and you want to know why before you decide
        anything, start with{" "}
        <Link to="/resources/peo-honeymoon-pricing" className="text-green-ink hover:underline">
          honeymoon pricing
        </Link>{" "}
        and{" "}
        <Link to="/resources/peo-suta-rates" className="text-green-ink hover:underline">
          the SUTA line nobody checks
        </Link>
        .
      </p>
      <LegalNote verified="2026-09-06" />
    </Section>

    <Section title="When the review says: leave the PEO model entirely" alt>
      <p>
        Not every bad renewal is a reason to shop for a better PEO. In the
        renewals we review, some firms should come out of the model altogether:
        benefits that were already competitive before they went in, heavy workers'
        compensation classes that make the master policy expensive, headcount that
        has grown past the point where per-employee administration earns its fee,
        or partners who want control of plan design that a master plan will never
        give them.
      </p>
      <p>
        Where that is what the numbers say, the review says it, and we are paid
        nothing. The full case-by-case version is in{" "}
        <Link to="/resources/when-a-peo-is-the-wrong-answer" className="text-green-ink hover:underline">
          when a PEO is the wrong answer
        </Link>
        , and the exit itself is a{" "}
        <Link to="/services/transitions" className="text-green-ink hover:underline">
          fixed-price transition
        </Link>
        .
      </p>
    </Section>

    <Section title="Questions about the renewal review">
      <FaqBlock faqs={faqs} />
    </Section>


    <ArticleAuthorBio />

    <ServiceCta
      heading="Book the free renewal review."
      body="Send us your agreement and your renewal letter. We'll tell you your notice deadline first, before anything else."
      proof="permissioned renewal review outcome, with the line that moved and the annual difference."
      secondary={{ label: "How we get paid", href: "/how-we-get-paid" }}
    />
  </>
);

export default PeoRenewalReview;
