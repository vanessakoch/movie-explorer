interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="flex text-xl mt-4 mb-1 items-center gap-2 font-bold">
      <span>
        {children}
      </span>
      {title}
    </section>
  );
}