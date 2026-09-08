import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, faqSchema, type Faq } from "@/components/content/Prose";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "How long does an HRIS migration take?",
    a: "Six to twelve weeks for most firms, depending on how many integrations the current system feeds and how far back historic records need to be preserved and accessible in the new system.",
  },
  {
    q: "What happens to our historic HR and payroll records?",
    a: "They need to be exported and either loaded into the new system or archived somewhere your team can still reach them. Some records, like I-9s and prior W-2s, have retention requirements that outlast most systems, so the archive plan matters as much as the migration itself.",
  },
  {
    q: "Do we run both systems at once during the migration?",
    a: "For payroll, yes. A parallel run processes the same pay period in both the old and new system and compares the results line by line before the new system goes live on its own, which is how setup errors get caught before they reach an employee's paycheck.",
  },
  {
    q: "What integrations are most likely to break in a migration?",
    a: "Benefits carrier feeds, 401(k) contribution files, time and attendance imports, and single sign-on. Each has to be re-pointed and tested against the new system rather than assumed to work because the old feed did.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Transitions", path: "/services/transitions" },
      { name: "HRIS migration", path: "/services/transitions/hris-migration" },
    ]),
    {
      "@type": "Service",
      name: "HRIS migration",
      serviceType: "HRIS and payroll platform migration",
      provider: ORG_REF,
      areaServed: "US",
      url: `${SITE_URL}/services/transitions/hris-migration`,
      description:
        "Moving HRIS or payroll platform with a written implementation sequence, data migration, parallel runs, historic record retention and integration cutover.",
    },
    faqSchema(faqs),
  ],
};

const HrisMigration = () => (
  <>
    <SEOHead
      title="HRIS Migration: Moving HR or Payroll Platform"
      fullTitle
      description="How an HRIS or payroll platform migration runs: implementation sequence, data migration, parallel payroll runs, records, and integrations."
      canonical={`${SITE_URL}/services/transitions/hris-migration`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Transitions"
      title="Moving your HRIS or payroll platform."
      intro="The system change is the easy part. The data migration, the historic records and the integrations are what decide whether it goes smoothly."
    />

    <Section title="What an HRIS migration involves">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        An HRIS migration replaces the software your HR and payroll data lives
        in, without changing who employs your people. It runs on a written
        implementation plan from the new vendor, and it typically takes six to
        twelve weeks depending on your integration count and how much history
        needs to move with you.
      </p>
    </Section>

    <Section title="The implementation sequence" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Kickoff and scoping.</strong>{" "}
          The new vendor's implementation team maps your current modules,
          integrations and reporting needs against what the new system
          supports out of the box versus what needs configuration.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Data extraction and mapping.</strong>{" "}
          Employee records, pay history, benefit elections, PTO balances and
          org structure exported from the old system and mapped field by field
          into the new one, since field names and formats rarely match.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Configuration.</strong> Pay
          codes, deduction codes, approval workflows, security roles and
          reporting templates built out in the new system to match how your
          team works, rather than the vendor's default setup.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Integration cutover.</strong>{" "}
          Benefit carrier feeds, 401(k) files, time and attendance, and single
          sign-on re-pointed to the new system and tested individually, since
          each was built against the old system's specific format.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Parallel payroll run.</strong>{" "}
          At least one full pay cycle processed in both systems side by side,
          with every employee's gross pay, deductions and net pay compared
          before the old system is retired.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Go-live and historic archive.</strong>{" "}
          The new system goes live for live payroll, and the old system's data
          is either fully migrated or archived in a format your team can still
          query for records with ongoing retention requirements.
        </Bullet>
      </ul>
    </Section>

    <Section title="Historic records and retention">
      <p>
        Not every record needs to live in the new system. I-9s, prior years'
        W-2s and tax filings, and old benefit plan documents typically only
        need to be retrievable, not active, so they can be archived rather
        than migrated. What does need to migrate cleanly is anything the new
        system needs to calculate correctly going forward: year-to-date wages,
        PTO accrual balances, and 401(k) contribution totals for the current
        year, since those feed calculations the new system will run
        immediately.
      </p>
    </Section>

    <Section title="What you have to do" alt>
      <ul className="space-y-3">
        <Bullet>
          Give the implementation team access to your current system and a
          named point of contact who knows how your current configuration
          works in practice, which is often different from how it was documented.
        </Bullet>
        <Bullet>
          Review the field mapping before data loads. Errors caught here take
          minutes to fix; errors caught after go-live take a payroll
          correction.
        </Bullet>
        <Bullet>
          Test every integration your team relies on daily, especially time
          and attendance and benefits feeds, before declaring go-live
          successful.
        </Bullet>
        <Bullet>
          Reconcile the parallel payroll run yourself, or have someone on your
          team sign off on it, before the old system is turned off.
        </Bullet>
        <Bullet>
          Tell employees before self-service logins change, especially if pay
          stubs or open enrolment will move to a new portal.
        </Bullet>
      </ul>
    </Section>

    <Section title="If this is happening alongside a PEO change">
      <p>
        HRIS migrations often ride alongside a PEO exit or switch, since
        leaving a PEO usually means standing up standalone payroll software
        for the first time. If that's your situation, start with{" "}
        <Link to="/resources/peo-contract-terms" className="text-green-ink hover:underline">
          PEO contract terms
        </Link>{" "}
        to confirm your notice window, and consider a{" "}
        <Link to="/resources/peo-renewal-review" className="text-green-ink hover:underline">
          renewal review
        </Link>{" "}
        first if the move is being driven by cost rather than a settled
        decision to change systems.
      </p>
    </Section>

    <Section title="Questions about HRIS migration">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Migrating your HRIS or payroll platform?"
      body="Send us your current system, integration list and target go-live date. We'll build the sequence and manage the vendor timeline."
      proof="client quote on a completed HRIS migration, with headcount, systems involved and the go-live date."
      secondary={{ label: "See all transitions", href: "/services/transitions" }}
    />
  </>
);

export default HrisMigration;
