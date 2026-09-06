import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import { ArticleByline, buildArticleJsonLd } from "@/components/ArticleByline";

const ARTICLE = buildArticleJsonLd({
  title: "Is Your Company Ready for a PEO?",
  description: "An interactive self-assessment to see if your company is a good PEO fit.",
  path: "/resources/peo-readiness",
  datePublished: "2026-01-15",
  dateModified: "2026-09-05",
});

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const categories = [
  {
    name: "Size & Complexity",
    items: [
      "We have 10 or more W-2 employees",
      "We have employees in more than one state — or plan to within the next 12 months",
      "Our payroll and compliance situation is more complicated than one person can comfortably manage",
      "We've had at least one payroll or compliance issue in the past 18 months",
    ],
  },
  {
    name: "Benefits",
    items: [
      "Our employee benefits feel less competitive than what comparable employers offer",
      "We've lost a candidate or employee at least in part because of benefits",
      "Our benefits renewal feels opaque or like we have little control over the outcome",
      "We'd value access to better plans if the pricing were manageable",
    ],
  },
  {
    name: "HR Administration",
    items: [
      "We don't have a dedicated HR professional — HR is handled by an owner, office manager, or operations lead",
      "HR tasks regularly pull leadership away from higher-value work",
      "We are uncertain about our compliance posture in areas like ACA, FMLA, or state leave laws",
      "We use more than two separate vendors or platforms to handle HR, payroll, and benefits",
    ],
  },
  {
    name: "Growth",
    items: [
      "We expect to add at least 10–20% more employees in the next 12–18 months",
      "Growth is starting to expose gaps in our current HR processes",
      "We are at or approaching a size where employees expect a more professional HR experience",
    ],
  },
  {
    name: "Switching (if already on a PEO)",
    items: [
      "We are coming up on a PEO renewal in the next 3–6 months",
      "We have had service issues, slow response times, or payroll errors with our current provider",
      "We haven't benchmarked our current PEO's pricing or service quality in more than two years",
      "Our current PEO feels like a vendor, not a partner",
    ],
  },
];

const PeoReadiness = () => {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (item: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  const count = checked.size;

  const result = useMemo(() => {
    if (count === 0) return null;
    if (count < 5)
      return {
        color: "text-muted-foreground",
        title: "A PEO may not be the right fit right now.",
        desc: "That said, it's worth a conversation to understand what's coming as you grow.",
      };
    if (count <= 10)
      return {
        color: "text-green-ink",
        title: "You're likely in range where a PEO could provide meaningful value.",
        desc: "The question is whether the right PEO at the right price is available for your specific situation.",
      };
    return {
      color: "text-green-ink",
      title: "Your company profile is a strong match for a PEO evaluation.",
      desc: "The more boxes you checked in Benefits and HR Administration, the more urgently it's worth exploring.",
    };
  }, [count]);

  return (
    <>
      <SEOHead
        title="Is Your Company Ready for a PEO?"
        description="Use this interactive self-assessment to find out if your company is a good fit for a PEO. Check off the statements that apply and get instant guidance."
        jsonLd={ARTICLE}
        ogType="article"
      />

      <section className="bg-primary py-24 md:py-32">
        <div className="container text-center">
          <Reveal>
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Self-Assessment</Badge>
            <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Is Your Company
              <span className="text-accent"> Ready for a PEO?</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
              Most employers don't know a PEO is the right move until they're already overwhelmed. Use this self-assessment to see where you actually stand.
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
              A PEO makes a lot of sense for many growing companies — and very little sense for others. Before you start evaluating providers, it helps to understand whether your situation is actually a good PEO fit. Work through this checklist and see how many of these statements apply to your company.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container max-w-3xl space-y-8">
          {categories.map((cat, ci) => (
            <Reveal key={cat.name} delay={ci * 60}>
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-heading text-xl font-700 text-foreground">{cat.name}</h2>
                  <div className="mt-4 space-y-4">
                    {cat.items.map((item) => (
                      <label key={item} className="flex cursor-pointer items-start gap-3">
                        <Checkbox
                          checked={checked.has(item)}
                          onCheckedChange={() => toggle(item)}
                          className="mt-0.5"
                        />
                        <span className={`text-base ${checked.has(item) ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <Reveal>
            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="p-6 md:p-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-green-ink">Your Result</p>
                <p className="mt-2 font-heading text-4xl font-800 text-foreground">{count} <span className="text-lg font-400 text-muted-foreground">/ {categories.reduce((a, c) => a + c.items.length, 0)} checked</span></p>
                {result ? (
                  <>
                    <p className={`mt-4 font-heading text-xl font-700 ${result.color}`}>{result.title}</p>
                    <p className="mt-2 text-base text-muted-foreground">{result.desc}</p>
                  </>
                ) : (
                  <p className="mt-4 text-base text-muted-foreground">Check the items above that apply to your company to see your assessment.</p>
                )}
                <p className="mt-4 text-sm text-muted-foreground">Either way, a 30-minute advisor conversation costs nothing and gives you a clear picture of your options.</p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary py-24 md:py-32">
        <div className="container text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">
              Ready to find out what your options actually look like?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Pillar runs a structured discovery process at no cost to you. We gather your information, compare the market, and tell you what a move would realistically look like — including whether it makes sense at all.
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
};

export default PeoReadiness;
