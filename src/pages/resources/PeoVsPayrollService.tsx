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
  { q: "What's the difference between a PEO and a payroll service?", a: "A payroll service (Gusto, ADP Run, QuickBooks Payroll) processes your paychecks and files payroll taxes. A PEO does all of that plus becomes a co-employer: taking on HR, benefits administration, workers' comp, and shared compliance liability. PEO costs more but covers far more." },
  { q: "Is a PEO worth it if I just need payroll?", a: "No. If your only need is running payroll for 5–20 employees with simple benefits, a payroll service at $40–$60/employee/month is dramatically cheaper than a PEO at $130–$200/employee/month. PEOs make sense when you also need group benefits access, multi-state compliance, or HR support." },
  { q: "When should a small business switch from payroll service to a PEO?", a: "The most common trigger points: (1) you want to offer competitive group health benefits but can't get good rates as a small group, (2) you've hired in 3+ states and compliance is getting expensive, (3) HR questions are eating 5+ hours of your week, or (4) you're hiring fast and need someone else managing onboarding/I-9s/handbooks." },
  { q: "Can I keep my payroll provider and add a PEO later?", a: "No, when you join a PEO, payroll becomes part of the PEO's platform. You can't run two payroll systems for the same employees. This is why switching to a PEO is a bigger decision than switching payroll services." },
  { q: "Do PEOs file my payroll taxes under their EIN or mine?", a: "Under the PEO's EIN. This is what makes a PEO a co-employer. Your payroll service files under your EIN. The PEO's EIN structure is what makes the master health plan possible and workers' comp pooling, but it's also why exiting a PEO requires more effort than switching payroll providers." },
];

const ARTICLE = buildArticleJsonLd({
  title: "PEO vs. Payroll Service: When You Need Each",
  description: "PEO vs payroll service compared: cost, scope, when to choose each, and the trigger points that mean you've outgrown a basic payroll provider.",
  path: "/resources/peo-vs-payroll-service",
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

const PeoVsPayrollService = () => (
  <>
    <SEOHead
      title="PEO vs. Payroll Service: When You Need Each"
      fullTitle
      description="PEO vs payroll service: real cost comparison, scope of services, and the trigger points that signal you've outgrown a basic payroll provider."
      jsonLd={{ "@context": "https://schema.org", "@graph": [ARTICLE["@graph"][0], ARTICLE["@graph"][1], FAQ_JSONLD] }}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Comparison</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            PEO vs. Payroll Service:
            <span className="text-accent"> When You Need Each</span>
          </h1>
        </Reveal>
        <Reveal delay={100}><p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">A payroll service runs payroll. A PEO runs payroll, benefits, HR, compliance, and shares legal liability. Here's how to know which one you need.</p></Reveal>
        <Reveal delay={150}><ArticleByline datePublished="May 15, 2026" /></Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Talk Through Your Situation</a>
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
            "Should I get a PEO or just a payroll service?" is the most common question we get from companies under 25 employees. The honest answer: most very small companies don't need a PEO yet. But the moment you start hiring across state lines, offering health benefits, or fielding HR questions you're not equipped to answer, the math changes fast.
          </p>
        </Reveal>
      </div>
    </section>

    <Section title="Side-by-Side Scope" alt>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-foreground">
            <tr>
              <th className="px-3 py-2 text-left font-heading">Service</th>
              <th className="px-3 py-2 text-left font-heading">Payroll Service</th>
              <th className="px-3 py-2 text-left font-heading">PEO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-3 py-2">Process payroll & file taxes</td><td className="px-3 py-2">✅</td><td className="px-3 py-2">✅</td></tr>
            <tr><td className="px-3 py-2">Group health, dental, vision</td><td className="px-3 py-2">❌ (you broker separately)</td><td className="px-3 py-2">✅ (master plan)</td></tr>
            <tr><td className="px-3 py-2">Workers' comp policy</td><td className="px-3 py-2">❌</td><td className="px-3 py-2">✅ (pay-as-you-go)</td></tr>
            <tr><td className="px-3 py-2">HR support line</td><td className="px-3 py-2">Limited / add-on</td><td className="px-3 py-2">✅ Included</td></tr>
            <tr><td className="px-3 py-2">Multi-state compliance</td><td className="px-3 py-2">❌ Your problem</td><td className="px-3 py-2">✅ Their problem</td></tr>
            <tr><td className="px-3 py-2">Employment-practice liability shared</td><td className="px-3 py-2">❌</td><td className="px-3 py-2">✅ (co-employment)</td></tr>
            <tr><td className="px-3 py-2">Cost / employee / month</td><td className="px-3 py-2">$40–$60</td><td className="px-3 py-2">$130–$200</td></tr>
          </tbody>
        </table>
      </div>
    </Section>

    <Section title="When Payroll Service Is the Right Call">
      <p>Stick with a payroll service (Gusto, ADP Run, QuickBooks, OnPay, Patriot) if:</p>
      <ul className="space-y-2">
        {["You're under 10 employees and intend to stay there for 12+ months", "All employees work in one or two states", "You don't offer group health benefits, or you have them set up well already", "Nobody is asking HR questions you can't answer with a Google search", "Your operating budget is too tight for an extra $1,500–$3,000/month"].map((t) => <Bullet key={t}>{t}</Bullet>)}
      </ul>
      <p className="mt-4">Spending PEO money before you need it is a real waste. It crowds out hiring or marketing budget that would grow the business.</p>
    </Section>

    <Section title="When You've Outgrown Payroll Service" alt>
      <p>Move to a PEO when two or more of these are true:</p>
      <ul className="space-y-2">
        {["You want to offer competitive health benefits but quotes as a small group are 30%+ above PEO master-plan rates", "You're hiring in 3+ states and compliance, registrations, and SUTA management are eating real time", "HR questions consume 5+ hours of leadership time per week", "You've had a near-miss on an I-9, FMLA, or wrongful termination issue", "Your team has crossed 25 employees and you don't have an HR generalist on staff", "You want one platform for payroll + benefits + onboarding + time tracking"].map((t) => <Bullet key={t}>{t}</Bullet>)}
      </ul>
    </Section>

    <Section title="The Hidden Cost of Staying on Payroll Service Too Long">
      <p>Three costs employers underestimate:</p>
      <ul className="space-y-2">
        <Bullet><strong className="text-foreground">Bad benefits = lost candidates.</strong> Strong PEOs offer Fortune-500-level health plans. A small group health plan often costs the same and is dramatically worse.</Bullet>
        <Bullet><strong className="text-foreground">Compliance fines compound.</strong> A single missed state registration or misclassified contractor can cost $10K–$50K, more than 2 years of PEO fees.</Bullet>
        <Bullet><strong className="text-foreground">Founder time is the most expensive line item.</strong> If HR/payroll/benefits questions absorb 6 hours of your week at a $300/hour effective rate, that's $7,200/month, already more than a PEO would cost.</Bullet>
      </ul>
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
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">Not sure which one fits?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">We'll walk through your situation in 20 minutes, and tell you honestly if a PEO doesn't make sense yet.</p>
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

export default PeoVsPayrollService;
