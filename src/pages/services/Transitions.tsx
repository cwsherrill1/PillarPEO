import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { transitionTypes } from "@/data/pricing";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Transitions", path: "/services/transitions" },
    ]),
    {
      "@type": "Service",
      name: "Transitions",
      serviceType: "PEO and system transitions",
      provider: ORG_REF,
      areaServed: "US",
      url: `${SITE_URL}/services/transitions`,
      description:
        "Fixed-price PEO exits, PEO switches, PEO implementations, HRIS migrations and payroll provider switches.",
    },
  ],
};

const Transitions = () => (
  <>
    <SEOHead
      title="PEO Exit, Switch and System Transitions | Pillar"
      fullTitle
      description="Fixed-price transitions into, out of or between PEOs, plus HRIS migrations and payroll switches. Quoted before the work starts."
      canonical={`${SITE_URL}/services/transitions`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="T-1 · Transitions"
      title="Move systems without dropping a payroll."
      intro="PEO exits, switches and implementations, HRIS migrations and payroll changes. Fixed price, quoted before the work starts."
    />

    <section className="bg-background">
      <div className="container max-w-5xl py-20 md:py-28">
        <Reveal>
          <UpdatedLine />
          <h2 className="mt-3 font-heading text-3xl font-800 text-foreground md:text-4xl">
            Five transitions we run.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Each is scoped and priced before it starts, and we manage the vendor
            timeline so your team isn't chasing it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {transitionTypes.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <Card className="h-full border-l-4 border-l-accent card-elevated hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-700 text-foreground">
                    {t.name}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted/30">
      <div className="container max-w-3xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            Timing matters more than most firms expect.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Transitions land cleanest on January 1, and after that on a quarter
            boundary. Wage bases, benefit plan years and tax filings all reset on those
            dates, so a mid-quarter move means two sets of year-to-date figures and
            more room for error. Work backwards: a January 1 move should be underway by
            early October.
          </p>
          <p className="mt-6 text-base text-muted-foreground">
            If you're still deciding whether to be in a PEO at all, start with{" "}
            <Link to="/services/peo-brokerage" className="text-green-ink hover:underline">
              PEO brokerage
            </Link>{" "}
            — that comparison is free.
          </p>
        </Reveal>
      </div>
    </section>

    <ServiceCta
      heading="Planning a move?"
      body="Bring us the date you want to land on and we'll tell you what has to happen, and when."
      proof="PROOF SLOT — client quote on a completed PEO exit or switch, with headcount, states and the go-live date."
      secondary={{ label: "See all services", href: "/services" }}
    />
  </>
);

export default Transitions;
