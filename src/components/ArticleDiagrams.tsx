import { ArrowRight, Building2, Users, CheckCircle2, XCircle } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CoEmploymentDiagram: two boxes feeding one shared employee group  */
/* ------------------------------------------------------------------ */
export const CoEmploymentDiagram = () => (
  <figure className="my-8 rounded-2xl border border-border bg-card p-6 md:p-8">
    <figcaption className="mb-6 text-center font-heading text-sm font-700 uppercase tracking-wider text-muted-foreground">
      How co-employment splits the work
    </figcaption>
    <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
      {/* You */}
      <div className="rounded-xl bg-primary p-5 text-primary-foreground">
        <div className="flex items-center gap-2 font-heading font-800">
          <Building2 className="h-5 w-5 text-green-ink" /> You (worksite employer)
        </div>
        <ul className="mt-3 space-y-1.5 text-sm text-primary-foreground/85">
          <li>• Hire, fire, manage</li>
          <li>• Set pay and direction</li>
          <li>• Own culture and team</li>
          <li>• Day-to-day decisions</li>
        </ul>
      </div>
      {/* PEO */}
      <div className="hidden items-center justify-center md:flex">
        <div className="text-green-ink">
          <ArrowRight className="h-6 w-6" />
          <ArrowRight className="h-6 w-6 -mt-1 rotate-180" />
        </div>
      </div>
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-5">
        <div className="flex items-center gap-2 font-heading font-800 text-foreground">
          <Users className="h-5 w-5 text-green-ink" /> The PEO (admin employer)
        </div>
        <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
          <li>• Files payroll taxes (their FEIN)</li>
          <li>• Sponsors benefits & 401(k)</li>
          <li>• Carries workers' comp</li>
          <li>• Compliance paperwork</li>
        </ul>
      </div>
    </div>
    <div className="mt-5 rounded-lg bg-muted/40 p-4 text-center text-sm text-foreground/80">
      <strong className="text-foreground">Your employees</strong>: still your team. They just get a W-2 with the PEO's tax ID.
    </div>
  </figure>
);

/* ------------------------------------------------------------------ */
/*  PricingModelsCompare: PEPM vs % of payroll, with break-even note */
/* ------------------------------------------------------------------ */
export const PricingModelsCompare = () => (
  <figure className="my-8 grid gap-4 md:grid-cols-2">
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="text-xs font-700 uppercase tracking-wider text-green-ink">Model A</div>
      <h3 className="mt-1 font-heading text-xl font-800 text-foreground">Per Employee / Month</h3>
      <div className="mt-3 font-heading text-3xl font-800 text-foreground">
        $80–$200<span className="text-base font-600 text-muted-foreground"> /EE/mo</span>
      </div>
      <p className="mt-2 text-sm text-foreground/80">Flat admin fee. Predictable.</p>
      <div className="mt-4 rounded-lg bg-muted/40 p-3 text-sm">
        <div className="font-700 text-foreground">Example: 25 employees @ $150 PEPM</div>
        <div className="mt-1 text-foreground/80">$150 × 25 × 12 = <strong className="text-foreground">$45,000 / yr</strong></div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Best for: stable headcount, higher wages, white-collar.</p>
    </div>
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="text-xs font-700 uppercase tracking-wider text-green-ink">Model B</div>
      <h3 className="mt-1 font-heading text-xl font-800 text-foreground">% of Payroll</h3>
      <div className="mt-3 font-heading text-3xl font-800 text-foreground">
        2%–6%<span className="text-base font-600 text-muted-foreground"> of gross</span>
      </div>
      <p className="mt-2 text-sm text-foreground/80">Scales with payroll. Cheaper at low wages.</p>
      <div className="mt-4 rounded-lg bg-muted/40 p-3 text-sm">
        <div className="font-700 text-foreground">Example: 25 EE × $65K @ 2.5%</div>
        <div className="mt-1 text-foreground/80">$1.625M × 2.5% = <strong className="text-foreground">$40,625 / yr</strong></div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Best for: lower-wage workforces, blue-collar.</p>
    </div>
    <figcaption className="md:col-span-2 rounded-lg border border-accent/30 bg-accent/5 p-3 text-center text-sm text-foreground/85">
      <strong className="text-foreground">Rule of thumb:</strong> the cheaper option flips at higher salaries. Always model both.
    </figcaption>
  </figure>
);

/* ------------------------------------------------------------------ */
/*  SwitchTimeline: horizontal 5-phase phases bar                     */
/* ------------------------------------------------------------------ */
interface Phase { weeks: string; title: string; desc: string; }
export const SwitchTimeline = ({ phases }: { phases: Phase[] }) => (
  <figure className="my-10">
    <figcaption className="mb-6 text-center font-heading text-sm font-700 uppercase tracking-wider text-muted-foreground">
      The 90-day switch, end to end
    </figcaption>
    <ol className="relative grid gap-6 md:grid-cols-5 md:gap-3">
      {/* connecting line on desktop */}
      <div className="absolute left-0 right-0 top-5 hidden h-0.5 bg-border md:block" aria-hidden="true" />
      {phases.map((p, i) => (
        <li key={i} className="relative flex flex-col items-center text-center md:items-start md:text-left">
          <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-accent font-heading text-base font-800 text-accent-foreground shadow-md">
            {i + 1}
          </div>
          <div className="mt-3 text-xs font-700 uppercase tracking-wider text-green-ink">{p.weeks}</div>
          <div className="mt-1 font-heading text-sm font-700 text-foreground">{p.title}</div>
          <p className="mt-1 text-xs leading-relaxed text-foreground/75">{p.desc}</p>
        </li>
      ))}
    </ol>
  </figure>
);

/* ------------------------------------------------------------------ */
/*  RedFlagVsGoodAnswer: for the 5 Questions article                  */
/* ------------------------------------------------------------------ */
interface QuestionContrast { red: string; green: string; }
export const RedFlagVsGoodAnswer = ({ items }: { items: QuestionContrast[] }) => (
  <figure className="my-10 overflow-hidden rounded-2xl border border-border bg-card">
    <div className="grid grid-cols-2 bg-muted/30 text-center text-xs font-700 uppercase tracking-wider">
      <div className="flex items-center justify-center gap-2 p-3 text-destructive">
        <XCircle className="h-4 w-4" /> Red flag
      </div>
      <div className="flex items-center justify-center gap-2 p-3 text-green-ink">
        <CheckCircle2 className="h-4 w-4" /> Good answer
      </div>
    </div>
    <div className="divide-y divide-border">
      {items.map((it, i) => (
        <div key={i} className="grid grid-cols-2 divide-x divide-border">
          <div className="p-4 text-sm text-foreground/85">{it.red}</div>
          <div className="p-4 text-sm text-foreground/85">{it.green}</div>
        </div>
      ))}
    </div>
  </figure>
);
