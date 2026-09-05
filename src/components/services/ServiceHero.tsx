import { Reveal } from "@/components/Reveal";

interface ServiceHeroProps {
  eyebrow?: string;
  title: string;
  intro: string;
}

/** The existing navy hero band, reused so the new pages match the site exactly. */
const ServiceHero = ({ eyebrow, title, intro }: ServiceHeroProps) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(236,70%,22%)] text-primary-foreground">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(145_63%_49%/0.08),transparent_60%)]" />
    <div className="container relative z-10 max-w-3xl py-24 text-center md:py-32">
      <Reveal>
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading text-4xl font-800 leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 font-body text-lg text-primary-foreground/80 md:text-xl">
          {intro}
        </p>
      </Reveal>
    </div>
  </section>
);

export default ServiceHero;
