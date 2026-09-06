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
import { BOOKING_URL, PRIMARY_CTA } from "@/data/pricing";
import { SITE_URL, breadcrumb } from "@/data/organization";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "PEO Cost Calculator", path: "/tools/peo-cost-calculator" },
    ]),
  ],
};

/**
 * These are third-party market figures — what a PEO would charge — not
 * Pillar's own prices, which stay unpublished and are quoted on a scope call.
 *
 * Admin fee bands mirror the ranges published in our PEO cost guide.
 * Health contribution figures are the KFF 2025 Employer Health Benefits
 * Survey averages for employer-paid premium (single and family coverage).
 */
const ADMIN_PEPM_LOW = 80;
const ADMIN_PEPM_HIGH = 200;
const ADMIN_PCT_LOW = 0.02;
const ADMIN_PCT_HIGH = 0.06;
const EMPLOYER_HEALTH_SINGLE = 7900;
const EMPLOYER_HEALTH_FAMILY = 20100;

const setupOptions = [
  { value: "none", label: "No HR person — an owner or ops lead handles it" },
  { value: "diy", label: "In-house HR, no PEO or fractional support" },
  { value: "peo", label: "Already on a PEO" },
  { value: "team", label: "In-house HR team" },
] as const;

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const PeoCostCalculator = () => {
  const [headcount, setHeadcount] = useState("40");
  const [avgWage, setAvgWage] = useState("55000");
  const [states, setStates] = useState("2");
  const [enrolled, setEnrolled] = useState("28");
  const [wcRate, setWcRate] = useState("0.5");
  const [sutaRate, setSutaRate] = useState("1.2");
  const [wageBase, setWageBase] = useState("30000");
  const [setup, setSetup] = useState<string>("none");

  const headcountNum = Math.max(0, Number(headcount) || 0);
  const statesNum = Math.max(1, Number(states) || 1);
  const enrolledNum = Math.max(0, Number(enrolled) || 0);

  const result = useMemo(() => {
    const payroll = headcountNum * (Number(avgWage) || 0);

    const adminPepmLow = ADMIN_PEPM_LOW * headcountNum * 12;
    const adminPepmHigh = ADMIN_PEPM_HIGH * headcountNum * 12;
    const adminPctLow = payroll * ADMIN_PCT_LOW;
    const adminPctHigh = payroll * ADMIN_PCT_HIGH;
    const adminLow = Math.min(adminPepmLow, adminPctLow);
    const adminHigh = Math.max(adminPepmHigh, adminPctHigh);

    const healthLow = enrolledNum * EMPLOYER_HEALTH_SINGLE;
    const healthHigh = enrolledNum * EMPLOYER_HEALTH_FAMILY;

    const wc = payroll * ((Number(wcRate) || 0) / 100);
    const suta = headcountNum * (Number(wageBase) || 0) * ((Number(sutaRate) || 0) / 100);

    return {
      payroll,
      adminPepmLow,
      adminPepmHigh,
      adminPctLow,
      adminPctHigh,
      adminLow,
      adminHigh,
      healthLow,
      healthHigh,
      wc,
      suta,
      totalLow: adminLow + healthLow + wc + suta,
      totalHigh: adminHigh + healthHigh + wc + suta,
    };
  }, [headcountNum, avgWage, enrolledNum, wcRate, sutaRate, wageBase]);

  return (
    <>
      <SEOHead
        title="PEO Cost Calculator: Estimate Your PEO Cost | Pillar"
        fullTitle
        description="Estimate what a PEO would charge your firm a year — admin fee, health contribution, workers' comp and SUTA — with every assumption shown."
        canonical={`${SITE_URL}/tools/peo-cost-calculator`}
        jsonLd={jsonLd}
      />

      <section className="bg-primary text-primary-foreground">
        <div className="container max-w-3xl py-20 md:py-28 text-center">
          <Reveal>
            <h1 className="font-heading text-4xl font-800 md:text-5xl">PEO Cost Calculator</h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              An estimate of what <em>a PEO</em> would charge you in a year — administration,
              your share of health premium, workers' comp and unemployment tax. These are
              market figures, not a quote, and not Pillar's own fees. Every assumption behind
              the number is listed on this page so you can argue with it.
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
                  <Label htmlFor="enrolled">Employees you expect to enrol in the health plan</Label>
                  <Input
                    id="enrolled"
                    type="number"
                    min={0}
                    value={enrolled}
                    onChange={(e) => setEnrolled(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="wc">Workers' comp rate (% of payroll)</Label>
                  <Input
                    id="wc"
                    type="number"
                    step="0.1"
                    min={0}
                    value={wcRate}
                    onChange={(e) => setWcRate(e.target.value)}
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    Use the rate on your current policy. Office and professional classes sit far
                    below trades.
                  </p>
                </div>
                <div>
                  <Label htmlFor="suta">State unemployment (SUTA) rate (%)</Label>
                  <Input
                    id="suta"
                    type="number"
                    step="0.1"
                    min={0}
                    value={sutaRate}
                    onChange={(e) => setSutaRate(e.target.value)}
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    Your assigned experience rate, from your state notice.
                  </p>
                </div>
                <div>
                  <Label htmlFor="wagebase">SUTA taxable wage base per employee ($)</Label>
                  <Input
                    id="wagebase"
                    type="number"
                    min={0}
                    value={wageBase}
                    onChange={(e) => setWageBase(e.target.value)}
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    Set by each state each year — check your state's current figure.
                  </p>
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
            <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">
              Estimated annual PEO cost
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <Card className="mt-6 border-accent/30 bg-accent/5">
              <CardContent className="p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-green-ink">
                  Estimate of what a PEO would charge
                </p>
                <p className="mt-2 font-heading text-3xl font-800 tabular-nums text-foreground md:text-4xl">
                  {usd(result.totalLow)} – {usd(result.totalHigh)}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  per year, at {headcountNum} employees across {statesNum}{" "}
                  {statesNum === 1 ? "state" : "states"}. That is a market range, not an offer,
                  and no PEO has seen your census yet.
                </p>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50 text-foreground">
                      <tr>
                        <th className="px-3 py-2 text-left font-heading">Line item</th>
                        <th className="px-3 py-2 text-left font-heading">Estimated annual range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-3 py-2">
                          Administration fee
                          <span className="block text-xs text-muted-foreground">
                            PEPM model {usd(result.adminPepmLow)}–{usd(result.adminPepmHigh)};
                            percentage-of-payroll model {usd(result.adminPctLow)}–
                            {usd(result.adminPctHigh)}
                          </span>
                        </td>
                        <td className="px-3 py-2 tabular-nums">
                          {usd(result.adminLow)} – {usd(result.adminHigh)}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2">
                          Your share of health premium
                          <span className="block text-xs text-muted-foreground">
                            {enrolledNum} enrolled, single coverage at the low end, family at the
                            high end
                          </span>
                        </td>
                        <td className="px-3 py-2 tabular-nums">
                          {usd(result.healthLow)} – {usd(result.healthHigh)}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2">Workers' compensation premium</td>
                        <td className="px-3 py-2 tabular-nums">{usd(result.wc)}</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2">State unemployment (SUTA)</td>
                        <td className="px-3 py-2 tabular-nums">{usd(result.suta)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  Gross payroll used in the percentage calculations:{" "}
                  <span className="tabular-nums">{usd(result.payroll)}</span>. For how these fees
                  are built and where they move at renewal, read the{" "}
                  <Link to="/resources/peo-cost-guide" className="font-semibold text-green-ink underline underline-offset-4">
                    PEO cost guide
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={150}>
            <Card className="mt-6">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-heading text-lg font-700 text-foreground">
                  What this suggests for your firm
                </h3>
                {setup === "peo" ? (
                  <p className="mt-2 text-base text-muted-foreground">
                    You already have a PEO, so the useful comparison is your current invoice
                    against this range. If yours sits above it, that is a renewal conversation or
                    a market check. Comparing PEOs with Pillar is free to you — the provider pays
                    the commission, disclosed in writing. If you decide to move, the{" "}
                    <Link to="/services/transitions" className="font-semibold text-green-ink underline underline-offset-4">
                      transition work
                    </Link>{" "}
                    is fixed price, quoted before the work starts.
                  </p>
                ) : setup === "team" ? (
                  <p className="mt-2 text-base text-muted-foreground">
                    With an in-house HR team, a PEO usually competes on benefits buying power
                    rather than administration. Compare this range against what your current
                    carrier renewal and payroll platform cost you today. Where you want outside
                    help — an audit, a handbook, a multi-state clean-up — Pillar's work is fixed
                    price, quoted before the work starts.
                  </p>
                ) : (
                  <p className="mt-2 text-base text-muted-foreground">
                    With {statesNum > 1 ? "people in more than one state and " : ""}no dedicated
                    HR function, a PEO is worth pricing — and so is keeping your own payroll and
                    adding{" "}
                    <Link to="/services/fractional-hr" className="font-semibold text-green-ink underline underline-offset-4">
                      fractional HR
                    </Link>
                    . An{" "}
                    <Link to="/services/hr-audit" className="font-semibold text-green-ink underline underline-offset-4">
                      HR audit
                    </Link>{" "}
                    tells you which gaps you're actually paying a PEO to solve. Pillar's own work
                    is fixed price, quoted before the work starts.
                  </p>
                )}
                <p className="mt-3 text-base text-muted-foreground">
                  Pillar is paid by the PEO provider on brokerage placements, never by you. See{" "}
                  <Link to="/how-we-get-paid" className="font-semibold text-green-ink underline underline-offset-4">
                    how we get paid
                  </Link>{" "}
                  for the full disclosure.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10">
              <h3 className="font-heading text-lg font-700 text-foreground">
                Assumptions behind this estimate
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  Administration is modelled two ways and the range spans both: $80–$200 per
                  employee per month, or 2%–6% of gross payroll. These are the bands we see in
                  2026 quotes, published in our PEO cost guide.
                </li>
                <li>
                  Health premium uses the employer-paid averages in the{" "}
                  <a
                    href="https://www.kff.org/health-costs/2025-employer-health-benefits-survey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-ink underline underline-offset-4"
                  >
                    KFF 2025 Employer Health Benefits Survey
                  </a>
                  : roughly $7,900 a year per employee on single coverage and $20,100 on family
                  coverage. Your actual plan and contribution strategy will move this more than
                  any other line.
                </li>
                <li>
                  Workers' comp and SUTA use the rates you entered, applied to your payroll and
                  to the wage base you entered. A PEO may quote its own master-policy rate
                  instead, which can be higher or lower than yours.
                </li>
                <li>
                  Not included: implementation and setup fees, 401(k) per-participant fees, EPLI,
                  per-state registration charges, and any premium service tier.
                </li>
                <li>
                  Not included: Pillar's fees. Our work is fixed price, quoted before the work
                  starts, and PEO brokerage is free to you.
                </li>
                <li>
                  No savings claim is made here. Whether a PEO costs you more or less than today
                  depends on your current carrier rates and your own admin time.
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-6">
              <LegalNote />
            </div>
          </Reveal>

          <Reveal delay={300}>
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
