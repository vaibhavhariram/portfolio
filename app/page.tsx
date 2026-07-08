import ContactLinks from "@/components/ContactLinks";
import DesignNav from "@/components/DesignNav";

export default function Home() {
  return (
    <main className="min-h-screen">
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
            CS and Geography at Berkeley. I spend most of my time teaching AI
            systems to know when they&apos;re wrong. Turn out that&apos;s the
            hard part, not the being-smart part.
          </p>

          <p>
            Right now I&apos;m at Intel doing AI and ML engineering on PMC
            &amp; Firmware Validation, building Shana: immigration guidance for
            F-1/OPT/H-1B holders that doesn&apos;t require a lawyer just to
            understand the first form, and doing research with Berkeley RISE
            Lab&apos;s{" "}
            <a
              href="https://gorilla.cs.berkeley.edu/leaderboard.html"
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
            >
              Gorilla
            </a>{" "}
            Project on function-calling evals. If a benchmark&apos;s ever told
            you your model&apos;s tool-use is bad, that might be part of my
            work.
          </p>

          <p>
            Before this:{" "}
            <a
              href="https://usepaprika.co"
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
            >
              Paprika
            </a>
            , a runtime policy and replay system for AI agents, running with 25+
            teams now. Some infra work at{" "}
            <a
              href="https://flywheelos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
            >
              Flywheel
            </a>
            . A few PRs into{" "}
            <a
              href="https://github.com/vllm-project/vllm"
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
            >
              vLLM
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/pytorch/ao"
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
            >
              PyTorch
            </a>
            , not all of them made it — that&apos;s fine. Started out doing GIS
            software work at{" "}
            <a
              href="https://public.railinc.com/products-services/location_management"
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
            >
              Railinc
            </a>
            , which is where the map obsession actually comes from.
          </p>

          <p>
            Outside of that- I collect old maps and jerseys, sketch when
            I&apos;m patient, take too many photos of skylines, and watch Chelsea
            find new ways to disappoint me every week. Also deep into all types
            of{" "}
            <a
              href="https://open.spotify.com/user/y1b8q06v7nfj7vycxi4huo70u"
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
            >
              music
            </a>
            , k-dramas and{" "}
            <a
              href="https://anilist.co/user/vaibhavhariram/animelist"
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
            >
              anime
            </a>
            .
          </p>

          <p>Talk to me about any of it, anytime.</p>
        </div>

        <footer className="mt-10 pt-6 border-t border-[var(--rule)]">
          <h2 className="latex-section mt-0 mb-2">Design</h2>
          <DesignNav />
        </footer>
      </article>
    </main>
  );
}
