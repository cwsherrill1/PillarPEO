import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 text-base"
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
                myth: ""All PEOs are basically the same."",
                truth:
                  "PEOs differ dramatically in pricing models, service quality, technology, and compliance support. The wrong match can cost you thousands.",
              },
              {
                myth: ""You lose control of your employees when you join a PEO."",
                truth:
                  "You stay the employer of record for day-to-day operations. A PEO is a co-employment partner — you keep full control of hiring, culture, and management.",
              },
              {
                myth: ""Switching PEOs is too disruptive — just stay where you are."",
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
    </>
  );
};

export default Index;
