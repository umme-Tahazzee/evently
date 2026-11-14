import Image from "next/image";
import { ChevronDown } from "lucide-react";

import bg from "@/app/assets/texture.jpg";
import { Glow } from "@/components/shared/Glow";
import { SectionHeader } from "@/components/shared/SectionHeader";

/* =========================================================
   Skeuomorphic surfaces (global tokens)
   ========================================================= */
const ITEM =
  "group rounded-2xl border border-sand-300 bg-linear-to-b from-btn-secondary-from to-btn-secondary-to " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(90,80,50,0.05),0_2px_4px_rgba(40,45,30,0.08),0_12px_24px_rgba(40,45,30,0.06)] " +
  "transition-all duration-300 hover:border-sand-400 open:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_4px_8px_rgba(40,45,30,0.1),0_20px_36px_rgba(40,45,30,0.1)]";

/* =========================================================
   Data — sob answer tomar site er content theke
   ========================================================= */
type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: "Is Evenly really free to use?",
    a: "Yes. Evenly is free for every event — from a small team workshop to a multi-day conference with thousands of attendees. There are no tiers and no free / pro split: you get the full feature set, all three portals and every module the moment you sign up.",
  },
  {
    q: "Who is Evenly built for?",
    a: "Evenly has three dedicated portals. Organisers create, configure and manage events end to end, staff run on-site operations like check-in and attendee support, and participants access event details, the agenda, sessions and updates.",
  },
  {
    q: "Do attendees need to install an app?",
    a: "No. Participants get a phone-sized portal that works without installing anything, so there are no Apple or Google review delays on your side.",
  },
  {
    q: "How does check-in work?",
    a: "Attendees receive their QR code by email and you scan it at the door, with a manual fallback included. You can also generate per-session QR codes to track who actually attended each session.",
  },
  {
    q: "How do I add attendees?",
    a: "Add participants one by one or bulk-import them from a CSV. You can also share a public registration link, then review incoming requests and accept or decline them, and send invitations with a one-time verification code.",
  },
  {
    q: "Can I send reminders and emails to my attendees?",
    a: "Yes. Schedule automated reminders that fire in the venue’s local time, even if your team is in another timezone. You can also broadcast emails to filtered audiences with full history, using branded templates for welcome, invitation, QR and reminders.",
  },
  {
    q: "How is staff access controlled?",
    a: "Organiser, staff and participant access use three independent auth domains. You invite team members and set fine-grained permissions, every backend route verifies them before touching the database, and every successful staff change is recorded in an append-only audit trail that only the organiser can read.",
  },
  {
    q: "What can I do after the event ends?",
    a: "Compose a post-event survey and send it to attendees, browse individual responses in a summary view, then pair the survey results with check-in numbers to write a data-backed event recap.",
  },
];

/* =========================================================
   SEO — FAQPage structured data
   ========================================================= */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* =========================================================
   Main section
   ========================================================= */
export default function EvenlyFaq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden"
    >

      <div className="relative z-10 mx-auto max-w-5xl p-5 sm:p-8">
        <div className="w-full py-4">
          <SectionHeader
            title={
              <>
                Frequently asked
                <br />
                questions
              </>
            }
            description="Everything you need to know about running your events on Evenly."
          />
        </div>

        <div className="mt-8 space-y-4">
          {FAQS.map(({ q, a }, i) => (
            // name= : ekta khulle baki ta automatic bondho hoy (native exclusive accordion)
            <details key={q} name="evenly-faq" className={ITEM} open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 focus-visible:outline-2 focus-visible:outline-brand-500 [&::-webkit-details-marker]:hidden">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-brand-300/50 bg-linear-to-b from-brand-300/30 to-brand-300/10 font-heading text-sm font-bold text-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_4px_rgba(40,45,30,0.1)]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="flex-1 font-heading text-base font-semibold text-ink sm:text-lg">
                  {q}
                </span>

                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-sand-300 bg-linear-to-b from-btn-secondary-from to-btn-secondary-to shadow-btn-secondary transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="size-4 text-ink" />
                </span>
              </summary>

              {/* answer: pressed-in panel */}
              <div className="px-5 pb-5">
                <p className="rounded-xl border border-sand-300/70 bg-background/70 p-4 text-sm leading-relaxed text-muted-foreground shadow-[inset_0_2px_5px_rgba(90,80,50,0.1)]">
                  {a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}