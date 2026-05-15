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
  { q: "What does PEO stand for?", a: "PEO stands for Professional Employer Organization. It's a company that enters into a co-employment relationship with your business to handle payroll, benefits, HR compliance, and workers' compensation while you retain control of day-to-day operations." },
  { q: "How does a PEO actually work?", a: "You sign a Client Service Agreement (CSA) with the PEO. They become the employer of record for tax purposes — running payroll under their FEIN, sponsoring benefits, and handling compliance — while you remain the worksite employer who hires, manages, and fires. Employees keep working for you in every way that matters." },
  { q: "Is a PEO the same as a staffing agency?", a: "No. A staffing agency provides temporary or contract workers to you. A PEO partners with you on the people you've already hired — your existing W-2 team. You don't hand over hiring authority; you hand over administration." },
  { q: "What's the difference between a PEO and an EOR?", a: "A PEO co-employs alongside you in a state where you already have a business presence. An Employer of Record (EOR) employs workers on your behalf in countries or states where you don't have a legal entity. PEOs are for domestic teams; EORs are for international or new-state hiring." },
  { q: "Is a PEO worth it for a small business?", a: "For most companies between 5 and 100 employees, yes — particularly if you have employees in multiple states, want competitive benefits, or don't have a dedicated HR person. Below 5 employees, basic payroll software is usually sufficient." },
  { q: "What is a CPEO?", a: "A Certified PEO (CPEO) has been certified by the IRS, meaning the PEO is solely liable for federal employment taxes on wages it pays. This protects you from double-payment of taxes if the PEO ever defaults. Major CPEOs include ADP TotalSource, Insperity, and TriNet." },
  { q: "Do I lose control over my employees with a PEO?", a: "No. You retain full control of hiring, firing, day-to-day management, work assignments, and pay decisions. The PEO handles administrative employment functions only — the things you'd want off your plate anyway." },
  { q: "How is a PEO different from an HR consultant or HRIS software?", a: "An HR consultant gives advice. HRIS software (like BambooHR or Gusto) handles records and payroll. A PEO does both — and adds health benefits at large-group pricing, workers' comp coverage, and shared employer liability. It's the only model that bundles all of it." },
];

