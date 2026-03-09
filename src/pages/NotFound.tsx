import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Phone, HelpCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const suggestions = [
    { label: "Home", href: "/", icon: Home },
    { label: "How It Works", href: "/how-it-works", icon: HelpCircle },
    { label: "Resources", href: "/resources", icon: BookOpen },
    { label: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="container text-center">
          <p className="font-heading text-8xl font-800 text-accent md:text-9xl">404</p>
          <h1 className="mt-4 font-heading text-3xl font-700 md:text-4xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-primary-foreground/60">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90"
          >
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </section>

      {/* Suggestions */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-center font-heading text-xl font-700 text-foreground/80">
            Popular pages you might be looking for
          </h2>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
            {suggestions.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-center transition-shadow hover:shadow-md"
              >
                <item.icon className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
