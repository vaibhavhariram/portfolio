import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Company Name',
    location: 'San Francisco, CA',
    date: 'Summer 2025',
    description: 'Description of your work and accomplishments. What technologies did you use? What impact did you have?',
    link: '#',
  },
  {
    title: 'Research Assistant',
    company: 'UC Berkeley',
    location: 'Berkeley, CA',
    date: '2024 - Present',
    description: 'Description of your research work. What problems are you solving? What methods are you using?',
    link: '#',
  },
  // Add more experiences here
];

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold text-[var(--text-primary)] tracking-tight">Experience</h1>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg hover:border-[var(--text-muted)] transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-[var(--text-primary)] font-medium">{exp.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{exp.company} · {exp.location}</p>
              </div>
              <span className="text-sm text-[var(--text-muted)] md:text-right">{exp.date}</span>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{exp.description}</p>
            {exp.link && exp.link !== '#' && (
              <a 
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                Learn more <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        ))}
      </div>

      <p className="text-sm text-[var(--text-muted)] italic">
        More experiences to be added...
      </p>

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
