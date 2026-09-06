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
    q: "Can a volunteer also be a paid employee?",
    a: "Sometimes, but not for the same kind of work. A paid employee who volunteers to do work similar to their regular duties is generally still working, and the hours generally count. Where an employee volunteers for genuinely different work, on their own initiative, outside their normal hours, the analysis can come out differently. Get this one written down before it matters.",
  },
  {
    q: "Are stipends for volunteers safe?",
    a: "Stipends are where volunteer status most often breaks. Reimbursing actual expenses is different from paying a regular amount for time given. Once the payment starts to look like compensation for hours, the volunteer analysis is in doubt.",
  },
  {
    q: "Are program directors automatically exempt?",
    a: "No. Mission-driven work carries no exemption of its own, and a nonprofit salary does not settle the question either. Program staff who spend most of their time delivering the service rather than managing people or exercising independent judgment on significant matters are frequently non-exempt, whatever the title says.",
  },
  {
    q: "What does a funder actually expect on personnel documentation?",
    a: "Typically: that the position is documented, that time charged to the grant is supported by records, that allocation across funding sources is consistent and explainable, and that pay decisions follow a written policy rather than a case-by-case judgement. Most findings in this area are documentation gaps rather than misuse of funds.",
  },
  {
    q: "Does a PEO make sense for a nonprofit?",
    a: "It can, particularly for pooled benefits pricing and for taking payroll and compliance administration off a small operations team. It is not automatically the answer. We compare it against staying independent, quote the audit fee the same either way, and disclose any provider commission in writing.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "Nonprofits", path: "/industries/nonprofits" },
    ]),
    {
      "@type": "Service",
      name: "HR advisory for nonprofits",
      serviceType: "Human resources advisory for nonprofit organizations",
      provider: ORG_REF,
      areaServed: "US",
      audience: { "@type": "Audience", audienceType: "Nonprofit organizations" },
      url: `${SITE_URL}/industries/nonprofits`,
      description:
        "HR audits and fixed-price HR work for nonprofits: volunteers versus employees, exempt status for program staff, grant-funded position documentation, and board and executive compensation.",
    },
    faqSchema(faqs),
  ],
};

const Nonprofits = () => (
  <>
    <SEOHead
      title="HR for Nonprofits"
      description="Volunteers versus employees, exempt status for program staff, grant-funded position documentation, and board and executive pay."
      canonical={`${SITE_URL}/industries/nonprofits`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Industries · Nonprofits"
      title="HR for nonprofits."
      intro="Lean teams, mixed funding, and volunteers alongside staff. The employment rules do not bend for any of it."
    />

    <Section title="What HR problems do nonprofits actually have?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Nonprofits carry the same wage-and-hour rules as any employer, with three
        complications: volunteers working next to paid staff, program roles that look
        exempt but often are not, and positions funded by grants that expect documentation
        the organization was never set up to produce. Board and executive compensation adds
        a fourth.
      </p>
    </Section>

    <Section title="The findings we see most" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">
            The line between volunteers and employees is blurred.
          </strong>{" "}
          Volunteers who work fixed shifts, receive a regular stipend, or perform the same
          work as paid staff sit uncomfortably close to employment. Where the same person
          is both a volunteer and an employee, the position is more delicate still.
          Organizations rarely have anything written on the distinction until someone
          challenges it.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Program staff classified as exempt.</strong>{" "}
          Mission work is not an exemption. Case managers, coordinators and program
          directors are frequently salaried on the assumption that salary settles it. The
          duties test is unchanged for nonprofits, and hours in this sector regularly run
          well past forty.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Grant-funded positions with thin documentation.
          </strong>{" "}
          A role paid across two or three funding sources needs a documented position, a
          defensible allocation, and time records that support what was charged. The most
          common finding is not misuse — it is an allocation everybody understands and
          nobody wrote down.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Executive compensation set without a documented process.
          </strong>{" "}
          Board-set pay for the executive director is expected to follow a process:
          comparable data, a decision by people without a conflict, and a contemporaneous
          record of both. Small boards often make a reasonable decision and keep only a
          line in the minutes.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            No handbook, or a handbook borrowed from another organization.
          </strong>{" "}
          Borrowed handbooks bring in policies for benefits you do not offer, leave rules
          for headcounts you have not reached, and states you do not operate in. That is
          worse than having none, because you are now measured against a standard you
          never intended to set.
        </Bullet>
      </ul>
    </Section>

    <Section title="How the audit applies to an organization like yours">
      <p>
        The{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>{" "}
        runs 41 checks across nine areas, scored Pass, Watch or Fail, at a fixed price
        quoted before we start. For nonprofits the weight usually falls on area 2
        (classification and wage-hour), area 3 (handbook and policies) and area 7 (records
        and retention), where grant documentation lives.
      </p>
      <p>
        The deliverable is written to be shown. Boards and funders respond well to a scored
        list of findings with a remediation plan attached, and a fixed fee is easier to put
        in front of a finance committee than an open-ended engagement. Several
        organizations use the report as the supporting document for a capacity-building
        request.
      </p>
      <p>
        Follow-on work is typically a handbook written for your actual headcount and
        states, an FLSA review of program roles, or{" "}
        <Link to="/services/fractional-hr" className="text-green-ink hover:underline">
          fractional HR
        </Link>{" "}
        where there is no HR person and the operations director has absorbed the job. If
        pooled benefits pricing is the pressure point, our{" "}
        <Link to="/services/peo-brokerage" className="text-green-ink hover:underline">
          PEO brokerage
        </Link>{" "}
        is free to you and the commission is disclosed in writing — see{" "}
        <Link to="/how-we-get-paid" className="text-green-ink hover:underline">
          how we get paid
        </Link>
        .
      </p>
      <LegalNote />
    </Section>

    <Section title="Proof" alt>
      <ProofSlot needs="PROOF SLOT — executive director or board chair quote, nonprofit, with a number (staff count, funding sources reconciled, or findings closed)." />
    </Section>

    <Section title="Questions nonprofits ask">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="A fixed-price HR audit your board can read."
      body="Scored findings, a remediation plan, and a price quoted before any work starts."
      proof="PROOF SLOT — nonprofit reference with budget band and what the audit unlocked."
      secondary={{ label: "See all industries", href: "/industries" }}
    />
  </>
);

export default Nonprofits;
