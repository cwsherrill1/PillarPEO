import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import ProofSlot from "@/components/ProofSlot";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import { SITE_URL, breadcrumb, ORG_REF } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "Who does Pillar partner with?",
    a: "Fractional CFOs and COOs who reach the HR edge of a client engagement, and benefits brokers who want a PEO comparison run without handing the client relationship to a competitor. Both keep the relationship; we do the HR work behind it.",
  },
  {
    q: "Is there a referral fee?",
    a: "We do not pay referral fees for HR advisory work. We would rather the recommendation be clean and defensible. For PEO placements, the provider pays a commission and we disclose it in writing to the client.",
  },
  {
    q: "Can you work white-label?",
    a: "Yes. We can deliver under your brand, join calls as part of your team, and produce documents without Pillar's name on them. Some partners prefer a named introduction instead; both work.",
  },
  {
    q: "Will you try to take my client?",
    a: "No. We do not sell payroll software, insurance or accounting, so there is nothing for us to cross-sell into your seat. Our scope is written down before we start and we stay inside it.",
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
        "Referral and white-label HR partnerships for fractional CFOs, COOs and benefits brokers.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": ORG_REF },
      dateModified: "2026-09-06",
    },
    faqSchema(faqs),
  ],
};

const Partners = () => (
  <>
    <SEOHead
      title="Partners | Pillar"
      fullTitle
      description="Referral and white-label HR partnerships for fractional CFOs, COOs and benefits brokers. We do the HR work; you keep the client relationship."
      canonical={`${SITE_URL}/partners`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Partners"
      title="You keep the client. We do the HR."
      intro="For fractional CFOs and COOs, and for benefits brokers who need a PEO comparison run without handing the relationship to a competitor."
    />

    <Section title="What a Pillar partnership is">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        A defined, scoped piece of HR work delivered behind your relationship —
        named or white-labelled, your choice. We do not sell software, place
        insurance or do accounting, so there is nothing for us to cross-sell into
        the seat you already hold.
      </p>
    </Section>

    <Section title="Fractional CFOs and COOs" alt>
      <p>
        You are already inside the numbers, and HR keeps showing up in them. A
        classification question that changes overtime exposure. A handbook that has
        not been touched since the firm hired in a second state. A payroll
        migration that nobody wants to own. These are not finance problems, but
        they land on your desk because you are the operator in the room.
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">A fixed-price HR audit</strong> when
          you need to know what the exposure actually is before advising the
          client — see{" "}
          <Link to="/services/hr-audit" className="text-green-ink hover:underline">
            the audit
          </Link>
          .
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Targeted projects</strong> — handbook,
          FLSA review, I-9 and E-Verify cleanup, comp benchmarking — quoted before
          the work starts.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Multi-state coverage</strong> for
          clients who hired remotely and now employ in states nobody registered in.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Transitions</strong> when the client
          is moving payroll, HRIS, or into or out of a PEO.
        </Bullet>
      </ul>
    </Section>

    <Section title="Benefits brokers">
      <p>
        A client asks whether a PEO would be cheaper. Sending them to a PEO
        directly risks the medical line you placed; ignoring the question leaves
        them to Google it. We run the comparison as an independent third party and
        report the answer honestly — including, frequently, that the PEO is the
        wrong answer.
      </p>
      <p>
        We are a broker of PEO arrangements, not a benefits broker. We do not want
        your medical line and we will not quote against you. Where the comparison
        shows the client is better off staying with their existing plan, that is
        what the written comparison says. See{" "}
        <Link to="/resources/when-a-peo-is-the-wrong-answer" className="text-green-ink hover:underline">
          when a PEO is the wrong answer
        </Link>{" "}
        for how often that conclusion comes up.
      </p>
      <p>
        For clients already inside a PEO, the{" "}
        <Link to="/resources/peo-renewal-review" className="text-green-ink hover:underline">
          free renewal review
        </Link>{" "}
        gives you something concrete to bring them about 120 days before their
        renewal date.
      </p>
    </Section>

    <Section title="Named or white-label" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Named introduction.</strong> You
          introduce us, we scope directly with the client, and you stay copied on
          everything. Simplest, and most partners choose it.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">White-label delivery.</strong> We work
          under your brand. Deliverables carry your name, we join calls as part of
          your team, and the client relationship stays entirely yours.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Either way, scope is written
          first.</strong> Before anything starts, we agree in writing what is in
          scope, what is out, and who talks to whom.
        </Bullet>
      </ul>
    </Section>

    <Section title="How the money works">
      <p>
        We do not pay referral fees for HR advisory work. We would rather every
        recommendation be defensible on its merits than have to explain a payment
        behind it. Our advisory work is quoted to the client, or to you if you are
        white-labelling, before it starts.
      </p>
      <p>
        Where a PEO is placed, the provider pays a commission and we disclose it in
        writing to the client. Nothing is charged to the client for the brokerage
        itself. The whole structure is set out on{" "}
        <Link to="/how-we-get-paid" className="text-green-ink hover:underline">
          how we get paid
        </Link>
        .
      </p>
      <LegalNote verified="2026-09-06" />
    </Section>

    <Section title="Partner questions" alt>
      <FaqBlock faqs={faqs} />
      <div className="mt-10">
        <ProofSlot needs="PROOF SLOT — named partner firm (fractional CFO practice or benefits brokerage) with a one-line quote about a delivered engagement, and written permission to publish." />
      </div>
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
