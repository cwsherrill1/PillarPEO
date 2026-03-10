import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Reveal } from "@/components/Reveal";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const founders = [
  {
    initials: "CS",
    name: "Caleb Sherrill",
    title: "CEO",
    bio: "After living through payroll mistakes, fines, and administrative drag in a previous business, Caleb built Pillar to help employers make better decisions around HR, payroll, and compliance.",
  },
  {
    initials: "JS",
    name: "Josiah Sherrill",
    title: "Partner",
    bio: "With a background in ministry recruiting, Josiah brings a people-centered lens and relationship strength that helped turn Pillar from a founder-led vision into a growing advisory business.",
  },
];

const About = () => (
  <div>
    {/* ─── Hero ─── */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-24 text-center md:py-32">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            About Pillar
          </p>
          <h1 className="font-heading text-4xl font-800 leading-tight md:text-5xl lg:text-6xl">
            Built to guide employers through
            <br className="hidden md:block" /> weighty decisions.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            Helping leaders navigate payroll, benefits, HR, and compliance
            with more clarity and less guesswork.
          </p>
        </Reveal>
      </div>
    </section>

    {/* ─── How Pillar Started ─── */}
    <section id="why-pillar" className="bg-background">
      <div className="container max-w-3xl py-24 md:py-32">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            How Pillar Started
          </p>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            Built from experience, not theory.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-6 text-left text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>Caleb Sherrill did not build Pillar from a distance.</p>
            <p>He built it from experience.</p>
            <p>
              As a business builder and operator, Caleb had already lived through
              the kind of administrative drag that quietly steals momentum from a
              company. In a previous business he started and ran, payroll and
              setup complexity pulled him deep into work he was never supposed to
              carry alone. He made mistakes. He incurred fines. He spent more
              time than he should have inside a major payroll platform trying to
              fix what he did not know how to structure well in the first place.
            </p>
            <p>
              That experience changed the way he sees payroll, HR
              infrastructure, compliance, and support.
            </p>
            <p>
              It made one thing painfully clear: a lot of business leaders are
              spending too much time solving the wrong problems. They are trying
              to build the business while also carrying avoidable risk, avoidable
              confusion, and avoidable administrative burden.
            </p>
            <p className="font-medium text-foreground">
              Pillar was built to change that.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ─── Meet the Team ─── */}
    <section className="bg-muted/40">
      <div className="container py-24 md:py-32">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Our Team
            </p>
            <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
              Meet the team behind Pillar.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A growing team committed to helping employers move with more
              clarity, confidence, and support.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          {founders.map((m, i) => (
            <Reveal key={m.name} delay={i * 150}>
              <Card className="h-full border-none bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <Avatar className="mx-auto mb-5 h-24 w-24">
                    <AvatarFallback className="bg-accent/10 text-accent text-2xl font-heading font-700">
                      {m.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-heading text-xl font-700 text-foreground">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {m.title}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ─── Why the Work Matters ─── */}
    <section className="bg-background">
      <div className="container max-w-3xl py-24 md:py-32">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Why the Work Matters
          </p>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            Employers deserve better.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-6 text-left text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              We believe employers deserve more than generic quotes and
              pressure-filled sales conversations.
            </p>
            <p>They deserve clear guidance.</p>
            <p>They deserve someone who understands what is at stake.</p>
            <p>They deserve a better process.</p>
            <p>
              Pillar exists to help employers compare options clearly, understand
              the tradeoffs, and put the right support in place before costly
              friction steals more time, energy, and focus.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ─── What We Believe ─── */}
    <section className="bg-muted/40">
      <div className="container max-w-3xl py-24 md:py-32">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            What We Stand For
          </p>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            What we believe.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {[
              "Clarity is kindness.",
              "Stewardship matters.",
              "Guidance should reduce fear, not create it.",
              "The right fit matters more than the loudest pitch.",
              "Business leaders should not lose momentum to preventable complexity.",
            ].map((belief) => (
              <li key={belief} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{belief}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>

    {/* ─── Final CTA ─── */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-24 text-center md:py-32">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 md:text-4xl">
            Need clarity on what comes next?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Let's talk about what is working, what is not, and what a better-fit
            path could look like.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule a PEO Strategy Call <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;
