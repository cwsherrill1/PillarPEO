import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, faqSchema, type Faq } from "@/components/content/Prose";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "What carries over when we switch PEOs?",
    a: "Your employee census, pay history and PTO balances move with proper mapping, and a like-for-like benefit plan can usually preserve deductible credit if the new PEO's carrier will honor it. Your unemployment rate and workers' compensation experience generally do not move; each PEO runs those under its own master accounts.",
  },
  {
    q: "Do we lose the deductible our employees already paid this year?",
    a: "Not automatically, but it isn't automatic either. Carriers that accept deductible credit need proof of what each employee already paid, submitted before the new plan year starts. Ask this question before you sign with a new PEO, not after.",
  },
  {
    q: "How long does a PEO-to-PEO switch take?",
    a: "Plan on six to ten weeks from the decision to go live, most of it underwriting the new quote and mapping benefits, plus whatever notice period your current agreement requires before that clock can even start.",
  },
  {
    q: "Should we compare quotes before or after giving notice?",
    a: "Before. Giving notice without a signed alternative in hand puts you at the mercy of your current PEO's final offer, and if the new deal falls through you may already be past your window to stay on acceptable terms.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Transitions", path: "/services/transitions" },
      { name: "PEO switch", path: "/services/transitions/peo-switch" },
    ]),
    {
      "@type": "Service",
      name: "PEO switch",
      serviceType: "PEO-to-PEO transition",
      provider: ORG_REF,
      areaServed: "US",
      url: `${SITE_URL}/services/transitions/peo-switch`,
      description:
        "Moving from one PEO to another with the census, benefits and deductible credit landing intact, compared and negotiated before notice is given.",
    },
    faqSchema(faqs),
  ],
};

const PeoSwitch = () => (
  <>
    <SEOHead
      title="PEO Switch: Moving From One PEO to Another"
      fullTitle
      description="What carries over in a PEO-to-PEO switch, what doesn't, deductible credit, and why to run the comparison before giving notice."
      canonical={`${SITE_URL}/services/transitions/peo-switch`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Transitions"
      title="Switching from one PEO to another."
      intro="Less rebuilding than an exit, but the benefit and payroll mapping still has to be exact, or someone loses a deductible or a pay stub."
    />

    <Section title="What a PEO switch actually involves">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        A PEO switch moves your employer relationship from one PEO's master
        accounts to another's, without you ever running payroll or benefits
        directly. It is faster than a full exit because you aren't standing up
        your own tax IDs or carriers, but it still needs a real comparison
        underwritten and signed before you give notice to the current PEO.
      </p>
    </Section>

    <Section title="What carries over, and what doesn't" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Carries over, with mapping.</strong>{" "}
          Employee census, pay rates, PTO and accrual balances, and 401(k)
          deferral elections, all re-entered or imported into the new PEO's
          system rather than automatically transferred.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Carries over, if negotiated.</strong>{" "}
          Deductible and out-of-pocket credit already paid this plan year, if
          the new carrier will accept proof of prior payments; and a
          comparable benefit plan design, if you choose one.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Does not carry over.</strong>{" "}
          Your unemployment experience rating and workers' compensation loss
          history, both of which sit under the PEO's own tax ID and policy,
          not yours; and the specific carrier and plan, unless the new PEO
          offers the same one.
        </Bullet>
      </ul>
    </Section>

    <Section title="Benefit plan continuity and deductible credit">
      <p>
        The biggest risk in a mid-year switch is an employee who has already
        met part or all of a deductible losing that progress because the new
        plan starts the accumulator at zero. Some carriers will accept a
        deductible credit transfer if you supply claims history or paid
        amounts before the new plan year begins; others won't, and the answer
        varies by carrier and by state. Ask this in writing during the quote
        comparison, not after you have signed with a new PEO.
      </p>
      <p>
        The cleanest way to avoid the question entirely is to time the switch
        to your current benefit plan's renewal date, so the new plan year
        starts fresh for everyone at the same point it would have anyway.
      </p>
    </Section>

    <Section title="The sequence" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Run the comparison.</strong>{" "}
          Get unbundled quotes from two or three PEOs that fit your size,
          states and class codes, using the same census and loss history each
          time.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Decide and sign the new agreement.</strong>{" "}
          With an effective date tied to your benefit plan year where
          possible.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Give notice to the current PEO.</strong>{" "}
          Inside its contractual notice window, only once the new agreement is
          signed.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Map census and payroll data to the new system.</strong>{" "}
          Pay rates, deduction codes, PTO balances and year-to-date wages.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Complete benefit enrolment.</strong>{" "}
          Under the new PEO's plans, with deductible credit documentation
          submitted if applicable.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Run a parallel payroll and go live.</strong>{" "}
          Reconciled against the old PEO's final run before it closes out.
        </Bullet>
      </ul>
    </Section>

    <Section title="What you have to do">
      <ul className="space-y-3">
        <Bullet>
          Supply the census, loss history and current plan documents the
          comparison runs on. The quotes are only as good as this data.
        </Bullet>
        <Bullet>
          Sign the new PEO agreement and benefit enrolment forms; these need
          an officer's signature.
        </Bullet>
        <Bullet>
          Send the resignation notice to the current PEO yourself, on the date
          the plan calls for, once the new agreement is in place.
        </Bullet>
        <Bullet>
          Communicate the plan change to employees before open enrolment
          starts under the new PEO, especially any change in carrier or
          network.
        </Bullet>
      </ul>
    </Section>

    <Section title="Before you switch" alt>
      <p>
        If the reason to switch is a bad renewal rather than a settled
        decision, the{" "}
        <Link to="/resources/peo-renewal-review" className="text-green-ink hover:underline">
          free PEO renewal review
        </Link>{" "}
        tests whether the current PEO will negotiate before you go through a
        full switch. The clauses that govern your notice window and what
        happens to unused credits are covered in{" "}
        <Link to="/resources/peo-contract-terms" className="text-green-ink hover:underline">
          PEO contract terms
        </Link>
        .
      </p>
    </Section>

    <Section title="Questions about switching PEOs">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Comparing PEOs before you switch?"
      body="Send us your current agreement and census. We'll run the comparison and tell you your notice deadline before anything else."
      proof="client quote on a completed PEO switch, with headcount, states and the go-live date."
      secondary={{ label: "See all transitions", href: "/services/transitions" }}
    />
  </>
);

export default PeoSwitch;
