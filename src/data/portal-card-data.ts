import card1 from "../../app/assets/card1.png";
import card2 from "@/app/assets/card2.png";
import card3 from "@/app/assets/card3.png";
import { ArrowUpRight, CalendarCheck, Check, Mail, QrCode, Radio, Users } from "lucide-react";


export const themes = {
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

export const infography = [
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

export const points = [
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

export const stats = [
  { icon: CalendarCheck, value: "500,000+", label: "Event Planners" },
  { icon: Users, value: "46,500+", label: "Happy Clients" },
] as const;