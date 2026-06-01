'use client'

import { motion, type Variants } from 'framer-motion'
import AnimatedBackground from '@/components/AnimatedBackground'
import ThemeToggle from '@/components/ThemeToggle'
import AnimatedLink from '@/components/AnimatedLink'
import { useState } from 'react'

// ─── animation ───────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

// ─── types ───────────────────────────────────────────────────────────────────

type QStatus = 'w' | 'r' | 't' | 'x'
type Team = { name: string; pts: number; gd: number; q: QStatus }
type Group = { id: string; teams: Team[] }
type Match = { h: string; hs: number; a: string; as: number; w: 'h' | 'a'; note?: string; sp?: 'fin' | 'trd' }

// ─── data ────────────────────────────────────────────────────────────────────

const groups: Group[] = [
  { id: 'A', teams: [{ name: 'Mexico', pts: 7, gd: 5, q: 'w' }, { name: 'South Korea', pts: 4, gd: 0, q: 'r' }, { name: 'South Africa', pts: 3, gd: -1, q: 't' }, { name: 'Czech Rep.', pts: 0, gd: -4, q: 'x' }] },
  { id: 'B', teams: [{ name: 'Canada', pts: 9, gd: 5, q: 'w' }, { name: 'Switzerland', pts: 6, gd: 2, q: 'r' }, { name: 'Bosnia', pts: 3, gd: 1, q: 't' }, { name: 'Qatar', pts: 0, gd: -8, q: 'x' }] },
  { id: 'C', teams: [{ name: 'Brazil', pts: 7, gd: 8, q: 'w' }, { name: 'Morocco', pts: 5, gd: 2, q: 'r' }, { name: 'Scotland', pts: 2, gd: -1, q: 'x' }, { name: 'Haiti', pts: 0, gd: -9, q: 'x' }] },
  { id: 'D', teams: [{ name: 'USA', pts: 7, gd: 2, q: 'w' }, { name: 'Turkey', pts: 4, gd: 0, q: 'r' }, { name: 'Australia', pts: 3, gd: 0, q: 't' }, { name: 'Paraguay', pts: 3, gd: -1, q: 'x' }] },
  { id: 'E', teams: [{ name: 'Germany', pts: 9, gd: 7, q: 'w' }, { name: 'Ecuador', pts: 4, gd: 2, q: 'r' }, { name: 'Ivory Coast', pts: 4, gd: 1, q: 't' }, { name: 'Curaçao', pts: 0, gd: -9, q: 'x' }] },
  { id: 'F', teams: [{ name: 'Japan', pts: 9, gd: 4, q: 'w' }, { name: 'Netherlands', pts: 6, gd: 2, q: 'r' }, { name: 'Sweden', pts: 3, gd: -1, q: 't' }, { name: 'Tunisia', pts: 0, gd: -5, q: 'x' }] },
  { id: 'G', teams: [{ name: 'Egypt', pts: 6, gd: 2, q: 'w' }, { name: 'Iran', pts: 6, gd: 1, q: 'r' }, { name: 'Belgium', pts: 6, gd: 0, q: 't' }, { name: 'New Zealand', pts: 0, gd: -3, q: 'x' }] },
  { id: 'H', teams: [{ name: 'Spain', pts: 9, gd: 9, q: 'w' }, { name: 'Uruguay', pts: 6, gd: 3, q: 'r' }, { name: 'Saudi Arabia', pts: 3, gd: -3, q: 'x' }, { name: 'Cabo Verde', pts: 0, gd: -9, q: 'x' }] },
  { id: 'I', teams: [{ name: 'France', pts: 9, gd: 6, q: 'w' }, { name: 'Senegal', pts: 6, gd: 1, q: 'r' }, { name: 'Norway', pts: 3, gd: 3, q: 't' }, { name: 'Iraq', pts: 0, gd: -10, q: 'x' }] },
  { id: 'J', teams: [{ name: 'Argentina', pts: 9, gd: 6, q: 'w' }, { name: 'Austria', pts: 6, gd: 1, q: 'r' }, { name: 'Algeria', pts: 3, gd: 2, q: 't' }, { name: 'Jordan', pts: 0, gd: -9, q: 'x' }] },
  { id: 'K', teams: [{ name: 'Portugal', pts: 7, gd: 8, q: 'w' }, { name: 'Colombia', pts: 7, gd: 5, q: 'r' }, { name: 'Uzbekistan', pts: 3, gd: -3, q: 'x' }, { name: 'DR Congo', pts: 0, gd: -10, q: 'x' }] },
  { id: 'L', teams: [{ name: 'England', pts: 9, gd: 6, q: 'w' }, { name: 'Croatia', pts: 6, gd: 1, q: 'r' }, { name: 'Panama', pts: 3, gd: -2, q: 'x' }, { name: 'Ghana', pts: 0, gd: -5, q: 'x' }] },
]

