import Image from "next/image";
import { Hero } from "@/components/landing/hero";
import { PortalCards } from "@/components/landing/portal-card";
import bg from "../assets/texture.jpg";
import { Glow } from "@/components/shared/Glow";

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


      <Glow variant="green" />

      {/* Top padding leaves room for the fixed navbar */}
      <div className="relative z-10 w-full pt-20 sm:pt-24">
        <Hero />
        <PortalCards />
      </div>
    </main>
  );
}