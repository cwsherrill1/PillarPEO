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
    cost: "Fixed monthly price, quoted in advance",
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
    },
  ],
};

const FractionalHr = () => (
  <>
    <SEOHead
      title="Fractional HR for Professional Firms"
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

    <section className="bg-background">
      <div className="container max-w-3xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            What a month actually looks like.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Fractional HR is not a phone line you call when something breaks. It is a
            standing block of senior HR time, spent on a short list of things you and we
            agree on at the start of each month. A typical month has a recurring working
            session with the managing partner or practice administrator, a queue of
            employee-relations questions handled as they come in, and one piece of
            building work that moves forward — an updated handbook section, a job
            architecture, an offer-letter template set, a manager coaching plan.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Compliance runs underneath all of it. When you hire in a new state, we handle
            the registrations, the notices, the wage rules and the poster set for that
            state before the first payroll runs there, rather than after someone notices.
            When a law changes in a state you already employ in, you hear it from us with
            the specific action attached, not a newsletter.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="mt-12 font-heading text-xl font-700 text-foreground">
            What we need from you.
          </h3>
          <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
            <li>
              One decision-maker who can approve a policy change without a partner vote.
              Fractional HR stalls when every recommendation has to go through committee.
            </li>
            <li>
              Read access to your payroll, HRIS and benefits systems, and to the personnel
              files. We work in your systems rather than building a shadow set.
            </li>
            <li>
              An hour a month of that person's calendar, protected. Everything else can be
              asynchronous.
            </li>
            <li>
              Honesty about the situations already in progress. The termination you're
              thinking about is far cheaper to handle before it happens than after.
            </li>
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <h3 className="mt-12 font-heading text-xl font-700 text-foreground">
            How engagements start and end.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Most firms start after an audit, so the first ninety days have a written list
            of priorities rather than a discovery period you are paying for. There is a
            three-month minimum because nothing meaningful in HR turns around faster than
            that, and after the minimum the engagement runs month to month. Tiers move up
            and down as your year does — hiring seasons and open enrolment need more hours
            than a quiet quarter. If your volume outgrows the top tier, we will tell you
            it is time to hire someone in-house, and help you write the role and interview
            for it.
          </p>
        </Reveal>
      </div>
    </section>

    <ServiceCta
      heading="Start with the audit, then decide the tier."
      body="The audit shows how much ongoing help your firm actually needs, so you're not guessing at hours."
      proof="fractional HR client quote, professional-services firm, with headcount and states covered."
      secondary={{ label: "See all services", href: "/services" }}
    />
  </>
);

export default FractionalHr;
