import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import VerifyTodo from "@/components/content/VerifyTodo";
import ProofSlot from "@/components/ProofSlot";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "At what headcount does E-Verify apply in North Carolina?",
    a: "At 25 employees, under N.C. Gen. Stat. § 64-26. Below that headcount, North Carolina does not require it, though a federal contract or a specific industry rule can still require it: that's a separate check.",
  },
  {
    q: "At what headcount do we need workers' compensation coverage in North Carolina?",
    a: "At three employees. Once you have three employees, including corporate officers who are counted as employees, coverage is generally required. The audit checks whether your actual count and your coverage match.",
  },
  {
    q: "Do North Carolina's rules apply the same way to part-time and seasonal staff?",
    a: "Headcount tests generally count individuals, not full-time-equivalent hours, but the exact counting method for a given threshold is worth verifying against the current statute rather than assumed: we check this during the audit.",
  },
  {
    q: "We have staff in both North Carolina and South Carolina: do the same numbers apply?",
    a: "No. The two states set different thresholds for the same categories. See the North Carolina vs. South Carolina comparison for a side-by-side table.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "State employer guides", path: "/resources/state-employer-guides" },
      { name: "North Carolina", path: "/resources/state-employer-guides/north-carolina" },
    ]),
    faqSchema(faqs),
  ],
};

const NorthCarolina = () => (
  <>
    <SEOHead
      title="North Carolina Employer Guide 2026: HR Rules by Headcount"
      fullTitle
      description="North Carolina employer obligations organized by headcount: E-Verify at 25+, workers' comp at 3+, and what's still an open question."
      canonical={`${SITE_URL}/resources/state-employer-guides/north-carolina`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Resources · State employer guides"
      title="North Carolina: HR rules by headcount."
      intro="Two thresholds we can state with a citation. Everything else, we verify before we tell you a number."
    />

    <Section title="What triggers at each headcount in North Carolina?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        North Carolina sets two employer obligations by a specific employee count: workers'
        compensation coverage at three or more employees, and E-Verify enrollment at 25 or
        more employees under N.C. Gen. Stat. § 64-26. Most other obligations either apply to
        every employer regardless of size or depend on federal thresholds: we verify those
        against the current statute rather than estimate them here.
      </p>
    </Section>

    <Section title="1 employee" alt>
      <p>
        Having even one employee in North Carolina triggers baseline obligations: new-hire
        reporting, payroll tax withholding and registration, and posting requirements.
      </p>
      <VerifyTodo>
        The exact new-hire reporting window, the current required poster list, and final-pay
        deadlines under North Carolina's Wage and Hour Act are not stated here because we
        have not been given the current figures. We verify these against the NC Department
        of Labor during the audit before quoting a number or deadline.
      </VerifyTodo>
    </Section>

    <Section title="3+ employees">
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Workers' compensation coverage.</strong> Once
          you reach three employees, North Carolina generally requires you to carry
          workers' compensation coverage. Corporate officers can count toward this total
          depending on how the business is structured.
        </Bullet>
      </ul>
      <VerifyTodo>
        Whether part-owners, contractors misclassified as employees, or officers who've
        opted out change this count for your specific structure is a facts-and-documents
        question. We check your actual headcount and entity structure against this
        threshold during the audit rather than assume it here.
      </VerifyTodo>
    </Section>

    <Section title="15+ employees" alt>
      <p>
        Several federal anti-discrimination statutes (Title VII, the ADA) turn on a 15-employee
        threshold, counted under federal rules rather than North Carolina's own statute.
      </p>
      <VerifyTodo>
        We reference the federal 15-employee threshold only in general terms here; the
        current counting method (including whether it's based on calendar weeks in the
        current or preceding year) should be confirmed against{" "}
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

    <Section title="25+ employees">
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">E-Verify enrollment.</strong> Under{" "}
          <a
            href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_64/GS_64-26.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-ink hover:underline"
          >
            N.C. Gen. Stat. § 64-26
          </a>
          , employers with 25 or more employees must be enrolled in and use E-Verify to
          confirm work authorization for new hires. This is the single most commonly missed
          registration we find in the audit at growing firms that recently crossed this line.
        </Bullet>
      </ul>
    </Section>

    <Section title="50+ employees" alt>
      <p>
        Fifty employees is the federal FMLA threshold, and North Carolina layers its own
        registration and reporting obligations on top of federal ones as headcount grows.
      </p>
      <VerifyTodo>
        The exact FMLA counting rule (50 employees within a 75-mile radius, counted for 20
        or more workweeks) is federal law we haven't been asked to source here, and any
        North Carolina-specific obligations that attach at this headcount should be
        verified against the current NCDOL guidance rather than assumed. We confirm the
        applicable set during the audit.
      </VerifyTodo>
    </Section>

    <Section title="How this fits into the audit">
      <p>
        The{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>{" "}
        checks your actual headcount, by state, against the thresholds that apply there,
        rather than assuming your company handbook or payroll provider already got it
        right. For firms with people in more than one state, start with the{" "}
        <Link to="/resources/multi-state-employer-checklist" className="text-green-ink hover:underline">
          multi-state employer checklist
        </Link>
        , or see how North Carolina compares to{" "}
        <Link to="/resources/state-employer-guides/south-carolina" className="text-green-ink hover:underline">
          South Carolina
        </Link>{" "}
        directly in the{" "}
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

    <Section title="Proof" alt>
      <ProofSlot needs="North Carolina client quote describing an E-Verify or workers' comp finding, with headcount at the time." />
    </Section>

    <Section title="Questions North Carolina employers ask">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Know exactly which North Carolina rules apply to you."
      body="The audit checks your headcount against the current thresholds, not against a guess."
      proof="North Carolina client reference with headcount and a specific finding."
      secondary={{ label: "See all state guides", href: "/resources/state-employer-guides" }}
    />
  </>
);

export default NorthCarolina;