const bracketRounds: Record<string, { label: string; cols: number; matches: Match[] }> = {
  r32: {
    label: 'round of 32',
    cols: 2,
    matches: [
      { h: 'France', hs: 4, a: 'Belgium', as: 1, w: 'h' },
      { h: 'England', hs: 2, a: 'Ivory Coast', as: 1, w: 'h' },
      { h: 'Spain', hs: 5, a: 'Australia', as: 0, w: 'h' },
      { h: 'Brazil', hs: 3, a: 'South Africa', as: 1, w: 'h' },
      { h: 'Germany', hs: 1, a: 'Japan', as: 2, w: 'a' },
      { h: 'Egypt', hs: 1, a: 'Netherlands', as: 0, w: 'h' },
      { h: 'Argentina', hs: 3, a: 'Algeria', as: 0, w: 'h' },
      { h: 'Colombia', hs: 2, a: 'USA', as: 1, w: 'h' },
      { h: 'Portugal', hs: 2, a: 'Norway', as: 0, w: 'h' },
      { h: 'Uruguay', hs: 2, a: 'Bosnia', as: 1, w: 'h' },
      { h: 'Mexico', hs: 1, a: 'Switzerland', as: 2, w: 'a' },
      { h: 'Canada', hs: 2, a: 'South Korea', as: 0, w: 'h' },
      { h: 'Croatia', hs: 0, a: 'Ecuador', as: 1, w: 'a' },
      { h: 'Turkey', hs: 0, a: 'Iran', as: 2, w: 'a' },
      { h: 'Austria', hs: 2, a: 'Sweden', as: 0, w: 'h' },
      { h: 'Morocco', hs: 2, a: 'Senegal', as: 1, w: 'h' },
    ],
  },
  r16: {
    label: 'round of 16',
    cols: 2,
    matches: [
      { h: 'France', hs: 2, a: 'Morocco', as: 1, w: 'h' },
      { h: 'England', hs: 2, a: 'Switzerland', as: 0, w: 'h' },
      { h: 'Spain', hs: 3, a: 'Iran', as: 0, w: 'h' },
      { h: 'Brazil', hs: 2, a: 'Ecuador', as: 1, w: 'h' },
      { h: 'Japan', hs: 2, a: 'Egypt', as: 0, w: 'h' },
      { h: 'Argentina', hs: 2, a: 'Uruguay', as: 1, w: 'h' },
      { h: 'Colombia', hs: 3, a: 'Portugal', as: 2, w: 'h' },
      { h: 'Canada', hs: 2, a: 'Austria', as: 0, w: 'h' },
    ],
  },
  qf: {
    label: 'quarterfinals',
    cols: 1,
    matches: [
      { h: 'France', hs: 2, a: 'England', as: 1, w: 'h', note: "Anderson red card 55' — England reduced to 10 men" },
      { h: 'Spain', hs: 2, a: 'Brazil', as: 1, w: 'h', note: "Bruno Guimarães red card 69' — Brazil reduced to 10 men" },
      { h: 'Argentina', hs: 2, a: 'Japan', as: 1, w: 'h' },
      { h: 'Colombia', hs: 2, a: 'Canada', as: 1, w: 'h' },
    ],
  },
  sf: {
    label: 'semifinals',
    cols: 1,
    matches: [
      { h: 'France', hs: 1, a: 'Spain', as: 1, w: 'h', note: 'AET — France 4–3 on penalties' },
      { h: 'Colombia', hs: 2, a: 'Argentina', as: 1, w: 'h' },
    ],
  },
  fin: {
    label: '3rd + final',
    cols: 1,
    matches: [
      { h: 'Spain', hs: 2, a: 'Argentina', as: 2, w: 'a', note: "3rd place — AET — Argentina 5–4 pens — Messi's last game", sp: 'trd' },
      { h: 'France', hs: 2, a: 'Colombia', as: 1, w: 'h', note: "final — AET — Mbappé 33' 98' · Díaz 67'", sp: 'fin' },
    ],
  },
}

