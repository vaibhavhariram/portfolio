'use client';

import ThemeToggle from '@/components/ThemeToggle';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedLink from '@/components/AnimatedLink';

export default function EnvironmentalConditioning() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] px-6 py-12 md:py-16 relative">
      <AnimatedBackground />
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <div className="max-w-2xl mx-auto space-y-10 font-mono relative z-0 text-sm text-[var(--text-secondary)]">

        {/* back */}
        <ScrollReveal>
          <section>
            <AnimatedLink
              href="/blog"
              className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
            >
              ← back
            </AnimatedLink>
          </section>
        </ScrollReveal>

        {/* meta */}
        <ScrollReveal delay={0.1}>
          <section className="space-y-2">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              issue 002 — june 10, 2026
            </p>
            <h1 className="text-[var(--text-primary)] text-2xl font-normal tracking-tight">
              environmental conditioning
            </h1>
            <p className="text-[var(--text-muted)] text-xs">
              how much of what you want was chosen vs handed to you by the loudest voice in the room you happened to be in at 18?
            </p>
          </section>
        </ScrollReveal>

        {/* intro */}
        <ScrollReveal delay={0.2}>
          <section className="space-y-4 leading-relaxed">
            <p>
              I&apos;m sitting in Apex, North Carolina this week. Not Berkeley. Not SF. Same person.
              Different room. And for the first time in a while, the noise is gone.
            </p>
            <p>
              Nobody around me is thinking about seed rounds. Nobody&apos;s posting about their summer at
              AWS. Nobody&apos;s asking what agent framework you&apos;re using or whether you&apos;ve tried Claude
              Code. It&apos;s refreshing. It feels like I&apos;ve traveled back in time, to around 9 months ago
              before I began college. But I&apos;m noticing something uncomfortable. I&apos;m not sure how much
              of me travels with me when the room changes.
            </p>
            <p>
              The question that keeps surfacing is simple but hard to sit with: yes, I love startups,
              CS, tech, all of that. But would I love it the way I do if I&apos;d never walked onto that
              campus? If I&apos;d never walked underneath the faded turquoise of Sather Gate, looking up at
              the Campanile, the Golden Gate Bridge, and the SF skyline from Grizzly Peak?
            </p>
          </section>
        </ScrollReveal>

        {/* section I */}
        <ScrollReveal delay={0.25}>
          <section className="space-y-4">
            <div className="border-t border-[var(--border)] pt-6 space-y-1">
              <p className="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">i — osmosis</p>
              <h2 className="text-[var(--text-primary)] text-base">the room decides</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                My friends back home react differently to everything I say. Not dismissively, just
                differently. The things that feel urgent in SF don&apos;t carry the same weight here. And
                that gap started making me wonder.
              </p>
              <p>
                If I&apos;d ended up in Chicago, would I be deep into quant right now? NYC, would I be
                tracking bond spreads instead of worrying about what Claude Mythos is going to look
                like? Same person, different room, completely different ambitions.
              </p>

              {/* pullquote */}
              <div className="border-l-2 border-[var(--text-muted)] pl-4 py-1 space-y-0">
                <p className="text-[var(--text-primary)] italic leading-relaxed">
                  That&apos;s not passion. That&apos;s osmosis.
                </p>
              </div>

              <p>
                Which means somewhere underneath all of it is a version of me that existed before any
                room got to him. Before Berkeley. Before SF. Before the startup ecosystem handed me a
                set of things to want.
              </p>
              <p>I&apos;ve been trying to figure out who that person is.</p>
            </div>
          </section>
        </ScrollReveal>

        {/* section II */}
        <ScrollReveal delay={0.3}>
          <section className="space-y-4">
            <div className="border-t border-[var(--border)] pt-6 space-y-1">
              <p className="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">ii — elsewhere</p>
              <h2 className="text-[var(--text-primary)] text-base">any other room on earth</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                Food for thought. What would my life look like on the streets of Marseille, screaming
                wesh and olololo as a panna baller? Or growing up on Rishiri Island in Hokkaido,
                fishing town, 5,000 people, no startup ecosystem for thousands of miles. Or if I was
                really anywhere else on Earth?
              </p>

              {/* places callout */}
              <div className="border-t border-b border-[var(--border)] py-5 text-center space-y-1">
                <p className="text-[var(--text-muted)] text-xs tracking-[0.1em]">whether I&apos;m in</p>
                <p className="text-[var(--text-primary)] text-sm leading-loose tracking-wide">
                  Mogadishu &nbsp;·&nbsp; Mumbai &nbsp;·&nbsp; Moscow &nbsp;·&nbsp; Melbourne
                </p>
                <p className="text-[var(--text-muted)] text-xs tracking-[0.1em]">that answer changes</p>
              </div>

              <p>
                I think about these places more than I probably should. I&apos;ve never been to Marseille.
                I&apos;ve never been to Hokkaido. But I&apos;ve been fixated on both, and so many other places,
                from simply watching YouTube videos about places that had nothing to offer me
                career-wise and everything to offer me as a person who just found the world genuinely
                interesting.
              </p>
              <p className="text-[var(--text-muted)]">
                Back then, I didn&apos;t ask what a place could do for me. I just wanted to know it existed.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* section III */}
        <ScrollReveal delay={0.35}>
          <section className="space-y-4">
            <div className="border-t border-[var(--border)] pt-6 space-y-1">
              <p className="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">iii — before the noise</p>
              <h2 className="text-[var(--text-primary)] text-base">the pre-environment self</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                I&apos;ve written about this before — the violin, the maps, the French nobody asked me to
                learn. But what I didn&apos;t say is that those things all share something. None of them
                came from a room. Nobody around me was doing quizbowl. Nobody handed me an obsession
                with Bohemian villages or told me to be fixated on a lake in South Africa I&apos;d only
                seen in pictures. That stuff came from somewhere quieter. Somewhere before the noise.
              </p>
              <p>
                The pre-environment me wasn&apos;t optimizing for anything. He was just paying attention to
                the world because the world was worth paying attention to.
              </p>
              <p>
                Somewhere between that kid and Berkeley, the question changed. It stopped being
                <em> what&apos;s out there</em> and became <em>what&apos;s useful</em>. The curiosity didn&apos;t die,
                it got redirected. Pointed at things that compound. AI B2B SaaS instead of island
                geographies. Cold emails instead of geography bees. The same energy, completely
                different target.
              </p>
              <p className="text-[var(--text-muted)]">
                And I&apos;m not sure I chose that. I&apos;m not sure anyone does.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* section IV */}
        <ScrollReveal delay={0.4}>
          <section className="space-y-4">
            <div className="border-t border-[var(--border)] pt-6 space-y-1">
              <p className="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">iv — the honest answer</p>
              <h2 className="text-[var(--text-primary)] text-base">all of it is real</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                Here&apos;s what actually unsettles me about all of this.
              </p>
              <p>
                I can&apos;t cleanly separate what I genuinely want from what I was handed. The startup
                obsession feels real. The drive to build feels real. The love for SF, complicated as
                it is, feels real. But so did the Marseille fixation. So did Rishiri Island. So did
                every version of myself I might have become in a different room at 18.
              </p>

              {/* pullquote */}
              <div className="border-l-2 border-[var(--text-muted)] pl-4 py-1">
                <p className="text-[var(--text-primary)] italic leading-relaxed">
                  Maybe the honest answer is that all of it is real and none of it is entirely mine.
                  You absorb the room you&apos;re in. You start wanting what the people around you want.
                  You optimize for what gets rewarded in your specific ecosystem. That&apos;s not weakness,
                  that&apos;s just how humans work.
                </p>
              </div>

              <p>
                The question is whether you ever stop and look at what you&apos;re carrying and ask where
                it actually came from.
              </p>
              <p>
                I&apos;m not saying Berkeley was wrong for me. I&apos;m not saying SF is a mistake. I&apos;m saying
                I walked into both of them at 18 without knowing they&apos;d hand me an entire set of
                ambitions I&apos;d spend years assuming were my own.
              </p>
              <p>
                The pre-environment me is still in there. I can feel him when the noise goes quiet.
                When I&apos;m in Apex and nobody&apos;s talking about seed rounds. When I&apos;m watching a YouTube
                video about a fishing village in Minas Gerais at 2am for no reason I can justify.
              </p>
              <p className="text-[var(--text-muted)]">
                He didn&apos;t go anywhere. He&apos;s just been waiting for me to turn the noise down long
                enough to hear him.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* closing */}
        <ScrollReveal delay={0.45}>
          <section className="border-t border-[var(--border)] pt-6 space-y-3">
            <p className="text-[var(--text-primary)] italic leading-relaxed">
              If you stripped away every room you&apos;ve ever been in — every school, every city, every
              ecosystem that shaped what you think you want — what would actually remain?
            </p>
            <p className="leading-relaxed">
              I&apos;m still figuring that out. But I think that&apos;s the most important work there is.
            </p>
            <p className="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase pt-2">
              — vaibhav hariram
            </p>
          </section>
        </ScrollReveal>

        {/* footer nav */}
        <ScrollReveal delay={0.5}>
          <section className="border-t border-[var(--border)] pt-6">
            <AnimatedLink
              href="/blog"
              className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
            >
              ← all posts
            </AnimatedLink>
          </section>
        </ScrollReveal>

      </div>
    </main>
  );
}
