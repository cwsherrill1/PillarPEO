import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section } from "@/components/content/Prose";
import { industries } from "@/data/industries";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
    ]),
    {
      "@type": "Service",
      name: "HR advisory for professional-services firms",
      serviceType: "Human resources advisory",
      provider: ORG_REF,
      areaServed: "US",
      url: `${SITE_URL}/industries`,
      description:
        "Fixed-price HR audits, projects, fractional HR and PEO transitions for law firms, CPA firms, engineering and architecture firms, medical and dental practices, RIAs and nonprofits.",
    },
  ],
};

const Industries = () => (
  <>
    <SEOHead
      title="HR Advisory by Industry"
      description="HR audits and fixed-price HR work built around how your kind of firm operates: law, CPA, engineering, medical, RIAs and nonprofits."
      canonical={`${SITE_URL}/industries`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Industries"
      title="The findings are different in every kind of firm."
      intro="A law firm's most common wage-hour problem is not a dental practice's. We audit against the way your profession actually staffs and pays people."
    />

    <Section title="Who we work with" wide>
      <UpdatedLine />
      <p>
        Pillar works with professional-services firms of roughly 10 to 150 people, in
        every state their people work in. The service ladder is the same for everyone —{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          an HR audit
        </Link>{" "}
        first, then{" "}
        <Link to="/services/hr-projects" className="text-green-ink hover:underline">
          fixed-price projects
        </Link>{" "}
        or{" "}
        <Link to="/services/fractional-hr" className="text-green-ink hover:underline">
          fractional HR
        </Link>{" "}
        — but what turns up in the audit depends heavily on what kind of firm you run.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {industries.map((ind, i) => (
          <Reveal key={ind.slug} delay={i * 60}>
            <Link to={`/industries/${ind.slug}`} className="block h-full">
              <Card className="h-full border-l-4 border-l-accent card-elevated hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-700 text-foreground">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {ind.summary}
                  </p>
                  <span className="mt-4 inline-block font-heading text-sm font-700 text-green-ink">
                    See the common findings →
                  </span>
                </CardContent>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>

    <ServiceCta
      heading="Start with what's actually wrong."
      body="The audit runs 41 checks across nine areas and gives you a written, scored picture of your exposure — in every state you employ people."
      proof="one quote per industry, from a named firm type and headcount, ideally with a number attached."
      secondary={{ label: "See all services", href: "/services" }}
    />
  </>
);

export default Industries;
