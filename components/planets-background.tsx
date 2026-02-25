'use client';

export function PlanetsBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Stars background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Static stars */}
        <circle cx="150" cy="100" r="1.5" fill="#ffffff" opacity="0.8" />
        <circle cx="200" cy="150" r="1" fill="#ffffff" opacity="0.6" />
        <circle cx="300" cy="80" r="1.2" fill="#ffffff" opacity="0.7" />
        <circle cx="450" cy="200" r="1.5" fill="#ffffff" opacity="0.8" />
        <circle cx="600" cy="120" r="1" fill="#ffffff" opacity="0.6" />
        <circle cx="750" cy="180" r="1.3" fill="#ffffff" opacity="0.7" />
        <circle cx="900" cy="100" r="1.5" fill="#ffffff" opacity="0.8" />
        <circle cx="1050" cy="220" r="1.2" fill="#ffffff" opacity="0.6" />
        <circle cx="100" cy="400" r="1" fill="#ffffff" opacity="0.7" />
        <circle cx="350" cy="500" r="1.5" fill="#ffffff" opacity="0.8" />
        <circle cx="550" cy="450" r="1.2" fill="#ffffff" opacity="0.6" />
        <circle cx="800" cy="550" r="1" fill="#ffffff" opacity="0.7" />
        <circle cx="1100" cy="480" r="1.3" fill="#ffffff" opacity="0.8" />
        <circle cx="250" cy="700" r="1.5" fill="#ffffff" opacity="0.6" />
        <circle cx="700" cy="750" r="1.2" fill="#ffffff" opacity="0.7" />
        <circle cx="950" cy="680" r="1" fill="#ffffff" opacity="0.8" />

        {/* Orbital system 1 - Center at (400, 300) */}
        <g>
          {/* Orbital path 1 */}
          <circle cx="400" cy="300" r="120" fill="none" stroke="rgba(100, 150, 255, 0.1)" strokeWidth="1" />
          {/* Planet 1 - Blue planet */}
          <g className="animate-orbit-1">
            <circle cx="520" cy="300" r="16" fill="url(#bluePlanet)" filter="url(#glow)" />
          </g>

          {/* Orbital path 2 */}
          <circle cx="400" cy="300" r="200" fill="none" stroke="rgba(150, 100, 255, 0.08)" strokeWidth="1" />
          {/* Planet 2 - Purple planet */}
          <g className="animate-orbit-2">
            <circle cx="600" cy="300" r="12" fill="url(#purplePlanet)" filter="url(#glow)" />
          </g>

          {/* Orbital path 3 */}
          <circle cx="400" cy="300" r="280" fill="none" stroke="rgba(255, 150, 100, 0.08)" strokeWidth="1" />
          {/* Planet 3 - Orange planet */}
          <g className="animate-orbit-3">
            <circle cx="680" cy="300" r="10" fill="url(#orangePlanet)" filter="url(#glow)" />
          </g>

          {/* Central star */}
          <circle cx="400" cy="300" r="8" fill="url(#sunGradient)" filter="url(#glow)" />
        </g>

        {/* Orbital system 2 - Center at (900, 500) */}
        <g>
          {/* Orbital path 1 */}
          <circle cx="900" cy="500" r="100" fill="none" stroke="rgba(100, 200, 255, 0.1)" strokeWidth="1" />
          {/* Planet 1 - Cyan planet */}
          <g className="animate-orbit-2-1">
            <circle cx="1000" cy="500" r="14" fill="url(#cyanPlanet)" filter="url(#glow)" />
          </g>

          {/* Orbital path 2 */}
          <circle cx="900" cy="500" r="170" fill="none" stroke="rgba(200, 100, 255, 0.08)" strokeWidth="1" />
          {/* Planet 2 - Pink planet */}
          <g className="animate-orbit-2-2">
            <circle cx="1070" cy="500" r="11" fill="url(#pinkPlanet)" filter="url(#glow)" />
          </g>

          {/* Central star */}
          <circle cx="900" cy="500" r="6" fill="url(#sunGradient2)" filter="url(#glow)" />
        </g>

        {/* Gradient definitions */}
        <defs>
          <radialGradient id="bluePlanet">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1e40af" />
          </radialGradient>
          <radialGradient id="purplePlanet">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#6d28d9" />
          </radialGradient>
          <radialGradient id="orangePlanet">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </radialGradient>
          <radialGradient id="cyanPlanet">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0369a1" />
          </radialGradient>
          <radialGradient id="pinkPlanet">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#831843" />
          </radialGradient>
          <radialGradient id="sunGradient">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
          <radialGradient id="sunGradient2">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#ca8a04" />
          </radialGradient>
        </defs>
      </svg>

      {/* Glow effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/20" />
    </div>
  );
}
