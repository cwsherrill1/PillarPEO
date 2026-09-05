import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Reveal } from "@/components/Reveal";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { pricing } from "@/data/pricing";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const rows = [
  ...pricing.audit.bands.map((b) => ({
    mark: pricing.audit.mark,
    service: `HR Audit — ${b.label}`,
    price: b.price,
    note: b.states,
    href: "/services/hr-audit",
  })),
  {
    mark: pricing.audit.mark,
    service: "HR Audit — over 150 employees",
    price: "Custom",
    note: "Quoted before the work starts.",
    href: "/services/hr-audit",
  },
  {
    mark: pricing.projects.mark,
    service: "HR Projects",
    price: pricing.projects.range,
    note: "Handbook, FLSA review, I-9/E-Verify, comp benchmarking, performance, manager training.",
    href: "/services/hr-projects",
  },
  ...pricing.fractional.tiers.map((t) => ({
    mark: pricing.fractional.mark,
    service: `Fractional HR — ${t.label} (${t.hours})`,
    price: t.price,
    note: pricing.fractional.note,
    href: "/services/fractional-hr",
  })),
  {
    mark: pricing.transitions.mark,
    service: "Transitions",
    price: pricing.transitions.range,
    note: "PEO exit, PEO switch, PEO implementation, HRIS migration, payroll switch.",
    href: "/services/transitions",
  },
  {
    mark: pricing.brokerage.mark,
    service: "PEO brokerage",
    price: pricing.brokerage.price,
    note: pricing.brokerage.note,
    href: "/services/peo-brokerage",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Pricing", path: "/pricing" },
    ]),
    {
      "@type": "WebPage",
      name: "Pricing",
      url: `${SITE_URL}/pricing`,
      description:
        "Every Pillar price in one table: HR audits from $2,500, fixed-price projects, fractional HR from $2,000 a month, transitions, and free PEO brokerage.",
      publisher: ORG_REF,
    },
  ],
};

const Pricing = () => (
  <>
    <SEOHead
      title="Pricing"
      description="Every Pillar price in one table: HR audits from $2,500, HR projects $1,500–$7,500, fractional HR from $2,000 a month, transitions $3,000–$10,000, PEO brokerage free."
      canonical={`${SITE_URL}/pricing`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Pricing"
      title="Every price, on one page."
      intro="Fixed prices, quoted in writing before the work starts. Multi-state is priced into the band, not billed as an extra."
    />

    <section className="bg-background">
      <div className="container max-w-5xl py-20 md:py-28">
        <Reveal>
          <UpdatedLine />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-heading text-xs font-700 uppercase tracking-widest text-muted-foreground">
                    Mark
                  </th>
                  <th className="py-3 pr-4 font-heading text-xs font-700 uppercase tracking-widest text-muted-foreground">
                    Service
                  </th>
                  <th className="py-3 pr-4 font-heading text-xs font-700 uppercase tracking-widest text-muted-foreground">
                    Price
                  </th>
                  <th className="py-3 font-heading text-xs font-700 uppercase tracking-widest text-muted-foreground">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.service} className="border-b border-border/60 align-top">
                    <td className="py-5 pr-4 font-heading text-sm font-700 tabular-nums text-muted-foreground">
                      {r.mark}
                    </td>
                    <td className="py-5 pr-4">
                      <Link
                        to={r.href}
                        className="font-heading text-base font-700 text-green-ink hover:underline"
                      >
                        {r.service}
                      </Link>
                    </td>
                    <td className="py-5 pr-4 text-base tabular-nums text-foreground">
                      {r.price}
                    </td>
                    <td className="py-5 text-base leading-relaxed text-muted-foreground">
                      {r.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-sm text-muted-foreground">
            Prices are quoted in writing before any work begins.{" "}
            <Link to="/how-we-get-paid" className="text-green-ink hover:underline">
              How we get paid
            </Link>{" "}
            explains the one place a third party pays us.
          </p>
        </Reveal>
      </div>
    </section>

    <ServiceCta
      heading="Know the number before you commit."
      body="Tell us your headcount and the states your people work in, and you'll have a fixed quote."
      proof="PROOF SLOT — client quote on the value of a fixed price versus an hourly consulting engagement."
      secondary={{ label: "See all services", href: "/services" }}
    />
  </>
);

export default Pricing;