const moments = [
  { n: 1, title: "Japan 2–1 Germany — round of 32", tag: 'upset', desc: "same scoreline as 2022. same halftime substitutions from moriyasu. kubo, top corner, 67th minute. the german front page the next morning: ALBTRAUM." },
  { n: 2, title: "frantzdy pierrot chips alisson — haiti vs brazil", tag: 'group stage', desc: "port-au-prince went dark. haiti's power grid failed under the weight of a nation watching. a striker from the haitian domestic league. the world's best goalkeeper. the chip." },
  { n: 3, title: "messi alone at the center circle — 47 seconds", tag: 'semifinal', desc: "colombia beat argentina 2–1. he stood alone for 47 seconds. the stadium stood. he raised one hand. walked off." },
  { n: 4, title: "kanté subbed off, 58th minute of the final", tag: 'final', desc: "82,500 people gave him a standing ovation. he raised his hand. he smiled the kanté smile. 200,000 people in paris cried specifically about this moment, not the scoreline." },
  { n: 5, title: "mbappé scores in the 98th minute and doesn't celebrate", tag: 'final', desc: "he ran to the corner flag and screamed. not at anyone. at everything. the bad season. the doubts. the people who said he was declining at 27." },
  { n: 6, title: "díaz equalizes in the 67th minute of the final", tag: 'final', desc: "off the post. his 8th of the tournament. plaza de bolívar, bogotá: 60,000 people, 94 decibels. his mother in la guajira closed her eyes for two seconds." },
  { n: 7, title: "kubo receives messi's shirt — the rose bowl", tag: 'quarterfinal', desc: "after argentina beat japan, kubo walked directly to messi. messi gave the shirt without hesitation. the image was everywhere within minutes." },
  { n: 8, title: "the village in chad — borrowed generator, soup bowl dish", tag: 'global', desc: "340 people. a tv from 1987. enough fuel for four hours. they watched the full final. when it ended they went to sleep having seen the same thing 1.5 billion people saw." },
]

// ─── sub-components ──────────────────────────────────────────────────────────

function GdBadge({ n }: { n: number }) {
  if (n > 0) return <span className="text-emerald-600 dark:text-emerald-400">+{n}</span>
  if (n < 0) return <span className="text-rose-500 dark:text-rose-400">{n}</span>
  return <span className="text-[var(--text-muted)]">0</span>
}

