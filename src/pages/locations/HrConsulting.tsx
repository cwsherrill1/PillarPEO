import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, LegalNote } from "@/components/content/Prose";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { metros } from "@/data/locations";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "HR consulting in the Carolinas", path: "/hr-consulting" },
    ]),
    {
      "@type": "Service",
      name: "HR consulting in the Carolinas",
      serviceType: "Human resources consulting",
      provider: ORG_REF,
      areaServed: [
        { "@type": "State", name: "North Carolina" },
        { "@type": "State", name: "South Carolina" },
      ],
      url: `${SITE_URL}/hr-consulting`,
      description:
        "Fixed-price HR audits, HR projects, fractional HR and PEO transitions for professional-services firms across the Carolinas.",
    },
  ],
};

const HrConsulting = () => (
  <>
    <SEOHead
      title="HR Consulting in the Carolinas"
      description="Fixed-price HR audits, projects and fractional HR for firms in Charlotte, Rock Hill and Fort Mill, and the Raleigh-Durham Triangle."
      canonical={`${SITE_URL}/hr-consulting`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Locations"
      title="HR consulting in the Carolinas."
      intro="We're headquartered in Charlotte and we work in every state your people work in. These pages cover the three metros we're in most often."
    />

    <Section title="Where we work, and what that means">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Pillar is a Charlotte-based HR advisory firm serving professional-services firms of
        10 to 150 people. Most of our clients are within an hour of Uptown, but the work is
        not limited to the Carolinas: if you employ someone in another state, that state's
        rules are inside the scope and inside the fixed price.
      </p>
      <p>
        The Carolinas are a specific problem in their own right. The North Carolina and
        South Carolina rules differ on E-Verify, on workers' compensation thresholds, and
        on notice of wage changes, and a firm in Charlotte can easily have staff on both
        sides of the line without noticing that anything changed.
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">North Carolina:</strong> E-Verify is required
          at 25 or more employees (NCGS 64-26); workers' compensation coverage is required
          at 3 or more employees.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">South Carolina:</strong> E-Verify is required
          of all employers, within 3 business days of hire; workers' compensation coverage
          is required at 4 or more employees; 7 days' advance written notice of wage
          changes is required; the Pregnancy Accommodations Act applies at 15 or more
          employees.
        </Bullet>
      </ul>
      <LegalNote />
    </Section>

    <Section title="Metro pages" alt wide>
      <div className="grid gap-6 md:grid-cols-3">
        {metros.map((m, i) => (
          <Reveal key={m.slug} delay={i * 100}>
            <Card className="h-full transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-heading text-lg font-800 text-foreground">
                  <Link to={`/hr-consulting/${m.slug}`} className="hover:underline">
                    {m.name}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.summary}
                </p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>

    <ServiceCta
      heading="Book an HR audit, wherever your people are."
      body="One fixed price, quoted before we start, covering every state on your payroll."
      proof="Carolinas client reference naming the metro and the number of states covered."
      secondary={{ label: "See the audit", href: "/services/hr-audit" }}
    />
  </>
);

export default HrConsulting;
