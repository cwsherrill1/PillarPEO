import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface QuizEmailCaptureProps {
  onSubmit: (data: { firstName: string; email: string; company: string }) => void;
  onSkip: () => void;
}

const QuizEmailCapture = ({ onSubmit, onSkip }: QuizEmailCaptureProps) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;

    setSubmitting(true);
    try {
      await supabase.from("leads").insert({
        source: "quiz",
        name: firstName.trim(),
        email: email.trim(),
        company: company.trim(),
      });
    } catch {
      // Silently continue: don't block results
    }
    onSubmit({
      firstName: firstName.trim(),
      email: email.trim(),
      company: company.trim(),
    });
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-4">
      <div className="w-full animate-fade-in text-center">
        <h2 className="mb-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Your results are ready
        </h2>
        <p className="mb-8 text-muted-foreground">
          Enter your details below and we'll show you your HR Headache Score
          plus a personalized action plan.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Your first name"
              required
              maxLength={100}
            />
          </div>
          <div>
            <Label htmlFor="email">Business Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              maxLength={255}
            />
          </div>
          <div>
            <Label htmlFor="company">
              Company Name <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Your company"
              maxLength={200}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="group w-full text-base font-semibold"
          >
            {submitting ? "Loading…" : "Show Me My Score"}
            <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>

        <button
          type="button"
          onClick={onSkip}
          className="mt-4 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Skip and see my score
        </button>

        <p className="mt-6 text-xs text-muted-foreground">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </div>
  );
};

export default QuizEmailCapture;
