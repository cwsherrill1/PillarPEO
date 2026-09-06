import { Link } from "react-router-dom";
import { pricing } from "@/data/pricing";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import ProofSlot from "@/components/ProofSlot";
import { metros } from "@/data/locations";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const metro = metros.find((m) => m.slug === "raleigh-durham-nc")!;

const faqs: Faq[] = [
  {
    q: "Our contractors are all on 1099s through an agency. Is that a problem?",
    a: "It depends on the working relationship, not the paperwork. Contract classification turns on control and independence in practice: who sets the hours, whose equipment, whose direction, and whether the arrangement has an end. Research and engineering organisations in the Triangle run long contractor relationships that look increasingly like employment as they extend.",
  },
  {
    q: "We're a spin-out about to make our first three hires. What do we need before day one?",
    a: "State registration for withholding and unemployment, workers' compensation once you reach 3 or more employees in North Carolina, I-9s completed on schedule, offer letters that state pay and classification, and a short written handbook. E-Verify becomes a requirement at 25 or more employees under NCGS 64-26 — worth setting up before you get there rather than at the threshold.",
  },
  {
    q: "Are research staff exempt?",
    a: "Not automatically. Advanced degrees and technical work are relevant to the learned professional analysis but do not settle it, and research associates performing directed protocol work are a different case from staff exercising independent judgment on significant matters.",
  },
  {
    q: "What changes when we take state or university-adjacent contract work?",
    a: "Public and publicly funded contracts can bring wage terms, certified payroll reporting and record-keeping obligations your commercial work does not have. The requirements come from the contract and the funding source, so we read the actual terms rather than generalise.",
  },
  {
    q: "Do you work with firms outside the Triangle?",
    a: "Yes. We are headquartered in Charlotte and work in every state our clients employ people in. Multi-state is priced into the audit band rather than added on top.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "HR consulting", path: "/hr-consulting" },
      { name: "Raleigh-Durham, NC", path: "/hr-consulting/raleigh-durham-nc" },
    ]),
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/hr-consulting/raleigh-durham-nc#localbusiness`,
      name: "Pillar PEO Advisors — HR consulting in Raleigh-Durham, NC",
      parentOrganization: ORG_REF,
      url: `${SITE_URL}/hr-consulting/raleigh-durham-nc`,
      areaServed: {
        "@type": "City",
        name: "Raleigh",
        address: { "@type": "PostalAddress", addressLocality: "Raleigh", addressRegion: "NC", addressCountry: "US" },
      },
      geo: { "@type": "GeoCoordinates", latitude: metro.geo.lat, longitude: metro.geo.lng },
      description:
        "Fixed-price HR audits, HR projects, fractional HR and PEO transitions for firms in Raleigh, Durham, Chapel Hill, Cary and Research Triangle Park.",
    },
    faqSchema(faqs),
  ],
};

