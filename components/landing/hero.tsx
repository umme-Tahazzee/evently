"use client"

import Image from "next/image";
import { PortalCards } from "@/components/landing/portal-card";
import bg from "../../app/assets/texture.jpg";
import { Glow } from "@/components/shared/Glow";
import { SectionHeader } from "@/components/shared/SectionHeader";

export default function Hero() {
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
        <SectionHeader
          title={
            <>
              The event management platform
              <br />
              built for every occasion
            </>
          }
          description="Evenly gives organisers a complete toolkit to plan, run and wrap up an event — plus dedicated portals for your participants and your staff. Nothing locked behind a paywall."
        />
        <PortalCards />
      </div>
    </main>
  );
}