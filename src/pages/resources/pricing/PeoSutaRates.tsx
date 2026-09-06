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
    q: "Is a PEO's SUTA rate negotiable?",
    a: "Frequently, yes. A pooled rate is an assumption the provider has made about your turnover, not a government-set figure applied to you. If your own experience rating is better than the pool, that is an argument you can make before you sign.",
  },
  {
    q: "Should SUTA be charged on gross payroll?",
    a: "No. State unemployment tax applies only to wages up to that state's annual taxable wage base per employee. A quote that applies an unemployment rate to gross payroll overstates the cost, often substantially for higher-paid professional staff.",
  },
  {
    q: "What happens to my experience rating if I join a PEO?",
    a: "It depends on the state and on the reporting model the PEO uses. In some states the account stays with you, in others the PEO reports under its own account. Ask explicitly, in writing, what happens to your rating both on entry and on exit.",
  },
  {
    q: "Why does this matter more for a professional-services firm?",
    a: "Unemployment experience rating rewards stable employment. A law, CPA or engineering firm with low turnover typically earns a good rate on its own. Being placed into a pool built around high-turnover employers means paying for someone else's churn.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "PEO SUTA rates", path: "/resources/peo-suta-rates" },
    ]),
    articleSchema({
      headline: "PEO SUTA Rates: The Line Nobody Checks",
      description:
        "PEOs commonly quote a pooled, top-of-band state unemployment rate. How to check it against your own rate and taxable wage base.",
      path: "/resources/peo-suta-rates",
      datePublished: "2026-09-06",
      dateModified: "2026-09-06",
    }),
    faqSchema(faqs),
  ],
};

