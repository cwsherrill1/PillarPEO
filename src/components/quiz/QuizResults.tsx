import { useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Share2, Lightbulb, Target } from "lucide-react";
import ScoreGauge from "./ScoreGauge";
import { quizQuestions, getTierInfo } from "@/data/quizQuestions";
import { toast } from "sonner";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

interface QuizResultsProps {
  answers: number[];
}

const QuizResults = ({ answers }: QuizResultsProps) => {
  const score = useMemo(() => answers.reduce((a, b) => a + b, 0), [answers]);
  const tierInfo = useMemo(() => getTierInfo(score), [score]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rankedAnswers = useMemo(() => {
    return answers
      .map((s, i) => ({ score: s, question: quizQuestions[i] }))
      .sort((a, b) => b.score - a.score);
  }, [answers]);

  const headacheCards = rankedAnswers.filter((a) => a.score === 3);

  const handleShare = async () => {
    const text = `I scored ${score}/45 on the HR Headache Score quiz — "${tierInfo.label}". Take it yourself: ${window.location.href}`;
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Score copied to clipboard!");
    } catch {
      toast.error("Couldn't copy — try manually.");
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 animate-fade-in">
      {/* Score + Gauge */}
      <div className="mb-8 text-center">
        <ScoreGauge score={score} />

        <div className="mt-4 mb-2 flex items-center justify-center gap-2">
          <span className="text-2xl">{tierInfo.badge}</span>
          <Badge
            className="text-sm px-3 py-1"
            style={{ backgroundColor: tierInfo.color, color: "#fff", borderColor: tierInfo.color }}
          >
            {tierInfo.label}
          </Badge>
        </div>

        <p className="text-lg text-muted-foreground">
          Your score: <span className="font-bold text-foreground">{score}</span> out of 45
        </p>
      </div>

      {/* Tier headline + body */}
      <div className="mb-8 text-center">
        <h2 className="mb-3 font-heading text-3xl font-bold text-foreground">
          {tierInfo.headline}
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground">{tierInfo.body}</p>
      </div>

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
            Your Personalized HR Action Plan
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {headacheCards.map(({ question }) => (
              <Card key={question.id} className="hover-lift">
                <CardContent className="p-5">
                  <h4 className="mb-3 font-heading text-lg font-semibold text-foreground">
                    {question.topic}
                  </h4>
                  <div className="mb-3 flex items-start gap-2">
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
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
          Most leaders feel exactly like you do. At Pillar PEO Advisors we help
          businesses simplify HR — so you can focus on your people, not
          paperwork.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild variant="outline">
            <Link to="/">
              Learn more at pillarpeo.com
            </Link>
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
