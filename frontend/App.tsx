import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Origin } from './components/screens/Origin';
import { Pulse } from './components/screens/Pulse';
import { Compass } from './components/screens/Compass';
import { Lens } from './components/screens/Lens';
import { Flow } from './components/screens/Flow';
import { Roots } from './components/screens/Roots';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Router>
        <div className="max-w-md mx-auto bg-white min-h-screen relative">
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
      </Router>
    </div>
  );
}
