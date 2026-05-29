'use client';

import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedLink from '@/components/AnimatedLink';

export default function Fulfilment() {
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
              issue 001 — may 28, 2026
            </p>
            <h1 className="text-[var(--text-primary)] text-2xl font-normal tracking-tight">
              ful<span className="italic">fil</span>ment
            </h1>
            <p className="text-[var(--text-muted)] text-xs">
              one L or two — and everything in between
            </p>
          </section>
        </ScrollReveal>

        {/* hero image */}
        <ScrollReveal delay={0.15}>
          <section>
            <div className="relative w-full aspect-[3/4] md:aspect-[4/3] overflow-hidden border border-[var(--border)]">
              <Image
                src="/images/twin-peaks.png"
                alt="Looking out over San Francisco from Twin Peaks at night"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-[10px] tracking-[0.15em] text-white/60 uppercase">
                  twin peaks, san francisco
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* intro */}
        <ScrollReveal delay={0.2}>
          <section className="space-y-4 leading-relaxed">
            <p>
              About once a month during my freshman year at Berkeley, I'd venture out to Twin Peaks.
              Bart to Civic Center, Muni to Haight Street, then a hike past some of the most insane
              houses I've ever seen. One magical sunset per month — usually after a midterm, a weekend
              I needed to get away from everyone, or just because the journey itself was the point.
            </p>
            <p>
              When I look at San Francisco from up there — this city of opportunity, frontier, and
              dreams — I see a bubble. People only obsessed with the next move. UGC kids angling for
              CMO. A member of technical staff at a research lab thinking about jumping to Anthropic.
              Medical students wanting to become doctors. High schoolers trying to get into college.
              And in my eyes, the whole ecosystem: the sales hustlers, the Luma event organizers, the
              hackathon vibecoders.
            </p>
            <p>
              Sitting down and looking at over a million people around me, I kept asking myself: what
              exactly am I fulfilling?
            </p>
          </section>
        </ScrollReveal>

        {/* section I */}
        <ScrollReveal delay={0.25}>
          <section className="space-y-4">
            <div className="border-t border-[var(--border)] pt-6 space-y-1">
              <p className="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">i — the american spelling</p>
              <h2 className="text-[var(--text-primary)] text-base">fulfilment</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                The dictionary definition is clean. Fulfilment: the achievement of something desired,
                promised, or predicted. One L. Notice what's missing — any mention of feeling good
                about it.
              </p>
              <p>
                I'm a rising sophomore at Berkeley, which means I got thrown into an ecosystem that
                gives this word a completely different shape. You're 19, surrounded by people who treat
                every action as an instrument. Everything becomes a calculated move. This gets to you.
                You start doing the same thing. And then one day you look up and realize you filter
                everything — every single thing — through one question.
              </p>

              {/* 6-rhythm callout */}
              <div className="border-t border-b border-[var(--border)] py-5 text-center space-y-1">
                <p className="text-[var(--text-muted)] text-xs tracking-[0.1em]">the only question that remains</p>
                <p className="text-[var(--text-primary)] text-sm leading-loose">
                  will this matter{' '}
                  <span className="text-[var(--text-primary)] font-medium">6 minutes</span>,{' '}
                  <span className="text-[var(--text-primary)] font-medium">6 hours</span>,{' '}
                  <span className="text-[var(--text-primary)] font-medium">6 days</span>,{' '}
                  <span className="text-[var(--text-primary)] font-medium">6 months</span>,{' '}
                  or{' '}
                  <span className="text-[var(--text-primary)] font-medium">6 years</span>{' '}
                  from now?
                </p>
              </div>

              <p>
                If the answer is no, you don't do it. Learning the drums? No. Reading for pleasure?
                Debatable. Gardening just because you want to? Absolutely not.
              </p>
              <p>
                That's the one-L version. You're achieving. You're moving. You have an internship for
                summer and you're already thinking about fall. You have goals for fall and you're
                already thinking about a year from now. The goal line keeps moving. You're never
                filled.
              </p>
              <p className="text-[var(--text-muted)]">
                Never ful-filled. One L because something is always missing.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* section II */}
        <ScrollReveal delay={0.3}>
          <section className="space-y-4">
            <div className="border-t border-[var(--border)] pt-6 space-y-1">
              <p className="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">ii — the british spelling</p>
              <h2 className="text-[var(--text-primary)] text-base">fulfillment</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                I played carnatic violin for ten years. I did quizbowl. I was learning French for no
                reason. I sketched characters. I collected geography maps because the world genuinely
                fascinated me. None of it was for anything. It was just mine. It was who I am.
              </p>
              <p>I don't do any of that anymore.</p>
              <p>
                Not because I stopped liking those things. Because at some point I started asking what
                they were for. And that question is poison. The moment you apply ROI logic to the
                things that make you a person, they stop working. The violin could literally be in my
                hands right now and my brain would file it under "useless." The thing I would spend
                countless hours on — perfecting ragas, krithis, playing one song hundreds of times.
                Useless.
              </p>

              {/* trade list */}
              <div className="border border-[var(--border)] divide-y divide-[var(--border)]">
                {[
                  { lost: 'violin practice', gained: 'side project' },
                  { lost: 'french', gained: 'leetcode' },
                  { lost: 'reading', gained: 'twitter' },
                  { lost: 'knitting', gained: 'doomscrolling' },
                ].map(({ lost, gained }) => (
                  <div key={lost} className="flex justify-between items-center px-4 py-2.5">
                    <span className="line-through text-[var(--text-muted)]">{lost}</span>
                    <span className="text-xs tracking-[0.1em] text-[var(--text-muted)]">→ {gained}</span>
                  </div>
                ))}
              </div>

              <p>
                Each trade seems fine. Then one day the person who did those things for no reason just
                isn't there anymore.
              </p>

              {/* disillusionment word */}
              <div className="py-4 text-center">
                <p className="text-2xl tracking-tight text-[var(--text-muted)] italic">
                  dis<span className="text-[var(--text-primary)] not-italic">illusion</span>ment
                </p>
              </div>

              <p>
                That's not ambition. That's not being the top 1%. That's what happens when you've
                been in a high-pressure environment long enough that your baseline — the version of you
                with actual preferences — gets quietly dismantled, one reasonable trade at a time.
              </p>
              <p>
                The uncomfortable truth is that I'm now numb to enjoying those things. I can't spend
                an hour absorbed in a 1940s map of India the way I would have five years ago without
                my mind pulling somewhere else. You make a resolution — not even an unrealistic one.
                Just: do something every day for one hour that genuinely satisfies you. A lot of
                people never tap into that again. Those hobbies just go. Forever.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* section III */}
        <ScrollReveal delay={0.35}>
          <section className="space-y-4">
            <div className="border-t border-[var(--border)] pt-6 space-y-1">
              <p className="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">iii — what it actually means</p>
              <h2 className="text-[var(--text-primary)] text-base">alignment</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                Here's what I think fulfillment actually is. Not achievement. Not constant joy.
                Something quieter.
              </p>

              {/* pull quote */}
              <div className="border-l-2 border-[var(--text-muted)] pl-4 py-1 space-y-0">
                <p className="text-[var(--text-primary)] italic leading-relaxed">
                  It's the person doing the thing and the person you actually are occupying the same
                  body at the same time. Not performing ambition. Not running a version of yourself
                  optimized for external legibility. Just being the same person inside and outside the
                  room.
                </p>
              </div>

              <p>
                I've been split for a while. The split is what emptiness actually feels like. You can
                hit every goal on the list and still feel hollow — because the person hitting those
                goals isn't really you. It's a mask you built to survive a particular environment, and
                somewhere along the way you forgot the mask isn't the face.
              </p>
              <p>
                From Twin Peaks, San Francisco looks like everything. But I stopped seeing the city. I
                stopped noticing the pizzerias open since the 1906 earthquake, the houses older than
                the startup ecosystem by a century. I just saw the bubble.
              </p>
              <p className="text-[var(--text-muted)]">
                That's the cost of optimizing everything and feeling nothing. You lose the view.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* closing */}
        <ScrollReveal delay={0.4}>
          <section className="border-t border-[var(--border)] pt-6 space-y-3">
            <p className="text-[var(--text-primary)] italic leading-relaxed">
              Pick up the drums. Cook something new. Record a dance video. Shoot some photos. Your
              definition of fulfillment isn't what you think it is — and that's exactly where you
              start.
            </p>
            <p className="text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase pt-2">
              — vaibhav hariram
            </p>
          </section>
        </ScrollReveal>

        {/* footer nav */}
        <ScrollReveal delay={0.45}>
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
