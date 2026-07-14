interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="flex mt-5 items-center gap-2 text-xl font-extrabold sm:text-2xl">
      <span className="rounded-lg bg-orange-500/20 p-2">
        {children}
      </span>
      {title}
    </section>
  );
}