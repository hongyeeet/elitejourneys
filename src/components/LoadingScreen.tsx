import { useEffect, useState } from 'react';
import { Plane } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const interval = 20;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-12 relative">
          <svg
            viewBox="0 0 400 200"
            className="w-full max-w-md mx-auto"
            style={{ filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.3))' }}
          >
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#C9A045', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            <path
              d="M 20 100 Q 100 80, 200 100 T 380 100"
              stroke="#D4AF37"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              opacity="0.3"
            />

            {[...Array(8)].map((_, i) => (
              <circle
                key={i}
                cx={50 + i * 40}
                cy={100 + Math.sin(i * 0.8) * 20}
                r="3"
                fill="#D4AF37"
                opacity="0.4"
              >
                <animate
                  attributeName="opacity"
                  values="0.2;0.8;0.2"
                  dur="2s"
                  begin={`${i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            <g
              transform={`translate(${20 + (progress * 3.6)}, ${100 + Math.sin(progress * 0.1) * 15})`}
            >
              <path
                d="M -15,-5 L 15,-5 L 20,0 L 15,5 L -15,5 L -12,0 Z"
                fill="url(#goldGradient)"
                stroke="#D4AF37"
                strokeWidth="1"
              />
              <path
                d="M -5,-8 L -3,-5 L -5,-2"
                fill="url(#goldGradient)"
                stroke="#D4AF37"
                strokeWidth="1"
              />
              <path
                d="M -5,2 L -3,5 L -5,8"
                fill="url(#goldGradient)"
                stroke="#D4AF37"
                strokeWidth="1"
              />
              <circle cx="10" cy="0" r="1.5" fill="#000" />
            </g>
          </svg>

          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#D4AF37]/30 rounded-full"
              style={{
                left: `${20 + (progress * 3.6) + Math.random() * 20}px`,
                top: `${100 + Math.random() * 30}px`,
                animation: `fade-out 0.5s ease-out forwards`,
                animationDelay: `${Math.random() * 0.3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-2">Preparing Your Luxury Journey</h2>
          <p className="text-white/60 text-sm">Loading exclusive experiences...</p>
        </div>

        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#C9A045] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="mt-4 text-[#D4AF37] text-lg font-semibold">
          {Math.round(progress)}%
        </div>
      </div>

      <style>{`
        @keyframes fade-out {
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
