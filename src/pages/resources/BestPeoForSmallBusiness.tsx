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

const providers = [
  { name: "Justworks", fit: "5–75 employees, white-collar, single-state or 2–3 states", strengths: "Clean platform, transparent flat-rate PEPM, fast onboarding, strong basic benefits", watchouts: "Fewer benefit plan tiers; admin fee scales linearly with headcount; less customization", price: "$99–$149 PEPM" },
  { name: "Rippling PEO", fit: "Tech-forward 10–200 employee companies that want unified IT + HR", strengths: "Best-in-class platform, IT/device management included, fast multi-state expansion", watchouts: "Higher TCO when you add modules; benefits depth varies by state; newer at PEO than payroll", price: "$110–$170 PEPM" },
  { name: "ADP TotalSource", fit: "25–500+ employees, blue-collar or multi-industry, complex multi-state", strengths: "Enormous scale, deep workers' comp pooling, mature compliance, broad benefits", watchouts: "Higher base rate, more rigid contracts, sales-led account experience", price: "Often quoted on % of payroll, ~3%–5%" },
  { name: "Insperity", fit: "20–250 employees, white-collar professional services, growth-stage", strengths: "High-touch service model, strong HR consulting, premium training/development", watchouts: "Premium pricing, contracts can be sticky at renewal", price: "$150–$200 PEPM" },
  { name: "TriNet", fit: "Industry-vertical PEOs (tech, financial services, life sciences, nonprofits)", strengths: "Deep vertical expertise, strong benefits in target industries, established brand", watchouts: "Per-vertical pricing varies widely, some legacy platform friction", price: "$130–$190 PEPM" },
  { name: "Gusto PEO", fit: "Smallest end (5–40), already on Gusto payroll, want a soft step up", strengths: "Easy upgrade path from Gusto Plus, simple UI, transparent pricing", watchouts: "Newest of the major PEOs; benefits not yet as deep as legacy providers", price: "Starts ~$95 PEPM" },
];

const faqs = [
  { q: "What is the best PEO for a small business in 2026?", a: "There is no single 'best' PEO — the right one depends on your headcount, industry, states, benefits priorities, and budget. For 5–40 white-collar employees, Justworks and Gusto PEO usually price best. For 25–250 employees with complex needs or high-risk industries, ADP TotalSource and Insperity often win on benefits depth and workers' comp pooling. Rippling tends to win when IT integration matters." },
  { q: "What size company should use a PEO?", a: "PEOs typically make economic sense between 5 and 250 employees. Below 5, a basic payroll service is more cost-effective. Above 250, many companies build internal HR and benefits brokerage. The sweet spot is 10–100 employees who want Fortune-500 benefits and offloaded compliance." },
  { q: "Do PEOs work for remote-first companies?", a: "Yes — and they're often essential. The moment you hire in 3+ states, multi-state registration, SUTA management, and state-specific labor compliance get expensive. PEOs handle all of that under their EIN. Justworks, Rippling, and TriNet all have strong remote-first offerings." },
  { q: "Are PEOs only for tech startups?", a: "No. PEOs serve construction, manufacturing, nonprofits, professional services, healthcare, restaurants, and most other industries. Workers' comp pooling is actually most valuable for higher-risk industries — they often see the biggest cost savings vs. buying coverage independently." },
  { q: "How long does it take to onboard a PEO?", a: "60–90 days from signed agreement to first payroll for most providers. Faster options (Gusto, Justworks for very small groups) can do 30–45 days. Larger or multi-state implementations can stretch to 120 days. See our PEO implementation guide for the full timeline." },
];

