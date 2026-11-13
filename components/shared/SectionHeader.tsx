
type SectionHeaderProps = {
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <section
      className={`mx-auto flex max-w-4xl flex-col items-center px-5 pt-4 text-center md:pt-12 ${className}`}
    >
      <h2 className="text-2xl font-medium leading-[1.1] tracking-tight text-neutral-950 sm:text-5xl md:text-[54px]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-4xl text-xs leading-6 text-neutral-500 sm:mt-8 sm:text-xl md:mt-6 md:text-lg">
          {description}
        </p>
      )}
    </section>
  );
}
