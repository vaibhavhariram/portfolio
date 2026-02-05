import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects & research — Atlas (multi-modal routing), FireGraph (real-time fire risk visualization), Crypto mining detection (Potts Lab, UC Berkeley).',
};

const projects = [
  {
    title: 'Atlas – Predictive Multi-Modal Transportation Router',
    description: 'Built routing engine processing 500K+ OpenStreetMap road segments, implementing Dijkstra, A*, and Contraction Hierarchies with graph preprocessing for consistent sub-100ms query latency. Developed ML traffic prediction model using XGBoost (92% accuracy on speed forecasting), reducing ETA error from 8 minutes to 3 minutes versus traditional static routing.',
    tags: ['FastAPI', 'PostgreSQL', 'Redis', 'XGBoost', 'scikit-learn', 'Python'],
    github: undefined,
    demo: undefined,
  },
  {
    title: 'FireGraph – Real-Time Risk Visualization',
    description: 'Built public-facing real-time geospatial visualization platform combining live fire perimeters, wind vectors, and population density layers to surface high-risk evacuation corridors across California. Engineered data pipeline with updates from NIFC, CAL FIRE, and NOAA APIs every 5 minutes; 100K+ road segments with WebGL-accelerated mapping for smooth, interactive performance.',
    tags: ['Next.js', 'Deck.gl', 'FastAPI', 'PostGIS', 'OpenRouteService', 'Vercel'],
    github: undefined,
    demo: undefined,
  },
  {
    title: 'Crypto Mining Detection ML Model',
    description: 'Potts Lab, UC Berkeley. Developing ML model to identify crypto mining developments in El Salvador using multi-spectral analysis (NDVI, NDWI, land surface temperature). Built change detection pipeline in Google Earth Engine processing satellite imagery across 5-year windows; Random Forest classification to isolate vegetation loss and thermal patterns.',
    tags: ['Google Earth Engine', 'Python', 'Landsat', 'Sentinel', 'Random Forest'],
    github: undefined,
    demo: undefined,
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold text-[var(--text-primary)] tracking-tight">Projects</h1>
      
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg hover:border-[var(--text-muted)] transition-colors"
          >
            <h3 className="text-[var(--text-primary)] font-medium mb-2">{project.title}</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-[var(--bg-elevated)] border border-[var(--border)] rounded text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(project.github || project.demo) && (
              <div className="flex items-center gap-4">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                )}
              </div>
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
          href="/?pin=bay-area-projects" 
          className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
        >
          View on map →
        </Link>
      </div>
    </div>
  );
}
