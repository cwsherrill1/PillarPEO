import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
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
  AlertTriangle,
  DollarSign,
  Clock,
  Ban,
  Frown,
  Scale,
  RefreshCcw,
  Church,
  Building2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

/* ─── Reusable reveal wrapper ─── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOMEPAGE
   ═══════════════════════════════════════════════════════════════ */

const Index = () => {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        {/* decorative pillar glows */}
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
                <Link to="/contact">Compare My Options</Link>
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
                { icon: Compass, label: "Structured guidance" },
                { icon: BarChart3, label: "Side-by-side comparisons" },
                { icon: Target, label: "Better-fit decisions" },
                { icon: HeartHandshake, label: "Support through transition" },
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
              { icon: ClipboardCheck, label: "Guided comparison process" },
              { icon: Users, label: "Buyer-side support" },
              { icon: FileSearch, label: "Proposal review help" },
              { icon: ArrowRightLeft, label: "Transition support" },
              { icon: ShieldCheck, label: "Secure document workflow" },
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
                Where are you in your PEO journey?
              </h2>
              <p className="mt-4 text-muted-foreground">
                We tailor our guidance to your situation — whether you're
                switching, exploring for the first time, or have unique needs as
                a nonprofit.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: RefreshCcw,
                title: "Switch Your PEO",
                desc: "Outgrown your current provider? We help you compare alternatives and manage the transition without disruption.",
                href: "/switch-your-peo",
                accent: "text-accent",
                border: "border-accent/30",
                glow: "hover:shadow-[0_0_30px_-8px_hsl(145_63%_49%/0.2)]",
              },
              {
                icon: Church,
                title: "PEO for Nonprofits",
                desc: "Churches, ministries, and nonprofits have unique compliance and benefits needs. We know them well.",
                href: "/peo-for-nonprofits",
                accent: "text-soft-blue",
                border: "border-soft-blue/30",
                glow: "hover:shadow-[0_0_30px_-8px_hsl(197_86%_64%/0.2)]",
              },
              {
                icon: Building2,
                title: "Do We Need a PEO Yet?",
                desc: "Not sure if a PEO is the right move? We'll help you weigh the options so you don't commit too early — or wait too long.",
                href: "/do-we-need-a-peo",
                accent: "text-bold-yellow",
                border: "border-bold-yellow/30",
                glow: "hover:shadow-[0_0_30px_-8px_hsl(43_100%_50%/0.2)]",
              },
            ].map(({ icon: Icon, title, desc, href, accent, border, glow }, i) => (
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
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                    <Button
                      variant="link"
                      className={`mt-6 w-fit p-0 ${accent} font-semibold`}
                      asChild
                    >
                      <Link to={href}>Learn more →</Link>
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
                Most employers don't realize they're overpaying, under-covered,
                or locked into the wrong structure until it's too late.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: DollarSign,
                title: "Overpaying for Benefits",
                desc: "Bundled pricing hides markups. Without a side-by-side comparison you can't see what you're really paying.",
              },
              {
                icon: AlertTriangle,
                title: "Compliance Gaps",
                desc: "One missed filing or misclassification can mean fines, audits, or lawsuits — and most PEOs won't warn you.",
              },
              {
                icon: Clock,
                title: "Slow Onboarding",
                desc: "Weeks of back-and-forth that stall hiring. A bad implementation costs you time and first impressions.",
              },
              {
                icon: Ban,
                title: "Locked-In Contracts",
                desc: "Auto-renewals and long terms keep you stuck. Switching feels impossible — so you never do.",
              },
              {
                icon: Frown,
                title: "Poor Service After Signing",
                desc: "The sales team disappears. Your day-to-day contact barely knows your account.",
              },
              {
                icon: Scale,
                title: "One-Size-Fits-All Plans",
                desc: "Your industry, team size, and goals are unique. A generic plan means you're paying for things you don't need.",
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

      {/* ── 5. MYTH VS TRUTH ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                A lot of bad PEO decisions start with bad advice.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Here are a few things you've probably heard — and what's
                actually true.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl space-y-8">
            {[
              {
                myth: "\u201CAll PEOs are basically the same.\u201D",
                truth:
                  "PEOs differ dramatically in pricing models, service quality, technology, and compliance support. The wrong match can cost you thousands.",
              },
              {
                myth: "\u201CYou lose control of your employees when you join a PEO.\u201D",
                truth:
                  "You stay the employer of record for day-to-day operations. A PEO is a co-employment partner \u2014 you keep full control of hiring, culture, and management.",
              },
              {
                myth: "\u201CSwitching PEOs is too disruptive \u2014 just stay where you are.\u201D",
                truth:
                  "With proper transition planning, switching is smoother than most expect. Staying in a bad fit is far more expensive long-term.",
              },
            ].map(({ myth, truth }, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Myth */}
                  <Card className="border-destructive/20 bg-destructive/5">
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center gap-2">
                        <XCircle size={18} className="text-destructive" />
                        <span className="text-xs font-bold uppercase tracking-wider text-destructive">
                          Myth
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-foreground/80 italic">
                        {myth}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Truth */}
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
                You don't need to figure this out alone.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Pillar gives you a structured process, clear comparisons, and
                real support — so you can stop guessing and start moving
                forward.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Discovery-First Approach",
                desc: "We start by understanding your team, your pain points, and what actually matters before recommending anything.",
              },
              {
                icon: BarChart3,
                title: "Side-by-Side Option Review",
                desc: "We present your top options in a clear, comparable format — no jargon, no pressure.",
              },
              {
                icon: Clock,
                title: "Clear Process & Timeline",
                desc: "You'll always know what step you're on, what's next, and how long it takes.",
              },
              {
                icon: FileSearch,
                title: "Support with Documents",
                desc: "We help you gather census data, tax docs, and everything your new provider needs.",
              },
              {
                icon: ClipboardCheck,
                title: "Proposal Walkthroughs",
                desc: "We walk through each proposal line by line so you know exactly what you're agreeing to.",
              },
              {
                icon: HeartHandshake,
                title: "Warm Handoff into Onboarding",
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
              <p className="mt-4 text-muted-foreground">
                Three steps. No pressure. Just clarity.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 max-w-4xl">
            <div className="relative grid gap-12 md:grid-cols-3">
              {/* connector line */}
              <div className="pointer-events-none absolute left-1/2 top-8 hidden h-px w-[66%] -translate-x-1/2 bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40 md:block" />

              {[
                {
                  step: "01",
                  title: "Tell us what isn't working",
                  desc: "Share your current setup, frustrations, and goals. We listen before we recommend.",
                },
                {
                  step: "02",
                  title: "We compare the right options",
                  desc: "You get a side-by-side review of providers matched to your needs — not a generic list.",
                },
                {
                  step: "03",
                  title: "Move forward with a cleaner plan",
                  desc: "Choose with confidence and get hands-on support through the entire transition.",
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
              <p className="mt-4 text-muted-foreground">
                Here's what changes when you have the right guidance.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "More Confidence",
                desc: "You'll know you chose the right provider — not just the loudest one.",
              },
              {
                icon: RefreshCcw,
                title: "Less Admin Drag",
                desc: "Streamlined payroll, benefits, and compliance so your team can focus on mission.",
              },
              {
                icon: Target,
                title: "Better-Fit Support",
                desc: "A provider matched to your size, industry, and growth trajectory.",
              },
              {
                icon: ArrowRightLeft,
                title: "Clearer Next Steps",
                desc: "No more second-guessing. You'll have a timeline and a plan.",
              },
              {
                icon: Users,
                title: "Stronger Employee Experience",
                desc: "Better benefits, smoother onboarding, and more reliable HR support.",
              },
              {
                icon: Scale,
                title: "Less Risk in Transition",
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
                Guidance matters when the path isn't obvious.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Pillar was built because too many employers make critical PEO
                decisions without real support. We're not a PEO. We're not a
                broker. We're the guide that helps you compare, evaluate, and
                move forward — with confidence.
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
              <p className="mt-4 text-muted-foreground">
                Quick answers to the things employers ask most.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-2xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "What exactly does Pillar do?",
                    a: "Pillar helps employers compare PEO and HR outsourcing options through a guided, structured process. We're not a PEO — we're buyer-side support that helps you evaluate proposals, understand pricing, and make a confident decision.",
                  },
                  {
                    q: "Is Pillar a PEO broker?",
                    a: "No. Brokers typically represent PEOs and earn commissions from them. Pillar works on the employer's side — we help you compare options objectively without steering you toward a specific provider.",
                  },
                  {
                    q: "How much does it cost to work with Pillar?",
                    a: "We offer several engagement levels depending on your needs. Reach out through our contact page and we'll walk you through what makes sense for your situation.",
                  },
                  {
                    q: "Can you help us switch from our current PEO?",
                    a: "Absolutely. We specialize in helping employers evaluate alternatives, manage the transition timeline, and ensure nothing falls through the cracks during the switch.",
                  },
                  {
                    q: "Do you work with nonprofits and churches?",
                    a: "Yes — in fact, nonprofits, churches, and ministries are one of our core focus areas. We understand the unique compliance, benefits, and budget considerations these organizations face.",
                  },
                  {
                    q: "How long does the process take?",
                    a: "Most engagements take 2–6 weeks depending on complexity. We'll give you a clear timeline upfront so you know exactly what to expect.",
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
                Whether you're exploring PEOs for the first time, switching
                providers, or just want to know your options — Pillar gives you
                the structure and support to move forward without second-guessing.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base font-semibold"
                  asChild
                >
                  <Link to="/contact">Compare My Options</Link>
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
