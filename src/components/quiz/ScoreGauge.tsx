import { useEffect, useState } from "react";

interface ScoreGaugeProps {
  score: number;
  minScore?: number;
  maxScore?: number;
}

const ScoreGauge = ({ score, minScore = 15, maxScore = 45 }: ScoreGaugeProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const normalised = (score - minScore) / (maxScore - minScore); // 0–1
  const angle = -90 + normalised * 180; // -90 (left) to 90 (right)

  // Arc params
  const cx = 150;
  const cy = 140;
  const r = 110;

  // Semicircle arc path (left to right)
  const arcPath = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;

  return (
    <div className="mx-auto w-full max-w-xs">
      <svg viewBox="0 0 300 170" className="w-full">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(145, 63%, 49%)" />
            <stop offset="50%" stopColor="hsl(43, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(0, 84%, 60%)" />
          </linearGradient>
        </defs>

        {/* Background arc */}
        <path
          d={arcPath}
          fill="none"
          stroke="hsl(0, 0%, 90%)"
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* Coloured arc */}
        <path
          d={arcPath}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* Needle */}
        <g
          style={{
            transform: `rotate(${animated ? angle : -90}deg)`,
            transformOrigin: `${cx}px ${cy}px`,
            transition: "transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <line
            x1={cx}
            y1={cy}
            x2={cx}
            y2={cy - r + 15}
            stroke="hsl(var(--foreground))"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx={cx} cy={cy} r="6" fill="hsl(var(--foreground))" />
        </g>

        {/* Labels */}
        <text x={cx - r - 5} y={cy + 20} textAnchor="middle" className="fill-muted-foreground text-[11px]">
          15
        </text>
        <text x={cx + r + 5} y={cy + 20} textAnchor="middle" className="fill-muted-foreground text-[11px]">
          45
        </text>
      </svg>
    </div>
  );
};

export default ScoreGauge;
