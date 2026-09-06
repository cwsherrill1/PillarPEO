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
    q: "Is a handbook legally required in North Carolina?",
    a: "No. North Carolina does not require employers to have a handbook. It's good practice because it sets expectations and gives you something to point to when a dispute comes up, not because the law demands it.",
  },
  {
    q: "Does the handbook need to mention E-Verify?",
    a: "It's reasonable to state your practice if you're subject to the requirement. North Carolina requires E-Verify for employers with 25 or more employees under NCGS 64-26, so a handbook at or above that size should say plainly what your process is.",
  },
  {
    q: "What's the biggest mistake employers make in an NC handbook?",
    a: "Copying a template written for a different state and never updating it. A handbook that references rules that don't apply in North Carolina, or is silent on ones that do, is worse than having a shorter, accurate one.",
  },
  {
    q: "How often should we update the handbook?",
    a: "At least once a year, and any time a law changes that affects a policy inside it. We recommend reviewing it as part of an annual HR audit rather than waiting for a problem to surface it.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "NC handbook requirements", path: "/resources/nc-handbook-requirements" },
    ]),
    faqSchema(faqs),
  ],
};

const NcHandbookRequirements = () => (
  <>
    <SEOHead
      title="North Carolina Employee Handbook Checklist"
      fullTitle
      description="What a North Carolina employee handbook should cover, and which of it is legally required versus good practice."
      canonical={`${SITE_URL}/resources/nc-handbook-requirements`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Resources · North Carolina"
      title="What should a North Carolina employee handbook cover?"
      intro="A checklist, with the legally required pieces separated from good practice."
    />

    <Section title="What does a North Carolina handbook actually need to say?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Very little is legally required in a North Carolina handbook itself —
        most of what belongs in one is good practice, not statute. The two
        confirmed legal points to reflect are E-Verify at 25 or more employees
        and workers' compensation coverage at 3 or more employees. Everything
        else below is a checklist of what a well-run handbook typically
        covers, not a list of legal mandates.
      </p>
    </Section>

    <Section title="What North Carolina law actually requires" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">E-Verify at 25+ employees.</strong>{" "}
          Employers with 25 or more employees must use E-Verify for new hires
          under NCGS 64-26. See the{" "}
          <Link to="/resources/e-verify-north-carolina" className="text-green-ink hover:underline">
            full explanation
          </Link>
          . If your handbook describes your hiring process, this is worth
          stating plainly once you're at that size.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Workers' compensation at 3+ employees.</strong>{" "}
          Employers with 3 or more employees generally must carry workers'
          compensation coverage. A handbook should tell employees how to report
          a workplace injury and what happens next.
        </Bullet>
      </ul>
      <VerifyTodo>
        Beyond these two figures, we have not been given sourced North Carolina
        statutory citations for other handbook-adjacent topics (final pay
        timing, meal and rest break rules, specific leave entitlements). We
        verify the current, cited rule for each during the audit rather than
        state one here without a source.
      </VerifyTodo>
    </Section>

    <Section title="What a well-run handbook covers, as good practice">
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">At-will employment statement.</strong>{" "}
          A clear statement that employment is at-will and the handbook itself
          isn't a contract, so the document doesn't accidentally create
          promises the company can't keep.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Anti-harassment and complaint process.</strong>{" "}
          A clear reporting path, including an alternative if the complaint is
          about the employee's own manager.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Pay, overtime and timekeeping.</strong>{" "}
          How non-exempt employees record hours, how overtime is approved, and
          what the pay schedule is.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Leave policies.</strong> Whatever
          leave you actually offer — vacation, sick, bereavement — stated
          plainly, plus a note on FMLA if you're a covered employer.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Remote and multi-state work.</strong>{" "}
          If any staff work outside North Carolina, the handbook should flag
          that other states' rules may apply to them. See the{" "}
          <Link to="/resources/multi-state-employer-checklist" className="text-green-ink hover:underline">
            multi-state employer checklist
          </Link>
          .
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Discipline and separation.</strong>{" "}
          A general description of how performance issues are handled and how
          separation works, without over-promising a specific process you
          won't always follow.
        </Bullet>
      </ul>
      <LegalNote />
    </Section>

    <Section title="Where this fits into a broader review" alt>
      <p>
        The handbook is area 3 of the{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>
        , checked against how the company actually operates, not just against
        a template. See the full{" "}
        <Link to="/resources/hr-audit-checklist" className="text-green-ink hover:underline">
          HR audit checklist
        </Link>
        , the{" "}
        <Link to="/resources/state-employer-guides/north-carolina" className="text-green-ink hover:underline">
          North Carolina employer guide
        </Link>
        , and, if you also employ people in South Carolina, the{" "}
        <Link to="/resources/sc-handbook-requirements" className="text-green-ink hover:underline">
          South Carolina handbook checklist
        </Link>{" "}
        and the{" "}
        <Link to="/resources/nc-vs-sc-employment-law" className="text-green-ink hover:underline">
          NC vs. SC comparison
        </Link>
        .
      </p>
    </Section>

    <Section title="Questions about North Carolina handbooks">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Not sure your handbook matches how you actually operate?"
      body="The HR audit reviews your handbook line by line against your real practice and every state you employ people in."
      proof="client quote describing a handbook gap the audit found, North Carolina employer."
      secondary={{ label: "See the HR audit", href: "/services/hr-audit" }}
    />
  </>
);

export default NcHandbookRequirements;
