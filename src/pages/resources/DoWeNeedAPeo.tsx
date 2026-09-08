import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageSquare, BarChart3, Handshake, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import UpdatedLine from "@/components/services/UpdatedLine";
import { SITE_URL, breadcrumb } from "@/data/organization";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const signals = [
  "Payroll, benefits, or compliance now take more leadership time than they should",
  "You're hiring faster than your HR processes can keep up",
  "One person is handling payroll, benefits, and compliance, and it's not their main role",
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
    desc: "If a PEO makes sense, we show you the best-fit providers side by side, with plain-language tradeoffs.",
  },
  {
    num: 3,
    icon: Handshake,
    title: "Decision support",
    desc: "We help you move forward with confidence, or tell you a PEO isn't the right move yet.",
  },
];

/** Self-assessment categories, carried over from the standalone readiness checklist. */
const categories = [
  {
    name: "Size & Complexity",
    items: [
      "We have 10 or more W-2 employees",
      "We have employees in more than one state, or plan to within the next 12 months",
      "Our payroll and compliance situation is more complicated than one person can comfortably manage",
      "We've had at least one payroll or compliance issue in the past 18 months",
    ],
  },
  {
    name: "Benefits",
    items: [
      "Our employee benefits feel less competitive than what comparable employers offer",
      "We've lost a candidate or employee at least in part because of benefits",
      "Our benefits renewal feels opaque or like we have little control over the outcome",
      "We'd value access to better plans if the pricing were manageable",
    ],
  },
  {
    name: "HR Administration",
    items: [
      "We don't have a dedicated HR professional: HR is handled by an owner, office manager, or operations lead",
      "HR tasks regularly pull leadership away from higher-value work",
      "We are uncertain about our compliance posture in areas like ACA, FMLA, or state leave laws",
      "We use more than two separate vendors or platforms to handle HR, payroll, and benefits",
    ],
  },
  {
    name: "Growth",
    items: [
      "We expect to add at least 10–20% more employees in the next 12–18 months",
      "Growth is starting to expose gaps in our current HR processes",
      "We are at or approaching a size where employees expect a more professional HR experience",
    ],
  },
  {
    name: "Switching (if already on a PEO)",
    items: [
      "We are coming up on a PEO renewal in the next 3–6 months",
      "We have had service issues, slow response times, or payroll errors with our current provider",
      "We haven't benchmarked our current PEO's pricing or service quality in more than two years",
      "Our current PEO feels like a vendor, not a partner",
    ],
  },
];

const totalItems = categories.reduce((a, c) => a + c.items.length, 0);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "Do We Need a PEO?", path: "/resources/do-we-need-a-peo" },
    ]),
    {
      "@type": "Service",
      name: "First-Time PEO Advisory",
      serviceType: "PEO Broker",
      provider: { "@type": "Organization", name: "Pillar PEO Advisors", url: SITE_URL },
      areaServed: "US",
      description:
        "Pillar helps growing employers assess whether a PEO is the right next step for HR, payroll, and benefits.",
    },
  ],
};

const DoWeNeedAPeo = () => {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (item: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  const count = checked.size;

  const result = useMemo(() => {
    if (count === 0) return null;
    if (count < 5)
      return {
        color: "text-muted-foreground",
        title: "A PEO may not be the right fit right now.",
        desc: "That said, it's worth a conversation to understand what's coming as you grow.",
      };
    if (count <= 10)
      return {
        color: "text-green-ink",
        title: "You're likely in range where a PEO could provide meaningful value.",
        desc: "The question is whether the right PEO at the right price is available for your specific situation.",
      };
    return {
      color: "text-green-ink",
      title: "Your company profile is a strong match for a PEO evaluation.",
      desc: "The more boxes you checked in Benefits and HR Administration, the more urgently it's worth exploring.",
    };
  }, [count]);

  return (
    <>
      <SEOHead
        title="Do We Need a PEO? An Honest Self-Assessment"
        fullTitle
        description="A checklist and self-assessment for deciding whether outsourcing HR, payroll and benefits to a PEO makes sense for your firm."
        canonical={`${SITE_URL}/resources/do-we-need-a-peo`}
        jsonLd={jsonLd}
      />

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
              next step, before things get messy.
            </p>
            <div className="mt-6 flex justify-center">
              <UpdatedLine text="Updated September 2026" />
            </div>
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
                <Link to="/services/peo-brokerage">See How It Works</Link>
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
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-ink" />
                  <span className="text-lg text-muted-foreground leading-relaxed">{signal}</span>
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
                    <Icon className="mx-auto mt-4 h-6 w-6 text-green-ink" />
                    <h3 className="mt-3 font-heading text-lg font-700 text-foreground">{step.title}</h3>
                    <p className="mt-2 text-base text-muted-foreground leading-relaxed">{step.desc}</p>
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
              Not sure if a PEO is right for you? Book a call and we'll tell you within
              30 minutes whether it's worth pursuing.
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

      {/* Self-assessment checklist, absorbed from the standalone readiness page */}
      <section className="bg-background py-20 md:py-28">
        <div className="container max-w-3xl">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
              Is your company ready for a PEO?
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
              Work through this checklist and see how many of these statements apply
              to your company. A PEO makes a lot of sense for many growing companies,
              and very little sense for others.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container max-w-3xl space-y-8">
          {categories.map((cat, ci) => (
            <Reveal key={cat.name} delay={ci * 60}>
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-heading text-xl font-700 text-foreground">{cat.name}</h3>
                  <div className="mt-4 space-y-4">
                    {cat.items.map((item) => (
                      <label key={item} className="flex cursor-pointer items-start gap-3">
                        <Checkbox
                          checked={checked.has(item)}
                          onCheckedChange={() => toggle(item)}
                          className="mt-0.5"
                        />
                        <span
                          className={`text-base ${checked.has(item) ? "text-foreground font-medium" : "text-muted-foreground"}`}
                        >
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <Reveal>
            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="p-6 md:p-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-green-ink">Your Result</p>
                <p className="mt-2 font-heading text-4xl font-800 text-foreground">
                  {count} <span className="text-lg font-400 text-muted-foreground">/ {totalItems} checked</span>
                </p>
                {result ? (
                  <>
                    <p className={`mt-4 font-heading text-xl font-700 ${result.color}`}>{result.title}</p>
                    <p className="mt-2 text-base text-muted-foreground">{result.desc}</p>
                  </>
                ) : (
                  <p className="mt-4 text-base text-muted-foreground">
                    Check the items above that apply to your company to see your assessment.
                  </p>
                )}
                <p className="mt-4 text-sm text-muted-foreground">
                  Either way, a 30-minute advisor conversation costs nothing and gives you a clear picture of your options.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-24 md:py-32 text-center max-w-2xl">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-4xl font-800">
              Still not sure? Start with a short call.
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              We'll ask about your headcount, states, and current setup, then tell you
              plainly whether a PEO is worth pursuing. If it isn't, we'll say so and
              point you toward what will actually help.
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
                <Link to="/resources">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  See Our Resources
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default DoWeNeedAPeo;
