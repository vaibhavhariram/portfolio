import TraditionalHeader from '@/components/TraditionalHeader';
import { ThemeProvider } from '@/components/ThemeContext';
import TraditionalThemeWrapper from '@/components/TraditionalThemeWrapper';

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
