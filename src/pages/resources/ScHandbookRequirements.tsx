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
    q: "Why does an at-will disclaimer matter so much in a South Carolina handbook?",
    a: "South Carolina courts have found employee handbooks can create contract-like promises when the language is specific and the company doesn't clearly disclaim it. A conspicuous at-will disclaimer is how a handbook stays a set of guidelines instead of becoming an enforceable promise.",
  },
  {
    q: "Where should the at-will disclaimer go?",
    a: "Prominently, not buried: typically at the front of the handbook and again in the acknowledgment employees sign, so there's no argument the employee missed it.",
  },
  {
    q: "Is a handbook legally required in South Carolina?",
    a: "No. Having one is good practice, not a legal requirement. What matters legally is what happens if you have one and it's written carelessly.",
  },
  {
    q: "What South Carolina-specific rules should the handbook reflect?",
    a: "E-Verify for all employers within 3 business days of hire, workers' compensation coverage at 4 or more employees, 7 days' advance written notice before a wage change, and Pregnancy Accommodations Act coverage at 15 or more employees.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "SC handbook requirements", path: "/resources/sc-handbook-requirements" },
    ]),
    faqSchema(faqs),
  ],
};

const ScHandbookRequirements = () => (
  <>
    <SEOHead
      title="South Carolina Employee Handbook Checklist"
      fullTitle
      description="What a South Carolina employee handbook should cover, including why the at-will disclaimer matters and the state-specific figures to reflect."
      canonical={`${SITE_URL}/resources/sc-handbook-requirements`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Resources · South Carolina"
      title="What should a South Carolina employee handbook cover?"
      intro="Including the one line most South Carolina handbooks need to get right: the at-will disclaimer."
    />

    <Section title="What does a South Carolina handbook need to say about at-will employment?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        A South Carolina handbook should state clearly and conspicuously that
        employment is at-will and that nothing in the handbook forms a
        contract. South Carolina courts have found specific, promise-like
        handbook language can create contract obligations when a company
        doesn't disclaim it plainly, so this single line does real work.
      </p>
    </Section>

    <Section title="Why the at-will disclaimer matters" alt>
      <p>
        The concern isn't theoretical. A handbook that lists a specific
        step-by-step discipline process, or promises a certain number of
        warnings before termination, can be read as a commitment rather than a
        guideline if the company doesn't clearly say otherwise up front. The
        fix is not to remove useful guidance from the handbook. It's to state
        plainly, in a prominent place, that:
      </p>
      <ul className="space-y-3">
        <Bullet>Employment is at-will, meaning either party can end it at any time, for any lawful reason.</Bullet>
        <Bullet>The handbook is a set of guidelines, not a contract, and doesn't guarantee a specific process before separation.</Bullet>
        <Bullet>No manager or supervisor can alter that at-will relationship verbally: only a written agreement, signed by an authorized officer, can.</Bullet>
        <Bullet>The employee acknowledgment form employees sign repeats this, so there's a signed record they saw it.</Bullet>
      </ul>
    </Section>

    <Section title="South Carolina-specific figures a handbook should reflect">
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">E-Verify: all employers, within 3 business days.</strong>{" "}
          South Carolina requires every employer, regardless of size, to
          confirm work eligibility through E-Verify within 3 business days of
          hire. See the{" "}
          <Link to="/resources/e-verify-south-carolina" className="text-green-ink hover:underline">
            full explanation
          </Link>
          .
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Workers' compensation at 4+ employees.</strong>{" "}
          Employers with 4 or more employees generally must carry coverage.
          The handbook should explain how to report an injury.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">7 days' written notice of a wage change.</strong>{" "}
          South Carolina requires 7 days' advance written notice before
          changing an employee's wage rate or payday. A handbook that
          describes pay policy should reflect this.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Pregnancy Accommodations Act at 15+ employees.</strong>{" "}
          Employers with 15 or more employees must provide reasonable
          accommodations for pregnancy, childbirth, and related conditions.
          This belongs in the leave and accommodations section.
        </Bullet>
      </ul>
      <VerifyTodo>
        Beyond these four figures, we have not been given sourced South
        Carolina statutory citations for other handbook-adjacent topics (final
        pay timing, meal and rest break rules, additional leave
        entitlements). We verify the current, cited rule for each during the
        audit rather than state one here without a source.
      </VerifyTodo>
      <LegalNote />
    </Section>

    <Section title="What else a well-run handbook covers" alt>
      <ul className="space-y-3">
        <Bullet>Anti-harassment policy and a reporting path that doesn't require going through the employee's own manager.</Bullet>
        <Bullet>Overtime approval and timekeeping expectations for non-exempt staff.</Bullet>
        <Bullet>A note on multi-state work if any staff work outside South Carolina: see the <Link to="/resources/multi-state-employer-checklist" className="text-green-ink hover:underline">multi-state employer checklist</Link>.</Bullet>
        <Bullet>Leave policies stated plainly, including how the Pregnancy Accommodations Act request process works if you're covered.</Bullet>
      </ul>
    </Section>

    <Section title="Where this fits into a broader review">
      <p>
        The handbook is area 3 of the{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>
        . See the full{" "}
        <Link to="/resources/hr-audit-checklist" className="text-green-ink hover:underline">
          HR audit checklist
        </Link>
        , the{" "}
        <Link to="/resources/state-employer-guides/south-carolina" className="text-green-ink hover:underline">
          South Carolina employer guide
        </Link>
        , and, if you also employ people in North Carolina, the{" "}
        <Link to="/resources/nc-handbook-requirements" className="text-green-ink hover:underline">
          North Carolina handbook checklist
        </Link>{" "}
        and the{" "}
        <Link to="/resources/nc-vs-sc-employment-law" className="text-green-ink hover:underline">
          NC vs. SC comparison
        </Link>
        .
      </p>
    </Section>

    <Section title="Questions about South Carolina handbooks" alt>
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Not sure your at-will language actually holds up?"
      body="The HR audit reviews your handbook language against how the company actually operates and where its exposure is."
      proof="client quote describing an at-will or handbook-language finding, South Carolina employer."
      secondary={{ label: "See the HR audit", href: "/services/hr-audit" }}
    />
  </>
);

export default ScHandbookRequirements;
