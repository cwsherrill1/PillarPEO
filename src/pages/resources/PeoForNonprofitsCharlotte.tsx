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
    q: "Can a small nonprofit afford group health benefits?",
    a: "Often yes, especially through a pooled structure that combines employees across organizations to reach large-group pricing.",
  },
  {
    q: "Do nonprofits have the same HR compliance rules as businesses?",
    a: "Yes. Nonprofits answer to the same federal and North Carolina employment laws, including workers' comp and benefits administration rules.",
  },
  {
    q: "What is pooled benefits for nonprofits?",
    a: "An arrangement where multiple nonprofits band together so their combined headcount unlocks better benefits pricing and shared professional HR support.",
  },
];

const ARTICLE = buildArticleJsonLd({
  title: "Smarter HR and Benefits for Charlotte Nonprofits",
  description:
    "Charlotte nonprofits face the same HR and benefits obligations as for-profits with fewer resources. Here is how pooled benefits change the math.",
  path: "/blog/peo-for-nonprofits-charlotte",
  datePublished: "2026-05-12",
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

const PeoForNonprofitsCharlotte = () => (
  <>
    <SEOHead
      title="Smarter HR and Benefits for Charlotte Nonprofits"
      description="Charlotte nonprofits face the same HR and benefits obligations as for-profits with fewer resources. Here is how pooled benefits change the math."
      jsonLd={{
        "@context": "https://schema.org",
        "@graph": [ARTICLE["@graph"][0], ARTICLE["@graph"][1], FAQ_JSONLD],
      }}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Nonprofit Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            The Charlotte Nonprofit Leader's Guide
            <span className="text-accent"> to Smarter Benefits and HR</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            How pooled benefits and shared HR support let small nonprofits punch above their
            weight — without growing the back office.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <ArticleByline datePublished="May 12, 2026" />
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
            className="mb-8 inline-flex items-center text-sm font-semibold text-green-ink hover:text-green-ink/80"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources
          </Link>
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
            <p className="text-base font-700 leading-relaxed text-foreground md:text-lg">
              Nonprofits carry the same payroll, compliance, and benefits obligations as
              for-profit employers but usually with smaller budgets. Pooling employees through a
              shared structure can unlock large-group benefits pricing and professional HR support
              that a small nonprofit could not access alone, freeing leadership to focus on mission
              instead of administration.
            </p>
          </div>
          <div className="mt-8 space-y-4 text-lg leading-8 text-foreground/85">
            <p>
              Nonprofit leaders in Charlotte are running real organizations with real employees,
              real payroll obligations, and real compliance exposure. Most of them are doing it
              with infrastructure that does not match the size of the job.
            </p>
            <p>
              A nonprofit with 15 employees carries the same legal exposure as a for-profit with
              15 employees. The same workers' comp requirements. The same benefits administration
              obligations. The same North Carolina labor law compliance. What is different is the
              budget and the internal capacity to handle it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <Section title="Where the value shows up for a nonprofit" alt>
      <p>
        <strong className="text-foreground">Access to benefits that would otherwise be out of
        reach.</strong> By pooling employees across many organizations, the right structure lets a
        12-person nonprofit access the same quality health, dental, and vision coverage as a much
        larger company. For organizations recruiting mission-driven talent at below-market
        salaries, competitive benefits are often the difference between a yes and a no.
      </p>
      <p>
        <strong className="text-foreground">Compliance protection without a full-time HR
        hire.</strong> North Carolina nonprofits answer to the same federal and state employment
        law as any employer. The cost of one mistake, an audit, an EEOC claim, a coverage gap, can
        be devastating for a lean organization. Professional HR support removes that risk without
        the overhead of building an internal function.
      </p>
      <p>
        <strong className="text-foreground">Time back for leadership.</strong> Executive directors
        absorb people-management work that does not belong in their role. Every hour spent on
        enrollment questions is an hour not spent on mission, fundraising, or programs.
      </p>
    </Section>

    <Section title="The pooled benefits opportunity in Charlotte">
      <p>
        One of the more interesting conversations happening in the local nonprofit community is
        pooled benefits, where multiple nonprofits join together to access larger group pricing
        and more consistent HR support.
      </p>
      <p>
        The math is compelling. A coalition of Charlotte-area nonprofits, each with 8 to 25
        employees, could together unlock benefits and pricing that would be impossible to reach
        alone. It also creates a more stable, professionally managed experience for the employees
        of every organization involved.
      </p>
      <p>
        This is an area Pillar PEO Advisors is actively exploring with Charlotte nonprofit
        partners. If your organization wants to understand what a shared benefits structure could
        look like, we would welcome the conversation.
      </p>
    </Section>

    <Section title="A word of caution on advisors" alt>
      <p>
        Plenty of advisors in this space came up through a single provider and quietly route every
        client back to their old team. A nonprofit on a tight budget cannot afford a recommendation
        built around someone's friendships instead of your actual numbers. Work with an{" "}
        <Link to="/peo-broker" className="font-semibold text-green-ink hover:underline">
          independent PEO broker
        </Link>{" "}
        who will model the real cost, stay on as a long-term watchdog, and tell you the truth, even
        if the truth is that you should wait.
      </p>
      <p>
        Most Charlotte nonprofits we talk to are either overpaying for inadequate coverage or
        underinvesting in HR in ways that quietly create risk. Both are solvable — and{" "}
        <Link to="/peo-broker-charlotte" className="font-semibold text-green-ink hover:underline">
          working with a local Charlotte broker
        </Link>{" "}
        is the fastest way to get a clear picture.
      </p>
    </Section>

    <Section title="Frequently Asked Questions">
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
            Let's talk about your nonprofit's options.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Independent, mission-aware, and free forever. We'll model the real numbers and tell
            you the truth.
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

export default PeoForNonprofitsCharlotte;
