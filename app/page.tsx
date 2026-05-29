'use client';

import TypewriterHeader from '@/components/TypewriterHeader';
import ThemeToggle from '@/components/ThemeToggle';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedLink from '@/components/AnimatedLink';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] px-6 py-12 md:py-16 relative">
      <AnimatedBackground />
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <div className="max-w-2xl mx-auto space-y-12 font-mono relative z-0 text-sm text-[var(--text-secondary)]">
        {/* Intro */}
        <ScrollReveal>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
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
            <div className="flex flex-wrap gap-x-4 gap-y-2">
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
                href="/blog"
                className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
              >
                blog
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
            <ul className="space-y-2">
              <li>
                currently building{' '}
                <AnimatedLink
                  href="https://usepaprika.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-80"
                >
                  paprika
                </AnimatedLink>
                {' '}— runtime governance for ai agents. trace capture, policy enforcement, deterministic replay. deployed to 25+ b2b engineering teams.
              </li>
              <li>
                prev. swe intern @{' '}
                <AnimatedLink
                  href="https://public.railinc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-80"
                >
                  Railinc
                </AnimatedLink>
                {' '}(summer &apos;24 + &apos;25). react + java/spring boot on the RIGIS platform. etl pipeline processing 100K+ rail stations.
              </li>
              <li>studying cs @ berkeley (on leave)</li>
              <li>
                prev. MLE @{' '}
                <AnimatedLink
                  href="https://flywheelos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-80"
                >
                  flywheel
                </AnimatedLink>
                {' '}— the content engine for b2b SaaS teams. architected E2E MCP used by 10+ clients, wired voice, context, api keys, flags, and usage logging across 3 backend services.
              </li>
              <li>
                contributor to{' '}
                <AnimatedLink
                  href="https://gorilla.cs.berkeley.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-80"
                >
                  BFCL
                </AnimatedLink>
                {' '}— the berkeley function calling leaderboard as part of RISE lab. drafted bfcl v5, a multimodal benchmark extension for agents → designed 9 perception-to-tool-call failure tests across audio/vision. cited by openai, nvidia, anthropic teams.
              </li>
              <li>researcher @ uc berkeley (eecs), satellite imagery + ML to detect crypto mining development in el salvador (Potts Lab)</li>
            </ul>
          </section>
        </ScrollReveal>

        {/* Projects */}
        <ScrollReveal delay={0.3}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              projects
            </p>
            <ul className="space-y-3">
              <li>
                <div className="font-mono">
                  <AnimatedLink
                    href="https://github.com/vaibhavhariram/routeX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:opacity-80"
                  >
                    routeX
                  </AnimatedLink>
                </div>
                <div className="mt-1">sub-millisecond routing engine for real-time navigation. uses contraction hierarchies + xgboost traffic predictions to find optimal routes across 280K+ road segments in the bay area.</div>
                <div className="text-[var(--text-muted)] mt-1">stack: c++ • postgis • xgboost • osm</div>
              </li>
              <li>
                <div className="font-mono">
                  <AnimatedLink
                    href="https://github.com/vaibhavhariram/swandb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:opacity-80"
                  >
                    swandb
                  </AnimatedLink>
                </div>
                <div className="mt-1">point-in-time correct feature store with sub-8ms online serving. time-aware joins that actually work, no model training surprises.</div>
                <div className="text-[var(--text-muted)] mt-1">stack: duckdb • redis • parquet</div>
              </li>
              <li>
                <div className="font-mono">
                  <AnimatedLink
                    href="https://github.com/vaibhavhariram/chronicle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:opacity-80"
                  >
                    chronicle
                  </AnimatedLink>
                </div>
                <div className="mt-1">llm inference server with 32% throughput improvement over huggingface baseline. micro-batching + kv-cache reuse for sub-200ms p95 at 100 concurrent requests.</div>
                <div className="text-[var(--text-muted)] mt-1">stack: python • cuda • mistral-7b</div>
              </li>
            </ul>
          </section>
        </ScrollReveal>

        {/* Open Source */}
        <ScrollReveal delay={0.4}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              open source
            </p>
            <ul className="space-y-3">
              <li>
                <div className="font-mono">
                  <AnimatedLink
                    href="https://github.com/vllm-project/vllm/pull/37227"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:opacity-80"
                  >
                    vLLM
                  </AnimatedLink>
                  {' / '}
                  <AnimatedLink
                    href="https://github.com/pytorch/ao/pull/4270"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:opacity-80"
                  >
                    PyTorch
                  </AnimatedLink>
                </div>
                <div className="mt-1">merged performance optimization + distributed benchmarking PRs upstream.</div>
              </li>
              <li>
                <div className="font-mono">
                  <AnimatedLink
                    href="https://github.com/vaibhavhariram/geofilter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:opacity-80"
                  >
                    geofilter
                  </AnimatedLink>
                </div>
                <div className="mt-1">numba jit point-in-polygon engine. 10M points in 0.58s. wrote it because existing spatial filters were too slow and i was impatient.</div>
              </li>
              <li>
                <div className="font-mono">
                  <AnimatedLink
                    href="https://github.com/vaibhavhariram/reqbench"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:opacity-80"
                  >
                    reqbench
                  </AnimatedLink>
                </div>
                <div className="mt-1">load-testing cli sustaining 4.8K req/sec at 500 concurrency with p95/error ci gating.</div>
              </li>
            </ul>
          </section>
        </ScrollReveal>

        {/* Lore */}
        <ScrollReveal delay={0.5}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              lore
            </p>
            <ul className="space-y-2">
              <li>pretty good at geography trivia (top 1% sporcle, jetpunk player)</li>
              <li>i run buzzer based comps @ iac</li>
              <li>i&apos;ve urbexed every part of the bay and will travel anywhere for a skyline or sunset pic</li>
              <li>played trevor rainbolt in ranked geoguessr. got absolutely cooked tho</li>
              <li>played carnatic violin for 10 years</li>
              <li>huge chelsea fan + chicago sports</li>
              <li>been to 30+ countries and my dream is to visit every single one</li>
              <li>have listened to 500 rap/rnb albums and will give better takes than anyone on the new releases</li>
            </ul>
          </section>
        </ScrollReveal>

        {/* TL;DR */}
        <ScrollReveal delay={0.6}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              tl;dr
            </p>
            <p className="leading-relaxed">
              i love AI and its applications across the entire stack. benchmarks, evals, observability, runtime, and its real time applications in the startup space is what i aim to understand perfectly one day. oh, and i love geospatial ai/ml + geotech: real systems people actually use
            </p>
          </section>
        </ScrollReveal>

        {/* Currently */}
        <ScrollReveal delay={0.7}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              currently
            </p>
            <ul className="space-y-2">
              <li>@ berkeley to scale and build wherever and whatever i can</li>
              <li>still thinking about that caleb williams throw…</li>
              <li>saving money for asap rocky, don toliver, and world cup games</li>
              <li>will bench 225 by the end of the year</li>
              <li>about halfway done with the blind 75!</li>
              <li>thailand summer 2026</li>
              <li>stay tuned for record labs. building in music, my passion.</li>
            </ul>
          </section>
        </ScrollReveal>

        {/* Some other things */}
        <ScrollReveal delay={0.8}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              some other things
            </p>
            <ul className="space-y-2">
              <li>coursework: data structures, algorithms, discrete math, structure of computer programs, a.i., machine learning, networking + internet protocols, database systems, computer vision, data science</li>
              <li>languages: python, c++, typescript, java, sql</li>
              <li>ml + systems: FSDP, AMP, CUDA, KV-cache, distributed fine-tuning, eval pipelines, quantization</li>
              <li>frameworks: react, fastapi, spring boot, node.js, duckdb, langgraph, pytorch, xgboost</li>
              <li>infra: aws, docker, redis, postgresql, postgis, gdal, arcgis pro, linux, ci/cd</li>
              <li>interests: cities + public transportation, collecting old maps, tamil culture, soccer jerseys, geoguessr, chicago sports, all sorts of music</li>
              <li>less frequently: south indian movies, home decor, sketching, online chess, sparkling water</li>
            </ul>
          </section>
        </ScrollReveal>

        {/* Other things */}
        <ScrollReveal delay={0.9}>
          <section className="space-y-3">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              other things
            </p>
            <ul className="space-y-2">
              <li>
                roast my{' '}
                <AnimatedLink
                  href="https://open.spotify.com/user/y1b8q06v7nfj7vycxi4huo70u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-80"
                >
                  spotify
                </AnimatedLink>
                {' '}playlists
              </li>
              <li>
                i used to watch{' '}
                <AnimatedLink
                  href="https://anilist.co/user/vaibhavhariram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-80"
                >
                  anime
                </AnimatedLink>
                {' '}a bit
              </li>
              <li>trying to learn to dj and cook (or both at the same time)</li>
              <li>will run a marathon this year</li>
              <li>decent at sketching</li>
              <li>trying to attend more hackathons</li>
            </ul>
          </section>
        </ScrollReveal>

        {/* Footer note */}
        <ScrollReveal delay={1.0}>
          <section className="pt-4 border-t border-[var(--border)] text-[var(--text-muted)] text-xs space-y-1">
            <p>
              this page changes often. if you&apos;re reading this, feel free to reach out.
            </p>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
