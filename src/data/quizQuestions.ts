export interface QuizOption {
  text: string;
  score: 1 | 2 | 3;
}

export interface QuizQuestion {
  id: number;
  question: string;
  topic: string;
  options: [QuizOption, QuizOption, QuizOption];
  quickWin: string;
  longerTermFix: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How often does HR admin pull you away from running your business?",
    topic: "HR Admin Distraction",
    options: [
      { text: "Rarely or never", score: 1 },
      { text: "A few times a week", score: 2 },
      { text: "Almost every day", score: 3 },
    ],
    quickWin: "Block two 30-minute windows per week for HR tasks instead of letting them interrupt your day.",
    longerTermFix: "Outsource day-to-day HR admin to a PEO so you can focus on leading your business.",
  },
  {
    id: 2,
    question: "How confident are you that your HR costs are competitive right now?",
    topic: "HR Cost Confidence",
    options: [
      { text: "Very confident: we've benchmarked recently", score: 1 },
      { text: "Somewhat confident: but it's been a while", score: 2 },
      { text: "Not confident at all: it feels like a black box", score: 3 },
    ],
    quickWin: "Ask your current vendor for a full cost breakdown this week.",
    longerTermFix: "Have Pillar run a free market comparison to see if you're overpaying.",
  },
  {
    id: 3,
    question: "How easy is it for your employees to get HR questions answered quickly?",
    topic: "Employee HR Access",
    options: [
      { text: "Very easy: we have a great system", score: 1 },
      { text: "It takes a while but they get answers", score: 2 },
      { text: "It's a mess: people don't know who to ask", score: 3 },
    ],
    quickWin: "Create a shared FAQ document answering the 10 most common HR questions.",
    longerTermFix: "Implement a PEO with a dedicated employee support line for instant answers.",
  },
  {
    id: 4,
    question: "When did you last formally benchmark your HR vendor or PEO costs?",
    topic: "Cost Benchmarking",
    options: [
      { text: "Within the last 12 months", score: 1 },
      { text: "1 to 3 years ago", score: 2 },
      { text: "Never or I'm not sure", score: 3 },
    ],
    quickWin: "Request three competitive quotes from PEO brokers this month.",
    longerTermFix: "Schedule an annual PEO market review with Pillar to keep costs optimized.",
  },
  {
    id: 5,
    question: "How well does your current HR setup scale with your company's growth?",
    topic: "HR Scalability",
    options: [
      { text: "Very well: it grows with us", score: 1 },
      { text: "Somewhat: we're starting to feel the strain", score: 2 },
      { text: "It's already breaking down", score: 3 },
    ],
    quickWin: "Identify the top 3 HR processes that break when you add new employees.",
    longerTermFix: "Move to a PEO platform built to scale with businesses your size.",
  },
  {
    id: 6,
    question: "How many hours per week does your leadership team spend on HR-related paperwork or admin?",
    topic: "Leadership Time Drain",
    options: [
      { text: "Under 2 hours", score: 1 },
      { text: "2 to 5 hours", score: 2 },
      { text: "More than 5 hours", score: 3 },
    ],
    quickWin: "Track leadership HR time this week to quantify the true cost.",
    longerTermFix: "Offload admin to a PEO and redirect those hours to revenue-generating work.",
  },
  {
    id: 7,
    question: "How satisfied are your employees with your current benefits package?",
    topic: "Employee Benefits Satisfaction",
    options: [
      { text: "Very satisfied: we hear positive feedback", score: 1 },
      { text: "Mixed: some complaints but mostly fine", score: 2 },
      { text: "Dissatisfied: it's a retention issue", score: 3 },
    ],
    quickWin: "Run a quick anonymous benefits satisfaction survey this week.",
    longerTermFix: "Use a PEO's pooled plans to offer benefits a firm your size cannot buy alone.",
  },
  {
    id: 8,
    question: "How clear are you on exactly what you're paying your PEO or HR vendor and why?",
    topic: "HR Cost Transparency",
    options: [
      { text: "Very clear: I can explain every line item", score: 1 },
      { text: "Somewhat clear: I understand most of it", score: 2 },
      { text: "Not clear at all: I just pay the invoice", score: 3 },
    ],
    quickWin: "Request an itemized invoice breakdown from your vendor today.",
    longerTermFix: "Work with Pillar to audit your current agreement and eliminate hidden fees.",
  },
  {
    id: 9,
    question: "When your company adds a new employee, how smooth is the onboarding process?",
    topic: "Employee Onboarding",
    options: [
      { text: "Very smooth: it's almost automated", score: 1 },
      { text: "Manageable but takes effort", score: 2 },
      { text: "Stressful and inconsistent every time", score: 3 },
    ],
    quickWin: "Create a simple onboarding checklist to standardize the first-week experience.",
    longerTermFix: "Use a PEO's onboarding platform to automate paperwork and training.",
  },
  {
    id: 10,
    question: "How confident are you that your business is fully HR compliant right now?",
    topic: "HR Compliance",
    options: [
      { text: "Very confident: we stay on top of it", score: 1 },
      { text: "Mostly confident but there are gaps I worry about", score: 2 },
      { text: "Not confident: compliance keeps me up at night", score: 3 },
    ],
    quickWin: "Run a quick compliance self-audit on your top 5 HR risk areas.",
    longerTermFix: "Partner with a PEO that provides built-in compliance monitoring and support.",
  },
  {
    id: 11,
    question: "How would you describe the relationship with your current HR vendor or PEO?",
    topic: "Vendor Relationship",
    options: [
      { text: "Great: they're proactive and responsive", score: 1 },
      { text: "Okay: they do the basics but nothing more", score: 2 },
      { text: "Poor: I feel like just an account number", score: 3 },
    ],
    quickWin: "Schedule a relationship review call with your current vendor this week.",
    longerTermFix: "Let Pillar match you with a PEO that treats you like a partner, not a number.",
  },
  {
    id: 12,
    question: "How much visibility do you have into your HR data and reporting?",
    topic: "HR Data Visibility",
    options: [
      { text: "Full visibility: I can pull reports anytime", score: 1 },
      { text: "Some visibility but it takes effort to get data", score: 2 },
      { text: "Almost none: it's a black box", score: 3 },
    ],
    quickWin: "Ask your vendor for a sample analytics dashboard or monthly report.",
    longerTermFix: "Switch to a PEO with real-time reporting and data dashboards.",
  },
  {
    id: 13,
    question: "How often do HR issues cause stress or conflict on your leadership team?",
    topic: "Leadership HR Stress",
    options: [
      { text: "Rarely: HR runs quietly in the background", score: 1 },
      { text: "Occasionally: maybe once a month", score: 2 },
      { text: "Regularly: it's an ongoing source of tension", score: 3 },
    ],
    quickWin: "Identify the recurring HR issue causing the most friction and document it.",
    longerTermFix: "Remove HR from your leadership agenda entirely by partnering with a PEO.",
  },
  {
    id: 14,
    question: "If your HR vendor disappeared tomorrow, how prepared would your team be?",
    topic: "HR Vendor Dependency",
    options: [
      { text: "Very prepared: we have systems and backup plans", score: 1 },
      { text: "Somewhat prepared: it would be rough but manageable", score: 2 },
      { text: "Not at all: it would be a crisis", score: 3 },
    ],
    quickWin: "Document your critical HR processes and vendor access credentials this week.",
    longerTermFix: "Work with Pillar to build a resilient HR setup with clear transition plans.",
  },
  {
    id: 15,
    question: "Overall, how would you describe the feeling of managing HR in your business right now?",
    topic: "Overall HR Feeling",
    options: [
      { text: "Under control: it runs itself", score: 1 },
      { text: "Manageable but draining", score: 2 },
      { text: "It's one of my biggest headaches", score: 3 },
    ],
    quickWin: "Write down the three HR tasks that drain you most: awareness is the first step.",
    longerTermFix: "Let Pillar design an HR solution that takes the headache off your plate entirely.",
  },
];

