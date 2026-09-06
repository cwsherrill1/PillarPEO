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
    q: "Are paralegals exempt from overtime?",
    a: "Usually not. The learned professional exemption generally requires a prolonged course of specialized intellectual instruction, and most paralegal roles do not meet it on the duties test: a paralegal certificate is not the same thing. Salary alone never makes a role exempt. The safer default for most firms is to treat paralegals as non-exempt, track hours, and pay overtime.",
  },
  {
    q: "Is a partner an employee for HR purposes?",
    a: "It depends on the substance of the relationship, not the title. A partner who shares in profits and losses, has real management authority and cannot be fired at will looks like an owner. A 'non-equity partner' who is paid a salary, is supervised and can be terminated typically looks like an employee, and employment law applies accordingly.",
  },
  {
    q: "Can we pay a contract attorney on a 1099?",
    a: "Sometimes, but the analysis is about control and independence, not convenience. A contract attorney who works your hours, on your matters, under your supervision, with your systems, over a long period tends to look like an employee. Firms get into trouble when a temporary 1099 arrangement quietly becomes permanent.",
  },
  {
    q: "What triggers a wage-hour problem in a law firm?",
    a: "Most often an unpaid working lunch, off-the-clock evening filing work, or a non-exempt staff member with a smartphone answering matters after hours. The exposure is not one week's overtime: it is the same pattern across several people and a multi-year lookback.",
  },
  {
    q: "Does the audit cover states where we only have one lawyer?",
    a: "Yes. Multi-state is the default, not an add-on. If you have a lateral hire working from another state, that state's registration, wage-notice and leave rules are in scope.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "Law firms", path: "/industries/law-firms" },
    ]),
    {
      "@type": "Service",
      name: "HR advisory for law firms",
      serviceType: "Human resources advisory for legal practices",
      provider: ORG_REF,
      areaServed: "US",
      audience: { "@type": "Audience", audienceType: "Law firms" },
      url: `${SITE_URL}/industries/law-firms`,
      description:
        "HR audits and fixed-price HR work for law firms: paralegal and legal assistant classification, partner status, trust-account separation of duties, contract attorneys and multi-state lateral hires.",
    },
    faqSchema(faqs),
  ],
};

const LawFirms = () => (
  <>
    <SEOHead
      title="HR for Law Firms: Audits and Fixed-Price Work | Pillar"
      fullTitle
      description="Paralegal classification, partner vs employee status, trust-account separation of duties, contract attorneys and multi-state laterals."
      canonical={`${SITE_URL}/industries/law-firms`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Industries · Law firms"
      title="HR for law firms."
      intro="You advise clients on risk all day. The exposure inside your own firm is usually a classification decision nobody has revisited in years."
    />

    <Section title="What HR problems do law firms actually have?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Law firms mostly have wage-hour problems, not personality problems. The recurring
        findings are paralegals and legal assistants treated as exempt when their duties
        do not support it, non-equity partners sitting in an undefined space between owner
        and employee, contract attorneys carried on 1099s for years, and lateral hires
        working from states the firm never registered in.
      </p>
    </Section>

    <Section title="The five findings we see most" alt>
      <p>
        These are the issues that show up repeatedly in legal practices of 10 to 150
        people. They are written as specifics because vague findings are useless.
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">
            Paralegals and legal assistants classified as exempt.
          </strong>{" "}
          This is the single most common finding in a law firm. Firms reason that the work
          is professional and the person is salaried, so the exemption applies. The duties
          test is what governs, and most paralegal roles do not clear it. Because the same
          decision usually applies to everyone in the role, one wrong call becomes a
          firm-wide pattern with a multi-year lookback.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Non-equity partners with no defined status.
          </strong>{" "}
          A partner who is salaried, supervised and removable is functionally an employee.
          If the firm treats them as an owner for payroll and benefits purposes but as an
          employee in practice, the paperwork and the reality disagree, and it is the
          reality that gets examined.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Trust-account duties concentrated in one person.
          </strong>{" "}
          In smaller firms the same staff member often opens the mail, records the
          receipt, prepares the disbursement and reconciles the account. That is a
          separation-of-duties problem with an HR component: who has access, what the
          background-check and onboarding standard is for that role, what happens to
          access on the day someone resigns, and whether a second person ever reviews the
          reconciliation.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Contract attorneys who became permanent.
          </strong>{" "}
          A document-review engagement for one matter is one thing. The same attorney,
          three years later, on your systems, with your email address, working hours you
          set, is a different thing. Firms rarely re-examine the arrangement because
          nothing about it feels like a change.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Lateral hires who brought a new state with them.
          </strong>{" "}
          One partner moves home to another state and keeps practising for you. That
          usually creates payroll tax registration obligations, a new unemployment
          account, and exposure to that state's wage-notice, leave and pay-transparency
          rules. Nobody notices until a notice arrives.
        </Bullet>
      </ul>
    </Section>

    <Section title="How the audit applies to a firm like yours">
      <p>
        The{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>{" "}
        runs 41 checks across nine areas, and each check is scored Pass, Watch or Fail
        with what to do about it. In a law firm the weight tends to fall on area 2
        (classification and wage-hour), area 4 (payroll and tax registrations, because of
        laterals), and area 7 (records, retention and privacy, because client
        confidentiality and personnel files get mixed together).
      </p>
      <p>
        We ask for the same inputs from every firm: the handbook, two payroll registers,
        I-9s, job descriptions, benefit plan documents, an org chart, the last five
        separation files, any PEO or vendor contract, a photo of your posters and a
        timekeeping sample. We interview the owner, whoever runs payroll, one manager and
        one newer employee. From document upload it takes 15 business days and about four
        hours of your people's time.
      </p>
      <p>
        Where a finding needs fixing, it goes to a{" "}
        <Link to="/services/hr-projects" className="text-green-ink hover:underline">
          fixed-price project
        </Link>{" "}
        it is most often an FLSA classification review or a handbook rebuild. Firms that want
        someone on call after that use{" "}
        <Link to="/services/fractional-hr" className="text-green-ink hover:underline">
          fractional HR
        </Link>
        .
      </p>
      <LegalNote />
    </Section>

    <Section title="Proof" alt>
      <ProofSlot needs="managing partner quote, law firm, with a number (headcount reclassified, states registered, or hours recovered)." />
    </Section>

    <Section title="Questions law firms ask">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Find out what your classification decisions actually expose you to."
      body="A fixed-price audit, quoted before we start, covering every state your people work in."
      proof="second law firm reference, ideally a firm that changed a paralegal classification after the audit."
      secondary={{ label: "See all industries", href: "/industries" }}
    />
  </>
);

export default LawFirms;
