'use client';

import Link from 'next/link';
import TypewriterHeader from '@/components/TypewriterHeader';
import ThemeToggle from '@/components/ThemeToggle';

/**
 * Minimal, text-first homepage inspired by dris.one.
 * Single scrollable page, no map – focused on story and work.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] px-6 py-12 md:py-16 relative">
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <div className="max-w-2xl mx-auto space-y-12 font-mono">
        {/* Intro */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase font-mono">
            hey, i&apos;m
          </p>
          <TypewriterHeader />
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
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
            >
              resume
            </Link>
            <Link
              href="https://scholar.google.com/citations?hl=en&user=WHbznusAAAAJ&view_op=list_works&citft=1&citft=2&citft=3&email_for_op=vaibhuhariram%40gmail.com&authuser=1&gmla=APjjwualsgUMB6FhfAmFp9WCR3ykRFC0bb8qKX13or6Abi00hkINUQ9yY645njGkgIY9SjVay62EY7WgzB2W7BrOiwWKkWsJB2DaQdzOP2fHpGZELmeiOuKHkIdQg0zfLIWa_aopdDCP_pLpitbBmyZAzvt7G2nT8ZWagaLNk-ASjfOeuqTuliPqJhCES2lE-S_5EQW7hNSjopzpaXQYH41bBULgGIpYK6nTD992c9_oLRt59f0MYUCYjBTZPZhhLuQvJdVR_"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
            >
              scholar
            </Link>
          </div>
        </section>

        {/* Intro */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            intro
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>
              building{' '}
              <span className="text-[var(--text-primary)]">Legion</span>, a geospatial intelligence
              layer for defense tech
            </li>
            <li>
              prev. swe at{' '}
              <Link
                href="https://public.railinc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
              >
                Railinc
              </Link>
              , working on gis-driven tools for freight rail operations and terminal workflows
            </li>
            <li>
              studying cs @ berkeley
            </li>
            <li>
              doing llm tool research for berkeley&apos;s gorilla project (sky computing lab, RISE,
              BAIR)
            </li>
            <li>
              researcher @ ucb eecs, working on a team conducting ML satellite imagery to detect
              crypto mining developments in el salvador (potts lab).
            </li>
          </ul>
        </section>

        {/* Personal projects */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            personal projects
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>
              <span className="text-[var(--text-primary)]">atlas</span> — predictive multi-modal
              transportation router combining dijkstra/a*/ch with traffic models
            </li>
            <li>
              <span className="text-[var(--text-primary)]">firegraph</span> — real-time fire risk
              visualization platform to find high-risk evacuation corridors.
            </li>
            <li>
              <span className="text-[var(--text-primary)]">roadsense</span> — computer vision system
              that automatically finds road damage from dashcam video and maps it for cities to fix
              faster.
            </li>
            <li>
              <span className="text-[var(--text-primary)]">paprika</span> — zoning intelligence
              lookup for san francisco real estate + properties.
            </li>
          </ul>
        </section>

        {/* Lore */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            lore
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>pretty good at geography trivia</li>
            <li>
              played trevor rainbolt in{' '}
              <Link
                href="https://openguessr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
              >
                ranked geoguessr
              </Link>
              . got absolutely cooked tho
            </li>
            <li>
              played the carnatic{' '}
              <Link
                href="https://darbar.org/the-violin-a-western-instrument-takes-centre-stage-in-carnatic-classical/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
              >
                violin
              </Link>
              {' '}for 10 years
            </li>
            <li>huge chelsea fan + chicago sports</li>
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

        {/* TL;DR */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            tl;dr
          </p>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            i love geospatial ai/ml and geotech- most of my work is at the intersection of
            geospatial data, machine learning, and applications of the field
          </p>
        </section>

        {/* Currently */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            currently
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>berkeley to scale and build wherever and whatever i can</li>
            <li>still thinking about that caleb williams throw…</li>
          </ul>
        </section>

        {/* Some other things */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            some other things
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>
              coursework: data structures, discrete math, structure of computer programs, networking
              and internet protocols, probably more ai/ml
            </li>
            <li>
              tools: python, typescript, react/next.js, postgresql/postgis, xgboost, scikit-learn,
              all sorts of gis software, aws, docker
            </li>
            <li>
              interests: cities and public transportation, collecting old maps, tamil culture,
              soccer jerseys, geoguessr, chicago sports, and international music.
            </li>
            <li>
              a little less frequently, south indian movies, home decor, sketching, online chess,
              and sparkling water.
            </li>
          </ul>
        </section>

        {/* Other things */}
        <section className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
            other things
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>
              favorite artist(s): calvin harris, ariana grande, aespa, anirudh ravichander, cocteau
              twins
            </li>
            <li>
              favorite tv show(s): HIMYM, parasyte, business proposal
            </li>
            <li>favorite place in the bay: half moon bay</li>
            <li>favorite book: crazy rich asians trilogy (not the movie)</li>
            <li>
              i used to watch{' '}
              <Link
                href="https://anilist.co/user/vaibhavhariram/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
              >
                anime
              </Link>
              {' '}a little bit
            </li>
            <li>trying to learn how to dj and cook (or both at the same time)</li>
            <li>will run a marathon this year</li>
            <li>trying to attend more hackathons</li>
            <li>
              roast my{' '}
              <Link
                href="https://open.spotify.com/user/y1b8q06v7nfj7vycxi4huo70u"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
              >
                spotify
              </Link>
              {' '}playlists
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
