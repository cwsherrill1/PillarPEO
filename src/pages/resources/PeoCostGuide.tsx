import { BOOKING_URL } from "@/data/pricing";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import { ArticleByline, ArticleAuthorBio, buildArticleJsonLd } from "@/components/ArticleByline";
import { PricingModelsCompare } from "@/components/ArticleDiagrams";



const faqs = [
  { q: "How much does a PEO cost per employee?", a: "Most PEOs charge between $80 and $200 per employee per month (PEPM) on a flat-fee model, or 2%–6% of total payroll on a percentage model. The wide range reflects differences in service level, benefits, workers' comp risk class, and the size of your workforce." },
  { q: "Are PEO fees cheaper than hiring in-house HR?", a: "For most companies between 5 and 100 employees, yes. The breakeven is roughly when you'd otherwise need a full-time HR generalist plus a payroll specialist plus broker fees for benefits, typically around 50–75 employees, depending on complexity." },
  { q: "Do PEOs charge setup or implementation fees?", a: "Some do, some don't. Setup fees range from $0 to $1,500 per employee, often waived during competitive deals. Always ask whether the fee is being absorbed or simply moved into your monthly rate." },
  { q: "Why did my PEO renewal price go up so much?", a: "Three usual culprits: the underlying health plan renewed higher, your workers' comp loss ratio worsened, or the PEO raised its administrative fee. Ask for a line-item breakdown: the increase is rarely uniform across all components." },
  { q: "Can I negotiate PEO pricing?", a: "Yes, especially with multiple competing quotes in hand. PEOs expect to negotiate on admin fees, implementation fees, and benefit contribution structures. They rarely negotiate on workers' comp or carrier-set premiums." },
  { q: "What's the cheapest PEO?", a: "There isn't a single cheapest PEO: pricing depends on your industry, state, payroll size, and benefits needs. Tech-friendly providers like Justworks and Rippling tend to look cheaper for low-claims workforces; traditional providers like ADP TotalSource or Insperity may price better for higher-risk industries due to better workers' comp pooling." },
];

