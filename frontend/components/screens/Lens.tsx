import { useState } from 'react';
import { ArrowLeft, Users, TrendingUp, Heart } from 'lucide-react';

export function Lens() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: 'West Side Youth Mentorship',
      image: '/api/placeholder/300/200',
      tag: 'Youth Development',
      summary: 'Community-led mentorship program reduces youth involvement in violence by 40%',
      story: 'In Austin, community elders partnered with local high schools to create a peer mentorship network. By centering cultural knowledge and providing safe spaces for healing conversations, the program has transformed how young people view their futures. The success comes from trust-building, not surveillance.',
      impact: '87% of participants report increased sense of belonging',
      icon: Users
    },
    {
      id: 2,
      title: 'Healing Circles Initiative',
      image: '/api/placeholder/300/200',
      tag: 'Community Healing',
      summary: 'Restorative justice practices strengthen community bonds and reduce recidivism',
      story: 'South Side neighborhoods implemented healing circles as an alternative to punitive responses. Families, victims, and community members come together to address harm through dialogue and collective accountability. This approach has created lasting relationships and reduced repeat incidents.',
      impact: '65% reduction in repeat incidents',
      icon: Heart
    },
    {
      id: 3,
      title: 'Economic Justice Collective',
      image: '/api/placeholder/300/200',
      tag: 'Economic Development',
      summary: 'Cooperative businesses create economic stability and community ownership',
      story: 'A group of formerly incarcerated individuals started a cleaning cooperative that now employs 25 community members. By sharing ownership and decision-making, they have created not just jobs but a model for economic democracy that prevents future involvement in the justice system.',
      impact: '92% employment retention rate',
      icon: TrendingUp
    }
  ];

  if (selectedCase !== null) {
    const caseStudy = caseStudies.find(cs => cs.id === selectedCase);
    if (!caseStudy) return null;

    return (
      <div className="p-6 space-y-6">
        <button
          onClick={() => setSelectedCase(null)}
          className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cases</span>
        </button>

        <div className="space-y-4">
          <div className="bg-slate-100 h-48 rounded-xl flex items-center justify-center">
            <div className="text-center text-slate-500">
              <caseStudy.icon className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Hero Image</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <span className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full">
                {caseStudy.tag}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">{caseStudy.title}</h1>
            <p className="text-slate-600 leading-relaxed">{caseStudy.story}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Key Impact</h3>
            <p className="text-teal-700 font-medium">{caseStudy.impact}</p>
          </div>

          <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
            <h3 className="font-semibold text-orange-900 mb-2">Prevention Principle</h3>
            <p className="text-sm text-orange-800">
              This story demonstrates how community-led solutions create lasting change by 
              addressing root causes rather than symptoms.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-slate-900">Prevention Impact Stories</h1>
        <p className="text-slate-600">
          Real examples of how prevention work transforms communities
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="space-y-4">
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            onClick={() => setSelectedCase(caseStudy.id)}
            className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="bg-slate-100 h-32 rounded-t-xl flex items-center justify-center">
              <div className="text-center text-slate-500">
                <caseStudy.icon className="w-8 h-8 mx-auto mb-1" />
                <p className="text-xs">Image</p>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <span className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">
                  {caseStudy.tag}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900">{caseStudy.title}</h3>
              <p className="text-sm text-slate-600">{caseStudy.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
        <h3 className="font-semibold text-indigo-900 mb-2">Why These Stories Matter</h3>
        <p className="text-sm text-indigo-800">
          Each story shows how prevention work succeeds when it's rooted in community 
          wisdom, addresses systemic issues, and measures success through relationships 
          and healing rather than just reduced incidents.
        </p>
      </div>
    </div>
  );
}
