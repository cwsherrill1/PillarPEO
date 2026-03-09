import { Link } from "react-router-dom";
import {
  Users,
  Clock,
  HeartPulse,
  ShieldCheck,
  MapPin,
  TrendingDown,
  Briefcase,
  CreditCard,
  FileText,
  Scale,
  HardHat,
  UserX,
  Settings,
  Gem,
  MessageSquare,
  Search,
  Handshake,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── Reveal wrapper ── */
const Reveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ── Data ── */
const signs = [
  { icon: Users, title: "Growing past 10 employees", desc: "At this size, DIY HR starts breaking. Payroll mistakes, compliance gaps, and benefits admin eat into your time." },
  { icon: Clock, title: "Too much time on HR tasks", desc: "If you or your office manager spend hours each week on payroll, onboarding, or benefits questions — that is a sign." },
  { icon: HeartPulse, title: "Struggling to offer competitive benefits", desc: "Small companies pay more for less coverage. A PEO pools buying power so you can offer big-company benefits." },
  { icon: ShieldCheck, title: "Worried about compliance", desc: "Employment law changes constantly. If you are not sure whether you are covered, a PEO can close those gaps." },
  { icon: MapPin, title: "Hiring across state lines", desc: "Multi-state payroll and tax registration is complex. A PEO handles it so you do not have to become an expert." },
  { icon: TrendingDown, title: "High turnover you cannot explain", desc: "Poor benefits, inconsistent policies, and lack of HR support all contribute. A PEO helps you fix the root causes." },
];

const whatYouGet = [
  { icon: Briefcase, title: "Co-employment model", desc: "The PEO becomes the employer of record for tax and benefits purposes — you keep full control of your team and day-to-day operations." },
  { icon: CreditCard, title: "Payroll and tax admin", desc: "Automated payroll processing, tax filings, W-2s, and direct deposits handled for you — across every state you operate in." },
  { icon: HeartPulse, title: "Benefits access", desc: "Medical, dental, vision, 401(k), and other benefits at rates typically reserved for companies 10× your size." },
  { icon: Scale, title: "Compliance support", desc: "Help navigating federal, state, and local employment regulations including ACA, FMLA, COBRA, and more." },
  { icon: HardHat, title: "Workers comp coverage", desc: "Pay-as-you-go workers compensation with no large upfront deposits, plus claims management support." },
];

const notTheFit = [
  { icon: UserX, title: "Very small teams (under 5)", desc: "Most PEOs have minimum headcount requirements, and the cost may not pencil out for very lean teams." },
  { icon: Gem, title: "Highly specialized benefits needs", desc: "If your workforce requires niche or custom benefit plans, a PEO's pooled approach may be too rigid." },
  { icon: Settings, title: "You need full HR control", desc: "Organizations with a mature internal HR function may find co-employment adds a layer they do not need." },
];

const miniSteps = [
  { num: 1, icon: MessageSquare, title: "Discovery call", desc: "We learn about your team, your current setup, and what is not working." },
  { num: 2, icon: Search, title: "Research and compare", desc: "We identify the best-fit options and build a clear side-by-side comparison." },
  { num: 3, icon: Handshake, title: "Transition with support", desc: "Once you decide, we coordinate onboarding so nothing falls through the cracks." },
];

/* ── Page ── */
const DoWeNeedAPeo = () => (
  <>
    {/* 1 · Hero */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-4xl md:text-5xl font-800 leading-tight">
            Not sure if a PEO is the right move?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body">
            It is one of the most common questions growing companies ask — and there is no
            one-size-fits-all answer. We help you figure it out before you commit.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8"
            >
              <Link to="/contact">Compare My Options</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-700 text-base px-8"
            >
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 2 · Signs You Might Be Ready */}
    <section className="bg-background">
      <div className="container py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            Signs it might be time.
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            You do not need to check every box — but if a few of these sound familiar, it is worth exploring.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signs.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <Card className="card-elevated border-0 h-full">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-700 text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* 3 · What a PEO Actually Does */}
    <section className="bg-muted/40">
      <div className="container py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            What you are actually getting.
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            A PEO is not a staffing agency and it is not outsourcing your team. Here is what it really means.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatYouGet.map((w, i) => {
            const Icon = w.icon;
            return (
              <Reveal key={w.title} delay={i * 80}>
                <Card className="card-elevated border-0 h-full">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-700 text-foreground">{w.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* 4 · When a PEO Might Not Be the Fit */}
    <section className="bg-background">
      <div className="container py-20 md:py-28 max-w-4xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            When a PEO might not be the fit.
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            We believe in honest advice. Here are a few scenarios where a PEO may not be your best path.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {notTheFit.map((n, i) => {
            const Icon = n.icon;
            return (
              <Reveal key={n.title} delay={i * 100}>
                <div className="text-center">
                  <div className="mx-auto w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-heading text-xl font-700 text-foreground">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* 5 · How It Works (condensed) */}
    <section className="bg-muted/40">
      <div className="container py-20 md:py-28 max-w-4xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            How we help you decide.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-10">
          {miniSteps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.num} delay={i * 120}>
                <div className="flex gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-heading text-lg font-800 shadow-md">
                    {s.num}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-5 h-5 text-accent" />
                      <h3 className="font-heading text-xl font-700 text-foreground">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-xl">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={400}>
          <div className="mt-10 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              See the full process <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 6 · Final CTA */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-2xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800">
            Still not sure? That is what we are here for.
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Start with a short conversation. We will help you figure out whether a PEO makes
            sense — and if it does not, we will point you in the right direction.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8"
            >
              <Link to="/contact">Compare My Options</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-700 text-base px-8"
            >
              <Link to="/resources">Get the Buyer Guide</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default DoWeNeedAPeo;
