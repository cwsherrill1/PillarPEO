import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  FileText,
  HelpCircle,
  DollarSign,
  Scale,
  Download,
  ArrowRight,
  RefreshCw,
  Building2,
  ClipboardCheck,
  Settings,
  Newspaper,
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
import SEOHead from "@/components/SEOHead";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const resources = [
  {
    icon: HelpCircle,
    title: "5 Questions to Ask Any PEO Before Signing",
    desc: "The critical questions most employers never think to ask — until it's too late.",
    category: "Checklist",
    href: "/resources/5-questions",
  },
  {
    icon: Scale,
    title: "Understanding Co-Employment",
    desc: "What co-employment actually means for your liability, your employees, and your control.",
    category: "Guide",
    href: "/resources/co-employment",
  },
  {
    icon: DollarSign,
    title: "PEO Pricing: What to Watch For",
    desc: "Hidden fees, bundled costs, and renewal surprises. Read a PEO quote like an insider.",
    category: "Guide",
    href: "/resources/peo-pricing",
  },
  {
    icon: FileText,
    title: "PEO vs. ASO vs. In-House HR",
    desc: "Not every company needs a PEO. This comparison helps you understand which model fits.",
    category: "Comparison",
    href: "/resources/peo-vs-aso-vs-inhouse",
  },
  {
    icon: RefreshCw,
    title: "How to Switch PEOs Without Disrupting Payroll",
    desc: "What the switching process actually looks like — and how to do it without missing a beat.",
    category: "Guide",
    href: "/resources/how-to-switch-peos",
  },
  {
    icon: Building2,
    title: "PEO for Nonprofits: What to Know Before You Buy",
    desc: "What nonprofit leaders need to understand before partnering with a PEO.",
    category: "Guide",
    href: "/resources/peo-for-nonprofits-guide",
  },
  {
    icon: ClipboardCheck,
    title: "Is Your Company Ready for a PEO?",
    desc: "An interactive self-assessment to see if your company is a good PEO fit.",
    category: "Self-Assessment",
    href: "/resources/peo-readiness",
  },
  {
    icon: Settings,
    title: "What to Expect During a PEO Implementation",
    desc: "What the next 60–90 days look like after you sign — and how to prepare.",
    category: "Guide",
    href: "/resources/peo-implementation",
  },
  {
    icon: DollarSign,
    title: "How Much Does a PEO Cost in 2026?",
    desc: "Real pricing models, hidden fees, renewal increases, and how to compare quotes apples-to-apples.",
    category: "Cost Guide",
    href: "/resources/peo-cost-guide",
  },
  {
    icon: FileText,
    title: "PEO vs. Payroll Service: When You Need Each",
    desc: "When to stick with Gusto/ADP Run and when you've outgrown a basic payroll provider.",
    category: "Comparison",
    href: "/resources/peo-vs-payroll-service",
  },
  {
    icon: BookOpen,
    title: "Best PEO for Small Business (2026)",
    desc: "An independent broker's comparison of Justworks, Rippling, ADP TotalSource, Insperity, TriNet, and Gusto.",
    category: "Comparison",
    href: "/resources/best-peo-for-small-business",
  },
  {
    icon: Newspaper,
    title: "Top PEO Companies in 2026",
    desc: "The PEO landscape grouped by tier — national, modern, and industry-vertical — with how to pick.",
    category: "Industry Guide",
    href: "/resources/top-peo-companies",
  },
  {
    icon: Building2,
    title: "PEO for Startups: The Operator's Playbook",
    desc: "Multi-state compliance, equity-friendly payroll, and recruiting-grade benefits for venture-backed and bootstrapped startups.",
    category: "Guide",
    href: "/resources/peo-for-startups",
  },
  {
    icon: HelpCircle,
    title: "PEO Benefits Explained",
    desc: "Health, 401(k), workers' comp, EAP, and the ancillary perks. What's included, what's better, and where PEOs underdeliver.",
    category: "Guide",
    href: "/resources/peo-benefits",
  },
  {
    icon: Scale,
    title: "PEO Broker vs. Going Direct",
    desc: "How brokers get paid, what changes in your fee, and when each path actually saves you money.",
    category: "Comparison",
    href: "/resources/peo-broker-vs-direct",
  },
  {
    icon: BookOpen,
    title: "What Is a PEO? A Complete Guide",
    desc: "Plain-English explainer of co-employment, costs, who it fits, and the honest risks. The foundational guide.",
    category: "Guide",
    href: "/resources/what-is-a-peo",
  },
  {
    icon: HelpCircle,
    title: "Employee Health Benefits Options: What Employers Actually Offer",
    desc: "Fully-insured, level-funded, ICHRA, PEO master plans, and association health plans — how each works and when it fits.",
    category: "Guide",
    href: "/blog/employee-health-benefits-options",
  },
  {
    icon: Building2,
    title: "PEO for Venture-Backed Startups",
    desc: "Multi-state compliance, equity-friendly payroll, and benefits that hold up in diligence.",
    category: "Guide",
    href: "/blog/peo-for-venture-backed-startups",
  },
  {
    icon: RefreshCw,
    title: "Signs You've Outgrown Your PEO (Charlotte)",
    desc: "The renewal red flags, service gaps, and cost signals that mean it's time to move on.",
    category: "Guide",
    href: "/blog/signs-outgrown-peo-charlotte",
  },
  {
    icon: Building2,
    title: "PEO for Nonprofits in Charlotte",
    desc: "What Charlotte-area nonprofits should weigh before signing — benefits, 403(b), and grant compliance.",
    category: "Guide",
    href: "/blog/peo-for-nonprofits-charlotte",
  },
  {
    icon: Newspaper,
    title: "PEO Industry Transparency",
    desc: "How the PEO industry actually makes money — and what employers deserve to see in a quote.",
    category: "Industry Guide",
    href: "/blog/peo-industry-transparency",
  },
];


