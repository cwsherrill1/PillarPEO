import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const faqs = [
  {
    q: "What does a PEO broker actually do?",
    a: "A PEO broker shops the full market on your behalf, compares providers honestly, negotiates pricing and terms, and stays on as a long-term advocate after you sign.",
  },
  {
    q: "How much does a PEO broker cost?",
    a: "At Pillar, nothing. Providers compensate the broker, so the service is free to the employer and your savings stay intact.",
  },
  {
    q: "How do I know if a broker is independent?",
    a: "Ask where they worked before and how many providers they actively place business with. A broker who came from one PEO and keeps recommending it is steering, not advising.",
  },
  {
    q: "Do I need a broker, or can I go direct?",
    a: "You can go direct, but you will be comparing proposals alone, with no leverage on renewal and no advocate when issues come up. A good broker pays for themselves in saved time and avoided mistakes.",
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
      "@type": "Service",
      name: "PEO Brokerage and Advisory",
      provider: {
        "@type": "Organization",
        name: "Pillar PEO Advisors",
        url: "https://pillarpeo.com",
      },
      areaServed: "United States",
      description:
        "Independent PEO broker representing employers, not providers. Full-market comparison, free forever.",
      url: "https://pillarpeo.com/peo-broker",
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

const PeoBroker = () => (
  <>
    <SEOHead
      title="How to Choose a PEO Broker (National Guide)"
      description="A PEO broker should work for you, not the providers. Here is how independent advisory works, how brokers get paid, and what to ask before you sign."
      jsonLd={JSONLD}
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">National Hub</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            How to Choose a <span className="text-accent">PEO Broker</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            What an independent PEO broker really does, how they're paid, and how to spot one who's
            actually on your side.
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
              A PEO broker represents you, not the PEO. The best one goes to the full market, compares
              every option honestly, and has no hidden loyalty to a former employer. Brokers are paid
              by the providers, so the service is free to the employer — but that only protects you
              when the broker is truly independent.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <Section title="What a PEO broker actually does">
      <ul className="space-y-2">
        <Bullet>Goes to market with multiple providers at once, not just familiar names</Bullet>
        <Bullet>Turns confusing proposals into a true apples-to-apples comparison</Bullet>
        <Bullet>Flags hidden fees, contract traps, and renewal risk before you sign</Bullet>
        <Bullet>Negotiates pricing and terms on your behalf</Bullet>
        <Bullet>Stays involved after the deal closes so implementation doesn't fall apart</Bullet>
      </ul>
    </Section>

    <Section title="Independent vs. captive brokers" alt>
      <p>
        A large share of PEO brokers spent years inside a single PEO before going independent. That
        rolodex of old colleagues becomes a quiet pipeline — clients come in expecting a market
        search and quietly get routed back to a former employer. The broker calls it a relationship;
        the client thinks they're getting an open comparison.
      </p>
      <p>
        Independent representation means the broker's only loyalty is to your outcome. If staying
        where you are is the right call, they say so. The test is simple: ask how many providers
        they place business across and where they worked before.
      </p>
    </Section>

    <Section title="How brokers are paid (and why ours is free forever)">
      <p>
        Brokers in this space are compensated by the provider, which means the service is free to
        the employer. The check looks the same no matter who the broker recommends — which is
        exactly why the buddy system is so easy to hide. The protection is transparency: work with
        someone who shows you their compensation structure upfront and has real relationships with
        enough providers that no single one dominates.
      </p>
      <p>
        At Pillar, the model is Free Forever. Providers pay us, your savings stay intact, and our
        loyalty stays with you.
      </p>
    </Section>

    <Section title="Questions to ask any broker before you trust them" alt>
      <ul className="space-y-2">
        <Bullet>Where did you work before you became a broker?</Bullet>
        <Bullet>How many providers do you actively place business with?</Bullet>
        <Bullet>Do you disclose your compensation from each one?</Bullet>
        <Bullet>Are you involved after we sign, or do you disappear?</Bullet>
        <Bullet>If staying put is the right call for us, will you say so?</Bullet>
      </ul>
    </Section>

    <Section title="Local expertise across the Carolinas">
      <p>
        Pillar is headquartered in Charlotte and works with employers across the region. The market,
        the carriers, and the compliance picture all shift state by state, so it helps to work with
        someone who knows the ground.
      </p>
      <ul className="space-y-2">
        <Bullet>
          <Link to="/peo-broker-charlotte" className="font-semibold text-green-ink hover:underline">
            PEO broker in Charlotte, NC
          </Link>
        </Bullet>
        <Bullet>
          <Link
            to="/peo-broker-north-carolina"
            className="font-semibold text-green-ink hover:underline"
          >
            PEO broker for North Carolina employers
          </Link>
        </Bullet>
        <Bullet>
          <Link
            to="/peo-broker-south-carolina"
            className="font-semibold text-green-ink hover:underline"
          >
            PEO broker for South Carolina employers
          </Link>
        </Bullet>
      </ul>
      <p>
        Benefits design is where most of the value shows up. If you're weighing options, our guide
        to{" "}
        <Link
          to="/blog/employee-health-benefits-options"
          className="font-semibold text-green-ink hover:underline"
        >
          employee health benefits options
        </Link>{" "}
        walks through the trade-offs.
      </p>
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
            Get an independent broker who actually works for you.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Independent, transparent, and free forever. Start with a short conversation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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

export default PeoBroker;
