import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import ProofSlot from "@/components/ProofSlot";
import PartnerEnquiryForm from "@/components/partners/PartnerEnquiryForm";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import { SITE_URL, breadcrumb, ORG_REF } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "Will you take my client?",
    a: "No. We do not sell payroll software, insurance or accounting, so there is nothing for us to cross-sell into your seat. Scope is agreed in writing before we start, and we stay inside it.",
  },
  {
    q: "Is there a referral fee?",
    a: "We do not pay referral fees for HR advisory work, because we want every recommendation to stand on its merits. Where a PEO is placed, the provider pays a commission and it is disclosed in writing to the client.",
  },
  {
    q: "What if the answer is that they should do nothing?",
    a: "Then that is what we tell you, in writing, and nobody is paid anything. A large share of the renewals we review end with the client staying put or leaving the PEO model entirely.",
  },
  {
    q: "Can you work behind my brand?",
    a: "Yes. White-label delivery means we work inside your process, from your portal, and you present the analysis. The commission disclosure to the client stays in place either way.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Partners", path: "/partners" },
    ]),
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/partners#webpage`,
      url: `${SITE_URL}/partners`,
      name: "Partner with Pillar",
      description:
        "Referral and white-label HR partnerships for fractional CFOs, benefits brokers, accountants and attorneys.",
      isPartOf: ORG_REF,
      publisher: ORG_REF,
      dateModified: "2026-09-06",
    },
    faqSchema(faqs),
  ],
};

const partnerPages = [
  {
    title: "Fractional CFOs and COOs",
    href: "/partners/fractional-cfos",
    body: "You quarterback the client's finances and keep getting handed HR. We take the HR and PEO work off your plate without touching your seat.",
  },
  {
    title: "Benefits brokers",
    href: "/partners/benefits-brokers",
    body: "We do not take the medical and we do not replace you. We run the PEO side alongside you, from a census and current invoices.",
  },
  {
    title: "White-label delivery",
    href: "/partners/white-label",
    body: "We work inside your process and behind your brand. You present the analysis as your own; the commission disclosure stays.",
  },
  {
    title: "Client one-pager",
    href: "/partners/client-one-pager",
    body: "A printable page you can hand a client, optionally stamped with your firm name.",
  },
];

const Partners = () => (
  <>
    <SEOHead
      title="Partners | Pillar"
      fullTitle
      description="Referral and white-label HR and PEO partnerships. You keep the client relationship; we do the work behind it and disclose every commission."
      canonical={`${SITE_URL}/partners`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Partners"
      title="You keep the client. We do the HR."
      intro="For fractional CFOs and COOs, benefits brokers, accountants and attorneys whose clients keep asking HR and PEO questions they don't want to own."
    />

    <Section title="What a Pillar partnership is">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        A defined, scoped piece of HR or PEO work delivered behind your
        relationship — named or white-labelled, your choice. Most partner work
        starts the same way: a client's renewal lands badly, or they hire someone
        in a state nobody registered in, and the question lands on the person they
        trust most. That is usually you.
      </p>
      <p>
        We are the people you hand that question to. We review the numbers, tell
        you what is actually happening in them, and hand back an answer you can
        take to the client — including, often, "don't do this".
      </p>
    </Section>

    <Section title="Choose your route in" alt wide>
      <div className="grid gap-6 md:grid-cols-2">
        {partnerPages.map((p, i) => (
          <Reveal key={p.href} delay={i * 100}>
            <Link to={p.href} className="block h-full">
              <Card className="h-full border-border/60 card-elevated hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-700 text-green-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section title="What we do">
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Review a PEO renewal or proposal.</strong>{" "}
          Line by line — admin fee basis, SUTA, workers' compensation, benefit
          plan changes — and tell you what actually moved. See the{" "}
          <Link to="/resources/peo-renewal-review" className="text-green-ink hover:underline">
            renewal review
          </Link>
          .
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Compare PEOs, or say no to all of them.</strong>{" "}
          Free to the client. Frequently the answer is{" "}
          <Link to="/resources/when-a-peo-is-the-wrong-answer" className="text-green-ink hover:underline">
            that a PEO is the wrong answer
          </Link>
          , and we say so.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Fixed-price HR work.</strong> Audits,
          handbooks, FLSA review, I-9 and E-Verify cleanup, comp benchmarking,
          multi-state registration cleanup — quoted before it starts.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Run transitions.</strong> Into or out
          of a PEO, HRIS migrations, payroll switches.
        </Bullet>
      </ul>
    </Section>

    <Section title="What we never do" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">We do not take the relationship.</strong>{" "}
          You stay the client's primary advisor. We copy you on everything, or we
          never appear at all — your call.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">We do not sell your clients anything else.</strong>{" "}
          No software, no accounting, no medical, no retirement plan. There is no
          second product behind our recommendation.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">We do not touch your fees.</strong> How
          you bill your client is your business. We never quote against you and
          never comment on your pricing.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">We do not hide the money.</strong> Where
          a PEO pays us a commission, the client is told in writing, whoever
          presents the analysis.
        </Bullet>
      </ul>
    </Section>

    <Section title="How commission works">
      <p>
        Our PEO brokerage is free to the client. When a client places or renews
        coverage through us, the PEO provider pays us a commission built into the
        provider's own pricing, and we disclose the provider and the amount in
        writing before anything is signed. If the client stays where they are, or
        decides against a PEO, nobody pays us anything.
      </p>
      <p>
        Our fixed-price advisory work — audits, projects, fractional HR,
        transitions — is quoted to the client, or to you if you are
        white-labelling, before the work starts. We do not pay referral fees on
        that work. The whole structure is set out on{" "}
        <Link to="/how-we-get-paid" className="text-green-ink hover:underline">
          how we get paid
        </Link>
        .
      </p>
      <p>
        Benefits brokers work on a tiered revenue share instead, so an existing
        book is protected — the detail is on the{" "}
        <Link to="/partners/benefits-brokers" className="text-green-ink hover:underline">
          benefits brokers page
        </Link>
        .
      </p>
      <LegalNote verified="2026-09-06" />
    </Section>

    <Section title="The honest no" alt>
      <p>
        The most useful thing we hand a partner is often a "don't do this". A PEO
        that looks cheaper in year one and reprices in year two. A client whose
        workers' compensation classes make the master policy expensive. A firm
        already past the size where the PEO model earns its fee. We would rather
        return that answer and be worth calling again than place a deal that
        embarrasses you in twelve months.
      </p>
      <p>
        If you want to see how we write that answer before you send us anyone,
        read{" "}
        <Link to="/resources/when-a-peo-is-the-wrong-answer" className="text-green-ink hover:underline">
          when a PEO is the wrong answer
        </Link>
        .
      </p>
      <div className="mt-8">
        <ProofSlot needs="PROOF SLOT — named partner firm (fractional CFO practice or benefits brokerage) with a one-line quote about a delivered engagement, and written permission to publish." />
      </div>
    </Section>

    <Section title="Talk to us about a partnership">
      <p>
        Tell us who you work with and what keeps landing on your desk. Caleb reads
        every one of these himself.
      </p>
      <div className="mt-6">
        <PartnerEnquiryForm />
      </div>
    </Section>

    <Section title="Partner questions" alt>
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Let's talk about a first engagement."
      body="Tell us the client situation you're looking at and we'll tell you whether it's something we should be in — and whether it should carry your name or ours."
      proof="PROOF SLOT — second partner reference, ideally from the other side (broker vs fractional CFO)."
      secondary={{ label: "How we get paid", href: "/how-we-get-paid" }}
    />
  </>
);

export default Partners;
