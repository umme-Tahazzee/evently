import { cx } from "../../src/lib/cx";

const VARIANTS = {
  warm: "glow-warm",
  green: "glow-green",
} as const;

export type BottomGlowVariant = keyof typeof VARIANTS;

type BottomGlowProps = {
  variant?: BottomGlowVariant;
  className?: string;
};

export function Glow({ variant = "warm", className }: BottomGlowProps) {
  return (
    <div
      aria-hidden
      className={cx(
        "pointer-events-none absolute inset-x-0 bottom-0 z-0 h-64 sm:h-80 lg:h-[420px]",
        VARIANTS[variant],
        className
      )}
    />
  );
}