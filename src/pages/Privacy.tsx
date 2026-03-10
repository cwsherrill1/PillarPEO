import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We may collect personal information you provide directly, such as your name, email address, company name, and phone number when you fill out a contact form or request a consultation. We also collect standard usage data through cookies and analytics tools.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to respond to your inquiries, provide PEO comparison and advisory services, improve our website and services, and communicate updates that may be relevant to your business needs.",
  },
  {
    title: "Data Sharing",
    content:
      "We do not sell your personal information. We may share data with trusted service providers who help us operate our website and deliver our services, subject to confidentiality agreements. We may also disclose information when required by law.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete the personal information we hold about you. You may also opt out of marketing communications at any time. To exercise these rights, please contact us using the information below.",
  },
  {
    title: "Contact Us",
    content:
      "If you have questions about this Privacy Policy or how we handle your data, please reach out to us at [email@pillarpeo.com] or through our Contact page.",
  },
];

const Privacy = () => {
    return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Pillar PEO Advisors' privacy policy — how we collect, use, and protect your information."
      />
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container text-center">
          <h1 className="font-heading text-3xl font-700 md:text-5xl">Privacy Policy</h1>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/60">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl space-y-12">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <h2 className="font-heading text-xl font-700 text-foreground">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.content}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Privacy;
