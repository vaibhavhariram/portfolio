import Link from 'next/link';
import { ArrowLeft, MapPin, Book, Gamepad2, Music, Film } from 'lucide-react';

const interests = [
  {
    category: 'Travel',
    icon: MapPin,
    items: ['Japan', 'Iceland', 'Portugal', 'New Zealand'],
    description: 'Places I\'ve visited or dream of exploring. I love discovering new cities and cultures.',
  },
  {
    category: 'Reading',
    icon: Book,
    items: ['Urban design', 'Science fiction', 'History', 'Technology'],
    description: 'Currently reading: [Book Title]. Always looking for recommendations.',
  },
  {
    category: 'Gaming',
    icon: Gamepad2,
    items: ['Strategy games', 'City builders', 'Puzzle games'],
    description: 'Favorites include Cities: Skylines, Civilization, and Portal.',
  },
  {
    category: 'Music',
    icon: Music,
    items: ['Electronic', 'Jazz', 'Indie', 'Classical'],
    description: 'Always listening to music while coding. Big fan of ambient and lo-fi.',
  },
  {
    category: 'Film & TV',
    icon: Film,
    items: ['Documentaries', 'Sci-fi', 'Drama'],
    description: 'Recent favorites: [Film/Show names]. Love anything with great world-building.',
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

      <div className="pt-8">
        <Link 
          href="/traditional" 
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </div>
    </div>
  );
}
