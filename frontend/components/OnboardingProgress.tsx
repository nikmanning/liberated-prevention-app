import React from 'react';

interface OnboardingProgressProps {
  currentStep: number;
  totalSteps: number;
  onSkip: () => void;
}

export function OnboardingProgress({ currentStep, totalSteps, onSkip }: OnboardingProgressProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 p-4 z-50">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Progress dots */}
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index < currentStep
                  ? 'bg-[#212221]'
                  : index === currentStep
                  ? 'bg-[#212221]'
                  : 'bg-[#212221]/20'
              }`}
            />
          ))}
        </div>

        {/* Progress text */}
        <div className="text-xs text-slate-500 font-medium">
          {currentStep} of {totalSteps}
        </div>

        {/* Skip button */}
        <button
          onClick={onSkip}
          className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
        >
          Skip
        </button>
      </div>
    </div>
  );
}