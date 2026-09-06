import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal } from "@/components/Reveal";
import { LegalNote } from "@/components/content/Prose";
import { Button } from "@/components/ui/button";
import { pricing, BOOKING_URL, PRIMARY_CTA } from "@/data/pricing";
import { SITE_URL, breadcrumb } from "@/data/organization";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Tools", path: "/tools" },
      { name: "PEO Cost Calculator", path: "/tools/peo-cost-calculator" },
    ]),
  ],
};

function auditBandFor(headcount: number) {
  if (headcount <= 25) return pricing.audit.bands[0];
  if (headcount <= 75) return pricing.audit.bands[1];
  if (headcount <= 150) return pricing.audit.bands[2];
  return null;
}

const setupOptions = [
  { value: "none", label: "No HR person — an owner or ops lead handles it" },
  { value: "diy", label: "In-house HR, no PEO or fractional support" },
  { value: "peo", label: "Already on a PEO" },
  { value: "team", label: "In-house HR team" },
] as const;

/**
 * Honest scope tool: it does not price anything. Pillar doesn't publish
 * dollar figures on the site while pricing is unpublished, and it doesn't
 * publish PEO admin-fee benchmarks either, since those vary by provider and
 * are only known after a real quote. Instead this shows which of Pillar's
 * own engagements fits a company's profile, based on headcount, states and
 * current HR setup — every one of them fixed price, quoted before the work
 * starts.
 */
const PeoCostCalculator = () => {
  const [headcount, setHeadcount] = useState("40");
  const [avgWage, setAvgWage] = useState("55000");
  const [states, setStates] = useState("2");
  const [setup, setSetup] = useState<string>("none");

  const headcountNum = Number(headcount) || 0;
  const statesNum = Number(states) || 1;

  const band = useMemo(() => auditBandFor(headcountNum), [headcountNum]);

  return (
    <>
      <SEOHead
        title="What Working With Pillar Involves — Scope Tool"
        description="See which of Pillar's engagements fit your firm's profile based on headcount, states, and current HR setup. Every engagement is fixed price, quoted before the work starts — this tool does not estimate a dollar amount."
        canonical={`${SITE_URL}/tools/peo-cost-calculator`}
        jsonLd={jsonLd}
      />

      <section className="bg-primary text-primary-foreground">
        <div className="container max-w-3xl py-20 md:py-28 text-center">
          <Reveal>
            <h1 className="font-heading text-4xl font-800 md:text-5xl">What Working With Pillar Involves</h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              This tool does not calculate a dollar amount. Pillar's prices are not published
              while they're under review, and we won't invent what a PEO itself would charge
              you either — that varies by provider and is only known after a real quote. What
              this shows, honestly, is which of Pillar's engagements fit your profile based on
              your headcount, states, and current setup. Every one is fixed price, quoted
              before the work starts.
            </p>
            <div className="mt-6 flex justify-center">
              <UpdatedLine />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container max-w-3xl">
          <Reveal>
            <Card>
              <CardContent className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
                <div>
                  <Label htmlFor="headcount">Headcount</Label>
                  <Input
                    id="headcount"
                    type="number"
                    min={1}
                    value={headcount}
                    onChange={(e) => setHeadcount(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="wage">Average annual wage ($)</Label>
                  <Input
                    id="wage"
                    type="number"
                    min={0}
                    value={avgWage}
                    onChange={(e) => setAvgWage(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="states">Number of states you employ people in</Label>
                  <Input
                    id="states"
                    type="number"
                    min={1}
                    value={states}
                    onChange={(e) => setStates(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="setup">Current HR setup</Label>
                  <Select value={setup} onValueChange={setSetup}>
                    <SelectTrigger id="setup">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {setupOptions.map((o) => (
                        <SelectItem key={o.value} value={o.value}>
                          {o.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container max-w-3xl">
          <Reveal>
            <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">What fits your profile</h2>
          </Reveal>

          <Reveal delay={100}>
            <Card className="mt-6 border-accent/30 bg-accent/5">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-green-ink">HR audit</p>
                  {band ? (
                    <>
                      <p className="mt-1 font-heading text-xl font-800 text-foreground">{band.label}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{band.states}</p>
                    </>
                  ) : (
                    <p className="mt-1 text-base text-muted-foreground">
                      Over 150 employees: scoped individually on a call.
                    </p>
                  )}
                  {statesNum > 5 && band && band.label !== "76–150 employees" && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      Note: with {statesNum} states, you may fall into a broader band than
                      headcount alone suggests — confirm on a call.
                    </p>
                  )}
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fixed price, quoted before the work starts, set by headcount and by how
                    many states you employ in.
                  </p>
                </div>

                {(setup === "none" || setup === "diy") && (
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold uppercase tracking-wider text-green-ink">
                      Ongoing support
                    </p>
                    <p className="mt-1 font-heading text-xl font-800 text-foreground">Fractional HR</p>
                    <p className="mt-1 text-sm text-muted-foreground">{pricing.fractional.note}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Offered in three tiers by monthly hours — Advisor, Partner, and Embedded —
                      each fixed price, quoted before the work starts.
                    </p>
                  </div>
                )}

                {setup === "peo" && (
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold uppercase tracking-wider text-green-ink">
                      If you're comparing or switching PEOs
                    </p>
                    <p className="mt-1 font-heading text-xl font-800 text-foreground">Transitions</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Covers a clean PEO exit, switch or implementation. Fixed price, quoted
                      before the work starts. Comparing PEOs itself is a separate, free
                      brokerage engagement.
                    </p>
                  </div>
                )}

                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-green-ink">PEO brokerage</p>
                  <p className="mt-1 font-heading text-xl font-800 text-foreground">Free to you</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pillar is paid by the PEO provider on brokerage placements, not by you. See{" "}
                    <Link to="/how-we-get-paid" className="font-semibold text-green-ink underline underline-offset-4">
                      how we get paid
                    </Link>{" "}
                    for the full disclosure. {pricing.brokerage.note}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-6">
              <LegalNote />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 rounded-lg border border-border bg-background p-6">
              <h3 className="font-heading text-lg font-700 text-foreground">What this does and doesn't include</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                <li>Includes: which of Pillar's own engagements — audit, fractional HR, transitions, and brokerage — fit your profile.</li>
                <li>Does not include: a dollar estimate for any of it. Pillar's prices are quoted on a scope call, not published on this site.</li>
                <li>Does not include: what a PEO itself will charge for administration, payroll, or benefits — those fees vary by provider, plan design, and your census, and are only accurate after a real quote.</li>
                <li>Does not include: any promised savings. Pillar does not claim a PEO will save you money before we've compared real numbers.</li>
                <li>Your headcount, wage, and state count are the only variables used — nothing here is based on an industry benchmark percentage.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-10 text-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {PRIMARY_CTA}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default PeoCostCalculator;
