import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const faqs = [
  {
    q: "What is the difference between a PEO broker and a PEO?",
    a: "A PEO is the provider that delivers payroll, benefits, and HR services. A PEO broker is your independent advocate who shops multiple PEOs on your behalf, compares them honestly, and negotiates on your side of the table.",
  },
  {
    q: "How much does a PEO broker cost?",
    a: "At Pillar, nothing. The service is free to you because providers compensate the broker. Your savings stay intact.",
  },
  {
    q: "How do I know if a broker is truly independent?",
    a: "Ask where they worked before and how many providers they actively place business with. If they came from one PEO and keep recommending it, they may be steering you rather than advising you.",
  },
  {
    q: "Do PEO brokers help after I sign?",
    a: "The good ones do. Pillar stays on as a long-term watchdog with quarterly reviews and dispute advocacy.",
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
      "@id": "https://pillarpeo.com/peo-broker-charlotte#business",
      name: "Pillar PEO Advisors — Charlotte",
      url: "https://pillarpeo.com/peo-broker-charlotte",
      areaServed: { "@type": "City", name: "Charlotte, NC" },
      address: { "@type": "PostalAddress", addressLocality: "Charlotte", addressRegion: "NC", addressCountry: "US" },
      description:
        "Independent Charlotte PEO broker. Full-market comparison, transparent fees, free forever.",
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

const PeoBrokerCharlotte = () => (
  <>
    <SEOHead
      title="PEO Broker in Charlotte NC"
      description="An independent Charlotte PEO broker who shops the full market for you. No funneling business back to old employers. Free forever."
      jsonLd={JSONLD}
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Charlotte, NC</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            PEO Broker in <span className="text-accent">Charlotte NC</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            A Charlotte-based broker who actually works for you — not for the PEO they used to work for.
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
              Most business owners in Charlotte who go looking for help with a PEO end up talking to
              someone with a hidden allegiance — they just don't know it yet. A real broker goes to
              the full market on your behalf, compares every option honestly, and has no quiet
              loyalty to a former employer.
            </p>
          </div>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Here is the part of the industry nobody says out loud. A large share of PEO brokers
              spent years working inside a PEO before they hung out their own shingle. That sounds
              like a credential, and sometimes it is. But it also means they have a rolodex of old
              colleagues still working the PEO sales floor, and business has a way of flowing right
              back to them. The broker calls it a relationship. The client thinks they are getting an
              open market search. That is the difference that costs you money.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <Section title="Why local matters in Charlotte" alt>
      <p>
        Charlotte's market is growing fast. Finance, healthcare, tech, and professional services are
        all fighting for the same talent, and benefits packages carry more weight than they did five
        years ago. Meanwhile a lot of small and mid-sized businesses are still overpaying or stuck
        with coverage that has quietly fallen behind.
      </p>
      <p>
        Knowing which carriers are actually competitive right now, and which providers have strong
        compliance support in North Carolina, is not something you get from a demo call or a broker
        who only sells what their friends are selling. For the broader picture on{" "}
        <Link to="/peo-broker" className="font-semibold text-green-ink hover:underline">
          choosing a PEO broker
        </Link>
        , our national guide goes deeper.
      </p>
    </Section>

    <Section title="What independent representation actually means">
      <p>
        When a broker represents you, their loyalty should be to your outcome and nothing else. That
        means going to the full market on your behalf, collecting competing proposals, and telling
        you the honest truth about which provider fits your headcount, your industry, and your
        benefits needs. If the best move is to stay where you are, they tell you that too.
      </p>
      <p>
        That only works if the broker is not quietly steering you toward a former employer. The
        test: ask how many providers they actively work with, and ask where they worked before they
        became a broker. If "Provider X" keeps topping every recommendation, you have your answer.
      </p>
    </Section>

    <Section title="What a real broker does for you" alt>
      <ul className="space-y-2">
        <Bullet>Goes to market with multiple providers at once, not just familiar names</Bullet>
        <Bullet>Turns confusing proposals into a true apples-to-apples comparison</Bullet>
        <Bullet>Flags hidden fees, contract traps, and renewal risk before you sign</Bullet>
        <Bullet>Negotiates pricing and terms on your behalf</Bullet>
        <Bullet>Stays involved after the deal closes so implementation does not fall apart</Bullet>
      </ul>
      <p>
        The last point matters more than most owners expect. The right broker is a long-term
        watchdog — quarterly reviews, dispute advocacy, and a real human to call when something goes
        sideways.
      </p>
    </Section>

    <Section title="The fee question">
      <p>
        Brokers in this space are compensated by the provider, which means the service is free to
        you as the business owner. That is exactly why the buddy system is so easy to hide — the
        check looks the same no matter who the broker steers you toward. The protection is
        transparency. Work with someone who shows you their compensation structure upfront and who
        has enough real relationships that they are not quietly funneling you to one place.
      </p>
      <p>
        At Pillar PEO Advisors the model is Free Forever. The providers pay us, your savings stay
        intact, and our loyalty stays with you because we are not feeding business back to an old
        sales floor.
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

    <Section title="Serving the Carolinas">
      <p>
        We work with employers throughout the region — from{" "}
        <Link to="/peo-broker-north-carolina" className="font-semibold text-green-ink hover:underline">
          North Carolina
        </Link>{" "}
        to{" "}
        <Link to="/peo-broker-south-carolina" className="font-semibold text-green-ink hover:underline">
          South Carolina
        </Link>
        . Charlotte is home base, but the playbook travels.
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
            Get a Charlotte-based broker who actually works for you.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Independent, transparent, and free forever. We shop the full market and stay on as your
            long-term watchdog.
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

export default PeoBrokerCharlotte;
