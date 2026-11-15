import React from 'react';

interface WeatherFrogProps {
  conditionCode?: number;
  isRainy?: boolean;
}

export const WeatherFrog: React.FC<WeatherFrogProps> = ({ isRainy = true }) => {
  return (
    <div className="relative w-full h-36 sm:h-44 rounded-2xl overflow-hidden shadow-inner select-none">
      {/* Sky Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#152331] via-[#1b3447] to-[#1e4852]" />

      <svg
        viewBox="0 0 500 180"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#334155" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="hillGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e5f52" />
            <stop offset="100%" stopColor="#133e36" />
          </linearGradient>
          <linearGradient id="hillGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#0a4641" />
          </linearGradient>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="frogGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>

        {/* Distant Rolling Hills */}
        <path
          d="M0,135 Q120,95 240,125 T500,115 L500,180 L0,180 Z"
          fill="url(#hillGrad1)"
          opacity="0.8"
        />

        {/* Foreground Rolling Hills */}
        <path
          d="M0,145 Q160,115 320,145 T500,135 L500,180 L0,180 Z"
          fill="url(#hillGrad2)"
        />

        {/* Water Pool / Puddle */}
        <ellipse cx="210" cy="162" rx="140" ry="14" fill="url(#waterGrad)" />
        {/* Puddle Ripple Rings */}
        <ellipse cx="210" cy="162" rx="60" ry="6" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
        <ellipse cx="180" cy="164" rx="25" ry="3.5" fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity="0.5" />
        <ellipse cx="250" cy="160" rx="30" ry="4" fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity="0.5" />

        {/* Stylized Rain Clouds in the Sky */}
        <g opacity="0.85">
          <ellipse cx="90" cy="30" rx="48" ry="18" fill="url(#cloudGrad)" />
          <ellipse cx="130" cy="22" rx="36" ry="16" fill="url(#cloudGrad)" />
          <ellipse cx="60" cy="26" rx="32" ry="14" fill="url(#cloudGrad)" />

          <ellipse cx="240" cy="28" rx="60" ry="20" fill="url(#cloudGrad)" />
          <ellipse cx="290" cy="20" rx="44" ry="18" fill="url(#cloudGrad)" />
          <ellipse cx="195" cy="24" rx="40" ry="16" fill="url(#cloudGrad)" />

          <ellipse cx="400" cy="32" rx="55" ry="19" fill="url(#cloudGrad)" />
          <ellipse cx="450" cy="24" rx="42" ry="17" fill="url(#cloudGrad)" />
          <ellipse cx="360" cy="28" rx="38" ry="15" fill="url(#cloudGrad)" />
        </g>

        {/* Rain Streaks */}
        {isRainy && (
          <g stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" opacity="0.55">
            <line x1="45" y1="45" x2="35" y2="70" />
            <line x1="95" y1="52" x2="85" y2="78" />
            <line x1="140" y1="42" x2="130" y2="68" />
            <line x1="175" y1="55" x2="165" y2="82" />
            <line x1="280" y1="46" x2="270" y2="72" />
            <line x1="330" y1="58" x2="320" y2="85" />
            <line x1="375" y1="48" x2="365" y2="74" />
            <line x1="425" y1="56" x2="415" y2="82" />
            <line x1="465" y1="44" x2="455" y2="70" />

            <line x1="70" y1="85" x2="60" y2="112" />
            <line x1="115" y1="92" x2="105" y2="120" />
            <line x1="150" y1="82" x2="140" y2="108" />
            <line x1="295" y1="88" x2="285" y2="116" />
            <line x1="350" y1="84" x2="340" y2="112" />
            <line x1="400" y1="94" x2="390" y2="122" />
            <line x1="445" y1="86" x2="435" y2="114" />
          </g>
        )}

        {/* Cute Google Weather Frog (Centered at x=210, y=142) */}
        <g transform="translate(200, 105)">
          {/* Leaf Umbrella Stem */}
          <path
            d="M8,44 Q6,28 8,14"
            fill="none"
            stroke="#15803d"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Leaf Umbrella Top */}
          <path
            d="M-22,14 Q8,-12 38,14 Q8,4 -22,14 Z"
            fill="url(#leafGrad)"
            stroke="#166534"
            strokeWidth="1.5"
          />
          {/* Leaf vein */}
          <path d="M-15,13 Q8,0 32,13" fill="none" stroke="#86efac" strokeWidth="1" opacity="0.6" />

          {/* Frog Body */}
          <ellipse cx="8" cy="46" rx="14" ry="12" fill="url(#frogGrad)" />
          {/* Frog Tummy */}
          <ellipse cx="8" cy="48" rx="8.5" ry="7.5" fill="#bbf7d0" />

          {/* Frog Left Eye */}
          <circle cx="1" cy="35" r="4.5" fill="url(#frogGrad)" />
          <circle cx="1" cy="35" r="2.2" fill="#0f172a" />
          <circle cx="0.2" cy="34" r="0.8" fill="#ffffff" />

          {/* Frog Right Eye */}
          <circle cx="15" cy="35" r="4.5" fill="url(#frogGrad)" />
          <circle cx="15" cy="35" r="2.2" fill="#0f172a" />
          <circle cx="14.2" cy="34" r="0.8" fill="#ffffff" />

          {/* Frog Smile */}
          <path
            d="M3,42 Q8,46 13,42"
            fill="none"
            stroke="#15803d"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          {/* Rosy Cheeks */}
          <circle cx="2" cy="43" r="1.5" fill="#f87171" opacity="0.7" />
          <circle cx="14" cy="43" r="1.5" fill="#f87171" opacity="0.7" />

          {/* Frog Hands holding the stem */}
          <ellipse cx="6" cy="45" rx="2.5" ry="2" fill="#22c55e" />
          <ellipse cx="10" cy="45" rx="2.5" ry="2" fill="#22c55e" />

          {/* Frog Feet */}
          <ellipse cx="-4" cy="55" rx="4.5" ry="2.5" fill="#15803d" />
          <ellipse cx="20" cy="55" rx="4.5" ry="2.5" fill="#15803d" />
        </g>
      </svg>
    </div>
  );
};
