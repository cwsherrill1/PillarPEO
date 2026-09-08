import { Link } from "react-router-dom";
import {
  MessageSquare,
  FileText,
  ClipboardList,
  BarChart3,
  Monitor,
  Handshake,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

/** Absorbs the former /how-it-works, /peo-broker and /why-peo pages. */

const stages = [
  {
    num: 1,
    icon: MessageSquare,
    title: "Discovery",
    desc: "A call to cover headcount, states, current payroll and benefits setup, and what's driving the search, renewal pricing, a service issue, or first-time buying. Takes about 30-45 minutes and sets the shortlist of providers worth quoting.",
  },
  {
    num: 2,
    icon: FileText,
    title: "Data gathering",
    desc: "You provide a census (names, ages, ZIP codes, salaries), current benefits summaries, payroll reports, and workers' comp loss runs. We tell you exactly what's needed and chase down anything missing. This is the step most delays come from, so how quickly your team can pull records sets the pace here.",
  },
  {
    num: 3,
    icon: ClipboardList,
    title: "Underwriting & proposals",
    desc: "Once providers have a complete file, they underwrite your group and return pricing. This step is out of our hands once submitted; turnaround runs roughly one to three weeks depending on how many providers are quoting and the complexity of your benefits and workers' comp classes.",
  },
  {
    num: 4,
    icon: BarChart3,
    title: "Proposal review",
    desc: "We put every proposal into one format so fees, plan designs, and contract terms line up side by side, and walk through what's different between them, including the terms behind the sticker price.",
  },
  {
    num: 5,
    icon: Monitor,
    title: "Demos & decision support",
    desc: "For finalists, we set up demos with the provider's team so you can see the platform and ask questions directly. We also flag anything in the contract worth pushing back on before you sign.",
  },
  {
    num: 6,
    icon: Handshake,
    title: "Signing & onboarding",
    desc: "Once you pick a provider, we help route the paperwork and stay available through the first payroll runs and open enrollment so nothing gets dropped in the handoff. Full onboarding typically takes several weeks and depends on the provider's own implementation calendar.",
  },
];

const faqs = [
  {
    q: "What does a PEO broker do?",
    a: "A PEO broker shops the full market on your behalf, compares providers honestly, negotiates pricing and terms, and stays on as a long-term advocate after you sign.",
  },
  {
    q: "How much does a PEO broker cost?",
    a: "At Pillar, nothing. Providers compensate the broker, so the service is free to the employer and your savings stay intact. The commission is disclosed to you in writing before any placement.",
  },
  {
    q: "How do I know if a broker is independent?",
    a: "Ask where they worked before and how many providers they actively place business with. A broker who came from one PEO and keeps recommending it is steering, not advising.",
  },
  {
    q: "Do I need a broker, or can I go direct?",
    a: "You can go direct, but you will be comparing proposals alone, with no leverage on renewal and no advocate when issues come up. A good broker pays for themselves in saved time and avoided mistakes.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "PEO brokerage", path: "/services/peo-brokerage" },
    ]),
    {
      "@type": "Service",
      name: "PEO brokerage",
      serviceType: "PEO broker",
      provider: ORG_REF,
      areaServed: "US",
      url: `${SITE_URL}/services/peo-brokerage`,
      description:
        "Independent PEO brokerage: a full-market comparison at no cost to the employer, with provider commission disclosed in writing.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
    <span>{children}</span>
  </li>
);

const Prose = ({
  title,
  children,
  alt = false,
}: {
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) => (
  <section className={alt ? "bg-muted/30 py-20 md:py-28" : "bg-background py-20 md:py-28"}>
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

const PeoBrokerage = () => (
  <>
    <SEOHead
      title="PEO Brokerage: Free to the Employer"
      description="Independent PEO brokerage: a full-market comparison at no cost to you, with the provider commission disclosed in writing. Six stages, about 60 days."
      canonical={`${SITE_URL}/services/peo-brokerage`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="B-1 · PEO brokerage"
      title="Compare PEOs with someone who works for you."
      intro="A full-market comparison at no cost to the employer. The provider pays the commission, and we show you what it is."
    />

    <section className="bg-background">
      <div className="container max-w-3xl py-16 md:py-20">
        <Reveal>
          <UpdatedLine />
          <div className="mt-4 rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
            <p className="text-base font-700 leading-relaxed text-foreground md:text-lg">
              A PEO broker represents you, not the PEO. The best one goes to the full
              market, compares every option honestly, and has no hidden loyalty to a
              former employer. Brokers are paid by the providers, so the service is free
              to the employer, but that only protects you when the broker is independent of the PEO and shows you the number.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <Prose title="What a PEO broker does" alt>
      <ul className="space-y-2">
        <Bullet>Goes to market with multiple providers at once, including ones outside the familiar names</Bullet>
        <Bullet>Turns confusing proposals into a true apples-to-apples comparison</Bullet>
        <Bullet>Flags hidden fees, contract traps, and renewal risk before you sign</Bullet>
        <Bullet>Negotiates pricing and terms on your behalf</Bullet>
        <Bullet>Stays involved after the deal closes so implementation doesn't fall apart</Bullet>
      </ul>
    </Prose>

    {/* Six stages, from the former How It Works page */}
    <section className="bg-background">
      <div className="container max-w-4xl py-20 md:py-28">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-800 text-foreground md:text-4xl">
            Six stages. Zero guesswork.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            A typical comparison takes around 60 days from first conversation to signed
            agreement, though timing depends on complexity.
          </p>
        </Reveal>

        <div className="mt-14 space-y-6">
          {stages.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.num} delay={i * 100}>
                <Card className="border-l-4 border-l-accent card-elevated hover-lift">
                  <CardContent className="flex items-start gap-5 p-6 md:gap-7">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent font-heading text-lg font-800 text-accent-foreground shadow-md md:h-14 md:w-14 md:text-xl">
                      {s.num}
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <Icon className="h-5 w-5 text-green-ink" />
                        <h3 className="font-heading text-xl font-700 text-foreground md:text-2xl">
                          {s.title}
                        </h3>
                      </div>
                      <p className="max-w-xl leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    <Prose title="Independent vs. captive brokers" alt>
      <p>
        A large share of PEO brokers spent years inside a single PEO before going
        independent. That rolodex of old colleagues becomes a quiet pipeline: clients
        come in expecting a market search and quietly get routed back to a former
        employer. The broker calls it a relationship; the client thinks they're getting
        an open comparison.
      </p>
      <p>
        Independent representation means the broker's only loyalty is to your outcome.
        If staying where you are is the right call, they say so. The test is simple: ask
        how many providers they place business across and where they worked before.
      </p>
    </Prose>

    <Prose title="How brokers are paid, and why this one is free">
      <p>
        Brokers in this space are compensated by the provider, which means the service
        is free to the employer. The check looks the same no matter who the broker
        recommends, which is exactly why the buddy system is so easy to hide. The
        protection is transparency: work with someone who shows you their compensation
        structure upfront and has real relationships with enough providers that no
        single one dominates.
      </p>
      <p>
        At Pillar, brokerage is free to you. The provider pays the commission and
        we disclose it in writing before any placement. Our{" "}
        <Link to="/how-we-get-paid" className="font-semibold text-green-ink hover:underline">
          how we get paid
        </Link>{" "}
        page sets out the whole arrangement, including why our audit fee never changes
        based on what we recommend.
      </p>
    </Prose>

    <Prose title="Questions to ask any broker before you trust them" alt>
      <ul className="space-y-2">
        <Bullet>Where did you work before you became a broker?</Bullet>
        <Bullet>How many providers do you actively place business with?</Bullet>
        <Bullet>Do you disclose your compensation from each one?</Bullet>
        <Bullet>Are you involved after we sign, or do you disappear?</Bullet>
        <Bullet>If staying put is the right call for us, will you say so?</Bullet>
      </ul>
    </Prose>

    <Prose title="If you're already in a PEO">
      <p>
        Moving into, out of, or between PEOs is separate, paid work; see{" "}
        <Link to="/services/transitions" className="font-semibold text-green-ink hover:underline">
          transitions
        </Link>
        . The comparison itself stays free.
      </p>
      <p>
        Benefits design is where most of the value shows up. If you're weighing options,
        our guide to{" "}
        <Link
          to="/resources/employee-health-benefits-options"
          className="font-semibold text-green-ink hover:underline"
        >
          employee health benefits options
        </Link>{" "}
        walks through the trade-offs, and the{" "}
        <Link to="/resources/peo-cost-guide" className="font-semibold text-green-ink hover:underline">
          PEO cost guide
        </Link>{" "}
        covers pricing.
      </p>
    </Prose>

    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="mt-6 w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`}>
                <AccordionTrigger className="text-left font-heading font-700 text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>


    <Prose title="A PEO is usually the wrong answer if…" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Your benefits are already competitive.</strong>{" "}
          If a well-placed group plan is doing its job, moving onto a master plan
          often buys administration you could buy more cheaply on its own.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Your workers' compensation classes are heavy.</strong>{" "}
          In the proposals we review, high-hazard classes are one of the fastest
          ways for a PEO quote to stop making sense.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">You are past roughly 150 people.</strong>{" "}
          At that size most firms can hire the internal capability and buy the
          systems directly, and the per-employee administration fee stops earning
          its keep.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">You want control of your own plan design.</strong>{" "}
          Inside a PEO, plan design belongs to the provider. If that matters to
          your partners, this is the wrong model.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">The real problem is a process problem.</strong>{" "}
          Messy onboarding, unclear classification and an out-of-date handbook do
          not get fixed by changing who runs payroll.
        </Bullet>
      </ul>
      <p>
        We say this before we compare anything, because it saves everybody a
        quarter. The long version, with the mechanics behind each case, is in{" "}
        <Link to="/resources/when-a-peo-is-the-wrong-answer" className="text-green-ink hover:underline">
          when a PEO is the wrong answer
        </Link>
        .
      </p>
    </Prose>


    <ServiceCta
      heading="Compare PEOs, free."
      body="Start with a short conversation. If a PEO isn't the right answer for your firm, we'll say so."
      proof="employer quote on a completed PEO placement, with headcount, states and what changed."
      secondary={{ label: "How we get paid", href: "/how-we-get-paid" }}
    />
  </>
);

export default PeoBrokerage;