const RaleighDurhamNc = () => (
  <>
    <SEOHead
      title="HR Consulting in Raleigh-Durham, NC"
      description={`Contractor classification in RTP, first hires at university spin-outs, and public-contract wage rules — fixed-price HR audits for Triangle firms from ${pricing.audit.from}.`}
      canonical={`${SITE_URL}/hr-consulting/raleigh-durham-nc`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Locations · Raleigh-Durham"
      title="HR consulting in Raleigh-Durham, NC."
      intro="The Triangle builds organisations quickly and documents them slowly. Contractor status and first hires are where it shows."
    />

    <Section title="What HR problems do Triangle organisations actually have?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Three, mostly. Long-running contractor relationships in Research Triangle Park that
        have quietly stopped looking independent; university spin-outs making their first
        employment decisions with no HR function at all; and firms taking state and
        publicly funded contract work that carries wage and reporting terms their
        commercial work never did.
      </p>
    </Section>

    <Section title="Contractor classification in RTP" alt>
      <p>
        Research, engineering and biotech organisations here staff projects with people who
        are not on payroll: independent contractors, agency staff, consultants engaged for
        a study or a build phase, and postdoc-adjacent arrangements that do not fit a
        standard category.
      </p>
      <p>
        Individually each engagement is defensible. The problem is duration and drift. A
        contractor engaged for a six-month protocol is still there at two years, working
        the hours the project sets, on the organisation's systems, under a manager's
        direction, with a badge and a place in the standing meeting. Nothing about the
        contract changed; everything about the relationship did.
      </p>
      <p>
        Classification turns on the substance of that relationship, not the label on the
        invoice. The audit's approach is unglamorous: list every non-payroll worker, note
        how long each has been engaged, who directs the work, whose equipment is used, and
        whether the arrangement has a defined end. Most organisations have never seen that
        list in one place, and the list is usually the finding.
      </p>
      <LegalNote />
    </Section>

    <Section title="University spin-outs making their first hires">
      <p>
        Spin-outs out of the universities and the medical centres arrive at employment
        suddenly. Founders have been on grants or university payroll, and the first
        commercial hire is the first time anyone in the organisation has been an employer.
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Registration before payroll.</strong> State
          withholding and unemployment accounts need to exist before the first run, and
          they need to exist in each state where someone works — remote scientific and
          software hires make this a multi-state question from day one.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Workers' compensation at 3 or more.</strong>{" "}
          North Carolina requires coverage at 3 or more employees. Growing teams cross this
          without an event to mark it.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">E-Verify at 25 or more.</strong> The
          requirement begins at 25 or more employees under NCGS 64-26. An organisation
          scaling on a funding round can pass it inside a quarter, so the sensible move is
          to build the routine early.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Classification of research staff.</strong>{" "}
          Research associates, technicians and scientific staff are often salaried on
          assumption. A degree is evidence in the analysis, not the answer to it.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Equity and offer-letter language.</strong>{" "}
          Offer letters carrying equity promises with no plan document behind them are
          common, and awkward to unwind at the next raise.
        </Bullet>
      </ul>
      <p>
        For an organisation at this stage the audit is genuinely preventative rather than
        remedial, and it is cheaper here than at fifty people. The follow-on is usually a
        short handbook and{" "}
        <Link to="/services/fractional-hr" className="text-green-ink hover:underline">
          fractional HR
        </Link>{" "}
        rather than a permanent hire.
      </p>
      <LegalNote />
    </Section>

    <Section title="State-adjacent and public contract work" alt>
      <p>
        Raleigh's proximity to state government, and Durham's to publicly funded research,
        means a large share of firms here hold at least one contract with terms attached.
        Those terms can include wage requirements, certified payroll reporting, and record
        retention that outlasts the contract.
      </p>
      <p>
        The recurring failure is organisational rather than legal: the contract is read by
        the people who won it, filed by the people who administer it, and never read by
        whoever runs payroll. So payroll runs to the commercial standard while the contract
        assumes something stricter.
      </p>
      <p>
        Where a firm holds contracts of this kind, we ask for them among the audit inputs
        and read the employment terms specifically. We do not generalise about what public
        work requires, because it depends on the contract and the funding source.
      </p>
      <LegalNote />
    </Section>

    <Section title="The Triangle industry mix">
      <ul className="space-y-3">
        <Bullet>
          <Link
            to="/industries/engineering-architecture"
            className="text-green-ink hover:underline"
          >
            Engineering and architecture firms
          </Link>{" "}
          — designer and drafter exempt status, project travel, public-contract wage terms.
        </Bullet>
        <Bullet>
          <Link to="/industries/law-firms" className="text-green-ink hover:underline">
            Law firms
          </Link>{" "}
          — including IP and technology-transfer practices with contract attorneys on long
          engagements.
        </Bullet>
        <Bullet>
          <Link to="/industries/cpa-firms" className="text-green-ink hover:underline">
            CPA firms
          </Link>{" "}
          — busy-season overtime and remote seasonal staff.
        </Bullet>
        <Bullet>
          <Link to="/industries/medical-dental" className="text-green-ink hover:underline">
            Medical and dental practices
          </Link>{" "}
          — file separation and OSHA requirements, often across multiple sites.
        </Bullet>
        <Bullet>
          <Link to="/industries/nonprofits" className="text-green-ink hover:underline">
            Nonprofits
          </Link>{" "}
          — grant-funded roles, allocation documentation, volunteers alongside staff.
        </Bullet>
      </ul>
    </Section>

    <Section title="Where we work in person" alt>
      <p>
        We are headquartered in Charlotte and travel to the Triangle for on-site work,
        covering {metro.towns.join(", ")}. Common ZIP codes we serve include{" "}
        {metro.zips.join(", ")}.
      </p>
      <p>
        Pillar has no published street address here or anywhere else. Document review,
        interviews and the walkthrough can all be done remotely if that suits you better.
      </p>
    </Section>

    <Section title="Proof">
      <p className="text-sm">
        An honest note: we have no Triangle testimonial to show, and we will not invent
        one. The slot below names exactly what belongs here and stays visible until a real
        local client fills it.
      </p>
      <ProofSlot needs="PROOF SLOT — founder, COO or practice administrator quote, Raleigh, Durham or RTP organisation, named, with a number (contractors reviewed, headcount at first audit, or states registered)." />
    </Section>

    <Section title="Questions Triangle organisations ask" alt>
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Book an HR audit for your Triangle organisation."
      body="Fixed price quoted before we start, 15 business days, and every state your people work in included."
      proof="PROOF SLOT — Raleigh-Durham client reference with organisation type and headcount."
      secondary={{ label: "All Carolinas locations", href: "/hr-consulting" }}
    />
  </>
);

export default RaleighDurhamNc;
