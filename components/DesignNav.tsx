const links: { label: string; href: string }[] = [
  { label: "Writing", href: "/writing" },
  { label: "Life", href: "/life" },
  { label: "Extra", href: "/extra" },
  { label: "Likes", href: "/likes" },
];

export default function DesignNav() {
  return (
    <nav className="text-[16px] md:text-[17px] leading-relaxed">
      {links.map(({ label, href }, i) => (
        <span key={label}>
          {i > 0 && <span className="mx-2 text-[var(--ink-muted)]">·</span>}
          <a href={href} className="latex-link">
            {label}
          </a>
        </span>
      ))}
    </nav>
  );
}
