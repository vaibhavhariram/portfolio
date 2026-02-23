import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Vaibhav Hariram — B.A. Computer Science @ UC Berkeley, minor in Urban/City Planning. Geospatial technology, ML, and building for the physical world.',
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold text-[var(--text-primary)] tracking-tight">About</h1>
      
      <div className="prose prose-invert max-w-none space-y-6">
        <p className="text-[var(--text-secondary)] leading-relaxed">
          I&apos;m a Computer Science student at UC Berkeley (minor in Urban/City Planning) with a passion for 
          geospatial technology and building systems that bridge the digital and physical worlds.
        </p>
        
        <p className="text-[var(--text-secondary)] leading-relaxed">
          I work on zoning intelligence at Paprika, and on applying ML to urban planning, satellite imagery, 
          and tools that help people understand and interact with their environment.
        </p>

        <p className="text-[var(--text-secondary)] leading-relaxed">
          When I&apos;m not coding, you&apos;ll find me traveling, playing GeoGuessr, following international music 
          and soccer, or exploring cities and real estate.
        </p>

        <div className="pt-4 border-t border-[var(--border)]">
          <h2 className="text-xl font-medium text-[var(--text-primary)] mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-[var(--text-primary)] font-medium">University of California, Berkeley</h3>
              <p className="text-sm text-[var(--text-muted)]">B.A. in Computer Science · Minor in Urban/City Planning · Berkeley, CA · GPA: 3.9</p>
              <p className="text-sm text-[var(--text-muted)] mt-1">Relevant coursework: Data Structures, Discrete Math, Structure of Computer Programs, Introduction to Internet Protocols</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--border)]">
          <h2 className="text-xl font-medium text-[var(--text-primary)] mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'React', 'FastAPI', 'PostgreSQL', 'PostGIS', 'scikit-learn', 'XGBoost', 'AWS', 'Docker', 'GDAL', 'Google Earth Engine', 'GeoPandas'].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 text-sm bg-[var(--bg-elevated)] border border-[var(--border)] rounded-full text-[var(--text-secondary)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
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
          href="/?pin=berkeley" 
          className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
        >
          View on map →
        </Link>
      </div>
    </div>
  );
}
