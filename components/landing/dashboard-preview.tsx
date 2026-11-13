"use client";

import Image from "next/image";
import card1 from "../../app/assets/card1.png";
import card2 from "@/app/assets/card2.png";
import card3 from "@/app/assets/card3.png";
import { Cube } from "../shared/Cube";
import { ArrowUpRight, CalendarCheck, Check, Mail, QrCode, Radio, Users } from "lucide-react";
import { Stripes } from "../shared/Stripes";

const themes = {
  gold: {
    window: "bg-[#F4EBD0]",
    button:
      "bg-gradient-to-b from-[#F8E7B0] to-[#D8B24E] text-[#6B4E0F] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-2px_3px_rgba(120,85,10,0.25),0_1px_1px_rgba(0,0,0,0.2),0_5px_10px_rgba(150,110,20,0.3)] group-hover:from-[#FBEFC4] group-hover:to-[#E0BC5E] group-active:shadow-[inset_0_3px_6px_rgba(120,85,10,0.45),0_1px_0_rgba(255,255,255,0.7)]",
  },
  green: {
    window: "bg-[#E4EEDF]",
    button:
      "bg-gradient-to-b from-[#D6EBCF] to-[#7DB78A] text-[#1F5A32] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-2px_3px_rgba(20,70,35,0.25),0_1px_1px_rgba(0,0,0,0.2),0_5px_10px_rgba(40,100,60,0.3)] group-hover:from-[#E0F2DA] group-hover:to-[#8CC498] group-active:shadow-[inset_0_3px_6px_rgba(20,70,35,0.45),0_1px_0_rgba(255,255,255,0.7)]",
  },
} as const;

const infography = [
  {
    id: 1,
    img: card1,
    title: "Enter as an Organiser",
    desc: "Create, configure and manage your events end to end.",
    theme: "gold",
  },
  {
    id: 2,
    img: card2,
    title: "Enter as Staff",
    desc: "Run on-site operations like check-in and attendee support.",
    theme: "green",
  },
  {
    id: 3,
    img: card3,
    title: "Enter as a Participant",
    desc: "Access event details, agenda, sessions and updates.",
    theme: "gold",
  },
] as const;

const points = [
  {
    icon: Users,
    title: "Three dedicated portals",
    text: "Organiser, staff & participant",
    tone: "bg-teal-50 text-teal-600 ring-teal-200",
  },
  {
    icon: Radio,
    title: "Live engagement",
    text: "Polls, reminders & broadcasts",
    tone: "bg-amber-50 text-amber-600 ring-amber-200",
  },
  {
    icon: QrCode,
    title: "Smart check-in",
    text: "QR entry & session attendance",
    tone: "bg-rose-50 text-rose-600 ring-rose-200",
  },
  {
    icon: Mail,
    title: "Branded communication",
    text: "Custom emails & surveys",
    tone: "bg-violet-50 text-violet-600 ring-violet-200",
  },
] as const;

const stats = [
  { icon: CalendarCheck, value: "500,000+", label: "Event Planners" },
  { icon: Users, value: "46,500+", label: "Happy Clients" },
] as const;

export function AppPreview() {
  return (
    <section className="relative mx-auto mt-8 max-w-7xl pb-5 pt-5">
      <Cube />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        <Stripes className="bottom-32 hidden -z-20 sm:block" />

        {infography.map((item) => {
          const t = themes[item.theme];

          return (
            <div
              key={item.id}
              className="group cursor-pointer rounded-[26px] border border-[#D9D5C7] bg-gradient-to-b from-[#FFFFFF] via-[#FCFAF4] to-[#EFEBDD] p-3
              shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-2px_4px_rgba(90,80,50,0.08),0_1px_2px_rgba(40,45,30,0.12),0_10px_18px_rgba(40,45,30,0.08),0_28px_45px_rgba(40,45,30,0.1)]
              transition-all duration-300 ease-out
              hover:-translate-y-1.5
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-2px_4px_rgba(90,80,50,0.08),0_2px_3px_rgba(40,45,30,0.14),0_16px_26px_rgba(40,45,30,0.12),0_38px_60px_rgba(40,45,30,0.14)]
              active:translate-y-0 active:scale-[0.99]"
            >
              {/* Recessed image window */}
              <div
                className={`hidden md:block relative h-52 w-full overflow-hidden rounded-[18px] border border-black/10 ${t.window}
                shadow-[inset_0_3px_8px_rgba(0,0,0,0.22),inset_0_-1px_0_rgba(255,255,255,0.8),0_1px_0_rgba(255,255,255,0.9)]`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="d object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* glass reflection */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-transparent"
                />
                {/* inner vignette for depth */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[18px] shadow-[inset_0_4px_10px_rgba(0,0,0,0.18)]"
                />
              </div>

              {/* Engraved divider */}
              <div className="mx-3 mt-4">
                <div className="h-px bg-black/10" />
                <div className="h-px bg-white" />
              </div>

              {/* Content */}
              <div className="flex items-center justify-between gap-3 px-3 pb-2 pt-4">
                <div className="min-w-0 space-y-2">
                  <h2 className="text-lg font-semibold tracking-tight text-[#172D22] [text-shadow:0_1px_0_rgba(255,255,255,0.95)] md:text-xl">
                    {item.title}
                  </h2>

                  <p className="text-sm leading-6 text-[#64736A] [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">
                    {item.desc}
                  </p>
                </div>

                {/* Tactile raised button */}
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-200 group-active:translate-y-px ${t.button}`}
                >
                  <ArrowUpRight
                    size={21}
                    strokeWidth={2.25}
                    className="drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
             {/* Feature highlights */}
      <ul className="relative z-10 mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {points.map(({ icon: Icon, title, text, tone }) => (
          <li
            key={title}
            className="flex items-center gap-3 rounded-2xl  p-3.5
            "
          >
            <span
              className={`flex size-10 shrink-0 items-center
                 justify-center rounded-xl ring-1 ring-inset ${tone}`}
            >
              <Icon className="size-5" strokeWidth={2} aria-hidden />
            </span>
            <div className="min-w-0 text-left">
              <p className="text-sm font-semibold leading-tight text-teal-700">
                {title}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-[#64736A]">
                {text}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Social proof */}
      <div className="relative z-10 mx-auto mt-8 flex w-fit max-w-full flex-col 
      items-stretch divide-y divide-teal-800
      rounded-2xl 
       px-2 backdrop-blur-sm
        sm:flex-row sm:divide-x sm:divide-y-0">
        <p className="flex items-center justify-center px-5 py-3 text-xs font-medium uppercase tracking-wider text-[#64736A]">
          Trusted worldwide
        </p>
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-3 px-6 py-3"
          >
            <Icon className="size-5 text-[#397C4B]" aria-hidden />
            <div className="text-left">
              <p className="text-sm leading-none text-slate-900">
                {value}
              </p>
              <p className="mt-1 text-xs text-[#64736A]">{label}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}