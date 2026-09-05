import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Reveal } from "@/components/Reveal";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCta from "@/components/services/ServiceCta";
import UpdatedLine from "@/components/services/UpdatedLine";
import calebPhoto from "@/assets/team/caleb-sherrill.png";
import { ORG_REF, SITE_URL, breadcrumb, caleb } from "@/data/organization";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Caleb Sherrill", path: "/about/caleb-sherrill" },
    ]),
    {
      ...caleb,
      description:
        "Founder of Pillar. After living through payroll mistakes, fines and administrative drag in a previous business, Caleb built Pillar to help employers make better decisions around HR, payroll and compliance.",
      url: `${SITE_URL}/about/caleb-sherrill`,
      image: `${SITE_URL}/hero-team.jpg`,
      worksFor: ORG_REF,
    },
  ],
};

const CalebSherrill = () => (
  <>
    <SEOHead
      title="Caleb Sherrill — Founder"
      description="Caleb Sherrill founded Pillar after payroll mistakes and fines in a previous business showed him how much avoidable risk employers carry alone."
      canonical={`${SITE_URL}/about/caleb-sherrill`}
      jsonLd={jsonLd}
    />

    <ServiceHero
      eyebrow="Founder"
      title="Caleb Sherrill"
      intro="Founder of Pillar. He built it from experience, not theory."
    />

    <section className="bg-background">
      <div className="container max-w-3xl py-20 md:py-28">
        <Reveal>
          <UpdatedLine />
          <div className="mt-6 flex items-center gap-5">
            <Avatar className="h-24 w-24">
              <AvatarImage src={calebPhoto} alt="Caleb Sherrill" className="object-cover" />
              <AvatarFallback className="bg-accent/10 font-heading text-2xl font-700 text-green-ink">
                CS
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-heading text-2xl font-800 text-foreground">
                Caleb Sherrill
              </h2>
              <p className="mt-1 text-base text-green-ink">CEO, Pillar PEO Advisors</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Caleb Sherrill didn't build Pillar from a distance — he built it from
              experience.
            </p>
            <p>
              As a business builder and operator, he'd already lived through the
              administrative drag that quietly steals momentum. In a previous business,
              payroll complexity pulled him into work he was never supposed to carry
              alone. He made mistakes. He incurred fines.
            </p>
            <p>
              That experience made one thing clear: too many business leaders spend their
              time solving the wrong problems — carrying avoidable risk, confusion, and
              administrative burden. Pillar was built to change that: to help employers
              make better decisions around HR, payroll, and compliance.
            </p>
            <p>
              He works with owners and managing partners on{" "}
              <Link to="/services/hr-audit" className="font-semibold text-green-ink hover:underline">
                HR audits
              </Link>
              ,{" "}
              <Link
                to="/services/fractional-hr"
                className="font-semibold text-green-ink hover:underline"
              >
                fractional HR
              </Link>{" "}
              and{" "}
              <Link
                to="/services/transitions"
                className="font-semibold text-green-ink hover:underline"
              >
                transitions
              </Link>
              , and writes most of what you'll find in the{" "}
              <Link to="/resources" className="font-semibold text-green-ink hover:underline">
                resources
              </Link>{" "}
              section.
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/calebsherrill/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-ink hover:underline"
              >
                Caleb on LinkedIn
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <ServiceCta
      heading="Talk to Caleb."
      body="Most first conversations are 30 minutes and end with a clear answer about whether we can help."
      proof="PROOF SLOT — client quote naming Caleb, from a professional-services firm, with a specific outcome."
      secondary={{ label: "Meet the team", href: "/about" }}
    />
  </>
);

export default CalebSherrill;
