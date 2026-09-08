import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BOOKING_URL, PRIMARY_CTA } from "@/data/pricing";

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "HR Audit", href: "/services/hr-audit" },
      { label: "HR Projects", href: "/services/hr-projects" },
      { label: "Fractional HR", href: "/services/fractional-hr" },
      { label: "Transitions", href: "/services/transitions" },
      { label: "PEO brokerage", href: "/services/peo-brokerage" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "How PEO pricing works", href: "/resources/peo-pricing-explained" },
      { label: "When a PEO is the wrong answer", href: "/resources/when-a-peo-is-the-wrong-answer" },
      { label: "Free PEO renewal review", href: "/resources/peo-renewal-review" },
      { label: "State employer guides", href: "/resources/state-employer-guides" },
      { label: "HR audit checklist", href: "/resources/hr-audit-checklist" },
      { label: "HR Risk Score", href: "/tools/hr-risk-score" },
      { label: "PEO cost calculator", href: "/tools/peo-cost-calculator" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { label: "Partner overview", href: "/partners" },
      { label: "For fractional CFOs", href: "/partners/fractional-cfos" },
      { label: "For benefits brokers", href: "/partners/benefits-brokers" },
      { label: "White-label delivery", href: "/partners/white-label" },
      { label: "Client one-pager", href: "/partners/client-one-pager" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Caleb Sherrill", href: "/about/caleb-sherrill" },
      { label: "How we get paid", href: "/how-we-get-paid" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Industries", href: "/industries" },
      { label: "Locations", href: "/hr-consulting" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Band */}
      <div className="border-b border-primary-foreground/10">
        <div className="container flex flex-col items-center gap-6 py-16 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h3 className="font-heading text-2xl font-700 md:text-3xl">
              Know what your HR risk is.
            </h3>
            <p className="mt-2 max-w-md text-primary-foreground/80">
              Fixed price, quoted before the work starts, covering every state
              your people work in.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {PRIMARY_CTA}
            </a>
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div>
            <img
              src="/pillar-logo.png"
              alt="Pillar PEO Advisors"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
              Independent HR advisory for professional-services firms nationwide,
              based in Charlotte.
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
              <li>
                <a href="mailto:info@pillarpeo.com" className="transition-colors hover:text-accent">
                  info@pillarpeo.com
                </a>
              </li>
              <li>
                <a href="tel:+17047871261" className="transition-colors hover:text-accent">
                  (704) 787-1261
                </a>
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-4 text-xs font-bold tracking-widest text-primary-foreground/70 uppercase">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/70">
            © {new Date().getFullYear()} Pillar PEO Advisors. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-xs text-primary-foreground/70 transition-colors hover:text-primary-foreground/80"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-primary-foreground/70 transition-colors hover:text-primary-foreground/80"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
