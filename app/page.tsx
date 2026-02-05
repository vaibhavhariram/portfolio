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
              href="https://x.com/vaibhavhariram"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
            >
              x
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
              <Link
                href="https://public.railinc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
              >
                Railinc
              </Link>
              , working on gis-driven tools for freight rail operations and terminal workflows.
            </li>
            <li>
              b.a. computer science @{' '}
              <Link
                href="https://www.reddit.com/r/ApplyingToCollege/comments/fq8esl/make_me_hate_stanford_why_stanford_is_overrated/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
              >
                uc berkeley
              </Link>
              {' '}with a minor in urban/city planning (gpa 3.9).
            </li>
            <li>
              project manager @ ucb eecs, lead researcher on a team using multi-spectral satellite
              imagery (ndvi, ndwi, lst) to detect crypto mining developments in el salvador (potts
              lab, berkeley).
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
          </ul>
        </section>

        {/* Lore / fun facts */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            lore
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>
              memorized every world capital at age 2. mass applause from indian aunties. zero
              practical applications since.
            </li>
            <li>
              represented team usa at the 2024 international geography olympiad. we got third. i
              peaked at 19.
            </li>
            <li>
              once chased my bag on a{' '}
              <Link
                href="https://www.caltrain.com/rider-information/lost-and-found"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
              >
                caltrain
              </Link>
              {' '}from redwood city to sf in a $100 uber going 100mph. got it back with 30 seconds
              to spare.
            </li>
            <li>
              grew up in{' '}
              <Link
                href="https://www.google.com/maps/place/Cary,+NC/@35.7701064,-78.9141316,9907m/data=!3m1!1e3!4m6!3m5!1s0x89acbd54ff4a8b43:0x44568fdb5a444be1!8m2!3d35.7890402!4d-78.7797644!16zL20vMDEzaHRw?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
              >
                cary, north carolina
              </Link>
              . escaped. sorry mom.
            </li>
          </ul>
        </section>

        {/* TL;DR / story */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            tl;dr
          </p>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            cities are broken and i want to fix them with ai. most of my work is at the intersection
            of geospatial data, machine learning, and urban planning—which is a fancy way of saying
            i read zoning codes so you don&apos;t have to.
          </p>
        </section>

        {/* Currently */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            currently
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>
              looking for sf housing for summer 2026. budget: intern salary. requirements: shower
              and kitchen in different rooms.
            </li>
            <li>
              building{' '}
              <Link
                href="https://paprika.nu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
              >
                paprika.nu
              </Link>
            </li>
            <li>probably on bart right now</li>
          </ul>
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
          <p>
            this page changes often. if you&apos;re reading this, feel free to reach out. if
            you&apos;re from stanford, no.
          </p>
        </section>
      </div>
    </main>
  );
}
