import { ArrowRight, Users, Target, Network, Heart } from 'lucide-react';

export function Origin() {
  const workgroups = [
    {
      icon: Target,
      title: 'Improved Service Quality',
      description: 'Enhancing care standards and outcomes'
    },
    {
      icon: Users,
      title: 'Funding & Strategy',
      description: 'Strategic resource allocation and planning'
    },
    {
      icon: Network,
      title: 'Coordinated Prevention Network',
      description: 'Building connected prevention systems'
    },
    {
      icon: Heart,
      title: 'Culturally Responsive Services',
      description: 'Centering community voices and needs'
    }
  ];

  const milestones = [
    { year: '2022', title: 'CSAC Formation' },
    { year: '2023', title: 'Coalition Building' },
    { year: '2024', title: 'Systems Innovation' }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center">
          <img 
            src="/logo.png" 
            alt="CSAC Logo"
            className="w-16 h-16"
          />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">
          Reimagining Prevention in Chicago
        </h1>
        <p className="text-slate-600 leading-relaxed">
          The Chicago Strategic Action Council brings together diverse voices to transform 
          how we approach prevention work—centering equity, community wisdom, and 
          innovative measurement.
        </p>
      </div>

      {/* Workgroups */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Our Workgroups</h2>
        <div className="grid grid-cols-1 gap-3">
          {workgroups.map((group, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <group.icon className="w-5 h-5 text-teal-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 text-sm">
                    {group.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">
                    {group.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Our Journey</h2>
        <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center flex-1">
              <div className="w-8 h-8 bg-indigo-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {milestone.year.slice(-2)}
                </span>
              </div>
              <p className="text-xs font-medium text-slate-700">
                {milestone.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button className="w-full bg-indigo-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-indigo-800 transition-colors">
        <span>Explore More</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
