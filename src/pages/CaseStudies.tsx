import SEOHead from "@/components/SEOHead";
import UpdatedLine from "@/components/services/UpdatedLine";
import ProofSlot from "@/components/ProofSlot";
import { Reveal } from "@/components/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/data/pricing";
import { SITE_URL, breadcrumb } from "@/data/organization";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/case-studies" },
    ]),
  ],
};

const formatSteps = [
  { title: "Situation", desc: "What the client's HR setup looked like, and what prompted the engagement." },
  { title: "What we found", desc: "The specific gaps or costs uncovered: named plainly, with a number." },
  { title: "What changed", desc: "What Pillar did, what the client did, and the measurable result: with a number." },
];

const placeholders = [
  "First published case study: client firm, HR audit engagement, situation / what we found / what changed with a number, published with client permission.",
  "Second published case study: PEO transition or brokerage placement, situation / what we found / what changed with a number, published with client permission.",
  "Third published case study: fractional HR engagement, situation / what we found / what changed with a number, published with client permission.",
];

/**
 * Index page only. No case study content is invented here: every result
 * slot is a visible ProofSlot until a real, client-approved case study
 * exists to fill it.
 */
const CaseStudies = () => (
  <>
    <SEOHead
      title="Case Studies"
      description="Pillar's case studies are published only with client permission, in a fixed format: the situation, what we found, and what changed, with a number."
      canonical={`${SITE_URL}/case-studies`}
      jsonLd={jsonLd}
    />

    <section className="bg-primary text-primary-foreground">
      <div className="container max-w-3xl py-24 md:py-32 text-center">
        <Reveal>
          <h1 className="font-heading text-4xl font-800 md:text-5xl">Case Studies</h1>
          <p className="mt-6 text-lg text-primary-foreground/80">
            We publish case studies only with a client's permission, and only once there's a
            real, specific result to report. We don't write hypothetical or composite stories.
          </p>
          <div className="mt-6 flex justify-center">
            <UpdatedLine />
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-background py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">
            The format every case study follows
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every case study on this site, once published, follows the same three-part
            structure, and includes a specific number, not a vague claim.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {formatSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <Card className="h-full border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-700 text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">
            What's coming, once permission and results are in
          </h2>
          <p className="mt-4 text-muted-foreground">
            These slots are placeholders, not previews of specific clients. Nothing below is a
            real client, name, or number; each will only be filled once a real engagement is
            complete and the client has agreed to be named or described.
          </p>
        </Reveal>

        <div className="mt-10 space-y-6">
          {placeholders.map((need, i) => (
            <Reveal key={need} delay={i * 100}>
              <ProofSlot needs={need} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-background py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">
            The permission policy, in full
          </h2>
          <p className="mt-4 text-muted-foreground">
            Professional-services firms are cautious about being written about, and they
            should be. HR work touches pay, classification, terminations and immigration
            paperwork: subjects a managing partner does not want attached to the firm's
            name in a search result. So the rule here is simple and it does not bend.
          </p>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li>
              Nothing is published without written permission from the client, given after
              they have read the finished draft. Verbal approval in a meeting is not enough.
            </li>
            <li>
              The client chooses the level of identification: named firm, or described only
              by sector, headcount band and region. Anonymous is always an option and is
              never treated as a lesser case study.
            </li>
            <li>
              No employee is identifiable, ever, not by name, role, or a detail specific
              enough to make them recognisable inside their own firm.
            </li>
            <li>
              Permission can be withdrawn at any time, for any reason, and the page comes
              down without a conversation about it.
            </li>
            <li>
              We do not publish composites, illustrative examples, or "based on a real
              engagement" stories. A composite is fiction with a straight face.
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-14 font-heading text-2xl font-800 text-foreground md:text-3xl">
            What a number has to mean here
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every case study carries at least one figure, and the figure has to be one the
            client would recognise on their own records: employees reclassified, states
            registered, days from kickoff to go-live, the size of a corrected filing, the
            difference between the quotes on the table. What you will not see is a
            percentage saving with no baseline, an ROI multiple, or a satisfaction score
            invented for the page.
          </p>
          <p className="mt-4 text-muted-foreground">
            Where a result depends on assumptions, a projected cost, a comparison against
            what a provider would have charged, the assumptions are printed alongside it.
            If a client is happy to be quoted but the result cannot be measured, we publish
            the quote as a quote and do not dress it up as an outcome.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <h2 className="mt-14 font-heading text-2xl font-800 text-foreground md:text-3xl">
            Why this page is mostly empty right now
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pillar is a young firm, and the engagements that would make the best case
            studies are either still running or belong to clients who have not been asked
            yet. Filling the space with stock photography and invented testimonials would
            be faster and completely worthless to you. The placeholders above stay visible
            on purpose: they are the honest state of this page, and they will be replaced
            with real, approved work as it completes.
          </p>
          <p className="mt-4 text-muted-foreground">
            In the meantime, the most useful thing we can show you is the work itself: how
            an audit is scoped, what a transition plan contains, and what we would need
            from your firm. Ask on a call and we will walk you through a redacted
            deliverable rather than a success story.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-primary text-primary-foreground">
      <div className="container max-w-2xl py-20 md:py-28 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 md:text-4xl">
            Want to see how this would look for your firm?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Start with a conversation about your situation. If it becomes a case study later,
            we'll ask first.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 px-8">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default CaseStudies;
