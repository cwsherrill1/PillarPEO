import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import VerifyTodo from "@/components/content/VerifyTodo";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const steps = [
  {
    name: "Register for state withholding tax",
    text: "Register your company with the new state's department of revenue for income tax withholding before the first paycheck for that employee is run. This is separate from your federal EIN and separate from any registration you already hold in your home state.",
  },
  {
    name: "Open a state unemployment insurance account",
    text: "Register with the new state's unemployment insurance agency. You'll be assigned a state unemployment tax (SUTA) rate, and you'll owe wage reports on that state's schedule going forward, not your home state's.",
  },
  {
    name: "Confirm workers' compensation coverage",
    text: "Check whether your existing workers' comp policy extends to the new state or whether it needs an endorsement. Most policies are written for specific states, and coverage does not follow an employee automatically.",
  },
  {
    name: "Post and distribute state-specific notices",
    text: "Every state has its own required workplace postings and, in many cases, new-hire notices that must be handed to the employee directly, not just posted on a wall a remote worker will never see.",
  },
  {
    name: "Add a state addendum to the handbook",
    text: "Your handbook was likely written for your home state. Add an addendum covering the new state's leave rules, final-pay timing, and any other rule that differs from what the rest of your handbook says.",
  },
  {
    name: "Update payroll setup",
    text: "Confirm your payroll provider or in-house system is set up to withhold and remit for the new state, applies the correct state minimum wage and overtime rules, and reports new hires to that state's new-hire registry.",
  },
];

const faqs: Faq[] = [
  {
    q: "Do I need to do all of this for one remote employee working a few weeks from another state?",
    a: "Often yes, and the trigger point varies by state and by which obligation you're asking about. Some registrations depend on wages paid, others on physical presence alone. Treat any employee working from a new state as a trigger to check, not something to wait out.",
  },
  {
    q: "What if the employee is a contractor, not an employee?",
    a: "Correct classification matters more here, not less. Misclassifying a worker to avoid multi-state registration is its own separate problem, and states scrutinize exactly this pattern.",
  },
  {
    q: "How long does state registration usually take?",
    a: "It varies by state and by agency, and we don't want to give you a number that's wrong for the state you're dealing with. Build in time before the first payroll run in that state rather than assuming same-day registration.",
  },
  {
    q: "Does this apply the first time we ever hire outside our home state, or every time after that?",
    a: "The first hire in a new state means new registrations from scratch. Later hires in a state you're already registered in are much lighter: mostly the notice, addendum, and payroll setup steps.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "Multi-state employer checklist", path: "/resources/multi-state-employer-checklist" },
    ]),
    {
      "@type": "HowTo",
      name: "What to do the day you hire someone in a new state",
      description:
        "The registrations, coverage checks and documents to handle the first time you hire an employee in a state you don't already operate in.",
      step: steps.map((s) => ({ "@type": "HowToStep", name: s.name, text: s.text })),
    },
    faqSchema(faqs),
  ],
};

const MultiStateEmployerChecklist = () => (
  <>
    <SEOHead
      title="Multi-State Employer Checklist"
      fullTitle
      description="The day you hire in a new state: tax registration, unemployment insurance, workers' comp, notices, handbook addendum and payroll setup."
      canonical={`${SITE_URL}/resources/multi-state-employer-checklist`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Resources · Multi-state employers"
      title="What happens the day you hire someone in a new state."
      intro="A general checklist for the six things that change the moment your workforce crosses a state line, wherever that line is."
    />

    <Section title="What do I need to do when I hire in a new state?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Hiring your first employee in a new state triggers six things: tax
        registration, an unemployment insurance account, a workers' comp check,
        state-specific notices, a handbook addendum, and a payroll setup change.
        None of these happen automatically, and most of them need to be in place
        before or very close to the first paycheck.
      </p>
    </Section>

    <Section title="The six steps" alt>
      <ul className="space-y-3">
        {steps.map((s, i) => (
          <Bullet key={i}>
            <strong className="text-foreground">{s.name}.</strong> {s.text}
          </Bullet>
        ))}
      </ul>
    </Section>

    <Section title="Where the exact rules differ by state">
      <p>
        Registration thresholds, deadlines and penalty amounts differ state to
        state, and we're not going to publish a number here that's wrong for
        the state you're dealing with. If you're hiring in North Carolina or
        South Carolina specifically, see the{" "}
        <Link to="/resources/state-employer-guides/north-carolina" className="text-green-ink hover:underline">
          North Carolina employer guide
        </Link>{" "}
        or the{" "}
        <Link to="/resources/state-employer-guides/south-carolina" className="text-green-ink hover:underline">
          South Carolina employer guide
        </Link>
        , or the side-by-side{" "}
        <Link to="/resources/nc-vs-sc-employment-law" className="text-green-ink hover:underline">
          NC vs. SC employment law comparison
        </Link>
        .
      </p>
      <VerifyTodo>
        State-specific registration deadlines, unemployment insurance new-employer
        rates, and workers' comp thresholds all vary by state and change over
        time. Confirm the current figures for the specific state at the point of
        hire. We verify this during the audit.
      </VerifyTodo>
      <LegalNote />
    </Section>

    <Section title="How this fits into a broader audit" alt>
      <p>
        Multi-state registration gaps are one of the more common findings in
        the{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>
        , especially in payroll and tax registrations. If you already have
        people working in states you're not sure you're registered in, that's
        worth checking before it's a bigger problem than a missed deadline.
        See the full{" "}
        <Link to="/resources/hr-audit-checklist" className="text-green-ink hover:underline">
          HR audit checklist
        </Link>{" "}
        for the other eight areas.
      </p>
    </Section>

    <Section title="Questions employers ask about hiring across state lines">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Hiring in a new state? Get it registered right the first time."
      body="An HR audit checks your registrations, coverage and paperwork against every state you actually employ people in."
      proof="client quote describing a multi-state registration gap the audit caught, with number of states involved."
      secondary={{ label: "See the HR audit", href: "/services/hr-audit" }}
    />
  </>
);

export default MultiStateEmployerChecklist;
