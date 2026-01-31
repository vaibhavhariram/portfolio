import Link from 'next/link';
import { ArrowRight, ArrowLeft, Mail, FileText, Github, Linkedin } from 'lucide-react';

const sectionCards = [
  {
    href: '/traditional/about',
    title: 'About',
    description: 'Who I am and what drives me',
  },
  {
    href: '/traditional/experience',
    title: 'Experience',
    description: 'Where I\'ve worked and what I\'ve built',
  },
  {
    href: '/traditional/projects',
    title: 'Projects',
    description: 'Things I\'ve created and contributed to',
  },
  {
    href: '/traditional/interests',
    title: 'Interests',
    description: 'Hobbies, sports, media, and travel',
  },
  {
    href: '/traditional/blog',
    title: 'Blog',
    description: 'Thoughts, essays, and updates',
  },
];

export default function TraditionalHome() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <p className="text-[var(--text-muted)] text-sm tracking-wide animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          Hello, I&apos;m
        </p>
        <h1 
          className="text-5xl md:text-6xl font-semibold text-[var(--text-primary)] tracking-tight animate-fade-in-up"
          style={{ animationDelay: '50ms' }}
        >
          Vaibhav Hariram
        </h1>
        <p 
          className="text-xl text-[var(--text-secondary)] animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
          CS @ UC Berkeley · Geospatial AI/ML
        </p>
        <p 
          className="text-[var(--text-secondary)] leading-relaxed max-w-[600px] animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          Building AI for cities, intelligence for the physical world. I&apos;m passionate about 
          geospatial technology, urban planning, and using AI to solve real-world problems.
        </p>

        {/* Links */}
        <div 
          className="flex flex-wrap items-center gap-4 pt-2 animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          <a 
            href="mailto:vaibhav@berkeley.edu" 
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <Mail className="w-4 h-4" />
            <span className="relative">
              Email
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[var(--text-primary)] group-hover:w-full transition-all duration-200" />
            </span>
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <FileText className="w-4 h-4" />
            <span className="relative">
              Resume
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[var(--text-primary)] group-hover:w-full transition-all duration-200" />
            </span>
          </a>
          <a 
            href="https://github.com/vaibhavh" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <Github className="w-4 h-4" />
            <span className="relative">
              GitHub
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[var(--text-primary)] group-hover:w-full transition-all duration-200" />
            </span>
          </a>
          <a 
            href="https://linkedin.com/in/vaibhavh" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <Linkedin className="w-4 h-4" />
            <span className="relative">
              LinkedIn
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[var(--text-primary)] group-hover:w-full transition-all duration-200" />
            </span>
          </a>
        </div>

        {/* Back to Map Link */}
        <div 
          className="pt-4 animate-fade-in-up"
          style={{ animationDelay: '250ms' }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to the map
          </Link>
        </div>
      </section>

      {/* Section Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sectionCards.map((card, index) => (
          <Link
            key={card.href}
            href={card.href}
            className="
              group
              p-5
              bg-[var(--bg-card)]
              border border-[var(--border)]
              rounded-lg
              hover:border-[var(--text-muted)]
              hover:bg-[var(--bg-elevated)]
              hover:-translate-y-0.5
              hover:shadow-lg
              hover:shadow-black/10
              transition-all duration-200
              animate-fade-in-up
            "
            style={{ animationDelay: `${300 + index * 50}ms` }}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[var(--text-primary)] font-medium mb-1 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors">
                  {card.description}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
