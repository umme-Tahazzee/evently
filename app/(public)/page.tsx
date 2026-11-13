import Image from "next/image";
import { Hero } from "@/components/landing/hero";
import { PortalCards } from "@/components/landing/portal-card";
import bg from "../assets/texture.jpg";

export default function Home() {
  return (
    <main className="relative overflow-hidden rounded-2xl border border-gray-300 bg-[#f7f7f6] sm:rounded-3xl">
      {/* Background texture (decorative) */}
      <Image
        src={bg}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none z-0 object-cover opacity-5"
      />

      {/* Soft paper glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-64 sm:h-80 lg:h-[420px]
        bg-[radial-gradient(ellipse_at_50%_100%,rgba(251,146,60,0.45),rgba(250,204,21,0.3)_35%,transparent_70%),radial-gradient(ellipse_at_0%_100%,rgba(34,211,238,0.5),transparent_45%),radial-gradient(ellipse_at_100%_100%,rgba(244,114,182,0.5),transparent_45%)]"
      />

      {/* Top padding leaves room for the fixed navbar */}
      <div className="relative z-10 w-full pt-20 sm:pt-24">
        <Hero />
        <PortalCards />
      </div>
    </main>
  );
}