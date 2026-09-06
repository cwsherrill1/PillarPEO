import { Link } from "react-router-dom";
import { pricing } from "@/data/pricing";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import ProofSlot from "@/components/ProofSlot";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "Are drafters and CAD technicians exempt?",
    a: "Frequently not. Exempt status turns on duties and independent judgment, not on the software someone uses or the technical nature of the output. A drafter working to another person's specifications is a different case from an engineer making independent design decisions, even where the job titles sit close together on an org chart.",
  },
  {
    q: "Does a degree make someone exempt?",
    a: "No. A degree is relevant evidence for the learned professional exemption, but the analysis is about what the person actually does day to day. Two people with the same degree can land on different sides of the line based on their real responsibilities.",
  },
  {
    q: "What changes on a public contract?",
    a: "Public work can bring prevailing-wage requirements, certified payroll reporting and specific record-keeping obligations that your commercial work does not have. The obligations come from the contract and the funding source, so the audit reads your actual contract terms rather than assuming.",
  },
  {
    q: "Do we need to register in a state where we only have a site inspector?",
    a: "Often yes. Payroll tax withholding and unemployment obligations generally follow where the work is performed, not where the office is. A months-long site assignment in another state is the classic trigger.",
  },
  {
    q: "How is travel time treated for non-exempt field staff?",
    a: "Ordinary home-to-work commuting is generally not compensable, but travel between job sites during the workday generally is, and overnight travel has its own rules. Firms that pay a flat field allowance and stop there usually have a gap here.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "Engineering and architecture", path: "/industries/engineering-architecture" },
    ]),
    {
      "@type": "Service",
      name: "HR advisory for engineering and architecture firms",
      serviceType: "Human resources advisory for design and engineering practices",
      provider: ORG_REF,
      areaServed: "US",
      audience: {
        "@type": "Audience",
        audienceType: "Engineering and architecture firms",
      },
      url: `${SITE_URL}/industries/engineering-architecture`,
      description:
        "HR audits and fixed-price HR work for engineering and architecture firms: exempt status for designers and drafters, public-contract wage rules, project travel and multi-state project staffing.",
    },
    faqSchema(faqs),
  ],
};

const EngineeringArchitecture = () => (
  <>
    <SEOHead
      title="HR for Engineering and Architecture Firms"
      description={`Exempt status for designers and drafters, public-contract wage rules, project-based and travelling staff, and multi-state project work. Fixed-price HR audits from ${pricing.audit.from}.`}
      canonical={`${SITE_URL}/industries/engineering-architecture`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Industries · Engineering & architecture"
      title="HR for engineering and architecture firms."
      intro="Your staffing follows projects, and projects cross state lines and contract types. The HR record rarely keeps up."
    />

    <Section title="What HR problems do engineering and architecture firms actually have?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Design firms have a classification problem in the middle of the org chart and a
        geography problem at the edges. Designers, drafters and technicians sit in a grey
        zone on exempt status; public contracts carry wage and reporting terms the
        commercial work does not; and project staff spend months in states the firm never
        registered in.
      </p>
    </Section>

    <Section title="The findings we see most" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">
            Designers and drafters treated as exempt by title.
          </strong>{" "}
          Firms tend to classify by seniority ladder — everyone from Designer II upward is
          salaried and exempt. The test is duties and independent judgment. Someone
          producing drawings to a licensed professional's direction usually does not clear
          it, however skilled the work is. Because the rule is applied by grade, the error
          replicates across a whole band of staff.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Public-contract wage terms nobody read as HR terms.
          </strong>{" "}
          Prevailing-wage and certified-payroll obligations arrive in the contract, get
          filed by the project team, and never reach whoever runs payroll. The result is a
          payroll process that satisfies the commercial standard and not the contract's.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Field and travel time paid by convention.
          </strong>{" "}
          Non-exempt field staff are often paid a flat day rate or a mileage allowance,
          with no written rule on travel between sites during the day, waiting time on
          site, or overnight travel. Conventions differ between project managers inside
          the same firm, which is itself a finding.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Multi-state project staffing with single-state payroll.
          </strong>{" "}
          A six-month construction-administration assignment across a state line generally
          creates withholding and unemployment obligations in that state, plus its wage
          notice and leave rules. Firms handle the licensure and insurance questions
          carefully and skip the employment ones.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Project-based hires with no defined end.
          </strong>{" "}
          People brought on "for the project" through a 1099 or an agency, still there
          three projects later, on your equipment and your schedule. The paperwork
          describes a temporary independent arrangement; the working relationship stopped
          being one a long time ago.
        </Bullet>
      </ul>
    </Section>

    <Section title="How the audit applies to a firm like yours">
      <p>
        The{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>{" "}
        runs 41 checks across nine areas, scored Pass, Watch or Fail. For a design firm the
        pressure points are area 2 (classification and wage-hour), area 4 (payroll and tax
        registrations, driven by where projects are), and area 8 (safety and workers'
        comp, because field staff and office staff are usually documented to different
        standards).
      </p>
      <p>
        Alongside the standard inputs we ask for job descriptions at every grade in the
        design ladder — that is where the classification answer lives — and for any public
        contract with wage or reporting terms, so we read what you actually agreed to
        rather than what is typical.
      </p>
      <p>
        The usual follow-on work is an FLSA classification review across the design
        ladder, or a{" "}
        <Link to="/services/hr-projects" className="text-green-ink hover:underline">
          compensation benchmarking project
        </Link>{" "}
        when the grades no longer match the market. Firms that add staff in a new state
        every year tend to move to{" "}
        <Link to="/services/fractional-hr" className="text-green-ink hover:underline">
          fractional HR
        </Link>{" "}
        so registrations happen before the assignment, not after.
      </p>
      <LegalNote />
    </Section>

    <Section title="Proof" alt>
      <ProofSlot needs="PROOF SLOT — principal or director of operations quote, engineering or architecture firm, with a number (grades reviewed, states registered, or field-pay policy rewritten)." />
    </Section>

    <Section title="Questions design firms ask">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Get the design ladder classified once, properly."
      body="A fixed-price audit covering every state your projects put people in, quoted before we start."
      proof="PROOF SLOT — engineering firm reference describing a multi-state project registration cleanup."
      secondary={{ label: "See all industries", href: "/industries" }}
    />
  </>
);

export default EngineeringArchitecture;
