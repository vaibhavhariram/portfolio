import ContactLinks from "@/components/ContactLinks";
import AnimatedLink from "@/components/AnimatedLink";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <DarkModeToggle />
      <article className="max-w-[52rem] mx-auto w-full px-10 md:px-20 py-10 md:py-16">
        <header className="mb-8 pb-5 border-b border-[var(--rule)]">
          <h2 className="latex-section mt-0 mb-2">Links</h2>
          <ContactLinks />
        </header>

        <h1 className="text-[2rem] md:text-[2.75rem] font-bold tracking-tight leading-tight mb-8 pb-6 border-b border-[var(--rule)]">
          Vaibhav Hariram
        </h1>

        <div className="space-y-5 text-[18px] md:text-[19px] leading-[1.75] text-[var(--ink)]">
          <p>
            CS and Geography at Berkeley. Most of my work sits on the
            correctness side of AI systems: evals, validation, and the tooling
            that tells you when a model is wrong. That turns out to be harder
            than making it smart.
          </p>

          <p>
            I&apos;m on leave from school this fall, working at Intel on AI/ML
            engineering for validation. This past summer I was there on power
            management controller and firmware validation, mostly pre-silicon.
          </p>

          <p>
            Within geography, I tend to specialize in spatial machine learning
            and computational geoinformatics: routing algorithms, GIS pipelines,
            and how models represent physical space in the first place. Spatial
            intelligence is the direction I think matters most in AI right now.
            World models and physical AI are where I want my work to end up.
          </p>

          <p>
            I also care about consumer software, and about applying AI to social
            problems people actually run into. Immigration is the one I&apos;ve
            spent the most time on, with a few others I&apos;m working toward.
          </p>

          <p>
            Before this: research with Berkeley RISE Lab&apos;s{" "}
            <AnimatedLink
              href="https://gorilla.cs.berkeley.edu/leaderboard.html"
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
            >
              Gorilla
            </AnimatedLink>{" "}
            project on function-calling evals, so if a benchmark has ever told
            you your model&apos;s tool use is bad, some of that was my work.{" "}
            <AnimatedLink
              href="https://usepaprika.co"
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
            >
              Paprika
            </AnimatedLink>
            , a runtime policy and replay system for AI agents, running with 25+
            teams now. Infra automating B2B content at{" "}
            <AnimatedLink
              href="https://flywheelos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
            >
              Flywheel
            </AnimatedLink>
            . I started on location management software at{" "}
            <AnimatedLink
              href="https://public.railinc.com/products-services/location_management"
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
            >
              Railinc
            </AnimatedLink>
            , which is where all of the spatial work comes from.
          </p>

          <p>
            Recently: I&apos;ve been getting into k-pop, looking forward to
            watching Chelsea disappoint me again this season, and getting back
            into seasonal anime. Planning a trip to Central Asia and convincing
            my roommates to get a cat for the apartment are also in the works.
          </p>

          <p>Talk to me about any of it, anytime.</p>
        </div>

        <footer className="mt-10 pt-6 border-t border-[var(--rule)]">
          <nav className="text-[16px] md:text-[17px] leading-relaxed">
            <a href="/writing" className="latex-link">Writing</a>
          </nav>
        </footer>
      </article>
    </main>
  );
}
