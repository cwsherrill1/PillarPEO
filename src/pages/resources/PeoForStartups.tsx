import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import { ArticleByline, ArticleAuthorBio, buildArticleJsonLd } from "@/components/ArticleByline";
import heroImg from "@/assets/blog/startups-hero.jpg";
import { ArticleHero } from "@/components/ArticleHero";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const faqs = [
  { q: "When should a startup get a PEO?", a: "Most venture-backed startups benefit from a PEO between 5 and 75 employees — early enough to avoid building HR infrastructure in-house, late enough that benefits actually matter for recruiting. Pre-seed companies under 5 people are usually fine on Gusto or Justworks' non-PEO payroll." },
  { q: "Can a PEO handle multi-state employees and remote teams?", a: "Yes — this is one of the strongest reasons startups pick a PEO. The PEO becomes the employer of record for state tax registration, SUTA, workers' comp, and compliance in every state you have employees. Without it, you're registering in each state yourself, which is expensive and slow." },
  { q: "Will a PEO mess up my equity grants or 409A?", a: "No. Equity, stock options, and 409A valuations are issued by your company directly — the PEO only touches W-2 payroll. Some PEOs (Rippling, Justworks) integrate with Carta or Pulley to make ISO/NSO tax handling cleaner." },
  { q: "Do investors care if we use a PEO?", a: "Most VCs prefer it. A PEO reduces compliance risk during diligence and signals operational maturity. The only friction is a brief due-diligence question about co-employment, easily explained." },
  { q: "What's the best PEO for a tech startup?", a: "Justworks and Rippling lead for sub-100-employee tech startups due to clean UX, strong benefits, and modern integrations. TriNet has a strong life-sciences and tech vertical. We compare all of them in our best PEO for small business guide." },
  { q: "Can we leave a PEO when we get acquired or hit 200 employees?", a: "Yes — most PEO contracts allow exit with 30–90 days notice at any anniversary. The bigger question is timing: leaving mid-year resets your FICA/FUTA wage bases, which costs real money. Plan exits for January 1 whenever possible." },
];

