import { useState } from 'react';
import { ArrowLeft, Mic, Users, Award, Lightbulb } from 'lucide-react';

export function Roots() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const stories = [
    {
      id: 1,
      title: 'Youth Voice: "We Know What We Need"',
      author: 'Maria, Age 17',
      tag: 'Youth Voice',
      chip: 'Youth',
      image: '/api/placeholder/300/200',
      summary: 'Young people share their vision for prevention programs that actually work',
      fullStory: '"Nobody asked us what we actually needed until CSAC came to our school. We told them: we need mentors who look like us, programs that happen in our neighborhood, and adults who listen instead of lecture. The best prevention work happens when you trust young people to be experts on their own lives."',
      impact: 'Led to redesign of 3 youth programs citywide',
      icon: Mic
    },
    {
      id: 2,
      title: 'Provider Innovation: Community Healing Circles',
      author: 'Dr. James Washington',
      tag: 'Provider Innovation',
      chip: 'Providers',
      image: '/api/placeholder/300/200',
      summary: 'A provider transforms their approach by centering community wisdom',
      fullStory: '"After 20 years in traditional therapy, I learned more about healing in my first community circle than in graduate school. Elders in Bronzeville taught me that healing happens in relationship, not isolation. Now our clinic looks completely different—we have circles, community meals, and elder wisdom at the center of everything."',
      impact: 'Model adopted by 12 community health centers',
      icon: Users
    },
    {
      id: 3,
      title: 'Equity Win: Funding Goes to Community',
      author: 'Southside Together Organizing for Power',
      tag: 'Equity Win',
      chip: 'Funders',
      image: '/api/placeholder/300/200',
      summary: 'Grassroots organizing leads to direct community control of prevention funds',
      fullStory: '"For years, money for our communities went to organizations that didn\'t even have offices here. Through CSAC\'s advocacy, we got $2 million in direct funding for community-controlled prevention. Now mothers who lost children to violence are designing programs, not just participating in them."',
      impact: '$2M in direct community funding secured',
      icon: Award
    },
    {
      id: 4,
      title: 'Innovation: Healing-Centered Schools',
      author: 'Chicago Educators United',
      tag: 'System Innovation',
      chip: 'Providers',
      image: '/api/placeholder/300/200',
      summary: 'Educators reimagine discipline through restorative justice practices',
      fullStory: '"We replaced suspension with healing circles. Instead of sending kids home for fighting, we bring families together to understand what\'s really happening. Students are teaching us that most \'bad behavior\' is actually trauma response. When we address the trauma, the behavior changes naturally."',
      impact: '67% reduction in suspensions across pilot schools',
      icon: Lightbulb
    }
  ];

  if (selectedStory !== null) {
    const story = stories.find(s => s.id === selectedStory);
    if (!story) return null;

    return (
      <div className="p-6 space-y-6">
        <button
          onClick={() => setSelectedStory(null)}
          className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Stories</span>
        </button>

        <div className="space-y-4">
          <div className="bg-slate-100 h-48 rounded-xl flex items-center justify-center">
            <div className="text-center text-slate-500">
              <story.icon className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Story Photo/Video</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <span className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full">
                {story.tag}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">{story.title}</h1>
            <p className="text-slate-600 font-medium">— {story.author}</p>
          </div>

          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
            <p className="text-indigo-900 leading-relaxed italic">
              {story.fullStory}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Impact</h3>
            <p className="text-teal-700 font-medium">{story.impact}</p>
          </div>

          <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
            <h3 className="font-semibold text-orange-900 mb-2">Why This Matters</h3>
            <p className="text-sm text-orange-800">
              This story demonstrates how centering community voices and lived experience 
              leads to more effective and sustainable prevention work.
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
        <h1 className="text-2xl font-bold text-slate-900">Community Storytelling Portal</h1>
        <p className="text-slate-600">
          Elevating the voices and wisdom of those closest to the work
        </p>
      </div>

      {/* Story Grid */}
      <div className="grid grid-cols-1 gap-4">
        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() => setSelectedStory(story.id)}
            className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="bg-slate-100 h-32 rounded-t-xl flex items-center justify-center">
              <div className="text-center text-slate-500">
                <story.icon className="w-8 h-8 mx-auto mb-1" />
                <p className="text-xs">Story Media</p>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">
                  {story.chip}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 text-sm leading-tight">
                {story.title}
              </h3>
              <p className="text-sm text-slate-600">{story.summary}</p>
              <p className="text-xs text-slate-500 font-medium">— {story.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Community Input CTA */}
      <div className="bg-indigo-700 text-white p-6 rounded-xl text-center space-y-3">
        <h3 className="font-semibold">Share Your Story</h3>
        <p className="text-sm text-indigo-100">
          Have a story about prevention work that's making a difference? 
          We want to hear from you.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
          Submit Story
        </button>
      </div>

      <div className="bg-teal-50 p-4 rounded-xl border border-teal-200">
        <h3 className="font-semibold text-teal-900 mb-2">Our Commitment</h3>
        <p className="text-sm text-teal-800">
          Every story shared here comes with consent and compensation. Community members 
          control how their stories are used and benefit from any policy changes that result.
        </p>
      </div>
    </div>
  );
}
