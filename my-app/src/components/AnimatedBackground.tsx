import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Top right corner decorative elements */}
      <svg className="absolute top-0 right-0 w-[800px] h-[600px]" viewBox="0 0 800 600">
        {/* Abstract shapes */}
        <circle 
          cx="600" 
          cy="150" 
          r="4" 
          fill="#01347c" 
          className="animate-pulse"
        />
        <circle 
          cx="650" 
          cy="180" 
          r="3" 
          fill="#01347c" 
          className="animate-pulse delay-75"
        />
        <circle 
          cx="700" 
          cy="120" 
          r="5" 
          fill="#01347c" 
          className="animate-pulse delay-150"
        />

        {/* Animated paths */}
        <path 
          d="M550,100 Q650,150 750,50" 
          stroke="#01347c" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.1"
          className="animate-dash"
        />
        <path 
          d="M500,150 Q600,200 700,100" 
          stroke="#01347c" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.1"
          className="animate-dash delay-100"
        />

        {/* Background grid */}
        <pattern 
          id="grid" 
          x="0" 
          y="0" 
          width="40" 
          height="40" 
          patternUnits="userSpaceOnUse"
        >
          <rect 
            width="40" 
            height="40" 
            fill="none" 
            stroke="#01347c" 
            strokeWidth="0.5" 
            opacity="0.05"
          />
        </pattern>
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#grid)" 
          opacity="0.1"
        />

        {/* Dynamic floating elements */}
        <g className="animate-float">
          <rect 
            x="650" 
            y="200" 
            width="20" 
            height="20" 
            fill="#01347c" 
            opacity="0.1" 
            transform="rotate(45)"
          />
        </g>
        <g className="animate-float-delayed">
          <rect 
            x="700" 
            y="150" 
            width="15" 
            height="15" 
            fill="#01347c" 
            opacity="0.1" 
            transform="rotate(45)"
          />
        </g>
      </svg>

      {/* Bottom left corner decorative elements */}
      <svg className="absolute bottom-0 left-0 w-[600px] h-[400px]" viewBox="0 0 600 400">
        <path 
          d="M0,400 Q100,300 200,350 T400,300" 
          stroke="#01347c" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.1"
          className="animate-wave"
        />
        <path 
          d="M0,350 Q100,250 200,300 T400,250" 
          stroke="#01347c" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.1"
          className="animate-wave delay-150"
        />
      </svg>

      {/* Add new geometric shapes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080">
        {/* Floating circles */}
        {[...Array(10)].map((_, i) => (
          <circle
            key={i}
            cx={`${(i + 1) * 10}%`}
            cy={`${(i % 3 + 1) * 20}%`}
            r="4"
            fill="#01347c"
            opacity="0.15"
            className={`animate-pulse delay-${i * 100}`}
          >
            <animate
              attributeName="r"
              values="4;6;4"
              dur={`${3 + i}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Flowing lines */}
        <path
          d="M100,100 C300,50 400,150 600,100 S800,150 1000,100"
          stroke="#01347c"
          strokeWidth="1"
          fill="none"
          opacity="0.1"
          strokeDasharray="5,5"
          className="animate-dash"
        />

        {/* Rotating geometric shapes */}
        <g transform="translate(1200, 400)" className="animate-rotate-slow">
          <rect
            x="-25"
            y="-25"
            width="50"
            height="50"
            fill="#01347c"
            opacity="0.05"
          />
        </g>
      </svg>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30" />
    </div>
  );
};

export default AnimatedBackground;
