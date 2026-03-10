import { Link } from "react-router-dom";
import {
  MessageSquare,
  FileText,
  ClipboardList,
  BarChart3,
  Monitor,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

const HowItWorks = () => (
  <>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-3xl">
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
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-12">
            {stages.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.num} delay={i * 100}>
                  <div className="flex gap-6 md:gap-8 items-start relative">
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

    {/* Timeline */}
    <section className="bg-muted/40">
      <div className="container py-20 md:py-28 max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            What the timeline usually looks like.
          </h2>
          <p className="mt-6 text-muted-foreground text-center leading-relaxed">
            A typical process takes around 60 days from first conversation to
            signed agreement — though timing depends on complexity and how
            quickly information moves.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 space-y-3 text-muted-foreground">
            {[
              "Discovery happens early",
              "Data gathering takes 1–2 weeks",
              "Proposals may take 1–2 weeks after submission",
              "Decision support and paperwork follow from there",
              "Onboarding timing depends on complexity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-2xl">
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
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8"
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
