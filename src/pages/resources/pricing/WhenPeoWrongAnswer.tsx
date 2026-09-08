import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import ProofSlot from "@/components/ProofSlot";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import { ArticleAuthorBio } from "@/components/ArticleByline";
import { SITE_URL, breadcrumb, articleSchema } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "When is a PEO the wrong answer?",
    a: "When your firm is low-risk and low-turnover, when you already have good benefits through a broker, when you have real HR capability in-house, or when the main problem is process rather than administration. In those cases a PEO adds cost without removing work.",
  },
  {
    q: "Does a PEO always save money on benefits?",
    a: "No. A PEO's leverage is real for some employers and marginal for others. A professional-services firm with a healthy, stable group may already be rated favourably on its own, in which case pooled pricing can be neutral or worse.",
  },
  {
    q: "What is the alternative if a PEO is wrong for us?",
    a: "Usually a combination: a payroll provider, a benefits broker, and either fractional HR support or a fixed-price project to fix the specific gaps. That stack costs less than a PEO for many firms and keeps your relationships direct.",
  },
  {
    q: "Would Pillar tell us not to use a PEO?",
    a: "Yes, and we do. PEO brokerage is free to you and paid by the provider, so a placement is the only version of this work we are not paid for by you. Telling you it is the wrong fit is the cheapest advice we give and the most common.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "When a PEO is the wrong answer", path: "/resources/when-a-peo-is-the-wrong-answer" },
    ]),
    articleSchema({
      headline: "When a PEO Is the Wrong Answer",
      description:
        "Four situations where a PEO adds cost without removing work, an illustrative worked example, and what to do instead.",
      path: "/resources/when-a-peo-is-the-wrong-answer",
      datePublished: "2026-09-06",
      dateModified: "2026-09-06",
    }),
    faqSchema(faqs),
  ],
};

