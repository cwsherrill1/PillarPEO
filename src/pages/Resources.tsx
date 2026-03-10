import { Link } from "react-router-dom";
import {
  BookOpen,
  FileText,
  HelpCircle,
  DollarSign,
  BarChart3,
  ArrowRightLeft,
  Scale,
  Download,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

const resources = [
  {
    icon: HelpCircle,
    title: "5 Questions to Ask Any PEO Before Signing",
    desc: "The critical questions most employers never think to ask — until it's too late. Use this before any sales call.",
    category: "Checklist",
  },
  {
    icon: Scale,
    title: "Understanding Co-Employment",
    desc: "What co-employment actually means for your liability, your employees, and your control. Plain-language explainer.",
    category: "Guide",
  },
  {
    icon: DollarSign,
    title: "PEO Pricing: What to Watch For",
    desc: "Hidden fees, bundled costs, and renewal surprises. Learn how to read a PEO quote like an insider.",
    category: "Guide",
  },
  {
    icon: BarChart3,
    title: "Benefits Benchmarking Checklist",
    desc: "Compare your current benefits package against PEO offerings. Know where you're overpaying or underserved.",
    category: "Checklist",
  },
  {
    icon: ArrowRightLeft,
    title: "When to Leave Your Current PEO",
    desc: "The warning signs that it's time to switch — and a timeline for doing it without disruption.",
    category: "Article",
  },
  {
    icon: FileText,
    title: "PEO vs. ASO vs. In-House HR",
    desc: "Not every company needs a PEO. This comparison helps you understand which model fits your stage and goals.",
    category: "Comparison",
  },
];

const faqs = [
  {
    q: "How do I use the Buyer Guide?",
    a: "The Buyer Guide walks you through every factor to evaluate when comparing PEO providers. Use it before, during, or after sales conversations to make sure you're asking the right questions and comparing apples to apples.",
  },
  {
    q: "Are these resources free?",
    a: "Yes — every resource on this page is completely free. We believe employers make better decisions with better information, and that's good for everyone.",
  },
  {
    q: "Can I share these with my team or board?",
    a: "Absolutely. These resources are designed to be shared with decision-makers, HR leads, CFOs, and board members. The more aligned your team is, the better the outcome.",
  },
  {
    q: "Do I need to be a Pillar client to access these?",
    a: "No. These resources are available to any employer exploring PEO options. If you'd like personalized guidance, you can always reach out for a free consultation.",
  },
  {
    q: "How often are resources updated?",
    a: "We review and update our resources quarterly to reflect changes in the PEO market, pricing trends, and regulatory updates.",
  },
];

const Resources = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container text-center">
          <Reveal>
            <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Resources to help you decide
              <span className="text-accent"> with confidence.</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
              Free guides, checklists, and comparisons built for employers — not
              PEO sales teams.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured: Buyer Guide */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <Card className="border-accent/30 bg-accent/5 overflow-hidden">
              <CardContent className="flex flex-col items-center gap-8 p-8 md:flex-row md:p-12">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                  <BookOpen className="h-10 w-10 text-accent" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Badge className="mb-3 bg-accent/10 text-accent hover:bg-accent/20">
                    Featured Resource
                  </Badge>
                  <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">
                    The PEO Buyer Guide
                  </h2>
                  <p className="mt-3 max-w-xl text-muted-foreground">
                    Everything you need to evaluate, compare, and choose the
                    right PEO — in one comprehensive guide. Covers pricing
                    models, contract red flags, benefits benchmarking, and the
                    questions your broker won't ask.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="shrink-0 bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
                >
                  <Link to="/contact">
                    <Download className="mr-2 h-4 w-4" />
                    Get the Guide
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <Reveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                Explore by topic
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Practical resources for every stage of the PEO evaluation
                process.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <Card className="group h-full transition-shadow duration-300 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <r.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {r.category}
                      </Badge>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-700 text-foreground">
                      {r.title}
                    </h3>
                    <p className="mt-2 flex-1 text-base text-muted-foreground">
                      {r.desc}
                    </p>
                    <Link
                      to="/contact"
                      className="mt-4 inline-flex items-center text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                    >
                      Coming soon
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-800 text-foreground md:text-4xl">
              Common questions
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion
              type="single"
              collapsible
              className="mt-10"
            >
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-heading font-700 text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">
              Need guidance beyond the guides?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Our advisors can walk you through any of these topics — and help
              you apply them to your specific situation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
              >
                <Link to="/contact">Talk to an Advisor</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5"
              >
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Resources;
