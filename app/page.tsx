import type { ReactNode } from "react";
import ContactLinks from "@/components/ContactLinks";
import AnimatedLink from "@/components/AnimatedLink";
import DarkModeToggle from "@/components/DarkModeToggle";

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <AnimatedLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="latex-link"
    >
      {children}
    </AnimatedLink>
  );
}

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
            Hi! I&apos;m Vaibhav, a second-year at UC Berkeley studying Computer
            Science and Geography, with a minor in Data Science. I work on
            applied AI and systems, plus geospatial applications.
          </p>

          <p>
            Right now I&apos;m building{" "}
            <Ext href="https://judelabs.xyz">Jude</Ext>: System 1 models that
            companies own, trained on every decision they&apos;ve already made.
            This past summer I was an AI/ML intern at{" "}
            <Ext href="https://intel.com">Intel</Ext>, working on power
            management controller and firmware validation, mostly pre-silicon.
          </p>

          <p>
            Before that, I worked on optimization problems at a{" "}
            <Ext href="https://en.wikipedia.org/wiki/Combinatorial_explosion">
              stealth defense startup
            </Ext>
            ; did function-calling evals research at Berkeley&apos;s{" "}
            <Ext href="https://gorilla.cs.berkeley.edu/leaderboard.html">
              Sky Computing Lab
            </Ext>{" "}
            under Prof. Joey Gonzalez; built{" "}
            <Ext href="https://usepaprika.co">Paprika</Ext>, a runtime policy
            and replay system for AI agents; was a founding engineer at{" "}
            <Ext href="https://flywheelos.com">Flywheel</Ext>, building infra
            that automates B2B content; and was a GIS software engineering
            intern at <Ext href="https://railinc.com">Railinc</Ext>, building
            software for the freight rail industry.
          </p>

          <p>
            Outside of work: I love{" "}
            <Ext href="https://anilist.co/user/vaibhavhariram/animelist">
              anime
            </Ext>
            , K-dramas, South Indian movies, thrifting,{" "}
            <Ext href="https://open.spotify.com/user/y1b8q06v7nfj7vycxi4huo70u">
              music
            </Ext>
            , sketching,{" "}
            <Ext href="https://www.fotmob.com/teams/8455/fixtures/chelsea">
              Chelsea F.C.
            </Ext>
            , and{" "}
            <Ext href="https://en.wikipedia.org/wiki/Sports_in_Chicago">
              Chicago sports
            </Ext>
            . I&apos;ve been to nearly 50 countries.
          </p>
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
