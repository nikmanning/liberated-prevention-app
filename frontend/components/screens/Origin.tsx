import { ArrowRight, Users, Target, Network, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function Origin() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [timelinePosition, setTimelinePosition] = useState(50); // 0-100 percentage

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

  const accordionItems = [
    {
      id: 'theory',
      title: 'Theory of Change',
      content: 'CSAC believes that sustainable prevention requires shifting power to communities most affected by violence. Our theory centers on building authentic partnerships, measuring what matters to communities, and creating systems that respond to local wisdom and needs.'
    },
    {
      id: 'workgroups',
      title: 'Workgroups',
      content: 'Four collaborative workgroups drive our impact: Improved Service Quality ensures programs meet community standards; Funding & Strategy aligns resources with community priorities; Coordinated Prevention Network connects organizations and reduces duplication; Culturally Responsive Services centers racial equity and community voice in all prevention work.'
    },
    {
      id: 'values',
      title: 'Values',
      content: 'Community leadership, racial equity, data transparency, collaborative innovation, and healing-centered approaches guide everything we do. We believe those closest to the problem are closest to the solution.'
    }
  ];

  const timelineMilestones = [
    { year: 2019, position: 0, title: 'Vision Begins', caption: 'Community leaders identify need for coordinated prevention approach' },
    { year: 2022, position: 50, title: 'CSAC Formation', caption: 'Official launch with founding organizations and initial funding' },
    { year: 2023, position: 75, title: 'Coalition Building', caption: 'Expanded membership and workgroup development' },
    { year: 2025, position: 100, title: 'Systems Innovation', caption: 'Full implementation of connected prevention network' }
  ];

  const getCurrentMilestone = () => {
    let currentMilestone = timelineMilestones[0];
    for (const milestone of timelineMilestones) {
      if (timelinePosition >= milestone.position) {
        currentMilestone = milestone;
      }
    }
    return currentMilestone;
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center">
          <img 
            src="/logo_small.png" 
            alt="CSAC Logo"
            className="w-16 h-16"
          />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">
          Reimagining Prevention in Chicago
        </h1>
        
        {/* Community Image */}
        <div className="rounded-xl overflow-hidden">
          <img 
            src="/community.png" 
            alt="Community members connecting in Chicago neighborhood"
            className="w-full h-48 object-cover"
          />
        </div>
        
        <p className="text-slate-600 leading-relaxed">
          The Chicago Strategic Action Council brings together diverse voices to transform 
          how we approach prevention work—centering equity, community wisdom, and 
          innovative measurement.
        </p>
      </div>

      {/* What is CSAC? Accordion */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">What is CSAC?</h2>
        <div className="space-y-2">
          {accordionItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-slate-200">
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors"
              >
                <span className="font-medium text-slate-900">{item.title}</span>
                {openAccordion === item.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>
              {openAccordion === item.id && (
                <div className="px-4 pb-4">
                  <p className="text-slate-600 text-sm leading-relaxed">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Timeline */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Our Journey</h2>
        <div className="bg-slate-50 p-6 rounded-xl">
          {/* Timeline Slider */}
          <div className="relative mb-6">
            <div className="w-full h-2 bg-slate-200 rounded-full">
              <div 
                className="h-2 bg-teal-500 rounded-full transition-all duration-300"
                style={{ width: `${timelinePosition}%` }}
              ></div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={timelinePosition}
              onChange={(e) => setTimelinePosition(Number(e.target.value))}
              className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
            />
            {/* Milestone markers */}
            {timelineMilestones.map((milestone, index) => (
              <div
                key={index}
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-teal-500 rounded-full"
                style={{ left: `${milestone.position}%` }}
              ></div>
            ))}
          </div>
          
          {/* Current Milestone Display */}
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600 mb-1">
              {getCurrentMilestone().year}
            </div>
            <div className="text-lg font-semibold text-slate-900 mb-2">
              {getCurrentMilestone().title}
            </div>
            <p className="text-sm text-slate-600">
              {getCurrentMilestone().caption}
            </p>
          </div>
        </div>
      </div>

      {/* Workgroups */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Our Workgroups</h2>
        <div className="grid grid-cols-1 gap-3">
          {workgroups.map((group, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all"
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

      {/* CTA */}
      <button className="w-full bg-[#F27046] text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-[#E55A2E] transition-colors">
        <span>Explore More</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
