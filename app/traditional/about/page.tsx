import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold text-[var(--text-primary)] tracking-tight">About</h1>
      
      <div className="prose prose-invert max-w-none space-y-6">
        <p className="text-[var(--text-secondary)] leading-relaxed">
          I&apos;m a Computer Science student at UC Berkeley with a passion for geospatial AI/ML 
          and building technology that bridges the digital and physical worlds.
        </p>
        
        <p className="text-[var(--text-secondary)] leading-relaxed">
          My work focuses on applying machine learning to urban planning, satellite imagery analysis, 
          and creating tools that help people better understand and interact with their environment.
        </p>

        <p className="text-[var(--text-secondary)] leading-relaxed">
          When I&apos;m not coding, you&apos;ll find me exploring new cities, playing chess, or reading 
          about urban design and architecture.
        </p>

        <div className="pt-4 border-t border-[var(--border)]">
          <h2 className="text-xl font-medium text-[var(--text-primary)] mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-[var(--text-primary)] font-medium">University of California, Berkeley</h3>
              <p className="text-sm text-[var(--text-muted)]">B.A. Computer Science & Geography · 2024 - 2028</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--border)]">
          <h2 className="text-xl font-medium text-[var(--text-primary)] mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['Python', 'TypeScript', 'React', 'Next.js', 'PyTorch', 'TensorFlow', 'GIS', 'PostGIS', 'QGIS', 'Satellite Imagery', 'Computer Vision'].map((skill) => (
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
