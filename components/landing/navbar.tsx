"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarPlus, LogIn } from "lucide-react";

export function EventlyLogo() {
  return (
    <Image
      src="https://f005.backblazeb2.com/file/evenly/evenly-production/assets/evenly-1200x630-transparent.png"
      alt="Evently"
      width={120}
      height={63}
      className="h-20 w-auto"
      priority
    />
  );
}

export function Navbar() {
  return (
    <header className="mx-auto flex h-[80px] w-full max-w-6xl items-center justify-between px-5">
      <Link href="/" aria-label="Evently home" className="flex items-center">
        <EventlyLogo />
      </Link>

      <nav aria-label="Primary" className="flex items-center gap-2 sm:gap-3">
        {/* 1. Secondary: soft raised button */}
        <Link
          href="#"
          className="hidden items-center gap-2 rounded-full border border-[#D9D5C7] bg-gradient-to-b from-white to-[#F3EFE3] px-4 py-2 text-sm font-medium text-[#172D22]
          shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(40,45,30,0.12),0_4px_10px_rgba(40,45,30,0.06)]
          transition-all duration-200 hover:-translate-y-px hover:border-[#C9C4B2]
          hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_2px_3px_rgba(40,45,30,0.14),0_8px_16px_rgba(40,45,30,0.1)]
          active:translate-y-0 active:shadow-[inset_0_2px_4px_rgba(90,80,50,0.2)]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b9b25]/50 md:inline-flex"
        >
          <CalendarPlus className="size-4 text-[#397C4B]" aria-hidden />
          Start Your Event Management
        </Link>

        {/* 2. Ghost: Log in */}
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#172D22]
          transition-colors duration-200 hover:bg-black/5
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b9b25]/50"
        >
          <LogIn className="size-4 text-[#64736A]" aria-hidden />
          Log in
        </Link>

        {/* 3. Primary: Demo */}
        <Link
          href="#"
          className="group inline-flex items-center gap-2 rounded-full border border-[#2F7A14] bg-gradient-to-b from-[#6DBB45] to-[#3E8A1E] px-5 py-2 text-sm font-semibold text-white
          shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-2px_3px_rgba(20,70,10,0.3),0_1px_2px_rgba(0,0,0,0.2),0_6px_14px_rgba(60,130,30,0.35)]
          transition-all duration-200 hover:-translate-y-px hover:from-[#78C650] hover:to-[#459423]
          active:translate-y-px active:shadow-[inset_0_3px_6px_rgba(20,70,10,0.5)]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b9b25] focus-visible:ring-offset-2"
        >
          <span className="[text-shadow:0_1px_0_rgba(0,60,0,0.35)]">Demo</span>
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </nav>
    </header>
  );
}