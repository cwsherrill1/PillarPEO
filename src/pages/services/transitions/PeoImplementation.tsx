import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, faqSchema, type Faq } from "@/components/content/Prose";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "How long does a first PEO implementation take?",
    a: "Plan on four to eight weeks from signed agreement to first payroll, depending on how many states you employ people in and how quickly your benefit elections and underwriting data come together. Multi-state employers and firms with older, incomplete records run longer.",
  },
  {
    q: "What data does the PEO need before it can quote and set up your account?",
    a: "A full census with pay rates, dates of hire, job classifications and work states; four quarters of unemployment filings if available; workers' compensation class codes and loss runs; and your current benefit plan documents if you already offer coverage.",
  },
  {
    q: "Do we keep our current benefits when we enter a PEO?",
    a: "Only if the PEO's master plan happens to use the same carrier and design. Most firms move onto the PEO's benefit menu, which usually means a new enrolment period and new plan documents for every employee.",
  },
  {
    q: "What is the biggest risk in a first PEO implementation?",
    a: "Underwriting on incomplete or wrong data. A missing class code, an outdated loss run, or an inaccurate census produces a quote that gets repriced once the PEO's underwriters see the real numbers, which can happen after you've already committed.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Transitions", path: "/services/transitions" },
      { name: "PEO implementation", path: "/services/transitions/peo-implementation" },
    ]),
    {
      "@type": "Service",
      name: "PEO implementation",
      serviceType: "First-time PEO implementation",
      provider: ORG_REF,
      areaServed: "US",
      url: `${SITE_URL}/services/transitions/peo-implementation`,
      description:
        "Entering a PEO for the first time: data gathering, underwriting, benefit enrolment and the first payroll, with your team's role defined up front.",
    },
    faqSchema(faqs),
  ],
};

const PeoImplementation = () => (
  <>
    <SEOHead
      title="PEO Implementation: Entering a PEO for the First Time"
      fullTitle
      description="What happens when you enter a PEO for the first time: data gathering, underwriting, benefit enrolment, first payroll, and your team's role."
      canonical={`${SITE_URL}/services/transitions/peo-implementation`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Transitions"
      title="Entering a PEO for the first time."
      intro="Underwriting is the part that decides your pricing, and it runs on data your team has to produce accurately before anything else can happen."
    />

    <Section title="What a first PEO implementation actually involves">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        A first PEO implementation moves your employees onto the PEO's payroll
        system, benefit plans and workers' compensation policy for the first
        time. It runs on the census, loss history and benefit data you supply
        for underwriting, and it typically takes four to eight weeks from a
        signed agreement to the first payroll processed under the PEO.
      </p>
    </Section>

    <Section title="The sequence" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Data gathering.</strong> A full
          census by employee, state, pay rate and job classification; four
          quarters of unemployment filings; workers' compensation class codes
          and loss runs; and current benefit plan documents if you have them.
          This is usually the single longest step because it exposes gaps in
          existing records.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Underwriting.</strong> The PEO
          prices workers' compensation and, in some states, unemployment based
          on your actual data rather than industry averages. Incomplete or
          estimated data here gets repriced once real numbers surface, so
          accuracy up front avoids a surprise later.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Benefit plan selection and enrolment.</strong>{" "}
          You choose plans from the PEO's carrier menu, set contribution
          strategy, and run an enrolment period for employees, typically two
          to three weeks including questions and corrections.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Payroll system setup.</strong>{" "}
          Employee records, pay history, deduction codes and direct deposit
          information loaded into the PEO's platform, with access granted to
          your internal payroll approver.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Parallel or shadow payroll.</strong>{" "}
          A trial run comparing the PEO's calculated pay to your prior
          system's numbers before the first live payroll, catching setup
          errors while they're still cheap to fix.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">First live payroll.</strong> Run
          under the PEO's tax IDs, with your team reviewing and approving
          before submission the first few cycles.
        </Bullet>
      </ul>
    </Section>

    <Section title="What the client's team must do">
      <ul className="space-y-3">
        <Bullet>
          Produce accurate census and payroll history. This is the input
          underwriting and setup both depend on, and errors here surface as
          repriced quotes or payroll corrections later.
        </Bullet>
        <Bullet>
          Choose benefit plans and communicate the change to employees before
          enrolment opens, including any change in carrier, network or
          contribution amount.
        </Bullet>
        <Bullet>
          Sign the client service agreement, benefit applications and workers'
          compensation forms; these need an officer's signature and are a
          common source of delay.
        </Bullet>
        <Bullet>
          Nominate one internal payroll approver who reviews and signs off
          each payroll before it processes, at least through the first few
          cycles.
        </Bullet>
        <Bullet>
          Set aside time during enrolment for employee questions; a new
          benefit menu generates more of them than people expect.
        </Bullet>
      </ul>
    </Section>

    <Section title="Before you commit to a PEO" alt>
      <p>
        A first implementation is easier to get right than to unwind, so
        confirm the contract terms before you sign, particularly the notice
        window and renewal date that will govern your options later; see{" "}
        <Link to="/resources/peo-contract-terms" className="text-green-ink hover:underline">
          PEO contract terms
        </Link>
        . And once you're in, the same renewal clock keeps running: the{" "}
        <Link to="/resources/peo-renewal-review" className="text-green-ink hover:underline">
          free PEO renewal review
        </Link>{" "}
        is worth scheduling well ahead of your first renewal date, not after
        the letter arrives.
      </p>
    </Section>

    <Section title="Questions about a first PEO implementation">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Starting a PEO for the first time?"
      body="Send us your census and current benefit and workers' comp details. We'll tell you what underwriting will need and when you can realistically go live."
      proof="client quote on a completed PEO implementation, with headcount, states and the go-live date."
      secondary={{ label: "See all transitions", href: "/services/transitions" }}
    />
  </>
);

export default PeoImplementation;
