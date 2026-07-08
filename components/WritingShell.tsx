import Link from "next/link";
import ContactLinks from "@/components/ContactLinks";
import DesignNav from "@/components/DesignNav";

interface WritingShellProps {
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
}

export default function WritingShell({
  children,
  backHref = "/writing",
  backLabel = "← All Posts",
}: WritingShellProps) {
  return (
    <main className="min-h-screen">
      <article className="max-w-[52rem] mx-auto w-full px-10 md:px-20 py-10 md:py-16">
        <header className="mb-8 pb-5 border-b border-[var(--rule)]">
          <h2 className="latex-section mt-0 mb-2">Links</h2>
          <ContactLinks />
        </header>

        <p className="mb-8">
          <Link href={backHref} className="latex-link text-[17px]">
            {backLabel}
          </Link>
        </p>

        <div className="writing-prose">{children}</div>

        <footer className="mt-12 pt-6 border-t border-[var(--rule)]">
          <h2 className="latex-section mt-0 mb-2">Design</h2>
          <DesignNav />
        </footer>
      </article>
    </main>
  );
}
