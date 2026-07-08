const links: { label: string; href: string }[] = [
  { label: "Email", href: "mailto:vaibhavhariram@berkeley.edu" },
  { label: "X", href: "https://x.com/vaibhavhariram" },
  { label: "GitHub", href: "https://github.com/vaibhavhariram" },
  { label: "LinkedIn", href: "https://linkedin.com/in/vaibhavhariram" },
];

export default function ContactLinks() {
  return (
    <nav className="text-[17px] md:text-[18px] leading-relaxed">
      {links.map(({ label, href }, i) => (
        <span key={label}>
          {i > 0 && <span className="mx-2 text-[var(--ink-muted)]">·</span>}
          <a
            href={href}
            target={
              href.startsWith("http") || href.startsWith("mailto")
                ? "_blank"
                : undefined
            }
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="latex-link"
          >
            {label}
          </a>
        </span>
      ))}
    </nav>
  );
}
