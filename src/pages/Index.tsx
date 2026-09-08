import { Link } from "react-router-dom";
import heroTeam from "@/assets/hero/hero-team-768.jpg";
import heroAvif384 from "@/assets/hero/hero-team-384.avif";
import heroAvif768 from "@/assets/hero/hero-team-768.avif";
import heroWebp384 from "@/assets/hero/hero-team-384.webp";
import heroWebp768 from "@/assets/hero/hero-team-768.webp";
import { Button } from "@/components/ui/button";
import { organization, caleb } from "@/data/organization";
import { PRIMARY_CTA, BOOKING_URL } from "@/data/pricing";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import {
  Clock,
  Frown,
  Scale,
  RefreshCcw,
  Church,
  Building2,
  CheckCircle2,
  XCircle } from
"lucide-react";

const FAQS = [
  { q: "What does Pillar do?", a: "Pillar is an independent HR advisory firm for professional-services firms of roughly 10 to 150 people, in every state their people work in. We run fixed-price HR audits and projects, provide fractional HR, and manage PEO and system transitions. Comparing PEOs is a free service inside that offer." },
  { q: "What is a PEO broker?", a: "A PEO broker is an independent advisor who compares Professional Employer Organizations on your behalf, negotiates pricing, and supports the transition. Brokers are paid by the PEO, not by the employer, so the service is free to you." },
  { q: "Do I pay Pillar anything?", a: "It depends which service you use. HR audits, projects, fractional HR, and transitions are fixed-price, quoted in writing before any work starts. PEO brokerage is free to you: the PEO pays the commission, and we disclose it." },
  { q: "Should I use a PEO broker or go direct?", a: "Brokers typically secure better pricing, shorter contracts, and flexible exit clauses, and they stay engaged after the sale. Smaller employers almost always benefit from broker support because they lack the leverage to negotiate alone." },
  { q: "How do I know if a PEO is the right fit?", a: "That depends on your employee count, internal capacity, current pain points, and what kind of support you need. We help you think through that before forcing a decision." },
  { q: "What if we already have a PEO?", a: "That is one of the biggest reasons employers reach out. We can help you evaluate whether the current fit is still right." },
  { q: "What hidden fees should I watch for in a PEO contract?", a: "Common hidden fees include setup fees, per-payroll-run fees, off-cycle payroll fees, benefits administration fees, early-termination penalties, and automatic annual rate escalators. We audit every quote to surface these before you sign." },
  { q: "What documents will you need?", a: "Usually things like an application, employee census, payroll reports, SUTA, benefits documents, and workers' comp information when relevant." },
  { q: "How long does this usually take?", a: "A typical process is around 60 days, though some move faster and some slower depending on complexity and timing." },
  { q: "What happens after we decide?", a: "We stay on through implementation: the data gathering, the enrolment deadlines and the first payroll, until the first run reconciles." },
];

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...organization,
      alternateName: "Pillar PEO Broker",
      knowsAbout: ["PEO broker", "PEO advisory", "Professional Employer Organization", "Co-employment", "PEO comparison", "Payroll", "Employee benefits", "HR compliance", "Fractional HR", "HR audit"],
    },
    caleb,
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

