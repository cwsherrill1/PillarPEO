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

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const solutions = [
  { label: "Switch Your PEO", href: "/switch-your-peo" },
  { label: "PEO for Nonprofits", href: "/peo-for-nonprofits" },
  { label: "First-Time PEO", href: "/do-we-need-a-peo" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

const Header = () => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-primary/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-8 w-1 rounded-full bg-accent" />
            <span className="font-heading text-xl font-800 tracking-tight text-primary-foreground md:text-2xl">
              PILLAR
            </span>
          </div>
          <span className="hidden text-xs font-semibold tracking-widest text-primary-foreground/50 uppercase sm:inline">
            PEO Advisors
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                isActive(link.href)
                  ? "text-accent"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                solutions.some((s) => isActive(s.href))
                  ? "text-accent"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              Solutions
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  solutionsOpen && "rotate-180"
                )}
              />
            </button>
            {solutionsOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-64 rounded-lg border border-primary-foreground/10 bg-primary p-2 shadow-xl">
                  {solutions.map((sol) => (
                    <Link
                      key={sol.href}
                      to={sol.href}
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-sm font-semibold transition-colors",
                        isActive(sol.href)
                          ? "bg-accent/20 text-accent"
                          : "text-primary-foreground/80 hover:bg-primary-foreground/5 hover:text-primary-foreground"
                      )}
                      onClick={() => setSolutionsOpen(false)}
                    >
                      {sol.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                isActive(link.href)
                  ? "text-accent"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
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
              Schedule a PEO Strategy Call
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button className="p-2 text-primary-foreground">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 border-l-primary/20 bg-primary text-primary-foreground"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-1 pt-8">
              {navLinks.slice(0, 2).map((link) => (
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

              {/* Solutions group */}
              <div className="px-4 py-2 text-xs font-bold tracking-widest text-primary-foreground/40 uppercase">
                Solutions
              </div>
              {solutions.map((sol) => (
                <Link
                  key={sol.href}
                  to={sol.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-md px-6 py-2.5 text-sm font-semibold transition-colors",
                    isActive(sol.href)
                      ? "bg-accent/20 text-accent"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  )}
                >
                  {sol.label}
                </Link>
              ))}

              <div className="my-2 h-px bg-primary-foreground/10" />

              {navLinks.slice(2).map((link) => (
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
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                    Schedule a PEO Strategy Call
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
