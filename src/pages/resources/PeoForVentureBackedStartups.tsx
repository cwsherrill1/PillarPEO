import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import { ArticleByline, ArticleAuthorBio, buildArticleJsonLd } from "@/components/ArticleByline";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const faqs = [
  {
    q: "Do venture-backed startups need a PEO?",
    a: "Many do. A PEO gives a fast-growing startup clean payroll, multi-state compliance, and competitive benefits without building an internal HR function, which also makes funding diligence smoother.",
  },
  {
    q: "What should a startup look for in a PEO?",
    a: "Scalability, multi-state compliance strength, experience with equity and contractors, and familiarity with investor diligence requirements.",
  },
  {
    q: "When should a startup set up a PEO?",
    a: "Ideally before a major hiring sprint or funding round, not during diligence when problems are expensive to fix.",
  },
];

const ARTICLE = buildArticleJsonLd({
  title: "PEO for Venture-Backed Startups: What to Know",
  description:
    "Most VC-backed startups pick the wrong PEO or skip it until diligence. Here is what investors look for at Series A and B and how to get ahead of it.",
  path: "/blog/peo-for-venture-backed-startups",
  datePublished: "2026-04-21",
});

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Section = ({
  title,
  children,
  alt = false,
}: {
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) => (
  <section className={alt ? "bg-muted/30 py-20 md:py-28" : "py-20 md:py-28"}>
    <div className="container max-w-3xl">
      <Reveal>
        <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">{title}</h2>
        <div className="mt-4 space-y-4 text-lg leading-8 text-foreground/85">
          {children}
        </div>
      </Reveal>
    </div>
  </section>
);

const PeoForVentureBackedStartups = () => (
  <>
    <SEOHead
      title="PEO for Venture-Backed Startups: What to Know"
      description="Most VC-backed startups pick the wrong PEO or skip it until diligence. Here is what investors look for at Series A and B and how to get ahead of it."
      jsonLd={{
        "@context": "https://schema.org",
        "@graph": [ARTICLE["@graph"][0], ARTICLE["@graph"][1], FAQ_JSONLD],
      }}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Startup Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Why Venture-Backed Startups and Tech Companies Get This Wrong
            <span className="text-accent"> (And How to Fix It)</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            What investors look for at Series A and B — and how to get your people infrastructure
            ready before diligence.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <ArticleByline datePublished="April 21, 2026" />
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule a Free Consultation
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <Reveal>
          <Link
            to="/resources"
            className="mb-8 inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources
          </Link>
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
            <p className="text-base font-700 leading-relaxed text-foreground md:text-lg">
              Venture-backed startups need a PEO that scales with rapid growth, handles multi-state
              compliance, supports equity and contractor mixes, and produces clean documentation
              for investor diligence. The most common failures are administrative: employees in
              states where payroll is not registered, contractor misclassification, and benefits
              gaps that surface during a funding round.
            </p>
          </div>
          <div className="mt-8 space-y-4 text-lg leading-8 text-foreground/85">
            <p>
              The first time most venture-backed founders seriously think about their HR
              infrastructure is when a Series B investor's legal team starts asking questions. That
              is the wrong time.
            </p>
            <p>
              Here is how it usually plays out. A fast-growing startup hires aggressively,
              prioritizes product over back office, and ends up with employees in eight states but
              payroll registered in three. Or early hires get classified as contractors to save
              money, creating a misclassification liability that surfaces in diligence and drags
              down the valuation. Or the team expands into California without understanding PAGA
              exposure.
            </p>
            <p>
              None of these are dramatic failures. They are administrative ones. And they are
              almost entirely preventable.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <Section title="What investors actually want to see" alt>
      <p>
        At Series A, the bar is basic. Correct worker classification, workers' comp coverage,
        payroll tax registration in every state where you employ people. Most startups can clear
        it.
      </p>
      <p>
        By Series B the scrutiny tightens. Institutional investors want to see employment
        practices liability insurance, clean multi-state payroll tax documentation, and proof that
        benefits administration is not creating compliance gaps. They want evidence that someone
        competent has been running the people side of the business, not just the product.
      </p>
      <p>
        The right partner handles all of this quietly, so founders do not have to think about it
        between rounds.
      </p>
    </Section>

    <Section title="Why most startups choose wrong">
      <p>
        Tech founders default to the platforms they have heard of. Some of those are great fits.
        But "I have heard of it" is not a selection process, and the stakes are too high for that.
      </p>
      <p>A few things matter far more than brand recognition.</p>
      <p>
        <strong className="text-foreground">Scalability.</strong> You are not planning to stay at
        40 employees. Your provider, your pricing model, and your contract terms all need to scale
        with you instead of punishing you for growing.
      </p>
      <p>
        <strong className="text-foreground">Multi-state infrastructure.</strong> If your team is
        remote or spread across states, you need genuine multi-state compliance strength. Not
        everyone delivers this equally.
      </p>
      <p>
        <strong className="text-foreground">Equity and contractor handling.</strong> Most startups
        run a mix of W-2 employees, contractors, and equity holders. Your provider needs real
        experience with equity-heavy companies so that employment agreements and classifications
        line up with your cap table.
      </p>
      <p>
        <strong className="text-foreground">Investor familiarity.</strong> Some providers have
        established relationships with VC firms and know how to produce the documentation
        portfolio companies need during diligence. That is a real differentiator.
      </p>
    </Section>

    <Section title="The danger of the buddy referral here" alt>
      <p>
        This is exactly where a steered recommendation does the most damage. A broker who came up
        through one provider and funnels every startup to that same former employer is not
        matching you to the best fit for your growth stage. They are matching you to their comfort
        zone. For a company heading into a priced round, that can mean walking into diligence with
        a provider that was never built for your trajectory.
      </p>
      <p>
        Independent representation means a structured evaluation across multiple providers, real
        contract review, and someone who has seen enough implementations to know where the cracks
        usually appear.
      </p>
    </Section>

    <Section title="Charlotte's tech ecosystem is growing">
      <p>
        Charlotte is not Silicon Valley, but its tech and fintech sectors are expanding quickly.
        Startups coming out of the Queen City's accelerator and angel networks face the same
        infrastructure challenges as any venture-backed company, usually with fewer internal
        resources to solve them. If you're local, our{" "}
        <Link to="/peo-broker-charlotte" className="font-semibold text-accent hover:underline">
          Charlotte PEO broker page
        </Link>{" "}
        walks through what local representation looks like.
      </p>
      <p>
        Pillar PEO Advisors works with growth-stage and venture-backed companies to find providers
        that are built for scale, ready for investor scrutiny, and capable of handling a
        fast-moving team. Working with an{" "}
        <Link to="/peo-broker" className="font-semibold text-accent hover:underline">
          independent PEO broker
        </Link>{" "}
        is how you get the structured evaluation investors look for. If you are raising in the next
        twelve months, now is the time to get your people infrastructure in order.
      </p>
    </Section>

    <Section title="Frequently Asked Questions" alt>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`q${i}`}>
            <AccordionTrigger className="text-left font-heading font-700 text-foreground">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>

    <ArticleAuthorBio />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">
            Raising in the next twelve months?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Get your people infrastructure diligence-ready before investors start asking. We'll
            compare providers built for venture-backed scale.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
            >
              <Link to="/contact">
                Schedule a PEO Strategy Call
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default PeoForVentureBackedStartups;