const ARTICLE = buildArticleJsonLd({
  title: "Best PEO for Small Business: A Broker's 2026 Comparison",
  description: "Independent broker comparison of the best PEOs for small business in 2026 — Justworks, Rippling, ADP TotalSource, Insperity, TriNet, Gusto.",
  path: "/resources/best-peo-for-small-business",
  datePublished: "2026-05-15",
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

const BestPeoForSmallBusiness = () => (
  <>
    <SEOHead
      title="Best PEO for Small Business: A Broker's 2026 Comparison"
      description="Independent comparison of the best PEOs for small business in 2026 — Justworks, Rippling, ADP TotalSource, Insperity, TriNet, Gusto. Real pricing, fit, and watchouts from a broker who quotes them every week."
      jsonLd={{ "@context": "https://schema.org", "@graph": [ARTICLE["@graph"][0], ARTICLE["@graph"][1], FAQ_JSONLD] }}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">2026 Comparison</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Best PEO for Small Business
            <span className="text-accent"> — A Broker's 2026 Comparison</span>
          </h1>
        </Reveal>
        <Reveal delay={100}><p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">Six top PEOs compared by an independent broker who quotes them every week. Real fit, real pricing, real watchouts.</p></Reveal>
        <Reveal delay={150}><ArticleByline datePublished="May 2026" /></Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Get Quotes From the Right 3</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <Link to="/resources" className="mb-8 inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80"><ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources</Link>
          <p className="text-xl leading-8 text-foreground/85">
            "Best PEO" lists written by PEOs are useless — they always conclude with whoever paid for the listicle. This one is written by an independent broker who has no quota with any of these providers and gets paid the same regardless of which one you pick. Below is what we actually see when employers compare these six in 2026.
          </p>
        </Reveal>
      </div>
    </section>

    <Section title="The Short Answer" alt>
      <p>If you want to skip the comparisons:</p>
      <ul className="space-y-2 mt-2">
        <li className="flex gap-2"><span className="text-accent font-bold">→</span><span><strong className="text-foreground">5–25 employees, white-collar, simple:</strong> Justworks or Gusto PEO</span></li>
        <li className="flex gap-2"><span className="text-accent font-bold">→</span><span><strong className="text-foreground">Tech-forward, multi-state, want IT integration:</strong> Rippling</span></li>
        <li className="flex gap-2"><span className="text-accent font-bold">→</span><span><strong className="text-foreground">25–250 employees, premium HR consulting:</strong> Insperity</span></li>
        <li className="flex gap-2"><span className="text-accent font-bold">→</span><span><strong className="text-foreground">Higher-risk industry, complex workers' comp:</strong> ADP TotalSource</span></li>
        <li className="flex gap-2"><span className="text-accent font-bold">→</span><span><strong className="text-foreground">Vertical-specific (tech, life sciences, nonprofit):</strong> TriNet</span></li>
      </ul>
    </Section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal><h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">Provider-by-Provider Breakdown</h2></Reveal>
        <div className="mt-8 space-y-6">
          {providers.map((p) => (
            <Reveal key={p.name}>
              <Card className="border-accent/20">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading text-xl font-700 text-foreground">{p.name}</h3>
                    <Badge variant="outline" className="border-accent/30 text-accent">{p.price}</Badge>
                  </div>
                  <p className="mt-3 text-sm"><strong className="text-foreground">Best fit:</strong> <span className="text-muted-foreground">{p.fit}</span></p>
                  <p className="mt-2 text-sm"><strong className="text-foreground">Strengths:</strong> <span className="text-muted-foreground">{p.strengths}</span></p>
                  <p className="mt-2 text-sm"><strong className="text-foreground">Watchouts:</strong> <span className="text-muted-foreground">{p.watchouts}</span></p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <Section title="What Actually Drives Cost Differences" alt>
      <p>The headline PEPM rate is the smallest part of the comparison. The bigger swings come from:</p>
      <ul className="space-y-2">
        <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Workers' comp class & pool:</strong> Same job, same state can vary 30%+ between PEOs depending on each pool's loss ratio.</span></li>
        <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Health plan demographics:</strong> Each PEO's master plan reprices based on your census. Older or family-heavy workforces can swing $200+ per employee per month.</span></li>
        <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Implementation fees:</strong> $0 to $1,500/employee. Always negotiable.</span></li>
        <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">401(k) admin:</strong> Some PEOs include it; others charge $4–$8/participant/month on top.</span></li>
      </ul>
      <p className="mt-4">See our full <Link to="/resources/peo-cost-guide" className="text-accent hover:underline">PEO cost guide</Link> for the math.</p>
    </Section>

    <Section title="Frequently Asked Questions">
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
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">Skip the 12-PEO sales gauntlet.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">We'll narrow your list to the 3 PEOs most likely to fit, run quotes side by side, and tell you what we'd pick if it were our company.</p>
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

export default BestPeoForSmallBusiness;
