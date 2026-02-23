const links: { label: string; href: string }[] = [
  { label: 'email', href: 'mailto:vaibhavhariram@berkeley.edu' },
  { label: 'x', href: 'https://x.com/vaibhavhariram' },
  { label: 'github', href: 'https://github.com/vaibhavhariram' },
  { label: 'linkedin', href: 'https://linkedin.com/in/vaibhavhariram' },
  { label: 'resume', href: '/resume.pdf' },
  { label: 'scholar', href: 'https://scholar.google.com/' },
];

export default function DirectoryLinks() {
  return (
    <nav className="flex flex-wrap gap-x-6 gap-y-1 text-[15px]">
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          download={href === '/resume.pdf' ? true : undefined}
          className="text-[#a0a0a0] hover:text-white hover:underline underline-offset-2 transition-colors"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
