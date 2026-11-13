

const stripeColors = ["#22d3ee", "#facc15", "#fb923c", "#f87171"];

export function Stripes({ className }: { className?: string }) {

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute w-full ${className}`}
    >
      {stripeColors.map((c) => (
        <div key={c} className="h-5 opacity-90" style={{ background: c }} />
      ))}
    </div>
  );
}