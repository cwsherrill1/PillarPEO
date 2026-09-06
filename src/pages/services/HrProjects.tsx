import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { hrProjects } from "@/data/pricing";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "HR Projects", path: "/services/hr-projects" },
    ]),
    {
      "@type": "Service",
      name: "HR Projects",
      serviceType: "HR project work",
      provider: ORG_REF,
      areaServed: "US",
      url: `${SITE_URL}/services/hr-projects`,
      description:
        "Fixed-price HR projects: handbooks, FLSA classification, I-9 and E-Verify remediation, compensation benchmarking, performance management and manager training.",
    },
  ],
};

const HrProjects = () => (
  <>
    <SEOHead
      title="Fixed-Price HR Projects"
      description="Six fixed-price HR projects: handbook, FLSA classification, I-9 and E-Verify remediation, comp benchmarking, performance, manager training."
      canonical={`${SITE_URL}/services/hr-projects`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="P-1 · HR Projects"
      title="One specific thing, fixed at a fixed price."
      intro="Fixed price, quoted before the work starts, in every state your people work in."
    />

    <section className="bg-background">
      <div className="container max-w-5xl py-20 md:py-28">
        <Reveal>
          <UpdatedLine />
          <h2 className="mt-3 font-heading text-3xl font-800 text-foreground md:text-4xl">
            What we build.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Projects usually follow an{" "}
            <Link to="/services/hr-audit" className="text-green-ink hover:underline">
              HR audit
            </Link>
            , but you can start with any one of them on its own. Each is scoped and
            priced in writing before we begin.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {hrProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <Card className="h-full border-l-4 border-l-accent card-elevated hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-700 text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-10 text-base text-muted-foreground">
            Pillar is not a law firm. Deliverables are written to be reviewed with your
            counsel.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-muted/30">
      <div className="container max-w-3xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            How a project runs.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every project follows the same four steps, and you know the price before step
            one. First, a scope call: what the deliverable is, which states and which
            employee groups it covers, and what it is not. Second, a written scope and a
            fixed price. Third, the work, with a mid-point review so you see a draft
            rather than a surprise. Fourth, handover — the document, the file, the
            decision log, and a walkthrough with whoever has to operate it after we leave.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The work itself is specific. A handbook means reading your current policies
            against the law in every state you employ in, rewriting what conflicts, adding
            the state-required supplements, and getting an acknowledgement process in place
            that will still exist in two years. An FLSA review means testing each role
            against the duties tests and the salary threshold, documenting the reasoning
            role by role, and telling you plainly where a reclassification carries back-pay
            exposure. An I-9 audit means examining the forms you already hold, recording
            what can and cannot be corrected, and making the corrections the right way.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="mt-12 font-heading text-xl font-700 text-foreground">
            What you have to do.
          </h3>
          <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
            <li>
              Send the documents we ask for once, in one place: current policies, job
              descriptions, an org chart, and a payroll register.
            </li>
            <li>
              Give us an hour with the people who actually know how the firm works —
              usually the practice administrator and one partner.
            </li>
            <li>
              Make decisions at the mid-point review. Most delays are decision delays, not
              drafting delays.
            </li>
            <li>
              Review the final deliverable with your employment counsel where the subject
              warrants it. We write documents to be reviewed, not to replace that review.
            </li>
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <h3 className="mt-12 font-heading text-xl font-700 text-foreground">
            Scope changes.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            If the work turns out to be larger than the scope — a state nobody mentioned,
            a second entity, an acquisition mid-project — we stop and requote before doing
            the extra work. You will never receive an invoice for something you did not
            agree to in writing first.
          </p>
        </Reveal>
      </div>
    </section>

    <ServiceCta
      heading="Not sure which project you need?"
      body="The audit tells you which of these matter first, and what each one is worth doing about."
      proof="client quote on a completed handbook or classification project, with the firm type and headcount."
      secondary={{ label: "See all services", href: "/services" }}
    />
  </>
);

export default HrProjects;
