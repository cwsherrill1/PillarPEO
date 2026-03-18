import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

interface QuizLandingProps {
  onStart: () => void;
}

const QuizLanding = ({ onStart }: QuizLandingProps) => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-2xl animate-fade-up">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          Free 2-minute assessment
        </div>

        <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Is Your HR a{" "}
          <span className="text-accent">Headache</span>?
        </h1>

        <p className="mx-auto mb-10 max-w-lg text-lg text-muted-foreground">
          Take the free 2-minute assessment and find out exactly how your HR
          setup is performing — and what to do about it.
        </p>

        <Button
          size="lg"
          onClick={onStart}
          className="group h-14 px-8 text-base font-semibold"
        >
          Get My HR Headache Score
          <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>

        <p className="mt-6 text-sm text-muted-foreground">
          Used by 100+ business owners. Free. No commitment.
        </p>
      </div>
    </div>
  );
};

export default QuizLanding;
