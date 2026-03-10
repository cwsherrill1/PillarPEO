import { ArrowRight, Users } from "lucide-react";
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
    bio: "Caleb is a business builder and the CEO of Pillar PEO Advisors. After experiencing firsthand how payroll mistakes, administrative overload, and preventable fines can pull a founder away from real growth, he built Pillar to help employers make better decisions around payroll, HR, benefits, compliance, and PEO strategy. He brings an operator's mindset to the work: practical, direct, and focused on helping leaders protect momentum.",
  },
  {
    initials: "JS",
    name: "Josiah Sherrill",
    title: "Partner",
    bio: "Josiah joined Pillar as Caleb realized the business needed more than support — it needed a true partner. With a background in ministry recruiting, Josiah brings a people-centered lens, relationship strength, and a deep belief that guidance matters most when decisions affect real teams and families. His role helped turn Pillar from a founder-led vision into a growing advisory business.",
  },
];

const futureRoles = [
  "Future Advisor / Consultant",
  "Future Operations Lead",
  "Future Client Success Support",
  "Future Marketing / Growth Support",
];

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
            Meet the team behind Pillar.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
            A growing team committed to helping employers move with more
            clarity, confidence, and support.
          </p>
        </Reveal>
      </div>
    </section>

    {/* ─── Founder Intro ─── */}
    <section className="bg-background">
      <div className="container max-w-3xl py-16 text-center md:py-20">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Pillar was built by people who understand that these decisions are
            not just operational. They affect leaders, employees, timelines,
            risk, and peace of mind.
          </p>
        </Reveal>
      </div>
    </section>

    {/* ─── Founders ─── */}
    <section className="bg-background">
      <div className="container pb-24 md:pb-32">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
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
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ─── Growing Team ─── */}
    <section className="bg-muted/40">
      <div className="container py-24 md:py-32">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Growing with Purpose
            </p>
            <h2 className="font-heading text-3xl font-800 text-foreground md:text-4xl">
              Built to grow with purpose.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              What started as a shared vision between brothers is continuing to
              grow into a team committed to clarity, service, and wise guidance
              for employers.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {futureRoles.map((role, i) => (
            <Reveal key={role} delay={i * 100}>
              <Card className="h-full border-dashed border-border/60">
                <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <Users className="h-7 w-7 text-muted-foreground/40" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {role}
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

export default Team;
