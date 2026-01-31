import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project Name',
    description: 'A brief description of what this project does and why it matters. Highlight the key features and technologies used.',
    tags: ['React', 'TypeScript', 'Python'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Another Project',
    description: 'Description of another project. What problem does it solve? What makes it interesting or unique?',
    tags: ['Next.js', 'TailwindCSS', 'PostgreSQL'],
    github: '#',
    demo: null,
  },
  // Add more projects here
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

            <div className="flex items-center gap-4">
              {project.github && project.github !== '#' && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              )}
              {project.demo && project.demo !== '#' && (
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
          </div>
        ))}
      </div>

      <p className="text-sm text-[var(--text-muted)] italic">
        More projects to be added...
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
