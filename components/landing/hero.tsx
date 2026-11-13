"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppPreview } from "./dashboard-preview";



export function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-5 pt-12 text-center">
      <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-neutral-950
       sm:text-5xl md:text-[54px]">
        The event management platform
        <br />
        built for every occasion
      </h1>

      <p className="mt-6 max-w-4xl text-[18px] leading-6 text-neutral-500">
        Evenly gives organisers a complete toolkit to plan, run and wrap up an event —
         plus dedicated portals for your participants and your staff. Nothing locked behind a paywall.
      </p>

    
      {/* <div className="mt-7 flex items-center gap-3">
        <Button className="h-10 rounded-full bg-neutral-950 px-6 text-xs 
        font-semibold text-white shadow-[0_0_0_3px_rgba(255,190,120,0.55)] 
        hover:bg-neutral-800">
          Start Manging Your Event Free 
        </Button>
        <Button
          variant="outline"
          className="h-10 rounded-full border-neutral-300 bg-white/70 px-6 text-xs font-semibold text-neutral-800"
        >
          See pricing
        </Button>
      </div> */}

      
    </section>
  );
}