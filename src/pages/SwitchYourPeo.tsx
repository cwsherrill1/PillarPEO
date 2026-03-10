import { Link } from "react-router-dom";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const signs = [
  "Service feels reactive or inconsistent",
  "Costs keep rising without clear value",
  "Your team has outgrown the current setup",
  "Renewals create stress instead of confidence",
  "You are staying put mostly because switching feels complicated",
];

const myths = [
  {
    myth: "\u201CWe are probably stuck.\u201D",
    truth: "Better-fit options exist, and transitions can be planned.",
  },
  {
    myth: "\u201CSwitching will be chaos.\u201D",
    truth: "A guided process can create far more clarity than staying in a setup that is already causing friction.",
  },
  {
    myth: "\u201CIt is probably not worth reviewing.\u201D",
    truth: "Sometimes the biggest cost is continuing with a fit you no longer trust.",
  },
];

const SwitchYourPeo = () => (
  <>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-4xl md:text-5xl font-800 leading-tight">
            Your current PEO may not be your best fit.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body">
            If service has slipped, renewal pressure is rising, or the
            relationship no longer feels right, Pillar helps you compare
            better-fit options and plan a cleaner move.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a PEO Switch Review
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

    {/* Signs */}
    <section className="bg-background">
      <div className="container py-20 md:py-28 max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center">
            Signs it may be time.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 space-y-4">
            {signs.map((sign) => (
              <li key={sign} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-base leading-relaxed">{sign}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>

    {/* Myth vs Truth */}
    <section className="bg-muted/40 py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center mb-12">
            What people assume vs. what is true.
          </h2>
        </Reveal>

        <div className="space-y-8">
          {myths.map(({ myth, truth }, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-destructive/20 bg-destructive/5">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <XCircle size={18} className="text-destructive" />
                      <span className="text-xs font-bold uppercase tracking-wider text-destructive">
                        Myth
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/80 italic">
                      {myth}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-accent" />
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        Truth
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {truth}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
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
      <div className="container py-20 md:py-28 text-center max-w-2xl">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl font-800">
            Ready to explore better options?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Start with a short conversation. If we can help, we will show you
            how. If not, we will point you in the right direction.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a PEO Switch Review
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

export default SwitchYourPeo;
