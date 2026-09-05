import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import calebPhoto from "@/assets/team/caleb-sherrill.png";
import josiahPhoto from "@/assets/team/josiah-sherrill.png";
import emilyPhoto from "@/assets/team/emily-snooks.png";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

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
      description: "Meet the team behind Pillar PEO Advisors — an independent PEO broker helping employers compare PEO options.",
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
      title="About Us"
      description="Meet the team behind Pillar PEO Advisors — an independent PEO broker helping employers compare options with clarity."
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
            Want to learn how Pillar can help your team?
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-accent text-green-ink-foreground hover:bg-accent/90 font-heading font-700 px-8"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Schedule a Call
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
              We believe employers deserve more than generic quotes and
              pressure-filled sales conversations. They deserve clear guidance,
              someone who understands what's at stake, and a better process.
            </p>
            <p>
              Pillar exists to help employers compare options clearly, understand
              the tradeoffs, and put the right support in place before costly
              friction steals more time and focus.
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
