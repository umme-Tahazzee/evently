export function Cube() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 220 200"
      className="pointer-events-none absolute -bottom-6 -right-10 hidden w-[240px] md:block"
      fill="rgba(255,255,255,0.18)"
      stroke="rgba(255,255,255,0.75)"
      strokeWidth="1"
    >
      <polygon points="20,70 110,10 200,50 200,150 110,195 20,130" />
      <polyline points="20,70 110,110 200,50" fill="none" />
      <line x1="110" y1="110" x2="110" y2="195" />
    </svg>
  );
}