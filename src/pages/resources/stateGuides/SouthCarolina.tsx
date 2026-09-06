import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import VerifyTodo from "@/components/content/VerifyTodo";
import ProofSlot from "@/components/ProofSlot";
import { SITE_URL, breadcrumb } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "Does E-Verify apply to small employers in South Carolina?",
    a: "Yes. South Carolina requires every employer, regardless of size, to verify new hires' work authorization within 3 business days of hire — either through E-Verify or by another method the statute permits. This is different from North Carolina, which only requires E-Verify at 25 or more employees.",
  },
  {
    q: "At what headcount does workers' compensation apply in South Carolina?",
    a: "At four employees. Once you have four employees, coverage is generally required.",
  },
  {
    q: "Do we have to notify employees before changing their pay?",
    a: "South Carolina requires 7 days' advance written notice of a change in wages. This applies regardless of headcount.",
  },
  {
    q: "When does the Pregnancy Accommodations Act apply?",
    a: "At 15 or more employees. Below that headcount, other federal or state protections may still apply — that's worth confirming for your specific situation rather than assuming this Act is the only rule in play.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "State employer guides", path: "/resources/state-employer-guides" },
      { name: "South Carolina", path: "/resources/state-employer-guides/south-carolina" },
    ]),
    faqSchema(faqs),
  ],
};

const SouthCarolina = () => (
  <>
    <SEOHead
      title="South Carolina Employer Guide: HR Rules by Headcount"
      fullTitle
      description="SC employer obligations by headcount: E-Verify for all employers, workers' comp at 4+, wage-change notice, Pregnancy Accommodations Act at 15+."
      canonical={`${SITE_URL}/resources/state-employer-guides/south-carolina`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Resources · State employer guides"
      title="South Carolina: HR rules by headcount."
      intro="One rule applies from your very first hire. The rest scale with headcount."
    />

    <Section title="What triggers at each headcount in South Carolina?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        South Carolina requires every employer, of any size, to verify work authorization
        within 3 business days of hire. Beyond that, obligations layer in as headcount
        grows: workers' compensation at four employees, and the Pregnancy Accommodations
        Act at 15 employees. A wage-change notice requirement applies regardless of
        headcount. Anything not listed here is an open question we verify before quoting.
      </p>
    </Section>

    <Section title="1 employee" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">E-Verify, within 3 business days of hire.</strong>{" "}
          Unlike North Carolina, South Carolina does not set a headcount floor for this.
          Every employer must verify each new hire's work authorization within 3 business
          days, generally through{" "}
          <a
            href="https://www.e-verify.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-ink hover:underline"
          >
            E-Verify
          </a>
          .
        </Bullet>
        <Bullet>
          <strong className="text-foreground">7 days' advance written notice of a wage change.</strong>{" "}
          Also unaffected by headcount: South Carolina requires 7 days' advance written
          notice before you change an employee's rate of pay.
        </Bullet>
      </ul>
      <VerifyTodo>
        New-hire reporting windows, final-pay deadlines, and the current required poster
        list for South Carolina are not stated here because we haven't been given current
        figures. We verify these against{" "}
        <a
          href="https://dew.sc.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-ink hover:underline"
        >
          SC DEW
        </a>{" "}
        during the audit before quoting a number or deadline.
      </VerifyTodo>
    </Section>

    <Section title="4+ employees">
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Workers' compensation coverage.</strong> Once
          you reach four employees, South Carolina generally requires workers'
          compensation coverage. This is a lower threshold than North Carolina's three,
          which is worth catching if you move headcount between the two states.
        </Bullet>
      </ul>
      <VerifyTodo>
        How officers, LLC members, and part-time staff count toward this threshold for your
        specific structure is a facts question we check during the audit rather than
        assume here.
      </VerifyTodo>
    </Section>

    <Section title="15+ employees" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Pregnancy Accommodations Act.</strong> At 15
          or more employees, South Carolina requires reasonable accommodations for
          pregnancy, childbirth, and related medical conditions.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Federal 15-employee threshold.</strong> Title
          VII and the ADA also turn on 15 employees, counted under federal rules.
        </Bullet>
      </ul>
      <VerifyTodo>
        The exact counting method behind these thresholds (which weeks count, how leased or
        temporary staff factor in) should be confirmed against current{" "}
        <a
          href="https://www.eeoc.gov/coverage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-ink hover:underline"
        >
          EEOC guidance
        </a>{" "}
        for your specific facts, not assumed from this page.
      </VerifyTodo>
    </Section>

    <Section title="50+ employees">
      <p>
        Fifty employees is the federal FMLA threshold. Whether South Carolina layers any
        state-specific obligation on top at this headcount is not something we assert here.
      </p>
      <VerifyTodo>
        We confirm any South Carolina-specific obligations attaching at 50 employees during
        the audit rather than list them from memory.
      </VerifyTodo>
    </Section>

    <Section title="How this fits into the audit" alt>
      <p>
        The{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>{" "}
        checks your actual headcount and hiring dates against these thresholds — including
        the 3-business-day E-Verify window, which is easy to miss when hiring moves fast.
        For firms with people in both states, start with the{" "}
        <Link to="/resources/multi-state-employer-checklist" className="text-green-ink hover:underline">
          multi-state employer checklist
        </Link>
        , or see South Carolina next to{" "}
        <Link to="/resources/state-employer-guides/north-carolina" className="text-green-ink hover:underline">
          North Carolina
        </Link>{" "}
        in the{" "}
        <Link to="/resources/nc-vs-sc-employment-law" className="text-green-ink hover:underline">
          side-by-side comparison
        </Link>
        .
      </p>
      <p className="text-sm text-muted-foreground">
        This guide is reviewed quarterly as thresholds and citations are re-checked.
      </p>
      <LegalNote />
    </Section>

    <Section title="Proof">
      <ProofSlot needs="PROOF SLOT — South Carolina client quote describing an E-Verify timing or workers' comp finding, with headcount at the time." />
    </Section>

    <Section title="Questions South Carolina employers ask" alt>
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Know exactly which South Carolina rules apply to you."
      body="The audit checks your hire dates and headcount against the current thresholds, not against a guess."
      proof="PROOF SLOT — South Carolina client reference with headcount and a specific finding."
      secondary={{ label: "See all state guides", href: "/resources/state-employer-guides" }}
    />
  </>
);

export default SouthCarolina;
