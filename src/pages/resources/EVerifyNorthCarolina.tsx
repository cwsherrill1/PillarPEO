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
    q: "Does E-Verify apply to a company with 20 employees in North Carolina?",
    a: "No. The North Carolina requirement applies to employers with 25 or more employees. Below that threshold, E-Verify use is optional under state law, though it may still be required for specific federal contracts.",
  },
  {
    q: "Does the 25-employee count include part-time staff?",
    a: "How the headcount is counted (full-time only, or all employees) is exactly the kind of detail we don't want to guess at here. Confirm current guidance before relying on a specific count.",
  },
  {
    q: "What if we're based outside North Carolina but have one employee working there?",
    a: "The requirement is tied to employing people in North Carolina, not to where the company is headquartered. If your North Carolina headcount hits the threshold, the requirement applies.",
  },
  {
    q: "Is E-Verify the same as the I-9?",
    a: "No. The I-9 is a federal form every employer completes for every new hire, regardless of state. E-Verify is a separate, optional-or-required-by-state online system that checks I-9 information against federal databases.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "E-Verify North Carolina", path: "/resources/e-verify-north-carolina" },
    ]),
    faqSchema(faqs),
  ],
};

const EVerifyNorthCarolina = () => (
  <>
    <SEOHead
      title="Is E-Verify Required in North Carolina?"
      fullTitle
      description="Yes. North Carolina requires E-Verify for employers with 25 or more employees, under NCGS 64-26. What that means and what to do next."
      canonical={`${SITE_URL}/resources/e-verify-north-carolina`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Resources · North Carolina"
      title="Is E-Verify required in North Carolina?"
      intro="A direct answer, then what it means for your company."
    />

    <Section title="Is E-Verify required in North Carolina?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Yes. North Carolina requires employers with 25 or more employees to use
        E-Verify to confirm the work eligibility of new hires, under NCGS 64-26.
        Employers below that headcount are not required to use it under state
        law, though federal contract requirements can still apply separately.
      </p>
    </Section>

    <Section title="What this means in practice" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Who it applies to.</strong> Any
          employer with 25 or more employees, counted under NCGS 64-26,
          operating in North Carolina. It applies regardless of industry.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">What it requires.</strong>{" "}
          Running new hires through the federal E-Verify system after
          completing Form I-9, on top of the I-9 itself: E-Verify does not
          replace the I-9.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">When it starts.</strong> Once
          your North Carolina headcount reaches the threshold, the requirement
          applies going forward for new hires; it is not retroactive to people
          already employed.
        </Bullet>
      </ul>
    </Section>

    <Section title="Penalties for not using E-Verify">
      <VerifyTodo>
        We have not been given a sourced, current penalty figure for
        non-compliance under NCGS 64-26. Rather than publish a number that
        might be wrong or outdated, we verify the current penalty structure
        during the audit and link to the official statute once confirmed.
      </VerifyTodo>
    </Section>

    <Section title="What to do next" alt>
      <p>
        If your company is at or approaching 25 employees in North Carolina,
        confirm your E-Verify enrollment is active and that whoever runs your
        hiring process is using it for every new hire, not just some.
        This is one of the checks in area 1 of the{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>
        , alongside I-9 completion and background check consistency. See the
        full{" "}
        <Link to="/resources/hr-audit-checklist" className="text-green-ink hover:underline">
          HR audit checklist
        </Link>{" "}
        for the other eight areas.
      </p>
      <p>
        For the rest of what a North Carolina employer needs to have in place,
        see the{" "}
        <Link to="/resources/state-employer-guides/north-carolina" className="text-green-ink hover:underline">
          North Carolina employer guide
        </Link>{" "}
        and the{" "}
        <Link to="/resources/nc-handbook-requirements" className="text-green-ink hover:underline">
          North Carolina handbook checklist
        </Link>
        . If you also employ people in South Carolina, the rules are
        different: see{" "}
        <Link to="/resources/e-verify-south-carolina" className="text-green-ink hover:underline">
          South Carolina's E-Verify requirement
        </Link>{" "}
        and the{" "}
        <Link to="/resources/nc-vs-sc-employment-law" className="text-green-ink hover:underline">
          NC vs. SC comparison
        </Link>
        .
      </p>
      <LegalNote />
    </Section>

    <Section title="Questions about E-Verify in North Carolina">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Not sure if your hiring process uses E-Verify consistently?"
      body="The HR audit checks I-9 and E-Verify practice against every hire in your file, not just the ones you remember."
      proof="client quote describing an E-Verify or I-9 gap the audit found, North Carolina employer."
      secondary={{ label: "See the HR audit", href: "/services/hr-audit" }}
    />
  </>
);

export default EVerifyNorthCarolina;
