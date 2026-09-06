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
      "E-Verify, workers' comp, and the headcount thresholds that trigger each — organized by how many people you employ.",
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    summary:
      "E-Verify for every employer, workers' comp, wage-change notice, and the Pregnancy Accommodations Act — by headcount.",
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

    <ServiceCta
      heading="Not sure which rules apply to your headcount?"
      body="An HR audit checks your actual registrations and thresholds against what the law requires — state by state."
      proof="PROOF SLOT — multi-state client quote referencing a specific state finding, with headcount."
      secondary={{ label: "See the HR audit", href: "/services/hr-audit" }}
    />
  </>
);

export default StateEmployerGuides;
