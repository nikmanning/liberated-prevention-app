import { useState } from 'react';
import { PieChart, DollarSign } from 'lucide-react';

export function Compass() {
  const [staffing, setStaffing] = useState(40);
  const [engagement, setEngagement] = useState(30);
  const [training, setTraining] = useState(20);
  const [evaluation, setEvaluation] = useState(10);
  const [showResults, setShowResults] = useState(false);

  const total = staffing + engagement + training + evaluation;
  const isValid = total === 100;

  const handleSliderChange = (category: string, value: number) => {
    const others = 100 - value;
    const remaining = others / 3;
    
    switch (category) {
      case 'staffing':
        setStaffing(value);
        setEngagement(Math.round(remaining));
        setTraining(Math.round(remaining));
        setEvaluation(100 - value - Math.round(remaining) - Math.round(remaining));
        break;
      case 'engagement':
        setEngagement(value);
        setStaffing(Math.round(remaining));
        setTraining(Math.round(remaining));
        setEvaluation(100 - value - Math.round(remaining) - Math.round(remaining));
        break;
      case 'training':
        setTraining(value);
        setStaffing(Math.round(remaining));
        setEngagement(Math.round(remaining));
        setEvaluation(100 - value - Math.round(remaining) - Math.round(remaining));
        break;
      case 'evaluation':
        setEvaluation(value);
        setStaffing(Math.round(remaining));
        setEngagement(Math.round(remaining));
        setTraining(100 - value - Math.round(remaining) - Math.round(remaining));
        break;
    }
  };

  const getImpactText = () => {
    if (engagement > 40) {
      return "High community engagement leads to 35% increase in trust and belonging scores.";
    } else if (training > 30) {
      return "Investment in staff training improves cultural responsiveness by 28%.";
    } else if (staffing > 50) {
      return "Heavy staffing focus may limit community involvement and innovation.";
    } else {
      return "Balanced allocation supports sustainable, community-centered prevention.";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <DollarSign className="w-6 h-6 text-indigo-600" />
          <h1 className="text-2xl font-bold text-slate-900">Budget Allocation Guide</h1>
        </div>
        <p className="text-slate-600">
          Experiment with different funding priorities and see their potential impact
        </p>
      </div>

      {/* Budget Sliders */}
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="font-medium text-slate-700">Staffing</label>
              <span className="text-lg font-bold text-indigo-600">{staffing}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="70"
              value={staffing}
              onChange={(e) => handleSliderChange('staffing', parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="font-medium text-slate-700">Community Engagement</label>
              <span className="text-lg font-bold text-teal-600">{engagement}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="70"
              value={engagement}
              onChange={(e) => handleSliderChange('engagement', parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="font-medium text-slate-700">Training & Development</label>
              <span className="text-lg font-bold text-orange-600">{training}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              value={training}
              onChange={(e) => handleSliderChange('training', parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="font-medium text-slate-700">Evaluation & Research</label>
              <span className="text-lg font-bold text-slate-600">{evaluation}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              value={evaluation}
              onChange={(e) => handleSliderChange('evaluation', parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        <button
          onClick={() => setShowResults(!showResults)}
          className="w-full bg-indigo-700 text-white py-3 rounded-xl font-semibold hover:bg-indigo-800 transition-colors"
        >
          {showResults ? 'Hide Results' : 'See Results'}
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center space-x-2 mb-3">
              <PieChart className="w-5 h-5 text-indigo-600" />
              <h3 className="font-semibold text-slate-900">Budget Visualization</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Staffing</span>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-2 bg-slate-200 rounded">
                    <div 
                      className="h-2 bg-indigo-600 rounded" 
                      style={{ width: `${staffing}%` }}
                    />
                  </div>
                  <span className="font-medium">{staffing}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Community Engagement</span>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-2 bg-slate-200 rounded">
                    <div 
                      className="h-2 bg-teal-600 rounded" 
                      style={{ width: `${engagement}%` }}
                    />
                  </div>
                  <span className="font-medium">{engagement}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Training</span>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-2 bg-slate-200 rounded">
                    <div 
                      className="h-2 bg-orange-600 rounded" 
                      style={{ width: `${training}%` }}
                    />
                  </div>
                  <span className="font-medium">{training}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Evaluation</span>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-2 bg-slate-200 rounded">
                    <div 
                      className="h-2 bg-slate-600 rounded" 
                      style={{ width: `${evaluation}%` }}
                    />
                  </div>
                  <span className="font-medium">{evaluation}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 p-4 rounded-xl border border-teal-200">
            <h3 className="font-semibold text-teal-900 mb-2">Predicted Impact</h3>
            <p className="text-sm text-teal-800">{getImpactText()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
