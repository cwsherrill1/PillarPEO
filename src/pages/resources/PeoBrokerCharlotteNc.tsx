import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import { ArticleByline, ArticleAuthorBio, buildArticleJsonLd } from "@/components/ArticleByline";

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

const ARTICLE = buildArticleJsonLd({
  title: "How to Choose a PEO Broker in Charlotte NC",
  description:
    "Most PEO brokers came from the PEO side and quietly send business to old buddies. Here is how to find one who actually works for you in Charlotte.",
  path: "/blog/peo-broker-charlotte-nc",
  datePublished: "2026-04-07",
});

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

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
        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
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

const PeoBrokerCharlotteNc = () => (
  <>
    <SEOHead
      title="How to Choose a PEO Broker in Charlotte NC"
      description="Most PEO brokers came from the PEO side and quietly send business to old buddies. Here is how to find one who actually works for you in Charlotte."
      jsonLd={{
        "@context": "https://schema.org",
        "@graph": [ARTICLE["@graph"][0], ARTICLE["@graph"][1], FAQ_JSONLD],
      }}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Charlotte Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            How to Choose a PEO Broker
            <span className="text-accent"> in Charlotte NC</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            How to find a broker who actually works for you — not for the PEO they used to work for.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <ArticleByline datePublished="April 7, 2026" />
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
          <Link
            to="/resources"
            className="mb-8 inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources
          </Link>
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
            <p className="text-base font-700 leading-relaxed text-foreground md:text-lg">
              A PEO broker represents you, not the PEO. The best one goes to the full market on
              your behalf, compares every option honestly, and has no hidden loyalty to a former
              employer. Many brokers came up through a single PEO and route clients back to old
              colleagues, so the key question to ask any broker is where they worked before and
              how many providers they actually place business across.
            </p>
          </div>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Most business owners in Charlotte who go looking for help with a PEO end up talking
              to someone with a hidden allegiance. They just do not know it yet.
            </p>
            <p>
              Here is the part of the industry nobody says out loud. A large share of PEO brokers
              spent years working inside a PEO before they hung out their own shingle. That sounds
              like a credential, and sometimes it is. But it also means they have a rolodex of old
              colleagues, old managers, and old friends still working the PEO sales floor. When a
              client comes to them, the business has a way of flowing right back to the people
              they used to work with. The broker calls it a relationship. The client thinks they
              are getting an open market search.
            </p>
            <p>That is the difference that costs you money.</p>
          </div>
        </Reveal>
      </div>
    </section>

    <Section title="What independent representation actually means" alt>
      <p>
        When a broker represents you, their loyalty should be to your outcome and nothing else.
        That means going to the full market on your behalf, collecting competing proposals, and
        telling you the honest truth about which provider fits your headcount, your industry, and
        your benefits needs. If the best move is to stay where you are, they tell you that too.
      </p>
      <p>
        That only works if the broker is not quietly steering you toward a former employer or a
        buddy's book of business. The test is simple. Ask how many providers they actively work
        with, and ask where they worked before they became a broker. If the answer is "I came from
        Provider X" and Provider X keeps showing up at the top of every recommendation, you have
        your answer.
      </p>
    </Section>

    <Section title="What a real broker does for you">
      <ul className="space-y-2">
        <Bullet>Goes to market with multiple providers at the same time, not just familiar names</Bullet>
        <Bullet>Turns confusing proposals into a true apples to apples comparison</Bullet>
        <Bullet>Flags hidden fees, contract traps, and renewal risk before you sign</Bullet>
        <Bullet>Negotiates pricing and terms on your behalf</Bullet>
        <Bullet>Stays involved after the deal closes so implementation does not fall apart</Bullet>
      </ul>
      <p>
        The last point matters more than most owners expect. The right broker is a long-term
        watchdog, always in your corner, running quarterly reviews and advocating for you if a
        dispute ever comes up. The relationship should not end the day you sign.
      </p>
    </Section>

    <Section title="Why this matters in Charlotte specifically" alt>
      <p>
        Charlotte's market is growing fast. Finance, healthcare, tech, and professional services
        are all fighting for the same talent, and benefits packages carry more weight than they
        did five years ago. Meanwhile a lot of small and mid sized businesses are still overpaying
        or stuck with coverage that has quietly fallen behind.
      </p>
      <p>
        Knowing which carriers are actually competitive right now, and which providers have strong
        compliance support in North Carolina, is not something you get from a demo call or a
        broker who only sells what their friends are selling.
      </p>
    </Section>

    <Section title="The fee question">
      <p>
        Brokers in this space are compensated by the provider, which means the service is free to
        you as the business owner. That is exactly why the buddy system is so easy to hide. The
        check looks the same to the client no matter who the broker steers them toward. The
        protection is transparency. Work with someone who shows you their compensation structure
        upfront and who has enough real relationships that they are not quietly funneling you to
        one place.
      </p>
      <p>
        At Pillar PEO Advisors the model is Free Forever. The providers pay us, so your savings
        stay intact, and our loyalty stays with you because we are not feeding business back to an
        old sales floor.
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
      <p>
        The answers tell you whether you are talking to a real advocate or a referral pipeline
        back to someone's old team.
      </p>
    </Section>

    <Section title="See what your options actually look like">
      <p>
        Pillar PEO Advisors is based in Charlotte and works with businesses across the Carolinas.
        We are independent, which means our only job is to find you the right fit. Start with a
        free consultation and we will give you a straightforward read on your situation.
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

    <ArticleAuthorBio />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">
            Get a Charlotte-based broker who actually works for you.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Independent, transparent, and free forever. We shop the full market and stay on as
            your long-term watchdog.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule a PEO Strategy Call
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default PeoBrokerCharlotteNc;
