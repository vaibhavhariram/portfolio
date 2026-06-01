'use client';

import ThemeToggle from '@/components/ThemeToggle';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedLink from '@/components/AnimatedLink';

export default function Blog() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] px-6 py-12 md:py-16 relative">
      <AnimatedBackground />
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <div className="max-w-2xl mx-auto space-y-12 font-mono relative z-0 text-sm text-[var(--text-secondary)]">

        {/* back */}
        <ScrollReveal>
          <section>
            <AnimatedLink
              href="/"
              className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
            >
              ← back
            </AnimatedLink>
          </section>
        </ScrollReveal>

        {/* header */}
        <ScrollReveal delay={0.1}>
          <section className="space-y-2">
            <p className="text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
              writing
            </p>
            <h1 className="text-[var(--text-primary)] text-lg font-normal tracking-tight">
              things i think about
            </h1>
          </section>
        </ScrollReveal>

        {/* posts */}
        <ScrollReveal delay={0.2}>
          <section className="space-y-0">
            <ul className="divide-y divide-[var(--border)]">
              <li className="py-4">
                <AnimatedLink
                  href="/blog/world-cup-2026"
                  className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
                >
                  2026 world cup: claude&apos;s full predictions
                </AnimatedLink>
                <p className="text-[var(--text-muted)] text-xs mt-1">june 5, 2026</p>
              </li>
              <li className="py-4">
                <AnimatedLink
                  href="/blog/fulfilment"
                  className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
                >
                  ful<span className="italic">fil</span>ment
                </AnimatedLink>
                <p className="text-[var(--text-muted)] text-xs mt-1">issue 001 — may 28, 2026</p>
              </li>
            </ul>
          </section>
        </ScrollReveal>

        {/* footer */}
        <ScrollReveal delay={0.3}>
          <section className="pt-4 border-t border-[var(--border)] text-[var(--text-muted)] text-xs">
            <p>more on the way.</p>
          </section>
        </ScrollReveal>

      </div>
    </main>
  );
}
