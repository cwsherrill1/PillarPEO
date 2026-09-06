import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import ProofSlot from "@/components/ProofSlot";
import { metros } from "@/data/locations";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const metro = metros.find((m) => m.slug === "charlotte-nc")!;

const faqs: Faq[] = [
  {
    q: "Does my Charlotte firm have to use E-Verify?",
    a: "In North Carolina, E-Verify is required at 25 or more employees under NCGS 64-26. If any of your staff work in South Carolina, E-Verify is required of all employers there, within 3 business days of hire, so a 12-person Charlotte firm with two people in Fort Mill has an obligation it would not have on this side of the line.",
  },
  {
    q: "At what headcount do we need workers' compensation in North Carolina?",
    a: "Coverage is required at 3 or more employees in North Carolina. In South Carolina the threshold is 4 or more. Firms with staff in both states should be planning to the stricter of the two, not the one where the office sits.",
  },
  {
    q: "What does the Charlotte non-discrimination ordinance change in our handbook?",
    a: "The city's non-discrimination ordinance covers protected characteristics beyond those in federal law for employment within the city. A handbook copied from a national template usually lists the federal categories only. The fix is a paragraph, but it has to be the right paragraph, and staff need to know where complaints go.",
  },
  {
    q: "We have staff in York and Lancaster County. Are we a South Carolina employer?",
    a: "For those employees, in practice yes. Payroll tax withholding, unemployment insurance and wage rules generally follow where the work is performed. A Charlotte headquarters does not keep South Carolina rules out.",
  },
  {
    q: "How far do you travel?",
    a: "About 45 minutes from Uptown covers most of our on-site work, which reaches Mooresville, Concord, Monroe, Gastonia and across the line into York and Lancaster County. Beyond that we work remotely, and clients in other states are normal for us.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "HR consulting", path: "/hr-consulting" },
      { name: "Charlotte, NC", path: "/hr-consulting/charlotte-nc" },
    ]),
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/hr-consulting/charlotte-nc#localbusiness`,
      name: "Pillar PEO Advisors: HR consulting in Charlotte, NC",
      parentOrganization: ORG_REF,
      url: `${SITE_URL}/hr-consulting/charlotte-nc`,
      areaServed: {
        "@type": "City",
        name: "Charlotte",
        address: { "@type": "PostalAddress", addressLocality: "Charlotte", addressRegion: "NC", addressCountry: "US" },
      },
      geo: { "@type": "GeoCoordinates", latitude: metro.geo.lat, longitude: metro.geo.lng },
      description:
        "Fixed-price HR audits, HR projects, fractional HR and PEO transitions for professional-services firms in Charlotte and the surrounding towns.",
    },
    faqSchema(faqs),
  ],
};

