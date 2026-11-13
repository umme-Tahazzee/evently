import {
    BarChart3,
    Building2,
    CalendarCheck,
    CalendarDays,
    Check,
    Coins,
    Crown,
    Laptop,
    MessageCircle,
    Scale,
    Timer,
    Users,
    UsersRound,
    X,
    type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";

/* =========================================================
   Data
   ========================================================= */
type Row = {
    icon: LucideIcon;
    label: string;
    agency: string;
    evenly: string;
};

const ROWS: Row[] = [
    { icon: Coins, label: "Cost & Scalability", agency: "Higher cost, limited scale", evenly: "Cost-effective & scalable" },
    { icon: Timer, label: "Event Setup Time", agency: "Depends on availability", evenly: "Set up and go in minutes" },
    { icon: Users, label: "Control & Flexibility", agency: "Process-driven & less flexible", evenly: "Full control, configure anytime" },
    { icon: UsersRound, label: "Multiple Roles/Portals", agency: "Usually not available", evenly: "Organiser, Staff & Participant portals in one platform" },
    { icon: BarChart3, label: "Real-time Insights", agency: "Reports after the event", evenly: "Live analytics & performance tracking" },
    { icon: MessageCircle, label: "Communication", agency: "Manual and fragmented", evenly: "Built-in email, WhatsApp & scheduled reminders" },
    { icon: Users, label: "Event Engagement", agency: "Limited options", evenly: "Live polls, lucky draws & post-event surveys" },
];

const BENEFITS = [
    { lead: "More", bold: "Control" },
    { lead: "More", bold: "Cost-Efficient" },
    { lead: "More", bold: "Scalable" },
    { lead: "More", bold: "Features" },
];

/* =========================================================
   Small pieces
   ========================================================= */
function CheckDot({ className = "" }: { className?: string }) {
    return (
        <span
            className={`grid size-6 shrink-0 place-items-center rounded-full bg-brand-300 text-white ${className}`}
        >
            <Check className="size-3.5" strokeWidth={3} />
        </span>
    );
}

function CrossMark() {
    return <X className="size-5 shrink-0 text-destructive" strokeWidth={3} />;
}

function EvenlyLogo({ size = "md" }: { size?: "md" | "lg" }) {
    const lg = size === "lg";
    return (
        <span className="inline-flex items-center gap-2.5">
            <span
                className={`grid place-items-center rounded-lg border-2 border-amber-400 bg-amber-50 text-brand-600 ${lg ? "size-12" : "size-9"
                    }`}
            >
                <CalendarCheck className={lg ? "size-7" : "size-5"} strokeWidth={2.5} />
            </span>
            <span
                className={`font-heading font-extrabold tracking-tight text-brand-700 ${lg ? "text-4xl" : "text-2xl"
                    }`}
            >
                Evenly
            </span>
        </span>
    );
}



/* =========================================================
   Main section
   ========================================================= */
export default function WhyChoose() {
    return (
        <section className="relative overflow-hidden bg-background px-4 py-14 sm:px-8 lg:py-20">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeader
                    topTitle="Local Agency vs Evenly"
                    title={
                        <>
                            Why Choose Evenly Over a
                            <br />
                            Local Event Agency?
                        </>
                    }
                    description="Evenly gives organisers a complete toolkit to plan, run and wrap up an event — plus dedicated portals for your participants and your staff. Nothing locked behind a paywall."
                />

                {/* ---------- Body ---------- */}
                <div className="mt-12 flex flex-col gap-6 xl:flex-row xl:items-stretch">
                    {/* Comparison table */}
                    <div className="min-w-0 flex-1 overflow-x-auto rounded-3xl border border-sand-300 bg-linear-to-b from-btn-secondary-from to-btn-secondary-to shadow-btn-secondary">
                        <div className="min-w-170 p-4">
                            {/* head */}
                            <div className="grid grid-cols-[1.05fr_1fr_1.15fr] gap-2">
                                <div className="flex items-center px-4 font-heading text-lg font-bold text-ink">
                                    What You Get
                                </div>

                                <div className="flex items-center gap-3 rounded-t-2xl bg-amber-100/60 px-4 py-4">
                                    <span className="grid size-10 place-items-center rounded-lg border-2 border-amber-400 bg-amber-50 text-ink">
                                        <Building2 className="size-5" />
                                    </span>
                                    <span className="font-heading font-bold leading-tight text-ink">
                                        Local Event
                                        <br />
                                        Agency
                                    </span>
                                </div>

                                <div className="flex items-center rounded-t-2xl bg-brand-300/20 px-4 py-4">
                                    <EvenlyLogo />
                                </div>
                            </div>

                            {/* rows */}
                            {ROWS.map(({ icon: Icon, label, agency, evenly }, i) => (
                                <div
                                    key={label}
                                    className="grid grid-cols-[1.05fr_1fr_1.15fr] gap-2 border-t border-sand-300/60"
                                >
                                    <div className="flex items-center gap-3 px-4 py-4">
                                        <Icon className="size-6 shrink-0 text-brand-500" strokeWidth={1.6} />
                                        <span className="font-heading text-sm font-bold text-ink">
                                            {label}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 px-4 py-4">
                                        <CrossMark />
                                        <span className="text-sm text-muted-foreground">{agency}</span>
                                    </div>

                                    <div
                                        className={`flex items-center gap-3 bg-brand-300/20 px-4 py-4 ${i === ROWS.length - 1 ? "rounded-b-2xl" : ""
                                            }`}
                                    >
                                        <CheckDot />
                                        <span className="text-sm font-medium text-ink">{evenly}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Better choice card */}
                    <aside className="glow-green flex w-full shrink-0 flex-col rounded-3xl border border-brand-300/40 bg-brand-300/15 p-6 shadow-btn-secondary xl:w-72">
                        <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-300/50 bg-background/80 px-5 py-2 shadow-btn-secondary">
                            <Crown className="size-5 text-amber-500" />
                            <span className="font-heading text-sm font-bold text-brand-700">
                                The Better Choice
                            </span>
                        </span>

                        <div className="mt-8 flex justify-center">
                            <EvenlyLogo size="lg" />
                        </div>

                        <ul className="mt-8 space-y-5">
                            {BENEFITS.map(({ lead, bold }) => (
                                <li key={bold} className="flex items-center gap-3 text-ink">
                                    <CheckDot className="bg-brand-300/80" />
                                    <span>
                                        {lead} <b className="font-heading font-bold">{bold}</b>
                                    </span>
                                </li>
                            ))}
                            <li className="flex items-start gap-3 text-ink">
                                <CheckDot className="mt-0.5 bg-brand-300/80" />
                                <span>
                                    A Modern, <b className="font-heading font-bold">All-in-One</b>{" "}
                                    Event Solution
                                </span>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </section>
    );
}