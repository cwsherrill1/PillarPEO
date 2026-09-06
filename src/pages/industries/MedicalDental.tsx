import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import { Section, Bullet, FaqBlock, LegalNote, faqSchema, type Faq } from "@/components/content/Prose";
import ProofSlot from "@/components/ProofSlot";
import { ORG_REF, SITE_URL, breadcrumb } from "@/data/organization";

const faqs: Faq[] = [
  {
    q: "Which employee files have to be kept separately?",
    a: "As a working rule: personnel records in one file, anything medical — including health information, accommodation documentation and related records — in a separate confidential file, and I-9s in their own file apart from both. Credentialing records are a fourth category, kept for a different purpose and often needed by people who should not see the personnel file.",
  },
  {
    q: "Why keep I-9s out of the personnel file?",
    a: "Because I-9s can be inspected, and an inspection should not put a reviewer inside your personnel records. Keeping them together also makes routine purging harder, since I-9 retention runs on its own clock.",
  },
  {
    q: "Does the bloodborne pathogens standard apply to a small dental practice?",
    a: "It applies based on occupational exposure, not practice size. Where staff can reasonably be expected to have contact with blood or other potentially infectious material, the standard's requirements — including a written exposure control plan reviewed and updated annually, training, and offering hepatitis B vaccination to exposed staff — are in scope.",
  },
  {
    q: "Do we owe extra pay for on-call time?",
    a: "It depends on how restricted the person is. Staff free to use the time for their own purposes while carrying a phone are treated differently from staff required to remain on premises or to respond within a window so short it controls their time. Practices usually have a habit here rather than a written rule.",
  },
  {
    q: "Are shift differentials included in overtime?",
    a: "Generally yes. A shift differential is normally part of the regular rate, which means overtime must be calculated on the higher rate rather than base pay. This is one of the most common quiet payroll errors in practices that run evening or weekend hours.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: "Medical and dental", path: "/industries/medical-dental" },
    ]),
    {
      "@type": "Service",
      name: "HR advisory for medical and dental practices",
      serviceType: "Human resources advisory for healthcare practices",
      provider: ORG_REF,
      areaServed: "US",
      audience: { "@type": "Audience", audienceType: "Medical and dental practices" },
      url: `${SITE_URL}/industries/medical-dental`,
      description:
        "HR audits and fixed-price HR work for medical and dental practices: OSHA bloodborne pathogen and hazard requirements, file separation, credentialing records, on-call time and shift differentials.",
    },
    faqSchema(faqs),
  ],
};

const MedicalDental = () => (
  <>
    <SEOHead
      title="HR for Medical and Dental Practices"
      description="OSHA bloodborne pathogen rules, separating medical files from personnel files and I-9s, credentialing records, on-call and shift pay."
      canonical={`${SITE_URL}/industries/medical-dental`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Industries · Medical & dental"
      title="HR for medical and dental practices."
      intro="You already run a compliance programme for patients. The employment side is usually a decade behind it."
    />

    <Section title="What HR problems do medical and dental practices actually have?">
      <UpdatedLine />
      <p className="text-lg leading-8 text-foreground/85">
        Practices have a records problem and a pay-calculation problem. Medical
        information, credentialing records, I-9s and personnel files end up in one drawer
        or one folder tree; the written OSHA exposure control plan has not been reviewed in
        years; and on-call time and shift differentials are handled by habit rather than
        by a rule that survives inspection.
      </p>
    </Section>

    <Section title="The findings we see most" alt>
      <ul className="space-y-3">
        <Bullet>
          <strong className="text-foreground">Four kinds of file, one folder.</strong>{" "}
          Personnel records, medical and accommodation records, I-9s and credentialing
          files each exist for a different purpose and each has a different audience.
          Practices commonly keep all four together because one person maintains all four.
          The fix is structural, not clerical: different storage, different access, and a
          written rule about who may open what.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            A written exposure control plan that has gone stale.
          </strong>{" "}
          Where staff have occupational exposure to blood or other potentially infectious
          material, the plan is required to be written, reviewed and updated annually, with
          training and hepatitis B vaccination offered to exposed employees. The plan often
          exists — dated several years ago, referencing devices the practice no longer
          uses and staff who have left.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Shift differentials left out of the overtime rate.
          </strong>{" "}
          Practices running evening, weekend or emergency-cover hours frequently pay a
          differential and then calculate overtime on base pay. The differential is
          normally part of the regular rate. The per-hour error is small, which is exactly
          why it runs for years without anyone querying it.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">On-call arrangements with no rule.</strong>{" "}
          Whether on-call time is compensable turns on how restricted the person is. Most
          practices have a custom rather than a policy, and the custom differs between the
          clinical and administrative sides of the same practice.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">
            Credentialing treated as an HR record.
          </strong>{" "}
          Licence expiry tracking, privileging and payer enrolment records tend to be
          maintained by whoever handles credentialing, with no link to onboarding or
          offboarding. When someone leaves, access and enrolment are unwound on a different
          schedule from their employment, if at all.
        </Bullet>
      </ul>
    </Section>

    <Section title="How the audit applies to a practice like yours">
      <p>
        The{" "}
        <Link to="/services/hr-audit" className="text-green-ink hover:underline">
          HR audit
        </Link>{" "}
        runs 41 checks across nine areas. In a practice, area 7 (records, retention and
        privacy) and area 8 (safety and workers' comp) usually carry the most Fail scores,
        with area 2 (classification and wage-hour) close behind because of differentials
        and on-call.
      </p>
      <p>
        We review the actual filing structure rather than the intended one, read the
        exposure control plan and its review date, check the timekeeping sample against how
        evenings and weekends are paid, and walk the offboarding path from resignation
        letter to system access to credentialing record.
      </p>
      <p>
        Common follow-on work is a{" "}
        <Link to="/services/hr-projects" className="text-green-ink hover:underline">
          records and file separation project
        </Link>{" "}
        or a handbook rebuild that states the on-call and differential rules plainly.
        Multi-site practices adding locations across a state line usually need{" "}
        <Link to="/services/fractional-hr" className="text-green-ink hover:underline">
          ongoing support
        </Link>{" "}
        rather than a one-off fix.
      </p>
      <LegalNote />
    </Section>

    <Section title="Proof" alt>
      <ProofSlot needs="practice owner or practice administrator quote, medical or dental practice, with a number (files separated, overtime rate corrected, or staff trained)." />
    </Section>

    <Section title="Questions practices ask">
      <FaqBlock faqs={faqs} />
    </Section>

    <ServiceCta
      heading="Get the files, the plan and the pay rate right."
      body="A fixed-price audit that treats your employment records with the same seriousness as your patient records."
      proof="dental or medical practice reference, with headcount and number of locations."
      secondary={{ label: "See all industries", href: "/industries" }}
    />
  </>
);

export default MedicalDental;
