import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Brain,
  ShieldCheck,
  Users,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Reveal } from "@/components/Reveal";

/* ── Data ────────────────────────────────────────────────────────── */
const teamMembers = [
  {
    initials: "JM",
    name: "Jordan Mitchell",
    title: "Founder & Lead Advisor",
    bio: "15+ years advising mid-market employers on HR infrastructure. Former VP of Operations at a national PEO before founding Pillar to serve the employer side.",
  },
  {
    initials: "SR",
    name: "Sarah Reeves",
    title: "Senior PEO Analyst",
    bio: "Deep expertise in benefits benchmarking, compliance frameworks, and provider evaluation. Helps clients see past the sales pitch to real-world performance.",
  },
  {
    initials: "DK",
    name: "David Kim",
    title: "Client Strategy Lead",
    bio: "Background in HR consulting and workforce planning. Guides employers through the decision process from initial assessment to successful implementation.",
  },
  {
    initials: "AP",
    name: "Aisha Patel",
    title: "Research & Insights",
    bio: "Tracks PEO industry trends, pricing shifts, and regulatory changes so every recommendation is grounded in current, verified data.",
  },
];

const differentiators = [
  {
    icon: Brain,
    title: "Deep PEO industry knowledge",
    desc: "Our team has spent years inside the PEO world — we know how providers operate, price, and negotiate.",
  },
  {
    icon: ShieldCheck,
    title: "No sales quotas or provider ties",
    desc: "Nobody on our team earns a commission from a PEO. Our advice is genuinely independent.",
  },
  {
    icon: Users,
    title: "Advisors who have been on your side",
    desc: "We have sat in the employer's seat. We understand the pressure, the stakes, and the questions you should be asking.",
  },
];

/* ── Page ────────────────────────────────────────────────────────── */
const Team = () => (
  <div>
    {/* ─── Hero ─── */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-24 text-center md:py-32">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Our Team
          </p>
          <h1 className="font-heading text-4xl font-800 leading-tight md:text-5xl lg:text-6xl">
            The people behind
            <br className="hidden md:block" /> the guidance.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
            A small, focused team of independent advisors who have spent their
            careers in the PEO industry — and chose to work for employers
            instead of providers.
          </p>
        </Reveal>
      </div>
    </section>

    {/* ─── Team Grid ─── */}
    <section className="bg-background">
      <div className="container py-24 md:py-32">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Meet the Team
            </p>
            <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
              Experience you can trust.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Every member of our team brings real-world PEO and HR expertise —
              no generalists, no junior associates.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <Card className="h-full border-none bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <Avatar className="mx-auto mb-5 h-20 w-20">
                    <AvatarFallback className="bg-accent/10 text-accent text-xl font-heading font-700">
                      {m.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-heading text-lg font-700 text-foreground">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {m.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ─── Why Our Team Is Different ─── */}
    <section className="bg-muted/40">
      <div className="container py-24 md:py-32">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Why It Matters
            </p>
            <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
              Why our team is different.
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 100}>
              <Card className="h-full border-none bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <d.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-700 text-foreground">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.desc}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ─── Final CTA ─── */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-24 text-center md:py-32">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 md:text-4xl">
            Want to talk to the team
            <br className="hidden md:block" /> behind the process?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/60">
            No sales pitch. Just a real conversation about your situation and
            how we can help.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20"
            >
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/about">
                <BookOpen className="mr-1 h-4 w-4" /> About Pillar
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Team;
