import { useMemo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ExternalLink, Share2, Lightbulb, Target, Mail } from "lucide-react";
import ScoreGauge from "./ScoreGauge";
import { quizQuestions, getTierInfo as getDefaultTierInfo, type QuizQuestion } from "@/data/quizQuestions";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

type Band = {
  band: string;
  badge: string;
  color: string;
  headline: string;
  body: string;
  ctaText: string;
};

interface PlanEmailCaptureConfig {
  /** Value stored in the leads.source column. */
  source: string;
  /** Tool name used in the on-page copy, e.g. "HR Risk Score". */
  toolName: string;
}

interface QuizResultsProps {
  answers: number[];
  questions?: QuizQuestion[];
  getBand?: (score: number) => Band;
  /** Overrides the "/ 45" wording; defaults to questions.length * 3. */
  toolName?: string;
  shareLabel?: string;
  /** When set, shows an email form after the score asking to send a written plan, and tags the lead with the score band. */
  planEmailCapture?: PlanEmailCaptureConfig;
}

const QuizResults = ({
  answers,
  questions = quizQuestions,
  getBand = (score: number) => {
    const t = getDefaultTierInfo(score);
    return { band: t.label, badge: t.badge, color: t.color, headline: t.headline, body: t.body, ctaText: t.ctaText };
  },
  toolName = "HR Headache Score",
  shareLabel,
  planEmailCapture,
}: QuizResultsProps) => {
  const score = useMemo(() => answers.reduce((a, b) => a + b, 0), [answers]);
  const maxScore = questions.length * 3;
  const minScore = questions.length * 1;
  const tierInfo = useMemo(() => getBand(score), [score, getBand]);

  const [planSent, setPlanSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rankedAnswers = useMemo(() => {
    return answers
      .map((s, i) => ({ score: s, question: questions[i] }))
      .filter((a) => a.question);
  }, [answers, questions]);

  const headacheCards = rankedAnswers.filter((a) => a.score === 3);

  const handleShare = async () => {
    const text = `I scored ${score}/${maxScore} on the ${shareLabel ?? toolName}: "${tierInfo.band}". Take it yourself: ${window.location.href}`;
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Score copied to clipboard!");
    } catch {
      toast.error("Couldn't copy, try manually.");
    }
  };

  const handlePlanSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!planEmailCapture || !firstName.trim() || !email.trim()) return;
    setSubmitting(true);
    try {
      await supabase.from("leads").insert({
        source: planEmailCapture.source,
        name: firstName.trim(),
        email: email.trim(),
        company: company.trim(),
        message: `${planEmailCapture.toolName} result: ${score}/${maxScore}: ${tierInfo.band}`,
      });
    } catch {
      // Silently continue; don't block the confirmation
    }
    setSubmitting(false);
    setPlanSent(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 animate-fade-in">
      {/* Score + Gauge */}
      <div className="mb-8 text-center">
        <ScoreGauge score={score} minScore={minScore} maxScore={maxScore} />

        <div className="mt-4 mb-2 flex items-center justify-center gap-2">
          <span className="text-2xl">{tierInfo.badge}</span>
          <Badge
            className="text-sm px-3 py-1"
            style={{ backgroundColor: tierInfo.color, color: "#fff", borderColor: tierInfo.color }}
          >
            {tierInfo.band}
          </Badge>
        </div>

        <p className="text-lg text-muted-foreground">
          Your score: <span className="font-bold text-foreground">{score}</span> out of {maxScore}
        </p>
      </div>

      {/* Band headline + body */}
      <div className="mb-8 text-center">
        <h2 className="mb-3 font-heading text-3xl font-bold text-foreground">{tierInfo.headline}</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">{tierInfo.body}</p>
      </div>

      {/* Written-plan email capture (asked only after the score is shown) */}
      {planEmailCapture && !planSent && (
        <div className="mb-12">
          <Card className="border-accent/30 bg-accent/5">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-ink" />
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Get your written plan
                </h3>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">
                Enter your details and we'll send a written plan based on your{" "}
                {planEmailCapture.toolName} result, no charge, no obligation.
              </p>
              <form onSubmit={handlePlanSubmit} className="grid gap-4 text-left sm:grid-cols-2">
                <div>
                  <Label htmlFor="plan-firstName">First Name</Label>
                  <Input
                    id="plan-firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Your first name"
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <Label htmlFor="plan-email">Business Email</Label>
                  <Input
                    id="plan-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    maxLength={255}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="plan-company">
                    Company Name <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="plan-company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Your company"
                    maxLength={200}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
                    {submitting ? "Sending…" : "Send Me the Written Plan"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {planEmailCapture && planSent && (
        <div className="mb-12">
          <Card className="border-accent/30 bg-accent/5">
            <CardContent className="p-6 text-center sm:p-8">
              <p className="font-heading text-lg font-bold text-foreground">You're on the list.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We'll send your written {planEmailCapture.toolName} plan to the email you gave us.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* CTA */}
      <div className="mb-12 rounded-lg bg-primary p-6 text-center text-primary-foreground sm:p-8">
        <p className="mx-auto mb-6 max-w-lg text-base sm:text-lg">{tierInfo.ctaText}</p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book My Free Call
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      {/* Personalized Action Plan */}
      {headacheCards.length > 0 && (
        <div className="mb-12">
          <h3 className="mb-6 font-heading text-2xl font-bold text-foreground">
            Your Personalized Action Plan
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {headacheCards.map(({ question }) => (
              <Card key={question.id} className="hover-lift">
                <CardContent className="p-5">
                  <h4 className="mb-3 font-heading text-lg font-semibold text-foreground">
                    {question.topic}
                  </h4>
                  <div className="mb-3 flex items-start gap-2">
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-green-ink" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-green-ink">
                        Quick Win
                      </p>
                      <p className="text-sm text-muted-foreground">{question.quickWin}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                        Longer-Term
                      </p>
                      <p className="text-sm text-muted-foreground">{question.longerTermFix}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-border pt-8 text-center">
        <p className="mx-auto mb-4 max-w-lg text-muted-foreground">
          The free call is 20 minutes. We'll walk through your score, the areas
          driving it, and what to fix first. Bring your employee count, the
          states you operate in, and your current handbook or PEO agreement
          if you have one.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild variant="outline">
            <Link to="/">Learn more at pillarpeo.com</Link>
          </Button>
          <Button asChild>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a Free HR Review
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" onClick={handleShare}>
            <Share2 className="mr-1 h-4 w-4" />
            Share my score
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
