import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, LegalNote } from "@/components/content/Prose";
import { SITE_URL, breadcrumb } from "@/data/organization";

const guides = [
  {
    slug: "north-carolina",
    name: "North Carolina",
    summary:
      "E-Verify, workers' comp, and the headcount thresholds that trigger each, organized by how many people you employ.",
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    summary:
      "E-Verify for every employer, workers' comp, wage-change notice, and the Pregnancy Accommodations Act, by headcount.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "State employer guides", path: "/resources/state-employer-guides" },
    ]),
  ],
};

const StateEmployerGuides = () => (
  <>
    <SEOHead
      title="State Employer Guides"
      description="Employer HR rules by headcount for the states Pillar has verified so far: North Carolina and South Carolina."
      canonical={`${SITE_URL}/resources/state-employer-guides`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Resources · State employer guides"
      title="State employer guides."
      intro="Two states so far, organized by headcount, and nothing we haven't verified."
    />

    <Section title="What's here today">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        This is not a 50-state library. Pillar is built around North Carolina and South
        Carolina, and those are the two guides that exist right now. We add a state only
        after we've verified its thresholds against the primary source, not by copying a
        generic list. If you need a state that isn't here, tell us and we'll build it the
        same way.
      </p>
    </Section>

    <Section title="Available guides" alt>
      <div className="grid gap-6 md:grid-cols-2">
        {guides.map((g) => (
          <Reveal key={g.slug}>
            <Link to={`/resources/state-employer-guides/${g.slug}`} className="block h-full">
              <Card className="h-full border-l-4 border-l-accent card-elevated hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-700 text-foreground">{g.name}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {g.summary}
                  </p>
                  <span className="mt-4 inline-block font-heading text-sm font-700 text-green-ink">
                    Read the guide →
                  </span>
                </CardContent>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
      <p className="mt-8">
        Staff in both states? See{" "}
        <Link to="/resources/nc-vs-sc-employment-law" className="text-green-ink hover:underline">
          North Carolina vs. South Carolina employment law
        </Link>{" "}
        for a side-by-side table, or start with the{" "}
        <Link to="/resources/multi-state-employer-checklist" className="text-green-ink hover:underline">
          multi-state employer checklist
        </Link>
        .
      </p>
      <LegalNote />
    </Section>

    <Section title="The standard each guide is written to">
      <p className="text-lg leading-8 text-foreground/85">
        Every guide is organized the same way: by headcount. That is deliberate, because
        almost everything in employment law switches on at a headcount threshold rather
        than at a revenue figure or a company stage. A guide tells you what applies at one
        employee, what changes at the state's next threshold, and what changes again when
        federal law joins in. If you employ people in more than one state, you read the
        strictest rule that applies to any of them, because the rules stack rather than
        cancel out.
      </p>
      <p className="mt-6 text-lg leading-8 text-foreground/85">
        Within each headcount band, a guide covers the same categories: employment
        eligibility verification, workers' compensation, wage payment and wage-change
        notice, mandatory posters and notices, leave entitlements, final-pay rules, and
        registration obligations with the state's revenue and unemployment agencies. Where
        a state simply has no requirement in a category, the guide says so instead of
        leaving a gap you might read as an oversight.
      </p>
    </Section>

    <Section title="How each figure is verified" alt>
      <p className="text-lg leading-8 text-foreground/85">
        Every threshold in these guides is checked against the primary source: the state
        statute or the administering agency's own published page, not a law firm summary,
        a vendor blog, or another consultancy's checklist. When the primary source and a
        secondary source disagree, the primary source wins and the secondary one is
        discarded. Each guide carries a visible verification date, and anything we have not
        yet confirmed against the primary source is marked in the text as unverified rather
        than quietly published.
      </p>
      <p className="mt-6 text-lg leading-8 text-foreground/85">
        Guides are re-checked on a set rhythm: after each state's legislative session
        closes, at the start of each calendar year when wage bases and rates reset, and
        whenever an agency issues a rule change we are tracking. The verification date on
        the page moves only when the content has actually been re-checked, so a recent date
        means recent work rather than a recent edit.
      </p>
      <p className="mt-6 text-lg leading-8 text-foreground/85">
        What these guides are not: they are not legal advice, and they are not a substitute
        for counsel on a live matter. They tell you which obligations exist and where the
        thresholds sit, so you can see whether your firm is on the right side of them. If
        you find something out of date or believe a threshold is wrong, tell us. We will
        re-check it against the source and correct the page.
      </p>
    </Section>

    <ServiceCta
      heading="Not sure which rules apply to your headcount?"
      body="An HR audit checks your actual registrations and thresholds against what the law requires, state by state."
      proof="multi-state client quote referencing a specific state finding, with headcount."
      secondary={{ label: "See the HR audit", href: "/services/hr-audit" }}
    />
  </>
);

export default StateEmployerGuides;
