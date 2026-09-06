import { useState, useCallback } from "react";
import SEOHead from "@/components/SEOHead";
import QuizLanding from "@/components/quiz/QuizLanding";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import QuizResults from "@/components/quiz/QuizResults";
import { riskScoreQuestions, getRiskBand } from "@/data/riskScoreQuestions";
import { SITE_URL, breadcrumb } from "@/data/organization";
import UpdatedLine from "@/components/services/UpdatedLine";

type Step = "landing" | "quiz" | "results";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Tools", path: "/tools" },
      { name: "HR Risk Score", path: "/tools/hr-risk-score" },
    ]),
  ],
};

/**
 * HR Risk Score — a rebuild of the old HR Headache Score quiz.
 * Nine questions, one per audit area from /services/hr-audit. The score
 * shows immediately after the last question; email is asked only afterward,
 * to send a written plan (not to gate the score).
 */
const HrRiskScore = () => {
  const [step, setStep] = useState<Step>("landing");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleStart = useCallback(() => setStep("quiz"), []);

  const handleAnswer = useCallback(
    (score: 1 | 2 | 3) => {
      const next = [...answers, score];
      setAnswers(next);
      if (currentQ + 1 < riskScoreQuestions.length) {
        setCurrentQ((q) => q + 1);
      } else {
        window.scrollTo(0, 0);
        setStep("results");
      }
    },
    [answers, currentQ],
  );

  const handleBack = useCallback(() => {
    if (currentQ > 0) {
      setCurrentQ((q) => q - 1);
      setAnswers((prev) => prev.slice(0, -1));
    }
  }, [currentQ]);

  return (
    <>
      <SEOHead
        title="HR Risk Score — Free 9-Area Assessment"
        description="Nine questions covering the same areas Pillar's HR audit checks. See your score instantly, then get a written plan by email."
        canonical={`${SITE_URL}/tools/hr-risk-score`}
        jsonLd={jsonLd}
      />

      {step === "landing" && (
        <>
          <div className="container pt-6">
            <UpdatedLine />
          </div>
          <QuizLanding
            onStart={handleStart}
            eyebrow="Free 2-minute assessment"
            titlePrefix="What's Your"
            titleAccent="HR Risk Score"
            subtitle="Nine questions, one for each area Pillar's HR audit checks. Your score shows immediately — no email required to see it."
            ctaText="Get My HR Risk Score"
            footerText="Free. Score shown instantly. No email required to see your result."
          />
        </>
      )}

      {step === "quiz" && (
        <QuizQuestion
          question={riskScoreQuestions[currentQ]}
          questionIndex={currentQ}
          totalQuestions={riskScoreQuestions.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}

      {step === "results" && (
        <QuizResults
          answers={answers}
          questions={riskScoreQuestions}
          getBand={getRiskBand}
          toolName="HR Risk Score"
          shareLabel="HR Risk Score"
          planEmailCapture={{ source: "hr-risk-score", toolName: "HR Risk Score" }}
        />
      )}
    </>
  );
};

export default HrRiskScore;
