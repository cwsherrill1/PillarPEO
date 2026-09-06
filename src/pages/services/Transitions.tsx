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

    <section className="bg-background">
      <div className="container max-w-3xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            What the work actually involves.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A transition is mostly data, deadlines and paperwork that only exists once.
            We start by reading the agreement you are leaving or entering: notice period,
            termination window, renewal date, what happens to accrued balances, and who
            owns the historic payroll records afterwards. That single document usually
            dictates the timeline, and it is the step firms skip.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            From there the work runs on a written plan: state-by-state registrations
            reopened or closed, unemployment accounts and rates confirmed, workers' comp
            policy bound before the first day of coverage, benefit plans mapped
            plan-to-plan so nobody loses a deductible mid-year, 401(k) plan documents and
            payroll feeds re-pointed, year-to-date wage and tax figures reconciled and
            loaded, and employee records, PTO balances and I-9s carried across. We run a
            parallel payroll before go-live and reconcile it to the cent.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Your people see almost none of that. What they see is a short set of
            communications we draft for you: what is changing, what they need to do, when
            they need to do it, and where their pay stub and benefits will live afterwards.
            Open enrolment inside a transition gets its own timeline.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="mt-12 font-heading text-xl font-700 text-foreground">
            What you have to do.
          </h3>
          <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
            <li>Give notice in writing, on time. We draft it, but only you can send it.</li>
            <li>
              Sign the applications and carrier forms. Broker of record letters and plan
              documents need an officer's signature and are the most common source of delay.
            </li>
            <li>
              Nominate one internal owner — usually the practice administrator — who can
              answer census and payroll questions the same day.
            </li>
            <li>
              Keep a period of your accounting team's time free around go-live for the
              reconciliation, and expect one messy quarter of two year-to-date records.
            </li>
          </ul>
        </Reveal>
      </div>
    </section>

    <ServiceCta
      heading="Planning a move?"
      body="Bring us the date you want to land on and we'll tell you what has to happen, and when."
      proof="client quote on a completed PEO exit or switch, with headcount, states and the go-live date."
      secondary={{ label: "See all services", href: "/services" }}
    />
  </>
);

export default Transitions;
