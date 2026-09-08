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
    q: "Will Pillar take my medical line?",
    a: "No. We are a broker of PEO arrangements, not a benefits broker. We do not quote medical, dental, vision or life against you, and we will not accept an appointment on a group you already hold.",
  },
  {
    q: "What happens to my commission if the client moves into a PEO?",
    a: "Inside a PEO the coverage sits on the provider's master plan, so the direct group placement usually ends. That is why partner arrangements are structured as a tiered revenue share on the PEO side, agreed in writing before we approach the client.",
  },
  {
    q: "Can you tell me quickly whether a PEO is even worth quoting?",
    a: "Yes. Send a census and the current invoices and we will give you a preliminary read before anyone goes to market. Most of these come back as 'not worth it', which protects the group you already placed.",
  },
  {
    q: "Who tells the client about the commission?",
    a: "We do, in writing, before anything is signed, including when the work is delivered under your brand.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Partners", path: "/partners" },
      { name: "Benefits brokers", path: "/partners/benefits-brokers" },
    ]),
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/partners/benefits-brokers#webpage`,
      url: `${SITE_URL}/partners/benefits-brokers`,
      name: "PEO partnerships for benefits brokers",
      description:
        "An independent PEO comparison run alongside you, not against you. We never take the medical line, and revenue share is agreed in writing.",
      isPartOf: ORG_REF,
      publisher: ORG_REF,
      dateModified: "2026-09-06",
    },
    faqSchema(faqs),
  ],
};

const BenefitsBrokers = () => (
  <>
    <SEOHead
      title="For Benefits Brokers | Pillar"
      fullTitle
      description="An independent PEO comparison run alongside you, not against you. We never take the medical line and revenue share is agreed in writing first."
      canonical={`${SITE_URL}/partners/benefits-brokers`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Partners"
      title="We run the PEO question. You keep the group."
      intro="For benefits brokers whose clients keep asking whether a PEO would be cheaper: a question you cannot ignore and should not have to answer alone."
    />

    <Section title="How this works with a benefits broker">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        A client asks whether a PEO would be cheaper. We run that comparison as an
        independent third party, report honestly, and never quote medical against
        you. Where a PEO is placed, revenue share is agreed in writing first.
        Where it is not, you keep the group and nobody is paid.
      </p>
      <p>
        Sending the client straight to a PEO risks the line you placed. Ignoring
        the question leaves them to search for the answer themselves and find a
        salesperson. Neither is a good outcome for you.
      </p>
    </Section>

    <Section title="The preliminary quote: before anyone goes to market" alt>
      <p>
        Most PEO questions can be answered without a single provider being
        contacted. Send us a census and the current invoices and we give you a
        preliminary read on whether the PEO model is even plausible for this group.
        No provider hears the client's name, nothing is disturbed, and you get an
        answer you can take back the same week.
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">What we need.</strong> Employee
          census with state and pay basis, current medical and ancillary invoices,
          workers' compensation classes and rates, and the state unemployment rate.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">What you get back.</strong> A plain
          read: plausible, marginal, or no. Where it is marginal we say what would
          have to be true for the numbers to work.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">What it costs.</strong> Nothing, and
          it carries no obligation to go to market afterwards.
        </Bullet>
      </ul>
      <p>
        The mechanics behind that read (admin fee basis, SUTA quoting, first-year
        pricing) are set out in{" "}
        <Link to="/resources/peo-pricing-explained" className="text-green-ink hover:underline">
          how PEO pricing works
        </Link>
        .
      </p>
    </Section>

    <Section title="Why we are not a threat to your book">
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">We do not place group medical.</strong>{" "}
          No medical, dental, vision, life or disability. We broker PEO
          arrangements and sell fixed-price HR work; that is the entire product
          list.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">We will not accept an appointment</strong>{" "}
          on a group you already hold.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">We frequently recommend staying put.</strong>{" "}
          Where the client's existing plan wins, that is what the written
          comparison says, see{" "}
          <Link to="/resources/when-a-peo-is-the-wrong-answer" className="text-green-ink hover:underline">
            when a PEO is the wrong answer
          </Link>
          .
        </Bullet>
        <Bullet>
          <strong className="text-foreground">You can stay in every conversation.</strong>{" "}
          Copied on all correspondence, or in front of it entirely under{" "}
          <Link to="/partners/white-label" className="text-green-ink hover:underline">
            white-label delivery
          </Link>
          .
        </Bullet>
      </ul>
    </Section>

    <Section title="Revenue share" alt>
      <p>
        A PEO placement usually moves the coverage onto the provider's master
        plan, which ends the direct group placement. We do not pretend otherwise.
        Where a PEO is placed through a broker partnership, the commission the
        provider pays us is shared with you on a tiered basis: the tier depends
        on group size and on how much of the work you carry, and the split is
        agreed in writing before the client is approached.
      </p>
      <p>
        We do not publish the tiers, because they are negotiated per partnership
        and depend on the provider's own schedule. We do publish the principle:
        the client is told in writing who is paid and by whom, before anything is
        signed. No fee is charged to the client for the brokerage itself. The full
        structure is on{" "}
        <Link to="/how-we-get-paid" className="text-green-ink hover:underline">
          how we get paid
        </Link>
        .
      </p>
      <LegalNote verified="2026-09-06" />
    </Section>

    <Section title="The renewal play">
      <p>
        For clients already inside a PEO, the{" "}
        <Link to="/resources/peo-renewal-review" className="text-green-ink hover:underline">
          free renewal review
        </Link>{" "}
        gives you something concrete to bring them about 120 days before their
        renewal date, early enough that the notice window is still open. In the
        renewals we review, the interesting movement is rarely in the headline
        admin fee; it is in the benefit plan swap, the workers' compensation
        classes or the unemployment line.
      </p>
      <div className="mt-8">
        <ProofSlot needs="named benefits brokerage partner, one line on a PEO comparison we ran alongside them and the outcome, with written permission." />
      </div>
    </Section>

    <Section title="Broker questions" alt>
      <FaqBlock faqs={faqs} />
      <p className="mt-8">
        Want the preliminary read on a specific group?{" "}
        <Link to="/partners" className="text-green-ink hover:underline">
          Send a partner enquiry
        </Link>
        .
      </p>
    </Section>

    <ServiceCta
      heading="Send us the group and we'll tell you if it's even worth quoting."
      body="A census and the current invoices are enough for a preliminary read. No provider is contacted until you say so."
      proof="second broker reference, ideally one where the recommendation was to stay put."
      secondary={{ label: "Partner overview", href: "/partners" }}
    />
  </>
);

export default BenefitsBrokers;
