import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import {
  Compass,
  BarChart3,
  Target,
  HeartHandshake,
  ClipboardCheck,
  Users,
  FileSearch,
  ArrowRightLeft,
  ShieldCheck,
  Clock,
  Frown,
  Scale,
  RefreshCcw,
  Church,
  Building2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const Index = () => {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[12%] top-0 h-full w-px bg-gradient-to-b from-transparent via-green/20 to-transparent" />
          <div className="absolute left-[38%] top-0 h-full w-px bg-gradient-to-b from-transparent via-soft-blue/15 to-transparent" />
          <div className="absolute right-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-green/10 to-transparent" />
          <div className="absolute left-[10%] top-1/3 h-48 w-48 rounded-full bg-green/5 blur-3xl" />
          <div className="absolute right-[15%] bottom-1/4 h-56 w-56 rounded-full bg-soft-blue/5 blur-3xl" />
        </div>

        <div className="container relative z-10 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-800 leading-[1.1] md:text-5xl lg:text-6xl">
              Compare PEO options
              <br />
              <span className="text-accent">without guessing.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Pillar helps employers evaluate payroll, benefits, HR, and
              compliance options so they can make a confident next-step decision
              — with less pressure, less confusion, and less risk.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base font-semibold"
                asChild
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Schedule a PEO Strategy Call</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 text-base"
                asChild
              >
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>

            {/* support chips */}
            <div className="mt-14 flex flex-wrap justify-center gap-4">
              {[
                { icon: Compass, label: "Buyer-side guidance" },
                { icon: BarChart3, label: "Better-fit comparisons" },
                { icon: Target, label: "Clear process" },
                { icon: HeartHandshake, label: "Steady support" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-sm text-primary-foreground/70"
                >
                  <Icon size={16} className="text-accent" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ── */}
      <section className="border-b border-border bg-muted/40 py-8">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { icon: ClipboardCheck, label: "Structured guidance from discovery to decision" },
              { icon: BarChart3, label: "Side-by-side proposal review support" },
              { icon: ShieldCheck, label: "Secure document workflow" },
              { icon: ArrowRightLeft, label: "Transition support after the decision" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Icon size={18} className="text-accent" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PATH SELECTOR ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                Start where you are.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Whether you are replacing a frustrating PEO, leading a nonprofit
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
                glow: "hover:shadow-[0_0_30px_-8px_hsl(145_63%_49%/0.2)]",
              },
              {
                icon: Church,
                title: "Running a nonprofit team?",
                desc: "Reduce admin drag without pulling focus from the mission.",
                href: "/peo-for-nonprofits",
                cta: "Explore Nonprofits",
                accent: "text-soft-blue",
                border: "border-soft-blue/30",
                glow: "hover:shadow-[0_0_30px_-8px_hsl(197_86%_64%/0.2)]",
              },
              {
                icon: Building2,
                title: "Wondering if you need a PEO?",
                desc: "Build a better people-ops foundation before growth gets messy.",
                href: "/do-we-need-a-peo",
                cta: "Explore First-Time PEO",
                accent: "text-bold-yellow",
                border: "border-bold-yellow/30",
                glow: "hover:shadow-[0_0_30px_-8px_hsl(43_100%_50%/0.2)]",
              },
            ].map(({ icon: Icon, title, desc, href, cta, accent, border, glow }, i) => (
              <Reveal key={title} delay={i * 120}>
                <Card
                  className={`group relative h-full transition-shadow duration-300 ${border} ${glow} card-elevated`}
                >
                  <CardContent className="flex h-full flex-col p-8">
                    <div
                      className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted ${accent}`}
                    >
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
                      asChild
                    >
                      <Link to={href}>{cta} →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROBLEM SECTION ── */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                The wrong setup costs more than the monthly fee.
              </h2>
              <p className="mt-4 text-muted-foreground">
                When the fit is wrong, the cost shows up everywhere: in
                leadership time, service frustration, renewal pressure,
                compliance risk, employee experience, and the constant sense
                that something still is not working the way it should.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Leadership time disappears",
                desc: "Owners, executives, and lean HR teams get pulled into avoidable admin.",
              },
              {
                icon: RefreshCcw,
                title: "Renewals create pressure",
                desc: "Instead of clarity, every cycle feels reactive and rushed.",
              },
              {
                icon: Frown,
                title: "Service becomes a drain",
                desc: "What looked fine on paper can feel very different when issues show up.",
              },
              {
                icon: Target,
                title: "Growth exposes weak spots",
                desc: "The setup that worked before may no longer fit the business you are becoming.",
              },
              {
                icon: Scale,
                title: "Mistakes get expensive",
                desc: "Payroll and compliance errors do not stay small for long.",
              },
              {
                icon: ArrowRightLeft,
                title: "Delay becomes its own cost",
                desc: "The longer confusion sits, the harder momentum is to protect.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80}>
                <Card className="h-full border-border/60 card-elevated">
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
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MYTH VS TRUTH ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                A lot of bad decisions start with bad assumptions.
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl space-y-8">
            {[
              {
                myth: "\u201CAll PEOs are basically the same.\u201D",
                truth:
                  "Pricing, service structure, support quality, onboarding experience, and long-term fit can vary more than people realize.",
              },
              {
                myth: "\u201CSwitching is too disruptive.\u201D",
                truth:
                  "Staying in the wrong setup often creates its own ongoing disruption. A guided transition can be far more manageable than people expect.",
              },
              {
                myth: "\u201CWe should just wait until next year.\u201D",
                truth:
                  "Waiting can extend friction, hidden cost, and preventable risk.",
              },
              {
                myth: "\u201CWe are probably too small.\u201D",
                truth:
                  "Smaller teams often feel payroll, benefits, and compliance pressure first because they have fewer internal resources.",
              },
            ].map(({ myth, truth }, i) => (
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
                      <p className="text-sm leading-relaxed text-foreground/80">
                        {truth}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GUIDE SECTION ── */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                You do not need to figure this out alone.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Pillar helps employers slow the decision down enough to think
                clearly, compare options side by side, and move forward with a
                plan that actually fits.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Discovery-first approach",
                desc: "We start by understanding your team, your pain points, and what actually matters before recommending anything.",
              },
              {
                icon: ClipboardCheck,
                title: "Clear process and expectations",
                desc: "You will always know what step you are on, what is next, and how long it takes.",
              },
              {
                icon: BarChart3,
                title: "Proposal review support",
                desc: "We present your top options in a clear, comparable format — no jargon, no pressure.",
              },
              {
                icon: FileSearch,
                title: "Help gathering required documents",
                desc: "We help you gather census data, tax docs, and everything your new provider needs.",
              },
              {
                icon: Target,
                title: "Guidance through demos and selection",
                desc: "We walk through each proposal line by line so you know exactly what you are agreeing to.",
              },
              {
                icon: HeartHandshake,
                title: "Warm handoff into onboarding",
                desc: "We stay with you through implementation — not just until the contract is signed.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80}>
                <Card className="h-full border-border/60 card-elevated">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-heading text-lg font-700 text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. THREE-STEP PLAN ── */}
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
                  title: "Tell us what is not working",
                  desc: "We start with your reality: what feels heavy, what is changing, and what matters most.",
                },
                {
                  step: "02",
                  title: "We compare the right options",
                  desc: "Pillar helps you evaluate fit, tradeoffs, and next-step paths with more clarity.",
                },
                {
                  step: "03",
                  title: "Move forward with a cleaner plan",
                  desc: "When you are ready, we help you move into the next phase with less confusion and less risk.",
                },
              ].map(({ step, title, desc }, i) => (
                <Reveal key={step} delay={i * 150}>
                  <div className="relative text-center">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-background font-heading text-xl font-800 text-accent">
                      {step}
                    </div>
                    <h3 className="font-heading text-lg font-700 text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. OUTCOMES / TRANSFORMATION ── */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                From guesswork to confident direction.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "More confidence in the decision",
                desc: "You will know you chose the right provider — not just the loudest one.",
              },
              {
                icon: Clock,
                title: "Less admin drag on leadership",
                desc: "Streamlined payroll, benefits, and compliance so your team can focus on what matters.",
              },
              {
                icon: Target,
                title: "Better-fit support structure",
                desc: "A provider matched to your size, industry, and growth trajectory.",
              },
              {
                icon: ArrowRightLeft,
                title: "Clearer next steps",
                desc: "No more second-guessing. You will have a timeline and a plan.",
              },
              {
                icon: Users,
                title: "Stronger employee experience",
                desc: "Better benefits, smoother onboarding, and more reliable HR support.",
              },
              {
                icon: Scale,
                title: "Less risk during transition",
                desc: "We manage the handoff so nothing falls through the cracks.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80}>
                <Card className="h-full border-accent/20 card-elevated">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-heading text-lg font-700 text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. WHY PILLAR PREVIEW ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                Guidance matters when the path is not obvious.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Pillar exists to help employers move forward with steadiness,
                clarity, and support in decisions that carry real weight.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="mt-8 bg-transparent border-accent text-accent hover:bg-accent/10 px-8 text-base font-semibold"
                asChild
              >
                <Link to="/about">Read Our Story →</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 10. FAQ PREVIEW ── */}
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
                {[
                  {
                    q: "How do I know if a PEO is the right fit?",
                    a: "That depends on your employee count, internal capacity, current pain points, and what kind of support you need. We help you think through that before forcing a decision.",
                  },
                  {
                    q: "What if we already have a PEO?",
                    a: "That is one of the biggest reasons employers reach out. We can help you evaluate whether the current fit is still right.",
                  },
                  {
                    q: "What documents will you need?",
                    a: "Usually things like an application, employee census, payroll reports, SUTA, benefits documents, and workers' comp information when relevant.",
                  },
                  {
                    q: "How long does this usually take?",
                    a: "A typical process is around 60 days, though some move faster and some slower depending on complexity and timing.",
                  },
                  {
                    q: "What happens after we decide?",
                    a: "Pillar helps support the handoff into onboarding so you are not left to navigate the next phase alone.",
                  },
                ].map(({ q, a }, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-heading font-600 text-foreground">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 11. FINAL CTA ── */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 md:text-4xl">
                Make a confident next-step decision.
              </h2>
              <p className="mt-5 text-primary-foreground/80 leading-relaxed">
                Tell us what is not working, what matters most, and where you
                are in the process.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base font-semibold"
                  asChild
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Schedule a PEO Strategy Call</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 text-base"
                  asChild
                >
                  <Link to="/resources">Get the Buyer Guide</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Index;
