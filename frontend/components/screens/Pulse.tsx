import { useState } from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export function Pulse() {
  const [showCounterMetrics, setShowCounterMetrics] = useState(false);

  const metrics = [
    {
      title: 'Community Belonging',
      traditional: '47%',
      counter: '78%',
      description: 'People feel connected to their community'
    },
    {
      title: 'Dignity in Services',
      traditional: '39%',
      counter: '72%',
      description: 'Respectful, non-judgmental treatment'
    },
    {
      title: 'Trust in Services',
      traditional: '32%',
      counter: '65%',
      description: 'Confidence in prevention programs'
    },
    {
      title: 'Cultural Responsiveness',
      traditional: '28%',
      counter: '71%',
      description: 'Services reflect community values'
    },
    {
      title: 'Community Voice',
      traditional: '19%',
      counter: '59%',
      description: 'Residents shape program decisions'
    },
    {
      title: 'Healing-Centered Approach',
      traditional: '21%',
      counter: '68%',
      description: 'Focus on wellness vs. deficits'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <BarChart3 className="w-6 h-6 text-teal-600" />
          <h1 className="text-2xl font-bold text-[#212221]">Counter-Metrics Dashboard</h1>
        </div>
        <p className="text-slate-600">
          Measuring what matters: community strength, not just service metrics
        </p>
      </div>

      {/* Toggle */}
      <div className="bg-slate-50 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">
            {showCounterMetrics ? 'Counter-Metrics View' : 'Traditional Metrics View'}
          </span>
          <button
            onClick={() => setShowCounterMetrics(!showCounterMetrics)}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${
              showCounterMetrics ? 'bg-teal-600' : 'bg-slate-300'
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full transition-transform ${
                showCounterMetrics ? 'transform translate-x-6' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl border border-slate-200"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-900">{metric.title}</h3>
              <div className="flex items-center space-x-1 text-teal-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-2xl font-bold">
                  {showCounterMetrics ? metric.counter : metric.traditional}
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-600">{metric.description}</p>
            <div className="mt-3">
              <div className="bg-slate-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    showCounterMetrics ? 'bg-teal-600' : 'bg-orange-500'
                  }`}
                  style={{
                    width: showCounterMetrics ? metric.counter : metric.traditional
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Insight */}
      <div className="bg-teal-50 p-4 rounded-xl border border-teal-200">
        <h3 className="font-semibold text-teal-900 mb-2">Key Insight</h3>
        <p className="text-sm text-teal-800">
          Counter-metrics reveal hidden strengths in communities. When we measure belonging 
          and trust instead of just service delivery numbers, we see the real impact of 
          prevention work.
        </p>
      </div>
    </div>
  );
}
