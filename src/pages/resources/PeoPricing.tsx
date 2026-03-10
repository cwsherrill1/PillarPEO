import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const Section = ({ title, children, alt = false }: { title: string; children: React.ReactNode; alt?: boolean }) => (
  <section className={alt ? "bg-muted/30 py-20 md:py-28" : "py-20 md:py-28"}>
    <div className="container max-w-3xl">
      <Reveal>
        <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">{title}</h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">{children}</div>
      </Reveal>
    </div>
  </section>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span>{children}</span></li>
);

const PeoPricing = () => (
  <>
    <SEOHead
      title="PEO Pricing: What to Watch For"
      description="Hidden fees, bundled costs, and renewal surprises. Learn how to read a PEO quote like an insider with this comprehensive pricing guide."
    />

    {/* Hero */}
    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            PEO Pricing:
            <span className="text-accent"> What to Watch For</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Hidden fees, bundled costs, and renewal surprises. Here's how to read a PEO quote like an insider.
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
            PEO pricing is deliberately complex. Not because it has to be — but because opacity tends to favor the seller. Most employers receive a quote, compare one or two numbers, and sign without fully understanding what they've agreed to. This guide breaks down how PEO pricing actually works, what to watch for, and why having an independent advisor in your corner before you sign matters.
          </p>
        </Reveal>
      </div>
    </section>

    <Section title="The Two Main Pricing Models" alt>
      <p>PEOs typically price in one of two ways:</p>
      <ul className="space-y-3">
        <Bullet><strong className="text-foreground">Percentage of payroll:</strong> The PEO charges a percentage of your total payroll — often between 2% and 6%, though it varies widely by provider and workforce profile. This model means your cost scales as you hire and give raises.</Bullet>
        <Bullet><strong className="text-foreground">Per-employee-per-month (PEPM):</strong> A flat fee charged per employee per month, typically ranging from $80 to $200+ depending on the service tier and your size. This model is more predictable but can be more expensive for lower-wage workforces.</Bullet>
      </ul>
      <p>Some PEOs use a hybrid — a lower PEPM with add-on fees layered in for specific services. Always ask what model is being quoted and what is — and is not — included.</p>
    </Section>

    <Section title="What's Usually Bundled (And What's Not)">
      <p>A PEO quote often includes:</p>
      <ul className="space-y-2">
        {["Payroll processing and tax filing", "HR support and compliance guidance", "Access to group health, dental, and vision plans", "Workers' compensation coverage", "A technology platform for HR administration"].map((t) => <Bullet key={t}>{t}</Bullet>)}
      </ul>
      <p className="mt-4">What's often <em>not</em> included (or is priced separately):</p>
      <ul className="space-y-2">
        {["401(k) administration fees", "State unemployment insurance (SUTA) management fees", "EPLI (employment practices liability insurance)", "Onboarding or implementation fees", "Per-state registration fees for multi-state employers", "Premium services like HR consulting or dedicated support"].map((t) => <Bullet key={t}>{t}</Bullet>)}
      </ul>
      <p className="mt-4 font-semibold text-foreground">Always ask for a full-service breakdown — not just the headline rate.</p>
    </Section>

    <Section title="The Renewal Problem" alt>
      <p>The most common source of PEO cost surprise isn't the first year — it's year two and beyond. PEOs can and do increase rates at renewal, and the mechanisms vary:</p>
      <ul className="space-y-2">
        <Bullet>Health plan premium increases passed through to you</Bullet>
        <Bullet>Changes to the workers' comp experience modification factor</Bullet>
        <Bullet>Payroll admin fee increases tied to consumer price index or internal cost structures</Bullet>
        <Bullet>Benefits tier changes that shift cost to employees</Bullet>
      </ul>
      <p className="mt-4">Ask any PEO you're evaluating: <em>"What was the average renewal increase for clients similar to us over the last three years?"</em> If they can't or won't answer, that's data.</p>
    </Section>

    <Section title="Workers' Comp and Benefits — The Hidden Cost Drivers">
      <p>Two line items that often move in ways employers don't anticipate:</p>
      <Card className="mt-4 border-accent/20">
        <CardContent className="p-6">
          <h3 className="font-heading font-700 text-foreground">Workers' Compensation</h3>
          <p className="mt-2 text-sm text-muted-foreground">PEOs pool workers' comp coverage across their client base. If your industry classification carries higher risk, you may pay a higher rate. If the PEO's overall loss ratio worsens, rates can increase at renewal even if your own claims history is clean. Ask whether you're experience-rated individually or pooled, and what happens if claims spike.</p>
        </CardContent>
      </Card>
      <Card className="mt-4 border-accent/20">
        <CardContent className="p-6">
          <h3 className="font-heading font-700 text-foreground">Benefits</h3>
          <p className="mt-2 text-sm text-muted-foreground">PEO benefits pricing depends heavily on your workforce demographics — average age, family enrollment rates, and geographic concentration all affect cost. A quote that looks great in October may look different after the insurance carrier reviews your census. Always ask when the benefits renewal happens and whether the quote is guaranteed.</p>
        </CardContent>
      </Card>
    </Section>

    <Section title="How to Compare Quotes Accurately" alt>
      <p>Comparing PEO quotes is harder than it looks because providers use different structures. To make an apples-to-apples comparison:</p>
      <ul className="space-y-2">
        <Bullet>Ask every provider to quote on the same scope of services</Bullet>
        <Bullet>Separate the administrative fee from the benefits cost from the workers' comp cost</Bullet>
        <Bullet>Model out cost at current headcount, then at 20% growth</Bullet>
        <Bullet>Ask for a multi-year projection, not just year-one pricing</Bullet>
        <Bullet>Factor in the implementation or onboarding fee — some waive it, some don't</Bullet>
      </ul>
      <p className="mt-4">This is one of the primary reasons employers use Pillar. We collect data once, submit to multiple providers, and compare quotes on a normalized basis so you're not doing this manually across three different pricing formats.</p>
    </Section>

    <Section title="What a Fair Deal Looks Like">
      <p>A reasonable PEO relationship should deliver:</p>
      <ul className="space-y-2">
        <Bullet>Transparent pricing with clear line-item breakdowns</Bullet>
        <Bullet>A named contact with a defined response SLA</Bullet>
        <Bullet>Competitive benefits that employees actually perceive as better than before</Bullet>
        <Bullet>Clear renewal terms with reasonable notice windows</Bullet>
        <Bullet>A clean exit process if the relationship doesn't work out</Bullet>
      </ul>
      <p className="mt-4 font-semibold text-foreground">If a PEO can't give you clarity on all five before you sign, that's a red flag — not a reason to move faster.</p>
    </Section>

    {/* CTA */}
    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">
            Want someone to decode your PEO quote?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Pillar collects your data once, submits to multiple PEOs, and compares every quote on the same basis. You see everything side by side — no sales pressure, no guessing.
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

export default PeoPricing;
