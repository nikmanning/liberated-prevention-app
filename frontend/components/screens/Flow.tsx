import { useState } from 'react';
import { Database, Calendar, Users, Share2, Shield, Clock } from 'lucide-react';

export function Flow() {
  const [selectedHub, setSelectedHub] = useState<string | null>(null);

  const hubs = [
    {
      id: 'referrals',
      icon: Users,
      label: 'Referrals',
      color: 'bg-teal-500',
      position: 'top',
      description: 'Seamless client referrals between organizations with consent-based data sharing.',
      features: ['Smart matching', 'Progress tracking', 'Outcome reporting']
    },
    {
      id: 'calendar',
      icon: Calendar,
      label: 'Calendar',
      color: 'bg-orange-500',
      position: 'right',
      description: 'Coordinated scheduling and event management across prevention networks.',
      features: ['Shared events', 'Resource booking', 'Conflict detection']
    },
    {
      id: 'privacy',
      icon: Shield,
      label: 'Privacy',
      color: 'bg-purple-500',
      position: 'bottom-right',
      description: 'Community-controlled data governance with transparency and consent.',
      features: ['Data sovereignty', 'Consent management', 'Audit trails']
    },
    {
      id: 'resources',
      icon: Share2,
      label: 'Resources',
      color: 'bg-green-500',
      position: 'left',
      description: 'Shared resource directory and collaboration tools for prevention work.',
      features: ['Asset mapping', 'Collaboration tools', 'Impact tracking']
    },
    {
      id: 'updates',
      icon: Clock,
      label: 'Updates',
      color: 'bg-yellow-600',
      position: 'bottom-left',
      description: 'Real-time updates and notifications across the prevention network.',
      features: ['Status updates', 'Alert system', 'Progress reports']
    }
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top':
        return 'absolute top-2 left-1/2 transform -translate-x-1/2';
      case 'right':
        return 'absolute top-1/2 right-4 transform -translate-y-1/2';
      case 'bottom-right':
        return 'absolute bottom-4 right-8';
      case 'left':
        return 'absolute top-1/2 left-4 transform -translate-y-1/2';
      case 'bottom-left':
        return 'absolute bottom-4 left-8';
      default:
        return '';
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Systems Integration Portal</h1>
        <p className="text-slate-600">
          The future of connected prevention: seamless collaboration while protecting privacy
        </p>
      </div>

      {/* Interactive Diagram */}
      <div className="relative bg-gradient-to-br from-indigo-50 to-teal-50 p-8 rounded-2xl min-h-96">
        <div className="relative h-80">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={() => setSelectedHub('central')}
              className={`w-20 h-20 bg-indigo-700 rounded-full flex items-center justify-center hover:bg-indigo-800 transition-colors cursor-pointer shadow-lg ${
                selectedHub === 'central' ? 'ring-4 ring-indigo-300' : ''
              }`}
            >
              <Database className="w-10 h-10 text-white" />
            </button>
            <p className="text-center text-sm font-medium mt-3 text-indigo-900">
              Shared Hub
            </p>
          </div>

          {/* Connected Systems */}
          {hubs.map((hub) => (
            <div key={hub.id} className={getPositionClasses(hub.position)}>
              <button
                onClick={() => setSelectedHub(hub.id)}
                className={`w-16 h-16 ${hub.color} rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer shadow-lg ${
                  selectedHub === hub.id ? 'ring-4 ring-white ring-opacity-60' : ''
                }`}
              >
                <hub.icon className="w-8 h-8 text-white" />
              </button>
              <p className="text-center text-xs font-medium mt-2 text-slate-700">
                {hub.label}
              </p>
            </div>
          ))}

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {/* Top connection */}
            <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,5" />
            {/* Right connection */}
            <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,5" />
            {/* Bottom-right connection */}
            <line x1="50%" y1="50%" x2="80%" y2="85%" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,5" />
            {/* Left connection */}
            <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,5" />
            {/* Bottom-left connection */}
            <line x1="50%" y1="50%" x2="20%" y2="85%" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>
      </div>

      {/* Hub Details */}
      {selectedHub && (
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          {selectedHub === 'central' ? (
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Shared Prevention Hub</h3>
              <p className="text-slate-600 mb-4">
                The central coordination system that connects all prevention organizations while maintaining community control over data and decision-making.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-slate-900">Governance:</span>
                  <p className="text-slate-600">Community-controlled</p>
                </div>
                <div>
                  <span className="font-medium text-slate-900">Data:</span>
                  <p className="text-slate-600">Consent-based sharing</p>
                </div>
                <div>
                  <span className="font-medium text-slate-900">Access:</span>
                  <p className="text-slate-600">Role-based permissions</p>
                </div>
                <div>
                  <span className="font-medium text-slate-900">Oversight:</span>
                  <p className="text-slate-600">Community advisory board</p>
                </div>
              </div>
            </div>
          ) : (
            (() => {
              const hub = hubs.find(h => h.id === selectedHub);
              if (!hub) return null;
              return (
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-8 h-8 ${hub.color} rounded-full flex items-center justify-center`}>
                      <hub.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{hub.label}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{hub.description}</p>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {hub.features.map((feature, index) => (
                        <li key={index} className="text-sm text-slate-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })()
          )}
          <button
            onClick={() => setSelectedHub(null)}
            className="mt-4 text-sm text-slate-500 hover:text-slate-700"
          >
            ← Back to diagram
          </button>
        </div>
      )}

      {!selectedHub && (
        <div className="text-center text-sm text-slate-500">
          Click on any hub to learn more about that system
        </div>
      )}

      {/* Vision Statement */}
      <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
        <h3 className="text-lg font-semibold text-indigo-900 mb-3">Our Vision</h3>
        <p className="text-indigo-800 text-sm leading-relaxed mb-4">
          This is how referrals, shared calendars, and data-sharing could connect prevention organizations 
          while keeping community needs and privacy at the center.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-indigo-600 font-medium bg-indigo-100 px-3 py-1 rounded-full">
            Coming Soon
          </span>
          <button className="text-sm text-indigo-700 hover:text-indigo-900 font-medium">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}