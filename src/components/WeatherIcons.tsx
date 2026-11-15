import React from 'react';

interface WeatherIconProps {
  code?: number;
  isDay?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const GoogleWeatherIcon: React.FC<WeatherIconProps> = ({
  code = 0,
  isDay = true,
  className = '',
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    hero: 'w-16 h-16 sm:w-20 sm:h-20',
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  // Rain / Drizzle (51, 53, 55, 61, 63, 65, 80, 81, 82)
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
    return (
      <svg
        viewBox="0 0 64 64"
        className={`${currentSize} ${className} shrink-0 drop-shadow-md`}
        fill="none"
      >
        <defs>
          <linearGradient id="rainCloud" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="dropGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        {/* Soft Fluffy Cloud */}
        <path
          d="M46 36c5.5 0 10-4.5 10-10 0-5.2-4-9.5-9.2-9.9C45.2 9.5 39.2 4 32 4c-6.8 0-12.6 5-14.4 11.6C12.8 16.5 9 20.8 9 26c0 5.5 4.5 10 10 10h27z"
          fill="url(#rainCloud)"
        />
        {/* Blue Raindrop(s) */}
        <path
          d="M26 42c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.8 4-8 4-8s4 5.2 4 8z"
          fill="url(#dropGrad)"
        />
        <path
          d="M40 44c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.8 4-8 4-8s4 5.2 4 8z"
          fill="url(#dropGrad)"
        />
      </svg>
    );
  }

  // Thunderstorm (95, 96, 99)
  if (code >= 95) {
    return (
      <svg
        viewBox="0 0 64 64"
        className={`${currentSize} ${className} shrink-0 drop-shadow-md`}
        fill="none"
      >
        <defs>
          <linearGradient id="stormCloud" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        <path
          d="M46 32c5.5 0 10-4.5 10-10 0-5.2-4-9.5-9.2-9.9C45.2 5.5 39.2 0 32 0c-6.8 0-12.6 5-14.4 11.6C12.8 12.5 9 16.8 9 22c0 5.5 4.5 10 10 10h27z"
          fill="url(#stormCloud)"
        />
        {/* Lightning bolt */}
        <path
          d="M32 30l-6 14h8l-4 16 14-18h-8l6-12h-10z"
          fill="#facc15"
          stroke="#ca8a04"
          strokeWidth="1"
        />
      </svg>
    );
  }

  // Partly Cloudy at Night (!isDay and code 1, 2, 3)
  if (!isDay && (code === 1 || code === 2 || code === 3)) {
    return (
      <svg
        viewBox="0 0 64 64"
        className={`${currentSize} ${className} shrink-0 drop-shadow-md`}
        fill="none"
      >
        <defs>
          <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="nightCloud" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* Crescent Moon */}
        <path
          d="M34 8c-1.2 0-2.3.2-3.4.5 7.6 2.3 13.2 9.3 13.2 17.6 0 10.2-8.3 18.5-18.5 18.5-4.2 0-8.1-1.4-11.2-3.8C16.8 47.9 24.8 52 34 52c12.2 0 22-9.8 22-22S46.2 8 34 8z"
          fill="url(#moonGrad)"
        />
        {/* Foreground Cloud */}
        <path
          d="M40 46c4.4 0 8-3.6 8-8 0-4.1-3.2-7.6-7.3-7.9C39.4 24.8 34.6 20 28.8 20c-5.4 0-10 4-11.5 9.3C13.5 30 10.5 33.4 10.5 37.6c0 4.6 3.8 8.4 8.4 8.4h21.1z"
          fill="url(#nightCloud)"
          opacity="0.95"
        />
      </svg>
    );
  }

  // Clear Night (!isDay and code 0)
  if (!isDay && code === 0) {
    return (
      <svg
        viewBox="0 0 64 64"
        className={`${currentSize} ${className} shrink-0 drop-shadow-md`}
        fill="none"
      >
        <defs>
          <linearGradient id="pureMoon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
        </defs>
        <path
          d="M38 12c-1.5 0-2.9.2-4.3.7 9.5 2.9 16.5 11.6 16.5 22 0 12.7-10.3 23-23 23-5.2 0-10.1-1.7-14-4.8C16.6 60.8 26.6 66 38 66c15.5 0 28-12.5 28-28S53.5 12 38 12z"
          fill="url(#pureMoon)"
        />
        <circle cx="20" cy="18" r="1.5" fill="#fef08a" />
        <circle cx="14" cy="30" r="1.2" fill="#fef08a" />
      </svg>
    );
  }

  // Partly Cloudy Day (isDay and code 1, 2)
  if (isDay && (code === 1 || code === 2)) {
    return (
      <svg
        viewBox="0 0 64 64"
        className={`${currentSize} ${className} shrink-0 drop-shadow-md`}
        fill="none"
      >
        <defs>
          <linearGradient id="sunPart" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="dayCloud" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>
        {/* Sun Behind */}
        <circle cx="42" cy="22" r="12" fill="url(#sunPart)" />
        {/* Cloud in Front */}
        <path
          d="M44 48c5 0 9-4 9-9 0-4.6-3.6-8.5-8.3-8.9C43.3 24.1 38 19 31.5 19c-6.1 0-11.3 4.5-13 10.4C14.3 30.2 11 34.1 11 38.8c0 5.1 4.2 9.2 9.2 9.2h23.8z"
          fill="url(#dayCloud)"
        />
      </svg>
    );
  }

  // Overcast (code 3)
  if (code === 3) {
    return (
      <svg
        viewBox="0 0 64 64"
        className={`${currentSize} ${className} shrink-0 drop-shadow-md`}
        fill="none"
      >
        <defs>
          <linearGradient id="overcastCloud" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>
        <path
          d="M48 46c5.5 0 10-4.5 10-10 0-5.2-4-9.5-9.2-9.9C47.2 19.5 41.2 14 34 14c-6.8 0-12.6 5-14.4 11.6C14.8 26.5 11 30.8 11 36c0 5.5 4.5 10 10 10h27z"
          fill="url(#overcastCloud)"
        />
      </svg>
    );
  }

  // Sunny / Clear Day (default)
  return (
    <svg
      viewBox="0 0 64 64"
      className={`${currentSize} ${className} shrink-0 drop-shadow-md`}
      fill="none"
    >
      <defs>
        <linearGradient id="brightSun" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="16" fill="url(#brightSun)" />
      {/* Rays */}
      <g stroke="#f59e0b" strokeWidth="3" strokeLinecap="round">
        <line x1="32" y1="6" x2="32" y2="10" />
        <line x1="32" y1="54" x2="32" y2="58" />
        <line x1="6" y1="32" x2="10" y2="32" />
        <line x1="54" y1="32" x2="58" y2="32" />
        <line x1="13.6" y1="13.6" x2="16.4" y2="16.4" />
        <line x1="47.6" y1="47.6" x2="50.4" y2="50.4" />
        <line x1="13.6" y1="50.4" x2="16.4" y2="47.6" />
        <line x1="47.6" y1="16.4" x2="50.4" y2="13.6" />
      </g>
    </svg>
  );
};
