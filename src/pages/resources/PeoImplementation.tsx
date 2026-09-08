import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import { ArticleByline, ArticleAuthorBio, buildArticleJsonLd } from "@/components/ArticleByline";

const ARTICLE = buildArticleJsonLd({
  title: "What to Expect During a PEO Implementation",
  description: "What the next 60–90 days look like after you sign, and how to prepare.",
  path: "/services/transitions",
  datePublished: "2026-01-15",
  dateModified: "2026-09-05",
});

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span>{children}</span></li>
);

const Section = ({ title, children, alt = false }: { title: string; children: React.ReactNode; alt?: boolean }) => (
  <section className={alt ? "bg-muted/30 py-20 md:py-28" : "py-20 md:py-28"}>
    <div className="container max-w-3xl">
      <Reveal>
        <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">{title}</h2>
        <div className="mt-4 space-y-4 text-lg leading-8 text-foreground/85">{children}</div>
      </Reveal>
    </div>
  </section>
);

const bumps = [
  "Missing or incorrect employee data that delays setup: get ahead of this with a thorough data audit",
  "Benefits elections that don't process correctly for certain employee classifications",
  "State tax registration delays for new states: some states take 4–6 weeks for registration confirmation",
  "Employees who don't complete enrollment in time: have a clear communication and follow-up plan",
  "Payroll deductions that need adjustment after the first run",
];

const PeoImplementation = () => (
  <>
    <SEOHead
      title="What to Expect During a PEO Implementation"
      fullTitle
      description="Signing with a PEO is step one. Here's what the next 60–90 days look like and how to prepare for them."
      jsonLd={ARTICLE}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            What to Expect During a
            <span className="text-accent"> PEO Implementation</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Signing with a PEO is step one. Here's what the next 60–90 days look like, and what to check at each stage.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <ArticleByline datePublished="January 15, 2026" />
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

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <Link to="/resources" className="mb-8 inline-flex items-center text-sm font-semibold text-green-ink hover:text-green-ink/80">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources
          </Link>
          <p className="text-xl leading-8 text-foreground/85">
            Most employers focus heavily on the evaluation and selection process, and then are surprised by how much work happens after they sign. A PEO implementation involves migrating payroll data, transitioning benefits, communicating with employees, and coordinating between your current and new providers. This guide walks you through what to expect and what to watch for.
          </p>
        </Reveal>
      </div>
    </section>

    <Section title="What Happens in the First Two Weeks After Signing" alt>
      <ul className="space-y-3">
        <Bullet>Your assigned implementation coordinator will request your employee data (roster, classifications, pay rates, direct deposit info, deductions)</Bullet>
        <Bullet>Benefits enrollment opens: employees will receive instructions for selecting their new plans</Bullet>
        <Bullet>Payroll structure is built in the new system, including pay schedules, tax withholding, and any state registrations needed</Bullet>
        <Bullet>You'll receive access to the HR admin portal and complete an initial orientation</Bullet>
      </ul>
      <p className="font-semibold text-foreground">The main employer job at this stage is getting accurate data to the implementation team quickly. Delays here ripple through the entire timeline.</p>
    </Section>

    <Section title="Employee Benefits Enrollment">
      <p>Enrollment during implementation typically runs as a special enrollment period. Employees will need to:</p>
      <ul className="space-y-3">
        <Bullet>Log into the new benefits portal (or complete paper forms if required)</Bullet>
        <Bullet>Select their health, dental, and vision plans</Bullet>
        <Bullet>Designate beneficiaries for life insurance and relevant coverage</Bullet>
        <Bullet>Enroll in any voluntary benefits or supplemental coverage</Bullet>
      </ul>
      <p>Employers should communicate clearly and early. Employees who miss the enrollment window may be locked out of coverage for the plan year. Your implementation coordinator should provide communication templates. Use them.</p>
    </Section>

    <Section title="The First Payroll" alt>
      <p>Here's how to make the first payroll run on a new PEO platform go smoothly:</p>
      <ul className="space-y-3">
        <Bullet>Complete a full parallel review: verify every employee's pay rate, deductions, and direct deposit information before processing</Bullet>
        <Bullet>Confirm the payroll schedule aligns with your existing pay cadence</Bullet>
        <Bullet>Review state and local tax withholding setup, especially for employees in multiple states</Bullet>
        <Bullet>Confirm that year-to-date earnings are correctly loaded if you're mid-year</Bullet>
      </ul>
      <p>Most PEO implementations run a test payroll internally before the first live run. Ask your coordinator to walk you through the review process.</p>
    </Section>

    <Section title="Common Bumps to Plan For">
      <ul className="space-y-3">
        {bumps.map((b) => <Bullet key={b}>{b}</Bullet>)}
      </ul>
      <p className="font-semibold text-foreground">None of these are catastrophic, but all of them are easier to handle when you're not surprised by them.</p>
    </Section>

    <Section title="Months 2–3: Stabilization" alt>
      <ul className="space-y-3">
        <Bullet>Confirming quarterly payroll tax filings are being submitted correctly</Bullet>
        <Bullet>Verifying that benefits are active and claims are processing</Bullet>
        <Bullet>Getting your team comfortable with the HR portal and self-service tools</Bullet>
        <Bullet>Scheduling a 60-day check-in with your PEO service contact and your advisor</Bullet>
      </ul>
      <p>This is also the right time to establish your ongoing service relationship: know who to call for what, what the response SLA looks like, and what the escalation path is if something goes wrong.</p>
    </Section>

    <Section title="How Pillar Stays Involved After You Sign">
      <ul className="space-y-3">
        <Bullet>Stay in contact with your implementation coordinator to flag issues early</Bullet>
        <Bullet>Help you review first payroll and first benefits enrollment</Bullet>
        <Bullet>Provide a post-implementation debrief to confirm everything landed correctly</Bullet>
        <Bullet>Remain your contact if service issues arise in the first year</Bullet>
      </ul>
      <p className="font-semibold text-foreground">The goal is to confirm the PEO you selected performs the way it was sold, and to catch it early if it doesn't.</p>
    </Section>

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">
            About to go through a PEO implementation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Pillar stays involved from first conversation to first payroll on a new platform. Talk to an advisor to get a realistic picture of what this looks like for your company.
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

export default PeoImplementation;