const insights = [
  {
    title: "How Much Does a PEO Cost?",
    desc: "A breakdown of PEO pricing models, what drives costs, and how to compare quotes.",
    date: "2025",
    href: "/resources/peo-pricing",
  },
  {
    title: "PEO vs. HR Outsourcing: What's the Difference?",
    desc: "Understanding the key differences between PEOs, ASOs, and traditional HR outsourcing.",
    date: "2025",
    href: "/resources/peo-vs-aso-vs-inhouse",
  },
  {
    title: "Should Your Business Use a PEO?",
    desc: "How to know if a PEO is the right fit for your company's size, stage, and goals.",
    date: "2025",
    href: "/resources/peo-readiness",
  },
];

const faqs = [
  {
    q: "How do I use the Buyer Guide?",
    a: "The Buyer Guide walks you through every factor to evaluate when comparing PEO providers. Use it before, during, or after sales conversations to make sure you're comparing apples to apples.",
  },
  {
    q: "Are these resources free?",
    a: "Yes — every resource on this page is completely free. We believe employers make better decisions with better information.",
  },
  {
    q: "Can I share these with my team or board?",
    a: "Absolutely. These resources are designed to be shared with decision-makers, HR leads, CFOs, and board members.",
  },
  {
    q: "Do I need to be a Pillar client to access these?",
    a: "No. These resources are available to any employer exploring PEO options. If you'd like personalized guidance, you can always reach out for a free consultation.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const categories = ["All", "Guide", "Checklist", "Comparison", "Self-Assessment"];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = activeCategory === "All"
    ? resources
    : resources.filter((r) => r.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Resources"
        description="Free PEO guides, checklists, and comparisons built for employers — not PEO sales teams. Make a confident decision."
        jsonLd={faqJsonLd}
        ogImage="/og/og-resources.jpg"
      />
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
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
      <section className="py-20 md:py-28">
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
                  size="lg"
                  className="shrink-0 bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20 cursor-pointer"
                  onClick={() => {
                    fetch("/guides/Employers_Guide_to_Choosing_the_Right_PEO.pdf")
                      .then((res) => res.blob())
                      .then((blob) => {
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = "Employers_Guide_to_Choosing_the_Right_PEO.pdf";
                        a.click();
                        window.URL.revokeObjectURL(url);
                      });
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Get the Guide
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="bg-muted/30 py-20 md:py-28">
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

          <Reveal delay={50}>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <Link to={r.href} className="group block h-full cursor-pointer">
                  <Card className="h-full transition-shadow duration-300 group-hover:shadow-lg">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <r.icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {r.category}
                        </Badge>
                      </div>
                      <h3 className="mt-4 font-heading text-lg font-700 text-foreground group-hover:text-accent transition-colors">
                        {r.title}
                      </h3>
                      <p className="mt-2 flex-1 text-base text-muted-foreground">
                        {r.desc}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent transition-colors group-hover:text-accent/80">
                        Read More
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PEO Insights */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Newspaper className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
                PEO Insights
              </h2>
            </div>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Shorter reads on common PEO questions — written for busy employers.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {insights.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Link to={item.href} className="group block">
                  <Card className="transition-shadow duration-300 hover:shadow-lg">
                    <CardContent className="flex items-center gap-5 p-5">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">
                            Article
                          </Badge>
                          <span className="text-xs text-muted-foreground">{item.date}</span>
                        </div>
                        <h3 className="mt-2 font-heading text-base font-700 text-foreground group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-800 text-foreground md:text-4xl">
              Common questions
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion type="single" collapsible className="mt-10">
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
      <section className="bg-primary py-24 md:py-32">
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
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Talk to an Advisor
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
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
