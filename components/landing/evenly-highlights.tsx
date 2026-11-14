import Image, { type StaticImageData } from "next/image";
import {
  CalendarClock,
  Database,
  Layers,
  ScrollText,
  Smartphone,
  UserCog,
  type LucideIcon,
} from "lucide-react";

import bg from "@/app/assets/texture.jpg";
import card1 from "@/app/assets/your-data-stay-yours.png";
import { Glow } from "@/components/shared/Glow";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/ui/card";

/* =========================================================
   Skeuomorphic surface (global tokens)
   ========================================================= */
const SKEUO =
  "gap-0 py-0 border border-sand-300 bg-linear-to-b from-btn-secondary-from to-btn-secondary-to " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-4px_8px_rgba(90,80,50,0.05),0_2px_4px_rgba(40,45,30,0.08),0_16px_32px_rgba(40,45,30,0.07)] " +
  "transition-all duration-300 hover:-translate-y-1 hover:border-sand-400";

/* =========================================================
   Data
   ========================================================= */
type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  /** optional illustration — thakle card e dekhabe */
  image?: StaticImageData;
  /** lg grid column span */
  span: string;
};

const FEATURES: Feature[] = [
  {
    icon: Database,
    title: "Your data stays yours",
    desc: "Three independent auth domains keep organiser, staff and participant access cleanly separated.",
    image: card1,
    span: "lg:col-span-6", // featured, full width
  },
  {
    icon: UserCog,
    title: "Granular staff RBAC",
    desc: "Every backend route verifies permissions before touching the database.",
    span: "lg:col-span-2",
  },
  {
    icon: ScrollText,
    title: "Append-only audit trail",
    desc: "Every successful staff change is logged with who, what and when — only the organiser can read it.",
    span: "lg:col-span-2",
  },
  {
    icon: CalendarClock,
    title: "Timezone-aware",
    desc: "Reminders and emails fire in the venue’s local time — even if your team is on the other side of the world.",
    span: "lg:col-span-2",
  },
  {
    icon: Smartphone,
    title: "Mobile-first attendee hub",
    desc: "Participants get a phone-sized portal — no app to install, no Apple/Google review delays.",
    span: "lg:col-span-3",
  },
  {
    icon: Layers,
    title: "Always the full toolkit",
    desc: "No free / pro split — every feature listed above is available on day one.",
    span: "lg:col-span-3",
  },
];

/* =========================================================
   Pieces
   ========================================================= */
function IconTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid size-12 shrink-0 place-items-center rounded-xl mt-2
    border border-brand-300/50 bg-linear-to-b from-brand-300/30
     to-brand-300/10 text-brand-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(60,130,30,0.12),0_3px_6px_rgba(40,45,30,0.12)]">
      <Icon className="size-6" strokeWidth={1.7} />
    </span>
  );
}

function FeatureCard({ icon, title, desc, image, span }: Feature) {
  /* Featured card: text left, image right */
  if (image) {
    return (
      <Card className={`grid grid-cols-1 overflow-hidden md:grid-cols-2 ${SKEUO} ${span} rounded-xl`}>
        <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
          <IconTile icon={icon} />
          <h3 className="font-heading text-2xl font-semibold text-ink md:text-3xl">{title}</h3>
          <p className="max-w-md text-md sm:text-2xl md:text-xl text-muted-foreground">{desc}</p>
        </div>

        {/* `fill` image er jonno parent e relative + height lagbe */}
        <div className="relative min-h-60 md:min-h-72">
          <Image
            src={image}
            alt={title}
            fill
             sizes="(min-width: 768px) 50vw, 100vw"
            
            className="object-contain p-4"
          />
        </div>
      </Card>
    );
  }

  /* Regular card */
  return (
    <Card className={`p-6 py-5 ${SKEUO} ${span} rounded-2xl`}>
      <IconTile icon={icon}  />
      <h3 className="mt-5 font-heading text-2xl font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm md:text-lg sm:text-xl leading-relaxed text-muted-foreground">{desc}</p>
    </Card>
  );
}

/* =========================================================
   Main section
   ========================================================= */
export default function EvenlyHighlights() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-gray-300 bg-[#f7f7f6] sm:rounded-3xl">
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

      {/* relative z-10: content glow/texture er upore thakbe */}
      <div className="relative z-10 mx-auto max-w-6xl p-5 sm:p-8">
        <div className="w-full py-4">
          <SectionHeader
            title={
              <>
                No tiers. No upgrade nags.
                <br />
                No surprises.
              </>
            }
            description="Evenly is free to use for every event — from a small team workshop to a multi-day conference with thousands of attendees. You get the full feature set, all three portals, and every module the moment you sign up."
          />
        </div>

        <div className="rounded-2xl mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
         
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}