import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const PeoForNonprofits = () => (
  <>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-4xl md:text-5xl font-800 leading-tight">
            More mission. Less admin drag.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body">
            Pillar helps nonprofit leaders strengthen payroll, benefits, HR, and
            compliance support so their team can spend less time untangling
            people administration and more time serving the mission.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule a Nonprofit Strategy Call
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-700 text-base px-8"
            >
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Narrative */}
    <section className="bg-background">
      <div className="container max-w-3xl py-14 md:py-20">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>Lean teams feel people-ops friction first.</p>
            <p>
              When the mission is strong but internal support is thin, the
              burden often lands on leaders who are already stretched.
            </p>
            <p>
              Pillar helps nonprofit teams evaluate whether a better support
              structure could create more margin, better benefits support, and
              clearer compliance footing.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              See the full process <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-14 md:py-20 text-center max-w-2xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800">
            Your mission deserves better HR support.
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Start with a short conversation. We will help you find a provider
            that understands nonprofit teams — or point you in the right
            direction.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule a Nonprofit Strategy Call
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-700 text-base px-8"
            >
              <Link to="/resources">Get the Buyer Guide</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default PeoForNonprofits;
