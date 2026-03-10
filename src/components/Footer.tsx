import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Band */}
      <div className="border-b border-primary-foreground/10">
        <div className="container flex flex-col items-center gap-6 py-16 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h3 className="font-heading text-2xl font-700 md:text-3xl">
              Make a confident next-step decision.
            </h3>
            <p className="mt-2 max-w-md text-primary-foreground/60">
              Tell us what isn't working and we'll help you find a better-fit
              path forward.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Schedule a PEO Strategy Call
            </a>
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1">
              <div className="h-7 w-1 rounded-full bg-accent" />
              <span className="font-heading text-lg font-800 tracking-tight">
                PILLAR
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/50">
              Guidance for employers making high-stakes PEO decisions. Clarity
              over confusion. Confidence over guesswork.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-primary-foreground/40 uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Resources", href: "/resources" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-primary-foreground/40 uppercase">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Switch Your PEO", href: "/switch-your-peo" },
                { label: "PEO for Nonprofits", href: "/peo-for-nonprofits" },
                {
                  label: "First-Time PEO",
                  href: "/do-we-need-a-peo",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <h4 className="mb-4 mt-8 text-xs font-bold tracking-widest text-primary-foreground/40 uppercase">
                Company
              </h4>
              <li>
                <Link
                  to="/about#why-pillar"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                >
                  Why Pillar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-primary-foreground/40 uppercase">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li>
                <a href="mailto:caleb@pillarpeo.com" className="transition-colors hover:text-accent">
                  caleb@pillarpeo.com
                </a>
              </li>
              <li>
                <a href="tel:7047871261" className="transition-colors hover:text-accent">
                  (704) 787-1261
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Pillar PEO Advisors. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/60"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/60"
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
