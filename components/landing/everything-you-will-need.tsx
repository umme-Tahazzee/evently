"use client"

import Image, { type StaticImageData } from "next/image";
import {
  ArrowRight,
  Armchair,
  BarChart3,
  Bed,
  Bell,
  CalendarCheck,
  CalendarDays,
  ClipboardList,
  Flag,
  ImageIcon,
  Layers,
  List,
  Mail,
  MapPin,
  Monitor,
  Play,
  QrCode,
  Send,
  Settings,
  ShieldCheck,
  UserPlus,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";
import card1 from "../../app/assets/build-the-event.png";
import card2 from "../../app/assets/run-the-day.png";
import card3 from "../../app/assets/choose-the-loop.png";
import card4 from '../../app/assets/card2.png'

/* =========================================================
   Skeuomorphic surface classes (all from global tokens)
   ========================================================= */
const RAISED =
  "border border-sand-300 bg-linear-to-b from-btn-secondary-from to-btn-secondary-to shadow-btn-secondary";

const RAISED_LG =
  "border border-sand-300 bg-linear-to-b from-btn-secondary-from to-btn-secondary-to " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-3px_6px_rgba(90,80,50,0.06),0_2px_4px_rgba(40,45,30,0.1),0_16px_32px_rgba(40,45,30,0.08)]";

/* =========================================================
   Types + data
   ========================================================= */
type Tone = "green" | "amber";

type Item = { icon: LucideIcon; title: string; desc: string };

type Column = {
  badgeIcon: LucideIcon;
  badge: string;
  title: string;
  desc: string;
  tone: Tone;
  /** Imported illustration, e.g. `import card1 from "../../app/assets/x.png"` */
  image?: StaticImageData;
  /** Optional extra illustration for a short column (fills the empty space on desktop) */
  bonusImage?: StaticImageData;
  items: Item[];
};

type ImageSlotProps = {
  src?: StaticImageData | string;
  alt: string;
  className?: string;
  sizes?: string;
};

const COLUMNS: Column[] = [
  {
    badgeIcon: Settings,
    badge: "Configuration",
    title: "Build the event",
    desc: "Set up every piece an attendee will see — from event details to landing page.",
    tone: "green",
    image: card1,
    items: [
      { icon: CalendarCheck, title: "Event Details", desc: "Name, dates, timezone, logo and banner." },
      { icon: MapPin, title: "Venue", desc: "Capture the venue, address and venue type." },
      { icon: List, title: "Agenda", desc: "Plot the full schedule day-by-day." },
      { icon: Users, title: "Speakers & Sessions", desc: "Add speakers, organise sessions into tracks." },
      { icon: Armchair, title: "Seating", desc: "Drag-and-drop seating canvas for room layout." },
      { icon: Bed, title: "Travel & Stay", desc: "Accommodation and transportation logistics." },
      { icon: UtensilsCrossed, title: "Menu & Catering", desc: "Plan meals with dietary tags." },
      { icon: Mail, title: "Email Templates", desc: "Branded templates for welcome, invitation, QR, reminders." },
      { icon: ImageIcon, title: "Gallery, Library & Sponsors", desc: "Media, downloadable resources and sponsor showcases." },
      { icon: Monitor, title: "Landing Page", desc: "A standalone event page you can share with anyone." },
    ],
  },
  {
    badgeIcon: Play,
    badge: "Operations",
    title: "Run the day",
    desc: "Everything you need once the doors open — participants, check-in, communications and more.",
    tone: "amber",
    image: card2,
    items: [
      { icon: Users, title: "Participants", desc: "Add attendees one-by-one or bulk-import from CSV." },
      { icon: Mail, title: "Invitations", desc: "Send invites with a one-time verification code." },
      { icon: UserPlus, title: "Registration Requests", desc: "Share a public link, review requests and accept or decline." },
      { icon: QrCode, title: "QR Check-In", desc: "Email QR codes and scan at the door — manual fallback included." },
      { icon: Bed, title: "Accommodation Management", desc: "Assign guests to hotel and room, then check them in." },
      { icon: BarChart3, title: "Live Polls", desc: "Multiple-choice, rating and open-ended polls." },
      { icon: Bell, title: "Reminders", desc: "Schedule timezone-aware automated reminders." },
      { icon: Send, title: "Communications", desc: "Broadcast emails to filtered audiences with full history." },
      { icon: CalendarDays, title: "Session Attendance", desc: "Per-session QR codes to track who actually attended." },
      { icon: ShieldCheck, title: "Staff Management & Activity Log", desc: "Invite team members, set fine-grained permissions and track every staff action." },
    ],
  },
  {
    badgeIcon: Flag,
    badge: "After Activity",
    title: "Close the loop",
    desc: "Wrap up gracefully — capture feedback, learn what worked and share the highlights.",
    tone: "green",
    image: card3,
    bonusImage: card4,  
    items: [
      { icon: ClipboardList, title: "Event Survey", desc: "Compose a post-event survey and send it to attendees." },
      { icon: BarChart3, title: "Survey Insights", desc: "Browse individual responses and a summary view." },
      { icon: Layers, title: "Recap Ready", desc: "Pair survey results with check-in numbers to write a data-backed event recap." },
    ],
  },
];

