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
  { q: "What benefits does a PEO actually provide?", a: "A PEO bundles health, dental, vision, life, disability, 401(k), FSA/HSA, EAP, commuter benefits, and often pet insurance and supplemental coverage. Because the PEO is the employer of record for thousands of clients combined, your small company gets large-group pricing and plan options." },
  { q: "Are PEO health insurance plans cheaper?", a: "Sometimes. The honest answer: PEOs typically beat the small-group market by 5–20% for white-collar workforces and offer richer plan designs (broader networks, lower deductibles). For high-claims industries, the savings can be smaller, but plan quality is almost always better." },
  { q: "Can employees keep their doctors when we move to a PEO?", a: "Usually yes. PEOs offer Aetna, BCBS, Kaiser, UHC, and Cigna in most states: the same major networks employees already use. Always pull the in-network provider lookup before signing so employees see continuity." },
  { q: "Does a PEO offer a 401(k)?", a: "Yes, most PEOs offer either a multiple-employer 401(k) (MEP) or pooled employer plan (PEP), which dramatically reduces fiduciary risk and admin burden. You can also keep your existing 401(k) plan when joining a PEO." },
  { q: "What about workers' comp through a PEO?", a: "PEOs provide workers' comp via their master policy. Premiums are competitive for most industries because risk is pooled across thousands of employers. High-risk industries (construction, manufacturing) sometimes pay more under PEOs and should compare carefully." },
  { q: "Do PEO benefits include things like EAP, mental health, and pet insurance?", a: "Yes, these voluntary and ancillary benefits are one of the underrated reasons to use a PEO. Modern PEOs include Calm, Talkspace, OneMedical, ClassPass, pet insurance, and student-loan repayment platforms that would be too expensive to source individually as a small employer." },
];

