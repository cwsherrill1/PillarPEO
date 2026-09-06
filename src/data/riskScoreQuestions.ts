/**
 * Questions for the HR Risk Score tool (/tools/hr-risk-score).
 * One question per audit area from src/pages/services/HrAudit.tsx, so the
 * score maps directly onto the nine areas Pillar's paid HR audit checks.
 * Scoring shape (1/2/3 per answer) matches src/data/quizQuestions.ts so the
 * existing quiz components keep working unmodified.
 */

export interface RiskOption {
  text: string;
  score: 1 | 2 | 3;
}

export interface RiskQuestion {
  id: number;
  question: string;
  topic: string;
  options: [RiskOption, RiskOption, RiskOption];
  quickWin: string;
  longerTermFix: string;
}

export const riskScoreQuestions: RiskQuestion[] = [
  {
    id: 1,
    question: "How confident are you in your hiring, I-9, and E-Verify process?",
    topic: "Hiring, I-9, E-Verify",
    options: [
      { text: "Confident: it's documented and consistent", score: 1 },
      { text: "Mostly, but we've had gaps or missed a step before", score: 2 },
      { text: "Not confident: I-9s and background checks are handled ad hoc", score: 3 },
    ],
    quickWin: "Pull your last five I-9s and check they're fully completed and stored separately from personnel files.",
    longerTermFix: "Have a fixed-price HR audit check every I-9 and E-Verify record against the current rules.",
  },
  {
    id: 2,
    question: "How sure are you that every role is classified correctly (exempt, non-exempt, contractor)?",
    topic: "Classification and wage-hour",
    options: [
      { text: "Sure: we've tested every role against the exemption tests", score: 1 },
      { text: "Somewhat: a few roles are judgment calls we haven't revisited", score: 2 },
      { text: "Not sure: classifications were set early and never re-checked", score: 3 },
    ],
    quickWin: "List every contractor and salaried role and note the last time each was reviewed.",
    longerTermFix: "Run an FLSA classification review to get a written position on every role.",
  },
  {
    id: 3,
    question: "Does your employee handbook say what your company actually does in practice?",
    topic: "Handbook and policies",
    options: [
      { text: "Yes: it's current and matches how we operate", score: 1 },
      { text: "Mostly, but it hasn't been updated in a while", score: 2 },
      { text: "No: it's outdated, generic, or we don't have one", score: 3 },
    ],
    quickWin: "Read your handbook cover to cover and flag anything that no longer matches reality.",
    longerTermFix: "Get a handbook written for the states your people actually work in.",
  },
  {
    id: 4,
    question: "Are your payroll tax registrations current in every state you have people working?",
    topic: "Payroll and tax registrations",
    options: [
      { text: "Yes: registered everywhere we have employees", score: 1 },
      { text: "Mostly: we may be behind in a state or two", score: 2 },
      { text: "Unsure: we haven't checked since we started hiring remotely", score: 3 },
    ],
    quickWin: "List every state where someone currently works and confirm withholding and unemployment registration in each.",
    longerTermFix: "Have a payroll provider switch or transition project confirm every state registration is clean.",
  },
  {
    id: 5,
    question: "How well do your benefits eligibility, ACA, and COBRA processes hold up if checked?",
    topic: "Benefits, ACA, COBRA",
    options: [
      { text: "Well: eligibility, ACA reporting, and COBRA notices run on schedule", score: 1 },
      { text: "Reasonably, but timing has slipped before", score: 2 },
      { text: "Not well: we're not confident notices go out on time", score: 3 },
    ],
    quickWin: "Check your last two COBRA notices went out within the required window.",
    longerTermFix: "Have an HR audit test eligibility rules as written against how they're actually run.",
  },
  {
    id: 6,
    question: "How prepared are you to handle a leave or accommodation request today?",
    topic: "Leave and accommodations",
    options: [
      { text: "Prepared: we have a clear process for FMLA, state leave, and accommodations", score: 1 },
      { text: "Somewhat: we work it out case by case", score: 2 },
      { text: "Not prepared: we'd be figuring it out for the first time", score: 3 },
    ],
    quickWin: "Write down who owns a leave request from first contact to return-to-work.",
    longerTermFix: "Have fractional HR support build a leave and accommodation process before you need it.",
  },
  {
    id: 7,
    question: "How organized are your personnel records, retention, and privacy controls?",
    topic: "Records, retention, privacy",
    options: [
      { text: "Organized: files are separated and access is controlled", score: 1 },
      { text: "Mixed: some records are scattered across systems or people", score: 2 },
      { text: "Not organized: we couldn't quickly produce a clean personnel file", score: 3 },
    ],
    quickWin: "Confirm medical records are stored separately from general personnel files.",
    longerTermFix: "Have an HR audit map every record type against a retention schedule.",
  },
  {
    id: 8,
    question: "Are your workers' comp coverage and safety postings current in every state?",
    topic: "Safety and workers' comp",
    options: [
      { text: "Yes: coverage and postings are current everywhere we operate", score: 1 },
      { text: "Mostly, but we haven't double-checked recently", score: 2 },
      { text: "Not sure: we haven't reviewed this since we expanded", score: 3 },
    ],
    quickWin: "Photograph your current postings and compare them against the required list for your state.",
    longerTermFix: "Have a transitions or audit engagement confirm coverage and postings state by state.",
  },
  {
    id: 9,
    question: "How consistent is your offboarding: documentation, final pay, and references?",
    topic: "Offboarding and final pay",
    options: [
      { text: "Consistent: every separation follows the same documented steps", score: 1 },
      { text: "Mostly consistent, but it depends who handles it", score: 2 },
      { text: "Inconsistent: every separation looks different", score: 3 },
    ],
    quickWin: "Check your last five separation files for consistent documentation and final-pay timing.",
    longerTermFix: "Build a standard offboarding checklist tied to each state's final-pay deadline.",
  },
];

export type RiskBand = {
  band: "Low Risk" | "Elevated Risk" | "High Risk";
  badge: string;
  color: string;
  headline: string;
  body: string;
  ctaText: string;
};

export function getRiskBand(score: number): RiskBand {
  if (score <= 15) {
    return {
      band: "Low Risk",
      badge: "✅",
      color: "hsl(145, 63%, 49%)",
      headline: "Your HR fundamentals look solid.",
      body: "You're covering the basics across most of the nine areas an HR audit checks. Worth confirming with a proper audit before you scale further.",
      ctaText: "Want a written second opinion? A fixed-price HR audit checks all 41 items behind these nine areas.",
    };
  }
  if (score <= 21) {
    return {
      band: "Elevated Risk",
      badge: "⚠️",
      color: "hsl(43, 100%, 50%)",
      headline: "A few areas need a closer look.",
      body: "Your answers point to real gaps in at least a couple of the nine areas. These are usually fixable quickly once you know exactly where they are.",
      ctaText: "An HR audit will tell you exactly which of the 41 checks are a Pass, Watch, or Fail.",
    };
  }
  return {
    band: "High Risk",
    badge: "🚨",
    color: "hsl(0, 84%, 60%)",
    headline: "Several areas are exposed right now.",
    body: "Your answers suggest meaningful gaps across multiple areas, the kind that tend to surface at the worst time, like a claim, an audit, or a departure.",
    ctaText: "Start with a fixed-price HR audit so you know exactly what to fix first.",
  };
}
