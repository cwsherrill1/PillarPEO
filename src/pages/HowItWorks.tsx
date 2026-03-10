import { Link } from "react-router-dom";
import {
  MessageSquare,
  Search,
  FileCheck,
  Handshake,
  BarChart3,
  Clock,
  FileText,
  RefreshCcw,
  Users,
  Building,
  ChevronRight,
  ClipboardList,
  Monitor,
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
    desc: "We start by understanding what is happening in your business now: what feels heavy, what is not working, what matters most, and what a better outcome would need to look like.",
  },
  {
    num: 2,
    icon: FileText,
    title: "Data gathering",
    desc: "If it makes sense to move forward, we help you gather the documents needed to compare real options. We walk you through this step by step.",
  },
  {
    num: 3,
    icon: ClipboardList,
    title: "Underwriting and proposal development",
    desc: "Once the information package is complete, proposals are developed and prepared for review.",
  },
  {
    num: 4,
    icon: BarChart3,
    title: "Proposal review",
    desc: "Pillar helps you compare the options side by side so you can understand tradeoffs, fit, and next-step implications.",
  },
  {
    num: 5,
    icon: Monitor,
    title: "Demos and decision support",
    desc: "If needed, we help coordinate demos and answer questions so your team can move toward a confident decision.",
  },
  {
    num: 6,
    icon: Handshake,
    title: "Signing and onboarding handoff",
    desc: "Once a decision is made, we help support a smoother handoff into onboarding and implementation.",
  },
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

const HowItWorks = () => (
  <>
    {/* 1 · Hero */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-4xl md:text-5xl font-800 leading-tight">
            A clear process for a decision that carries real weight.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body">
            Pillar guides employers from discovery to decision with a structured
            process built around clarity, timing, fit, and support.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Intro */}
    <section className="bg-background">
      <div className="container max-w-3xl py-16 text-center md:py-20">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            A lot of buyers do not need more noise. They need a process they can
            trust. Pillar's role is to make the path clearer, explain what
            happens next, and help you move through the process with fewer
            surprises.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 2 · Six-Stage Timeline */}
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

    {/* 3 · Timeline */}
    <section className="bg-muted/40">
      <div className="container py-20 md:py-28 max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            What the timeline usually looks like.
          </h2>
          <p className="mt-6 text-muted-foreground text-center leading-relaxed">
            A typical process is around 60 days from the first conversation to
            signed agreement, though the exact timeline depends on complexity,
            scheduling, and how quickly information moves.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 space-y-3 text-muted-foreground">
            {[
              "Discovery happens early",
              "Data gathering takes 1–2 weeks",
              "Proposals may take 1–2 weeks after submission",
              "Decision support and paperwork follow from there",
              "Onboarding can take additional time depending on complexity",
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

    {/* 4 · Documents */}
    <section className="bg-background">
      <div className="container py-20 md:py-28 max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            What we may need from you.
          </h2>
          <p className="mt-6 text-muted-foreground text-center leading-relaxed">
            To compare options accurately, we may ask for items like:
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-8 space-y-3 text-muted-foreground">
            {[
              "Completed application",
              "Employee census",
              "Payroll reports",
              "SUTA report",
              "Benefits invoices and summaries",
              "Workers' compensation information when relevant",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground/80 italic text-center">
            We will guide you through this step by step and help you understand
            what matters, what can come later, and where to find what you need.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 5 · Who This Is For */}
    <section className="bg-muted/40">
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
                  <h3 className="font-heading text-xl font-700 text-foreground">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                    {a.desc}
                  </p>
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

    {/* 6 · Final CTA */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-2xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800">
            Ready to compare your options?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Start with a short conversation. We will tell you if we can help —
            and if we cannot, we will point you in the right direction.
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
              <Link to="/resources">Get the Buyer Guide</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default HowItWorks;
