import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import VerifyTodo from "@/components/content/VerifyTodo";
import { SITE_URL, breadcrumb } from "@/data/organization";

const rows = [
  {
    topic: "E-Verify",
    nc: "Required at 25+ employees (N.C. Gen. Stat. § 64-26)",
    sc: "Required for all employers, within 3 business days of hire",
  },
  {
    topic: "Workers' compensation",
    nc: "Required at 3+ employees",
    sc: "Required at 4+ employees",
  },
  {
    topic: "Advance notice of wage change",
    nc: "Verify",
    sc: "7 days' advance written notice required",
  },
  {
    topic: "Pregnancy accommodation",
    nc: "Verify",
    sc: "Required at 15+ employees (Pregnancy Accommodations Act)",
  },
  {
    topic: "New-hire reporting window",
    nc: "Verify",
    sc: "Verify",
  },
  {
    topic: "Final pay deadlines",
    nc: "Verify",
    sc: "Verify",
  },
];

const faqs: Faq[] = [
  {
    q: "If we're compliant in North Carolina, are we automatically compliant in South Carolina?",
    a: "No. The two states set different headcount thresholds for the same categories — South Carolina's E-Verify requirement applies to every employer, while North Carolina's kicks in at 25. Meeting one state's rule doesn't tell you anything about the other.",
  },
  {
    q: "Which state's workers' comp threshold applies if we have employees in both?",
    a: "Each state's threshold applies to the employees working there. You count North Carolina employees against North Carolina's 3-employee threshold and South Carolina employees against South Carolina's 4-employee threshold — not a combined count against either state's number, though this is worth confirming for how your specific policies are written.",
  },
  {
    q: "What should we check first if we're opening a location in the other state?",
    a: "Start with registration and E-Verify timing, since those attach fastest and are the most commonly missed. The multi-state employer checklist walks through the fuller sequence.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "NC vs. SC employment law", path: "/resources/nc-vs-sc-employment-law" },
    ]),
    faqSchema(faqs),
  ],
};

const NcVsScEmploymentLaw = () => (
  <>
    <SEOHead
      title="North Carolina vs. South Carolina Employment Law"
      description="A side-by-side table of employer thresholds in North Carolina and South Carolina: E-Verify, workers' comp, wage-change notice, and pregnancy accommodation."
      canonical={`${SITE_URL}/resources/nc-vs-sc-employment-law`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Resources · Multi-state"
      title="North Carolina vs. South Carolina employment law."
      intro="For firms with staff in both states, the same headcount can mean two different answers."
    />

    <Section title="How do North Carolina and South Carolina compare on employer thresholds?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        The two states differ on the figures we can verify: South Carolina requires
        E-Verify from every employer within 3 business days of hire, while North Carolina's
        E-Verify duty starts at 25 employees. Workers' comp attaches at 3 employees in
        North Carolina and 4 in South Carolina. Rows marked "Verify" are open questions we
        confirm during the audit rather than guess.
      </p>

      <div className="mt-8 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm [font-variant-numeric:tabular-nums]">
          <thead className="bg-muted/50 text-foreground">
            <tr>
              <th className="px-3 py-2 text-left font-heading">Topic</th>
              <th className="px-3 py-2 text-left font-heading">North Carolina</th>
              <th className="px-3 py-2 text-left font-heading">South Carolina</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((r) => (
              <tr key={r.topic}>
                <td className="px-3 py-2 font-medium text-foreground">{r.topic}</td>
                <td className="px-3 py-2">
                  {r.nc === "Verify" ? (
                    <Link
                      to="/resources/state-employer-guides/north-carolina"
                      className="text-green-ink hover:underline"
                    >
                      Verify →
                    </Link>
                  ) : (
                    r.nc
                  )}
                </td>
                <td className="px-3 py-2">
                  {r.sc === "Verify" ? (
                    <Link
                      to="/resources/state-employer-guides/south-carolina"
                      className="text-green-ink hover:underline"
                    >
                      Verify →
                    </Link>
                  ) : (
                    r.sc
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <VerifyTodo>
        Rows marked "Verify" (new-hire reporting windows, final pay deadlines, and any
        remaining state-specific thresholds) are not stated here because we have not been
        given current figures for one or both states. We confirm these against NCDOL and SC
        DEW during the audit before quoting a number or deadline.
      </VerifyTodo>
    </Section>

    <Section title="Why the difference matters" alt>
      <p>
        The most consequential gap is E-Verify timing. A firm that's compliant in North
        Carolina because it has fewer than 25 employees can still be out of compliance in
        South Carolina the moment it hires its first person there, because South Carolina's
        duty doesn't wait for a headcount threshold — it applies from the first hire, within
        3 business days. Firms that grow into South Carolina from a North Carolina base are
        the group most likely to miss this, because nothing changed on the North Carolina
        side to prompt a second look.
      </p>
      <p>
        Workers' compensation moves the other direction but by a smaller margin: North
        Carolina's 3-employee threshold is one lower than South Carolina's 4. A firm sitting
        at exactly 3 or 4 total employees split across both states needs to look at each
        state's headcount separately, not at a combined number.
      </p>
    </Section>

    <Section title="How the audit handles multi-state employers">
      <p>
        The{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>{" "}
        checks registrations, E-Verify enrollment, and coverage state by state, against the
        headcount actually working there — not against a single combined number. If you're
        opening a location in the other state, start with the{" "}
        <Link to="/resources/multi-state-employer-checklist" className="text-green-ink hover:underline">
          multi-state employer checklist
        </Link>
        , then read the full{" "}
        <Link to="/resources/state-employer-guides/north-carolina" className="text-green-ink hover:underline">
          North Carolina
        </Link>{" "}
        and{" "}
        <Link to="/resources/state-employer-guides/south-carolina" className="text-green-ink hover:underline">
          South Carolina
        </Link>{" "}
        guides for the headcount-by-headcount breakdown.
      </p>
      <p className="text-sm text-muted-foreground">
        This comparison is reviewed quarterly as thresholds and citations are re-checked.
      </p>
      <LegalNote />
    </Section>

    <Section title="Questions multi-state employers ask" alt>
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Staff in both states? Get one clear answer, not two guesses."
      body="The audit checks each state's thresholds against your actual headcount there."
      proof="PROOF SLOT — multi-state client reference describing a North Carolina/South Carolina finding, with headcount in each state."
      secondary={{ label: "See the multi-state checklist", href: "/resources/multi-state-employer-checklist" }}
    />
  </>
);

export default NcVsScEmploymentLaw;
