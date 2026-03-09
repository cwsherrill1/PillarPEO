import { Link } from "react-router-dom";
import {
  PhoneOff,
  TrendingUp,
  Monitor,
  ShieldAlert,
  Lock,
  EyeOff,
  BarChart3,
  FileSearch,
  CalendarCheck,
  Handshake,
  PhoneCall,
  MessageSquare,
  Search,
  ArrowRight,
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

const painPoints = [
  { icon: PhoneOff, title: "Poor service", desc: "Calls go unanswered. Issues drag on for weeks. Your team feels like an afterthought." },
  { icon: TrendingUp, title: "Rising costs", desc: "Renewal rates keep climbing with no clear explanation — and no room to negotiate." },
  { icon: Monitor, title: "Bad technology", desc: "Clunky portals, manual processes, and tools your team avoids using." },
  { icon: ShieldAlert, title: "Compliance gaps", desc: "You are not confident your provider is keeping up with changing regulations." },
  { icon: Lock, title: "Rigid contracts", desc: "Locked into terms that no longer fit your business — with penalties for leaving." },
  { icon: EyeOff, title: "Lack of transparency", desc: "You do not know what you are paying for or where your money is going." },
];

const differentiators = [
  { icon: BarChart3, title: "Side-by-side comparison", desc: "We build a clear, structured view of your best alternatives — not a sales pitch." },
  { icon: FileSearch, title: "Contract review", desc: "We decode the fine print so you understand exactly what you are signing up for." },
  { icon: CalendarCheck, title: "Transition planning", desc: "A realistic timeline and checklist so nothing falls through the cracks." },
  { icon: Handshake, title: "Onboarding support", desc: "We coordinate with your new provider to make the switch as smooth as possible." },
  { icon: PhoneCall, title: "Ongoing check-ins", desc: "We stay available after the transition to make sure things land the way they should." },
];

const miniSteps = [
  { num: 1, icon: MessageSquare, title: "Tell us what is broken", desc: "A short call to understand your frustrations and what matters most." },
  { num: 2, icon: Search, title: "We compare alternatives", desc: "We research providers that fit your needs and present a structured comparison." },
  { num: 3, icon: Handshake, title: "Transition with support", desc: "Once you decide, we coordinate the switch so your team is never left guessing." },
];

const SwitchYourPeo = () => (
  <>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-4xl md:text-5xl font-800 leading-tight">
            Your PEO is not working. Now what?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body">
            You should not have to stay with a provider that is costing you more and
            delivering less. We help you evaluate alternatives without starting over.
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

    {/* Pain Points */}
    <section className="bg-background">
      <div className="container py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            Signs it is time to switch.
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            If any of these sound familiar, you are not alone — and you do not have to settle.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 80}>
                <Card className="card-elevated border-0 h-full">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-700 text-foreground">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* What We Do Differently */}
    <section className="bg-muted/40">
      <div className="container py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            We help you evaluate without starting from scratch.
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            Switching PEOs does not have to mean chaos. Here is what we bring to the table.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => {
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
            Ready to explore better options?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Start with a short conversation. If we can help, we will show you how.
            If not, we will point you in the right direction.
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

export default SwitchYourPeo;
