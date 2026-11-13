"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarPlus, LogIn, Menu, X } from "lucide-react";
import { cx } from "../../src/lib/cx";
import { Button } from "../ui/button";

const LOGO_SRC =
  "https://f005.backblazeb2.com/file/evenly/evenly-production/assets/evenly-1200x630-transparent.png";

/* Scroll distance (px) after which the bar switches to its "scrolled" look */
const SCROLL_THRESHOLD = 12;

const SOFT_SHADOW =
  "shadow-[inset_0_1px_0_rgba(255,255,255,1),0_2px_4px_rgba(40,45,30,0.08),0_12px_32px_rgba(40,45,30,0.14)]";

/* ---------- Floating bar styles ---------- */

const barBase = cx(
  "pointer-events-auto mx-auto flex h-14 w-full items-center justify-between gap-3",
  "rounded-full border px-3 transition-all duration-300 ease-out sm:h-16 sm:px-5"
);

const barIdle = cx("max-w-6xl border-transparent bg-transparent");

const barScrolled = cx(
  "max-w-4xl border-[#D9D5C7]/80 bg-white/95 backdrop-blur",
  SOFT_SHADOW
);

/* ---------- Components ---------- */

export function EvenlyLogo() {
  return (
    <Image
      src={LOGO_SRC}
      alt="Evenly"
      width={160}
      height={84}
      className="h-14 w-auto sm:h-20"
      priority
    />
  );
}

function useScrolled(threshold = SCROLL_THRESHOLD) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}



export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);


  /* On mobile, an open menu also gets the solid "scrolled" look */
  const solid = scrolled || open;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <header className={cx(barBase, solid ? barScrolled : barIdle)}>
        <Link
          href="/"
          aria-label="Evenly home"
          onClick={close}
          className="flex shrink-0 items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b9b25]/50"
        >
          <EvenlyLogo />
        </Link>


        <nav aria-label="Primary" className="items-center gap-2 md:flex lg:gap-3">
          <Button variant="secondary" className="hidden lg:flex items-center justify-center gap-2">
            <CalendarPlus className="size-4 shrink-0 text-[#397C4B]" aria-hidden />
            <span className="whitespace-nowrap">Start Your Event Management</span>
          </Button>

          <Button variant="ghost">
            <LogIn className="size-4 text-[#64736A]" aria-hidden />
            Log in
          </Button>

          <Button variant="default" className="group">
            <span className="[text-shadow:0_1px_0_rgba(0,60,0,0.35)]">Demo</span>
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Button>
        </nav>
      </header>
    </div>
  );
}