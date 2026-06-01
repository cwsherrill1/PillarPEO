import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import { ArticleByline, ArticleAuthorBio, buildArticleJsonLd } from "@/components/ArticleByline";
import heroImg from "@/assets/blog/switch-peos-hero.jpg";
import { ArticleHero } from "@/components/ArticleHero";

const ARTICLE = buildArticleJsonLd({
  title: "How to Switch PEOs Without Disrupting Payroll",
  description: "What the switching process actually looks like and how to do it without missing a beat.",
  path: "/resources/how-to-switch-peos",
});

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span>{children}</span></li>
);

const timeline = [
  { weeks: "Weeks 1–6", title: "Data collection & proposal phase", desc: "Gather all required data, submit to providers, receive and compare proposals." },
  { weeks: "Weeks 6–8", title: "Shortlist & selection", desc: "Demos, reference checks, final negotiation, letter of intent." },
  { weeks: "Weeks 8–10", title: "Onboarding & setup", desc: "New PEO builds your account, employees begin enrollment." },
  { weeks: "Weeks 10–12", title: "Parallel run & cutover", desc: "Final payroll on old PEO, first payroll on new PEO, benefits effective date coordination." },
  { weeks: "Month 3+", title: "Post-transition support", desc: "Your advisor confirms everything is running correctly." },
];

const HowToSwitchPeos = () => (
  <>
    <SEOHead
      title="How to Switch PEOs Without Disrupting Payroll"
      description="The fear of transition keeps employers stuck in bad PEO relationships. Here's what the switching process actually looks like and how to do it right."
      jsonLd={ARTICLE}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            How to Switch PEOs
            <span className="text-accent"> Without Disrupting Payroll</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            The fear of transition keeps thousands of employers stuck in PEO relationships that aren't working. Here's what the process actually looks like — and how to do it right.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <ArticleByline />
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Talk to an Advisor</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    <ArticleHero src={heroImg} alt="Illustration of a bridge connecting two PEO structures, symbolizing transition" />

 className="mb-8 inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources
          </Link>
          <p className="text-xl leading-8 text-foreground/85">
            The number one reason employers stay in a bad PEO relationship isn't loyalty — it's fear. Fear of payroll disruption. Fear of employee confusion during benefits transitions. Fear of losing momentum right when the business needs stability. That fear is understandable, but it's also largely preventable with the right plan. Switching PEOs is a structured process, not a leap of faith.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">Understand Your Current Contract</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/85">Before anything else, pull your current PEO agreement and identify:</p>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <Bullet>Your termination notice window (typically 30–90 days)</Bullet>
            <Bullet>Your benefits contract end date — PEO benefits often run on a plan year that doesn't match your service contract</Bullet>
            <Bullet>Any penalties or obligations tied to early termination</Bullet>
            <Bullet>Your data portability rights — payroll history, employee records, and compliance filings</Bullet>
          </ul>
          <p className="mt-4 text-base font-semibold text-foreground">The best time to begin evaluating a switch is 4–6 months before your renewal date.</p>
        </Reveal>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">The Comparison Phase</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/85">Before you can switch, you need to know where you're going. This means:</p>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <Bullet>Gathering your payroll data, benefits census, workers' comp history, and SUTA rates</Bullet>
            <Bullet>Submitting that data to multiple PEO providers simultaneously</Bullet>
            <Bullet>Comparing proposals on a normalized basis — same scope, same headcount, same plan structure</Bullet>
            <Bullet>Shortlisting two or three providers, conducting demos, and checking references</Bullet>
          </ul>
          <p className="mt-4 text-base text-muted-foreground">This phase typically takes 4–8 weeks when done properly. Rushing it is how employers end up with a new PEO that's only marginally better than the old one.</p>
        </Reveal>
      </div>
    </section>

    {/* Timeline */}
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">The Transition Timeline</h2>
        </Reveal>
        <div className="mt-8 space-y-4">
          {timeline.map((step, i) => (
            <Reveal key={i} delay={i * 80}>
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-heading font-800">{i + 1}</span>
                  <div>
                    <p className="text-sm font-semibold text-accent">{step.weeks}</p>
                    <h3 className="font-heading font-700 text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">How Payroll Continuity Is Protected</h2>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <Bullet>The new PEO typically runs their first payroll after a clean break from the prior provider</Bullet>
            <Bullet>Your payroll data — employee details, direct deposit, deductions — is migrated before cutover</Bullet>
            <Bullet>The transition usually happens at a natural payroll boundary (start of a month or quarter)</Bullet>
            <Bullet>A good advisor coordinates timing between both providers to eliminate overlap or gaps</Bullet>
          </ul>
          <p className="mt-4 text-base text-muted-foreground">Employees typically notice only the change in the portal they log into — not any disruption to their paycheck.</p>
        </Reveal>
      </div>
    </section>

    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">Benefits Transition — What Employees Experience</h2>
          <p className="mt-4 text-lg leading-8 text-foreground/85">Benefits are where transitions require the most communication. Employees may:</p>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <Bullet>Receive new insurance cards</Bullet>
            <Bullet>Need to re-select benefit options through a new enrollment portal</Bullet>
            <Bullet>See a change in their summary plan descriptions</Bullet>
            <Bullet>Need to update their FSA or HSA contributions</Bullet>
          </ul>
          <p className="mt-4 text-base text-muted-foreground">The best approach is proactive, clear communication — ideally a brief all-staff message explaining the change in positive terms, a clear enrollment window, and HR or advisor availability to answer questions. Most employees adapt easily when given clear notice and good communication.</p>
        </Reveal>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">What Pillar Manages in a Switch</h2>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <Bullet>Data collection and submission to multiple providers</Bullet>
            <Bullet>Proposal comparison on a normalized basis</Bullet>
            <Bullet>Reference checks and due diligence</Bullet>
            <Bullet>Transition timeline planning and coordination</Bullet>
            <Bullet>Employee communication templates</Bullet>
            <Bullet>Coordination with both the outgoing and incoming PEO</Bullet>
            <Bullet>Post-transition check-ins to confirm everything landed correctly</Bullet>
          </ul>
          <p className="mt-4 text-base font-semibold text-foreground">The employer's job is to make the selection. Our job is to make everything else manageable.</p>
        </Reveal>
      </div>
    </section>

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">
            Considering a switch but not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Pillar has guided dozens of employers through PEO transitions — from initial evaluation to first payroll on the new platform. Talk to an advisor and find out what switching looks like for your specific situation.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Talk to an Advisor</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default HowToSwitchPeos;
