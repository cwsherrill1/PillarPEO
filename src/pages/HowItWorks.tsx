import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import {
  MessageSquare,
  FileText,
  ClipboardList,
  BarChart3,
  Monitor,
  Handshake,
  Calendar,
  Layers,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const stages = [
  {
    num: 1,
    icon: MessageSquare,
    title: "Discovery",
    desc: "We learn what's happening in your business now — what feels heavy, what matters most, and what a better outcome looks like.",
  },
  {
    num: 2,
    icon: FileText,
    title: "Data gathering",
    desc: "We help you gather the documents needed to compare real options, walking you through it step by step.",
  },
  {
    num: 3,
    icon: ClipboardList,
    title: "Underwriting & proposals",
    desc: "Once the information package is complete, proposals are developed and prepared for review.",
  },
  {
    num: 4,
    icon: BarChart3,
    title: "Proposal review",
    desc: "We help you compare options side by side so you can understand tradeoffs, fit, and next steps.",
  },
  {
    num: 5,
    icon: Monitor,
    title: "Demos & decision support",
    desc: "We coordinate demos and answer questions so your team can move toward a confident decision.",
  },
  {
    num: 6,
    icon: Handshake,
    title: "Signing & onboarding",
    desc: "Once a decision is made, we support a smoother handoff into onboarding and implementation.",
  },
];

const timelinePhases = [
  { label: "Discovery", weeks: "Week 1", width: "12%", color: "bg-accent" },
  { label: "Data Gathering", weeks: "Week 2–3", width: "20%", color: "bg-secondary" },
  { label: "Underwriting", weeks: "Week 3–5", width: "24%", color: "bg-soft-blue" },
  { label: "Review & Demos", weeks: "Week 5–7", width: "24%", color: "bg-accent" },
  { label: "Decision & Onboarding", weeks: "Week 7–9", width: "20%", color: "bg-primary" },
];

const stats = [
  { icon: Calendar, value: "~60", suffix: "days", label: "Typical timeline" },
  { icon: Layers, value: "6", suffix: "stages", label: "Structured process" },
  { icon: DollarSign, value: "Zero", suffix: "cost", label: "To employers" },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PEO Broker Process",
  serviceType: "PEO Broker",
  provider: { "@type": "Organization", name: "Pillar PEO Advisors", url: "https://pillarpeo.com" },
  areaServed: "US",
  description: "Pillar's six-stage PEO broker process takes employers from discovery to decision in about 60 days.",
};

const HowItWorks = () => (
  <>
    <SEOHead
      title="How It Works — PEO Broker Process"
      description="Pillar's six-stage PEO broker process takes you from discovery to decision in about 60 days — at no cost to the employer."
      jsonLd={serviceJsonLd}
    />

    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(236,70%,22%)] text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(145_63%_49%/0.08),transparent_60%)]" />
      <div className="container relative z-10 py-24 md:py-32 text-center max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-4xl md:text-5xl font-800 leading-tight">
            A clear process for a decision that carries real weight.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body">
            Pillar guides employers from discovery to decision with a structured
            process built around clarity, timing, and fit.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Stats Strip */}
    <section className="border-b border-border bg-background py-12">
      <div className="container">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 120}>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-green-ink">
                    <Icon size={22} />
                  </div>
                  <p className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                    {s.value}
                    <span className="ml-1 text-lg font-600 text-muted-foreground">{s.suffix}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Six-Stage Timeline */}
    <section className="bg-background">
      <div className="container py-20 md:py-28 max-w-4xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            Six stages. Zero guesswork.
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            Every engagement follows the same proven path — designed to give you
            clarity, not complexity.
          </p>
        </Reveal>

        <div className="mt-16 relative">
          {/* Gradient timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-secondary to-primary hidden sm:block rounded-full" />

          <div className="space-y-6">
            {stages.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.num} delay={i * 100}>
                  <Card className="relative border-l-4 border-l-accent hover-lift card-elevated">
                    <CardContent className="p-6 flex gap-5 md:gap-7 items-start">
                      <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-heading text-lg md:text-xl font-800 shadow-md">
                        {s.num}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-5 h-5 text-green-ink" />
                          <h3 className="font-heading text-xl md:text-2xl font-700 text-foreground">
                            {s.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed max-w-xl">
                          {s.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* Visual Progress Bar Timeline */}
    <section className="bg-muted/40">
      <div className="container py-20 md:py-28 max-w-4xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            What the timeline usually looks like.
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            A typical process takes around 60 days from first conversation to
            signed agreement — though timing depends on complexity.
          </p>
        </Reveal>

        {/* Desktop horizontal bar */}
        <Reveal delay={200}>
          <div className="mt-14 hidden md:block">
            <div className="flex h-14 rounded-xl overflow-hidden shadow-md">
              {timelinePhases.map((phase, i) => (
                <div
                  key={phase.label}
                  className={`${phase.color} relative flex items-center justify-center transition-all duration-700 ease-out ${
                    i === 0 ? "rounded-l-xl" : ""
                  } ${i === timelinePhases.length - 1 ? "rounded-r-xl" : ""}`}
                  style={{ width: phase.width }}
                >
                  {/* Separator */}
                  {i > 0 && (
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-background/30" />
                  )}
                </div>
              ))}
            </div>
            {/* Labels */}
            <div className="flex mt-4">
              {timelinePhases.map((phase) => (
                <div key={phase.label} style={{ width: phase.width }} className="px-1 text-center">
                  <p className="text-sm font-heading font-700 text-foreground">{phase.label}</p>
                  <p className="text-xs text-muted-foreground">{phase.weeks}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Mobile vertical timeline */}
        <div className="mt-12 md:hidden space-y-4">
          {timelinePhases.map((phase, i) => (
            <Reveal key={phase.label} delay={i * 80}>
              <div className="flex items-center gap-4">
                <div className={`w-4 h-4 rounded-full ${phase.color} shadow-sm flex-shrink-0`} />
                <div className="flex-1 flex items-center justify-between bg-card rounded-lg p-4 shadow-sm border border-border">
                  <span className="font-heading font-700 text-foreground text-sm">{phase.label}</span>
                  <span className="text-xs text-muted-foreground">{phase.weeks}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(236,70%,22%)] text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(145_63%_49%/0.08),transparent_60%)]" />
      <div className="container relative z-10 py-24 md:py-32 text-center max-w-2xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800">
            Ready to compare your options?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Start with a short conversation. We'll tell you if we can help —
            and if we can't, we'll point you in the right direction.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8 shadow-lg shadow-accent/20"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule a PEO Strategy Call
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

export default HowItWorks;
