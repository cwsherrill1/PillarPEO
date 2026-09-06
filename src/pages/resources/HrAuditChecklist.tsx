import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const areas = [
  {
    n: 1,
    title: "Hiring, I-9, E-Verify",
    checks: [
      "Offer letters are consistent and say what the pay basis actually is",
      "I-9s are completed within the required window for every hire",
      "I-9s are stored separately from personnel files",
      "E-Verify is used everywhere it is required, and nowhere it creates unwanted obligations",
      "Background check process and forms are consistent across hires",
    ],
  },
  {
    n: 2,
    title: "Classification and wage-hour",
    checks: [
      "Exempt/non-exempt calls are based on duties, not job title or pay alone",
      "Contractor classifications hold up against how the work is actually managed",
      "Overtime is calculated by workweek, not averaged",
      "Travel time and on-call time are addressed in writing",
      "Timekeeping records match what people were actually paid for",
    ],
  },
  {
    n: 3,
    title: "Handbook and policies",
    checks: [
      "The handbook matches how the company actually operates today",
      "Known gaps (leave, remote work, discipline) are addressed, not silent",
      "Nothing in the handbook creates promises the company can't defend",
      "Acknowledgment forms are signed and on file for current staff",
    ],
  },
  {
    n: 4,
    title: "Payroll and tax registrations",
    checks: [
      "The company is registered for withholding and unemployment in every state where someone actually works",
      "New-hire reporting is happening in every one of those states",
      "Remote and traveling staff have been checked against where they were physically working",
    ],
  },
  {
    n: 5,
    title: "Benefits, ACA, COBRA",
    checks: [
      "Eligibility as written in plan documents matches eligibility as run in practice",
      "ACA offer and reporting obligations are being met on time",
      "COBRA notices go out within the required window, every time",
    ],
  },
  {
    n: 6,
    title: "Leave and accommodations",
    checks: [
      "FMLA process is followed where the company is covered",
      "State-specific leave rules are identified for every state with employees",
      "Accommodation requests (pregnancy, disability) have a documented process",
    ],
  },
  {
    n: 7,
    title: "Records, retention, privacy",
    checks: [
      "Personnel files are organized and complete",
      "Medical information is stored separately from the personnel file",
      "Retention schedules match legal minimums for each record type",
      "Access to personnel records is limited to people who need it",
    ],
  },
  {
    n: 8,
    title: "Safety and workers' comp",
    checks: [
      "Workers' comp coverage is active and correct for every state with employees",
      "Required posters are current and posted where employees can see them",
      "Injuries are reported and logged on the required timeline",
    ],
  },
  {
    n: 9,
    title: "Offboarding and final pay",
    checks: [
      "Separation is documented consistently, voluntary or not",
      "Final pay goes out within the deadline for the state the person worked in",
      "Unemployment claims get a timely, accurate response",
      "Reference practice is consistent and low-risk",
    ],
  },
];

const faqs: Faq[] = [
  {
    q: "What is an HR audit checklist?",
    a: "A structured list of what to check across how a company hires, pays, documents and separates people. This one mirrors the nine areas Pillar's paid HR audit scores, so you can run a first pass yourself.",
  },
  {
    q: "Is this the same as the paid HR audit?",
    a: "No. This page tells you what to check. The paid HR audit actually reviews your documents, scores each check Pass, Watch or Fail, and tells you what to do about each finding, in about 15 business days.",
  },
  {
    q: "Do I need a lawyer to use this checklist?",
    a: "No, but if a check turns up something you're unsure about, that's the moment to bring in counsel or run the full audit. This checklist is general information, not legal advice.",
  },
  {
    q: "How often should we run through this?",
    a: "At least once a year, and again after any meaningful change: a new state, a headcount jump, a benefits renewal, or a leadership change in HR.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "HR audit checklist", path: "/resources/hr-audit-checklist" },
    ]),
    {
      "@type": "HowTo",
      name: "How to run an HR audit",
      description: "Nine areas to check across hiring, pay, benefits, leave, records, safety and offboarding.",
      step: areas.map((a) => ({
        "@type": "HowToStep",
        name: `${a.n}. ${a.title}`,
        text: a.checks.join(" "),
      })),
    },
    faqSchema(faqs),
  ],
};

const HrAuditChecklist = () => (
  <>
    <SEOHead
      title="HR Audit Checklist — Nine Areas, Free"
      description="The full HR audit checklist: nine areas and the checks inside each one, free to read and download, no email required."
      canonical={`${SITE_URL}/resources/hr-audit-checklist`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Resources · HR audit checklist"
      title="The HR audit checklist, in full."
      intro="Nine areas, the checks inside each one, free to read and free to download. No email required."
    />

    <Section title="What does an HR audit actually check?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        An HR audit checks nine areas of how your company actually operates:
        hiring paperwork, classification and pay, the handbook, payroll tax
        registrations, benefits and ACA, leave, records, safety, and how you
        separate people. Below is the full checklist. You can read it here or
        download it as a plain text file.
      </p>
      <p>
        <a
          href="/downloads/hr-audit-checklist.md"
          download
          className="text-green-ink hover:underline font-semibold"
        >
          Download the checklist (.md)
        </a>
      </p>
    </Section>

    {areas.map((a, i) => (
      <Section key={a.n} title={`${a.n}. ${a.title}`} alt={i % 2 === 0}>
        <ul className="space-y-3">
          {a.checks.map((c, j) => (
            <Bullet key={j}>{c}</Bullet>
          ))}
        </ul>
      </Section>
    ))}

    <Section title="What to do with what you find">
      <p>
        If most checks come back clean, good — keep this on a yearly cadence.
        If you find gaps, especially in classification, registrations, or
        records, that's exactly what the{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          paid HR audit
        </Link>{" "}
        is built to score and document properly, so you have something written
        to act on rather than a hunch.
      </p>
      <p>
        If you employ people in North Carolina or South Carolina, pair this
        checklist with the{" "}
        <Link to="/resources/state-employer-guides/north-carolina" className="text-green-ink hover:underline">
          North Carolina employer guide
        </Link>{" "}
        or{" "}
        <Link to="/resources/state-employer-guides/south-carolina" className="text-green-ink hover:underline">
          South Carolina employer guide
        </Link>
        , and if you hire across state lines generally, see the{" "}
        <Link to="/resources/multi-state-employer-checklist" className="text-green-ink hover:underline">
          multi-state employer checklist
        </Link>
        .
      </p>
      <LegalNote />
    </Section>

    <Section title="Questions about the HR audit checklist" alt>
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Want it scored instead of self-checked?"
      body="The paid HR audit runs these same nine areas against your actual documents and gives you a written, scored report in 15 business days."
      proof="PROOF SLOT — client quote describing what the scored report changed about how they saw their risk."
      secondary={{ label: "See the HR audit", href: "/services/hr-audit" }}
    />
  </>
);

export default HrAuditChecklist;
