import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { BOOKING_URL, PRIMARY_CTA } from "@/data/pricing";
import { industries as industryList } from "@/data/industries";
import { metros } from "@/data/locations";

const services = [
  { label: "All services", href: "/services" },
  { label: "HR Audit", href: "/services/hr-audit" },
  { label: "HR Projects", href: "/services/hr-projects" },
  { label: "Fractional HR", href: "/services/fractional-hr" },
  { label: "Transitions", href: "/services/transitions" },
  { label: "PEO brokerage", href: "/services/peo-brokerage" },
];

const industries = [
  { label: "All industries", href: "/industries" },
  ...industryList.map((i) => ({ label: i.navLabel, href: `/industries/${i.slug}` })),
];

const locations = [
  { label: "The Carolinas", href: "/hr-consulting" },
  ...metros.map((m) => ({ label: m.navLabel, href: `/hr-consulting/${m.slug}` })),
];

const resourcesMenu = [
  { label: "All resources", href: "/resources" },
  { label: "How PEO pricing works", href: "/resources/peo-pricing-explained" },
  { label: "— Why your renewal jumped", href: "/resources/peo-honeymoon-pricing" },
  { label: "— The SUTA line nobody checks", href: "/resources/peo-suta-rates" },
  { label: "— Admin fees: PEPM vs % of payroll", href: "/resources/peo-admin-fees" },
  { label: "— Contract terms and exit costs", href: "/resources/peo-contract-terms" },
  { label: "— When a PEO is the wrong answer", href: "/resources/when-a-peo-is-the-wrong-answer" },
  { label: "— Free PEO renewal review", href: "/resources/peo-renewal-review" },
  { label: "HR audit checklist", href: "/resources/hr-audit-checklist" },
  { label: "State employer guides", href: "/resources/state-employer-guides" },
  { label: "NC vs. SC employment law", href: "/resources/nc-vs-sc-employment-law" },
  { label: "Multi-state checklist", href: "/resources/multi-state-employer-checklist" },
  { label: "HR Risk Score", href: "/tools/hr-risk-score" },
  { label: "PEO cost calculator", href: "/tools/peo-cost-calculator" },
  { label: "Case studies", href: "/case-studies" },
];

const flatLinks = [
  { label: "About", href: "/about" },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  const dropdowns = [
    { label: "Services", items: services },
    { label: "Industries", items: industries },
    { label: "Locations", items: locations },
    { label: "Resources", items: resourcesMenu },
  ].filter((d) => d.items.length > 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between lg:h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/pillar-logo.png"
            alt="Pillar PEO Advisors"
            className="h-16 lg:h-20 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {dropdowns.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                  menu.items.some((s) => isActive(s.href))
                    ? "text-green-ink"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {menu.label}
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform",
                    openMenu === menu.label && "rotate-180"
                  )}
                />
              </button>
              {openMenu === menu.label && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-64 rounded-lg border border-border bg-background p-2 shadow-xl">
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-sm font-semibold transition-colors",
                          isActive(item.href)
                            ? "bg-accent/10 text-green-ink"
                            : "text-foreground/70 hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {flatLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                isActive(link.href)
                  ? "text-green-ink"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center lg:flex">
          <Button
            asChild
            className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {PRIMARY_CTA}
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button className="p-2 text-foreground" aria-label="Toggle menu">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 border-l-primary/20 bg-primary text-primary-foreground"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-1 pt-8">
              {dropdowns.map((menu) => (
                <div key={menu.label}>
                  <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground/70">
                    {menu.label}
                  </div>
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-md px-6 py-2.5 text-sm font-semibold transition-colors",
                        isActive(item.href)
                          ? "bg-accent/20 text-accent"
                          : "text-primary-foreground/70 hover:text-primary-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}

              <div className="my-2 h-px bg-primary-foreground/10" />

              {flatLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-md px-4 py-3 text-base font-semibold transition-colors",
                    isActive(link.href)
                      ? "bg-accent/20 text-accent"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-6 flex flex-col gap-3 px-4">
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90"
                >
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    {PRIMARY_CTA}
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
