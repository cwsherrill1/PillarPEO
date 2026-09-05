import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const faqs = [
  {
    q: "Do you work with employers outside Charlotte?",
    a: "Yes. Pillar is headquartered in Charlotte but works with employers across North Carolina — Raleigh, Durham, Greensboro, Winston-Salem, Asheville, and beyond.",
  },
  {
    q: "Can a PEO handle multi-state employees?",
    a: "Yes. A capable PEO manages payroll tax, workers' comp, and benefits across every state you have employees in — which is one of the biggest reasons growing NC employers consider one.",
  },
  {
    q: "What does a PEO broker cost in North Carolina?",
    a: "Nothing to the employer. Providers pay the broker, so the service is free and your savings stay intact.",
  },
];

const Section = ({
  title,
  children,
  alt = false,
}: {
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) => (
  <section className={alt ? "bg-muted/30 py-20 md:py-28" : "py-20 md:py-28"}>
    <div className="container max-w-3xl">
      <Reveal>
        <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">{title}</h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">{children}</div>
      </Reveal>
    </div>
  </section>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
    <span>{children}</span>
  </li>
);

const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://pillarpeo.com/peo-broker-north-carolina#business",
      name: "Pillar PEO Advisors — North Carolina",
      url: "https://pillarpeo.com/peo-broker-north-carolina",
      areaServed: { "@type": "State", name: "North Carolina" },
      address: { "@type": "PostalAddress", addressLocality: "Charlotte", addressRegion: "NC", addressCountry: "US" },
      description: "Independent PEO broker serving employers across North Carolina.",
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

const PeoBrokerNorthCarolina = () => (
  <>
    <SEOHead
      title="PEO Broker in North Carolina"
      description="Independent PEO advisory for North Carolina businesses. Multi-state compliance, full-market shopping, and free forever."
      jsonLd={JSONLD}
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">North Carolina</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            PEO Broker in <span className="text-accent">North Carolina</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Independent advisory for NC employers — from Charlotte to Raleigh, the Triad, and the
            mountains.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule a Free Consultation
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <Reveal>
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
            <p className="text-base font-700 leading-relaxed text-foreground md:text-lg">
              North Carolina's employer base is growing — and so is the complexity of doing right by
              your team. A good PEO broker shops the full market for you, negotiates the contract,
              and stays on after you sign. The same playbook works whether you're in Charlotte,
              Raleigh, or Asheville.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <Section title="What's different about the NC market" alt>
      <p>
        North Carolina has favorable workers' comp dynamics, a competitive health-carrier landscape,
        and a fast-growing workforce concentrated in a handful of metro corridors. That mix opens
        real leverage for employers willing to put providers in a true side-by-side comparison —
        which is exactly what an{" "}
        <Link to="/peo-broker" className="font-semibold text-green-ink hover:underline">
          independent PEO broker
        </Link>{" "}
        is built to do.
      </p>
    </Section>

    <Section title="Statewide service from Charlotte HQ">
      <p>
        Pillar is based in{" "}
        <Link to="/peo-broker-charlotte" className="font-semibold text-green-ink hover:underline">
          Charlotte
        </Link>{" "}
        and works with employers across the state. We also serve cross-border employers in{" "}
        <Link to="/peo-broker-south-carolina" className="font-semibold text-green-ink hover:underline">
          South Carolina
        </Link>
        , which matters when your team spans both sides of the line.
      </p>
      <ul className="space-y-2">
        <Bullet>Charlotte and the broader Metrolina region</Bullet>
        <Bullet>Raleigh-Durham and the Research Triangle</Bullet>
        <Bullet>Greensboro, Winston-Salem, and the Triad</Bullet>
        <Bullet>Asheville and Western NC</Bullet>
        <Bullet>Coastal employers in Wilmington and the Outer Banks region</Bullet>
      </ul>
    </Section>

    <Section title="Multi-state compliance done right" alt>
      <p>
        Plenty of NC employers have remote employees in three, five, or fifteen other states.
        Payroll tax registration, state unemployment, sick leave, and benefits-eligibility rules all
        change at the border. A strong PEO collapses that workload into one system, and a good
        broker makes sure the PEO you pick can actually handle the states you operate in.
      </p>
    </Section>

    <Section title="How we evaluate providers">
      <ul className="space-y-2">
        <Bullet>True apples-to-apples cost analysis, not the provider's sales sheet</Bullet>
        <Bullet>Contract review — admin fees, renewal caps, exit terms</Bullet>
        <Bullet>Benefit design that actually fits your workforce</Bullet>
        <Bullet>Service-model fit (dedicated rep vs. shared queue)</Bullet>
        <Bullet>Tech and onboarding quality</Bullet>
      </ul>
    </Section>

    <Section title="Frequently Asked Questions" alt>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`q${i}`}>
            <AccordionTrigger className="text-left font-heading font-700 text-foreground">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">
            Independent PEO advisory, anywhere in North Carolina.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Free forever. We shop the full market and stay on as your long-term watchdog.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
            >
              <Link to="/contact">Schedule a PEO Strategy Call</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default PeoBrokerNorthCarolina;
