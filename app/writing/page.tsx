import Link from "next/link";
import WritingShell from "@/components/WritingShell";

const posts = [
  {
    slug: "moving-on",
    title: "At What Point Do You Move On From a Place?",
    date: "Issue 004 — Summer 2026",
  },
  {
    slug: "dissecting-san-francisco",
    title: "Dissecting San Francisco",
    date: "Issue 003 — June 21, 2026",
  },
  {
    slug: "environmental-conditioning",
    title: "Environmental Conditioning",
    date: "Issue 002 — June 10, 2026",
  },
  {
    slug: "fulfilment",
    title: (
      <>
        Fulfil<span className="italic">fil</span>ment
      </>
    ),
    date: "Issue 001 — May 28, 2026",
  },
];

export default function WritingPage() {
  return (
    <WritingShell backHref="/" backLabel="← Home">
      <div className="space-y-8">
        <header className="pb-6 border-b border-[var(--rule)]">
          <p className="latex-section mt-0 mb-2">Writing</p>
          <h1 className="text-[2rem] md:text-[2.25rem] font-bold tracking-tight">
            Things I Think About
          </h1>
        </header>

        <ul className="divide-y divide-[var(--rule)]">
          {posts.map((post) => (
            <li key={post.slug} className="py-5">
              <Link
                href={`/writing/${post.slug}`}
                className="latex-link text-[18px] md:text-[19px]"
              >
                {post.title}
              </Link>
              <p className="text-[var(--ink-muted)] text-[15px] mt-1">
                {post.date}
              </p>
            </li>
          ))}
        </ul>

        <p className="text-[var(--ink-muted)] text-[15px] pt-4 border-t border-[var(--rule)]">
          More on the way.
        </p>
      </div>
    </WritingShell>
  );
}
