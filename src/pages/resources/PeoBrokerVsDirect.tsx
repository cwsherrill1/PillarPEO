import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import { ArticleByline, ArticleAuthorBio, buildArticleJsonLd } from "@/components/ArticleByline";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const faqs = [
  { q: "Does using a PEO broker cost more than going direct?", a: "No. PEOs build sales-channel commissions into their pricing whether you have a broker or not. When you go direct, that commission goes to the PEO's internal sales rep. When you use a broker, the same commission funds independent representation. Your fee is the same either way." },
  { q: "How does a PEO broker get paid?", a: "PEO brokers are paid by the PEO once a client is placed and goes live. Compensation is typically a percentage of administrative fees, sometimes with a small renewal residual. Reputable brokers disclose this upfront and don't take per-PEO bonuses that would skew recommendations." },
  { q: "Can a broker get me a better price than going direct?", a: "Often, yes. Brokers compare 3–5 PEO quotes side-by-side, normalize the scope, and negotiate setup fees, locked admin rates, and benefit contribution structures. Going direct, you're negotiating against a single salesperson with no leverage." },
  { q: "Do brokers represent every PEO?", a: "No broker has every PEO. An independent broker keeps appointments with a set of vetted providers covering the relevant market segments, and shortlists from that set based on your headcount, states and benefits needs. Ask any broker which providers they can actually quote before you start. Avoid 'brokers' who only represent one PEO: they're functionally a sales rep." },
  { q: "What's the downside of using a broker?", a: "Two real risks: (1) some brokers chase the highest commission rather than the best fit — vet them by asking which PEOs they've placed clients with this year; (2) some brokers disappear after the sale — confirm renewal advocacy is part of the engagement." },
  { q: "Should I get quotes from PEOs directly AND a broker?", a: "It can backfire. PEOs use a 'first-touch' rule — whoever quoted you first 'owns' the deal. If you call ADP TotalSource directly and then come to a broker, the broker often can't quote ADP for you anymore. Pick a path early." },
];

const ARTICLE = buildArticleJsonLd({
  title: "PEO Broker vs. Going Direct: Which Saves More?",
  description: "PEO broker vs. going direct — how brokers get paid, what changes in your fees, and when each path actually saves you money. An independent broker's honest take.",
  path: "/resources/peo-broker-vs-direct",
  datePublished: "2026-05-15",
  dateModified: "2026-09-05",
});

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const Section = ({ title, children, alt = false }: { title: string; children: React.ReactNode; alt?: boolean }) => (
  <section className={alt ? "bg-muted/30 py-20 md:py-28" : "py-20 md:py-28"}>
    <div className="container max-w-3xl">
      <Reveal>
        <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">{title}</h2>
        <div className="mt-4 space-y-4 text-lg leading-8 text-foreground/85">{children}</div>
      </Reveal>
    </div>
  </section>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span>{children}</span></li>
);

