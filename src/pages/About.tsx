import { Link } from "react-router-dom";
import {
  Shield,
  Compass,
  Users,
  Eye,
  Heart,
  Lightbulb,
  Handshake,
  Target,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";


/* ── Data ────────────────────────────────────────────────────────── */
const differentiators = [
  {
    icon: Shield,
    title: "Independent",
    desc: "We are not a PEO, not a broker, and not paid by any provider. Our only obligation is to you.",
  },
  {
    icon: Compass,
    title: "Structured Process",
    desc: "A repeatable, research-backed framework replaces gut-feel decisions with clarity and confidence.",
  },
  {
    icon: Users,
    title: "Employer-First",
    desc: "Every recommendation starts with your workforce, your culture, and your growth trajectory.",
  },
  {
    icon: Eye,
    title: "Transparent",
    desc: "No hidden fees, no referral commissions. You always know what you are paying for and why.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Honesty over commission",
    desc: "We would rather tell you the truth than close a deal. If a PEO is not the right move, we will say so.",
  },
  {
    icon: Lightbulb,
    title: "Clarity over complexity",
    desc: "The PEO market is confusing by design. We exist to make it simple.",
  },
  {
    icon: Handshake,
    title: "Guidance over sales",
    desc: "We are advisors, not salespeople. We walk beside you through the decision — not ahead of you.",
  },
  {
    icon: Target,
    title: "Long-term fit over quick wins",
    desc: "A great PEO relationship lasts years. We help you find one worth keeping.",
  },
];

/* ── Page ────────────────────────────────────────────────────────── */
const About = () => (
  <div>
    {/* ─── Hero ─── */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-24 text-center md:py-32">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            About Pillar
          </p>
          <h1 className="font-heading text-4xl font-800 leading-tight md:text-5xl lg:text-6xl">
            We help employers make
            <br className="hidden md:block" /> confident PEO decisions.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
            Pillar is not a PEO. We are not a broker. We are independent
            advisors who sit on your side of the table — helping you evaluate,
            compare, and choose with total confidence.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
            >
              <Link to="/contact">Compare My Options</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ─── Why Pillar Exists ─── */}
    <section id="why-pillar" className="bg-background">
      <div className="container max-w-3xl py-24 text-center md:py-32">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Why Pillar Exists
          </p>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            Because employers deserve better.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-6 text-left text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Every year, thousands of employers make one of the most impactful
              decisions for their workforce — choosing a PEO — with almost no
              independent guidance. They rely on sales calls, comparison
              websites funded by the very companies being compared, and
              well-meaning but outdated advice.
            </p>
            <p>
              The result? Misaligned partnerships, hidden costs, and HR
              headaches that were supposed to go away. We saw the same patterns
              over and over: employers locked into contracts that did not serve
              them, paying for services they did not need, and missing out on
              options they never knew existed.
            </p>
            <p>
              Pillar was built to close that gap. We created a structured,
              research-driven process that puts employers — not providers — at
              the center of every decision. No commissions, no conflicts of
              interest, no guesswork.
            </p>
            <p className="font-medium text-foreground">
              Just clarity, confidence, and a partner who is genuinely on your
              side.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ─── What Makes Us Different ─── */}
    <section className="bg-muted/40">
      <div className="container py-24 md:py-32">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Our Approach
            </p>
            <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
              Built differently on purpose.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Most advisory firms in this space have a financial relationship
              with the providers they recommend. We don't.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 100}>
              <Card className="h-full border-none bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <d.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-700 text-foreground">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.desc}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ─── Our Values ─── */}
    <section className="bg-background">
      <div className="container py-24 md:py-32">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              What We Stand For
            </p>
            <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
              Principles over profit.
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <v.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-700 text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ─── Final CTA ─── */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-24 text-center md:py-32">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 md:text-4xl">
            Ready to work with a team that
            <br className="hidden md:block" /> puts your interests first?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/60">
            No sales pitch. No pressure. Just a clear-eyed look at your options
            and an honest recommendation.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
            >
              <Link to="/contact">
                Compare My Options <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/resources">
                <BookOpen className="mr-1 h-4 w-4" /> Browse Resources
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;
