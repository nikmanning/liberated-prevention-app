import { Database, Users, Calendar, Share2, Shield, Clock } from 'lucide-react';

export function Flow() {
  const systemComponents = [
    { icon: Database, label: 'Shared Data Hub', position: 'top-center' },
    { icon: Users, label: 'Referral Network', position: 'left' },
    { icon: Calendar, label: 'Coordinated Calendar', position: 'right' },
    { icon: Share2, label: 'Resource Sharing', position: 'bottom-left' },
    { icon: Shield, label: 'Privacy Protection', position: 'bottom-right' },
    { icon: Clock, label: 'Real-time Updates', position: 'center' }
  ];

  const connections = [
    'Referrals → Data Hub → Coordinated Response',
    'Shared Calendar → Better Resource Utilization',
    'Privacy First → Community Trust → Better Outcomes'
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Systems Integration Portal</h1>
        <p className="text-slate-600">
          The future of connected prevention: seamless collaboration while protecting privacy
        </p>
      </div>

      {/* Vision Diagram */}
      <div className="relative bg-gradient-to-br from-indigo-50 to-teal-50 p-8 rounded-2xl min-h-64">
        <div className="relative h-48">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-indigo-700 rounded-full flex items-center justify-center shadow-lg">
              <Database className="w-8 h-8 text-white" />
            </div>
            <p className="text-center text-xs font-medium mt-2 text-indigo-900">
              Shared Hub
            </p>
          </div>

          {/* Surrounding Components */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <p className="text-center text-xs font-medium mt-1 text-teal-900">
              Referrals
            </p>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <p className="text-center text-xs font-medium mt-1 text-orange-900">
              Calendar
            </p>
          </div>

          <div className="absolute bottom-4 left-8">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <p className="text-center text-xs font-medium mt-1 text-green-900">
              Resources
            </p>
          </div>

          <div className="absolute bottom-4 right-8">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <p className="text-center text-xs font-medium mt-1 text-purple-900">
              Privacy
            </p>
          </div>

          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <p className="text-center text-xs font-medium mt-1 text-yellow-900">
              Updates
            </p>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                      refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
              </marker>
            </defs>
            {/* Lines connecting components to center */}
            <line x1="50%" y1="20%" x2="50%" y2="45%" stroke="#64748b" strokeWidth="2" 
                  strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
            <line x1="80%" y1="50%" x2="55%" y2="50%" stroke="#64748b" strokeWidth="2" 
                  strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
            <line x1="30%" y1="80%" x2="45%" y2="55%" stroke="#64748b" strokeWidth="2" 
                  strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
            <line x1="70%" y1="80%" x2="55%" y2="55%" stroke="#64748b" strokeWidth="2" 
                  strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
            <line x1="20%" y1="50%" x2="45%" y2="50%" stroke="#64748b" strokeWidth="2" 
                  strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
          </svg>
        </div>
      </div>

      {/* How It Works */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">How Integration Works</h2>
        <div className="space-y-3">
          {connections.map((connection, index) => (
            <div key={index} className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-700">{connection}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <h3 className="font-semibold text-slate-900">Expected Benefits</h3>
        <ul className="space-y-2 text-sm text-slate-600">
          <li className="flex items-start space-x-2">
            <span className="text-teal-600">•</span>
            <span>Eliminate duplicate services and reduce wait times</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-teal-600">•</span>
            <span>Better coordination between prevention programs</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-teal-600">•</span>
            <span>Shared learning and best practices across organizations</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-teal-600">•</span>
            <span>Maintained privacy and community trust</span>
          </li>
        </ul>
      </div>

      {/* Coming Soon */}
      <div className="text-center bg-orange-50 p-6 rounded-xl border border-orange-200">
        <h3 className="font-semibold text-orange-900 mb-2">Coming Soon</h3>
        <p className="text-sm text-orange-800">
          This integrated system is currently in development with community input. 
          Privacy and community control remain our top priorities.
        </p>
      </div>
    </div>
  );
}
