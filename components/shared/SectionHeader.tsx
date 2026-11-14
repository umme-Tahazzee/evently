
import { Scale } from "lucide-react";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  topTitle?: string;
  title: ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeader({
  topTitle,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <section
      className={`mx-auto flex max-w-4xl flex-col items-center px-5 pt-4 text-center md:pt-12 ${className}`}
    >
      {topTitle && (
        <span className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-linear-to-b from-btn-secondary-from to-btn-secondary-to px-5 py-2 shadow-btn-secondary">
          <Scale className="size-5 text-amber-500" />

          <span className="font-heading text-sm font-bold text-brand-700">
            {topTitle}
          </span>
        </span>
      )}

      <h2 className="pt-2 text-2xl font-medium leading-[1.1] tracking-tight text-neutral-950
       sm:text-5xl md:text-[54px]">
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
