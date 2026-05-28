import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects & research — routeX (C++ routing engine), swandb (feature store), chronicle (LLM inference), Potts Lab (UC Berkeley).',
};

const projects = [
  {
    title: 'routeX – C++ Routing Engine',
    description: 'Routing engine over 280K+ OSM road segments (Bay Area). A*, Dijkstra, and contraction hierarchies — CH preprocessing builds 40K+ shortcuts for <1ms queries (45x over Dijkstra). PostGIS spatial layer for geofencing. XGBoost ETA model validated at <15% MAPE on 5K held-out routes.',
    tags: ['C++', 'PostGIS', 'XGBoost', 'OSM', 'Python'],
    github: undefined,
    demo: undefined,
  },
  {
    title: 'swandb – Point-in-Time Feature Store',
    description: 'Point-in-time feature store built for ML training correctness. DuckDB AsOf joins for offline retrieval, Redis online serving at <8ms p95. Idempotent ingestion, date-sharded parquet, per-tenant isolation.',
    tags: ['DuckDB', 'Redis', 'Parquet', 'Python', 'FastAPI'],
    github: undefined,
    demo: undefined,
  },
  {
    title: 'chronicle – LLM Inference Server',
    description: 'Inference server for Mistral-7B fp16 on A10. 32% throughput gain over HF Transformers baseline via micro-batching with fairness flush and KV-cache reuse. <200ms p95 at 100 concurrency.',
    tags: ['Python', 'CUDA', 'Mistral-7B', 'PyTorch'],
    github: undefined,
    demo: undefined,
  },
  {
    title: 'Crypto Mining Detection (Potts Lab, UC Berkeley)',
    description: 'ML model to identify crypto mining developments in El Salvador using multi-spectral analysis (NDVI, NDWI, land surface temperature). Change detection pipeline in Google Earth Engine processing satellite imagery across 5-year windows; Random Forest classification to isolate vegetation loss and thermal patterns.',
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
