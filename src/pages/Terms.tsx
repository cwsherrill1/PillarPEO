import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using the Pillar PEO Advisors website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.",
  },
  {
    title: "Services",
    content:
      "Pillar PEO Advisors provides PEO comparison, advisory, and consulting services. The information on this website is for general informational purposes and does not constitute professional legal, financial, or HR advice. We recommend consulting qualified professionals for specific guidance.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Pillar PEO Advisors shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or services. All information is provided 'as is' without warranties of any kind.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through appropriate legal channels.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about these Terms of Service, please contact us at info@pillarpeo.com or visit our Contact page.",
  },
];

const Terms = () => {
    return (
    <>
      <SEOHead
        title="Terms of Service"
        description="Terms of Service for Pillar PEO Advisors website and advisory services."
      />
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container text-center">
          <h1 className="font-heading text-3xl font-700 md:text-5xl">Terms of Service</h1>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
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

export default Terms;
