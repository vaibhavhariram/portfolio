import type { Metadata } from 'next';
import TraditionalHeader from '@/components/TraditionalHeader';
import { ThemeProvider } from '@/components/ThemeContext';
import TraditionalThemeWrapper from '@/components/TraditionalThemeWrapper';

export const metadata: Metadata = {
  title: {
    default: 'Vaibhav Hariram | Portfolio',
    template: '%s | Vaibhav Hariram',
  },
  description: 'B.A. Computer Science @ UC Berkeley · Minor in Urban/City Planning · Founding Engineer at Paprika · Geospatial AI/ML',
  openGraph: {
    title: 'Vaibhav Hariram | Portfolio',
    description: 'B.A. Computer Science @ UC Berkeley · Founding Engineer at Paprika',
    type: 'website',
  },
};

export default function TraditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <TraditionalThemeWrapper>
        <TraditionalHeader />
        <main className="pt-24 pb-16 px-6 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
          <div className="max-w-[800px] mx-auto animate-fade-in">
            {children}
          </div>
        </main>
      </TraditionalThemeWrapper>
    </ThemeProvider>
  );
}
