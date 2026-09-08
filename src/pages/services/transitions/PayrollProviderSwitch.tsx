import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, faqSchema, type Faq } from "@/components/content/Prose";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "When is the best time to switch payroll providers?",
    a: "The first day of a quarter, ideally January 1. Wage bases, unemployment filings and payroll tax deposits all run on quarterly and annual cycles, so starting there means the new provider begins with a clean set of year-to-date figures instead of a partial one.",
  },
  {
    q: "Can we switch payroll providers mid-year?",
    a: "Yes, but it costs more and takes more reconciliation work. The new provider has to load accurate year-to-date wage and tax figures for every employee so withholding, wage base limits and year-end W-2s stay correct, and any error in that transfer surfaces at tax filing time.",
  },
  {
    q: "Who files our payroll taxes during the switch?",
    a: "Whichever provider is active for that filing period. If the switch happens mid-quarter, you may need the old provider to file a final return for its portion of the quarter and the new provider to file for the remainder, rather than one clean quarterly filing.",
  },
  {
    q: "Why do mid-year payroll switches cost more?",
    a: "Because the year-to-date data transfer and reconciliation take real staff time regardless of provider, and some providers charge setup fees that assume a clean January 1 start. A mid-year move also carries more risk of a wage base or tax filing error, which costs time and sometimes penalties to fix later.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Transitions", path: "/services/transitions" },
      { name: "Payroll provider switch", path: "/services/transitions/payroll-provider-switch" },
    ]),
    {
      "@type": "Service",
      name: "Payroll provider switch",
      serviceType: "Payroll provider transition",
      provider: ORG_REF,
      areaServed: "US",
      url: `${SITE_URL}/services/transitions/payroll-provider-switch`,
      description:
        "Switching payroll providers, including mid-year, with year-to-date wage data, quarter boundaries and tax filings handled correctly.",
    },
    faqSchema(faqs),
  ],
};

const PayrollProviderSwitch = () => (
  <>
    <SEOHead
      title="Payroll Provider Switch: Changing Providers Cleanly"
      fullTitle
      description="Switching payroll providers, including mid-year: quarter boundaries, year-to-date wage data, tax filings, and why mid-year moves cost more."
      canonical={`${SITE_URL}/services/transitions/payroll-provider-switch`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Transitions"
      title="Switching payroll providers."
      intro="A provider switch is smaller than a PEO exit, but the same year-to-date and tax-filing risks apply, and they get worse the further you are from a quarter boundary."
    />

    <Section title="What a payroll provider switch actually involves">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        A payroll provider switch moves your payroll processing and tax
        filing from one vendor to another while your own tax IDs and
        registrations stay in place. It typically takes three to six weeks,
        and the work is almost entirely about transferring accurate
        year-to-date wage and tax data so the new provider's filings agree
        with the old provider's.
      </p>
    </Section>

    <Section title="Why quarter boundaries matter" alt>
      <p>
        Payroll taxes are filed quarterly at both the federal and state
        level. Switch providers on the first day of a quarter and the new
        provider simply starts filing from zero for that quarter, no
        splitting required. Switch mid-quarter and the old provider has to
        file a final return covering its portion of the quarter, the new
        provider has to file for the remainder, and both sets of numbers have
        to add up to what would have been filed as a single continuous
        payroll.
      </p>
      <p>
        January 1 is the cleanest date of all, because it also resets annual
        wage base limits for Social Security, federal unemployment and most
        state unemployment programs. A switch at any other point in the year
        means carrying forward exactly how much of each employee's wage base
        has already been used, which is the single most common source of
        payroll tax errors in a mid-year move.
      </p>
    </Section>

    <Section title="Year-to-date wage data and tax filings">
      <p>
        Before the new provider can run a correct payroll, it needs every
        employee's year-to-date gross wages, taxes withheld, and any
        pre-tax or post-tax deduction totals for the current year loaded
        exactly as the old provider had them. Get this wrong and the errors
        don't show up immediately: they surface at year end, when W-2s are
        generated from whatever totals the new system actually has on file.
      </p>
      <p>
        The old provider also needs to be confirmed as having filed its last
        return correctly before you consider the switch complete. A gap or
        duplicate filing between the two providers is the kind of error that
        is far cheaper to catch before year end than after.
      </p>
    </Section>

    <Section title="The sequence" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Choose the new provider and set a target date.</strong>{" "}
          Working backwards from the nearest realistic quarter boundary.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Export year-to-date data from the current provider.</strong>{" "}
          Wages, taxes, deductions and benefit contributions for every
          employee for the current calendar year.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Load and reconcile that data in the new system.</strong>{" "}
          Compared line by line against the old provider's reports before
          anyone signs off.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Confirm the final filing with the old provider.</strong>{" "}
          And the first filing with the new one, so there's no gap or overlap
          in the quarter of the switch.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Run a parallel payroll.</strong>{" "}
          At least one cycle processed in both systems and compared before the
          new provider goes live on its own.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Go live and monitor the first two cycles closely.</strong>{" "}
          Since most setup errors surface in the first month, not the first
          day.
        </Bullet>
      </ul>
    </Section>

    <Section title="What you have to do">
      <ul className="space-y-3">
        <Bullet>
          Approve the year-to-date figures once they're loaded into the new
          system. Nobody outside your firm can confirm they're right.
        </Bullet>
        <Bullet>
          Sign the new provider's service agreement and any tax filing
          authorization forms; these need an officer's signature.
        </Bullet>
        <Bullet>
          Confirm direct deposit and any benefit or 401(k) deduction setup
          matches exactly before the first live payroll.
        </Bullet>
        <Bullet>
          Keep a period of your accounting team's time free around go-live to
          review the parallel run and the first two live cycles.
        </Bullet>
      </ul>
    </Section>

    <Section title="If this is part of a larger PEO decision" alt>
      <p>
        A payroll provider switch is sometimes the first sign of a bigger
        decision: whether to be in a PEO at all, or whether the current one is
        still worth its price. If a renewal is what triggered this, the{" "}
        <Link to="/resources/peo-renewal-review" className="text-green-ink hover:underline">
          free PEO renewal review
        </Link>{" "}
        and{" "}
        <Link to="/resources/peo-contract-terms" className="text-green-ink hover:underline">
          PEO contract terms
        </Link>{" "}
        are worth reading before you commit to either path.
      </p>
    </Section>

    <Section title="Questions about switching payroll providers">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Switching payroll providers?"
      body="Send us your target date and current provider. We'll tell you the nearest clean quarter boundary and what the data transfer needs."
      proof="client quote on a completed payroll provider switch, with headcount, states and the go-live date."
      secondary={{ label: "See all transitions", href: "/services/transitions" }}
    />
  </>
);

export default PayrollProviderSwitch;
