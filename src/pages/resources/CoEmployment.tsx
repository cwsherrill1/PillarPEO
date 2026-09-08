import { BOOKING_URL } from "@/data/pricing";
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
  description: "What co-employment means for your liability, your employees, and your control.",
  path: "/resources/co-employment",
  datePublished: "2026-01-15",
  dateModified: "2026-09-05",
});


const myths = [
  { myth: "My employees will technically work for someone else.", reality: "Your employees still report to you. The PEO handles the administrative side only." },
  { myth: "We lose control of benefits decisions.", reality: "You still choose the benefit package. The PEO administers it and gives you better options through pooled buying power." },
  { myth: "Co-employment creates legal risk.", reality: "When structured properly with a reputable PEO, it reduces compliance risk, especially for multi-state employers." },
  { myth: "We have to tell employees they now work for a PEO.", reality: "Communication requirements vary, but many employees experience no meaningful change." },
];

const CoEmployment = () => (
  <>
    <SEOHead
      title="Understanding Co-Employment"
      description="Co-employment is the foundation of every PEO relationship. Learn what it means for your liability, your employees, and your control."
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
            Co-employment splits the employer role into two parts: who handles the paperwork and who runs the business. Here's how that split works.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <ArticleByline datePublished="January 15, 2026" />
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Compare PEOs, free</a>
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
            In a PEO relationship, two entities hold pieces of the employer role for the same workforce. The PEO is the employer of record for payroll tax purposes: it files the federal 941 and state unemployment returns under its own EIN, issues W-2s, and carries the master workers' comp policy that your employees are covered under. You remain the employer of record for everything operational: you decide who gets hired, who gets fired, what they get paid, and how they're managed day to day.
          </p>
          <p className="mt-4 text-lg leading-8 text-foreground/85">
            This split exists because tax filings and workers' comp coverage are administered at scale. A PEO files and pays under one umbrella for thousands of worksite employees across many client companies, and that combined headcount is what gives it access to group health rates and workers' comp pricing that a 50- or 100-person employer buying on its own can't get.
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
            This is where employers often have the most anxiety, and the most misconceptions. You retain full control of:
          </p>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            {["Who you hire and who you let go", "How your employees are managed day-to-day", "Your company culture, values, and operating decisions", "Compensation decisions", "Your business strategy, clients, and operations"].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-base font-semibold text-foreground">The PEO files your tax returns and carries the workers' comp policy. It does not make your hiring, firing, or management decisions.</p>
        </Reveal>
      </div>
    </section>

    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">The Liability Question</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/85">
            Co-employment shifts specific liabilities to the PEO: payroll tax deposits and filings, W-2 accuracy, benefits plan administration, and workers' comp coverage. If a payroll tax deposit is late or a filing is wrong, that is the PEO's exposure, not yours. This is one of the reasons employers use PEOs, particularly ones running payroll in several states with different withholding and unemployment rules.
          </p>
          <p className="mt-4 text-lg leading-8 text-foreground/85">
            You stay liable for what happens on your job sites: workplace safety practices, how your managers treat employees, wrongful termination or discrimination claims tied to your decisions, and general business liability. The PEO's coverage protects the payroll and tax mechanics. It does not protect you from the consequences of your own management decisions.
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
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">A hidden risk.</strong> Reputable PEOs operate under ESAC or IRS Certified PEO (CPEO) status, both of which carry meaningful compliance and financial safeguards.</span></li>
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
            Co-employment works best when an employer wants professional HR infrastructure, better benefits, compliance confidence, and administrative relief, without building an internal HR department to match. It tends to be the right model for organizations with 10 to 250 employees that have outgrown founder-led HR or whose current PEO relationship is underperforming.
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
            Pillar helps employers understand the structure, compare options, and make a confident decision, without being sold by the PEO itself. Talk to an independent advisor who has no stake in which PEO you choose.
          </p>
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

export default CoEmployment;
