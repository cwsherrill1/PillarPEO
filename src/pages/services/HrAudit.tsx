import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { pricing } from "@/data/pricing";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const areas = [
  { n: 1, title: "Hiring, I-9, E-Verify", desc: "Offer process, background checks, I-9 completion and storage, E-Verify use where it applies." },
  { n: 2, title: "Classification and wage-hour", desc: "Exempt and non-exempt calls, contractor status, overtime, travel and on-call time." },
  { n: 3, title: "Handbook and policies", desc: "What the handbook says, what it's missing, and where it says something you can't defend." },
  { n: 4, title: "Payroll and tax registrations", desc: "Withholding and unemployment registrations in every state a person works." },
  { n: 5, title: "Benefits, ACA, COBRA", desc: "Eligibility rules as written versus as run, ACA reporting, COBRA notices and timing." },
  { n: 6, title: "Leave and accommodations", desc: "FMLA where it applies, state leave, pregnancy and disability accommodation practice." },
  { n: 7, title: "Records, retention, privacy", desc: "Personnel files, medical file separation, retention schedules, access controls." },
  { n: 8, title: "Safety and workers' comp", desc: "Coverage by state, posting, injury reporting, and the required logs." },
  { n: 9, title: "Offboarding and final pay", desc: "Separation documentation, final-pay timing by state, references and unemployment response." },
];

const inputs = [
  "Employee handbook",
  "Two payroll registers",
  "I-9s",
  "Job descriptions",
  "Benefit plan documents",
  "Org chart",
  "Last five separation files",
  "Vendor or PEO contract",
  "A photo of your posters",
  "A timekeeping sample",
];

const faqs = [
  {
    q: "What is an HR audit and what does it cost?",
    a: "An HR audit is a structured review of how your firm hires, pays, documents and separates people, measured against the rules in every state you employ. Pillar's audit runs 41 checks across nine areas. The price is set by headcount band and by how many states you employ in, and is quoted on the scope call, before we start.",
  },
  {
    q: "How long does the audit take?",
    a: "Fifteen business days from the day your documents are uploaded. It takes about four hours of your team's time across the document handoff and four short interviews.",
  },
  {
    q: "What do we get at the end?",
    a: "A 12–20 page PDF scoring every check Pass, Watch or Fail, with what to do about each finding, plus a 90-minute walkthrough with the people you choose to include.",
  },
  {
    q: "Is this legal advice?",
    a: "No. Pillar is not a law firm. Findings are reviewed with your counsel.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "HR Audit", path: "/services/hr-audit" },
    ]),
    {
      "@type": "Service",
      name: "HR Audit: the Load Report",
      serviceType: "HR audit",
      provider: ORG_REF,
      areaServed: "US",
      url: `${SITE_URL}/services/hr-audit`,
      description:
        "A fixed-price HR audit: 41 checks across nine areas, scored Pass, Watch or Fail, delivered in 15 business days.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const HrAudit = () => (
  <>
    <SEOHead
      title="HR Audit for Firms of 10–150"
      fullTitle
      description="A fixed-price HR audit for firms of 10–150 people: 41 checks across nine areas, scored Pass, Watch or Fail, in 15 business days."
      canonical={`${SITE_URL}/services/hr-audit`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="A-1 · HR Audit"
      title="The Load Report: what your HR risk is, in writing."
      intro="41 checks across nine areas, scored Pass, Watch or Fail, in every state your people work in."
    />

    {/* Direct answer */}
    <section className="bg-background">
      <div className="container max-w-3xl py-20 md:py-28">
        <Reveal>
          <UpdatedLine />
          <h2 className="mt-3 font-heading text-3xl font-800 text-foreground md:text-4xl">
            What an HR audit is, and what it costs.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            An HR audit is a structured review of how your firm hires, pays,
            documents and separates people, measured against the rules in every state
            you employ. Pillar's audit runs 41 checks across nine areas. Fixed price,
            quoted before the work starts.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Price bands */}
    <section className="bg-muted/30">
      <div className="container max-w-5xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            Three bands. One fixed price.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricing.audit.bands.map((b, i) => (
            <Reveal key={b.label} delay={i * 100}>
              <Card className="h-full border-border/60 card-elevated hover-lift">
                <CardContent className="p-6">
                  <p className="font-heading text-sm font-700 uppercase tracking-widest text-muted-foreground">
                    {b.label}
                  </p>
                  <p className="mt-3 text-lg font-700 text-foreground">
                    Fixed price, quoted before the work starts.
                  </p>
                  <p className="mt-3 text-base text-muted-foreground">{b.states}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="mt-8 text-base text-muted-foreground">
            The price is set by headcount band and by how many states you employ in,
            and is quoted on the scope call.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Nine areas */}
    <section className="bg-background">
      <div className="container max-w-5xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            The nine areas.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            41 checks in total. Every check is scored Pass, Watch or Fail, with what to
            do about it.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.n} delay={i * 60}>
              <Card className="h-full border-l-4 border-l-accent card-elevated hover-lift">
                <CardContent className="p-6">
                  <p className="font-heading text-sm font-800 tabular-nums text-green-ink">
                    {a.n}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-700 text-foreground">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {a.desc}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="bg-muted/30">
      <div className="container max-w-4xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            How it runs.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full border-border/60 card-elevated">
              <CardContent className="p-6">
                <h3 className="font-heading text-lg font-700 text-foreground">Timeline</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  15 business days from document upload. About four hours of your team's
                  time in total.
                </p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full border-border/60 card-elevated">
              <CardContent className="p-6">
                <h3 className="font-heading text-lg font-700 text-foreground">Deliverable</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  A 12–20 page PDF with every check scored, plus a 90-minute walkthrough.
                </p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={150}>
            <Card className="h-full border-border/60 card-elevated">
              <CardContent className="p-6">
                <h3 className="font-heading text-lg font-700 text-foreground">
                  What we need from you
                </h3>
                <ul className="mt-3 space-y-1.5 text-base leading-relaxed text-muted-foreground">
                  {inputs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={200}>
            <Card className="h-full border-border/60 card-elevated">
              <CardContent className="p-6">
                <h3 className="font-heading text-lg font-700 text-foreground">Interviews</h3>
                <ul className="mt-3 space-y-1.5 text-base leading-relaxed text-muted-foreground">
                  <li>The owner or managing partner</li>
                  <li>Whoever runs payroll</li>
                  <li>One manager</li>
                  <li>One newer employee</li>
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <p className="mt-10 text-base text-muted-foreground">
            Pillar is not a law firm. Findings are reviewed with your counsel.
          </p>
        </Reveal>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-background">
      <div className="container max-w-3xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            Questions we get.
          </h2>
        </Reveal>
        <div className="mt-10 space-y-8">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <div>
                <h3 className="font-heading text-xl font-700 text-foreground">{f.q}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="mt-10 text-base text-muted-foreground">
            The audit usually leads into{" "}
            <Link to="/services/hr-projects" className="text-green-ink hover:underline">
              fixed-price projects
            </Link>{" "}
            for whatever it finds.
          </p>
        </Reveal>
      </div>
    </section>

    <ServiceCta
      heading="Book an audit."
      body="Fifteen business days from upload to walkthrough, at a price you know before we start."
      proof="managing partner quote, Charlotte law firm, on an audit finding, with a number."
      secondary={{ label: "See all services", href: "/services" }}
    />
  </>
);

export default HrAudit;
