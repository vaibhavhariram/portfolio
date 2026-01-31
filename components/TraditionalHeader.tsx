'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { href: '/traditional/about', label: 'About' },
  { href: '/traditional/experience', label: 'Experience' },
  { href: '/traditional/projects', label: 'Projects' },
  { href: '/traditional/interests', label: 'Interests' },
  { href: '/traditional/blog', label: 'Blog' },
  { href: '/', label: 'Map' },
];

export default function TraditionalHeader() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--bg-primary) 80%, transparent)',
        borderColor: 'color-mix(in srgb, var(--border) 50%, transparent)',
      }}
    >
      <div className="max-w-[800px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/traditional"
          className="font-medium text-lg transition-colors hover:opacity-80"
          style={{ color: 'var(--text-primary)' }}
        >
          Vaibhav Hariram
        </Link>

        <div className="flex items-center gap-2">
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-sm transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span className="group-hover:opacity-100" style={{ opacity: isActive ? 1 : undefined }}>
                    {link.label}
                  </span>
                  {/* Underline animation */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-[1px] transition-all duration-200 ease-out
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                    style={{ backgroundColor: 'var(--text-primary)' }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Theme toggle - prominent in top right */}
          <ThemeToggle />

          {/* Mobile menu button */}
          <button className="md:hidden transition-colors" style={{ color: 'var(--text-secondary)' }} aria-label="Menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className="md:hidden border-t px-6 py-3 flex flex-wrap gap-x-4 gap-y-2"
        style={{ borderColor: 'color-mix(in srgb, var(--border) 50%, transparent)' }}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs transition-colors hover:opacity-100`}
              style={{
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                opacity: isActive ? 1 : undefined,
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
