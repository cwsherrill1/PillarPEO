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
    q: "Why are PEO prices so hard to compare?",
    a: "Providers quote differently, some by percent of payroll and some per employee per month, and often bundle admin fees into benefits. A broker normalizes them into a true total cost comparison.",
  },
  {
    q: "Are PEO renewal increases negotiable?",
    a: "Yes. Renewal is a leverage point. Signaling that you are evaluating alternatives frequently changes the rate offered.",
  },
  {
    q: "How do I know my advisor is unbiased?",
    a: "Ask how many providers they place business across and how they are paid. One or two providers is a sign of a funnel, not independent advice.",
  },
];

const ARTICLE = buildArticleJsonLd({
  title: "What the PEO Industry Does Not Tell You",
  description:
    "Hidden fees, renewal traps, and brokers funneling clients back to old employers. A Charlotte broker breaks down what the sales process hides.",
  path: "/blog/peo-industry-transparency",
  datePublished: "2026-05-19",
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
        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
      </Reveal>
    </div>
  </section>
);

const PeoIndustryTransparency = () => (
  <>
    <SEOHead
      title="What the PEO Industry Does Not Tell You"
      description="Hidden fees, renewal traps, and brokers funneling clients back to old employers. A Charlotte broker breaks down what the sales process hides."
      jsonLd={{
        "@context": "https://schema.org",
        "@graph": [ARTICLE["@graph"][0], ARTICLE["@graph"][1], FAQ_JSONLD],
      }}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Industry Insider</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            What This Industry Does Not Want You to Know,
            <span className="text-accent"> From a Broker Who Has Seen Both Sides</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Hidden fees, renewal traps, and the buddy system most brokers will not admit to.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <ArticleByline datePublished="May 19, 2026" />
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
              The PEO sales process hides several things: pricing built to be hard to compare,
              renewal increases that bet on you not switching, salespeople who do not fully
              understand the product, and brokers who funnel clients back to a former employer.
              The protection is an independent advisor who places business across many providers
              and discloses how they are paid.
            </p>
          </div>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I am a broker. My business exists because this sales process is broken enough that
              owners need someone genuinely in their corner. So let me start with the uncomfortable
              truth about my own side of the table.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <Section title="A lot of brokers are just sending business back to their friends" alt>
      <p>
        Many brokers in this industry spent years working inside a provider before going
        independent. They keep the relationships, the old managers, the buddies still working the
        sales floor. When a client shows up, the business quietly flows right back to the people
        they used to work alongside. They call it a relationship. You think you are getting an
        open market search. You are not.
      </p>
      <p>
        You protect yourself with one question. Ask where they worked before, and watch whether
        that same name keeps landing at the top of every recommendation.
      </p>
    </Section>

    <Section title="Pricing is built to be hard to compare">
      <p>
        Every major provider presents pricing differently. Some quote a percentage of payroll,
        some quote per employee per month, some bury administration costs inside benefits so the
        admin fee looks smaller than it is. Some charge implementation fees, some waive them as a
        tactic while building the cost in elsewhere. None of this is illegal. It is designed to
        make a true side by side comparison difficult. A broker's job is to pull the real total
        cost out of every proposal and line them up honestly, not to wave you toward whoever they
        are most comfortable with.
      </p>
    </Section>

    <Section title="The renewal trap" alt>
      <p>
        Here is the pattern that plays out constantly. You sign, you have a reasonable first year,
        and then renewal arrives with a 15 to 20 percent increase. The explanation is usually
        "market conditions." Sometimes that is true. Often it is also a bet that switching feels
        too hard to bother. Renewal is a leverage point, not a foregone conclusion. Going to
        market, even just signaling that you are evaluating alternatives, changes the conversation.
      </p>
    </Section>

    <Section title="Not every salesperson understands what they are selling">
      <p>
        This sounds harsh but it is accurate. Sales in this field is high turnover. The person who
        signed you may not have fully understood the compliance implications of the structure, how
        workers' comp flows under the master policy, or what happens to your benefits mid-year
        when you add employees in a new state. That is a staffing problem baked into the industry,
        and it is another reason independent, full-time evaluation matters.
      </p>
    </Section>

    <Section title="The preferred-referral problem" alt>
      <p>
        Some providers cultivate exclusive relationships with CPAs, insurance brokers, and other
        advisors who then funnel every client to that one place. The referral partner gets a
        check. The client gets whoever they were steered toward, not the best fit. Ask any
        advisor directly how many providers they actively place with. If the answer is one or two,
        you are not getting independent advice.
      </p>
    </Section>

    <Section title="What an honest relationship looks like">
      <p>
        The good providers exist. They handle compliance competently, staff their service teams
        well, communicate before problems blow up, and treat renewal as a partnership rather than
        an extraction. Finding them takes someone who has seen enough of the market to know who
        is actually performing and who is coasting on reputation and old friendships.
      </p>
      <p>
        That is what Pillar PEO Advisors does. We are not affiliated with any single provider. We
        have no preferred placement deals and no old sales floor we are quietly feeding. The
        model is Free Forever, the providers pay us so your savings stay intact, and we stay on
        afterward as your long-term watchdog. We make money only when we find you the right fit,
        and we only find the right fit by being honest with you.
      </p>
      <p>If you want a straight read on your current situation, we will give you one.</p>
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
            Want a straight read on your situation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            No old sales floor, no preferred placements — just an honest comparison and a
            long-term watchdog.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule a PEO Strategy Call
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default PeoIndustryTransparency;