function GroupsWidget() {
  return (
    <div className="my-8">
      <div className="grid grid-cols-3 gap-2">
        {groups.map((g) => (
          <div key={g.id} className="border border-[var(--border)] rounded-md overflow-hidden">
            <div className="px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 border-b border-[var(--border)]">
              <span className="text-[10px] font-medium text-[var(--text-muted)] tracking-widest uppercase">group {g.id}</span>
            </div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-2.5 py-1 text-left text-[10px] font-normal text-[var(--text-muted)] border-b border-[var(--border)]">team</th>
                  <th className="px-2 py-1 text-center text-[10px] font-normal text-[var(--text-muted)] border-b border-[var(--border)]">pts</th>
                  <th className="px-2 py-1 text-center text-[10px] font-normal text-[var(--text-muted)] border-b border-[var(--border)]">gd</th>
                </tr>
              </thead>
              <tbody>
                {g.teams.map((t, i) => (
                  <tr
                    key={t.name}
                    className={[
                      i < g.teams.length - 1 ? 'border-b border-[var(--border)]' : '',
                      t.q === 'w' || t.q === 'r' ? 'bg-emerald-50/60 dark:bg-emerald-950/30' : '',
                      t.q === 't' ? 'bg-amber-50/60 dark:bg-amber-950/20' : '',
                    ].join(' ')}
                  >
                    <td className="px-2.5 py-1 text-[11px] text-[var(--text-primary)]">{t.name}</td>
                    <td className="px-2 py-1 text-center text-[11px] font-medium text-[var(--text-primary)]">{t.pts}</td>
                    <td className="px-2 py-1 text-center text-[11px]"><GdBadge n={t.gd} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-4 text-[10px] text-[var(--text-muted)]">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 inline-block" />qualified (1st / 2nd)</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-amber-100 dark:bg-amber-950 border border-amber-300 dark:border-amber-800 inline-block" />3rd place — best 8 advance</span>
      </div>
      <p className="mt-1.5 text-[10px] text-[var(--text-muted)]">note: group D corrected — turkey not sweden. sweden is group F. belgium goes through as best third despite finishing 3rd in group G with 6pts.</p>
    </div>
  )
}

function MatchCard({ m }: { m: Match }) {
  const hW = m.w === 'h'
  const aW = m.w === 'a'
  const border = m.sp === 'fin'
    ? 'border-amber-400 dark:border-amber-600'
    : m.sp === 'trd'
    ? 'border-dashed border-[var(--border)]'
    : 'border-[var(--border)]'
  return (
    <div className={`border rounded-md overflow-hidden text-[11px] ${border}`}>
      <div className={`flex items-center justify-between px-2.5 py-1.5 border-b border-[var(--border)] ${hW ? 'bg-emerald-50/70 dark:bg-emerald-950/30' : ''}`}>
        <span className={`flex-1 truncate ${hW ? 'font-medium text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>{m.h}</span>
        <span className={`ml-2 font-medium ${hW ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>{m.hs}</span>
      </div>
      <div className={`flex items-center justify-between px-2.5 py-1.5 ${aW ? 'bg-emerald-50/70 dark:bg-emerald-950/30' : ''}`}>
        <span className={`flex-1 truncate ${aW ? 'font-medium text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>{m.a}</span>
        <span className={`ml-2 font-medium ${aW ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>{m.as}</span>
      </div>
      {m.note && (
        <div className="px-2.5 py-1 border-t border-[var(--border)] bg-zinc-50/80 dark:bg-zinc-900/80 text-[10px] text-[var(--text-muted)] leading-snug">{m.note}</div>
      )}
    </div>
  )
}

function BracketWidget() {
  const [active, setActive] = useState<string>('r32')
  const tabs = Object.entries(bracketRounds)
  const round = bracketRounds[active]

  return (
    <div className="my-8">
      <div className="flex gap-1.5 mb-4 flex-wrap">
        {tabs.map(([key, r]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={[
              'px-3 py-1 text-[11px] rounded border transition-colors',
              active === key
                ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)]',
            ].join(' ')}
          >
            {r.label}
          </button>
        ))}
      </div>
      <div className={`grid gap-2 ${round.cols === 2 ? 'grid-cols-2' : 'grid-cols-1 max-w-xs'}`}>
        {round.matches.map((m, i) => (
          <MatchCard key={i} m={m} />
        ))}
      </div>
    </div>
  )
}

function MomentsWidget() {
  const tagColor: Record<string, string> = {
    upset: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800',
    'group stage': 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700',
    semifinal: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200 dark:border-blue-800',
    quarterfinal: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200 dark:border-blue-800',
    final: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800',
    global: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700',
  }
  return (
    <div className="my-8 divide-y divide-[var(--border)]">
      {moments.map((m) => (
        <div key={m.n} className="py-3.5 flex gap-4">
          <span className="text-[11px] text-[var(--text-muted)] pt-0.5 w-5 shrink-0">{m.n}</span>
          <div>
            <div className="mb-1.5">
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${tagColor[m.tag] ?? tagColor.global}`}>{m.tag}</span>
            </div>
            <p className="text-sm font-medium text-[var(--text-primary)] mb-1">{m.title}</p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">{m.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function WorldCup2026Page() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] px-6 py-12 md:py-16 relative">
      <AnimatedBackground />
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <div className="max-w-2xl mx-auto font-mono relative z-0">

        {/* back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-10"
        >
          <AnimatedLink
            href="/blog"
            className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors underline underline-offset-2"
          >
            ← blog
          </AnimatedLink>
        </motion.div>

        {/* header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-10"
        >
          <p className="text-xs text-[var(--text-muted)] mb-3">june 5, 2026</p>
          <h1 className="text-2xl font-medium text-[var(--text-primary)] mb-3 leading-snug">
            2026 world cup: claude&apos;s full predictions
          </h1>
          <p className="text-xs text-[var(--text-muted)]">
            claude sonnet 4.6 vs vaibhav — bracket on record before a ball is kicked. come back in july.
          </p>
        </motion.div>

        {/* divider */}
        <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
          <div className="h-px bg-[var(--border)] mb-10" />
        </motion.div>

        {/* body */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-6 text-sm text-[var(--text-primary)] leading-relaxed"
        >

          {/* intro */}
          <p>
            i&apos;ve been watching football for eight years. my dad explained the 7–1 to me when i was eight years old and i&apos;ve never fully recovered. this summer i&apos;m watching every game i can, and before a ball is kicked i want some predictions on record — an ai against me. claude sonnet 4.6 simulated the whole tournament: bracket, golden boot, player of the tournament, everything. no bias, just vibes and storylines. let&apos;s see who gets it right.
          </p>

          {/* section: short version */}
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3 font-medium">the short version</p>
            <p>
              france win the world cup. luis díaz wins the golden boot and player of the tournament. japan beat germany in the round of 32. again. england go out in the quarterfinals to france because of a red card and a manager who left palmer and foden at home. the final is france 2–1 colombia after extra time. mbappé scores the winner in the 98th minute and doesn&apos;t smile.
            </p>
            <p className="mt-3 text-[var(--text-muted)]">if even three of those happen i&apos;ll never use chatgpt again.</p>
          </div>

          <div className="h-px bg-[var(--border)]" />

          {/* section: france */}
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3 font-medium">france</p>
            <p>
              the best team at this world cup by a distance. mbappé is coming off a difficult season at real madrid, which means he arrives hungry rather than comfortable. dembelé won the ballon d&apos;or. olise was the best player in europe this season at bayern. behind them is a young core: zaire-emery at 20, koné, barcola on the bench, cherki on the bench. the bench. deschamps has done this before and he&apos;ll do it again. if he wins this he becomes the greatest world cup manager in history. he knows it. the squad knows it. they&apos;re not here to participate.
            </p>
            <p className="mt-3 text-[var(--text-muted)]">one concern: kanté is 35. if his body holds for seven games france are champions. if it doesn&apos;t, they&apos;re still probably champions.</p>
          </div>

          {/* section: colombia */}
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3 font-medium">colombia</p>
            <p>
              the team nobody fully believed in until they started winning. lorenzo built this quietly over three years — structured, disciplined, built around one player who happened to become the best winger alive. díaz grew up without shoes in la guajira. 6 goals in the copa america. this squad has no business being in a world cup final and they&apos;ll be in one anyway. muñoz at right back who will probably move to arsenal the week after the tournament ends. james rodríguez at 35 coming on in the second half of knockout games. this team shouldn&apos;t work. claude thinks it does.
            </p>
          </div>

          {/* section: england */}
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3 font-medium">england</p>
            <p>
              nine points from the group. beat croatia, ghana, panama. then france in the quarterfinals, down to ten men in the 55th minute, lose 2–1. go home debating a selection call that was made in may. saka is excellent. rice is the best defensive midfielder at the tournament. kane continues his ballon d&apos;or shout campaign — and yet it doesn&apos;t matter because elliot anderson, who we barely knew two seasons ago, gets a red card 35 minutes later.
            </p>
            <p className="mt-3 text-[var(--text-muted)]">the palmer and foden absence is the story of england&apos;s tournament regardless of what happens. it will be.</p>
          </div>

          {/* section: spain */}
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3 font-medium">spain</p>
            <p>
              the most complete team after france. yamal at 18. cubarsí at 18 marking mbappé for 120 minutes in the semifinal. rodri controlling every game from deep. they lose to france on penalties in a semifinal that is genuinely better than the final. four of the last five kicks go in. three posts across 120 minutes. the best game of the tournament by some distance. spain leave without a trophy and with their identity completely intact.
            </p>
          </div>

          {/* section: argentina */}
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3 font-medium">argentina</p>
            <p>
              messi&apos;s last tournament. he creates everything, scores a free kick that goes through the wall, and ends up alone on the center circle for 47 seconds after losing the semifinal to colombia. the world watches in silence. he raises one hand and walks off. third place. it&apos;s the right ending even if it isn&apos;t the one he wanted.
            </p>
          </div>

          {/* section: brazil */}
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3 font-medium">brazil</p>
            <p>
              endrick is the story. twenty years old, backheel against ecuador, header against spain in the quarterfinal. vinícius is electric and penalized and brilliant in equal measure. they lose to spain when bruno guimarães gets a second yellow and pedri scores into the space he was covering. and insult to injury — vini misses a penalty. ancelotti does his smile. brazil go home knowing the next four years belong to endrick.
            </p>
          </div>

          {/* section: japan */}
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3 font-medium">japan</p>
            <p>
              beat germany in the round of 32 at at&t stadium, arlington. same scoreline as 2022. same halftime substitutions from moriyasu. kubo&apos;s top corner in the 67th minute. japan reach the quarterfinals — the dark horse story of the tournament — and go out to argentina, which is the only acceptable way to go out. kubo swaps shirts with messi. the photograph is everywhere immediately.
            </p>
          </div>

          <div className="h-px bg-[var(--border)]" />

          {/* groups */}
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1 font-medium">the groups</p>
            <GroupsWidget />
          </div>

          <div className="h-px bg-[var(--border)]" />

          {/* bracket */}
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1 font-medium">the bracket</p>
            <BracketWidget />
          </div>

          <div className="h-px bg-[var(--border)]" />

          {/* five things */}
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-4 font-medium">five things i&apos;m watching for</p>
            <div className="space-y-4">
              {[
                { n: 'one', text: "whether eze can be the player england need at 10 without palmer or foden. i don't know if i can trust bellingham at the 10 in such a high role just yet — he needs to be the shield behind declan rice. the group stage is fine. it's the quarterfinal against france with ten men that answers the question." },
                { n: 'two', text: "whether haaland gets service in a norway system that has never fully figured out how to use him. he'll run 14 kilometres and touch the ball 14 times and one of those touches will be a goal. maybe. norway this far is a statement — but what does the team look like against france in new england?" },
                { n: 'three', text: "kanté's last game in a france shirt. he'll be substituted at some point in the final. the standing ovation will be the moment of the tournament that has nothing to do with football. one of my favourite players ever. he's done us chelsea fans proud." },
                { n: 'four', text: "which player nobody has heard of becomes a cult hero. every world cup has one. claude's pick is kubo but i want to be surprised. the ahmed musas. the keylor navas before real madrid. the amrabat-ounahi partnership in 2022." },
                { n: 'five', text: "the moment in the group stage that reminds you what this tournament actually is. not the bracket. not the golden boot. the goalkeeper from a country with 4 million people making a save in the 88th minute, with his entire nation watching at 3am local time. that moment happens every four years. more on that in the next post." },
              ].map(({ n, text }) => (
                <div key={n} className="flex gap-4">
                  <span className="text-xs text-[var(--text-muted)] w-8 shrink-0 pt-0.5">{n}.</span>
                  <p className="text-sm text-[var(--text-primary)] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-[var(--border)]" />

          {/* moments */}
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1 font-medium">the moments that mattered</p>
            <MomentsWidget />
          </div>

          <div className="h-px bg-[var(--border)]" />

          {/* closing */}
          <p className="text-[var(--text-muted)]">
            the world cup starts june 11th. i&apos;ll be watching every game i can — working and building, but you can&apos;t miss the greatest dance on earth. once every four years.
          </p>
          <p className="text-[var(--text-muted)]">
            come back in july and tell me how wrong i was.
          </p>

        </motion.div>
      </div>
    </main>
  )
}
