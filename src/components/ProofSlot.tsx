import { SHOW_PLACEHOLDERS } from "@/data/flags";

interface ProofSlotProps {
  /** Exactly what proof is needed here, e.g. "managing partner quote, Charlotte law firm, with a number". */
  needs: string;
}

/**
 * A deliberate, visible placeholder. Pillar does not publish testimonials,
 * client names or metrics it does not have. This slot names what is missing
 * so it can be filled with something real.
 */
const ProofSlot = ({ needs }: ProofSlotProps) => {
  if (!SHOW_PLACEHOLDERS) return null;
  return (
    <div className="rounded-lg border-2 border-dashed border-muted-foreground/40 bg-muted/30 p-5 text-left">
      <p className="font-heading text-xs font-700 uppercase tracking-widest text-muted-foreground">
        Proof slot
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{needs}</p>
    </div>
  );
};

export default ProofSlot;
