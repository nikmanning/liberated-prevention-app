import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingStart } from './components/OnboardingStart';
import { OnboardingProgress } from './components/OnboardingProgress';
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
    <header className="bg-white relative overflow-hidden border-b border-slate-100">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Liberated Logo"
              className="w-10 h-10"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Liberated</h1>
            <p className="text-xs text-slate-500 font-medium">by CSAC</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
          {getTabDisplayName()}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-teal-500/10 via-teal-400/5 to-transparent rounded-bl-[3rem]"></div>
    </header>
  );
}

function MainApp({ isOnboarding, onboardingStep, onSkipOnboarding }: { 
  isOnboarding: boolean; 
  onboardingStep: number; 
  onSkipOnboarding: () => void;
}) {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative">
      {isOnboarding && (
        <OnboardingProgress 
          currentStep={onboardingStep} 
          totalSteps={6} 
          onSkip={onSkipOnboarding}
        />
      )}
      <div className={isOnboarding ? 'pt-16' : ''}>
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
    </div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboardingStart, setShowOnboardingStart] = useState(false);
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [visitedScreens, setVisitedScreens] = useState<Set<string>>(new Set());

  const handleSplashComplete = () => {
    setShowSplash(false);
    
    // Check if user has completed onboarding before
    const hasCompletedOnboarding = localStorage.getItem('liberated-onboarding-completed');
    if (!hasCompletedOnboarding) {
      setShowOnboardingStart(true);
    }
  };

  const handleStartTour = () => {
    setShowOnboardingStart(false);
    setIsOnboarding(true);
    setOnboardingStep(1);
  };

  const handleSkipOnboarding = () => {
    setShowOnboardingStart(false);
    setIsOnboarding(false);
    localStorage.setItem('liberated-onboarding-completed', 'true');
  };

  // Track screen visits during onboarding
  useEffect(() => {
    if (isOnboarding) {
      const currentPath = window.location.pathname;
      const screenMap: { [key: string]: number } = {
        '/origin': 1,
        '/pulse': 2,
        '/compass': 3,
        '/lens': 4,
        '/flow': 5,
        '/roots': 6
      };

      if (screenMap[currentPath]) {
        setVisitedScreens(prev => {
          const newVisited = new Set(prev);
          newVisited.add(currentPath);
          return newVisited;
        });
        
        setOnboardingStep(screenMap[currentPath]);
        
        // Complete onboarding when all screens visited
        if (visitedScreens.size === 5 && !visitedScreens.has(currentPath)) {
          setTimeout(() => {
            setIsOnboarding(false);
            localStorage.setItem('liberated-onboarding-completed', 'true');
          }, 2000);
        }
      }
    }
  }, [isOnboarding, visitedScreens]);

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

  return (
    <div className="min-h-screen bg-stone-50">
      <Router>
        <MainApp 
          isOnboarding={isOnboarding}
          onboardingStep={onboardingStep}
          onSkipOnboarding={handleSkipOnboarding}
        />
      </Router>
    </div>
  );
}
