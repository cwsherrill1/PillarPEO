import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const faqs = [
  {
    q: "Where in South Carolina do you work?",
    a: "We work with employers statewide — Greenville, Spartanburg, Columbia, Charleston, Rock Hill, Hilton Head, and surrounding areas.",
  },
  {
    q: "We have employees in both Carolinas — can one PEO cover both?",
    a: "Yes. A capable PEO handles multi-state payroll tax, unemployment, and benefits across both NC and SC without you running parallel systems.",
  },
  {
    q: "What does a PEO broker cost in South Carolina?",
    a: "Nothing to the employer. Providers compensate the broker, so the service is free and your savings stay intact.",
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
      "@id": "https://pillarpeo.com/peo-broker-south-carolina#business",
      name: "Pillar PEO Advisors — South Carolina",
      url: "https://pillarpeo.com/peo-broker-south-carolina",
      areaServed: { "@type": "State", name: "South Carolina" },
      parentOrganization: { "@id": "https://pillarpeo.com/#organization" },
      telephone: "+1-704-787-1261",
      description: "Independent PEO broker serving employers across South Carolina.",
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

const PeoBrokerSouthCarolina = () => (
  <>
    <SEOHead
      title="PEO Broker in South Carolina"
      description="Independent PEO broker serving SC employers — Greenville, Columbia, Charleston. Full-market comparison, free forever."
      jsonLd={JSONLD}
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">South Carolina</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            PEO Broker in <span className="text-accent">South Carolina</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Independent advisory for SC employers — Upstate, Midlands, and Lowcountry.
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
              South Carolina's employer base is growing across manufacturing, healthcare, hospitality,
              and tech. An independent broker compares PEOs side by side, negotiates the contract,
              and stays on as your long-term watchdog. Free to you. No buddy-system referrals.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <Section title="What's different about the SC market" alt>
      <p>
        South Carolina employers face their own mix of workers' comp realities, carrier
        availability, and rapid hiring in Upstate manufacturing and Lowcountry hospitality. A
        provider that fits a Greenville plant rarely fits a Charleston tech team the same way —
        which is exactly why{" "}
        <Link to="/services/peo-brokerage" className="font-semibold text-green-ink hover:underline">
          working with an independent broker
        </Link>{" "}
        matters.
      </p>
    </Section>

    <Section title="Cross-border NC/SC employer support">
      <p>
        Plenty of Carolinas employers have teams on both sides of the line. We work closely with{" "}
        <Link to="/peo-broker-north-carolina" className="font-semibold text-green-ink hover:underline">
          North Carolina employers
        </Link>{" "}
        and are headquartered in{" "}
        <Link to="/hr-consulting/charlotte-nc" className="font-semibold text-green-ink hover:underline">
          Charlotte
        </Link>
        , so the cross-border picture is everyday work for us.
      </p>
      <ul className="space-y-2">
        <Bullet>Greenville, Spartanburg, and the Upstate</Bullet>
        <Bullet>Columbia and the Midlands</Bullet>
        <Bullet>Charleston and the Lowcountry</Bullet>
        <Bullet>Rock Hill and the Charlotte-metro border</Bullet>
        <Bullet>Hilton Head, Bluffton, and coastal SC</Bullet>
      </ul>
    </Section>

    <Section title="How we evaluate providers" alt>
      <ul className="space-y-2">
        <Bullet>True apples-to-apples cost analysis, not the provider's sales sheet</Bullet>
        <Bullet>Contract review — admin fees, renewal caps, exit terms</Bullet>
        <Bullet>Benefit design that actually fits your workforce</Bullet>
        <Bullet>Service-model fit (dedicated rep vs. shared queue)</Bullet>
        <Bullet>Tech and onboarding quality</Bullet>
      </ul>
    </Section>

    <Section title="Frequently Asked Questions">
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
            Independent PEO advisory, anywhere in South Carolina.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Free forever. Full-market comparison. A real human after you sign.
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

export default PeoBrokerSouthCarolina;
