'use client';

import { useTheme } from './ThemeContext';

export default function TraditionalThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div
      data-theme={theme}
      className="min-h-screen overflow-auto transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {children}
    </div>
  );
}
