import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import ProofSlot from "@/components/ProofSlot";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "Can we give staff comp time instead of overtime during busy season?",
    a: "Not for non-exempt staff at a private firm. Compensatory time off in place of overtime pay is a public-sector arrangement. A private employer owes overtime pay for the hours worked in the workweek they were worked, and cannot bank them against slower weeks in the spring.",
  },
  {
    q: "Can we average hours across the busy and slow seasons?",
    a: "No. Overtime is calculated per workweek. Sixty hours one week and twenty the next is one overtime week and one short week, not two forty-hour weeks.",
  },
  {
    q: "Are seasonal tax preparers exempt?",
    a: "Seasonal status has no bearing on exemption. The same duties and salary-basis analysis applies to a preparer hired in January as to a full-year staff member, and most preparer roles are non-exempt on duties.",
  },
  {
    q: "Do we owe anything for staff who worked from another state in April?",
    a: "Possibly. A staff member who works several weeks from a state you are not registered in can create payroll tax withholding and unemployment obligations there, plus exposure to that state's wage and leave rules. This is a common finding for firms with remote busy-season help.",
  },
  {
    q: "Is per-diem taxable?",
    a: "It depends on whether the arrangement meets the accountable-plan rules and stays within allowable rates. Amounts above the allowable rate, or paid without the required substantiation, are treated as wages. The audit checks whether your practice matches the plan you think you have.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "CPA firms", path: "/industries/cpa-firms" },
    ]),
    {
      "@type": "Service",
      name: "HR advisory for CPA and accounting firms",
      serviceType: "Human resources advisory for accounting practices",
      provider: ORG_REF,
      areaServed: "US",
      audience: { "@type": "Audience", audienceType: "CPA and accounting firms" },
      url: `${SITE_URL}/industries/cpa-firms`,
      description:
        "HR audits and fixed-price HR work for CPA firms: busy-season overtime, seasonal staffing, per-diem and travel pay, and staff working from other states.",
    },
    faqSchema(faqs),
  ],
};

const CpaFirms = () => (
  <>
    <SEOHead
      title="HR for CPA and Accounting Firms"
      description="Busy-season overtime, why comp time is not available to private employers, seasonal staffing, per-diem and travel pay, and out-of-state staff. Fixed price, quoted before the work starts."
      canonical={`${SITE_URL}/industries/cpa-firms`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Industries · CPA firms"
      title="HR for CPA and accounting firms."
      intro="Your exposure is concentrated in about eleven weeks of the year, and it is almost always about hours."
    />

    <Section title="What HR problems do CPA firms actually have?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Accounting firms have a seasonal wage-hour problem. Non-exempt staff work heavy
        overtime for a compressed stretch, firms try to settle it with time off later,
        seasonal preparers are hired quickly with thin paperwork, per-diem and travel pay
        are handled by habit rather than by a written plan, and some of that work happens
        from states the firm is not registered in.
      </p>
    </Section>

    <Section title="The findings we see most" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">
            "Comp time" offered to non-exempt staff.
          </strong>{" "}
          This is the most common finding in accounting firms and it is usually offered in
          good faith: work the extra hours in March, take the time back in June.
          Compensatory time in place of overtime pay is a public-sector mechanism. A
          private firm owes the overtime in the workweek it was earned. Well-intentioned
          arrangements produce exactly the same liability as careless ones.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Averaging hours across weeks.</strong> The
          workweek is the unit. A staff member at 58 hours one week and 26 the next has
          worked one overtime week, not an average of 42. Firms that budget busy season by
          the month often account for hours the same way, and the payroll register shows
          it.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Seasonal and temp hires with incomplete files.
          </strong>{" "}
          January hiring moves fast. I-9s get completed late or with the wrong documents,
          offer letters skip the pay basis, and rehired seasonal staff from prior years
          are treated as though their old paperwork is still good. I-9 timing is one of
          the cheapest things to get right and one of the most consistently missed.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Per-diem and travel pay handled informally.
          </strong>{" "}
          Firms that send staff to client sites often pay a flat daily amount with no
          written accountable plan behind it, and rarely address whether travel time
          between client sites during the workday is compensable for non-exempt staff. Two
          different problems, usually present together.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Busy-season staff working from other states.
          </strong>{" "}
          A senior working six weeks from a parent's house in another state, a preparer
          hired remotely for the season — either can create registration and withholding
          obligations in that state, along with its own wage and leave rules. Firms find
          out the following year.
        </Bullet>
      </ul>
    </Section>

    <Section title="How the audit applies to a firm like yours">
      <p>
        The{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>{" "}
        runs 41 checks across nine areas. For an accounting firm the weight lands on area
        2 (classification and wage-hour), area 1 (hiring, I-9 and E-Verify, because of
        seasonal intake) and area 4 (payroll and tax registrations, because of where
        people actually sat in April).
      </p>
      <p>
        We look at two payroll registers deliberately — one from inside busy season and
        one from outside it — because the register from a slow week tells you very little
        about how the firm behaves under pressure. We also review the timekeeping sample
        against the hours the firm believes people worked.
      </p>
      <p>
        Findings become{" "}
        <Link to="/services/hr-projects" className="text-green-ink hover:underline">
          fixed-price projects
        </Link>
        : most commonly an FLSA classification review, an I-9 and E-Verify remediation, or
        a handbook that finally says something specific about overtime approval and travel
        time. Best time to run the audit is the autumn, so anything that needs changing is
        in place before January.
      </p>
      <LegalNote />
    </Section>

    <Section title="Proof" alt>
      <ProofSlot needs="PROOF SLOT — managing partner or firm administrator quote, CPA firm, with a number (staff reclassified, overtime exposure quantified, or states registered)." />
    </Section>

    <Section title="Questions accounting firms ask">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Fix busy season before busy season."
      body="An audit in the autumn gives you a scored, written picture and time to act on it before January."
      proof="PROOF SLOT — CPA firm reference describing the autumn audit timing, with headcount."
      secondary={{ label: "See all industries", href: "/industries" }}
    />
  </>
);

export default CpaFirms;
