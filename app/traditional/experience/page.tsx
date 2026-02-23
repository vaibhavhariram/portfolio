import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Work experience — Founding Engineer at Paprika, Software Engineering Intern at Railinc Corp. Zoning intelligence, GIS, full-stack development.',
};

const experiences = [
  {
    title: 'Founding Engineer',
    company: 'Paprika',
    location: 'San Francisco, CA',
    date: 'Oct. 2025 – Present',
    description: 'Architected zoning intelligence system processing 150K+ San Francisco parcels using PostGIS spatial queries and RAG-based LLM pipelines, reducing parcel feasibility analysis from ~5 hours to 90 seconds. Built document understanding pipeline for municipal code parsing with hierarchical chunking across 400+ zoning sections, achieving 94% citation accuracy on structured planning queries via Claude API. Shipped production MVP in 30 days as sole engineer: Next.js/TypeScript frontend, PostGIS backend, 6 municipal API integrations, and natural language zoning interface, validated with 3 real estate firms.',
    link: undefined,
  },
  {
    title: 'Software Engineering Intern',
    company: 'Railinc Corp.',
    location: 'Raleigh, NC',
    date: 'Summer 2024 & 2025',
    description: 'Consulted with technical product teams from 20+ freight rail clients (BNSF, CSX, Union Pacific) to scope operational challenges and define GIS feature requirements for logistics and network routing. Built and shipped full-stack functionality using React and Java Spring Boot for an enterprise terminal operations system (RIGIS), supporting mission-critical workflows with 99.8% platform uptime. Developed Python ETL pipeline processing 100K+ station records, reducing manual data cleaning time by 75%. Optimized PostGIS queries in PostgreSQL with spatial indexing and geometry simplification, cutting geospatial query runtime by 40% and lowering average API response times from 500ms to 300ms.',
    link: undefined,
  },
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
            {exp.link && (
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

      <div className="pt-8 flex flex-wrap items-center gap-4">
        <Link 
          href="/traditional" 
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
        <Link 
          href="/?pin=paprika" 
          className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
        >
          View on map →
        </Link>
      </div>
    </div>
  );
}
