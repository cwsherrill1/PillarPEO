import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const questions = [
  {
    q: "How is your pricing actually structured — and what changes at renewal?",
    a: "Most PEO quotes look clean on the surface. What employers miss is how the fee is calculated — per-employee-per-month (PEPM), percentage of payroll, or a bundled rate — and what can shift at renewal. Ask for the last three years of renewal history for comparable clients. If a PEO can't or won't share that, it tells you something.",
  },
  {
    q: "Who is my dedicated service contact, and what's your average response time?",
    a: "Service quality is the most common reason employers switch PEOs. 'You'll have a team' is not the same as 'you'll have a named contact who knows your account.' Ask specifically: who handles payroll questions, who handles employee relations issues, and what is the typical response time SLA. Get it in writing if possible.",
  },
  {
    q: "What does your workers' comp and benefits underwriting process look like?",
    a: "Two of the biggest sources of cost surprise in a PEO relationship are workers' compensation rate changes and benefits renewal increases. Ask how each is underwritten, who bears the risk if claims spike, and whether your account is experience-rated or pooled. The answer changes your risk profile significantly.",
  },
  {
    q: "How do I get out if this doesn't work?",
    a: "This question makes PEO reps uncomfortable — which is exactly why you should ask it. Understand the termination notice window (typically 30–90 days), what happens to your benefits mid-year if you exit, and how data and payroll history are transferred. A good PEO will have clean answers. A bad one will dodge.",
  },
  {
    q: "Can you give me three client references in my industry and size range?",
    a: "Not just references — references who match your profile. A PEO that's excellent for a 200-person manufacturing company may be a poor fit for a 40-person professional services firm. Ask for references with similar headcount, multi-state presence, or industry, and actually call them.",
  },
];

const FiveQuestions = () => (
  <>
    <SEOHead
      title="5 Questions to Ask Any PEO Before Signing"
      description="The critical questions most employers never think to ask before signing with a PEO. Use this checklist to separate a good deal from an expensive mistake."
    />

    {/* Hero */}
    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Checklist</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            5 Questions to Ask Any PEO
            <span className="text-accent"> Before Signing</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Most employers walk into PEO evaluations underprepared. These are the questions that separate a good deal from an expensive mistake.
          </p>
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

    {/* Intro */}
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <Link to="/resources" className="mb-8 inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources
          </Link>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Signing with a PEO is a significant commitment. Most contracts run 12 months minimum, and switching mid-year costs time, money, and disruption. The problem is that most PEO sales reps are trained to close — not to help you evaluate. These five questions are what Pillar asks on behalf of every client before any recommendation is made.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Questions */}
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container max-w-3xl space-y-8">
        {questions.map((item, i) => (
          <Reveal key={i} delay={i * 80}>
            <Card className="overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-heading font-800 text-lg">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="font-heading text-xl font-700 text-foreground">{item.q}</h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Bonus Insight */}
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <Card className="border-accent/30 bg-accent/5">
            <CardContent className="p-6 md:p-8">
              <h2 className="font-heading text-2xl font-800 text-foreground">What most employers never think to ask</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Beyond these five, there are deal-specific questions that depend on your size, industry, and current setup — things like how the PEO handles multi-state SUTA, what their technology stack looks like, and how they handle a payroll cutover. This is where having an independent advisor changes the outcome. Pillar asks these questions on your behalf — before you're locked into anything.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">
            Want someone to ask these questions for you?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            That's exactly what Pillar does. We run the evaluation, compare the proposals, and make sure you're asking the right questions before you sign anything.
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

export default FiveQuestions;