const WhenPeoWrongAnswer = () => (
  <>
    <SEOHead
      title="When a PEO Is the Wrong Answer"
      fullTitle
      description="Four situations where a PEO adds cost without removing work, an illustrative worked example of total spend rising, and what to do instead."
      canonical={`${SITE_URL}/resources/when-a-peo-is-the-wrong-answer`}
      ogType="article"
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="PEO pricing · 5 of 6"
      title="When a PEO is the wrong answer"
      intro="We broker PEOs. We also talk firms out of them, most weeks."
    />

    <Section title="When is a PEO the wrong answer?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        When your firm is low-risk and low-turnover, when your benefits are
        already well placed through a broker, when you have genuine HR capability
        in-house, or when your real problem is process rather than administration.
        In those four cases a PEO usually adds cost and a layer of distance
        without removing meaningful work.
      </p>
    </Section>

    <Section title="Case 1: you are low-risk and low-turnover" alt>
      <p>
        Much of a PEO's economic case rests on pooling: pooled workers'
        compensation, pooled unemployment, pooled medical. Pooling helps employers
        whose own experience is worse than the pool's and hurts employers whose
        experience is better.
      </p>
      <p>
        A twenty-person CPA firm with clerical class codes, no claims history and
        almost no involuntary turnover is at the good end of every one of those
        distributions. Joining a pool built to absorb high-turnover, higher-hazard
        employers means paying an average you are currently beating. The
        unemployment side of that is covered in detail in{" "}
        <Link to="/resources/peo-suta-rates" className="text-green-ink hover:underline">
          the SUTA line nobody checks
        </Link>
        .
      </p>
    </Section>

    <Section title="Case 2: your benefits are already good">
      <p>
        If you have a competent benefits broker and a plan your people are happy
        with, a PEO is being asked to beat an already-good outcome. Sometimes it
        does. Often it offers a comparable plan at a comparable cost, and the
        change delivers disruption rather than savings: new carriers, new
        networks, and employees checking whether their doctor is still covered.
      </p>
      <p>
        Compare like for like before you accept a saving claim: same plan tier,
        same network breadth, same deductible and out-of-pocket maximum, same
        employer contribution strategy. Employer premium averages published by{" "}
        <a
          href="https://www.kff.org/health-costs/report/employer-health-benefits-survey/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-ink hover:underline"
        >
          KFF's Employer Health Benefits Survey
        </a>{" "}
        are a reasonable external reference point when you want to sanity-check
        where your current plan sits.
      </p>
    </Section>

    <Section title="Case 3: you have HR capability in-house" alt>
      <p>
        A PEO is most valuable to a firm with nobody doing HR. If you have a
        capable practice administrator or an HR generalist who knows your people
        and your states, a PEO does not remove that role. It changes who they
        call. The work of judgement stays with you; the work of processing moves.
      </p>
      <p>
        That trade can still be worth it. But be honest about what you are buying,
        because the sales conversation will describe it as offloading HR, and what
        you are offloading is administration.
      </p>
    </Section>

    <Section title="Case 4: your problem is process, not administration">
      <p>
        This is the most common one we see. The firm's pain is inconsistent
        manager behaviour, an out-of-date handbook, classification decisions
        nobody has revisited in five years, or hiring that takes four months.
        None of those are fixed by moving payroll.
      </p>
      <p>
        A PEO will process your payroll flawlessly while your exempt
        classifications remain wrong. Those are fixed by looking at them, an{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>{" "}
        and then targeted{" "}
        <Link to="/services/hr-projects" className="text-green-ink hover:underline">
          projects
        </Link>{" "}
        , not by changing who runs the payroll file.
      </p>
    </Section>

    <Section title="An illustrative example (not a client, not real data)" alt>
      <p>
        The figures below are round numbers chosen to show the mechanism. They are
        an illustration, not a client, not a case study, and not a quote. Your own
        numbers will differ and should be run against your actual filings.
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">The firm.</strong> 30 employees,
          clerical work, two states, low turnover, existing benefits through a
          broker.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">The saving offered.</strong> Workers'
          compensation comes in lower under the PEO's programme, and the proposal
          leads with that saving.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">The offset nobody totalled.</strong>{" "}
          The unemployment assumption is a pooled rate above the firm's own earned
          rate, applied across both states. The administrative fee is charged as a
          percentage of gross payroll rather than per employee. Medical comes in
          roughly level, on a slightly narrower network.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">The result.</strong> Once every line
          is added rather than only the favourable one, total annual spend goes up,
          not down, and the increase grows in year two as salaries rise against a
          percentage-based fee.
        </Bullet>
      </ul>
      <p>
        The lesson is not that PEOs cost more. It is that a saving on one line is
        not a saving, and any comparison that does not total every line is not a
        comparison. See{" "}
        <Link to="/resources/peo-admin-fees" className="text-green-ink hover:underline">
          per-employee vs percentage of payroll
        </Link>{" "}
        for how to force an unbundled quote that makes the total visible.
      </p>
      <div className="mt-8">
        <ProofSlot needs="anonymised, permissioned real comparison where total spend rose under a PEO, with the line-by-line totals and the client's written approval to publish." />
      </div>
    </Section>

    <Section title="What to do instead">
      <p>
        For most firms in these four cases, the alternative is a stack rather than
        a single vendor: a payroll provider, a benefits broker you trust, and HR
        capability sized to what you need: a one-off audit, a fixed-price
        project, or{" "}
        <Link to="/services/fractional-hr" className="text-green-ink hover:underline">
          fractional HR
        </Link>{" "}
        a few hours a month.
      </p>
      <p>
        And if you are already in a PEO and unsure whether it is still the right
        answer, that question has a deadline attached to it. Start about 120 days
        before your renewal date, as set out in{" "}
        <Link to="/resources/peo-renewal-review" className="text-green-ink hover:underline">
          the free renewal review
        </Link>{" "}
        and{" "}
        <Link to="/resources/peo-contract-terms" className="text-green-ink hover:underline">
          the contract clauses that decide what leaving costs
        </Link>
        .
      </p>
      <LegalNote verified="2026-09-06" />
    </Section>

    <Section title="Questions about whether a PEO fits" alt>
      <FaqBlock faqs={faqs} />
    </Section>

    <ArticleAuthorBio />

    <ServiceCta
      heading="We'll tell you if the answer is no."
      body="PEO brokerage is free to you and paid by the provider. Recommending against one costs us the commission, which is exactly why the advice is worth having."
      proof="permissioned quote from a firm Pillar advised not to use a PEO."
      secondary={{ label: "The free renewal review", href: "/resources/peo-renewal-review" }}
    />
  </>
);

export default WhenPeoWrongAnswer;
