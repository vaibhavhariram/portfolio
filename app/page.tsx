'use client';

import Link from 'next/link';
import TypewriterHeader from '@/components/TypewriterHeader';
import ThemeToggle from '@/components/ThemeToggle';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedLink from '@/components/AnimatedLink';

/**
 * Minimal, text-first homepage inspired by dris.one.
 * Single scrollable page, no map – focused on story and work.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] px-6 py-12 md:py-16 relative">
      <AnimatedBackground />
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <div className="max-w-2xl mx-auto space-y-12 font-mono relative z-0">
        {/* Intro */}
        <ScrollReveal>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase font-mono">
              hey, i&apos;m
            </p>
            <TypewriterHeader />
          </section>
        </ScrollReveal>

        {/* Contact / directory */}
        <ScrollReveal delay={0.1}>
          <section className="space-y-2">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              directory
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--text-secondary)]">
              <AnimatedLink
                href="mailto:vaibhavhariram@berkeley.edu"
                className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
              >
                email
              </AnimatedLink>
              <AnimatedLink
                href="https://x.com/vaibhavhariram"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
              >
                x
              </AnimatedLink>
              <AnimatedLink
                href="https://github.com/vaibhavhariram"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
              >
                github
              </AnimatedLink>
              <AnimatedLink
                href="https://linkedin.com/in/vaibhavhariram"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
              >
                linkedin
              </AnimatedLink>
              <AnimatedLink
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
              >
                resume
              </AnimatedLink>
              <AnimatedLink
                href="https://scholar.google.com/citations?hl=en&user=WHbznusAAAAJ&view_op=list_works&citft=1&citft=2&citft=3&email_for_op=vaibhuhariram%40gmail.com&authuser=1&gmla=APjjwualsgUMB6FhfAmFp9WCR3ykRFC0bb8qKX13or6Abi00hkINUQ9yY645njGkgIY9SjVay62EY7WgzB2W7BrOiwWKkWsJB2DaQdzOP2fHpGZELmeiOuKHkIdQg0zfLIWa_aopdDCP_pLpitbBmyZAzvt7G2nT8ZWagaLNk-ASjfOeuqTuliPqJhCES2lE-S_5EQW7hNSjopzpaXQYH41bBULgGIpYK6nTD992c9_oLRt59f0MYUCYjBTZPZhhLuQvJdVR___"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
              >
                scholar
              </AnimatedLink>
            </div>
          </section>
        </ScrollReveal>

        {/* Intro */}
        <ScrollReveal delay={0.2}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              intro
            </p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                building{' '}
                <AnimatedLink
                  href="https://usepaprika.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
                >
                  paprika
                </AnimatedLink>
                , the execution layer for reliable AI agents — trace every run, enforce runtime policies,
                and replay safely.
              </li>
              <li>
                prev. software engineering intern at{' '}
                <AnimatedLink
                  href="https://public.railinc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
                >
                  Railinc
                </AnimatedLink>
                , working on gis-driven tools for freight rail operations and terminal workflows
              </li>
              <li>
                studying cs @ berkeley
              </li>
              <li>
                llm tool research @{' '}
                <AnimatedLink
                  href="https://gorilla.cs.berkeley.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
                >
                  gorilla project
                </AnimatedLink>
                , part of sky computing lab and BAIR
              </li>
              <li>
                research project manager @ ucb eecs,{' '}
                <AnimatedLink
                  href="https://research.berkeley.edu/urap/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
                >
                  heading a team
                </AnimatedLink>
                {' '}using multi-spectral satellite imagery (ndvi, ndwi, lst) to detect crypto mining
                developments in el salvador (potts lab)
              </li>
            </ul>
          </section>
        </ScrollReveal>

        {/* Personal projects */}
        <ScrollReveal delay={0.3}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              projects & research
            </p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <span className="text-[var(--text-primary)]">routeX</span> — predictive multi-modal
                transportation router over 500k+ road segments, combining dijkstra/a*/ch with xgboost
                traffic models for sub-100ms queries.
              </li>
              <li>
                <span className="text-[var(--text-primary)]">swandb</span> — real-time fire risk
                visualization platform combining live fire perimeters, winds, and population density to
                surface high-risk evacuation corridors.
              </li>
            </ul>
          </section>
        </ScrollReveal>

        {/* Lore */}
        <ScrollReveal delay={0.4}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              lore
            </p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                memorized every{' '}
                <AnimatedLink
                  href="https://www.sporcle.com/games/g/worldcapitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
                >
                  world capital
                </AnimatedLink>
                {' '}at age 2. mass applause from indian aunties. zero practical applications since.
              </li>
              <li>
                played trevor rainbolt in{' '}
                <AnimatedLink
                  href="https://openguessr.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
                >
                  ranked geoguessr
                </AnimatedLink>
                . got absolutely cooked tho.
              </li>
              <li>
                former international geography olympiad{' '}
                <AnimatedLink
                  href="https://protobowl.com/geography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
                >
                  competitor
                </AnimatedLink>
                .
              </li>
              <li>
                played the carnatic{' '}
                <AnimatedLink
                  href="https://darbar.org/the-violin-a-western-instrument-takes-centre-stage-in-carnatic-classical/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
                >
                  violin
                </AnimatedLink>
                {' '}for 10 years.
              </li>
              <li>
                once chased my bag on a caltrain from redwood city to sf in a $100 uber going 100mph.
                got it back with 30 seconds to spare haha
              </li>
            </ul>
          </section>
        </ScrollReveal>

        {/* TL;DR */}
        <ScrollReveal delay={0.5}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              tl;dr
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              i work on making AI systems run reliably in production. most of what i build sits between
              the agent frameworks everyone writes and the observability tools everyone buys — the
              runtime execution layer that keeps agents from burning tokens, looping, and breaking things.
            </p>
          </section>
        </ScrollReveal>

        {/* Currently */}
        <ScrollReveal delay={0.6}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              currently
            </p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>looking for sf housing for summer 2026 to scale and build wherever and whatever i can</li>
              <li>
                building{' '}
                <AnimatedLink
                  href="https://paprika.nu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
                >
                  paprika.nu
                </AnimatedLink>
              </li>
              <li>probably on bart right now</li>
              <li>still thinking about that caleb williams throw…</li>
            </ul>
          </section>
        </ScrollReveal>

        {/* Some other things */}
        <ScrollReveal delay={0.7}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              some other things
            </p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                coursework: data structures, discrete math, structure of computer programs, computer
                architecture, probably more ai/ml stuff if i feel like it
              </li>
              <li>
                tools: python, typescript, react/next.js, postgresql/postgis, xgboost, scikit-learn,
                all sorts of gis software, aws, docker
              </li>
              <li>
                interests: cities & transit, maps, tamil culture, soccer jerseys, geoguessr, chicago
                sports, and international music.
              </li>
              <li>
                a little less frequently, south indian movies, home decor, sketching, online chess,
                and sparkling water.
              </li>
            </ul>
          </section>
        </ScrollReveal>

        {/* Other things */}
        <ScrollReveal delay={0.8}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              other things
            </p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                i used to watch{' '}
                <AnimatedLink
                  href="https://anilist.co/user/vaibhavhariram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
                >
                  anime
                </AnimatedLink>
                {' '}a little bit
              </li>
              <li>
                roast my{' '}
                <AnimatedLink
                  href="https://open.spotify.com/user/y1b8q06v7nfj7vycxi4huo70u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
                >
                  spotify
                </AnimatedLink>
                {' '}playlists
              </li>
            </ul>
          </section>
        </ScrollReveal>

        {/* Footer note */}
        <ScrollReveal delay={0.9}>
          <section className="pt-4 border-t border-[var(--border)] text-[var(--text-muted)] text-xs space-y-1">
            <p>
              this page changes often. if you&apos;re reading this, feel free to reach out. if
              you&apos;re from stanford, no.
            </p>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
