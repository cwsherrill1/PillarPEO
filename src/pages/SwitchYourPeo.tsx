import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import {
  CheckCircle2,
  XCircle,
  MessageSquare,
  BarChart3,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const signs = [
  "Service feels reactive or inconsistent",
  "Costs keep rising without clear value",
  "Your team has outgrown the current setup",
  "Renewals create stress instead of confidence",
  "You're staying mostly because switching feels complicated",
];

const myths = [
  {
    myth: "\u201CWe're probably stuck.\u201D",
    truth: "Better-fit options exist, and transitions can be planned.",
  },
  {
    myth: "\u201CSwitching will be chaos.\u201D",
    truth: "A guided process creates far more clarity than staying in a setup that's already causing friction.",
  },
  {
    myth: "\u201CIt's probably not worth reviewing.\u201D",
    truth: "Sometimes the biggest cost is continuing with a fit you no longer trust.",
  },
];

const steps = [
  {
    num: 1,
    icon: MessageSquare,
    title: "Switch assessment",
    desc: "We review your current PEO setup, identify what's not working, and confirm whether switching makes sense.",
  },
  {
    num: 2,
    icon: BarChart3,
    title: "Better-fit comparison",
    desc: "We present alternatives side by side — pricing, service model, benefits — so you can see real tradeoffs.",
  },
  {
    num: 3,
    icon: Handshake,
    title: "Transition support",
    desc: "We help coordinate the move to minimize disruption and keep your team informed throughout.",
  },
];

const switchJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PEO Switching Advisory",
  serviceType: "PEO Broker",
  provider: { "@type": "Organization", name: "Pillar PEO Advisors", url: "https://pillarpeo.com" },
  areaServed: "US",
  description: "Pillar helps employers compare better-fit PEOs and manage the transition without disruption.",
};

const SwitchYourPeo = () => (
  <>
    <SEOHead
      title="Switch Your PEO — Independent Broker Review | Pillar"
      fullTitle
      description="Wondering if it's time to switch PEOs? Pillar is an independent PEO broker — we compare options and manage the transition without disruption."
      jsonLd={switchJsonLd}
      
    />
    {/* Hero */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-24 md:py-32 text-center max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-4xl md:text-5xl font-800 leading-tight">
            Your current PEO may not be your best fit.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body">
            If service has slipped, renewal pressure is rising, or the
            relationship no longer feels right, Pillar helps you compare
            better-fit options and plan a cleaner move.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8 shadow-lg shadow-accent/20"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a PEO Switch Review
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-700 text-base px-8"
            >
              <Link to="/services/peo-brokerage">See How It Works</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Signs */}
    <section className="bg-background">
      <div className="container py-20 md:py-28 max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            Signs it may be time.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 space-y-4">
            {signs.map((sign) => (
              <li key={sign} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-ink" />
                <span className="text-lg leading-relaxed">{sign}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>

    {/* How we help switchers — 3-step plan */}
    <section className="bg-muted/40">
      <div className="container max-w-4xl py-20 md:py-28">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            How we help switchers
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
                  <Icon className="mx-auto mt-4 h-6 w-6 text-green-ink" />
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
            Not sure if it's time to switch? Let's find out together.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 px-8 shadow-lg shadow-accent/20"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a PEO Switch Review
            </a>
          </Button>
        </Reveal>
      </div>
    </section>

    {/* Myth vs Truth */}
    <section className="bg-background py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center mb-12">
            What people assume vs. what's true.
          </h2>
        </Reveal>

        <div className="space-y-8">
          {myths.map(({ myth, truth }, i) => (
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
                      <CheckCircle2 size={18} className="text-green-ink" />
                      <span className="text-xs font-bold uppercase tracking-wider text-green-ink">
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
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-24 md:py-32 text-center max-w-2xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800">
            Ready to explore better options?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Start with a short conversation. If we can help, we'll show you
            how. If not, we'll point you in the right direction.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8 shadow-lg shadow-accent/20"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a PEO Switch Review
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

export default SwitchYourPeo;
