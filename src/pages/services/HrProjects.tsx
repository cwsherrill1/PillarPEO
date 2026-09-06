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
      offers: hrProjects.map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: `${p.name} — fixed price, quoted before the work starts`,
      })),
    },
  ],
};

const HrProjects = () => (
  <>
    <SEOHead
      title="Fixed-Price HR Projects"
      description="Six fixed-price HR projects for professional-services firms: handbook, FLSA classification review, I-9 and E-Verify remediation, comp benchmarking, performance management, manager training."
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

    <ServiceCta
      heading="Not sure which project you need?"
      body="The audit tells you which of these matter first, and what each one is worth doing about."
      proof="PROOF SLOT — client quote on a completed handbook or classification project, with the firm type and headcount."
      secondary={{ label: "See all services", href: "/services" }}
    />
  </>
);

export default HrProjects;
