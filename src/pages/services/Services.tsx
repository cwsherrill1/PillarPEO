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
      description="Fixed-price HR audits, projects, fractional HR and transitions, plus free PEO brokerage, for professional-services firms nationwide."
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

    <section className="bg-muted/30">
      <div className="container max-w-3xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            Which engagement fits which situation.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Most firms arrive with a symptom rather than a service in mind. Here is how we
            usually match one to the other.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="font-heading text-xl font-700 text-foreground">
                "We don't know what we don't know."
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Start with the{" "}
                <Link to="/services/hr-audit" className="text-green-ink hover:underline">
                  HR audit
                </Link>
                . It reviews the areas that generate liability: classification,
                pay practices, I-9s, handbook, personnel files, leave, state registrations
                and gives you a ranked list of findings rather than a general opinion.
                Almost every other engagement here starts life as a line in that report.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-700 text-foreground">
                "We know exactly what's broken."
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                A handbook that hasn't been touched in five years, a classification
                question you already lose sleep over, an I-9 file you'd rather not have
                inspected: that is an{" "}
                <Link to="/services/hr-projects" className="text-green-ink hover:underline">
                  HR project
                </Link>
                . One deliverable, one scope, one price, done and handed over.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-700 text-foreground">
                "Things keep coming up and nobody owns them."
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Recurring questions, managers who need coaching, hiring across state
                lines, an administrator quietly doing HR on top of a full job: that is{" "}
                <Link to="/services/fractional-hr" className="text-green-ink hover:underline">
                  fractional HR
                </Link>
                : senior HR time every month without adding a salary to the payroll.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-700 text-foreground">
                "We're moving systems, or a provider."
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Leaving a PEO, joining one, changing payroll or HRIS: that is a{" "}
                <Link to="/services/transitions" className="text-green-ink hover:underline">
                  transition
                </Link>
                . Project-managed against a go-live date, with year-to-date figures
                reconciled and a parallel payroll before anything switches.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-700 text-foreground">
                "We just want to know what a PEO would cost."
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                That is{" "}
                <Link to="/services/peo-brokerage" className="text-green-ink hover:underline">
                  PEO brokerage
                </Link>
                , and it is free to you: the provider pays the commission and we disclose
                it in writing. You can also model the market yourself with the{" "}
                <Link to="/tools/peo-cost-calculator" className="text-green-ink hover:underline">
                  PEO cost calculator
                </Link>
                .
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 text-base leading-relaxed text-muted-foreground">
            Firms often run two of these at once: an audit and a transition, or a project
            and ongoing fractional support. Nothing here requires you to buy the next thing,
            and we will say so when the honest answer is that you do not need us yet.
          </p>
        </Reveal>
      </div>
    </section>

    <ServiceCta
      heading="Start with the audit."
      body="Most firms start with the HR audit, then fix what it finds. You'll know the price before we begin."
      proof="managing partner quote, professional-services firm, on what the audit found, with a number."
      secondary={{ label: "Contact us", href: "/contact" }}
    />
  </>
);

export default Services;
