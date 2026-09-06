import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Reveal } from "@/components/Reveal";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { serviceLadder } from "@/data/pricing";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ]),
    ...serviceLadder.map((s) => ({
      "@type": "Service",
      name: s.name,
      serviceType: s.name,
      provider: ORG_REF,
      areaServed: "US",
      url: `${SITE_URL}${s.href}`,
      description: s.who,
    })),
  ],
};

const Services = () => (
  <>
    <SEOHead
      title="HR Services for Professional Firms"
      description="Fixed-price HR audits, HR projects, fractional HR, transitions, and free PEO brokerage for professional-services firms — quoted before the work starts."
      canonical={`${SITE_URL}/services`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Services"
      title="Five services. Every price quoted before the work starts."
      intro="Independent HR advisory for professional-services firms of 10–150 people, in every state your people work in."
    />

    <section className="bg-background">
      <div className="container max-w-5xl py-20 md:py-28">
        <Reveal>
          <UpdatedLine />
          <h2 className="mt-3 font-heading text-3xl font-800 text-foreground md:text-4xl">
            The schedule of services.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every engagement is quoted as a fixed price before it begins. Multi-state
            is the default, not an add-on. We have no software to sell and no
            insurance to place, and any commission we receive is disclosed in writing.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-heading text-xs font-700 uppercase tracking-widest text-muted-foreground">
                    Mark
                  </th>
                  <th className="py-3 pr-4 font-heading text-xs font-700 uppercase tracking-widest text-muted-foreground">
                    Service
                  </th>
                  <th className="py-3 font-heading text-xs font-700 uppercase tracking-widest text-muted-foreground">
                    Who it's for
                  </th>
                </tr>
              </thead>
              <tbody>
                {serviceLadder.map((s) => (
                  <tr key={s.mark} className="border-b border-border/60 align-top">
                    <td className="py-5 pr-4 font-heading text-sm font-700 tabular-nums text-muted-foreground">
                      {s.mark}
                    </td>
                    <td className="py-5 pr-4">
                      <Link
                        to={s.href}
                        className="font-heading text-base font-700 text-green-ink hover:underline"
                      >
                        {s.name}
                      </Link>
                    </td>
                    <td className="py-5 text-base leading-relaxed text-muted-foreground">
                      {s.who}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-sm text-muted-foreground">
            Every price is fixed and quoted in writing before any work begins. See{" "}
            <Link to="/how-we-get-paid" className="text-green-ink hover:underline">
              how we get paid
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>

    <ServiceCta
      heading="Start with the audit."
      body="Most firms start with the HR audit, then fix what it finds. You'll know the price before we begin."
      proof="PROOF SLOT — managing partner quote, professional-services firm, on what the audit found, with a number."
      secondary={{ label: "Contact us", href: "/contact" }}
    />
  </>
);

export default Services;
