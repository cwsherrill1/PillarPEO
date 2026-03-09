import { Link } from "react-router-dom";
import {
  Users,
  ShieldCheck,
  Heart,
  UserCheck,
  FileSpreadsheet,
  Building2,
  DollarSign,
  Sparkles,
  Scale,
  HeadphonesIcon,
  FileText,
  MessageSquare,
  Search,
  Handshake,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

const challenges = [
  { icon: Users, title: "Small teams, big responsibilities", desc: "Your HR person is also your office manager, bookkeeper, and event planner. That is not sustainable." },
  { icon: ShieldCheck, title: "Compliance burden", desc: "Federal, state, and grant-specific requirements keep shifting — and missing one can cost you funding." },
  { icon: Heart, title: "Benefits competitiveness", desc: "You are competing for talent with organizations that can offer better health plans and perks." },
  { icon: UserCheck, title: "Employee retention", desc: "Mission-driven work only goes so far. People also need competitive pay and reliable HR support." },
  { icon: FileSpreadsheet, title: "Grant and reporting complexity", desc: "Funders want clean records and clear labor allocations. Manual tracking creates risk." },
  { icon: Building2, title: "Board expectations", desc: "Your board wants professional HR infrastructure without the cost of building it in-house." },
];

const lookFor = [
  { icon: DollarSign, title: "Nonprofit pricing models", desc: "Providers who understand lean budgets and offer transparent, predictable costs." },
  { icon: Sparkles, title: "Benefits access at scale", desc: "Group purchasing power so your team gets health, dental, and retirement options they deserve." },
  { icon: Scale, title: "Compliance for grant-funded orgs", desc: "Support with labor law, reporting requirements, and audit-ready documentation." },
  { icon: HeadphonesIcon, title: "Responsive service for lean teams", desc: "A provider that picks up the phone — because you do not have time to chase answers." },
  { icon: FileText, title: "Flexible contracts", desc: "Terms that fit your fiscal year and growth stage, not rigid multi-year lock-ins." },
];

const miniSteps = [
  { num: 1, icon: MessageSquare, title: "Tell us about your organization", desc: "A short call to understand your team size, budget, and what is not working today." },
  { num: 2, icon: Search, title: "We find nonprofit-friendly options", desc: "We research providers experienced with mission-driven organizations and present a clear comparison." },
  { num: 3, icon: Handshake, title: "Transition with support", desc: "Once you choose, we coordinate the switch so your team stays focused on the mission." },
];

const PeoForNonprofits = () => (
  <>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-4xl md:text-5xl font-800 leading-tight">
            HR support built for mission-driven teams.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body">
            Nonprofits deserve the same quality HR infrastructure as any business —
            without the overhead of building it in-house.
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

    {/* Why Nonprofits Need a PEO */}
    <section className="bg-background">
      <div className="container py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            You are stretched thin. That is exactly the point.
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            Nonprofits face the same HR challenges as any employer — with fewer resources to handle them.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 80}>
                <Card className="card-elevated border-0 h-full">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-700 text-foreground">{c.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* What We Look For */}
    <section className="bg-muted/40">
      <div className="container py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            What the right PEO partner looks like for a nonprofit.
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            Not every provider understands mission-driven work. Here is what we screen for.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lookFor.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.title} delay={i * 80}>
                <Card className="card-elevated border-0 h-full">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-700 text-foreground">{d.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* How It Works (condensed) */}
    <section className="bg-background">
      <div className="container py-20 md:py-28 max-w-4xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            How it works
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

        <Reveal>
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

    {/* Final CTA */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-2xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800">
            Your mission deserves better HR support.
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Start with a short conversation. We will help you find a provider that
            understands nonprofit teams — or point you in the right direction.
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
              <Link to="/resources">Get the Buyer Guide</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default PeoForNonprofits;