const ARTICLE = buildArticleJsonLd({
  title: "PEO Benefits Explained: What You Actually Get",
  description: "PEO benefits explained: health, 401(k), workers' comp, EAP, and ancillary perks. An honest breakdown of what's included, what's better, and where PEOs underdeliver.",
  path: "/resources/peo-benefits",
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

const PeoBenefits = () => (
  <>
    <SEOHead
      title="PEO Benefits Explained: What You Actually Get"
      fullTitle
      description="Health, 401(k), workers' comp, EAP and ancillary benefits: what a PEO delivers, where it shines and where it underdelivers."
      jsonLd={{ "@context": "https://schema.org", "@graph": [ARTICLE["@graph"][0], ARTICLE["@graph"][1], FAQ_JSONLD] }}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Benefits Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            PEO Benefits:
            <span className="text-accent"> What You Actually Get</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Health, retirement, workers' comp, and the perks that recruit. What's bundled, what's better, and what's marketing.
          </p>
        </Reveal>
        <Reveal delay={150}><ArticleByline datePublished="May 15, 2026" /></Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Compare PEO Benefits</a>
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
            "PEO benefits" gets used as a catch-all term, but the actual stack ranges from genuinely impressive (Fortune-500-grade health plans for 12 employees) to ordinary (the same 401(k) you'd get anywhere). Here's an honest breakdown of every category: what's bundled, what's negotiable, and where PEOs actually beat the open market.
          </p>
        </Reveal>
      </div>
    </section>

    <Section title="The Core Benefits Stack" alt>
      <p>Every legitimate PEO offers the following: quality and pricing vary, but the categories are standard:</p>
      <Card className="mt-2 border-accent/20"><CardContent className="p-6">
        <h3 className="font-heading font-700 text-foreground">Health Insurance (Medical, Dental, Vision)</h3>
        <p className="mt-2 text-sm text-muted-foreground">Aetna, BCBS, UHC, Cigna, or Kaiser depending on geography. Multiple plan designs (HMO, PPO, HDHP+HSA). Large-group pricing typically saves 5–20% versus the open small-group market.</p>
      </CardContent></Card>
      <Card className="mt-3 border-accent/20"><CardContent className="p-6">
        <h3 className="font-heading font-700 text-foreground">401(k) Retirement</h3>
        <p className="mt-2 text-sm text-muted-foreground">Multiple Employer Plan (MEP) or Pooled Employer Plan (PEP): significantly reduced fiduciary liability and lower admin fees per participant. Roth, traditional, and safe harbor options.</p>
      </CardContent></Card>
      <Card className="mt-3 border-accent/20"><CardContent className="p-6">
        <h3 className="font-heading font-700 text-foreground">Workers' Compensation</h3>
        <p className="mt-2 text-sm text-muted-foreground">Master policy coverage with pay-as-you-go premium calculation (no annual audit surprises). Typically priced better for low-risk classes; sometimes worse for high-risk.</p>
      </CardContent></Card>
      <Card className="mt-3 border-accent/20"><CardContent className="p-6">
        <h3 className="font-heading font-700 text-foreground">Life, Disability, Voluntary</h3>
        <p className="mt-2 text-sm text-muted-foreground">Basic life/AD&D, short and long-term disability, plus employee-paid voluntary coverage (accident, critical illness, hospital indemnity).</p>
      </CardContent></Card>
    </Section>

    <Section title="The Ancillary Stack (Where PEOs Quietly Win)">
      <p>This is where PEOs deliver perks no small employer could afford to build alone:</p>
      <ul className="space-y-2">
        <Bullet>Employee Assistance Program (mental health counseling, financial coaching, legal services)</Bullet>
        <Bullet>Telemedicine (Teladoc, OneMedical, MDLive)</Bullet>
        <Bullet>Mental health platforms (Calm, Talkspace, Lyra, Spring Health)</Bullet>
        <Bullet>Commuter and parking pre-tax benefits</Bullet>
        <Bullet>FSA, HSA, dependent care FSA</Bullet>
        <Bullet>Pet insurance and identity-theft protection</Bullet>
        <Bullet>Tuition reimbursement and student-loan repayment platforms</Bullet>
        <Bullet>Discount marketplaces (PerkSpot, BenefitHub)</Bullet>
      </ul>
      <p className="mt-4">A single employer with 20 people could not source even half of this independently. The PEO's scale makes it possible.</p>
    </Section>

    <Section title="Where PEO Benefits Don't Always Win" alt>
      <p>An honest broker tells you the trade-offs:</p>
      <ul className="space-y-2">
        <Bullet><strong className="text-foreground">High-claims industries:</strong> if you're in healthcare, manufacturing, or have an older workforce, master health rates can be worse than carrier-direct quotes.</Bullet>
        <Bullet><strong className="text-foreground">Plan customization:</strong> you pick from the PEO's menu. You can't design a custom plan the way a large self-funded employer can.</Bullet>
        <Bullet><strong className="text-foreground">Geographic dead zones:</strong> some PEOs have weak network coverage in rural states. Always verify network adequacy before signing.</Bullet>
        <Bullet><strong className="text-foreground">Renewal volatility:</strong> when the master plan renews high, every PEO client takes the hit. See <Link to="/resources/peo-cost-guide" className="text-green-ink hover:underline">the renewal trap</Link>.</Bullet>
      </ul>
    </Section>

    <Section title="The Recruiting Math">
      <p>The fastest-overlooked benefit of using a PEO: the offer letter looks bigger.</p>
      <p>A 15-person startup competing for a senior engineer against Google can credibly offer Aetna PPO with a $500 deductible, 6% 401(k) match in a low-cost MEP, and a $2,000/year wellness stipend. That's not a startup benefits package. That's a Fortune 500 benefits package. Recruiters routinely close offers they would have lost without it.</p>
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
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">See real benefits comparisons for your team.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">We'll pull plan designs, pricing, and network maps from multiple PEOs so you can see exactly what your employees would get.</p>
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

export default PeoBenefits;
