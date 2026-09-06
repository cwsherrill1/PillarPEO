import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import { ArticleAuthorBio } from "@/components/ArticleByline";
import { SITE_URL, breadcrumb, articleSchema } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "Is per-employee-per-month better than a percentage of payroll?",
    a: "For most professional-services firms, yes, because headcount grows slowly while payroll grows every year through raises and promotions. A percentage model charges you more for paying your people better, which is not a service you are receiving.",
  },
  {
    q: "What is the difference between gross payroll and taxable wages as a fee basis?",
    a: "Gross payroll is everything before deductions. Taxable wages exclude pre-tax items such as retirement deferrals and pre-tax insurance premiums. A fee charged on gross payroll therefore charges you on money your employees diverted before tax.",
  },
  {
    q: "What is an unbundled quote?",
    a: "A quote that separates the administrative fee from benefit premiums, workers' compensation, and payroll taxes, so each line can be compared and negotiated on its own. A single blended per-employee figure cannot be compared to anything.",
  },
  {
    q: "Should I ask for a sample invoice?",
    a: "Always, and before signing. The invoice shows line items the proposal does not: setup charges, off-cycle payroll charges, garnishment handling, year-end filing, termination processing, and anything billed per transaction rather than per employee.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "PEO admin fees", path: "/resources/peo-admin-fees" },
    ]),
    articleSchema({
      headline: "PEO Admin Fees: Per Employee vs Percentage of Payroll",
      description:
        "The two PEO fee models, the gross-versus-taxable basis question, and why an unbundled quote and sample invoice matter before signing.",
      path: "/resources/peo-admin-fees",
      datePublished: "2026-09-06",
      dateModified: "2026-09-06",
    }),
    faqSchema(faqs),
  ],
};

const PeoAdminFees = () => (
  <>
    <SEOHead
      title="PEO Admin Fees: Per Employee vs % of Payroll"
      fullTitle
      description="The two PEO fee models, the gross-versus-taxable basis question, and why you should demand an unbundled quote and a sample invoice before signing."
      canonical={`${SITE_URL}/resources/peo-admin-fees`}
      ogType="article"
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="PEO pricing · 3 of 6"
      title="Per-employee vs percentage of payroll"
      intro="The fee model matters more than the headline number."
    />

    <Section title="How is a PEO administrative fee charged?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Two ways: a flat fee per employee per month, or a percentage of payroll.
        They can look similar in year one and diverge sharply by year three,
        because a percentage rises every time you give a raise or hire someone
        while a per-employee fee only moves with headcount. Choose the model
        before you argue about the number.
      </p>
    </Section>

    <Section title="What each model actually does" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Per employee per month
          (PEPM).</strong> A fixed amount per active employee per month. It scales
          with the thing that actually drives the PEO's workload — the number of
          people it has to onboard, pay, enrol and support. It is predictable and
          you can budget it a year out.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Percentage of payroll.</strong> A
          percentage applied to your payroll each cycle. It scales with the thing
          that does not drive the PEO's workload at all — how much you pay your
          people. Processing a $250,000 partner's payroll is not more work than
          processing a $60,000 paralegal's.
        </Bullet>
      </ul>
      <p>
        For a professional-services firm this is not a rounding difference.
        Headcount at a stable law or CPA firm might not move for two years while
        total compensation rises every single year through raises, bonuses and
        promotions. On a percentage model, your administrative cost rises with
        every one of those events, for no additional service.
      </p>
      <p>
        There is one honest argument for the percentage model: it flexes downward
        if your payroll contracts. If your business is genuinely cyclical, that
        can be worth something. For most firms in the 10–150 range that we work
        with, it is not.
      </p>
    </Section>

    <Section title="The basis question nobody asks">
      <p>
        If the fee is a percentage, the next question is: a percentage of what?
        There is a real difference between gross payroll and taxable wages, and
        the proposal will rarely make it explicit.
      </p>
      <p>
        Gross payroll includes everything before deductions. Taxable wages exclude
        pre-tax items — retirement plan deferrals, pre-tax medical and dental
        premiums, HSA and FSA contributions. A fee charged on gross payroll is
        therefore charging you a percentage on money your employees have already
        diverted into their own benefits.
      </p>
      <p>
        The effect grows with how good your benefits are. A firm with strong
        retirement participation and a well-used pre-tax medical plan has a
        meaningful gap between gross and taxable, and the gross basis quietly
        taxes that generosity. Ask for the fee to be stated against a named
        basis, in the contract, not in a summary sheet.
      </p>
      <p>
        The same basis question applies to the unemployment line, for the same
        reason — see{" "}
        <Link to="/resources/peo-suta-rates" className="text-green-ink hover:underline">
          the SUTA line nobody checks
        </Link>
        .
      </p>
    </Section>

    <Section title="Ask for a fully unbundled quote" alt>
      <p>
        The single most useful thing you can do before signing is to refuse a
        blended number. In the proposals we review, a blended per-employee figure
        is the norm, and it makes comparison impossible: you cannot tell whether
        provider A is cheaper because its service costs less or because it has
        assumed a different unemployment rate, a leaner plan design, or a lower
        workers' compensation classification.
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Administrative fee</strong> — stated
          separately, with the model and the basis named.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Benefit premiums</strong> — by plan,
          with the employer and employee shares split out.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Workers' compensation</strong> — rate
          by class code, not a blended rate across your whole staff.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Payroll taxes</strong> — including
          the assumed unemployment rate and wage basis for every state you employ
          in.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Everything else</strong> — setup,
          implementation, off-cycle runs, garnishments, terminations, year-end
          filings, and any per-transaction charge.
        </Bullet>
      </ul>
    </Section>

    <Section title="And ask for a sample invoice">
      <p>
        A proposal is a marketing document. An invoice is the contract in
        practice. Ask for a redacted sample invoice for a company of roughly your
        size and state footprint, and read every line on it. The charges that
        surprise people after signing are almost always visible on an invoice and
        absent from a proposal.
      </p>
      <p>
        If a provider will not produce one, that is worth knowing before you
        migrate rather than after. And if the invoice contains line items nobody
        mentioned in the sales process, you have a specific, evidenced
        negotiation point rather than a general feeling that something is off.
      </p>
      <p>
        Once you have the unbundled quote and the sample invoice, the remaining
        risk is not in the pricing at all — it is in the term, the notice window
        and the exit. That is{" "}
        <Link to="/resources/peo-contract-terms" className="text-green-ink hover:underline">
          the next page in this cluster
        </Link>
        .
      </p>
      <LegalNote verified="2026-09-06" />
    </Section>

    <Section title="Questions about PEO administrative fees" alt>
      <FaqBlock faqs={faqs} />
    </Section>

    <ArticleAuthorBio />

    <ServiceCta
      heading="Send us the quote. We'll unbundle it."
      body="We read PEO proposals every week and know which lines are missing. The review is free, whether or not you place anything through us."
      proof="anonymised example of an unbundled quote changing the ranking of two providers."
      secondary={{ label: "The free renewal review", href: "/resources/peo-renewal-review" }}
    />
  </>
);

export default PeoAdminFees;
