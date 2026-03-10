import { Link } from "react-router-dom";
import { CheckCircle2, MessageSquare, BarChart3, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const painPoints = [
  "HR responsibilities falling on people who were hired to do something else",
  "Benefits packages that don't compete with larger organizations",
  "Compliance exposure without a dedicated team to manage it",
  "Payroll complexity growing faster than headcount",
  "Board or donor expectations around operational maturity",
];

const steps = [
  {
    num: 1,
    icon: MessageSquare,
    title: "Nonprofit-focused discovery",
    desc: "We learn about your team size, funding model, and where people-ops friction is highest.",
  },
  {
    num: 2,
    icon: BarChart3,
    title: "Side-by-side comparison",
    desc: "We present PEO options that understand nonprofit budgets and mission-driven culture.",
  },
  {
    num: 3,
    icon: Handshake,
    title: "Decision & onboarding support",
    desc: "We help you move forward with confidence — or tell you if a PEO isn't the right fit.",
  },
];

const PeoForNonprofits = () => (
  <>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-4xl md:text-5xl font-800 leading-tight">
            More mission. Less admin drag.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body">
            Pillar helps nonprofit leaders strengthen payroll, benefits, and
            compliance support so their team spends less time on people
            administration and more time serving the mission.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule a Nonprofit Strategy Call
              </a>
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
      <div className="container max-w-3xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            Sound familiar?
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            Lean teams feel people-ops friction first. These are the signs a
            better support structure could help.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 space-y-4">
            {painPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span className="text-lg text-muted-foreground leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>

    {/* 3-Step Plan */}
    <section className="bg-muted/40">
      <div className="container max-w-4xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            How we help nonprofit teams
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.num} delay={i * 120}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground font-heading text-xl font-800">
                    {step.num}
                  </div>
                  <Icon className="mx-auto mt-4 h-6 w-6 text-accent" />
                  <h3 className="mt-3 font-heading text-lg font-700 text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
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
            Start with a short conversation. We'll help you find a provider
            that understands nonprofit teams — or point you in the right
            direction.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule a Nonprofit Strategy Call
              </a>
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