const ARTICLE = buildArticleJsonLd({
  title: "How Much Does a PEO Cost in 2026? Real Pricing Breakdown",
  description: "PEO cost guide: real pricing models, hidden fees, renewal increases, and how to compare quotes from ADP, Insperity, Justworks, Rippling, and more.",
  path: "/resources/peo-cost-guide",
  datePublished: "2026-05-15",
  dateModified: "2026-09-05",
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

const PeoCostGuide = () => (
  <>
    <SEOHead
      title="How Much Does a PEO Cost in 2026?"
      fullTitle
      description="Real PEO pricing in 2026: pricing models, hidden fees, renewal increases, and how to compare quotes from the major providers."
      jsonLd={{ "@context": "https://schema.org", "@graph": [ARTICLE["@graph"][0], ARTICLE["@graph"][1], FAQ_JSONLD] }}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Cost Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            How Much Does a PEO Cost
            <span className="text-accent"> in 2026?</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Real pricing ranges, hidden fees, renewal increases, and how to compare quotes apples-to-apples.
          </p>
        </Reveal>
        <Reveal delay={150}><ArticleByline datePublished="May 15, 2026" /></Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Get a Real Quote Comparison</a>
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
            Most published "PEO cost" articles are written by PEOs trying to sell you something, or by SEO sites guessing at numbers. This one is written by an independent broker who sees real quotes from ADP TotalSource, Insperity, Justworks, Rippling, TriNet, Paychex, and dozens of regional PEOs every month. Here's what PEOs cost in 2026, what's negotiable, and what you should never pay extra for.
          </p>
        </Reveal>
      </div>
    </section>

    <Section title="The Two Pricing Models: And Which Is Better for You" alt>
      <p>Every PEO uses one of two models (or a hybrid):</p>
      <PricingModelsCompare />

      <Card className="mt-2 border-accent/20"><CardContent className="p-6">
        <h3 className="font-heading font-700 text-foreground">1. Per Employee Per Month (PEPM)</h3>
        <p className="mt-2 text-sm text-muted-foreground"><strong>Range:</strong> $80–$200/employee/month for the admin fee alone, before benefits and workers' comp. <strong>Best for:</strong> stable headcount, higher-wage workforces, and companies that want predictable budgeting. Most modern PEOs (Justworks, Rippling, Gusto's PEO, TriNet) lead with this.</p>
      </CardContent></Card>
      <Card className="mt-3 border-accent/20"><CardContent className="p-6">
        <h3 className="font-heading font-700 text-foreground">2. Percentage of Payroll</h3>
        <p className="mt-2 text-sm text-muted-foreground"><strong>Range:</strong> 2%–6% of gross payroll. <strong>Best for:</strong> lower-wage workforces where 2%–4% of a $35K salary beats $150 PEPM. Common with ADP TotalSource and Insperity for blue-collar industries.</p>
      </CardContent></Card>
      <p className="mt-4">For example, a 25-person company at $65K average salary pays roughly $45,000/year on PEPM ($150 × 25 × 12) or $40,625/year on a 2.5% percentage model. The cheaper option flips at higher salaries: always model both.</p>
    </Section>

    <Section title="What Is Bundled Into That Number">
      <p>The headline rate usually includes:</p>
      <ul className="space-y-2">
        {["Payroll processing and tax filing (federal, state, local)", "W-2 and 1099 preparation", "HR support line and basic compliance guidance", "Online HR platform / employee self-service", "Onboarding workflows and document management", "Workers' comp policy administration"].map((t) => <Bullet key={t}>{t}</Bullet>)}
      </ul>
      <p className="mt-4">The headline rate usually <em>does not</em> include:</p>
      <ul className="space-y-2">
        {["Health, dental, vision premiums (passed through at carrier rate)", "Workers' comp premiums (often a separate line item)", "401(k) plan administration ($4–$8/participant/month is common)", "EPLI insurance ($300–$1,500/year add-on)", "Per-state registration and SUTA management fees ($50–$150/state)", "Implementation/setup fee ($0–$1,500/employee)", "Premium HR consulting or dedicated account management"].map((t) => <Bullet key={t}>{t}</Bullet>)}
      </ul>
    </Section>

    <Section title="Real Pricing Ranges by Provider Type" alt>
      <p>These are the bands we typically see in 2026 quotes; your actual number depends on industry, state, headcount, and benefits selection.</p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-foreground">
            <tr>
              <th className="px-3 py-2 text-left font-heading">Provider tier</th>
              <th className="px-3 py-2 text-left font-heading">Typical PEPM admin fee</th>
              <th className="px-3 py-2 text-left font-heading">Best fit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-3 py-2">Modern tech PEOs (Justworks, Rippling, Gusto)</td><td className="px-3 py-2">$80–$130</td><td className="px-3 py-2">5–75 employees, white-collar</td></tr>
            <tr><td className="px-3 py-2">National traditional (ADP TotalSource, Insperity, TriNet)</td><td className="px-3 py-2">$130–$200</td><td className="px-3 py-2">25–500 employees, multi-state</td></tr>
            <tr><td className="px-3 py-2">Regional/specialty PEOs</td><td className="px-3 py-2">$90–$180</td><td className="px-3 py-2">Industry-specific or high-touch</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm">Note: These exclude benefits and workers' comp, which are often the larger line items.</p>
    </Section>

    <Section title="The Renewal Trap (Where Most Employers Get Burned)">
      <p>Year one is the bait. Year two is where PEOs make their margin back. Average annual renewal increase across the industry: <strong className="text-foreground">8%–18%</strong>, mostly driven by health plan renewals.</p>
      <p>Three questions to ask before signing:</p>
      <ul className="space-y-2">
        <Bullet>"What was your average client renewal increase the last three years?"</Bullet>
        <Bullet>"Is my admin fee locked for year one, or for the term of the agreement?"</Bullet>
        <Bullet>"What notice am I required to give to non-renew, and when does that window open?"</Bullet>
      </ul>
      <p className="mt-4">If they can't answer #1 with a number, that's the answer.</p>
    </Section>

    <Section title="How a Broker Saves You Money (Without Costing You Anything)" alt>
      <p>Independent PEO brokers like Pillar are paid by the PEO you ultimately choose, at the same rate the PEO would have spent on its own sales team. You don't pay extra. What you get:</p>
      <ul className="space-y-2">
        <Bullet>Quotes from 3–5 PEOs on a normalized scope (so you're comparing the same thing)</Bullet>
        <Bullet>Honest comparison of admin fee, benefits, workers' comp, and renewal history</Bullet>
        <Bullet>Negotiated waiver of implementation fees and locked admin rates</Bullet>
        <Bullet>An advocate at renewal who isn't the same person who sold you</Bullet>
      </ul>
      <p className="mt-4">More on this in our <Link to="/resources/peo-broker-vs-direct" className="text-green-ink hover:underline">PEO broker vs. going direct</Link> guide.</p>
    </Section>

    <Section title="How to Compare Quotes Accurately">
      <p>Comparing PEO quotes is harder than it looks because providers use different structures. To make an apples-to-apples comparison:</p>
      <ul className="space-y-2">
        <Bullet>Ask every provider to quote on the same scope of services</Bullet>
        <Bullet>Separate the administrative fee from the benefits cost from the workers' comp cost</Bullet>
        <Bullet>Model out cost at current headcount, then at 20% growth</Bullet>
        <Bullet>Ask for a multi-year projection, since year-one pricing rarely holds</Bullet>
        <Bullet>Factor in the implementation or onboarding fee: some waive it, some don't</Bullet>
      </ul>
      <p className="mt-4">What's often priced separately, and belongs in the comparison: 401(k) administration fees, SUTA management fees, EPLI, implementation fees, per-state registration fees for multi-state employers, and premium support tiers.</p>
    </Section>

    <Section title="What a Fair Deal Looks Like" alt>
      <p>A reasonable PEO relationship should deliver:</p>
      <ul className="space-y-2">
        <Bullet>Transparent pricing with clear line-item breakdowns</Bullet>
        <Bullet>A named contact with a defined response SLA</Bullet>
        <Bullet>Competitive benefits that employees perceive as better than before</Bullet>
        <Bullet>Clear renewal terms with reasonable notice windows</Bullet>
        <Bullet>A clean exit process if the relationship doesn't work out</Bullet>
      </ul>
      <p className="mt-4 font-semibold text-foreground">If a PEO can't give you clarity on all five before you sign, that's a red flag, not a reason to move faster.</p>
    </Section>



    <Section title="Frequently Asked PEO Cost Questions">
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
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">See real PEO quotes for your company.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">We'll collect your data once, send it to multiple PEOs, and bring back normalized quotes so you can compare.</p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Compare PEOs, free</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default PeoCostGuide;
