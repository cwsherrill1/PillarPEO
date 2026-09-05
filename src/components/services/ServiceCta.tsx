import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import ProofSlot from "@/components/ProofSlot";
import { BOOKING_URL, PRIMARY_CTA } from "@/data/pricing";

interface ServiceCtaProps {
  heading: string;
  body: string;
  /** What proof belongs next to this CTA once we have it. */
  proof: string;
  secondary?: { label: string; href: string };
}

/** The existing navy CTA band, with a proof slot beside the primary CTA. */
const ServiceCta = ({ heading, body, proof, secondary }: ServiceCtaProps) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(236,70%,22%)] text-primary-foreground">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(145_63%_49%/0.08),transparent_60%)]" />
    <div className="container relative z-10 grid max-w-4xl gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:items-center md:py-28">
      <Reveal>
        <h2 className="font-heading text-3xl font-800 md:text-4xl">{heading}</h2>
        <p className="mt-4 text-lg text-primary-foreground/80">{body}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent px-8 font-heading text-base font-700 text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {PRIMARY_CTA}
            </a>
          </Button>
          {secondary && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent px-8 font-heading text-base font-700 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to={secondary.href}>{secondary.label}</Link>
            </Button>
          )}
        </div>
      </Reveal>
      <Reveal delay={150}>
        <ProofSlot needs={proof} />
      </Reveal>
    </div>
  </section>
);

export default ServiceCta;