const CharlotteNc = () => (
  <>
    <SEOHead
      title="HR Consulting in Charlotte, NC | Pillar PEO Advisors"
      fullTitle
      description="Fixed-price HR audits and projects for Charlotte professional-services firms, including the city ordinance and NC/SC cross-border staff."
      canonical={`${SITE_URL}/hr-consulting/charlotte-nc`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Locations · Charlotte"
      title="HR consulting in Charlotte, NC."
      intro="A Charlotte address and a South Carolina payroll problem is the most common shape of firm we work with."
    />

    <Section title="What does a Charlotte firm need that a template won't give it?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Three things: handbook language that reflects the city's non-discrimination
        ordinance, a payroll and compliance setup that accounts for staff living and
        working across the South Carolina line, and pay bands that survive contact with a
        banking town's salary expectations. National templates address none of them.
      </p>
    </Section>

    <Section title="The city ordinance, and what it means for your handbook" alt>
      <p>
        Charlotte's non-discrimination ordinance extends protection in employment within
        the city beyond the categories listed in federal law. Most firms here run a
        handbook bought or inherited from a national source, and those handbooks list the
        federal categories and stop.
      </p>
      <p>
        The gap matters less because of the risk of a claim and more because of what the
        handbook is for. A handbook is the document you point to when someone asks what the
        rule was. If your equal employment opportunity statement is narrower than the
        standard your city applies, and your complaint procedure names a person who left
        two years ago, then in the moment it counts you have a document that works against
        you.
      </p>
      <p>
        We fix this as part of a handbook project, or as a finding in the audit if the rest
        of the handbook is sound. It is a short piece of work. It is also the single most
        common Fail we score on Charlotte handbooks.
      </p>
      <LegalNote />
    </Section>

    <Section title="The cross-border problem: York and Lancaster County">
      <p>
        Charlotte's labour market does not respect the state line. Fort Mill, Tega Cay,
        Indian Land, Rock Hill and Lake Wylie are commuter towns for Uptown firms, and the
        traffic runs both ways: firms headquartered here hire people who live down there,
        and increasingly those people work from home two or three days a week.
      </p>
      <p>
        The moment work is performed in South Carolina, South Carolina's rules attach to
        that employment, and they are not the North Carolina rules:
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">E-Verify.</strong> North Carolina requires it
          at 25 or more employees (NCGS 64-26). South Carolina requires it of all
          employers, within 3 business days of hire. A firm below the North Carolina
          threshold, which has therefore never set E-Verify up, acquires the obligation for
          its South Carolina hires immediately.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Workers' compensation.</strong> Required at 3
          or more employees in North Carolina, 4 or more in South Carolina. Coverage and
          classification need to reflect where people actually work.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Notice of wage changes.</strong> South
          Carolina requires 7 days' advance written notice of a change to wages. Charlotte
          firms routinely announce a raise or a commission-plan change in a meeting and
          effect it the same pay period. That is normal practice here and non-compliant for
          the employee in Indian Land.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Pregnancy accommodations.</strong> South
          Carolina's Pregnancy Accommodations Act applies at 15 or more employees, and
          carries its own notice expectations. Handbooks written for one state usually miss
          it.
        </Bullet>
      </ul>
      <p>
        There is also the payroll-side version of the same problem: state registration,
        withholding and unemployment accounts in South Carolina for those employees. Firms
        typically discover this at the first quarterly filing after the hire, or not at
        all.
      </p>
      <LegalNote />
    </Section>

    <Section title="Compensation expectations in a banking town" alt>
      <p>
        Charlotte's professional-services firms compete for staff with the operations and
        risk functions of large financial institutions. That has two effects that show up
        in an HR audit.
      </p>
      <p>
        The first is compression. A firm that hired a paralegal or a staff accountant three
        years ago at the market rate then, and has given cost-of-living increases since,
        is now often below what it must offer a new hire for the same role. New joiners
        arrive above people who have been there four years, and nobody has recalculated the
        band.
      </p>
      <p>
        The second is benefits benchmarking. Candidates here compare against employers with
        purchasing power a 40-person firm cannot match on its own. That is the honest case
        for looking at a PEO: pooled benefits pricing, and it is also the reason we quote
        the audit fee identically whether or not a PEO turns out to be the answer. See{" "}
        <Link to="/how-we-get-paid" className="text-green-ink hover:underline">
          how we get paid
        </Link>
        .
      </p>
      <p>
        A{" "}
        <Link to="/services/hr-projects" className="text-green-ink hover:underline">
          compensation benchmarking project
        </Link>{" "}
        is a fixed-price piece of work and one of the most requested things we do for firms
        in this metro.
      </p>
    </Section>

    <Section title="The Charlotte industry mix">
      <p>
        The firms we work with here fall into a fairly narrow set of types, and each brings
        its own recurring findings:
      </p>
      <ul className="space-y-3">
        <Bullet>
          <Link to="/industries/law-firms" className="text-green-ink hover:underline">
            Law firms
          </Link>{" "}
          Paralegal and legal-assistant classification, and trust-account separation of
          duties.
        </Bullet>
        <Bullet>
          <Link to="/industries/cpa-firms" className="text-green-ink hover:underline">
            CPA firms
          </Link>{" "}
          Busy-season overtime and seasonal staffing, plus staff working from elsewhere
          in the spring.
        </Bullet>
        <Bullet>
          <Link
            to="/industries/engineering-architecture"
            className="text-green-ink hover:underline"
          >
            Engineering and architecture
          </Link>{" "}
          Designer and drafter exempt status, and project work across state lines.
        </Bullet>
        <Bullet>
          <Link to="/industries/medical-dental" className="text-green-ink hover:underline">
            Medical and dental practices
          </Link>{" "}
          File separation, OSHA requirements, on-call and shift differentials.
        </Bullet>
        <Bullet>
          <Link
            to="/industries/financial-advisors"
            className="text-green-ink hover:underline"
          >
            RIAs and advisory firms
          </Link>{" "}
          Supervision records mixed with personnel records, and undocumented producer pay
          plans.
        </Bullet>
      </ul>
    </Section>

    <Section title="Where we work in person" alt>
      <p>
        On-site work runs to roughly 45 minutes from Uptown. That covers{" "}
        {metro.towns.join(", ")}, and across the line into York and Lancaster County. Common
        ZIP codes we serve include {metro.zips.join(", ")}.
      </p>
      <p>
        Pillar has no published street address; we come to you, and the rest of the work
        is done remotely. If your people are in states well outside this radius, that is
        normal: multi-state is the default in our pricing, not an add-on.
      </p>
    </Section>

    <Section title="Proof">
      <p className="text-sm">
        An honest note: we are not going to show you a local testimonial we do not have.
        The slot below says exactly what belongs here, and it stays visible until a real
        Charlotte client fills it.
      </p>
      <ProofSlot needs="managing partner or practice administrator quote, Charlotte firm, named, with a number (headcount, states registered, or findings closed)." />
    </Section>

    <Section title="Questions Charlotte firms ask" alt>
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Book an HR audit for your Charlotte firm."
      body="Fixed price, quoted before we start, covering North Carolina, South Carolina and everywhere else your people work."
      proof="Charlotte client reference with firm type and headcount."
      secondary={{ label: "Rock Hill & Fort Mill", href: "/hr-consulting/rock-hill-fort-mill-sc" }}
    />
  </>
);

export default CharlotteNc;
