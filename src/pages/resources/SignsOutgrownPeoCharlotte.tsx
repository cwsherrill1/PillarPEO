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
    q: "How long does it take to switch PEOs?",
    a: "Usually 30 to 45 days when a broker manages the proposals, exit terms, and data transfer.",
  },
  {
    q: "Is it worth switching PEOs over a price increase?",
    a: "Often yes. Renewal increases are a leverage point, not a fixed cost. Going to market frequently produces a better rate even if you stay.",
  },
  {
    q: "Will switching PEOs disrupt my payroll?",
    a: "A well-managed transition is built specifically to avoid disruption, with the data transfer and benefits enrollment coordinated in advance.",
  },
];

const ARTICLE = buildArticleJsonLd({
  title: "5 Signs You Have Outgrown Your PEO Provider",
  description:
    "Renewal hikes, constant rep turnover, weak benefits. Here are five signs your Charlotte business has outgrown its PEO and what switching looks like.",
  path: "/blog/signs-outgrown-peo-charlotte",
  datePublished: "2026-05-05",
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

const SignsOutgrownPeoCharlotte = () => (
  <>
    <SEOHead
      title="5 Signs You Have Outgrown Your PEO Provider"
      description="Renewal hikes, constant rep turnover, weak benefits. Here are five signs your Charlotte business has outgrown its PEO and what switching looks like."
      jsonLd={{
        "@context": "https://schema.org",
        "@graph": [ARTICLE["@graph"][0], ARTICLE["@graph"][1], FAQ_JSONLD],
      }}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Switching Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            5 Signs Your Charlotte Business
            <span className="text-accent"> Has Outgrown Its Current Provider</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            The quiet signals that it's time to renegotiate or switch — and what the move actually
            looks like.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <ArticleByline datePublished="May 5, 2026" />
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
              The five clearest signs you have outgrown your PEO are: unexplained renewal price
              increases, constant turnover in your service rep, benefits that are no longer
              competitive, growth into a size or complexity your provider was not built for, and
              weak multi-state compliance support. Switching is usually a 30 to 45 day process when
              a broker manages it.
            </p>
          </div>
          <div className="mt-8 space-y-4 text-lg leading-8 text-foreground/85">
            <p>
              Most companies do not leave their PEO because of a dramatic failure. They leave
              because something quietly stopped working and they finally got tired of accepting it.
            </p>
            <p>If any of these sound familiar, it is time to have a conversation.</p>
          </div>
        </Reveal>
      </div>
    </section>

    <Section title="1. Your renewal arrived with a price increase and no real explanation" alt>
      <p>
        Renewals rarely get negotiated. New rates show up, the owner signs because switching feels
        like a hassle, and the cost creeps up year after year. This is one of the most common
        patterns we see and one of the most fixable. The market is competitive. Once your provider
        knows you are actually shopping, the conversation changes.
      </p>
    </Section>

    <Section title="2. Your service rep turns over constantly">
      <p>
        You onboard, build a relationship with your rep, and six months later they are gone. Then
        it happens again. You end up re-explaining your business every time you have a question.
        Strong providers keep their people. If yours does not, that is a service quality problem
        affecting every interaction you have.
      </p>
    </Section>

    <Section title="3. Your benefits are no longer competitive" alt>
      <p>
        Benchmarks move. What was a strong health package three years ago can be mediocre today,
        especially in a hiring market like Charlotte. If you are losing candidates over benefits
        or hearing it from current employees, your provider's carrier relationships and plan
        designs may have fallen behind.
      </p>
    </Section>

    <Section title="4. You have grown into a complexity your provider was not built for">
      <p>
        Some are built for 10 to 50 employees. Others for 50 to 500. As you cross thresholds in
        headcount, states of operation, or benefits complexity, you may need different
        infrastructure. Your current provider may not raise this with you, because they do not
        want to lose the account.
      </p>
    </Section>

    <Section title="5. You expanded into a new state and they are struggling to keep up" alt>
      <p>
        Multi-state compliance is not a universal strength. If you have hired in California, New
        York, or another high-complexity state and your provider seems to be figuring it out on
        the fly, that is a problem. California PAGA exposure alone is enough to justify a serious
        review.
      </p>
    </Section>

    <Section title="What switching actually looks like">
      <p>
        The number one reason businesses stay stuck is the belief that switching is painful. It
        does not have to be. A{" "}
        <Link to="/peo-broker" className="font-semibold text-accent hover:underline">
          PEO broker
        </Link>{" "}
        manages the whole transition, from new proposals to negotiating exit terms to coordinating
        the data handoff. In most cases it takes 30 to 45 days with minimal time required from you.
      </p>
      <p>
        One caution. If the person managing your switch came up through a provider and keeps
        nudging you toward their old team, you are not running an open search. Make sure whoever
        handles this is genuinely independent and will stay on afterward as a long-term watchdog.
        For local Charlotte employers, our{" "}
        <Link to="/peo-broker-charlotte" className="font-semibold text-accent hover:underline">
          Charlotte broker page
        </Link>{" "}
        explains what that looks like in practice.
      </p>
      <p>
        If your renewal is coming up in the next 90 days, that is your window. We will give you an
        honest assessment and tell you whether staying, renegotiating, or switching makes the most
        sense.
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
            Renewal in the next 90 days?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            We'll give you an honest read on whether to stay, renegotiate, or switch — and manage
            the whole transition if you move.
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

export default SignsOutgrownPeoCharlotte;
