/* eslint-disable react/no-unescaped-entities */
import WritingShell from '@/components/WritingShell';

export default function DissectingSanFrancisco() {
  return (
    <WritingShell>
      <div className="space-y-10">
{/* meta */}
        
          <section className="space-y-2">
            <p className="text-[14px] tracking-[0.25em] text-[var(--ink-muted)]">
              Issue 003 — June 21, 2026
            </p>
            <h1 className="text-[var(--ink)] text-[2rem] font-normal tracking-tight">
              Dissecting San Francisco
            </h1>
            <p className="text-[var(--ink-muted)] text-[14px]">
              I went 47 times in freshman year. Yes, I tracked this.
            </p>
          </section>
        

        {/* intro */}
        
          <section className="space-y-4 leading-relaxed">
            {/* stat callout */}
            <div className="border-t border-b border-[var(--rule)] py-5 flex items-center justify-between">
              <p className="text-[var(--ink-muted)] text-[14px] tracking-[0.1em]">Trips to SF, Freshman Year</p>
              <p className="text-[var(--ink)] text-[2.25rem] font-normal tracking-tight">47</p>
            </div>

            <p>
              Same route I memorized freshman year. Red Line on the BART from Downtown Berkeley or
              the F Bus from Telegraph Avenue. When I first started going, I didn&apos;t notice the subtle
              details of the same streets I&apos;d walk on Market St., in Mission, or in Union Square.
            </p>
            <p>
              At first, I was exploring. I&apos;d go to Haight Street one weekend, Presidio the next, Nob
              Hill after that. Then it was attending random events on Luma, coffee chats, and meetups
              — to the point where I&apos;m sure the guys running my Clipper Card should outright ban me.
            </p>
            <p>
              Now every coffee shop has someone with a MacBook and a suitcase, the digital nomad
              starter pack rebranded for the AI era. Every conversation is about who just raised and
              who&apos;s moving where. The city I loved is still there, buried underneath something else.
            </p>
            <p>
              That shift is what I want to talk about. Because right now there&apos;s a narrative that&apos;s
              become almost religious.
            </p>

            {/* pullquote */}
            <div className="border-l-2 border-[var(--text-muted)] pl-4 py-1">
              <p className="text-[var(--ink)] italic leading-relaxed">
                If you aren&apos;t in San Francisco, you aren&apos;t going to make it.
              </p>
            </div>

            <p>A few days ago, I saw a post that captured this perfectly.</p>

            {/* social post card */}
            <div className="border border-[var(--rule)] p-4 space-y-3">
              <p className="text-[var(--ink-muted)] text-[14px] tracking-[0.1em]">Spotted on X</p>
              <p className="text-[var(--ink)] leading-relaxed">
                &ldquo;Who&apos;s in SF this summer? PS: Does anyone in SF have a couch? Floor? Closet?
                Asking for a friend! (I am the friend).&rdquo;
              </p>
              <div className="border-t border-[var(--rule)] pt-3 flex gap-6 text-[var(--ink-muted)] text-[14px]">
                <span>airport terminal photo</span>
                <span>·</span>
                <span>rimowa suitcase</span>
                <span>·</span>
                <span>macbook pro</span>
                <span>·</span>
                <span>passport</span>
              </div>
            </div>

            <p>
              Zero plan. Zero capital. Zero product. Just the dream and the city. On the surface it
              looks like hustle — the romanticized sacrifice of early Silicon Valley. But look closer.
              The mechanics are entirely different.
            </p>

            {/* verdict */}
            <div className="border-t border-b border-[var(--rule)] py-4 text-center">
              <p className="text-[var(--ink-muted)] text-[14px] tracking-[0.1em] mb-2">The Diagnosis</p>
              <p className="text-[var(--ink)] italic">This isn&apos;t sacrifice. It&apos;s startup cosplay.</p>
            </div>
          </section>
        

        {/* section I */}
        
          <section className="space-y-4">
            <div className="border-t border-[var(--rule)] pt-6 space-y-1">
              <p className="text-[14px] tracking-[0.2em] text-[var(--ink-muted)]">I — What SF Actually Is</p>
              <h2 className="text-[var(--ink)] text-[18px] font-medium">The Multiplier Problem</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                To be clear: San Francisco is incredible for one specific phase of building. If you
                have momentum, product-market fit, serious traction, being there accelerates
                everything. The density of VCs, founders, and engineers who&apos;ve actually shipped
                things is unmatched. I&apos;ve sat in those rooms. The access is real and it matters.
              </p>

              {/* multiplier formula */}
              <div className="border border-[var(--rule)] divide-y divide-[var(--rule)]">
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-[var(--ink-muted)] text-[14px]">SF Is a</span>
                  <span className="text-[var(--ink)] tracking-wider">multiplier</span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-[var(--ink-muted)] text-[14px]">A Multiplier of Zero Is</span>
                  <span className="text-[var(--ink)] tracking-wider">still zero</span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-[var(--ink-muted)] text-[14px]">The API Responses Are Identical In</span>
                  <span className="text-[var(--ink)] tracking-wider">soma or south africa</span>
                </div>
              </div>

              <p>
                Your address doesn&apos;t upgrade your brain. Living in Union Square doesn&apos;t make you
                sharper. If you don&apos;t have code to ship or customers paying you, moving here just
                means you&apos;re doing nothing in a much more expensive city.
              </p>
            </div>
          </section>
        

        {/* section II */}
        
          <section className="space-y-4">
            <div className="border-t border-[var(--rule)] pt-6 space-y-1">
              <p className="text-[14px] tracking-[0.2em] text-[var(--ink-muted)]">II — Cost-Benefit Analysis</p>
              <h2 className="text-[var(--ink)] text-[18px] font-medium">Burning Runway on Status</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                Here&apos;s what gets glossed over: the people doing the couch-surfing thing aren&apos;t just
                wasting time. They&apos;re burning capital on status.
              </p>

              {/* trade table */}
              <div className="border border-[var(--rule)] divide-y divide-[var(--rule)]">
                {[
                  { action: 'every week without rent', cost: 'runway you could have had' },
                  { action: 'shower at equinox', cost: 'performing proximity' },
                  { action: 'highest cost of living', cost: 'living on someone else&apos;s goodwill' },
                  { action: 'living for free in sf', cost: 'social currency as strategy' },
                ].map(({ action, cost }) => (
                  <div key={action} className="flex justify-between items-start px-4 py-3 gap-4">
                    <span className="text-[var(--ink-muted)] text-[14px]">{action}</span>
                    <span className="text-[var(--ink)] text-[14px] text-right shrink-0">→ {cost}</span>
                  </div>
                ))}
              </div>

              <p className="text-[var(--ink-muted)]">
                That&apos;s not a long-term strategy. That&apos;s a drain.
              </p>
            </div>
          </section>
        

        {/* section III */}
        
          <section className="space-y-4">
            <div className="border-t border-[var(--rule)] pt-6 space-y-1">
              <p className="text-[14px] tracking-[0.2em] text-[var(--ink-muted)]">III — What the City Speaks to You</p>
              <h2 className="text-[var(--ink)] text-[18px] font-medium">The Quiet Is a Competitive Advantage</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>
                But there&apos;s something deeper I&apos;ve noticed. Density creates noise. When you&apos;re
                surrounded by thousands of people all chasing the same trend, all talking about the
                same AI frameworks, all optimizing for the same networks, it&apos;s stupidly easy to lose
                your own voice.
              </p>
              <p>
                I work at Intel in Folsom this summer. I turned down multiple startup offers in San
                Francisco to be here. Most people think that&apos;s insane.
              </p>

              {/* pullquote */}
              <div className="border-l-2 border-[var(--text-muted)] pl-4 py-1">
                <p className="text-[var(--ink)] italic leading-relaxed">
                  &ldquo;Why would you leave the action?&rdquo;
                </p>
              </div>

              <p>Because The Quiet Is a Competitive Advantage.</p>
              <p>
                Folsom isn&apos;t glamorous. It&apos;s a suburb of Sacramento. Nobody&apos;s posting about it. But I
                still meet people at work everyday doing brilliant things with AI. The difference is
                I&apos;m not drowning in a thousand other priorities. I can actually think.
              </p>
              <p>
                I started building a feature for my side project that I never would have attempted in
                SF. It&apos;s solving a specific problem for a specific group of users — not sexy, not
                VC-friendly, not the kind of thing that trends on X. In Folsom, I could actually
                finish it without someone in a coffee shop casually mentioning that five other
                startups are pivoting to that exact space and the market is &ldquo;getting crowded.&rdquo;
              </p>
              <p className="text-[var(--ink-muted)]">
                In SF, I would have abandoned it mid-way. The noise would have convinced me it
                wasn&apos;t worth doing.
              </p>
            </div>
          </section>
        

        {/* section IV */}
        
          <section className="space-y-4">
            <div className="border-t border-[var(--rule)] pt-6 space-y-1">
              <p className="text-[14px] tracking-[0.2em] text-[var(--ink-muted)]">IV — The Real Timeline</p>
              <h2 className="text-[var(--ink)] text-[18px] font-medium">Stage Determines Strategy</h2>
            </div>

            <div className="leading-relaxed space-y-4">
              <p>Here&apos;s what I think actually matters: the stage you&apos;re at.</p>

              {/* stage split */}
              <div className="border border-[var(--rule)] divide-y divide-[var(--rule)]">
                <div className="px-4 py-4 space-y-1">
                  <p className="text-[var(--ink)] text-[14px] tracking-[0.15em] font-medium">Move to SF When —</p>
                  <p className="text-[var(--ink-muted)] text-[14px] leading-relaxed pt-1">
                    you have a product people want · you need to raise or scale a team · the density
                    of capital and talent is tactically useful at your current phase
                  </p>
                </div>
                <div className="px-4 py-4 space-y-1">
                  <p className="text-[var(--ink-muted)] text-[14px] tracking-[0.15em]">Stay Wherever You Are When —</p>
                  <p className="text-[var(--ink-muted)] text-[14px] leading-relaxed pt-1">
                    you&apos;re still figuring out what you&apos;re making · still learning the space · still
                    building the core thing · you need minimum noise, not maximum cost
                  </p>
                </div>
              </div>

              {/* counter-examples */}
              <div className="border-t border-b border-[var(--rule)] py-4 space-y-3">
                <p className="text-[var(--ink-muted)] text-[14px] tracking-[0.1em]">Built Elsewhere. Won Anyway.</p>
                <div className="grid grid-cols-3 gap-px bg-[var(--rule)]">
                  {[
                    { co: 'Stripe', where: 'Dublin' },
                    { co: 'Shopify', where: 'Ottawa' },
                    { co: 'Duolingo', where: 'Pittsburgh' },
                  ].map(({ co, where }) => (
                    <div key={co} className="bg-[var(--bg-primary)] px-3 py-3 space-y-0.5">
                      <p className="text-[var(--ink)] text-[14px] font-medium">{co}</p>
                      <p className="text-[var(--ink-muted)] text-[14px]">{where}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[var(--ink-muted)] text-[14px]">
                  not because those cities are better. because they had the focus to build something
                  distinct before the world noticed them.
                </p>
              </div>
            </div>
          </section>
        

        {/* closing */}
        
          <section className="border-t border-[var(--rule)] pt-6 space-y-4">
            <div className="space-y-1 pb-2">
              <p className="text-[14px] tracking-[0.2em] text-[var(--ink-muted)]">V — The Real Dream</p>
              <h2 className="text-[var(--ink)] text-[18px] font-medium">Make It a Consequence</h2>
            </div>
            <p className="leading-relaxed">
              Don&apos;t find an excuse to come to SF. Build something so solid, so technically sound, or
              so revenue-positive that coming to SF becomes a logical next step. Make it a consequence
              of execution, not a substitute for it.
            </p>
            <p className="leading-relaxed">
              Some of the best builders I know aren&apos;t in SF. Some are miles ahead and have no plans
              to move. Why? Because they&apos;re too busy shipping to care about the room.
            </p>
            <p className="text-[var(--ink)] italic leading-relaxed">
              SF is incredible if you&apos;re already real. If you&apos;re still figuring it out, no zip code
              is going to fix that.
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
