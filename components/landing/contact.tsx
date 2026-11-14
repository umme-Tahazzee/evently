import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, QrCode, UserPlus, type LucideIcon } from "lucide-react";

import bg from "@/app/assets/texture.jpg";
import { Glow } from "@/components/shared/Glow";
import { SectionHeader } from "@/components/shared/SectionHeader";

/* =========================================================
   Config
   ========================================================= */
const CTA_HREF = "#"; // TODO: tomar signup / demo route (e.g. "/register")

/* =========================================================
   Skeuomorphic surfaces (global tokens)
   ========================================================= */
const STEP_CARD =
  "border border-sand-300 bg-linear-to-b from-btn-secondary-from to-btn-secondary-to " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(90,80,50,0.05),0_2px_4px_rgba(40,45,30,0.08),0_14px_28px_rgba(40,45,30,0.07)] " +
  "transition-all duration-300 hover:-translate-y-1 hover:border-sand-400";

const PRIMARY_BTN =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-brand-700 " +
  "bg-linear-to-b from-brand-400 to-brand-600 px-8 py-3.5 text-base font-semibold text-white " +
  "shadow-btn-primary transition-all hover:from-brand-300 hover:to-brand-650 " +
  "active:translate-y-px active:shadow-btn-primary-active " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

/* =========================================================
   Data
   ========================================================= */
type Step = { icon: LucideIcon; title: string; text: string };

const STEPS: Step[] = [
  {
    icon: UserPlus,
    title: "Sign up free",
    text: "Create your organiser account with just an email — no card, no trial timer.",
  },
  {
    icon: CalendarCheck,
    title: "Build the event",
    text: "Set up every piece an attendee will see — from event details to landing page.",
  },
  {
    icon: QrCode,
    title: "Run the day",
    text: "Check in guests with QR codes, send reminders and go live on the day.",
  },
];

/* =========================================================
   Main section
   ========================================================= */
export default function Contact() {
  return (
    <section className="relative mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border border-gray-300 bg-[#f7f7f6] sm:rounded-3xl">
      {/* Background texture (decorative) */}
      <Image
        src={bg}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none z-0 object-cover opacity-5"
      />
      <Glow variant="green" />

      <div className="relative z-10 w-full p-5 py-10 sm:p-10">
        <SectionHeader
          title={
            <>
              Live in minutes.
              <br />
              Not days.
            </>
          }
          description="Set up and go in minutes — no tiers, nothing locked behind a paywall."
        />

        {/* ---------- Steps ---------- */}
        <ol className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className={`relative flex flex-col gap-4 rounded-2xl p-5 ${STEP_CARD}`}>
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl border border-brand-300/50 bg-linear-to-b from-brand-300/30 to-brand-300/10 text-brand-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(60,130,30,0.12),0_3px_6px_rgba(40,45,30,0.12)]">
                  <Icon className="size-5" strokeWidth={1.8} aria-hidden />
                </span>
                <span className="font-heading text-sm font-bold tabular-nums text-sand-400">
                  0{i + 1}
                </span>
              </div>

              <div>
                <p className="font-heading text-base font-bold text-ink">{title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* ---------- CTA ---------- */}
        <div className="mt-10 flex justify-center">
          <Link href={CTA_HREF} className={PRIMARY_BTN}>
            Start Your Event Management
            <ArrowRight className="size-5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}