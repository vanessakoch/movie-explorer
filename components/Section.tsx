interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold">{title}</h2>
      {children}
    </section>
  );
}