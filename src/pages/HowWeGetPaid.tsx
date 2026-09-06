import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
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

const faqs = [
  {
    q: "Are PEO brokers free?",
    a: "For the employer, yes. PEO brokers are paid a commission by the PEO you sign with, so you pay the broker nothing. What that fee is, and which providers pay more than others, is the part most brokers don't show you. Pillar discloses the commission in writing before any placement.",
  },
  {
    q: "Does the audit fee change based on what you recommend?",
    a: "No. The HR audit is a fixed price quoted before the work starts, and it does not change based on the findings or on what we recommend afterwards — including whether we recommend a PEO at all.",
  },
  {
    q: "What if the right answer is to do nothing?",
    a: "Then that's what the report says. We're paid for the audit either way, and we would rather tell you to stay put than sell you a transition you don't need.",
  },
  {
    q: "Do you take commissions on anything else?",
    a: "PEO placement is the only commission-paid work we do. HR audits, projects, fractional HR and transitions are all paid by you at a fixed price, with no third party involved.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "How we get paid", path: "/how-we-get-paid" },
    ]),
    {
      "@type": "WebPage",
      name: "How Pillar gets paid",
      url: `${SITE_URL}/how-we-get-paid`,
      description:
        "Pillar's compensation, in plain terms: fixed fees for advisory work, provider commission for PEO placement, disclosed in writing.",
      publisher: ORG_REF,
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

const HowWeGetPaid = () => (
  <>
    <SEOHead
      title="How We Get Paid"
      description="Exactly how Pillar is paid for every service, why PEO brokerage is free to the employer, and what we disclose before you decide."
      canonical={`${SITE_URL}/how-we-get-paid`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Disclosure"
      title="How we get paid, in plain terms."
      intro="Two ways: fixed fees you pay us, and a provider commission on PEO placements that we disclose in writing."
    />

    <section className="bg-background">
      <div className="container max-w-3xl py-20 md:py-28">
        <Reveal>
          <UpdatedLine />
          <h2 className="mt-3 font-heading text-3xl font-800 text-foreground md:text-4xl">
            Are PEO brokers free?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            For the employer, yes. PEO brokers are paid a commission by the PEO you sign
            with, so you pay the broker nothing. What that fee is, and whether some
            providers pay more than others, is the part most brokers don't show you.
            Pillar discloses the commission in writing before any placement.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 space-y-8 text-base leading-relaxed text-muted-foreground">
            <div>
              <h3 className="font-heading text-xl font-700 text-foreground">
                1. The audit fee is fixed, and it doesn't move.
              </h3>
              <p className="mt-2">
                The{" "}
                <Link to="/services/hr-audit" className="font-semibold text-green-ink hover:underline">
                  HR audit
                </Link>{" "}
                is quoted before the work starts, based only on your headcount band. It
                does not change based on what we find, what we recommend, or whether you
                buy anything else from us afterwards. Projects, fractional HR and
                transitions are the same: a fixed price agreed in advance.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-700 text-foreground">
                2. PEO brokerage is paid by the provider.
              </h3>
              <p className="mt-2">
                If you decide a PEO is the right answer and place through us, the PEO
                pays us a commission. You pay nothing. That's why{" "}
                <Link
                  to="/services/peo-brokerage"
                  className="font-semibold text-green-ink hover:underline"
                >
                  PEO brokerage
                </Link>{" "}
                is a free service rather than a priced one.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-700 text-foreground">
                3. The commission is disclosed in writing, before you sign.
              </h3>
              <p className="mt-2">
                Before any placement, you get the commission arrangement for each
                provider under consideration, in writing. If one provider pays more than
                another, you'll see that too, and you can weigh it yourself. We have no
                software to sell and no insurance to place.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-muted/30">
      <div className="container max-w-3xl py-20 md:py-28">
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

    <section className="bg-muted/30">
      <div className="container max-w-3xl py-16 md:py-20">
        <Reveal>
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">
            The commission is why we publish the no.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A commission only gets paid when a PEO is placed, so the honest thing
            is to be equally public about when it should not be. We wrote that up
            in full:{" "}
            <Link
              to="/resources/when-a-peo-is-the-wrong-answer"
              className="font-semibold text-green-ink hover:underline"
            >
              when a PEO is the wrong answer
            </Link>
            . If your firm is in one of those cases, we will tell you on the first
            call and nobody is paid anything.
          </p>
        </Reveal>
      </div>
    </section>

    <ServiceCta
      heading="Ask us anything about the money."
      body="If something about how we're paid doesn't sit right, raise it on the first call and we'll put the numbers in front of you."
      proof="client quote about the commission disclosure, or a redacted sample disclosure document."
      secondary={{ label: "See all services", href: "/services" }}
    />
  </>
);

export default HowWeGetPaid;
