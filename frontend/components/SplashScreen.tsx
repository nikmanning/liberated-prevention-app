import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes logoScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-logo {
          animation: logoScale 1s ease-out forwards;
          opacity: 0;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-900 {
          animation-delay: 0.9s;
        }
      `}</style>
      
      <div 
        className={`fixed inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-500 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="max-w-md mx-auto text-center space-y-8 px-6">
          {/* Logo */}
          <div className="animate-logo">
            <div className="w-20 h-20 mx-auto mb-6">
              <img 
                src="/logo.png" 
                alt="Liberated Logo"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* App Name */}
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-[#212221] animate-fade-in-up delay-300">
              Liberated
            </h1>
            <p className="text-sm text-slate-500 font-medium animate-fade-in-up delay-600">
              by Chicago Strategic Action Council
            </p>
          </div>

          {/* Tagline */}
          <p className="text-slate-600 text-sm leading-relaxed animate-fade-in-up delay-900">
            Reimagining Prevention in Chicago
          </p>
        </div>
      </div>
    </>
  );
}