import { useState } from 'react';
import { Compass as CompassIcon, PieChart, RotateCcw, Save, TrendingUp } from 'lucide-react';

export function Compass() {
  const [budgetSliders, setBudgetSliders] = useState({
    staffing: 35,
    servingPeople: 25,
    theWork: 20,
    capacityBuilding: 15,
    evaluation: 5
  });
  const [showResults, setShowResults] = useState(false);
  const [savedScenarios, setSavedScenarios] = useState<any[]>([]);

  const handleSliderChange = (category: string, value: number) => {
    const currentTotal = Object.values(budgetSliders).reduce((a, b) => a + b, 0) - budgetSliders[category as keyof typeof budgetSliders];
    const remaining = 100 - currentTotal;
    const newValue = Math.min(value, remaining);
    
    setBudgetSliders(prev => ({
      ...prev,
      [category]: newValue
    }));
  };

  const getTotalPercent = () => {
    return Object.values(budgetSliders).reduce((a, b) => a + b, 0);
  };

  const resetBudget = () => {
    setBudgetSliders({
      staffing: 35,
      servingPeople: 25,
      theWork: 20,
      capacityBuilding: 15,
      evaluation: 5
    });
    setShowResults(false);
  };

  const saveScenario = () => {
    const scenario = {
      id: Date.now(),
      name: `Scenario ${savedScenarios.length + 1}`,
      budget: { ...budgetSliders },
      timestamp: new Date().toLocaleDateString()
    };
    setSavedScenarios([...savedScenarios, scenario]);
  };

  const getImpactBadges = () => {
    const badges = [];
    
    if (budgetSliders.servingPeople > 30) {
      badges.push({ text: '+12% Community Engagement → +8 pts Trust', color: 'bg-teal-100 text-teal-700' });
    }
    if (budgetSliders.capacityBuilding > 20) {
      badges.push({ text: '+15% Partner Stipends → +7 pts Dignity', color: 'bg-blue-100 text-blue-700' });
    }
    if (budgetSliders.theWork > 25) {
      badges.push({ text: '+20% Program Innovation → +9 pts Belonging', color: 'bg-purple-100 text-purple-700' });
    }
    if (budgetSliders.evaluation > 10) {
      badges.push({ text: '+8% Data Collection → +5 pts Accountability', color: 'bg-orange-100 text-orange-700' });
    }

    return badges;
  };

  const PieChartComponent = ({ size = "large" }: { size?: "small" | "large" }) => {
    const total = getTotalPercent();
    if (total === 0) return null;

    const chartSize = size === "large" ? 200 : 120;
    const radius = chartSize / 2 - 10;
    const centerX = chartSize / 2;
    const centerY = chartSize / 2;

    const colors = ['#3F51B5', '#00BFA6', '#FF7043', '#9C27B0', '#FFC107'];
    const categories = [
      { key: 'staffing', label: 'Staffing', value: budgetSliders.staffing },
      { key: 'servingPeople', label: 'Serving People', value: budgetSliders.servingPeople },
      { key: 'theWork', label: 'The Work', value: budgetSliders.theWork },
      { key: 'capacityBuilding', label: 'Capacity Building', value: budgetSliders.capacityBuilding },
      { key: 'evaluation', label: 'Evaluation', value: budgetSliders.evaluation }
    ].filter(cat => cat.value > 0);

    let currentAngle = 0;
    const paths = categories.map((category, index) => {
      const percentage = category.value / total;
      const angle = percentage * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      
      const startX = centerX + radius * Math.cos((startAngle - 90) * Math.PI / 180);
      const startY = centerY + radius * Math.sin((startAngle - 90) * Math.PI / 180);
      const endX = centerX + radius * Math.cos((endAngle - 90) * Math.PI / 180);
      const endY = centerY + radius * Math.sin((endAngle - 90) * Math.PI / 180);
      
      const largeArcFlag = angle > 180 ? 1 : 0;
      
      const pathData = [
        `M ${centerX} ${centerY}`,
        `L ${startX} ${startY}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        'Z'
      ].join(' ');
      
      currentAngle += angle;
      
      return (
        <path
          key={category.key}
          d={pathData}
          fill={colors[index]}
          className="hover:opacity-80 transition-opacity"
        />
      );
    });

    return (
      <div className="flex flex-col items-center">
        <svg width={chartSize} height={chartSize} className="mb-4">
          {paths}
        </svg>
        {size === "large" && (
          <div className="grid grid-cols-2 gap-2 text-xs">
            {categories.map((category, index) => (
              <div key={category.key} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: colors[index] }}
                ></div>
                <span className="text-slate-600">{category.label}: {category.value}%</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <CompassIcon className="w-6 h-6 text-indigo-600" />
          <h1 className="text-2xl font-bold text-slate-900">Budget Allocation Guide</h1>
        </div>
        <p className="text-slate-600">
          Experiment with different funding approaches and see their impact
        </p>
      </div>

      {/* Live Pie Chart */}
      <div className="bg-white p-4 rounded-xl border border-slate-200">
        <h3 className="font-semibold text-slate-900 mb-4 text-center">Live Budget Visualization</h3>
        <PieChartComponent size="large" />
        <div className="text-center mt-4">
          <span className={`text-sm font-medium ${getTotalPercent() === 100 ? 'text-teal-600' : 'text-slate-500'}`}>
            Total: {getTotalPercent()}% / 100%
          </span>
        </div>
      </div>

      {/* Budget Sliders */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Adjust Budget Allocation</h2>
        
        {Object.entries(budgetSliders).map(([key, value]) => {
          const labels = {
            staffing: 'Staffing',
            servingPeople: 'Serving People',
            theWork: 'The Work',
            capacityBuilding: 'Capacity-building',
            evaluation: 'Evaluation'
          };
          
          return (
            <div key={key} className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-700">
                  {labels[key as keyof typeof labels]}
                </label>
                <span className="text-sm text-slate-600">{value}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => handleSliderChange(key, Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
            </div>
          );
        })}
      </div>

      {/* Impact Badges */}
      {getImpactBadges().length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-900">Predicted Impact</h3>
          <div className="space-y-2">
            {getImpactBadges().map((badge, index) => (
              <div key={index} className={`px-3 py-2 rounded-lg text-xs font-medium ${badge.color}`}>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <button
          onClick={resetBudget}
          className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-slate-200 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
        <button
          onClick={saveScenario}
          className="flex-1 bg-teal-600 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-teal-700 transition-colors"
        >
          <Save className="w-4 h-4" />
          <span>Scenario</span>
        </button>
        <button
          onClick={() => setShowResults(!showResults)}
          className="flex-1 bg-[#F27046] text-white py-3 rounded-xl font-medium hover:bg-[#E55A2E] transition-colors"
        >
          {showResults ? 'Hide Results' : 'See Results'}
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex items-center space-x-2 mb-3">
              <PieChart className="w-5 h-5 text-indigo-600" />
              <h3 className="font-semibold text-slate-900">Budget Analysis</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <PieChartComponent size="small" />
              </div>
              <div className="space-y-3">
                <div className="text-sm">
                  <span className="font-medium text-slate-900">Community Impact Score: </span>
                  <span className="text-teal-600 font-bold">
                    {Math.round((budgetSliders.servingPeople + budgetSliders.capacityBuilding) * 0.8 + 40)}%
                  </span>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-slate-900">Sustainability Rating: </span>
                  <span className="text-indigo-600 font-bold">
                    {budgetSliders.staffing > 30 ? 'High' : budgetSliders.staffing > 20 ? 'Medium' : 'Low'}
                  </span>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-slate-900">Innovation Factor: </span>
                  <span className="text-purple-600 font-bold">
                    {budgetSliders.theWork > 25 ? 'High' : budgetSliders.theWork > 15 ? 'Medium' : 'Low'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600">
                {budgetSliders.servingPeople > 30 
                  ? "Higher investment in serving people increases community trust and engagement." 
                  : budgetSliders.capacityBuilding > 20
                  ? "Strong capacity-building creates sustainable community partnerships."
                  : "Consider increasing investment in direct community engagement for greater impact."
                }
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Saved Scenarios */}
      {savedScenarios.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">Saved Scenarios</h3>
          <div className="space-y-2">
            {savedScenarios.map((scenario) => (
              <div key={scenario.id} className="bg-slate-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-900">{scenario.name}</span>
                  <span className="text-xs text-slate-500">{scenario.timestamp}</span>
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Staffing: {scenario.budget.staffing}% | Serving: {scenario.budget.servingPeople}% | 
                  Work: {scenario.budget.theWork}% | Capacity: {scenario.budget.capacityBuilding}% | 
                  Eval: {scenario.budget.evaluation}%
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #00BFA6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider-thumb::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #00BFA6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}