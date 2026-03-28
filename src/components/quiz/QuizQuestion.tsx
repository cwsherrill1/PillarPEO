import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import type { QuizQuestion as QuizQuestionType } from "@/data/quizQuestions";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (score: 1 | 2 | 3) => void;
  onBack?: () => void;
}

const QuizQuestion = ({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  onBack,
}: QuizQuestionProps) => {

  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4">
      {/* Progress */}
      <div className="mb-2 w-full">
        <div className="mb-1 flex items-center justify-between text-sm text-muted-foreground">
          <span>Question {questionIndex + 1} of {totalQuestions}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <div key={questionIndex} className="w-full animate-fade-in py-8">
        <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground sm:text-3xl">
          {question.question}
        </h2>

        {/* Answer Cards */}
        <div className="flex flex-col gap-3">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={(e) => { (e.currentTarget as HTMLElement).blur(); onAnswer(option.score); }}
              className="group w-full rounded-lg border-2 border-border bg-card p-5 text-left transition-all duration-200 [@media(hover:hover)]:hover:border-accent [@media(hover:hover)]:hover:shadow-md active:border-accent active:shadow-md active:scale-[0.98] focus:border-border focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-muted text-sm font-semibold text-muted-foreground transition-colors [@media(hover:hover)]:group-hover:border-accent [@media(hover:hover)]:group-hover:bg-accent [@media(hover:hover)]:group-hover:text-accent-foreground">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-base font-medium text-foreground">
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>

        {questionIndex > 0 && onBack && (
          <button
            type="button"
            onClick={onBack}
            className="mt-4 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground mx-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
