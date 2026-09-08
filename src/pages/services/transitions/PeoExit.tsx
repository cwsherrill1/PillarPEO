import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, faqSchema, type Faq } from "@/components/content/Prose";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "How much notice do we need to give before leaving a PEO?",
    a: "It depends on your agreement. Most PEO contracts require 30 to 90 days' written notice before your renewal or anniversary date, and missing that window can auto-renew you for another full term. Check the notice clause first, before you plan anything else.",
  },
  {
    q: "Can we leave a PEO mid-year?",
    a: "Yes, but it costs more and carries more risk than a January 1 exit. You will run two sets of year-to-date wage and tax records for the same employees in the same calendar year, which usually means duplicate W-2s at year end unless the transition is reconciled carefully.",
  },
  {
    q: "What has to be in place before we can leave?",
    a: "Your own federal and state tax IDs, state unemployment and withholding accounts open in every state you employ people, a workers' compensation policy bound and effective, and either your own benefit plans or a bridge that keeps coverage continuous.",
  },
  {
    q: "Do we keep our current benefit plans?",
    a: "No. PEO benefits run on the PEO's master policy, so you cannot take that plan with you. You will need to place new plans in your own name, ideally with the same or comparable carriers so enrolment and deductible history carry over as cleanly as possible.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Transitions", path: "/services/transitions" },
      { name: "PEO exit", path: "/services/transitions/peo-exit" },
    ]),
    {
      "@type": "Service",
      name: "PEO exit",
      serviceType: "PEO exit and standalone HR setup",
      provider: ORG_REF,
      areaServed: "US",
      url: `${SITE_URL}/services/transitions/peo-exit`,
      description:
        "Leaving a PEO entirely and standing up your own payroll, benefits and workers' compensation in your own name, on a fixed price and a written sequence.",
    },
    faqSchema(faqs),
  ],
};

const PeoExit = () => (
  <>
    <SEOHead
      title="PEO Exit: Leaving a PEO for Your Own Payroll & HR"
      fullTitle
      description="How to leave a PEO cleanly: notice window, what to have ready first, why January 1 is cleanest, and the duplicate-W-2 risk of moving mid-year."
      canonical={`${SITE_URL}/services/transitions/peo-exit`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Transitions"
      title="Leaving a PEO for good."
      intro="Standing up your own payroll, benefits and HR takes longer than the notice window gives you, so the planning starts before the letter goes out."
    />

    <Section title="What a PEO exit involves">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        A PEO exit means moving payroll, tax filings, workers' compensation and
        benefits out of the PEO's master accounts and into your own name, in
        every state you employ people. It takes eight to twelve weeks of
        registration and setup work before the notice deadline, and it lands
        cleanest on a plan-year or calendar-year boundary rather than
        mid-year.
      </p>
    </Section>

    <Section title="The sequence" alt>
      <p>
        Read the contract first. The notice window and renewal date set every
        other deadline, and they are covered in detail in{" "}
        <Link to="/resources/peo-contract-terms" className="text-green-ink hover:underline">
          PEO contract terms
        </Link>
        . From there the work runs roughly in this order:
      </p>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Confirm the notice window and target date.</strong>{" "}
          Work backwards from a plan-year or January 1 boundary so wage bases
          and benefit years reset cleanly instead of splitting mid-year.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Apply for your own tax IDs and state accounts.</strong>{" "}
          A federal EIN if you don't already use one for this purpose, plus
          state withholding and unemployment accounts in every state you have
          employees. Some states take two to four weeks to issue an account
          number.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Bind your own workers' compensation policy.</strong>{" "}
          It must be in force before the last day under the PEO's policy, with
          no gap in coverage.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Place your own benefit plans.</strong>{" "}
          Chosen to match or beat current coverage where possible, with
          enrolment completed before the PEO's plans terminate.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Select and configure a standalone payroll system.</strong>{" "}
          Loaded with employee records, pay history and year-to-date figures
          pulled from the PEO before access is cut off.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Give written notice.</strong>{" "}
          Inside the contractual window, once every piece above is either
          ready or has a confirmed effective date.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Run a parallel payroll and go live.</strong>{" "}
          Reconciled to the cent before the PEO stops processing.
        </Bullet>
      </ul>
    </Section>

    <Section title="Why January 1 is cleaner than a mid-year exit">
      <p>
        Wage bases for Social Security and state unemployment reset on
        January 1, and most benefit plan years do too. Leave on that date and
        your new payroll system starts from zero, matching what the IRS and
        state agencies expect.
      </p>
      <p>
        Leave mid-year and the same employee has two employers of record in
        the same calendar year for the same job: the PEO up to the exit date,
        and your own entity after it. That usually means two W-2s per
        employee unless the wage and tax history is transferred and
        reconciled precisely, and unemployment wage bases that were building
        toward the annual limit under the PEO's tax ID reset to zero under
        yours. A quarter-boundary exit is the next-best option if January 1
        isn't realistic, because unemployment filings and payroll tax deposits
        already follow quarters.
      </p>
    </Section>

    <Section title="State registrations back in your own name" alt>
      <p>
        Under a PEO, the PEO is the employer of record for tax and
        unemployment purposes in most states. Leaving means reopening that
        relationship state by state: a withholding account, an unemployment
        account with its own experience rating starting fresh, and in some
        states a separate registration to do business at all. Some states let
        you request your prior unemployment experience rating be reinstated
        rather than starting at the new-employer rate; that has to be filed
        for, it doesn't happen automatically.
      </p>
    </Section>

    <Section title="What you have to do">
      <ul className="space-y-3">
        <Bullet>
          Confirm your notice deadline and put the resignation letter on a
          calendar the moment planning starts, not the week you plan to send
          it.
        </Bullet>
        <Bullet>
          Sign the applications for your new tax accounts, workers'
          compensation policy and benefit plans. These need an officer's
          signature and are the most common source of delay.
        </Bullet>
        <Bullet>
          Nominate one internal owner who can answer payroll and census
          questions the same day, usually whoever runs the practice today.
        </Bullet>
        <Bullet>
          Hold a window of your accounting team's time around go-live for the
          parallel payroll reconciliation.
        </Bullet>
        <Bullet>
          Tell your employees what is changing and when, especially anything
          affecting their pay stub, benefits card or 401(k) login.
        </Bullet>
      </ul>
    </Section>

    <Section title="Before you decide to leave" alt>
      <p>
        Not every renewal problem is a reason to leave the PEO model. If the
        trigger is a bad renewal number rather than a settled decision to run
        HR in-house, start with the{" "}
        <Link to="/resources/peo-renewal-review" className="text-green-ink hover:underline">
          free PEO renewal review
        </Link>
        , which tells you whether the number can be negotiated before you
        commit to an exit.
      </p>
    </Section>

    <Section title="Questions about leaving a PEO">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Planning to leave your PEO?"
      body="Send us your agreement and the date you want to land on. We'll confirm your notice deadline and what has to happen before it."
      proof="client quote on a completed PEO exit, with headcount, states and the go-live date."
      secondary={{ label: "See all transitions", href: "/services/transitions" }}
    />
  </>
);

export default PeoExit;
