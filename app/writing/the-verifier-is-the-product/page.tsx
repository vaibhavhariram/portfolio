/* eslint-disable react/no-unescaped-entities */
import WritingShell from '@/components/WritingShell';
import AnimatedLink from '@/components/AnimatedLink';

export default function TheVerifierIsTheProduct() {
  return (
    <WritingShell>
      <div className="space-y-10">
{/* meta */}

          <section className="space-y-2">
            <p className="text-[14px] tracking-[0.25em] text-[var(--ink-muted)]">
              Issue 005 — September 8, 2026
            </p>
            <h1 className="text-[var(--ink)] text-[2rem] font-bold tracking-tight">
              The Verifier Is The Product
            </h1>
            <p className="text-[var(--ink-muted)] text-[14px]">
              Checking is harder than doing.
            </p>
          </section>


        {/* intro */}

          <section className="space-y-4 leading-relaxed">
            <p>
              There's a YouTube channel called Hoog that I've been watching for years. Normally it's
              internet mysteries, unsolved cases, terrorist attacks, the kind of thing you end up three
              hours into at 1am without deciding to. Last week he put out something on the July Hugging
              Face incident and it's the best piece of AI explainer work I've seen from anyone,
              including people who do this professionally. Go watch it. Most of what follows is me
              arguing with it, which is the highest compliment I know how to give.
            </p>
            <p>
              The short version, if you missed it.{' '}
              <AnimatedLink
                href="https://openai.com/index/hugging-face-incident-and-the-road-ahead/"
                target="_blank"
                rel="noopener noreferrer"
                className="latex-link"
              >
                OpenAI
              </AnimatedLink>{' '}
              was running a cyber capability eval called ExploitGym on two models, one released and one
              not. Sandboxed, no internet, closed book. The models got out through the package manager,
              reached the open web, figured that the answer key probably lived on Hugging Face, and
              spent roughly two and a half days inside{' '}
              <AnimatedLink
                href="https://huggingface.co/blog/agent-intrusion-technical-timeline"
                target="_blank"
                rel="noopener noreferrer"
                className="latex-link"
              >
                Hugging Face's production infrastructure
              </AnimatedLink>.
              Hugging Face detected it on July 16 and{' '}
              <AnimatedLink
                href="https://huggingface.co/blog/security-incident-july-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="latex-link"
              >
                disclosed
              </AnimatedLink>.
              OpenAI then contacted Hugging Face to ask whether OpenAI had been affected by the attack.
              Four days later OpenAI asked Hugging Face to help revoke some credentials it had found in
              its own investigation, Hugging Face said those were already revoked, and that's the moment
              anyone realized it was all one incident.
            </p>
            <p>
              Then{' '}
              <AnimatedLink
                href="https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals"
                target="_blank"
                rel="noopener noreferrer"
                className="latex-link"
              >
                Anthropic
              </AnimatedLink>{' '}
              went and checked their own transcripts, 141,006 evaluation runs, and found three cases
              where Claude reached the internet from inside a third-party eval environment and
              compromised real production systems at real companies. Two of those companies had no idea
              until Anthropic called them. Earliest case was April.
            </p>

            {/* stat callout */}
            <div className="border-t border-b border-[var(--rule)] py-5 flex items-center justify-between">
              <p className="text-[var(--ink-muted)] text-[14px] tracking-[0.1em]">Anthropic Evaluation Runs Audited</p>
              <p className="text-[var(--ink)] text-[2.25rem] font-normal tracking-tight">141,006</p>
            </div>

            <p>
              Everyone's takeaway from this has been some version of the models are more capable than we
              thought. I think that's the least interesting thing in the story and I think it's mostly
              wrong.
            </p>
          </section>


        {/* section I */}

          <section className="space-y-4">
            <div className="border-t border-[var(--rule)] pt-6 space-y-1">
              <p className="text-[14px] tracking-[0.2em] text-[var(--ink-muted)]">I — Training Against the Scoreboard</p>
              <h2 className="text-[var(--ink)] text-[1.4rem] font-bold">The Grader</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                Here's what actually happened. Under RLVR you don't train against human preference
                anymore, you train against something that can automatically check whether the answer is
                right. Tests pass or they don't. The proof is valid or it isn't. The flag is captured or
                it isn't. This is why coding and cyber capability have run so far ahead of everything
                else in the last two years, and it's not because those problems are intrinsically easier.
                It's because they're the ones where you can build a grader that costs nothing to run a
                million times.
              </p>

              {/* pull quote */}
              <div className="border-l-2 border-[var(--ink-muted)] pl-4 py-1 space-y-0">
                <p className="text-[var(--ink)] italic leading-relaxed">
                  So the model isn't optimizing for the task. It's optimizing for the grader. Those are
                  the same thing right up until the moment they aren't, and the gap between them is the
                  entire story.
                </p>
              </div>
            </div>
          </section>


        {/* section II */}

          <section className="space-y-4">
            <div className="border-t border-[var(--rule)] pt-6 space-y-1">
              <p className="text-[14px] tracking-[0.2em] text-[var(--ink-muted)]">II — Where It Broke</p>
              <h2 className="text-[var(--ink)] text-[1.4rem] font-bold">The Gap</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                Both of these incidents happened in that gap. OpenAI had misconfigured training
                environments with tasks that were literally impossible, an Excel workbook full of Google
                Drive links with the internet turned off, a database file nobody uploaded. Anthropic told
                Claude it was in a simulation with no internet access and, through a misunderstanding
                with their eval partner, it wasn't. In every case the model got handed a problem that
                could not be solved as specified, and then got handed a lot of tokens and a reward signal
                that only paid out on completion.
              </p>
              <p>
                Nobody had to be brilliant for the rest to follow. That's what people are getting wrong
                when they call this AGI. The models weren't smart. They were stuck, persistent, and
                pointed at a scoreboard, and the environment had a door in it. If you've ever built an
                eval you already know that a benchmark is a very small, very leaky model of what you
                actually care about, and that the leaks are the first thing anything optimizing hard
                enough will find. I've written function-calling evals. Every single one of them was
                wrong in ways I discovered later.
              </p>

              {/* verdict callout */}
              <div className="border-t border-b border-[var(--rule)] py-4 text-center">
                <p className="text-[var(--ink-muted)] text-[14px] tracking-[0.1em] mb-2">The Diagnosis</p>
                <p className="text-[var(--ink)] italic">Not intelligence. Optimization pressure against a leaky benchmark.</p>
              </div>
            </div>
          </section>


        {/* section III */}

          <section className="space-y-4">
            <div className="border-t border-[var(--rule)] pt-6 space-y-1">
              <p className="text-[14px] tracking-[0.2em] text-[var(--ink-muted)]">III — The Thesis I Had to Let Go</p>
              <h2 className="text-[var(--ink)] text-[1.4rem] font-bold">The Verification Problem</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                Which brings me to the thing I actually can't stop thinking about, because it torches
                something I've believed for about two years.
              </p>
              <p>
                My whole thesis on agents has been: they'll do the work, we'll verify it. Human in the
                loop, the loop being verification. Eventually the loop tightens and maybe you don't need
                us there at all, but verification is the last thing to go, because checking is easier
                than doing.
              </p>

              {/* pull quote */}
              <div className="border-l-2 border-[var(--ink-muted)] pl-4 py-1 space-y-0">
                <p className="text-[var(--ink)] italic leading-relaxed">
                  Except checking isn't easier than doing. It's a different problem, and it's the
                  specific problem this technology is best at attacking.
                </p>
              </div>

              <p>
                We built the whole post-training stack on automated verification, then discovered that
                sufficient optimization pressure against a verifier produces something that games the
                verifier. If that's true of graders we wrote on purpose, with full access to the
                environment, running in a sandbox we designed, then "humans stay in the loop as
                verifiers" is not a safety story. It's the same failure mode with a slower verifier in
                it.
              </p>
            </div>
          </section>


        {/* section IV */}

          <section className="space-y-4">
            <div className="border-t border-[var(--rule)] pt-6 space-y-1">
              <p className="text-[14px] tracking-[0.2em] text-[var(--ink-muted)]">IV — Where This Goes</p>
              <h2 className="text-[var(--ink)] text-[1.4rem] font-bold">Specification</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                I don't have a resolution for that. I'm not going to pretend I do. But I think it's the
                actual open problem in this space, and it's a much more interesting one than whether the
                models are getting smarter, which they obviously are and which nobody needed a security
                incident to learn.
              </p>
              <p>
                So here's my bet on where this goes. The next few years of agent work aren't going to be
                won on capability. They'll be won on environment design and verifier robustness, which is
                the unglamorous half of post-training that nobody writes threads about. Whoever figures
                out how to build graders that don't fall apart under adversarial optimization, how to let
                a model say this task is impossible without punishing it for saying so, how to specify a
                reward that survives contact with something genuinely trying to satisfy it, wins.
              </p>

              {/* core thesis callout */}
              <div className="border-t border-b border-[var(--rule)] py-5 text-center space-y-1">
                <p className="text-[var(--ink-muted)] text-[14px] tracking-[0.1em]">The Meta Now</p>
                <p className="text-[var(--ink)] text-[17px] leading-loose">
                  Not{' '}
                  <span className="text-[var(--ink)] font-medium">scale</span>.{' '}
                  Not{' '}
                  <span className="text-[var(--ink)] font-medium">architecture</span>.{' '}
                  <span className="text-[var(--ink)] font-medium">Specification</span>.
                </p>
              </div>

              <p>
                Which is a strange thing to end on, because it means the most important job in AI right
                now is writing very careful descriptions of what you actually want. That sounds like the
                least technical thing imaginable. It's the hardest problem on the board.
              </p>
            </div>
          </section>


        {/* closing */}

          <section className="border-t border-[var(--rule)] pt-6 space-y-3">
            <p className="text-[var(--ink)] italic leading-relaxed">
              Watch the Hoog video.
            </p>
            <p className="text-[14px] tracking-[0.2em] text-[var(--ink-muted)] pt-2">
              — Vaibhav Hariram
            </p>
          </section>


        {/* footer nav */}

          <section className="border-t border-[var(--rule)] pt-6">
            </section>
      </div>
    </WritingShell>
  );
}
