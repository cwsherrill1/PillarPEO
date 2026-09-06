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
    q: "Do I lose the client relationship?",
    a: "No. You stay the client's primary advisor. We can work entirely behind you, appear as a named specialist on your team, or scope directly with the client while you stay copied on everything.",
  },
  {
    q: "What does the client pay for a PEO comparison?",
    a: "Nothing. The provider pays a commission on placement and we disclose the provider and the amount in writing before anything is signed. If the client stays put, nobody is paid.",
  },
  {
    q: "How long does a first review take?",
    a: "With a census, current invoices and the existing agreement in hand, a first read is usually back inside a week. A full market comparison takes longer because it depends on provider response times.",
  },
  {
    q: "Can I present the work as mine?",
    a: "Yes. We can deliver an analysis you present inside your own reporting, with no Pillar branding. See the white-label page for how that works.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Partners", path: "/partners" },
      { name: "Fractional CFOs", path: "/partners/fractional-cfos" },
    ]),
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/partners/fractional-cfos#webpage`,
      url: `${SITE_URL}/partners/fractional-cfos`,
      name: "HR and PEO support for fractional CFOs and COOs",
      description:
        "Hand the HR and PEO questions to Pillar and keep the client relationship. Free brokerage to the client, commission disclosed in writing.",
      isPartOf: ORG_REF,
      publisher: ORG_REF,
      dateModified: "2026-09-06",
    },
    faqSchema(faqs),
  ],
};

const FractionalCfos = () => (
  <>
    <SEOHead
      title="For Fractional CFOs and COOs | Pillar"
      fullTitle
      description="Hand the HR and PEO questions to Pillar and keep the client relationship. Brokerage is free to the client and commission is disclosed in writing."
      canonical={`${SITE_URL}/partners/fractional-cfos`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Partners"
      title="You already own the numbers. You don't have to own HR."
      intro="For fractional CFOs and COOs whose clients keep asking employment questions that sit outside the engagement letter."
    />

    <Section title="What we do for a fractional CFO">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        We take the HR and PEO work off your plate without taking your seat. You
        keep the client relationship; we review the renewal, run the PEO
        comparison, or fix the compliance gap, and hand you an answer you can
        present. Brokerage is free to the client and any commission is disclosed
        in writing.
      </p>
      <p>
        You are already inside the numbers, and HR keeps showing up in them. A
        classification question that changes overtime exposure. A handbook nobody
        has touched since the firm hired in a second state. A payroll migration
        that no one wants to own. These are not finance problems, but they land on
        your desk because you are the operator in the room.
      </p>
    </Section>

    <Section title="The three questions you actually get asked" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">"Our benefits renewal is brutal — what do we do?"</strong>{" "}
          We read the renewal against the prior year and tell you what moved and
          why. In the proposals we review, the increase is often concentrated in
          one or two lines rather than spread across the quote. Start at the{" "}
          <Link to="/resources/peo-renewal-review" className="text-green-ink hover:underline">
            free renewal review
          </Link>
          .
        </Bullet>
        <Bullet>
          <strong className="text-foreground">"We just hired someone in another state."</strong>{" "}
          Registration, withholding, unemployment insurance, and whatever that
          state requires in the handbook. We handle the whole list rather than the
          first item on it.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">"Payroll is a mess."</strong> Usually
          a symptom. We find out whether it is the system, the process or the
          classification underneath it, then quote the fix as a fixed-price
          project.
        </Bullet>
      </ul>
    </Section>

    <Section title="What you get, and what you keep">
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">You keep the relationship.</strong> We
          never become the client's primary advisor. If you would rather we never
          appear at all, we work{" "}
          <Link to="/partners/white-label" className="text-green-ink hover:underline">
            behind your brand
          </Link>
          .
        </Bullet>
        <Bullet>
          <strong className="text-foreground">The client pays nothing for brokerage.</strong>{" "}
          Comparison, negotiation and implementation support are covered by the
          provider's commission, disclosed in writing.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Analysis you can present as your own.</strong>{" "}
          A written comparison with the assumptions visible, so it stands up in
          front of a board or a managing partner.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Fixed-price advisory work.</strong>{" "}
          Audits, handbooks, FLSA reviews, multi-state cleanup and transitions,
          quoted before the work starts, never billed by the hour after the fact.
        </Bullet>
      </ul>
    </Section>

    <Section title="What we need from you to start" alt>
      <ul className="space-y-3">
        <Bullet>An employee census — headcount, state, role and pay basis.</Bullet>
        <Bullet>
          The current PEO or payroll invoices, ideally three consecutive months.
        </Bullet>
        <Bullet>
          The existing agreement and the renewal letter, if there is one, so we can
          find the notice deadline first.
        </Bullet>
        <Bullet>
          Current benefit plan summaries, if benefits are part of the question.
        </Bullet>
        <Bullet>
          Whether you want us named, copied, or invisible. We set that before the
          first client contact, not after.
        </Bullet>
      </ul>
      <p>
        A first read on a renewal is usually back inside a week. A full market
        comparison runs longer, because provider response times drive it, and we
        start about 120 days out from a renewal date so the notice window never
        closes underneath the decision.
      </p>
      <LegalNote verified="2026-09-06" />
    </Section>

    <Section title="When we tell you not to do it">
      <p>
        Some of what you send us should not become a deal. A client with heavy
        workers' compensation classes, high turnover, already-competitive
        benefits, or headcount past the point where the PEO model earns its fee is
        usually better off staying put. We return that answer in writing and
        nobody is paid.
      </p>
      <p>
        That is the whole basis of the relationship, and it is written up in full
        on{" "}
        <Link to="/resources/when-a-peo-is-the-wrong-answer" className="text-green-ink hover:underline">
          when a PEO is the wrong answer
        </Link>{" "}
        and{" "}
        <Link to="/how-we-get-paid" className="text-green-ink hover:underline">
          how we get paid
        </Link>
        .
      </p>
      <div className="mt-8">
        <ProofSlot needs="PROOF SLOT — fractional CFO partner, named firm, one line on a delivered client engagement and what the client decided, with written permission." />
      </div>
    </Section>

    <Section title="Questions from fractional CFOs" alt>
      <FaqBlock faqs={faqs} />
      <p className="mt-8">
        Ready to talk?{" "}
        <Link to="/partners" className="text-green-ink hover:underline">
          Send a partner enquiry
        </Link>{" "}
        — it goes to Caleb directly.
      </p>
    </Section>

    <ServiceCta
      heading="Send us the client you don't want to own the HR for."
      body="Tell us the situation and we'll tell you whether it's worth doing, whose name it carries, and what it takes."
      proof="PROOF SLOT — second fractional CFO or COO reference, ideally multi-state."
      secondary={{ label: "Partner overview", href: "/partners" }}
    />
  </>
);

export default FractionalCfos;
