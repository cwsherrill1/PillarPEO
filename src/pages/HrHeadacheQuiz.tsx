import { useState, useCallback } from "react";
import SEOHead from "@/components/SEOHead";
import QuizLanding from "@/components/quiz/QuizLanding";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import QuizEmailCapture from "@/components/quiz/QuizEmailCapture";
import QuizResults from "@/components/quiz/QuizResults";
import { quizQuestions } from "@/data/quizQuestions";

type Step = "landing" | "quiz" | "email" | "results";

const HrHeadacheQuiz = () => {
  const [step, setStep] = useState<Step>("landing");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleStart = useCallback(() => setStep("quiz"), []);

  const handleAnswer = useCallback(
    (score: 1 | 2 | 3) => {
      const next = [...answers, score];
      setAnswers(next);
      if (currentQ + 1 < quizQuestions.length) {
        setCurrentQ((q) => q + 1);
      } else {
        setStep("email");
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

  const handleEmailSubmit = useCallback(() => {
    window.scrollTo(0, 0);
    setStep("results");
  }, []);

  const handleSkip = useCallback(() => {
    window.scrollTo(0, 0);
    setStep("results");
  }, []);

  return (
    <>
      <SEOHead
        title="HR Headache Score — Free Assessment"
        description="Take the free 2-minute HR Headache Score assessment. Find out how your HR setup is performing and get a personalized action plan."
      />

      {step === "landing" && <QuizLanding onStart={handleStart} />}
      {step === "quiz" && (
        <QuizQuestion
          question={quizQuestions[currentQ]}
          questionIndex={currentQ}
          totalQuestions={quizQuestions.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}
      {step === "email" && (
        <QuizEmailCapture onSubmit={handleEmailSubmit} onSkip={handleSkip} />
      )}
      {step === "results" && <QuizResults answers={answers} />}
    </>
  );
};

export default HrHeadacheQuiz;
