import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import calebPhoto from "@/assets/team/caleb-sherrill.png";
import josiahPhoto from "@/assets/team/josiah-sherrill.png";
import emilyPhoto from "@/assets/team/emily-snooks.png";

import { BOOKING_URL, PRIMARY_CTA } from "@/data/pricing";

const team = [
  {
    initials: "CS",
    name: "Caleb Sherrill",
    title: "CEO",
    image: calebPhoto,
    bio: "After living through payroll mistakes, fines, and administrative drag in a previous business, Caleb built Pillar to help employers make better decisions around HR, payroll, and compliance.",
  },
  {
    initials: "JS",
    name: "Josiah Sherrill",
    title: "Founding Account Executive",
    image: josiahPhoto,
    bio: "With a background in ministry recruiting, Josiah brings a people-centered lens and relationship strength that helped turn Pillar from a founder-led vision into a growing advisory business.",
  },
  {
    initials: "ES",
    name: "Emily Snooks",
    title: "COO",
    image: emilyPhoto,
    bio: "Emily brings 6+ years of operations leadership across remote teams, finance, and event management. As COO, she keeps Pillar's workflows, bookkeeping, and client experience running smoothly — so the advisory work stays focused on employers.",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      url: "https://pillarpeo.com/about",
      name: "About Pillar PEO Advisors",
      description: "Pillar is an independent HR advisory firm for professional-services firms nationwide, headquartered in Charlotte, NC.",
    },
    {
      "@type": "Person",
      "@id": "https://pillarpeo.com/#caleb",
      name: "Caleb Sherrill",
      jobTitle: "Founder & PEO Advisor",
      worksFor: { "@type": "Organization", name: "Pillar PEO Advisors", url: "https://pillarpeo.com" },
      sameAs: ["https://www.linkedin.com/in/calebsherrill/"],
    },
    {
      "@type": "Person",
      name: "Josiah Sherrill",
      jobTitle: "Founding Account Executive",
      worksFor: { "@type": "Organization", name: "Pillar PEO Advisors", url: "https://pillarpeo.com" },
    },
    {
      "@type": "Person",
      name: "Emily Snooks",
      jobTitle: "Chief Operating Officer",
      worksFor: { "@type": "Organization", name: "Pillar PEO Advisors", url: "https://pillarpeo.com" },
    },
  ],
};

const About = () => (
  <div>
    <SEOHead
      title="About Pillar — HR Advisory for Professional Firms"
      description="Pillar is an independent HR advisory firm for professional-services firms nationwide, headquartered in Charlotte, NC. Founder-led, fixed-price, commissions disclosed."
      jsonLd={aboutJsonLd}
    />
    {/* ─── Hero ─── */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-24 text-center md:py-32">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            About Pillar
          </p>
          <h1 className="font-heading text-4xl font-800 leading-tight md:text-5xl lg:text-6xl">
            HR advisory for professional-services
            <br className="hidden md:block" /> firms, nationwide, from Charlotte.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            Fixed-price HR audits and projects, fractional HR, and clean
            transitions into or out of a PEO — for law, accounting,
            engineering, medical and nonprofit firms of 10 to 150 people.
          </p>
        </Reveal>
      </div>
    </section>

    {/* ─── How Pillar Started ─── */}
    <section id="why-pillar" className="bg-background">
      <div className="container max-w-3xl py-24 md:py-32">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-ink">
            How Pillar Started
          </p>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            Built from experience, not theory.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-6 text-left text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>Caleb Sherrill didn't build Pillar from a distance — he built it from experience.</p>
            <p>
              As a business builder and operator, he'd already lived through the
              administrative drag that quietly steals momentum. In a previous
              business, payroll complexity pulled him into work he was never
              supposed to carry alone. He made mistakes. He incurred fines.
            </p>
            <p>
              That experience made one thing clear: too many business leaders
              spend their time solving the wrong problems — carrying avoidable
              risk, confusion, and administrative burden.
            </p>
            <p>
              So Pillar is built the way he wishes someone had built it for
              him: a price quoted before the work starts, coverage in every
              state your people actually work in, and no software to sell and
              no insurance to place. Where a PEO is genuinely the right answer,
              Pillar will compare providers for you at no charge, and disclose
              what the provider pays us in writing before anything is placed.
            </p>
            <p>
              The name is deliberate. In Exodus, a pillar of cloud and fire went
              ahead of people who had a long way to go and no map. That's the
              job: go first, carry the weight, keep the way clear.
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-ink">
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

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 150}>
              <Card className="h-full border-none bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <Avatar className="mx-auto mb-5 h-28 w-28">
                    <AvatarImage src={m.image} alt={m.name} className="object-cover" />
                    <AvatarFallback className="bg-accent/10 text-green-ink text-2xl font-heading font-700">
                      {m.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-heading text-xl font-700 text-foreground">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-green-ink">
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

    {/* ─── Mid-Page CTA ─── */}
    <section className="bg-accent/5 py-14">
      <div className="container text-center">
        <Reveal>
          <p className="text-lg font-medium text-foreground">
Want to know what your HR risk actually is?
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 px-8"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {PRIMARY_CTA}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>

    {/* ─── Why the Work Matters ─── */}
    <section className="bg-background">
      <div className="container max-w-3xl py-24 md:py-32">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-ink">
            Why the Work Matters
          </p>
          <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
            Employers deserve better.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-6 text-left text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Managing partners and practice administrators end up owning HR by
              default. It isn't the job they trained for, it isn't in the
              billable hour, and the mistakes it produces — a misclassified
              role, a handbook written for one state, an I-9 file nobody has
              opened in four years — stay quiet until they're expensive.
            </p>
            <p>
              Pillar exists to take that weight off the people carrying it:
              find what's actually wrong, price the fix before the work starts,
              and stay independent enough that the recommendation is the same
              whether or not anyone buys anything from us.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ─── What We Believe ─── */}
    <section className="bg-muted/40">
      <div className="container max-w-3xl py-24 md:py-32">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-ink">
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
              "Business leaders shouldn't lose momentum to preventable complexity.",
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
            Let's talk about what's working, what isn't, and what a better
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
                {PRIMARY_CTA} <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;
