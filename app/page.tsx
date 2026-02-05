'use client';

import Link from 'next/link';

/**
 * Minimal, text-first homepage inspired by dris.one.
 * Single scrollable page, no map – focused on story and work.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[var(--text-primary)] px-6 py-12 md:py-16">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Intro */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            hey, i&apos;m
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Vaibhav Hariram
          </h1>
          <p className="text-sm text-[var(--text-secondary)]">
            cs @ uc berkeley · minor in urban/city planning · geospatial ai/ml
          </p>
        </section>

        {/* Contact / directory */}
        <section className="space-y-2">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            directory
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--text-secondary)]">
            <Link
              href="mailto:vaibhavhariram@berkeley.edu"
              className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
            >
              email
            </Link>
            <Link
              href="https://github.com/vaibhavhariram"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
            >
              github
            </Link>
            <Link
              href="https://linkedin.com/in/vaibhavhariram"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
            >
              linkedin
            </Link>
            <Link
              href="https://drive.google.com/file/d/1JoSVyfBiNNh7OJUcljQZO0zg6Q4sCHL-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
            >
              resume
            </Link>
          </div>
        </section>

        {/* Achievements / headline work */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            a few things i&apos;ve done
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>
              founding engineer at{' '}
              <span className="text-[var(--text-primary)]">Paprika</span>, building a zoning
              intelligence system for 150k+ san francisco parcels with postgis + rag pipelines.
            </li>
            <li>
              software engineering intern at{' '}
              <span className="text-[var(--text-primary)]">Railinc</span>, working on gis-driven
              tools for freight rail operations and terminal workflows.
            </li>
            <li>
              b.a. computer science @{' '}
              <span className="text-[var(--text-primary)]">uc berkeley</span> with a minor in
              urban/city planning (gpa 3.9).
            </li>
          </ul>
        </section>

        {/* Projects / research */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            projects & research
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>
              <span className="text-[var(--text-primary)]">Atlas</span> — predictive multi-modal
              transportation router over 500k+ road segments, combining dijkstra/a*/ch with
              xgboost traffic models for sub-100ms queries.
            </li>
            <li>
              <span className="text-[var(--text-primary)]">FireGraph</span> — real-time fire risk
              visualization platform combining live fire perimeters, winds, and population density
              to surface high-risk evacuation corridors.
            </li>
            <li>
              <span className="text-[var(--text-primary)]">Crypto Mining Detection</span> — ml
              model using multi-spectral satellite imagery (ndvi, ndwi, lst) to detect crypto mining
              developments in el salvador (potts lab, berkeley).
            </li>
          </ul>
        </section>

        {/* TL;DR / story */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            tl;dr
          </p>
          <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
            <p>
              i like building tools that make the physical world easier to reason about — zoning,
              transit, cities, infrastructure. most of my work sits at the intersection of geospatial
              data, machine learning, and urban planning.
            </p>
            <p>
              lately that&apos;s looked like zoning intelligence for cities, routing engines for
              transportation, and remote sensing models on top of satellite imagery. always looking
              for real problems with messy data and concrete constraints.
            </p>
          </div>
        </section>

        {/* Previous / other things */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            some other things
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>
              coursework: data structures, discrete math, structure of computer programs, intro to
              internet protocols.
            </li>
            <li>
              tools: python, typescript, react/next.js, postgresql/postgis, xgboost, scikit-learn,
              google earth engine, aws, docker.
            </li>
            <li>
              interests: cities & transit, maps, tamil culture, soccer jerseys, real estate, and
              whatever new thing i&apos;m learning this month.
            </li>
          </ul>
        </section>

        {/* Footer note */}
        <section className="pt-4 border-t border-[var(--border)] text-[var(--text-muted)] text-xs space-y-1">
          <p>this page changes often. if you&apos;re reading this, feel free to reach out.</p>
        </section>
      </div>
    </main>
  );
}
