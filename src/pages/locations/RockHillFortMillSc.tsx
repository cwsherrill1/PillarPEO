import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import ProofSlot from "@/components/ProofSlot";
import { metros } from "@/data/locations";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const metro = metros.find((m) => m.slug === "rock-hill-fort-mill-sc")!;

const faqs: Faq[] = [
  {
    q: "Do small South Carolina employers really have to use E-Verify?",
    a: "Yes. South Carolina requires E-Verify of all employers, within 3 business days of hire. There is no small-employer threshold as there is in North Carolina, where the requirement starts at 25 or more employees under NCGS 64-26. This surprises firms that relocated from Charlotte.",
  },
  {
    q: "How much notice do we owe before changing someone's pay?",
    a: "South Carolina requires 7 days' advance written notice of a change to wages. Announcing a new commission structure in a Monday meeting and running it in that week's payroll does not meet it, however welcome the change is.",
  },
  {
    q: "When do we need workers' compensation coverage?",
    a: "At 4 or more employees in South Carolina. In North Carolina the threshold is 3 or more, so a firm operating on both sides should plan to the stricter number rather than assume one rule covers both.",
  },
  {
    q: "Our office is in Fort Mill but half the team is in Charlotte. Which rules apply?",
    a: "Both, employee by employee. Employment rules generally follow where the work is performed, not where the office or the owner sits. In practice that means maintaining two sets of registrations and a handbook that handles both states explicitly.",
  },
  {
    q: "Does the Pregnancy Accommodations Act apply to us?",
    a: "South Carolina's Pregnancy Accommodations Act applies at 15 or more employees. It carries notice expectations as well as accommodation obligations, and handbooks written for a North Carolina employer usually omit it entirely.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "HR consulting", path: "/hr-consulting" },
      { name: "Rock Hill & Fort Mill, SC", path: "/hr-consulting/rock-hill-fort-mill-sc" },
    ]),
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/hr-consulting/rock-hill-fort-mill-sc#localbusiness`,
      name: "Pillar PEO Advisors: HR consulting in Rock Hill and Fort Mill, SC",
      parentOrganization: ORG_REF,
      url: `${SITE_URL}/hr-consulting/rock-hill-fort-mill-sc`,
      areaServed: {
        "@type": "City",
        name: "Rock Hill",
        address: { "@type": "PostalAddress", addressLocality: "Rock Hill", addressRegion: "SC", addressCountry: "US" },
      },
      geo: { "@type": "GeoCoordinates", latitude: metro.geo.lat, longitude: metro.geo.lng },
      description:
        "Fixed-price HR audits, HR projects, fractional HR and PEO transitions for firms in Rock Hill, Fort Mill and York and Lancaster County.",
    },
    faqSchema(faqs),
  ],
};

