import React from 'react';
import { ArrowRight } from 'lucide-react';

interface OnboardingStartProps {
  onStartTour: () => void;
  onSkip: () => void;
}

export function OnboardingStart({ onStartTour, onSkip }: OnboardingStartProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md mx-auto text-center space-y-8">
        {/* Skip button */}
        <div className="flex justify-end">
          <button
            onClick={onSkip}
            className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            Skip
          </button>
        </div>

        {/* Logo */}
        <div className="w-20 h-20 mx-auto">
          <img 
            src="/logo_small.png" 
            alt="Liberated Logo"
            className="w-full h-full"
          />
        </div>

        {/* Purpose blurb */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-slate-900">
            Welcome to Liberated
          </h1>
          <div className="space-y-2 text-slate-600 leading-relaxed">
            <p>
              Discover how CSAC is reimagining prevention work in Chicago through 
              community-centered approaches and innovative measurement.
            </p>
            <p>
              Explore real stories, interactive tools, and the vision for 
              connected prevention systems that put community voices first.
            </p>
          </div>
        </div>

        {/* Tour button */}
        <button
          onClick={onStartTour}
          className="w-full bg-indigo-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-indigo-800 transition-colors"
        >
          <span>Start the 3-minute tour</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Alternative action */}
        <button
          onClick={onSkip}
          className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
        >
          Or explore on your own
        </button>
      </div>
    </div>
  );
}