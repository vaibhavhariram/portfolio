import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin, Music, Shirt, Building2, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interests',
  description: 'Travel, GeoGuessr, international music, Tamil culture, soccer jerseys, real estate.',
};

const interests = [
  {
    category: 'Travel',
    icon: MapPin,
    items: ['Antarctica', 'Prague', 'Ho Chi Minh City', 'and more'],
    description: 'I love discovering new cities and cultures. Winter 2025 in Antarctica was a once-in-a-lifetime experience; recent trips include Prague and Vietnam.',
  },
  {
    category: 'GeoGuessr',
    icon: MapPin,
    items: ['Geography', 'Exploration', 'Maps'],
    description: 'Putting geography and spatial intuition to the test. Always up for a round.',
  },
  {
    category: 'International Music',
    icon: Music,
    items: ['Across genres and regions'],
    description: 'Always listening—from coding sessions to exploring new artists and sounds from around the world.',
  },
  {
    category: 'Tamil Culture',
    icon: Home,
    items: ['Heritage', 'Tamil Nadu', 'Family roots'],
    description: 'Connection to Tamil Nadu and my roots. Hometown and culture that shape who I am.',
  },
  {
    category: 'Soccer Jerseys',
    icon: Shirt,
    items: ['Chelsea FC', 'Chicago sports', 'Collecting'],
    description: 'Chelsea FC fan—up the Chels! Also grew up on Bulls and Bears. Love collecting jerseys and following the game.',
  },
  {
    category: 'Real Estate',
    icon: Building2,
    items: ['Urban development', 'Cities', 'Planning'],
    description: 'Fascinated by real estate, how cities develop, and the intersection of planning and technology.',
  },
];

export default function InterestsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold text-[var(--text-primary)] tracking-tight">Interests</h1>
      
      <p className="text-[var(--text-secondary)] leading-relaxed">
        Outside of work and studies, here&apos;s what I enjoy. These things keep me inspired, 
        curious, and connected to the world beyond the screen.
      </p>

      <div className="space-y-6">
        {interests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <div 
              key={index}
              className="p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg hover:border-[var(--text-muted)] transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-5 h-5 text-[var(--text-secondary)]" />
                <h3 className="text-[var(--text-primary)] font-medium">{interest.category}</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">{interest.description}</p>
              <div className="flex flex-wrap gap-2">
                {interest.items.map((item) => (
                  <span 
                    key={item}
                    className="px-2 py-0.5 text-xs bg-[var(--bg-elevated)] border border-[var(--border)] rounded text-[var(--text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-8 flex flex-wrap items-center gap-4">
        <Link 
          href="/traditional" 
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
        <Link 
          href="/" 
          className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
        >
          View on map →
        </Link>
      </div>
    </div>
  );
}
