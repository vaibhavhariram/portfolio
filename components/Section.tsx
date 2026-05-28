interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-12 md:mb-16">
      {title && (
        <h2 className="text-sm font-medium text-[#6b6b6b] uppercase tracking-wider mb-4">
          {title}
        </h2>
      )}
      <div className="space-y-2">{children}</div>
    </section>
  );
}
