import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500); // Allow fade out animation to complete
    }, 2500); // Show splash for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .bounce-delay-0 {
          animation-delay: 0s;
        }

        .bounce-delay-200 {
          animation-delay: 0.2s;
        }

        .bounce-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
      
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-indigo-700 via-indigo-600 to-teal-500 flex items-center justify-center z-50 transition-opacity duration-500 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="text-center space-y-8">
          {/* Logo with animation */}
          <div className="animate-pulse">
            <div className="w-24 h-24 mx-auto mb-6 transform transition-all duration-1000 animate-bounce">
              <img 
                src="/logo.png" 
                alt="Liberated Logo"
                className="w-full h-full filter brightness-0 invert"
              />
            </div>
          </div>

          {/* App Name with staggered animation */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-white animate-fade-in-up animation-delay-300">
              Liberated
            </h1>
            <p className="text-xl text-indigo-100 font-medium animate-fade-in-up animation-delay-600">
              Prevention App
            </p>
            <p className="text-sm text-indigo-200 animate-fade-in-up animation-delay-900">
              by Chicago Strategic Action Council
            </p>
          </div>

          {/* Loading indicator */}
          <div className="flex justify-center animate-fade-in-up animation-delay-1200">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce bounce-delay-0"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce bounce-delay-200"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce bounce-delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}