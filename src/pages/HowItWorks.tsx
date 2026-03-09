import { Link } from "react-router-dom";
import {
  MessageSquare,
  Search,
  FileCheck,
  Handshake,
  BarChart3,
  ClipboardList,
  Clock,
  ShieldCheck,
  FileText,
  PhoneCall,
  RefreshCcw,
  Users,
  Building,
  ChevronRight,
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
const steps = [
  {
    num: 1,
    icon: MessageSquare,
    title: "Tell us what is not working",
    desc: "We start with a discovery call to understand your current setup, pain points, and what matters most to your team. No sales pitch — just honest questions.",
  },
  {
    num: 2,
    icon: Search,
    title: "We research and compare options",
    desc: "Based on your needs we identify the best-fit PEO and HRO providers, build a side-by-side comparison, and surface the trade-offs that actually matter.",
  },
  {
    num: 3,
    icon: FileCheck,
    title: "Review proposals together",
    desc: "We walk through pricing, coverage, service models, and contract terms so you can make a confident decision — not a pressured one.",
  },
  {
    num: 4,
    icon: Handshake,
    title: "Transition with support",
    desc: "Once you choose a direction, we coordinate the onboarding timeline, help with required documents, and provide a warm handoff so nothing falls through the cracks.",
  },
];

const deliverables = [
  { icon: BarChart3, title: "Structured comparison", desc: "A clear side-by-side view of your top options, not a generic brochure." },
  { icon: ClipboardList, title: "Proposal review", desc: "We decode the fine print so you understand exactly what you are signing." },
  { icon: Clock, title: "Timeline clarity", desc: "A realistic schedule for evaluation, decision, and transition." },
  { icon: ShieldCheck, title: "Transition support", desc: "Hands-on coordination so your team is not left figuring it out alone." },
  { icon: FileText, title: "Document guidance", desc: "Help gathering and organizing everything your new provider needs." },
  { icon: PhoneCall, title: "Ongoing check-ins", desc: "We stay available after the switch to make sure things land the way they should." },
];

const audiences = [
  {
    icon: RefreshCcw,
    title: "Switching PEOs",
    desc: "Your current provider is not delivering. We help you evaluate alternatives without starting from scratch.",
    href: "/switch-your-peo",
  },
  {
    icon: Building,
    title: "Nonprofits",
    desc: "Mission-driven organizations need HR support designed for lean teams and tight budgets.",
    href: "/peo-for-nonprofits",
  },
  {
    icon: Users,
    title: "First-time buyers",
    desc: "Not sure if a PEO is even the right move? We help you figure that out before you commit.",
    href: "/do-we-need-a-peo",
  },
];

/* ── Page ── */
const HowItWorks = () => (
  <>
    {/* 1 · Hero */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-4xl md:text-5xl font-800 leading-tight">
            A clear process for a complicated decision.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body">
            Choosing the right PEO or HR outsourcing partner should not feel like guesswork.
            We walk you through a structured comparison so you can move forward with confidence.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 2 · Four-Step Timeline */}
    <section className="bg-background">
      <div className="container py-20 md:py-28 max-w-4xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            Four steps. Zero guesswork.
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            Every engagement follows the same proven path — designed to give you clarity, not complexity.
          </p>
        </Reveal>

        <div className="mt-16 relative">
          {/* vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-12">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.num} delay={i * 120}>
                  <div className="flex gap-6 md:gap-8 items-start relative">
                    {/* step indicator */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-heading text-lg md:text-xl font-800 shadow-md">
                      {s.num}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-accent" />
                        <h3 className="font-heading text-xl md:text-2xl font-700 text-foreground">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* 3 · What You Get */}
    <section className="bg-muted/40">
      <div className="container py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            What you walk away with
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            Every client gets a clear set of deliverables — not vague promises.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((d, i) => {
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

    {/* 4 · Who This Is For */}
    <section className="bg-background">
      <div className="container py-20 md:py-28 max-w-4xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            Who this is built for
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 100}>
                <div className="text-center">
                  <div className="mx-auto w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-700 text-foreground">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                  <Link
                    to={a.href}
                    className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-accent hover:underline"
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* 5 · Final CTA */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-2xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800">
            Ready to compare your options?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Start with a short conversation. We will tell you if we can help — and if we
            cannot, we will point you in the right direction.
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

export default HowItWorks;
