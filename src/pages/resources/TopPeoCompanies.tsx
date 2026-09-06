import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import { ArticleByline, ArticleAuthorBio, buildArticleJsonLd } from "@/components/ArticleByline";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const tiers = [
  {
    tier: "National Tier-1 PEOs",
    desc: "Largest by client count and revenue. Multi-state coverage, deep workers' comp pools, mature compliance teams. Best for 25+ employee companies with complex needs.",
    list: ["ADP TotalSource", "Insperity", "TriNet", "Paychex PEO"],
  },
  {
    tier: "Modern / Tech-Forward PEOs",
    desc: "Cleaner platforms, transparent pricing, fast onboarding. Best for 5–100 employee companies that prioritize software UX and integrated tooling.",
    list: ["Justworks", "Rippling PEO", "Gusto PEO", "Sequoia One"],
  },
  {
    tier: "Industry-Vertical & Regional PEOs",
    desc: "Specialty providers with deep expertise in specific industries (healthcare, construction, hospitality, faith-based) or regional markets. Often the best value when their vertical matches yours.",
    list: ["Oasis (a Paychex Company)", "CoAdvantage", "Engage PEO", "Vensure HR", "Plus dozens of regional providers"],
  },
];

const faqs = [
  { q: "What are the largest PEO companies in the US?", a: "By client count and revenue, the top PEOs are ADP TotalSource, Insperity, TriNet, Paychex PEO, and TotalSource. Modern players Justworks, Rippling, and Gusto PEO have grown rapidly in the 5–100 employee segment over the past five years." },
  { q: "What's the difference between a tier-1 PEO and a regional PEO?", a: "Tier-1 PEOs have national reach, larger benefit pools, and standardized processes — but less flexibility. Regional or industry-vertical PEOs often deliver better service, sharper pricing in their niche, and more responsive account management — but limited geographic coverage and smaller benefit pools." },
  { q: "Are NAPEO-certified PEOs better?", a: "NAPEO membership signals industry participation, but the more meaningful certification is IRS Certified PEO (CPEO). CPEO status protects clients on payroll tax liability — if the PEO fails to remit, the IRS pursues the PEO, not the client. Always confirm CPEO status before signing." },
  { q: "Should I pick a PEO based on revenue ranking?", a: "No. Revenue ranking tells you who's biggest, not who's best for you. A 25-person professional services firm in Texas will get a better outcome from the right regional PEO than from being a small fish at TriNet. Fit beats size." },
  { q: "How many PEO companies are there in the US?", a: "Roughly 500 PEOs operate in the United States, serving an estimated 200,000+ small and mid-sized businesses covering ~4 million worksite employees (NAPEO). Of those, fewer than 100 are CPEO-certified." },
];

const ARTICLE = buildArticleJsonLd({
  title: "Top PEO Companies in 2026: Independent Comparison",
  description: "The top PEO companies in 2026 by category — national tier-1, modern tech-forward, and industry-vertical providers. Independent broker analysis of who fits whom.",
  path: "/resources/top-peo-companies",
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

const TopPeoCompanies = () => (
  <>
    <SEOHead
      title="Top PEO Companies in 2026: Independent Comparison"
      description="The top PEO companies in 2026, grouped by category — national tier-1, modern tech-forward, and industry-vertical providers. Independent broker analysis of fit, strengths, and how to choose."
      jsonLd={{ "@context": "https://schema.org", "@graph": [ARTICLE["@graph"][0], ARTICLE["@graph"][1], FAQ_JSONLD] }}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">2026 Industry Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Top PEO Companies
            <span className="text-accent"> in 2026</span>
          </h1>
        </Reveal>
        <Reveal delay={100}><p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">An independent broker's view of the top PEOs by category — national, modern, and industry-vertical — and how to know which fits.</p></Reveal>
        <Reveal delay={150}><ArticleByline datePublished="May 15, 2026" /></Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Find Your PEO Match</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <Link to="/resources" className="mb-8 inline-flex items-center text-sm font-semibold text-green-ink hover:text-green-ink/80"><ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources</Link>
          <p className="text-xl leading-8 text-foreground/85">
            There are roughly 500 PEOs in the United States. Most "top PEO" rankings are based on revenue, sponsorship, or whoever paid for placement. This guide groups the providers by category and use case so you can quickly see which tier matches your company — then narrow from there. We don't take fees from any provider for being listed.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal><h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">The Three Tiers of PEOs</h2></Reveal>
        <div className="mt-8 space-y-8">
          {tiers.map((t) => (
            <Reveal key={t.tier}>
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h3 className="font-heading text-xl font-700 text-foreground">{t.tier}</h3>
                <p className="mt-3 text-lg leading-8 text-foreground/85">{t.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.list.map((p) => (
                    <Badge key={p} variant="outline" className="border-accent/30 text-foreground">{p}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <Section title="How to Pick the Right Tier for Your Company">
      <ul className="space-y-3">
        <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Under 25 employees, single-state, white-collar:</strong> Modern PEOs (Justworks, Gusto, Rippling) are usually the best price-to-quality ratio.</span></li>
        <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">25–250 employees, multi-state, complex benefits:</strong> National tier-1 (ADP TotalSource, Insperity, TriNet) typically offer the deepest benefits and most mature compliance.</span></li>
        <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Higher-risk industry (construction, manufacturing, healthcare):</strong> A regional or industry-vertical PEO often beats the nationals on workers' comp pricing.</span></li>
        <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Mission-driven or faith-based:</strong> Look at vertical providers with nonprofit experience. See our <Link to="/industries/nonprofits" className="text-green-ink hover:underline">PEO for nonprofits guide</Link>.</span></li>
      </ul>
    </Section>

    <Section title="What 'CPEO Certified' Actually Means" alt>
      <p>CPEO (Certified Professional Employer Organization) is an IRS designation under the Small Business Efficiency Act of 2014. A CPEO has met financial reporting, bonding, and tax compliance requirements — and clients are protected from payroll tax liability if the PEO fails to remit.</p>
      <p>Fewer than 100 of the ~500 PEOs in the US are CPEO-certified. <strong className="text-foreground">For most employers, CPEO status should be a hard requirement.</strong> Always verify on the <a href="https://www.irs.gov/tax-professionals/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer" className="text-green-ink hover:underline">IRS CPEO list</a> before signing.</p>
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
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">500 PEOs. We'll narrow it to 3.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">Tell us about your company in 20 minutes — we'll come back with the 3 PEOs most likely to fit and run quotes for you.</p>
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

export default TopPeoCompanies;
