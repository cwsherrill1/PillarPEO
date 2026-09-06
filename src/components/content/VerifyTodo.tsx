import { SHOW_PLACEHOLDERS } from "@/data/flags";

/**
 * Visible marker for a fact we have not been given and will not guess.
 * Dashed amber border on existing tokens only: no new colours.
 */
const VerifyTodo = ({ children }: { children: React.ReactNode }) => {
  if (!SHOW_PLACEHOLDERS) return null;
  return (
    <div className="rounded-lg border-2 border-dashed border-amber-500/50 bg-amber-500/5 p-4">
      <p className="font-heading text-xs font-700 uppercase tracking-widest text-amber-700">
        TODO: verify
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
};

export default VerifyTodo;
