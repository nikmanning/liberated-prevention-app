import React from 'react';
import { ArrowRight } from 'lucide-react';

interface OnboardingScreenProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onSkip: () => void;
}

const onboardingData = [
  {
    title: "Meet CSAC",
    subtitle: "Chicago's voice for prevention",
    description: "Discover how we're reimagining prevention work through community-centered approaches and innovative measurement.",
    illustration: "🏙️"
  },
  {
    title: "Counter-Metrics",
    subtitle: "Measuring what matters",
    description: "See how we track community strength, trust, and belonging instead of just traditional service metrics.",
    illustration: "📊"
  },
  {
    title: "Budget Tools",
    subtitle: "Allocate for impact",
    description: "Experiment with funding approaches and see how different investments affect community outcomes.",
    illustration: "💰"
  },
  {
    title: "Impact Stories",
    subtitle: "Real prevention work",
    description: "Explore case studies showing how community-led solutions create lasting change.",
    illustration: "🌟"
  },
  {
    title: "Systems Vision",
    subtitle: "Connected prevention",
    description: "See our vision for integrated systems that maintain privacy while enabling collaboration.",
    illustration: "🔗"
  },
  {
    title: "Community Voices",
    subtitle: "Stories of change",
    description: "Hear directly from youth, providers, and funders about prevention work that works.",
    illustration: "🎤"
  }
];

export function OnboardingScreen({ currentStep, totalSteps, onNext, onSkip }: OnboardingScreenProps) {
  const data = onboardingData[currentStep - 1];
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with skip button */}
      <div className="flex justify-end p-4">
        <button
          onClick={onSkip}
          className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
        >
          Skip
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        {/* Illustration */}
        <div className="w-32 h-32 bg-gradient-to-br from-indigo-50 to-teal-50 rounded-full flex items-center justify-center mb-8 border border-slate-100">
          <span className="text-6xl">{data.illustration}</span>
        </div>

        {/* Content */}
        <div className="text-center space-y-4 max-w-sm">
          <h1 className="text-2xl font-bold text-[#212221]">
            <span className="text-[#212221]">{data.title.split(' ')[0]}</span>
            {data.title.split(' ').slice(1).join(' ')}
          </h1>
          <p className="text-lg font-medium text-slate-700">
            {data.subtitle}
          </p>
          <p className="text-slate-600 leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>

      {/* Progress and navigation */}
      <div className="p-6 space-y-6">
        {/* Progress dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index < currentStep
                  ? 'bg-teal-500'
                  : index === currentStep - 1
                  ? 'bg-teal-300'
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={onNext}
          className="w-full bg-[#F27046] text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-[#E55A2E] transition-colors"
        >
          <span>{isLastStep ? 'Get Started' : 'Next'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Step indicator */}
        <div className="text-center text-sm text-slate-500">
          {currentStep} of {totalSteps}
        </div>
      </div>
    </div>
  );
}