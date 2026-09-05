import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

/** The section band used across the site's long-form pages. */
export const Section = ({
  title,
  children,
  alt = false,
  wide = false,
}: {
  title?: string;
  children: React.ReactNode;
  alt?: boolean;
  wide?: boolean;
}) => (
  <section className={alt ? "bg-muted/30 py-20 md:py-28" : "bg-background py-20 md:py-28"}>
    <div className={wide ? "container max-w-5xl" : "container max-w-3xl"}>
      <Reveal>
        {title && (
          <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">
            {title}
          </h2>
        )}
        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
      </Reveal>
    </div>
  </section>
);

export const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
    <span>{children}</span>
  </li>
);

export interface Faq {
  q: string;
  a: string;
}

export const FaqBlock = ({ faqs }: { faqs: Faq[] }) => (
  <Accordion type="single" collapsible className="w-full">
    {faqs.map((f, i) => (
      <AccordionItem key={i} value={`q${i}`}>
        <AccordionTrigger className="text-left font-heading text-base font-700 text-foreground">
          {f.q}
        </AccordionTrigger>
        <AccordionContent className="text-base leading-relaxed text-muted-foreground">
          {f.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export const faqSchema = (faqs: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

/**
 * The standing legal posture line. Pillar is not a law firm and no page may
 * claim that counsel has reviewed its contents.
 */
export const LegalNote = ({ verified = "2026-09-05" }: { verified?: string }) => (
  <div className="rounded-lg border border-border bg-muted/40 p-5">
    <p className="text-sm leading-relaxed text-muted-foreground">
      <span className="font-semibold text-foreground">Last verified: {verified}</span>
      <br />
      Pillar is not a law firm. This is general information, not legal advice.
    </p>
  </div>
);
