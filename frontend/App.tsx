import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingStart } from './components/OnboardingStart';
import { OnboardingScreen } from './components/OnboardingScreen';
import { Navigation } from './components/Navigation';
import { Origin } from './components/screens/Origin';
import { Pulse } from './components/screens/Pulse';
import { Compass } from './components/screens/Compass';
import { Lens } from './components/screens/Lens';
import { Flow } from './components/screens/Flow';
import { Roots } from './components/screens/Roots';

function AppHeader() {
  const location = useLocation();
  
  const getTabDisplayName = () => {
    switch (location.pathname) {
      case '/origin':
        return 'Origin';
      case '/pulse':
        return 'Pulse';
      case '/compass':
        return 'Compass';
      case '/lens':
        return 'Lens';
      case '/flow':
        return 'Flow';
      case '/roots':
        return 'Roots';
      default:
        return 'Origin';
    }
  };

  return (
    <header className="bg-white relative overflow-hidden border-b border-slate-100 shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <div className="h-10 flex items-center justify-center">
            <img 
              src="/logo-final.png" 
              alt="Liberated Logo"
              className="h-10 w-auto"
            />
          </div>

        </div>
        
        <div className="bg-[#212221] text-white px-4 py-2 rounded-full font-semibold text-sm">
          {getTabDisplayName()}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-[#F27046]/10 via-[#F27046]/5 to-transparent rounded-bl-[3rem]"></div>
    </header>
  );
}

function MainApp() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative">
      <AppHeader />
      <div className="pb-20">
        <Routes>
          <Route path="/" element={<Navigate to="/origin" replace />} />
          <Route path="/origin" element={<Origin />} />
          <Route path="/pulse" element={<Pulse />} />
          <Route path="/compass" element={<Compass />} />
          <Route path="/lens" element={<Lens />} />
          <Route path="/flow" element={<Flow />} />
          <Route path="/roots" element={<Roots />} />
        </Routes>
      </div>
      <Navigation />
    </div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboardingStart, setShowOnboardingStart] = useState(false);
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(1);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setShowOnboardingStart(true);
  };

  const handleStartTour = () => {
    setShowOnboardingStart(false);
    setIsOnboarding(true);
    setOnboardingStep(1);
  };

  const handleSkipOnboarding = () => {
    setShowOnboardingStart(false);
    setIsOnboarding(false);
  };

  const handleOnboardingNext = () => {
    if (onboardingStep < 6) {
      setOnboardingStep(onboardingStep + 1);
    } else {
      // Complete onboarding
      setIsOnboarding(false);
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  if (showOnboardingStart) {
    return (
      <OnboardingStart 
        onStartTour={handleStartTour}
        onSkip={handleSkipOnboarding}
      />
    );
  }

  if (isOnboarding) {
    return (
      <OnboardingScreen
        currentStep={onboardingStep}
        totalSteps={6}
        onNext={handleOnboardingNext}
        onSkip={handleSkipOnboarding}
      />
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Router>
        <MainApp />
      </Router>
    </div>
  );
}
