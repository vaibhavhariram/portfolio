import WritingShell from "@/components/WritingShell";

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <WritingShell backHref="/" backLabel="← Home">
      <header className="pb-6 border-b border-[var(--rule)] mb-8">
        <h1 className="text-[2rem] md:text-[2.25rem] font-bold tracking-tight">
          {title}
        </h1>
      </header>
      <p className="text-[var(--ink-muted)] text-[18px] md:text-[19px]">
        Coming soon...
      </p>
    </WritingShell>
  );
}
