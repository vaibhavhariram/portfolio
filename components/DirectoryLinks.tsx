const links: { label: string; href: string }[] = [
  { label: 'email', href: 'mailto:vaibhavhariram@berkeley.edu' },
  { label: 'x', href: 'https://x.com/vaibhavhariram' },
  { label: 'github', href: 'https://github.com/vaibhavhariram' },
  { label: 'linkedin', href: 'https://linkedin.com/in/vaibhavhariram' },
  { label: 'resume', href: '/resume.pdf' },
  { label: 'scholar', href: 'https://scholar.google.com/citations?hl=en&user=WHbznusAAAAJ&view_op=list_works&citft=1&citft=2&citft=3&email_for_op=vaibhuhariram%40gmail.com&authuser=1&gmla=APjjwualsgUMB6FhfAmFp9WCR3ykRFC0bb8qKX13or6Abi00hkINUQ9yY645njGkgIY9SjVay62EY7WgzB2W7BrOiwWKkWsJB2DaQdzOP2fHpGZELmeiOuKHkIdQg0zfLIWa_aopdDCP_pLpitbBmyZAzvt7G2nT8ZWagaLNk-ASjfOeuqTuliPqJhCES2lE-S_5EQW7hNSjopzpaXQYH41bBULgGIpYK6nTD992c9_oLRt59f0MYUCYjBTZPZhhLuQvJdVR___' },
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
