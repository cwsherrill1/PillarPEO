import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import { ArticleByline, ArticleAuthorBio, buildArticleJsonLd } from "@/components/ArticleByline";

const ARTICLE = buildArticleJsonLd({
  title: "PEO vs. ASO vs. In-House HR",
  description: "Compare PEO, ASO, and in-house HR models side by side to find the right fit.",
  path: "/resources/peo-vs-aso-vs-inhouse",
  datePublished: "2026-01-15",
  dateModified: "2026-09-05",
});

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const comparisonRows = [
  { factor: "Employment structure", peo: "Co-employment", aso: "Sole employer", inhouse: "Sole employer" },
  { factor: "Benefits buying power", peo: "High — pooled with thousands", aso: "Moderate — some pooling", inhouse: "Low — priced as single employer" },
  { factor: "Compliance support", peo: "Shared — PEO bears some liability", aso: "Advisory only — you bear all", inhouse: "Internal only" },
  { factor: "Cost structure", peo: "PEPM or % of payroll", aso: "Typically lower PEPM", inhouse: "Salary + overhead + tools" },
  { factor: "Control of employees", peo: "Full operational control retained", aso: "Full control", inhouse: "Full control" },
  { factor: "Best headcount range", peo: "10–500 employees", aso: "50–500 employees", inhouse: "200+ employees" },
  { factor: "Setup complexity", peo: "Moderate", aso: "Moderate", inhouse: "High" },
  { factor: "Workers' comp", peo: "Usually bundled & managed", aso: "You source & manage", inhouse: "You source & manage" },
  { factor: "Exit flexibility", peo: "Contract, 30–90 day notice", aso: "Similar", inhouse: "Internal — more complex" },
];

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span>{children}</span></li>
);

const PeoVsAsoVsInhouse = () => (
  <>
    <SEOHead
      title="PEO vs. ASO vs. In-House HR"
      description="Not every company needs a PEO. Compare PEO, ASO, and in-house HR models side by side to find the right fit for your organization."
      jsonLd={ARTICLE}
      ogType="article"
    />

    {/* Hero */}
    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Comparison</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            PEO vs. ASO vs.
            <span className="text-accent"> In-House HR</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Not every company needs a PEO. This side-by-side comparison helps you understand which model actually fits where you are.
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

    {/* Intro */}
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <Link to="/resources" className="mb-8 inline-flex items-center text-sm font-semibold text-green-ink hover:text-green-ink/80">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources
          </Link>
          <p className="text-xl leading-8 text-foreground/85">
            There's a common assumption that a PEO is the right answer for every growing company. It isn't. The right HR model depends on your size, complexity, growth stage, and how much control your leadership wants to retain. This guide breaks down the three most common models so you can make the right call — not just the most marketed one.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Definitions */}
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container">
        <Reveal><h2 className="text-center font-heading text-2xl font-800 text-foreground md:text-3xl">Quick Definitions</h2></Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "PEO", desc: "A co-employment arrangement where the PEO becomes the employer of record for payroll, taxes, and benefits administration. You retain full operational control. The PEO pools your employees with thousands of others to deliver enterprise-grade benefits at a cost smaller companies couldn't access independently." },
            { title: "ASO", desc: "An ASO provides many of the same administrative services — payroll processing, HR support, benefits administration — but without co-employment. You remain the sole employer of record. You get administrative help without giving up any legal employer status." },
            { title: "In-House HR", desc: "Hiring internal HR staff to handle payroll, compliance, benefits, and people operations directly. You own the full function, retain complete control, and bear full cost and liability." },
          ].map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-700 text-foreground">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Comparison Table */}
    <section className="py-20 md:py-28">
      <div className="container">
        <Reveal>
          <h2 className="text-center font-heading text-2xl font-800 text-foreground md:text-3xl">Side-by-Side Comparison</h2>
          <div className="mt-10 overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary">
                  <TableHead className="text-primary-foreground font-heading font-700">Factor</TableHead>
                  <TableHead className="text-primary-foreground font-heading font-700">PEO</TableHead>
                  <TableHead className="text-primary-foreground font-heading font-700">ASO</TableHead>
                  <TableHead className="text-primary-foreground font-heading font-700">In-House HR</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonRows.map((row, i) => (
                  <TableRow key={i} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                    <TableCell className="font-semibold text-foreground">{row.factor}</TableCell>
                    <TableCell className="text-muted-foreground">{row.peo}</TableCell>
                    <TableCell className="text-muted-foreground">{row.aso}</TableCell>
                    <TableCell className="text-muted-foreground">{row.inhouse}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Reveal>
      </div>
    </section>

    {/* When each makes sense */}
    {[
      { title: "When a PEO Makes Sense", alt: true, items: ["You have 10–250 employees and want benefit quality you couldn't access independently", "You're multi-state and compliance complexity is growing faster than your HR team", "You're paying for fragmented HR tools and want to consolidate", "You've outgrown founder-led HR but aren't ready to build a full department", "You're currently on a PEO but want to benchmark whether it's still the best fit"] },
      { title: "When an ASO Makes Sense", alt: false, items: ["You want administrative HR help but aren't comfortable with co-employment", "You already have a strong internal HR function and just need payroll and admin support", "Your workforce includes complex classifications that don't fit cleanly into PEO pooling", "You're larger (typically 100+ employees) and have leverage to get good benefits directly"] },
      { title: "When In-House HR Makes Sense", alt: true, items: ["You're at 200+ employees and HR complexity justifies a dedicated team", "Your workforce is highly specialized and benefits from HR staff with deep institutional knowledge", "You need HR to be a strategic business partner integrated into leadership", "Your industry or contractual structure requires full employer-of-record control"] },
    ].map((s) => (
      <section key={s.title} className={s.alt ? "bg-muted/30 py-20 md:py-28" : "py-20 md:py-28"}>
        <div className="container max-w-3xl">
          <Reveal>
            <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">{s.title}</h2>
            <ul className="mt-4 space-y-3 text-base text-muted-foreground">
              {s.items.map((item) => <Bullet key={item}>{item}</Bullet>)}
            </ul>
          </Reveal>
        </div>
      </section>
    ))}

    {/* Hidden Costs */}
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">The Hidden Costs of Getting This Wrong</h2>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            <Bullet>A company that hires in-house HR too early pays for capability it doesn't yet need</Bullet>
            <Bullet>A company that stays on a misfit PEO pays premium pricing for underperforming service</Bullet>
            <Bullet>A company that chooses an ASO when it actually needed a PEO misses the benefits buying power that would have improved employee retention</Bullet>
            <Bullet>A company that skips all three and patches together DIY HR creates compliance exposure that often only becomes visible when something goes wrong</Bullet>
          </ul>
          <p className="mt-4 font-semibold text-foreground">The right answer depends on your specific situation — and it's rarely the one a vendor is selling you.</p>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">
            Let's figure out which model actually fits your company.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Pillar's discovery process takes about 30 minutes and gives you a clear, unbiased picture of your options — with no pressure to buy anything.
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

export default PeoVsAsoVsInhouse;
