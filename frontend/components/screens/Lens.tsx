import { useState } from 'react';
import { ArrowLeft, Users, TrendingUp, Heart } from 'lucide-react';

export function Lens() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: 'West Side Youth Mentorship',
      image: '/case-study-1-opt.png',
      tags: ['Youth Development', 'Community Healing', 'Trust Building'],
      summary: 'Community-led mentorship program reduces youth involvement in violence by 40%',
      story: 'In Austin, community elders partnered with local high schools to create a peer mentorship network. By centering cultural knowledge and providing safe spaces for healing conversations, the program has transformed how young people view their futures. The success comes from trust-building, not surveillance.',
      impact: '87% of participants report increased sense of belonging',
      icon: Users
    },
    {
      id: 2,
      title: 'Healing Circles Initiative',
      image: '/case-study-2-opt.png',
      tags: ['Community Healing', 'Restorative Justice', 'Family Support'],
      summary: 'Restorative justice practices strengthen community bonds and reduce recidivism',
      story: 'South Side neighborhoods implemented healing circles as an alternative to punitive responses. Families, victims, and community members come together to address harm through dialogue and collective accountability. This approach has created lasting relationships and reduced repeat incidents.',
      impact: '65% reduction in repeat incidents',
      icon: Heart
    },
    {
      id: 3,
      title: 'Economic Justice Collective',
      image: '/case-study-3-opt.png',
      tags: ['Economic Development', 'Community Ownership', 'Workforce Development'],
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
          className="flex items-center space-x-2 text-[#212221] hover:text-[#212221]/80"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cases</span>
        </button>

        <div className="space-y-4">
          <div className="h-48 rounded-xl overflow-hidden">
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag, index) => (
                <span key={index} className="inline-block bg-[#F27046]/10 text-[#212221] text-xs font-medium px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl font-bold text-[#212221]">{caseStudy.title}</h1>
            <p className="text-slate-600 leading-relaxed">{caseStudy.story}</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Key Impact</h3>
            <p className="text-[#F27046] font-medium">{caseStudy.impact}</p>
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
            <div className="h-32 rounded-t-xl overflow-hidden">
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-3">
              <div className="flex flex-wrap gap-1">
                {caseStudy.tags.slice(0, 2).map((tag, index) => (
                  <span key={index} className="inline-block bg-[#F27046]/10 text-[#212221] text-xs font-medium px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
                {caseStudy.tags.length > 2 && (
                  <span className="inline-block bg-[#212221]/10 text-[#212221] text-xs font-medium px-2 py-1 rounded-full">
                    +{caseStudy.tags.length - 2}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-slate-900">{caseStudy.title}</h3>
              <p className="text-sm text-slate-600">{caseStudy.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#F27046]/10 p-4 rounded-xl border border-[#F27046]/20">
        <h3 className="font-semibold text-[#212221] mb-2">Why These Stories Matter</h3>
        <p className="text-sm text-[#212221]/80">
          Each story shows how prevention work succeeds when it's rooted in community 
          wisdom, addresses systemic issues, and measures success through relationships 
          and healing rather than just reduced incidents.
        </p>
      </div>
    </div>
  );
}