const PeoSutaRates = () => (
  <>
    <SEOHead
      title="PEO SUTA Rates: The Line Nobody Checks"
      fullTitle
      description="PEOs often quote a pooled, top-of-band unemployment rate on the wrong wage basis. How to check the number against your own rate and taxable wages."
      canonical={`${SITE_URL}/resources/peo-suta-rates`}
      ogType="article"
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="PEO pricing · 2 of 6"
      title="The SUTA line nobody checks"
      intro="An assumption about your turnover, priced as if it were a fact."
    />

    <Section title="How do PEOs quote state unemployment tax?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        In the proposals we review, PEOs commonly quote a pooled state
        unemployment rate at or near the top of the state's band, because the
        pool has to absorb high-turnover employers. For a stable professional
        firm that has earned a good rate of its own, that assumption is simply
        wrong, and it is negotiable before you sign.
      </p>
    </Section>

    <Section title="Why the pooled rate is usually wrong for your firm" alt>
      <p>
        State unemployment tax is experience rated. Employers who lay people off
        pay more; employers whose staff stay pay less. That is the whole design
        of the system, and it is administered state by state: in the Carolinas,
        by the{" "}
        <a
          href="https://des.nc.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-ink hover:underline"
        >
          NC Division of Employment Security
        </a>{" "}
        and{" "}
        <a
          href="https://dew.sc.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-ink hover:underline"
        >
          SC Department of Employment and Workforce
        </a>
        .
      </p>
      <p>
        A pooled rate throws that away. It prices you as an average of everyone
        in the pool, which for most PEO books includes staffing, hospitality,
        construction and other genuinely high-turnover work. A twenty-person CPA
        firm that has not had an involuntary separation in three years is
        subsidising that churn, quietly, on a line most buyers never open.
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">It is an assumption, not a
          statute.</strong> Nothing requires the provider to quote you the top of
          the band. It is a pricing decision, and pricing decisions can be
          argued.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">It rarely appears in the
          summary.</strong> The proposal headline is the administrative fee. The
          unemployment assumption sits in the tax schedule behind it, if it is
          shown at all.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">It compounds across states.</strong>{" "}
          If your people work in several states, you have several rates and
          several wage bases, and a single pooled number papers over all of them.
        </Bullet>
      </ul>
    </Section>

    <Section title="The basis error: gross payroll vs the taxable wage base">
      <p>
        The second problem is arithmetic. State unemployment tax applies only to
        wages up to each state's annual taxable wage base, per employee, per
        year. Once an employee's year-to-date wages pass that base, no further
        unemployment tax is due on that employee in that state for that year.
      </p>
      <p>
        For a professional-services firm this matters enormously, because most of
        your staff cross the wage base early in the year. A quote that applies an
        unemployment rate to gross payroll rather than to taxable wages can
        overstate the cost by a wide margin, and it will do so for exactly the
        firms whose salaries are highest.
      </p>
      <p>
        Each state publishes its own wage base and updates it, so check the
        current figure with the state agency rather than trusting a number in a
        sales deck. We deliberately do not publish state wage-base figures here
        that we have not verified against the agency for the current year.
      </p>
    </Section>

    <Section title="How to check the number yourself" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Step 1: find your own rate.</strong>{" "}
          Your annual rate notice from each state agency gives your experience
          rate for the year. Have one for every state your people work in.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Step 2: find your taxable
          wages.</strong> Not gross payroll. Your quarterly unemployment filings
          show taxable wages per state, already capped at the wage base.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Step 3: get the PEO's rate in
          writing, per state.</strong> Ask for the assumed rate and the basis it
          will be applied to. "Pooled" is not an answer; a number and a basis is.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Step 4: run the same maths
          twice.</strong> Your rate against your taxable wages, then their rate
          against the same taxable wages. The difference is a real annual cost
          that belongs in the comparison alongside the administrative fee.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Step 5: put the difference back on
          the table.</strong> A firm with a demonstrably better rate than the pool
          has a concrete, evidenced argument for a better assumption or an offset
          elsewhere in the quote.
        </Bullet>
      </ul>
    </Section>

    <Section title="What happens to your experience rating">
      <p>
        This is the question almost nobody asks, and it has consequences on the
        way out as well as the way in. Depending on the state and on how the PEO
        reports wages, a transition can leave your own unemployment account
        dormant, transfer your experience, or start you fresh, and when you
        later leave the PEO, you may return to your old rating, inherit a new
        one, or be treated as a new employer.
      </p>
      <p>
        Being treated as a new employer is not a neutral outcome. New-employer
        rates are set by the state and are usually worse than a good earned rate.
        A firm that spent a decade earning a low rate can lose that work in a
        transition it did not think to ask about.
      </p>
      <p>
        Ask both questions explicitly, in writing, before signing: what happens to
        my experience rating in each state when I join, and what happens to it
        when I leave. If you are already planning an exit, the same question
        belongs in your{" "}
        <Link to="/services/transitions" className="text-green-ink hover:underline">
          transition scope
        </Link>
        .
      </p>
      <LegalNote verified="2026-09-06" />
    </Section>

    <Section title="Where this fits with the rest of the quote" alt>
      <p>
        The unemployment line interacts with everything else. A quote can show a
        low administrative fee and still cost more because of the pooled rate;
        another can show a higher fee and be cheaper overall. That is why we
        insist on comparing fully unbundled quotes: see{" "}
        <Link to="/resources/peo-admin-fees" className="text-green-ink hover:underline">
          per-employee vs percentage of payroll
        </Link>{" "}
        and why a workers' compensation saving can be entirely offset by this
        line, as the worked illustration in{" "}
        <Link to="/resources/when-a-peo-is-the-wrong-answer" className="text-green-ink hover:underline">
          when a PEO is the wrong answer
        </Link>{" "}
        shows.
      </p>
    </Section>

    <Section title="Questions about PEO SUTA rates">
      <FaqBlock faqs={faqs} />
    </Section>

    <ArticleAuthorBio />

    <ServiceCta
      heading="We'll check the SUTA line for you, free."
      body="Send your rate notices and quarterly filings with your PEO quote and we will run both sets of maths side by side."
      proof="anonymised example of a pooled SUTA assumption corrected before signature, with the annual difference."
      secondary={{ label: "The free renewal review", href: "/resources/peo-renewal-review" }}
    />
  </>
);

export default PeoSutaRates;
