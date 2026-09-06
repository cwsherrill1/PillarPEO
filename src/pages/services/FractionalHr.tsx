import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { pricing } from "@/data/pricing";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const comparison = [
  {
    option: "Fractional HR",
    cost: pricing.fractional.range,
    fit: "You need senior HR judgment a few days a month, in several states, without adding headcount.",
    limits: "Not an on-site presence, and not a payroll or benefits platform.",
  },
  {
    option: "A PEO",
    cost: "Per-employee-per-month, bundled",
    fit: "You want payroll, benefits and workers' comp delivered as one package with shared employer risk.",
    limits: "The HR advice comes from the same party selling you the bundle.",
  },
  {
    option: "A full-time HR hire",
    cost: "Salary, benefits and overhead",
    fit: "You have enough daily HR volume to keep one person busy and can supervise the role.",
    limits: "One person rarely covers multi-state compliance, comp and employee relations equally well.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Fractional HR", path: "/services/fractional-hr" },
    ]),
    {
      "@type": "Service",
      name: "Fractional HR",
      serviceType: "Fractional HR",
      provider: ORG_REF,
      areaServed: "US",
      url: `${SITE_URL}/services/fractional-hr`,
      description:
        "Fractional HR for professional-services firms: 8, 20 or 40 hours a month at a fixed monthly price, three-month minimum.",
      offers: pricing.fractional.tiers.map((t) => ({
        "@type": "Offer",
        priceCurrency: "USD",
        name: t.label,
        description: `${t.label} — ${t.hours} — ${t.price}`,
      })),
    },
  ],
};

const FractionalHr = () => (
  <>
    <SEOHead
      title={`Fractional HR — ${pricing.fractional.range}`}
      description="Fractional HR for firms of 10–150 people: Advisor 8 hrs, Partner 20 hrs, or Embedded 40 hrs a month at a fixed price, in every state you employ."
      canonical={`${SITE_URL}/services/fractional-hr`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="F-1 · Fractional HR"
      title="Senior HR help, by the month, without the hire."
      intro="Three tiers, a fixed monthly price, and coverage in every state your people work in."
    />

    <section className="bg-background">
      <div className="container max-w-5xl py-20 md:py-28">
        <Reveal>
          <UpdatedLine />
          <h2 className="mt-3 font-heading text-3xl font-800 text-foreground md:text-4xl">
            Three tiers.
          </h2>
          <p className="mt-4 text-muted-foreground">{pricing.fractional.note}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-heading text-xs font-700 uppercase tracking-widest text-muted-foreground">
                    Tier
                  </th>
                  <th className="py-3 pr-4 font-heading text-xs font-700 uppercase tracking-widest text-muted-foreground">
                    Hours
                  </th>
                  <th className="py-3 pr-4 font-heading text-xs font-700 uppercase tracking-widest text-muted-foreground">
                    Price
                  </th>
                  <th className="py-3 font-heading text-xs font-700 uppercase tracking-widest text-muted-foreground">
                    What you get
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.fractional.tiers.map((t) => (
                  <tr key={t.label} className="border-b border-border/60 align-top">
                    <td className="py-5 pr-4 font-heading text-base font-700 text-foreground">
                      {t.label}
                    </td>
                    <td className="py-5 pr-4 text-base tabular-nums text-muted-foreground">
                      {t.hours}
                    </td>
                    <td className="py-5 pr-4 text-base tabular-nums text-foreground">
                      {t.price}
                    </td>
                    <td className="py-5 text-base leading-relaxed text-muted-foreground">
                      {t.who}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-muted/30">
      <div className="container max-w-5xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            Fractional HR vs a PEO vs a full-time hire.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            These solve different problems, and plenty of firms end up with two of
            them. Here's how we frame the choice.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {comparison.map((c, i) => (
            <Reveal key={c.option} delay={i * 100}>
              <Card className="h-full border-border/60 card-elevated hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-700 text-foreground">
                    {c.option}
                  </h3>
                  <p className="mt-1 text-base tabular-nums text-green-ink">{c.cost}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {c.fit}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.limits}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <ServiceCta
      heading="Start with the audit, then decide the tier."
      body="The audit shows how much ongoing help your firm actually needs, so you're not guessing at hours."
      proof="PROOF SLOT — fractional HR client quote, professional-services firm, with headcount and states covered."
      secondary={{ label: "See all services", href: "/services" }}
    />
  </>
);

export default FractionalHr;
