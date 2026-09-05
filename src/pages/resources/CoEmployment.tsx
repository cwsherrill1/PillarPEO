import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import { ArticleByline, ArticleAuthorBio, buildArticleJsonLd } from "@/components/ArticleByline";

const ARTICLE = buildArticleJsonLd({
  title: "Understanding Co-Employment",
  description: "What co-employment actually means for your liability, your employees, and your control.",
  path: "/resources/co-employment",
  datePublished: "2026-01-15",
  dateModified: "2026-09-05",
});

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const myths = [
  { myth: "My employees will technically work for someone else.", reality: "Your employees still report to you. The PEO handles the administrative side only." },
  { myth: "We lose control of benefits decisions.", reality: "You still choose the benefit package. The PEO administers it and gives you better options through pooled buying power." },
  { myth: "Co-employment creates legal risk.", reality: "When structured properly with a reputable PEO, it reduces compliance risk — especially for multi-state employers." },
  { myth: "We have to tell employees they now work for a PEO.", reality: "Communication requirements vary, but many employees experience no meaningful change." },
];

const CoEmployment = () => (
  <>
    <SEOHead
      title="Understanding Co-Employment"
      description="Co-employment is the foundation of every PEO relationship. Learn what it actually means for your liability, your employees, and your control."
      jsonLd={ARTICLE}
      ogType="article"
    />

    {/* Hero */}
    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Understanding
            <span className="text-accent"> Co-Employment</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Co-employment is the foundation of every PEO relationship. Here's what it actually means for your liability, your employees, and your control.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <ArticleByline />
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Talk to an Advisor</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Back + Sections */}
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <Link to="/resources" className="mb-8 inline-flex items-center text-sm font-semibold text-green-ink hover:text-green-ink/80">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources
          </Link>
        </Reveal>

        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">What Is Co-Employment?</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/85">
            When you partner with a PEO, both you and the PEO become employers of your workforce in different capacities. The PEO becomes the employer of record for payroll, tax filings, benefits administration, and regulatory compliance. You remain the employer of record for day-to-day direction, operations, culture, and all hiring and firing decisions. This shared arrangement is called co-employment.
          </p>
          <p className="mt-4 text-lg leading-8 text-foreground/85">
            It exists because the IRS and most state agencies require a legal entity to withhold taxes and administer benefits at scale. The PEO fills that role — which is how they can offer Fortune 500-level benefits at small business prices. Pooling thousands of employees from hundreds of companies gives PEOs buying power that no single employer of 50 or 100 people could replicate.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">What Changes for Your Employees</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/85">
            For most employees, the change is invisible in daily life. They still show up to the same office, report to the same managers, and follow your company's policies and culture. What may change:
          </p>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />Their W-2 may show the PEO's name as the employer of record (some PEOs use a co-branded approach)</li>
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />Benefits enrollment and payroll processing flow through the PEO's platform</li>
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />They may have access to a broader HR portal, additional employee assistance programs, or upgraded benefit options</li>
          </ul>
          <p className="mt-4 text-lg leading-8 text-foreground/85">These are generally improvements, not friction points.</p>
        </Reveal>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">What You Keep Control Of</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/85">
            This is where employers often have the most anxiety — and the most misconceptions. You retain full control of:
          </p>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            {["Who you hire and who you let go", "How your employees are managed day-to-day", "Your company culture, values, and operating decisions", "Compensation decisions", "Your business strategy, clients, and operations"].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-base font-semibold text-foreground">The PEO is not your boss. They are the infrastructure behind your people operations.</p>
        </Reveal>
      </div>
    </section>

    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">The Liability Question</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/85">
            Co-employment does shift some employer liability to the PEO — specifically in areas like payroll tax compliance, employment law filings, and benefits administration. This is one of the reasons employers use PEOs: shared liability on compliance functions is meaningful protection, especially for multi-state employers navigating different state labor laws.
          </p>
          <p className="mt-4 text-lg leading-8 text-foreground/85">
            However, co-employment does not eliminate your liability as the worksite employer. You are still responsible for what happens on your job sites, how your managers treat employees, and the decisions you make about the workforce. Think of it as shared accountability on the administrative side, not a liability transfer.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">What Co-Employment Is Not</h2>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">A staffing arrangement.</strong> Your employees are still your employees. The PEO does not supply your labor.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">A loss of control.</strong> You make all operational and personnel decisions.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">A legal gray area.</strong> Co-employment is a well-established, IRS-recognized relationship.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">A hidden risk.</strong> Reputable PEOs operate under ESAC or IRS Certified PEO (CPEO) status — both of which carry meaningful compliance and financial safeguards.</span></li>
          </ul>
        </Reveal>
      </div>
    </section>

    {/* Myths */}
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">Common Misconceptions</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {myths.map((m, i) => (
            <Reveal key={i} delay={i * 80}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-destructive">Myth</p>
                  <p className="mt-1 font-heading font-700 text-foreground">{m.myth}</p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-green-ink">Reality</p>
                  <p className="mt-1 text-sm text-muted-foreground">{m.reality}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">Is Co-Employment Right for Your Organization?</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/85">
            Co-employment works best when an employer wants professional HR infrastructure, better benefits, compliance confidence, and administrative relief — without building an internal HR department to match. It tends to be the right model for organizations with 10 to 250 employees that have outgrown founder-led HR or whose current PEO relationship is underperforming.
          </p>
          <p className="mt-4 text-lg leading-8 text-foreground/85">
            It is not the right model for organizations that need full HR outsourcing without any involvement, or those with unusual workforce arrangements that don't fit a standard PEO structure.
          </p>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">
            Not sure if co-employment fits your situation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Pillar helps employers understand the structure, compare options, and make a confident decision — without being sold by the PEO itself. Talk to an independent advisor who has no stake in which PEO you choose.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Talk to an Advisor</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default CoEmployment;