const RockHillFortMillSc = () => (
  <>
    <SEOHead
      title="HR Consulting in Rock Hill and Fort Mill, SC | Pillar"
      fullTitle
      description="SC E-Verify for all employers within 3 business days, workers' comp at 4+, and 7 days' notice of wage changes, handled properly."
      canonical={`${SITE_URL}/hr-consulting/rock-hill-fort-mill-sc`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Locations · Rock Hill & Fort Mill"
      title="HR consulting in Rock Hill and Fort Mill, SC."
      intro="South Carolina asks more of small employers than North Carolina does. Firms that moved down from Charlotte usually find that out late."
    />

    <Section title="What do South Carolina employers have to do that North Carolina employers don't?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Four things, and each catches small firms. E-Verify applies to all South Carolina
        employers within 3 business days of hire, with no headcount threshold. Workers'
        compensation is required at 4 or more employees. Wage changes need 7 days' advance
        written notice. And the Pregnancy Accommodations Act applies at 15 or more.
      </p>
    </Section>

    <Section title="The South Carolina rules, one at a time" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">
            E-Verify, all employers, within 3 business days of hire.
          </strong>{" "}
          There is no small-employer exemption. A four-person practice in Tega Cay has the
          same obligation as a large employer, and the three-business-day window means it
          has to be part of the onboarding routine rather than something done at the end of
          the month. Compare North Carolina, where the requirement begins at 25 or more
          employees under NCGS 64-26, which is why a firm that relocated from Charlotte
          often arrives here having never set E-Verify up at all.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Workers' compensation at 4 or more employees.
          </strong>{" "}
          The count and the classification both matter, and part-time staff are easy to
          overlook when a firm is sitting on the threshold. North Carolina's threshold is 3
          or more, so a firm with people in both states should be planning to the stricter
          number.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            7 days' advance written notice of wage changes.
          </strong>{" "}
          This is the rule most commonly broken by employers acting generously. A raise, a
          bonus-plan change, a new commission grid, a shift-differential adjustment: all
          are wage changes, all need written notice ahead of the effective date. Firms
          almost never have a document that shows they gave it.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Pregnancy Accommodations Act at 15 or more employees.
          </strong>{" "}
          It brings accommodation obligations and notice expectations. A borrowed North
          Carolina handbook will not mention it, and a firm crossing 15 employees rarely
          notices that a new obligation attached on the way past.
        </Bullet>
      </ul>
      <LegalNote />
    </Section>

    <Section title="The mirror-image cross-border problem">
      <p>
        Charlotte firms discover South Carolina when they hire someone in Indian Land.
        Firms here discover North Carolina the other way round: the office is in Fort Mill
        because the founder lives in Baxter Village, and half the client base and a third
        of the staff are up I-77.
      </p>
      <p>
        Once someone performs work in North Carolina, that state's requirements attach to
        their employment: withholding and unemployment registration, its workers'
        compensation threshold of 3 or more employees, and, once the firm reaches 25 or
        more employees, E-Verify under NCGS 64-26. Meanwhile the South Carolina staff keep
        every South Carolina rule.
      </p>
      <p>
        The practical answer is not to pick a state. It is a handbook that handles both
        explicitly, an onboarding checklist that branches on work location rather than
        office location, and payroll registration in both. That is ordinary work; it just
        has to be done once, deliberately, rather than discovered a piece at a time.
      </p>
      <LegalNote />
    </Section>

    <Section title="The firms we see here" alt>
      <p>
        York and Lancaster County have grown a professional employer base of their own
        rather than remaining a bedroom community. The recurring types:
      </p>
      <ul className="space-y-3">
        <Bullet>
          Small and mid-size{" "}
          <Link to="/industries/law-firms" className="text-green-ink hover:underline">
            law firms
          </Link>{" "}
          serving both states, often with attorneys licensed in each, which raises the
          same paralegal classification question in two jurisdictions at once.
        </Bullet>
        <Bullet>
          <Link to="/industries/cpa-firms" className="text-green-ink hover:underline">
            CPA firms
          </Link>{" "}
          with a Charlotte-heavy client list and staff who work from home in Rock Hill
          through busy season.
        </Bullet>
        <Bullet>
          <Link to="/industries/medical-dental" className="text-green-ink hover:underline">
            Medical and dental practices
          </Link>{" "}
          expanding into new residential growth in Fort Mill and Indian Land, frequently
          multi-site before they have a written on-call policy.
        </Bullet>
        <Bullet>
          <Link
            to="/industries/engineering-architecture"
            className="text-green-ink hover:underline"
          >
            Engineering and architecture firms
          </Link>{" "}
          serving development in both states, with field staff crossing the line weekly.
        </Bullet>
        <Bullet>
          <Link to="/industries/nonprofits" className="text-green-ink hover:underline">
            Nonprofits
          </Link>{" "}
          operating regionally, with grant-funded roles and volunteers alongside paid staff.
        </Bullet>
      </ul>
    </Section>

    <Section title="How the audit handles a two-state firm">
      <p>
        The{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>{" "}
        runs 41 checks across nine areas, scored Pass, Watch or Fail, in 15 business days
        from document upload and about four hours of your time. The price is set by
        headcount and by how many states you employ in, and is quoted on the scope call. A
        Carolinas firm with people on both sides is a two-state engagement, not a
        surcharge.
      </p>
      <p>
        The follow-on work here is usually a two-state handbook, an I-9 and E-Verify
        remediation project where hires were processed before the routine existed, or{" "}
        <Link to="/services/fractional-hr" className="text-green-ink hover:underline">
          fractional HR
        </Link>{" "}
        for firms hiring steadily enough that each new hire raises a jurisdiction question.
      </p>
    </Section>

    <Section title="Where we work in person" alt>
      <p>
        On-site work covers {metro.towns.join(", ")}, and up into Charlotte and its
        southern suburbs. Common ZIP codes we serve include {metro.zips.join(", ")}.
      </p>
      <p>
        Pillar has no published street address. We come to you, and everything else is done
        remotely, including work in states nowhere near the Carolinas.
      </p>
    </Section>

    <Section title="Proof">
      <p className="text-sm">
        An honest note: we will not show you a Rock Hill or Fort Mill testimonial we do not
        have. The slot below names exactly what belongs here and stays visible until a real
        local client fills it.
      </p>
      <ProofSlot needs="owner or practice administrator quote, Rock Hill / Fort Mill / Indian Land firm, named, with a number (headcount, hires remediated, or states registered)." />
    </Section>

    <Section title="Questions South Carolina firms ask" alt>
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Get the South Carolina side right, once."
      body="A fixed-price HR audit covering both Carolinas and every other state your people work in."
      proof="South Carolina client reference with firm type and headcount."
      secondary={{ label: "Charlotte, NC", href: "/hr-consulting/charlotte-nc" }}
    />
  </>
);

export default RockHillFortMillSc;
