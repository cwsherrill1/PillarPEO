import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import VerifyTodo from "@/components/content/VerifyTodo";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "Does South Carolina's E-Verify requirement apply to small employers?",
    a: "Yes. Unlike North Carolina, South Carolina requires every employer to use E-Verify, regardless of headcount. There is no small-employer exception.",
  },
  {
    q: "What counts as a business day for the 3-day deadline?",
    a: "Standard business-day counting excludes weekends and holidays, but confirm the exact counting method against current South Carolina guidance before relying on it for a close call.",
  },
  {
    q: "Do we still need to complete Form I-9?",
    a: "Yes. E-Verify runs on top of the I-9, not instead of it. Every employer, in every state, completes the I-9 for every new hire.",
  },
  {
    q: "Does this apply to a South Carolina resident who works remotely for an out-of-state company?",
    a: "The requirement is tied to employing someone in South Carolina, so a company employing a South Carolina-based worker generally needs to consider it, even if the company itself is headquartered elsewhere.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "E-Verify South Carolina", path: "/resources/e-verify-south-carolina" },
    ]),
    faqSchema(faqs),
  ],
};

const EVerifySouthCarolina = () => (
  <>
    <SEOHead
      title="Is E-Verify Required in South Carolina?"
      fullTitle
      description="Yes. South Carolina requires every employer, regardless of size, to use E-Verify within 3 business days of hire. What that means and what to do next."
      canonical={`${SITE_URL}/resources/e-verify-south-carolina`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Resources · South Carolina"
      title="Is E-Verify required in South Carolina?"
      intro="A direct answer, then what it means for your company."
    />

    <Section title="Is E-Verify required in South Carolina?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Yes. South Carolina requires every employer, regardless of headcount,
        to verify the work eligibility of new hires using E-Verify within 3
        business days of the hire date. There is no small-employer exemption:
        this applies to a one-person shop the same as a large company.
      </p>
    </Section>

    <Section title="What this means in practice" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Who it applies to.</strong>{" "}
          Every employer in South Carolina, no headcount threshold, which is
          the biggest difference from North Carolina's 25-employee rule.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">The deadline.</strong> E-Verify
          confirmation is due within 3 business days of the employee's hire
          date, which is a tighter window than many employers assume.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">On top of the I-9.</strong>{" "}
          Completing Form I-9 is still required for every hire; E-Verify is an
          additional step, not a substitute.
        </Bullet>
      </ul>
    </Section>

    <Section title="Penalties for not using E-Verify">
      <VerifyTodo>
        We have not been given a sourced, current penalty figure from the South
        Carolina Department of Labor, Licensing and Regulation (LLR) for
        non-compliance. Rather than publish a number that might be wrong or
        outdated, we verify the current penalty structure during the audit and
        link to the official source once confirmed.
      </VerifyTodo>
    </Section>

    <Section title="What to do next" alt>
      <p>
        Because South Carolina has no headcount exemption and a 3-business-day
        deadline, the most common failure point is speed, not awareness:
        companies know E-Verify applies but don't run it fast enough on every
        hire. This is one of the checks in area 1 of the{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>
        . See the full{" "}
        <Link to="/resources/hr-audit-checklist" className="text-green-ink hover:underline">
          HR audit checklist
        </Link>{" "}
        for the other eight areas.
      </p>
      <p>
        For the rest of what a South Carolina employer needs to have in place,
        see the{" "}
        <Link to="/resources/state-employer-guides/south-carolina" className="text-green-ink hover:underline">
          South Carolina employer guide
        </Link>{" "}
        and the{" "}
        <Link to="/resources/sc-handbook-requirements" className="text-green-ink hover:underline">
          South Carolina handbook checklist
        </Link>
        . If you also employ people in North Carolina, the rule is
        different: see{" "}
        <Link to="/resources/e-verify-north-carolina" className="text-green-ink hover:underline">
          North Carolina's E-Verify requirement
        </Link>{" "}
        and the{" "}
        <Link to="/resources/nc-vs-sc-employment-law" className="text-green-ink hover:underline">
          NC vs. SC comparison
        </Link>
        .
      </p>
      <LegalNote />
    </Section>

    <Section title="Questions about E-Verify in South Carolina">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Confirming E-Verify inside 3 business days, every time?"
      body="The HR audit checks I-9 and E-Verify timing against your actual hire dates, rather than against your written policy."
      proof="client quote describing an E-Verify timing gap the audit found, South Carolina employer."
      secondary={{ label: "See the HR audit", href: "/services/hr-audit" }}
    />
  </>
);

export default EVerifySouthCarolina;
