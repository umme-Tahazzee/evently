import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Check } from "lucide-react";

import watermark from "@/app/assets/footerlogo.png";
import { Glow } from "@/components/shared/Glow";

/* =========================================================
   Config + surfaces (global tokens)
   ========================================================= */
const LOGO_SRC =
  "https://f005.backblazeb2.com/file/evenly/evenly-production/assets/evenly-1200x630-transparent.png";

const RAISED =
  "border border-sand-300 bg-linear-to-b from-btn-secondary-from to-btn-secondary-to shadow-btn-secondary";

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

const LINK =
  `inline-block rounded-sm text-sm text-muted-foreground transition-all duration-200 hover:translate-x-0.5 hover:text-brand-600 ${FOCUS}`;

/* =========================================================
   Links — href gulo tomar real route diye replace koro
   ========================================================= */
type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

const COLUMNS: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Build the event", href: "#" }, // TODO
      { label: "Run the day", href: "#" }, // TODO
      { label: "Close the loop", href: "#" }, // TODO
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Portals",
    links: [
      { label: "Organiser", href: "#" }, // TODO: organiser login
      { label: "Staff", href: "#" }, // TODO: staff login
      { label: "Participant", href: "#" }, // TODO: participant login
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" }, // TODO
      { label: "Privacy Policy", href: "#" }, // TODO
    ],
  },
];

/* =========================================================
   Main footer
   ========================================================= */
export default function EvenlyFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 w-full overflow-hidden border-t border-sand-300 bg-linear-to-b from-transparent via-brand-300/5 to-brand-300/10">
      <Glow variant="green" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        {/* ---------- Top: brand + link columns ---------- */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Brand */}
          <div className="max-w-sm lg:shrink-0">
            <Link href="/" aria-label="Evenly home" className={`inline-block rounded-lg ${FOCUS}`}>
              <Image
                src={LOGO_SRC}
                alt="Evenly"
                width={160}
                height={84}
                className="h-14 w-auto sm:h-16"
              />
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A complete event management platform for organisations, staff and participants.
            </p>

            <span className={`mt-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 ${RAISED}`}>
              <span className="grid size-4 place-items-center rounded-full bg-brand-300 text-white">
                <Check className="size-3" strokeWidth={3.5} aria-hidden />
              </span>
              <span className="text-xs font-semibold text-ink">Free for every event</span>
            </span>
          </div>

          {/* Link columns — desktop e sob ek row e, mobile e wrap kore */}
          <div className="flex flex-wrap gap-x-14 gap-y-10 lg:flex-nowrap lg:gap-x-20">
            {COLUMNS.map(({ title, links }) => (
              <nav key={title} aria-label={title} className="min-w-32">
                <h2 className="flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-ink">
                  <span aria-hidden className="size-1.5 rounded-full bg-brand-400 shadow-[0_0_0_3px] shadow-brand-300/25" />
                  {title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className={LINK}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* ---------- Engraved divider ---------- */}
        <div
          aria-hidden
          className="mt-12 h-0.5 rounded-full bg-sand-300/70 shadow-[0_1px_0_rgba(255,255,255,0.9)]"
        />

        {/* ---------- Bottom bar ---------- */}
        <div className="flex items-center justify-between gap-4 py-6">
          <p className="text-xs text-muted-foreground">© {year} Evenly. All rights reserved.</p>

          <Link
            href="#"
            aria-label="Back to top"
            className={`grid size-9 place-items-center rounded-full text-ink transition-all hover:-translate-y-0.5 hover:shadow-btn-secondary-hover active:translate-y-px active:shadow-btn-secondary-active ${RAISED} ${FOCUS}`}
          >
            <ArrowUp className="size-4" aria-hidden />
          </Link>
        </div>
      </div>

      {/* ---------- Watermark logo (decorative, fades into the page) ---------- */}
      <div
        aria-hidden
        className="pointer-events-none relative z-0 -mt-2 h-32 select-none sm:h-48 lg:h-64"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 60%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 60%)",
        }}
      >
        <Image
          src={watermark}
          alt=""
          fill
          sizes="100vw"
          className="translate-y-[18%] object-contain object-bottom opacity-10"
        />
      </div>
    </footer>
  );
}