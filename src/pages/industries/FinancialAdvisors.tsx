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
    q: "Is supervision the same thing as HR?",
    a: "No, and the overlap is where problems start. Supervisory review exists to meet regulatory obligations; HR exists to manage the employment relationship. They share evidence: emails, attestations, disciplinary records; but they answer to different rules on retention, access and confidentiality, and a single combined file usually satisfies neither well.",
  },
  {
    q: "Where should licensing and registration records live?",
    a: "In a records set that supervision maintains and can produce on demand, separate from the personnel file. Practices that keep the two together tend to grant personnel-file access to people who need only the registration record, and vice versa.",
  },
  {
    q: "Do we need an outside business activity policy if everyone already reports theirs?",
    a: "A practice that works today because the team is small stops working the moment you hire someone who did not sit in on the conversation. A written policy sets what must be disclosed, to whom, before or after, and what happens when the answer is no.",
  },
  {
    q: "Are advisors paid on production exempt from overtime?",
    a: "Production pay does not by itself settle exempt status; the duties and salary analysis still applies, and it can produce different answers for an advisor, an associate advisor and a client-service associate. Firms tend to apply one answer to the whole front office.",
  },
  {
    q: "Does the audit cover our deferred compensation plan?",
    a: "The audit checks that pay plans are documented, applied consistently, and calculated the way the plan says, including how deferred amounts and clawbacks are described to the people they apply to. Plan design and the tax treatment of deferred compensation belong with your counsel and tax adviser.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "Financial advisors and RIAs", path: "/industries/financial-advisors" },
    ]),
    {
      "@type": "Service",
      name: "HR advisory for financial advisors and RIAs",
      serviceType: "Human resources advisory for registered investment advisers",
      provider: ORG_REF,
      areaServed: "US",
      audience: {
        "@type": "Audience",
        audienceType: "Registered investment advisers and financial advisory firms",
      },
      url: `${SITE_URL}/industries/financial-advisors`,
      description:
        "HR audits and fixed-price HR work for RIAs and advisory firms: where supervision overlaps HR, licensing and registration records, outside business activity policies, and producer pay plans.",
    },
    faqSchema(faqs),
  ],
};

const FinancialAdvisors = () => (
  <>
    <SEOHead
      title="HR for Financial Advisors and RIAs"
      description="Where supervision overlaps HR, licensing and registration records, outside business activity policies, and producer pay plans."
      canonical={`${SITE_URL}/industries/financial-advisors`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Industries · Financial advisors & RIAs"
      title="HR for advisory firms."
      intro="You have a supervision programme. What you may not have is an employment programme underneath it."
    />

    <Section title="What HR problems do advisory firms actually have?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Advisory firms run supervision well and employment loosely. Compliance records and
        personnel records get merged, outside business activities are handled by
        conversation rather than policy, producer pay plans are agreed verbally and
        calculated by spreadsheet, and support staff classification is decided once and
        never revisited.
      </p>
    </Section>

    <Section title="The findings we see most" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">
            Supervision files and personnel files in one place.
          </strong>{" "}
          The same event, an email review flag, a client complaint, a disciplinary
          conversation, generates records for two purposes with two different retention
          and access rules. Merged, they tend to be over-retained for one purpose and
          under-protected for the other, and access is granted by role rather than by need.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Outside business activities managed by memory.
          </strong>{" "}
          In a ten-person firm everyone knows who sits on which board and who has a rental
          property. There is often no written disclosure standard, no annual attestation,
          and no record of what was approved and when. The first hire who was not part of
          the original conversation exposes the gap.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Producer pay plans that exist only in an email.
          </strong>{" "}
          Grid splits, bonus thresholds, treatment of inherited books and what happens to
          trailing revenue when someone leaves, often agreed in a message years ago,
          calculated by hand each period, and understood differently by the two people who
          agreed it. This is the single most common source of disputes we see in advisory
          firms.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Client-service staff classified like advisors.
          </strong>{" "}
          Firms tend to apply one exempt answer across the whole front office. A
          client-service associate whose work is scheduling, paperwork and follow-up is a
          different duties case from a lead advisor, and the salary they are on does not
          settle it.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Offboarding that unwinds access but not employment.
          </strong>{" "}
          Departures are handled thoroughly on the systems and registration side and
          thinly on the employment side: final pay timing, deferred amounts, restrictive
          covenants that were never signed, and no documented separation file.
        </Bullet>
      </ul>
    </Section>

    <Section title="How the audit applies to a firm like yours">
      <p>
        The{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>{" "}
        runs 41 checks across nine areas. For advisory firms the weight falls on area 7
        (records, retention and privacy), area 9 (offboarding and final pay) and area 3
        (handbook and policies), where the outside-business-activity and pay-plan language
        belongs.
      </p>
      <p>
        We stay in our lane deliberately. Pillar does not advise on your regulatory
        obligations as an adviser; that is your compliance consultant's and your
        counsel's work. What we audit is the employment layer sitting under it: whether
        records are separated, whether policies are written and acknowledged, whether pay
        plans are documented and calculated as documented, and whether separations are
        handled the same way twice.
      </p>
      <p>
        The usual follow-on projects are a handbook rebuild and a{" "}
        <Link to="/services/hr-projects" className="text-green-ink hover:underline">
          compensation documentation project
        </Link>{" "}
        that puts the grid, the thresholds and the departure terms in writing. Firms
        acquiring books or teams often use{" "}
        <Link to="/services/transitions" className="text-green-ink hover:underline">
          transitions work
        </Link>{" "}
        to bring the incoming staff onto one set of terms.
      </p>
      <LegalNote />
    </Section>

    <Section title="Proof" alt>
      <ProofSlot needs="principal or COO quote, RIA or advisory firm, with a number (AUM band optional, headcount and what the pay-plan documentation resolved)." />
    </Section>

    <Section title="Questions advisory firms ask">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Put the employment layer in writing."
      body="A fixed-price audit of the HR side of your firm, scoped and quoted before we start."
      proof="advisory firm reference describing the pay-plan documentation outcome."
      secondary={{ label: "See all industries", href: "/industries" }}
    />
  </>
);

export default FinancialAdvisors;