const PeoBrokerVsDirect = () => (
  <>
    <SEOHead
      title="PEO Broker vs. Going Direct: Which Saves More?"
      fullTitle
      description="How PEO brokers get paid, what your fee really looks like, and when going direct beats using a broker. An independent broker's view."
      jsonLd={{ "@context": "https://schema.org", "@graph": [ARTICLE["@graph"][0], ARTICLE["@graph"][1], FAQ_JSONLD] }}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Comparison</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            PEO Broker vs. Going Direct:
            <span className="text-accent"> Which Saves More?</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            How brokers get paid, what changes in your fee, and when each path is actually right.
          </p>
        </Reveal>
        <Reveal delay={150}><ArticleByline datePublished="May 15, 2026" /></Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Talk to a PEO Broker</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <Link to="/resources" className="mb-8 inline-flex items-center text-sm font-semibold text-green-ink hover:text-green-ink/80">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources
          </Link>
          <p className="text-xl leading-8 text-foreground/85">
            We're a PEO broker. So take this with appropriate skepticism — but we're also going to be honest about when going direct makes more sense than using us. Here's how the economics actually work, what brokers do that PEOs won't, and the situations where you should skip the broker entirely.
          </p>
        </Reveal>
      </div>
    </section>

    <Section title="The Pricing Myth: 'Going Direct Is Cheaper'" alt>
      <p>It isn't. Every major PEO — ADP TotalSource, Insperity, TriNet, Justworks, Rippling, Paychex — builds a sales-channel commission into their pricing model. That commission is paid whether the deal closed through their internal rep or an external broker. Your monthly fee is identical.</p>
      <p>The difference is who that commission funds. Direct: the PEO's W-2 sales rep, whose only job is to close you. Broker: an independent advisor whose ongoing income depends on you staying happy enough to re-up.</p>
    </Section>

    <Section title="Side-by-Side: Broker vs. Direct">
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-foreground">
            <tr>
              <th className="px-3 py-2 text-left font-heading">Capability</th>
              <th className="px-3 py-2 text-left font-heading">PEO Broker</th>
              <th className="px-3 py-2 text-left font-heading">Going Direct</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-3 py-2">Quotes you'll see</td><td className="px-3 py-2">3–5 normalized</td><td className="px-3 py-2">1 (the one you called)</td></tr>
            <tr><td className="px-3 py-2">Apples-to-apples comparison</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">No — different scopes</td></tr>
            <tr><td className="px-3 py-2">Negotiation leverage</td><td className="px-3 py-2">High (competitive bid)</td><td className="px-3 py-2">Low</td></tr>
            <tr><td className="px-3 py-2">Renewal advocacy</td><td className="px-3 py-2">Yes — ongoing</td><td className="px-3 py-2">None</td></tr>
            <tr><td className="px-3 py-2">Cost to you</td><td className="px-3 py-2">$0 extra</td><td className="px-3 py-2">$0 extra</td></tr>
            <tr><td className="px-3 py-2">Time investment</td><td className="px-3 py-2">~3 hours total</td><td className="px-3 py-2">~3 hours per PEO</td></tr>
          </tbody>
        </table>
      </div>
    </Section>

    <Section title="When Going Direct Actually Makes Sense" alt>
      <p>Honest take — there are two scenarios where you should skip a broker:</p>
      <ul className="space-y-2">
        <Bullet><strong className="text-foreground">You already know exactly which PEO you want.</strong> If you're a 12-person tech startup convinced Justworks is the right answer, calling them direct is fine. A broker won't add much.</Bullet>
        <Bullet><strong className="text-foreground">You're under 5 employees on a self-service product (not a real PEO).</strong> Gusto's payroll, Justworks Basic, Rippling EOR — these are SaaS products, not full PEO relationships. Broker value is minimal.</Bullet>
      </ul>
      <p>For everything else — multiple states, 10+ employees, real benefits requirements, contract terms that matter — competing quotes saves more than going direct. Every time.</p>
    </Section>

    <Section title="How to Vet a PEO Broker">
      <p>Not all brokers are created equal. Five questions to ask:</p>
      <ul className="space-y-2">
        <Bullet>"How many PEOs have you placed clients with in the last 12 months?" (A real broker should name 5+)</Bullet>
        <Bullet>"Do you take per-PEO incentive bonuses?" (Should be no — flat commission only)</Bullet>
        <Bullet>"What's your renewal involvement?" (Should be active — not 'call us if you have an issue')</Bullet>
        <Bullet>"What happens if I'm unhappy with the PEO you placed me with?" (Should offer to broker the move)</Bullet>
        <Bullet>"How are you compensated, in plain English?" (Should be a clear, simple answer)</Bullet>
      </ul>
      <p className="mt-4">For more on choosing well, see our <Link to="/resources/5-questions" className="text-green-ink hover:underline">5 Questions to Ask Any PEO</Link> checklist.</p>
    </Section>

    <Section title="Frequently Asked Questions" alt>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`q${i}`}>
            <AccordionTrigger className="text-left font-heading font-700 text-foreground">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>

    <ArticleAuthorBio />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">Get competing PEO quotes — at no extra cost.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">One conversation, one data submission, multiple PEO quotes back. We negotiate, normalize, and stay with you through renewal.</p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Schedule a PEO Strategy Call</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default PeoBrokerVsDirect;
