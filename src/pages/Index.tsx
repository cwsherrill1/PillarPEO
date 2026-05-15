import { Link } from "react-router-dom";
import heroTeam from "@/assets/hero-team.jpg";
import { Button } from "@/components/ui/button";
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

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const FAQS = [
  { q: "What is a PEO broker?", a: "A PEO broker is an independent advisor who compares Professional Employer Organizations on your behalf, negotiates pricing, and supports the transition. Brokers are paid by the PEO, not by the employer, so the service is typically free to you." },
  { q: "Do I pay Pillar PEO Advisors anything?", a: "No. Pillar is compensated by the PEO you ultimately select. Our advice, comparisons, and onboarding support are free to the employer." },
  { q: "Should I use a PEO broker or go direct?", a: "Brokers typically secure better pricing, shorter contracts, and flexible exit clauses, and they stay engaged after the sale. Smaller employers almost always benefit from broker support because they lack the leverage to negotiate alone." },
  { q: "How do I know if a PEO is the right fit?", a: "That depends on your employee count, internal capacity, current pain points, and what kind of support you need. We help you think through that before forcing a decision." },
  { q: "What if we already have a PEO?", a: "That is one of the biggest reasons employers reach out. We can help you evaluate whether the current fit is still right." },
  { q: "What hidden fees should I watch for in a PEO contract?", a: "Common hidden fees include setup fees, per-payroll-run fees, off-cycle payroll fees, benefits administration fees, early-termination penalties, and automatic annual rate escalators. We audit every quote to surface these before you sign." },
  { q: "What documents will you need?", a: "Usually things like an application, employee census, payroll reports, SUTA, benefits documents, and workers' comp information when relevant." },
  { q: "How long does this usually take?", a: "A typical process is around 60 days, though some move faster and some slower depending on complexity and timing." },
  { q: "What happens after we decide?", a: "Pillar helps support the handoff into onboarding so you're not left to navigate the next phase alone." },
];

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://pillarpeo.com/#organization",
      name: "Pillar PEO Advisors",
      alternateName: "Pillar PEO Broker",
      url: "https://pillarpeo.com",
      description: "Independent PEO broker helping small and mid-sized employers compare PEO options, expose hidden fees, and switch with no service fee.",
      serviceType: "PEO Broker",
      areaServed: "US",
      telephone: "+1-704-787-1261",
      email: "caleb@pillarpeo.com",
      address: { "@type": "PostalAddress", addressLocality: "Charlotte", addressRegion: "NC", addressCountry: "US" },
      founder: { "@id": "https://pillarpeo.com/#caleb" },
      knowsAbout: ["PEO broker", "PEO advisory", "Professional Employer Organization", "Co-employment", "PEO comparison", "Payroll", "Employee benefits", "HR compliance"],
    },
    {
      "@type": "Person",
      "@id": "https://pillarpeo.com/#caleb",
      name: "Caleb Sherrill",
      jobTitle: "Founder & PEO Advisor",
      worksFor: { "@id": "https://pillarpeo.com/#organization" },
      sameAs: ["https://www.linkedin.com/in/calebsherrill/"],
    },
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
        title="Independent PEO Broker — Compare PEO Options With Confidence"
        description="Pillar PEO Advisors is an independent PEO broker helping small and mid-sized employers compare PEOs, expose hidden fees, and switch with no service fee."
        jsonLd={orgJsonLd} />
      
      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(236,70%,22%)] text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(145_63%_49%/0.08),transparent_60%)]" />
        <div className="container relative z-10 py-24 md:py-32 lg:py-40">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h1 className="font-heading text-3xl font-800 leading-[1.15] md:text-[2.6rem] lg:text-5xl">
                <span className="block">Your independent PEO broker.</span>
                <span className="block text-accent">Focus on your people, not paperwork.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
                Pillar is an independent PEO broker that helps employers compare PEO options, understand tradeoffs, and switch without guessing — at no cost to you.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base font-semibold shadow-lg shadow-accent/20"
                  asChild>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Schedule a PEO Strategy Call</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 text-base"
                  asChild>
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={heroTeam}
                alt="Diverse team collaborating in a modern office"
                width={576}
                height={576}
                fetchPriority="high"
                decoding="async"
                className="w-full max-w-md rounded-2xl shadow-2xl shadow-black/20 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ── */}
      <section className="border-b border-border bg-muted/40 py-6">
        <div className="container">
          <p className="text-center text-sm font-medium text-muted-foreground">Independent PEO broker · Serving employers with 5–500 employees · Zero cost to employers

          </p>
        </div>
      </section>

      {/* ── 3. PROBLEM SECTION (3 cards + urgency) ── */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                The wrong setup costs more than the monthly fee.
              </h2>
              <p className="mt-4 text-muted-foreground">
               When the fit is wrong, the cost shows up everywhere — in
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
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-background font-heading text-xl font-800 text-accent">
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
                
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Schedule a PEO Strategy Call</a>
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
                Whether you're replacing a frustrating PEO, leading a nonprofit
                team, or trying to figure out whether a PEO even makes sense
                yet, Pillar helps you move forward with more clarity.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
            {
              icon: RefreshCcw,
              title: "Switching your current PEO?",
              desc: "Compare service, price, support, and fit before you make a move.",
              href: "/switch-your-peo",
              cta: "Explore PEO Switching",
              accent: "text-accent",
              border: "border-accent/30",
              glow: "hover:shadow-[0_0_30px_-8px_hsl(145_63%_49%/0.2)]"
            },
            {
              icon: Church,
              title: "Running a nonprofit team?",
              desc: "Reduce admin drag without pulling focus from the mission.",
              href: "/peo-for-nonprofits",
              cta: "Explore Nonprofits",
              accent: "text-soft-blue",
              border: "border-soft-blue/30",
              glow: "hover:shadow-[0_0_30px_-8px_hsl(197_86%_64%/0.2)]"
            },
            {
              icon: Building2,
              title: "Wondering if you need a PEO?",
              desc: "Build a better people-ops foundation before growth gets messy.",
              href: "/do-we-need-a-peo",
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
              myth: "\u201CAll PEOs are basically the same.\u201D",
              truth:
              "Pricing, service structure, support quality, and long-term fit can vary more than people realize."
            },
            {
              myth: "\u201CSwitching is too disruptive.\u201D",
              truth:
              "Staying in the wrong setup often creates its own ongoing disruption. A guided transition can be far more manageable than people expect."
            },
            {
              myth: "\u201CWe\u2019re too small to need a PEO.\u201D",
              truth:
              "Employers with as few as 5 employees often benefit the most \u2014 better benefits, compliance coverage, and time back for leadership."
            },
            {
              myth: "\u201CPEOs are just glorified payroll companies.\u201D",
              truth:
              "Payroll is one piece. The real value is in benefits access, risk management, and HR infrastructure you\u2019d otherwise have to build yourself."
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
                        <CheckCircle2 size={18} className="text-accent" />
                        <span className="text-xs font-bold uppercase tracking-wider text-accent">
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