const ARTICLE = buildArticleJsonLd({
  title: "PEO for Startups: Equity, Multi-State, and Scaling Compliance",
  description: "Why startups use a PEO — multi-state compliance, benefits that recruit, equity-friendly payroll, and exit timing. An independent broker's guide.",
  path: "/resources/peo-for-startups",
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

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span>{children}</span></li>
);

const PeoForStartups = () => (
  <>
    <SEOHead
      title="PEO for Startups: Equity, Multi-State & Scaling Compliance"
      description="Why startups use a PEO — multi-state compliance, recruiting-grade benefits, equity-friendly payroll, and clean exit timing. An independent broker's playbook."
      jsonLd={{ "@context": "https://schema.org", "@graph": [ARTICLE["@graph"][0], ARTICLE["@graph"][1], FAQ_JSONLD] }}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Startup Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            PEO for Startups:
            <span className="text-accent"> The Operator's Playbook</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Multi-state compliance, recruiting-grade benefits, equity-friendly payroll — without building HR in-house.
          </p>
        </Reveal>
        <Reveal delay={150}><ArticleByline datePublished="May 2026" /></Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Get PEO Quotes for Your Startup</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    <ArticleHero src={heroImg} alt="Green ascending arrow over geometric columns, symbolizing startup growth" />

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <Link to="/resources" className="mb-8 inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources
          </Link>
          <p className="text-xl leading-8 text-foreground/85">
            Startups have three problems a PEO solves at once: you can't afford an HR team, you can't recruit without real benefits, and you have employees in five states before you have ten employees. This is what to look for, when to switch, and what to watch out for as you scale toward an acquisition or a Series B.
          </p>
        </Reveal>
      </div>
    </section>

    <Section title="The Three Reasons Startups Use a PEO" alt>
      <Card className="mt-2 border-accent/20"><CardContent className="p-6">
        <h3 className="font-heading font-700 text-foreground">1. Multi-state employer of record</h3>
        <p className="mt-2 text-sm text-muted-foreground">Hire in California, New York, Texas, and Washington in the same week without registering as an employer in any of them. The PEO is the registered employer; you just hire.</p>
      </CardContent></Card>
      <Card className="mt-3 border-accent/20"><CardContent className="p-6">
        <h3 className="font-heading font-700 text-foreground">2. Fortune-500 benefits at startup scale</h3>
        <p className="mt-2 text-sm text-muted-foreground">A 12-person startup gets the same Aetna, BCBS, or Kaiser plans normally reserved for 1,000+ employee companies — because you're pooled with thousands of other PEO clients.</p>
      </CardContent></Card>
      <Card className="mt-3 border-accent/20"><CardContent className="p-6">
        <h3 className="font-heading font-700 text-foreground">3. Compliance you don't have to think about</h3>
        <p className="mt-2 text-sm text-muted-foreground">I-9s, EEO-1, ACA filings, state-mandated leave laws, posters, harassment training — handled. One missed Cal-OSHA filing costs more than a year of PEO fees.</p>
      </CardContent></Card>
    </Section>

    <Section title="When to Sign Up (And When to Wait)">
      <p>Rough framework based on what we see work:</p>
      <ul className="space-y-2">
        <Bullet><strong className="text-foreground">Under 5 employees, single state:</strong> stay on Gusto or Justworks Basic. A full PEO is overkill.</Bullet>
        <Bullet><strong className="text-foreground">5–15 employees, multi-state OR raising a seed:</strong> move to a PEO. Benefits become a recruiting weapon.</Bullet>
        <Bullet><strong className="text-foreground">15–75 employees:</strong> the sweet spot. Maximum leverage from a PEO before in-house HR makes economic sense.</Bullet>
        <Bullet><strong className="text-foreground">75–200 employees:</strong> stay or evaluate ASO/in-house HR. Run the math at every renewal.</Bullet>
        <Bullet><strong className="text-foreground">200+ employees:</strong> usually time to leave the PEO and build internal HR with carrier-direct benefits.</Bullet>
      </ul>
    </Section>

    <Section title="Equity, 409A, and the PEO" alt>
      <p>This trips up almost every founder. Here's the clean version:</p>
      <ul className="space-y-2">
        <Bullet><strong className="text-foreground">Equity grants:</strong> issued by your company. The PEO has nothing to do with them.</Bullet>
        <Bullet><strong className="text-foreground">409A valuations:</strong> done by your valuation firm. Unaffected.</Bullet>
        <Bullet><strong className="text-foreground">ISO exercises:</strong> the PEO handles W-2 reporting and AMT box. Make sure the PEO can handle ISO and ESPP transactions — most modern ones can; some legacy ones can't.</Bullet>
        <Bullet><strong className="text-foreground">Cap table integrations:</strong> Rippling integrates with Carta and Pulley natively. Justworks has clean Carta sync. ADP and Insperity require manual handoff.</Bullet>
      </ul>
    </Section>

    <Section title="What Investors Actually Care About">
      <p>From conversations with diligence teams at Series A and Series B firms:</p>
      <ul className="space-y-2">
        <Bullet>Multi-state compliance is the #1 hidden risk in early-stage acquisitions. PEO eliminates it.</Bullet>
        <Bullet>Co-employment is well-understood at the VC level — no one will be confused. Read our <Link to="/resources/co-employment" className="text-accent hover:underline">co-employment guide</Link> for board-ready talking points.</Bullet>
        <Bullet>Acquirers will sometimes ask the company to leave the PEO before closing, to absorb employees onto their HRIS. Build clean exit terms into your contract from day one.</Bullet>
      </ul>
    </Section>

    <Section title="Exit Planning: How to Leave a PEO Without Losing Money" alt>
      <p>The single biggest hidden cost of leaving a PEO is the <strong className="text-foreground">FICA/FUTA wage base reset</strong>. If you exit mid-year, every employee's Social Security wage base resets to zero with the new employer — costing 6.2% of wages up to $168,600 per high earner. On a 50-person tech team, that can be six figures.</p>
      <p>Three rules:</p>
      <ul className="space-y-2">
        <Bullet>Always exit January 1 if possible.</Bullet>
        <Bullet>Read the notice provision before you sign — many PEOs require 90 days advance notice.</Bullet>
        <Bullet>Have your next benefits stack lined up 60 days before exit so employees never see a gap.</Bullet>
      </ul>
      <p className="mt-4">More on this in our <Link to="/resources/how-to-switch-peos" className="text-accent hover:underline">how to switch PEOs</Link> guide.</p>
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
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">Building the team. Skip the HR overhead.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">We work with venture-backed and bootstrapped startups every week. Get matched with the right PEO for your stage, geography, and benefits goals.</p>
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

export default PeoForStartups;
