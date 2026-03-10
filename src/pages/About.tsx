import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

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
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
            Pillar PEO Advisors was built to help leaders move through payroll,
            benefits, HR, and compliance decisions with more clarity, better
            support, and less costly guesswork.
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

    {/* ─── Why the Work Matters ─── */}
    <section className="bg-muted/40">
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

    {/* ─── How Josiah Joined ─── */}
    <section className="bg-background">
      <div className="container max-w-3xl py-24 md:py-32">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            A True Partner
          </p>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            How Josiah joined.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-6 text-left text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              As Pillar began to take shape, Caleb realized he did not just need
              another person to help carry tasks. He needed a true partner.
            </p>
            <p>That is when he brought in his brother, Josiah Sherrill.</p>
            <p>
              Josiah came with three years of ministry recruiting experience and
              a people-first mindset. He understood how much decisions like these
              affect real teams, real leaders, and real families. He also brought
              relational strength, discernment, and a natural ability to help
              people feel seen and supported while moving through a big decision.
            </p>
            <p className="font-medium text-foreground">
              What began as one founder's conviction became a shared mission. And
              from there, Pillar has continued to grow.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ─── Why the Name Pillar ─── */}
    <section className="bg-muted/40">
      <div className="container max-w-3xl py-24 md:py-32">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Our Name
          </p>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            Why the name Pillar.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-6 text-left text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              The name Pillar comes from the image in Exodus of the Lord going
              before His people in a pillar as He led them through unfamiliar
              ground.
            </p>
            <p>That image matters to us.</p>
            <p>
              Not because we want to force symbolism into the business, but
              because it captures something true about the kind of company we
              want to be.
            </p>
            <p>We want to be a steady guide.</p>
            <p>We want to bring clarity when the path feels unclear.</p>
            <p>
              We want to help employers move forward with wisdom, support, and
              peace instead of pressure and confusion.
            </p>
            <p className="font-medium text-foreground">
              That is what Pillar means to us.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ─── What We Believe ─── */}
    <section className="bg-background">
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
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/60">
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