const Index = () => {
  return (
    <>
      <SEOHead
        title="HR Advisory for Professional Firms | Pillar PEO Advisors"
        fullTitle
        description="Fixed-price HR audits, fractional HR and PEO transitions for law, CPA, engineering and medical firms nationwide. Based in Charlotte, NC."
        jsonLd={orgJsonLd} />
      
      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(236,70%,22%)] text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(145_63%_49%/0.08),transparent_60%)]" />
        <div className="container relative z-10 py-24 md:py-32 lg:py-40">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h1 className="font-heading text-3xl font-800 leading-[1.15] md:text-[2.6rem] lg:text-5xl">
                <span className="block">We handle the paperwork.</span>
                <span className="block text-accent">You focus on your people.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
                HR audits, projects, fractional support, and PEO or HRIS transitions for firms of 10–150 people, in every state your people work in. Headquartered in Charlotte.
              </p>


              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base font-semibold shadow-lg shadow-accent/20"
                  asChild>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{PRIMARY_CTA}</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 text-base"
                  asChild>
                  <Link to="/services/peo-brokerage">Compare PEOs, free</Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <picture>
                <source
                  type="image/avif"
                  srcSet={`${heroAvif384} 384w, ${heroAvif768} 768w`}
                  sizes="(min-width: 768px) 384px, 100vw"
                />
                <source
                  type="image/webp"
                  srcSet={`${heroWebp384} 384w, ${heroWebp768} 768w`}
                  sizes="(min-width: 768px) 384px, 100vw"
                />
                <img
                  src={heroTeam}
                  alt="Caleb and Josiah Sherrill, founders of Pillar PEO Advisors"
                  width={1050}
                  height={1400}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full max-w-sm rounded-2xl shadow-2xl shadow-black/30 object-cover aspect-[3/4]"
                />
              </picture>
              <p className="mt-3 text-sm text-primary-foreground/70">
                Caleb &amp; Josiah Sherrill, Founders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ── */}
      <section className="border-b border-border bg-muted/40 py-6">
        <div className="container">
          <p className="text-center text-sm font-medium text-muted-foreground">
            Fixed price, quoted before work · Every state your people work in · Independent, commissions disclosed
          </p>
        </div>
      </section>

      {/* ── 2b. WHAT BROUGHT YOU HERE (trigger triage) ── */}
      <section className="bg-background py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                What brought you here today?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Most firms call us because one of these four things just happened.
                Fixed price, quoted before any work starts.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                need: "Our benefits or PEO renewal just went up",
                service: "Free renewal review",
                price: "We read the renewal line by line and tell you what moved",
                href: "/resources/peo-renewal-review",
              },
              {
                need: "We just hired someone in another state",
                service: "Multi-state cleanup",
                price: "Registration, withholding, unemployment and handbook, state by state",
                href: "/resources/multi-state-employer-checklist",
              },
              {
                need: "Nobody here owns HR and it shows",
                service: "HR audit or fractional HR",
                price: "Find out what the exposure is, then decide how much help you need",
                href: "/services/hr-audit",
              },
              {
                need: "We're considering, or leaving, a PEO",
                service: "PEO comparison and transitions",
                price: "Free to compare. Often the answer is that a PEO is the wrong fit",
                href: "/services/peo-brokerage",
              },
            ].map(({ need, service, price, href }, i) => (
              <Reveal key={href} delay={i * 100}>
                <Link to={href} className="block h-full">
                  <Card className="h-full border-border/60 card-elevated hover-lift">
                    <CardContent className="p-6">
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {need}
                      </p>
                      <h3 className="mt-4 font-heading text-lg font-700 text-green-ink">
                        {service}
                      </h3>
                      <p className="mt-1 text-base text-foreground">
                        {price}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mx-auto mt-10 max-w-2xl text-center text-base text-muted-foreground">
              Not sure a PEO is even the right idea? Read{" "}
              <Link
                to="/resources/when-a-peo-is-the-wrong-answer"
                className="text-green-ink hover:underline"
              >
                when a PEO is the wrong answer
              </Link>{" "}
              first.
            </p>
          </Reveal>
        </div>
      </section>


      {/* ── 3. PROBLEM SECTION (3 cards + urgency) ── */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                The wrong setup costs more than the audit.
              </h2>
              <p className="mt-4 text-muted-foreground">
               When the fit is wrong, the cost shows up everywhere: in
                 leadership time, compliance risk, and the constant sense
                 that something still isn't working.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
            {
              icon: Clock,
              title: "Leadership time disappears",
              desc: "Owners, executives, and lean HR teams get pulled into avoidable admin."
            },
            {
              icon: Scale,
              title: "Mistakes get expensive",
              desc: "Payroll and compliance errors don't stay small for long."
            },
            {
              icon: Frown,
              title: "Service becomes a drain",
              desc: "What looked fine on paper can feel very different when issues show up."
            }].
            map(({ icon: Icon, title, desc }, i) =>
            <Reveal key={title} delay={i * 100}>
                <Card className="h-full border-border/60 card-elevated hover-lift">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-destructive/10 text-destructive">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-heading text-lg font-700 text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            )}
          </div>

          <Reveal delay={350}>
            <p className="mx-auto mt-10 max-w-xl text-center text-base font-medium text-foreground/70">
              Every month you wait, the cost compounds.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 4. THREE-STEP PLAN ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                A clear path through a complicated decision.
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 max-w-4xl">
            <div className="relative grid gap-12 md:grid-cols-3">
              <div className="pointer-events-none absolute left-1/2 top-8 hidden h-px w-[66%] -translate-x-1/2 bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40 md:block" />

              {[
              {
                step: "01",
                title: "Tell us what isn't working",
                desc: "We start with your reality: what feels heavy, what's changing, and what matters most."
              },
              {
                step: "02",
                title: "We compare the right options",
                desc: "Pillar helps you evaluate fit, tradeoffs, and paths forward with more clarity."
              },
              {
                step: "03",
                title: "Move forward with a cleaner plan",
                desc: "When you're ready, we help you transition with less confusion and less risk."
              }].
              map(({ step, title, desc }, i) =>
              <Reveal key={step} delay={i * 150}>
                  <div className="relative text-center">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-background font-heading text-xl font-800 text-green-ink">
                      {step}
                    </div>
                    <h3 className="font-heading text-lg font-700 text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="bg-accent/5 py-14">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-lg font-medium text-foreground">
                Not sure which path fits? Start with a conversation.
              </p>
              <Button
                size="lg"
                className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base font-semibold shadow-lg shadow-accent/20"
                asChild>
                
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{PRIMARY_CTA}</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. PATH SELECTOR ── */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                Start where you are.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Most firms come to us with one problem: a renewal that jumped, a hire
                in a new state, or an HR job nobody owns. Start there and we will
                tell you what the next step is.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
            {
              icon: RefreshCcw,
              title: "Switching your current PEO?",
              desc: "Compare service, price, support, and fit before you make a move.",
              href: "/services/transitions",
              cta: "Explore PEO Switching",
              accent: "text-green-ink",
              border: "border-accent/30",
              glow: "hover:shadow-[0_0_30px_-8px_hsl(145_63%_49%/0.2)]"
            },
            {
              icon: Church,
              title: "Running a nonprofit team?",
              desc: "Reduce admin drag without pulling focus from the mission.",
              href: "/industries/nonprofits",
              cta: "Explore Nonprofits",
              accent: "text-soft-blue",
              border: "border-soft-blue/30",
              glow: "hover:shadow-[0_0_30px_-8px_hsl(197_86%_64%/0.2)]"
            },
            {
              icon: Building2,
              title: "Wondering if you need a PEO?",
              desc: "Build a better people-ops foundation before growth gets messy.",
              href: "/resources/do-we-need-a-peo",
              cta: "Explore First-Time PEO",
              accent: "text-bold-yellow",
              border: "border-bold-yellow/30",
              glow: "hover:shadow-[0_0_30px_-8px_hsl(43_100%_50%/0.2)]"
            }].
            map(({ icon: Icon, title, desc, href, cta, accent, border, glow }, i) =>
            <Reveal key={title} delay={i * 120}>
              <Card
                className={`group relative h-full transition-all duration-300 ${border} ${glow} card-elevated hover-lift`}>
                
                  <CardContent className="flex h-full flex-col p-8">
                    <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted ${accent}`}>
                    
                      <Icon size={24} />
                    </div>
                    <h3 className="font-heading text-xl font-700 text-foreground">
                      {title}
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                    <Button
                    variant="link"
                    className={`mt-6 w-fit p-0 ${accent} font-semibold`}
                    asChild>
                    
                      <Link to={href}>{cta} →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ── 6. MYTH VS TRUTH (2 items) ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                Bad decisions start with bad assumptions.
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl space-y-8">
            {[
            {
              myth: "\u201CWe\u2019re too small for E-Verify.\u201D",
              truth:
              "Not in South Carolina. E-Verify applies to every South Carolina employer, within three business days of hire. North Carolina sets its threshold at 25 or more employees under NCGS 64-26."
            },
            {
              myth: "\u201CSalaried means exempt.\u201D",
              truth:
              "It does not. Paying someone a salary is only part of the test. The job duties have to meet an exemption as well. Misclassified salaried staff are the most common finding in an audit."
            },
            {
              myth: "\u201CThe PEO handles compliance.\u201D",
              truth:
              "A PEO handles payroll tax filing and much of the paperwork. It does not classify your roles, write your job descriptions, or train your managers, and those are where the expensive problems start."
                        }].
            map(({ myth, truth }, i) =>
            <Reveal key={i} delay={i * 120}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-destructive/20 bg-destructive/5">
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center gap-2">
                        <XCircle size={18} className="text-destructive" />
                        <span className="text-xs font-bold uppercase tracking-wider text-destructive">
                          Myth
                        </span>
                      </div>
                      <p className="text-base leading-relaxed text-foreground/80 italic">
                        {myth}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-accent/20 bg-accent/5">
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-green-ink" />
                        <span className="text-xs font-bold uppercase tracking-wider text-green-ink">
                          Truth
                        </span>
                      </div>
                      <p className="text-base leading-relaxed text-foreground/80">
                        {truth}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ PREVIEW ── */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                Common questions
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-2xl">
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map(({ q, a }, i) =>
                <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-heading font-600 text-foreground">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

    </>);

};

export default Index;