/* =========================================================
   Pieces
   ========================================================= */
function ImageSlot({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 220px, 50vw",
}: ImageSlotProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${
        src
          ? ""
          : "grid place-items-center border-2 border-dashed border-sand-400 bg-background/50 shadow-[inset_0_2px_6px_rgba(90,80,50,0.12)]"
      } ${className}`}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-contain" sizes={sizes} />
      ) : (
        <ImageIcon className="size-8 text-sand-400" strokeWidth={1.5} aria-hidden />
      )}
    </div>
  );
}

function IconTile({ icon: Icon, tone }: { icon: LucideIcon; tone: Tone }) {
  const color =
    tone === "amber"
      ? "text-amber-500 from-amber-50 to-amber-100 border-amber-200"
      : "text-brand-600 from-brand-300/25 to-brand-300/10 border-brand-300/50";

  return (
    <span
      className={`grid size-10 shrink-0 place-items-center rounded-xl border bg-linear-to-b shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-2px_3px_rgba(90,80,50,0.1),0_2px_4px_rgba(40,45,30,0.12)] sm:size-11 ${color}`}
    >
      <Icon className="size-[18px] sm:size-5" strokeWidth={1.8} aria-hidden />
    </span>
  );
}

function ArrowKnob() {
  return (
    <span
      aria-hidden
      className={`absolute -right-7 top-1/2 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full text-ink lg:grid ${RAISED}`}
    >
      <ArrowRight className="size-5" />
    </span>
  );
}

/* =========================================================
   Main section
   ========================================================= */
export default function EvenlyWorkflow() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-14 sm:px-8 lg:py-20">
      <div aria-hidden className="glow-green pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl">
        {/* ---------- Header ---------- */}
        <SectionHeader
          topTitle="Everything You’ll Need"
          title="Configure. Operate. Wrap up."
          description="Evenly mirrors the way you actually run an event — set it up, run it on the day, then close it out with insights."
        />

        {/* ---------- Columns ---------- */}
        <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-3 lg:gap-12">
          {COLUMNS.map((col, i) => {
            const BadgeIcon = col.badgeIcon;
            const heroTint =
              col.tone === "amber"
                ? "from-amber-100/70 to-btn-secondary-to"
                : "from-brand-300/25 to-btn-secondary-to";
            const isShort = col.items.length <= 3;

            return (
              <div key={col.title} className="flex flex-col gap-4 sm:gap-5">
                {/* Hero card */}
                <div
                  className={`relative flex items-center gap-4 rounded-3xl border border-sand-300 bg-linear-to-br p-4 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-3px_6px_rgba(90,80,50,0.06),0_2px_4px_rgba(40,45,30,0.1),0_16px_32px_rgba(40,45,30,0.08)] ${heroTint}`}
                >
                  <ImageSlot
                    src={col.image}
                    alt={col.title}
                    className="h-28 w-24 shrink-0 sm:h-40 sm:w-40"
                  />

                  <div className="min-w-0">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 ${RAISED}`}>
                      <BadgeIcon className="size-3.5 text-brand-600" aria-hidden />
                      <span className="text-xs font-semibold text-ink">{col.badge}</span>
                    </span>
                    <h3 className="mt-2.5 font-heading text-xl font-bold text-ink sm:mt-3 sm:text-2xl">
                      {col.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
                      {col.desc}
                    </p>
                  </div>

                  {i < COLUMNS.length - 1 && <ArrowKnob />}
                </div>

                {/* Feature list card */}
                <ul className={`flex-1 rounded-3xl p-3 sm:p-4 ${RAISED_LG}`}>
                  {col.items.map(({ icon, title, desc }, idx) => (
                    <li key={title} className="flex items-center gap-3 py-2.5">
                      <IconTile icon={icon} tone={col.tone} />
                      <div
                        className={`min-w-0 flex-1 ${
                          idx < col.items.length - 1 ? "border-b border-sand-300/70 pb-2.5" : ""
                        }`}
                      >
                        <p className="font-heading text-sm font-bold text-ink">{title}</p>
                        <p className="text-xs leading-snug text-muted-foreground">{desc}</p>
                      </div>
                    </li>
                  ))}

                  {/* Short column: illustration fills the empty space (desktop only) */}
                  {isShort && (
                    <li aria-hidden={!col.bonusImage} className="hidden pt-6 lg:block">
                      <ImageSlot
                        src={col.bonusImage}
                        alt={`${col.title} illustration`}
                        className="h-64 w-full"
                        sizes="(min-width: 1024px) 360px, 100vw"
                      />
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}