const ARTICLE = buildArticleJsonLd({
  title: "What Is a PEO? A Complete Guide for Employers",
  description: "What a PEO is, how co-employment works, what they cost, and when they're worth it. The independent, broker-honest guide for employers.",
  path: "/resources/what-is-a-peo",
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
        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">{children}</div>
      </Reveal>
    </div>
  </section>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span>{children}</span></li>
);

const WhatIsAPeo = () => (
  <>
    <SEOHead
      title="What Is a PEO? A Complete Guide for Employers"
      description="What a PEO is, how co-employment works, what it costs, and when it's worth it. An independent broker's honest, plain-English guide."
      jsonLd={{ "@context": "https://schema.org", "@graph": [ARTICLE["@graph"][0], ARTICLE["@graph"][1], FAQ_JSONLD] }}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Foundational Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            What Is a PEO?
            <span className="text-accent"> The Plain-English Guide</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            How co-employment works, what's included, what it costs, and whether you actually need one.
          </p>
        </Reveal>
        <Reveal delay={150}><ArticleByline datePublished="May 2026" /></Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">See If a PEO Fits Your Company</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <Link to="/resources" className="mb-8 inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources
          </Link>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A PEO — Professional Employer Organization — is a company that handles your payroll, benefits, HR compliance, and workers' comp under a co-employment relationship. The short version: you keep running your business, the PEO handles all the administrative employment work, and your employees get Fortune-500-grade benefits at small-business scale.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            That's the official definition. The rest of this guide is what's actually true once you're inside one.
          </p>
        </Reveal>
      </div>
    </section>

    <Section title="What a PEO Actually Does" alt>
      <p>A PEO is functionally an outsourced HR, payroll, and benefits department — bundled with the buying power of an employer 100x your size. Specifically:</p>
      <ul className="space-y-2">
        <Bullet>Runs your payroll under their federal tax ID and files all federal, state, and local employment taxes</Bullet>
        <Bullet>Sponsors and administers your health, dental, vision, life, and disability plans (typically with major carriers like Aetna, BCBS, UHC, Kaiser)</Bullet>
        <Bullet>Provides 401(k) through a Multiple Employer Plan, reducing your fiduciary liability</Bullet>
        <Bullet>Carries workers' compensation under a master policy</Bullet>
        <Bullet>Handles HR compliance — I-9s, EEO-1, ACA filings, harassment training, posters, state-mandated leave laws</Bullet>
        <Bullet>Provides an HR support line and online employee self-service portal</Bullet>
        <Bullet>Manages onboarding, terminations, and unemployment claims</Bullet>
      </ul>
      <p>You retain everything that matters: hiring, firing, pay decisions, day-to-day management, company culture.</p>
    </Section>

    <Section title="Co-Employment, Explained Without the Lawyer Speak">
      <p>The model that makes a PEO work is called co-employment. Two employers, two roles:</p>
      <Card className="mt-2 border-accent/20"><CardContent className="p-6">
        <h3 className="font-heading font-700 text-foreground">You = the worksite employer</h3>
        <p className="mt-2 text-sm text-muted-foreground">You hire, manage, direct work, decide pay, and fire. Employees show up to your office (or your Zoom). Your culture, your team.</p>
      </CardContent></Card>
      <Card className="mt-3 border-accent/20"><CardContent className="p-6">
        <h3 className="font-heading font-700 text-foreground">The PEO = the administrative employer</h3>
        <p className="mt-2 text-sm text-muted-foreground">Files payroll taxes under their FEIN, sponsors benefits, carries workers' comp, handles compliance paperwork. Employees get a W-2 with the PEO's tax ID.</p>
      </CardContent></Card>
      <p className="mt-4">It's not staffing. You're not "renting" your employees. They're still your team in every way that matters. For a deeper breakdown, see our <Link to="/resources/co-employment" className="text-accent hover:underline">co-employment guide</Link>.</p>
    </Section>

    <Section title="What a PEO Costs" alt>
      <p>Two pricing models:</p>
      <ul className="space-y-2">
        <Bullet><strong className="text-foreground">Per Employee Per Month (PEPM):</strong> $80–$200/employee/month for the admin fee. Common with Justworks, Rippling, TriNet.</Bullet>
        <Bullet><strong className="text-foreground">Percentage of payroll:</strong> 2%–6% of gross payroll. Common with ADP TotalSource and Insperity.</Bullet>
      </ul>
      <p>Benefits, workers' comp, and 401(k) are usually separate line items, passed through at carrier rates. Full breakdown in our <Link to="/resources/peo-cost-guide" className="text-accent hover:underline">PEO cost guide</Link>.</p>
    </Section>

    <Section title="Who Should Use a PEO (And Who Shouldn't)">
      <p>Strong fit:</p>
      <ul className="space-y-2">
        <Bullet>5–100 employees with growth ambitions</Bullet>
        <Bullet>Multi-state or remote teams</Bullet>
        <Bullet>Companies recruiting against bigger competitors who need real benefits</Bullet>
        <Bullet>Founders without a dedicated HR person</Bullet>
        <Bullet>Nonprofits and faith-based organizations needing professional HR without a big budget</Bullet>
      </ul>
      <p className="mt-4">Probably not a fit:</p>
      <ul className="space-y-2">
        <Bullet>Under 5 employees in a single state (basic payroll software is enough)</Bullet>
        <Bullet>200+ employees with a built-out HR team and self-funded health plan ambitions</Bullet>
        <Bullet>Industries with very high workers' comp risk that pool poorly</Bullet>
      </ul>
      <p className="mt-4">Not sure where you fall? Take our <Link to="/resources/peo-readiness" className="text-accent hover:underline">PEO readiness assessment</Link>.</p>
    </Section>

    <Section title="PEO vs. Other Models" alt>
      <p>Quick mental model:</p>
      <ul className="space-y-2">
        <Bullet><strong className="text-foreground">PEO:</strong> bundled — payroll + benefits + HR + workers' comp under co-employment</Bullet>
        <Bullet><strong className="text-foreground">ASO:</strong> same services, no co-employment — you keep all employer liability</Bullet>
        <Bullet><strong className="text-foreground">HRIS (Gusto, BambooHR):</strong> software only — no benefits brokerage, no compliance shield</Bullet>
        <Bullet><strong className="text-foreground">Staffing agency:</strong> provides workers to you; not the same category</Bullet>
        <Bullet><strong className="text-foreground">EOR:</strong> employs workers in places you have no legal entity (often international)</Bullet>
      </ul>
      <p className="mt-4">Full comparison: <Link to="/resources/peo-vs-aso-vs-inhouse" className="text-accent hover:underline">PEO vs. ASO vs. In-House HR</Link>.</p>
    </Section>

    <Section title="The Honest Risks">
      <p>A PEO isn't right for everyone. The real downsides:</p>
      <ul className="space-y-2">
        <Bullet><strong className="text-foreground">Renewal increases:</strong> 8–18% annual increases are common, mostly driven by health plan renewals</Bullet>
        <Bullet><strong className="text-foreground">Less plan customization:</strong> you pick from the PEO's menu, not a custom design</Bullet>
        <Bullet><strong className="text-foreground">Exit friction:</strong> leaving mid-year resets FICA/FUTA wage bases and costs real money</Bullet>
        <Bullet><strong className="text-foreground">Shared service quality:</strong> you're one of thousands of clients</Bullet>
      </ul>
      <p>A good broker tells you these upfront. We do.</p>
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
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">Ready to see if a PEO is right for you?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">A 30-minute call with an independent broker. We'll assess fit, walk through the options, and tell you honestly if a PEO is the right move.</p>
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

export default WhatIsAPeo;
