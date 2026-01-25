export function GoldHeart({ className = "", size = 60 }: { className?: string; size?: number }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-pulse-glow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#d97706', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d="M50,85 C50,85 20,60 20,40 C20,25 30,20 40,25 C45,27.5 47.5,32.5 50,37.5 C52.5,32.5 55,27.5 60,25 C70,20 80,25 80,40 C80,60 50,85 50,85 Z"
          fill="url(#goldGradient)"
          filter="url(#glow)"
          className="drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]"
        />
      </svg>
    </div>
  );
}
