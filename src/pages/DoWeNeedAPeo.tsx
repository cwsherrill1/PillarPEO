import { Link } from "react-router-dom";
import { CheckCircle2, MessageSquare, BarChart3, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const signals = [
  "Payroll, benefits, or compliance now take more leadership time than they should",
  "You're hiring faster than your HR processes can keep up",
  "One person is handling payroll, benefits, and compliance — and it's not their main role",
  "You're worried about an employment-related mistake you haven't caught yet",
  "You want to offer competitive benefits but can't access enterprise-level plans",
];

const steps = [
  {
    num: 1,
    icon: MessageSquare,
    title: "Quick assessment",
    desc: "We learn where your team stands and whether a PEO would actually solve the right problems.",
  },
  {
    num: 2,
    icon: BarChart3,
    title: "Options comparison",
    desc: "If a PEO makes sense, we show you the best-fit providers side by side — with plain-language tradeoffs.",
  },
  {
    num: 3,
    icon: Handshake,
    title: "Decision support",
    desc: "We help you move forward with confidence — or tell you a PEO isn't the right move yet.",
  },
];

const DoWeNeedAPeo = () => (
  <>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-24 md:py-32 text-center max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-4xl md:text-5xl font-800 leading-tight">
            Growth is outrunning your HR.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body">
            If payroll, benefits, and compliance are getting heavier every
            quarter, Pillar helps you figure out whether a PEO is the right
            next step — before things get messy.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8 shadow-lg shadow-accent/20"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a First-Time PEO Strategy Call
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

    {/* Signals Checklist */}
    <section className="bg-background">
      <div className="container max-w-3xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            Signs it might be time
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            Most companies don't think about a PEO until something goes wrong.
            These are the early signals.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 space-y-4">
            {signals.map((signal) => (
              <li key={signal} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span className="text-lg text-muted-foreground leading-relaxed">
                  {signal}
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
            How we help first-time buyers
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

    {/* Mid-page CTA */}
    <section className="bg-accent/5 py-14">
      <div className="container text-center">
        <Reveal>
          <p className="text-lg font-medium text-foreground">
            Not sure if a PEO is right for you? That's exactly why we're here.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 px-8 shadow-lg shadow-accent/20"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a First-Time PEO Strategy Call
            </a>
          </Button>
        </Reveal>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-24 md:py-32 text-center max-w-2xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800">
            Still not sure? That's what we're here for.
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Start with a short conversation. We'll help you figure out whether
            a PEO makes sense — and if it doesn't, we'll point you in the
            right direction.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8 shadow-lg shadow-accent/20"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a First-Time PEO Strategy Call
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-700 text-base px-8"
            >
              <Link to="/resources">See Our Resources</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default DoWeNeedAPeo;
