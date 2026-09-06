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
    q: "Does the client ever learn Pillar was involved?",
    a: "Only where disclosure requires it. Deliverables can carry your brand alone, but where a PEO provider pays a commission, the client is told in writing who is paid and by whom before anything is signed.",
  },
  {
    q: "Whose paper is the work done on?",
    a: "Yours with the client, ours with you. You hold the client agreement; we hold a written scope with you covering deliverables, turnaround and who speaks to whom.",
  },
  {
    q: "Can you join client calls?",
    a: "Yes, as part of your team, introduced however you prefer — or not at all. Some partners want a specialist in the room; others want the analysis and nothing else.",
  },
  {
    q: "What if the client asks a question you can't answer as us?",
    a: "We tell you rather than improvise. Anything that touches legal advice goes back to you to route; Pillar is not a law firm.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Partners", path: "/partners" },
      { name: "White-label", path: "/partners/white-label" },
    ]),
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/partners/white-label#webpage`,
      url: `${SITE_URL}/partners/white-label`,
      name: "White-label HR and PEO delivery",
      description:
        "We deliver HR and PEO work behind your brand, inside your process, with commission disclosure to the client preserved.",
      isPartOf: ORG_REF,
      publisher: ORG_REF,
      dateModified: "2026-09-06",
    },
    faqSchema(faqs),
  ],
};

const WhiteLabel = () => (
  <>
    <SEOHead
      title="White-Label HR Delivery | Pillar"
      fullTitle
      description="We deliver HR and PEO work behind your brand and inside your process, with commission disclosure to the client preserved in writing."
      canonical={`${SITE_URL}/partners/white-label`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Partners"
      title="Your brand on the front. Our work behind it."
      intro="For firms that want the HR and PEO analysis delivered inside their own process, presented as their own."
    />

    <Section title="What white-label means here">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        We do the HR and PEO work and you present it. Deliverables carry your
        brand, we work inside your process, and the client relationship stays
        entirely yours. The one thing that never gets hidden is money: where a
        provider pays a commission, the client is told in writing.
      </p>
      <p>
        Most partners choose this because their client already believes they have
        this covered, and introducing a third firm mid-engagement raises a question
        nobody needs raised.
      </p>
    </Section>

    <Section title="What we can deliver under your brand" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">HR audit findings.</strong> The full
          review of employment practice, documentation, classification and
          multi-state exposure, written up as your report.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">PEO comparison and renewal analysis.</strong>{" "}
          Provider-by-provider, with the assumptions visible so it stands up in
          front of the client's board.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Documents.</strong> Handbooks, policy
          sets, offer and classification templates, produced without our name on
          them.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Transition project plans.</strong> PEO
          exits, implementations, HRIS and payroll migrations, delivered on your
          timeline and in your format.
        </Bullet>
      </ul>
    </Section>

    <Section title="How we work inside your process">
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Scope first, in writing.</strong>{" "}
          Before anything starts, we agree what is in scope, what is out, who
          speaks to whom, and the turnaround.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Your file conventions.</strong> Your
          template, your naming, your portal. We do not ask a client to log into
          anything of ours.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">One point of contact.</strong> You get
          a named person, not a queue.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Client data stays minimal.</strong> We
          ask for the census, invoices and agreements we need to answer the
          question, and nothing beyond that.
        </Bullet>
      </ul>
    </Section>

    <Section title="What must always be disclosed" alt>
      <p>
        White-label covers presentation, not payment. Three things are disclosed to
        the client in writing no matter whose logo is on the document:
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Who is paid, and by whom.</strong>{" "}
          Where a PEO provider pays a commission on a placement, the client is told
          before anything is signed.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">That the analysis is not legal advice.</strong>{" "}
          Pillar is not a law firm and neither the analysis nor its white-labelled
          version becomes legal advice by changing logos.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">The assumptions behind any estimate.</strong>{" "}
          Estimates are shown as ranges with the inputs visible, so nobody reads
          them as a quote.
        </Bullet>
      </ul>
      <p>
        If a partner needs those removed, we decline the engagement. It is the one
        boundary that is not negotiable. The full picture is on{" "}
        <Link to="/how-we-get-paid" className="text-green-ink hover:underline">
          how we get paid
        </Link>
        , and the honest-no case is on{" "}
        <Link to="/resources/when-a-peo-is-the-wrong-answer" className="text-green-ink hover:underline">
          when a PEO is the wrong answer
        </Link>
        .
      </p>
      <LegalNote verified="2026-09-06" />
    </Section>

    <Section title="Named instead?">
      <p>
        Plenty of partners prefer a named introduction: you introduce us, we scope
        directly with the client, and you stay copied on everything. It is simpler,
        and it lets the client ask us the hard questions directly. Both routes are
        described on the{" "}
        <Link to="/partners" className="text-green-ink hover:underline">
          partner overview
        </Link>
        , and{" "}
        <Link to="/partners/fractional-cfos" className="text-green-ink hover:underline">
          fractional CFOs
        </Link>{" "}
        and{" "}
        <Link to="/partners/benefits-brokers" className="text-green-ink hover:underline">
          benefits brokers
        </Link>{" "}
        each have their own version.
      </p>
      <div className="mt-8">
        <ProofSlot needs="PROOF SLOT — partner firm that has used white-label delivery, with a one-line quote and written permission to name them." />
      </div>
    </Section>

    <Section title="White-label questions" alt>
      <FaqBlock faqs={faqs} />
      <p className="mt-8">
        To discuss a white-label arrangement,{" "}
        <Link to="/partners" className="text-green-ink hover:underline">
          send a partner enquiry
        </Link>
        .
      </p>
    </Section>

    <ServiceCta
      heading="Tell us what has to carry your name."
      body="Send the engagement you're looking at and we'll come back with scope, turnaround and exactly what the client would see."
      proof="PROOF SLOT — second white-label reference, ideally a multi-deliverable engagement."
      secondary={{ label: "Partner overview", href: "/partners" }}
    />
  </>
);

export default WhiteLabel;