export type TierInfo = {
  tier: 1 | 2 | 3;
  label: string;
  badge: string;
  color: string;
  headline: string;
  body: string;
  ctaText: string;
  painPointCount: number;
};

export function getTierInfo(score: number): TierInfo {
  if (score <= 24) {
    return {
      tier: 1,
      label: "HR Healthy",
      badge: "✅",
      color: "hsl(145, 63%, 49%)",
      headline: "Your HR setup is in good shape.",
      body: "You've clearly put thought into how HR runs in your business. Most of your systems are working and your team has solid foundations. That said, there's always room to optimize, especially as you grow.",
      ctaText: "Want a free second opinion from a PEO expert? Book a 20-minute call with Pillar: no pitch, just perspective.",
      painPointCount: 2,
    };
  }
  if (score <= 34) {
    return {
      tier: 2,
      label: "Early Headache",
      badge: "⚠️",
      color: "hsl(43, 100%, 50%)",
      headline: "Your HR is showing real warning signs.",
      body: "You're managing it, but it's costing you time, money, and energy you could be putting into your business. The good news: these problems are fixable, and faster than you think.",
      ctaText: "Let Pillar take a look. A free 30-minute HR review could save you thousands and hours every month.",
      painPointCount: 3,
    };
  }
  return {
    tier: 3,
    label: "Full Headache",
    badge: "🚨",
    color: "hsl(0, 84%, 60%)",
    headline: "Your HR setup is actively costing you.",
    body: "Your score suggests HR is one of the biggest drains on your business right now, in time, money, and leadership focus. You don't have to keep running it this way.",
    ctaText: "If HR is taking your focus away from your people and your business, then talking to Pillar is the right decision. Book your free call today.",
    painPointCount: 4,
  };
}
