import { AppPreview } from "@/components/landing/dashboard-preview";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import Image from "next/image";
import bg from '../app/assets/texture.jpg'



export default function Home() {
  return (
    <div className="min-h-screen bg-white p-20 sm:p-3">
      <main className="relative  overflow-hidden 
      rounded-3xl border border-gray-400 bg-[#f7f7f6]">

        {/* background  */}
        <Image src={bg} alt="evently-event-bg" className="absolute h-full w-full z-0 opacity-5 contain-object" />

        {/* soft paper glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] 
        bg-[radial-gradient(ellipse_at_50%_100%,rgba(251,146,60,0.45),rgba(250,204,21,0.3)_35%,transparent_70%),radial-gradient(ellipse_at_0%_100%,rgba(34,211,238,0.5),transparent_45%),radial-gradient(ellipse_at_100%_100%,rgba(244,114,182,0.5),transparent_45%)]"
        />
       

        <div className="relative z-10 w-full">
          <Navbar />

          <Hero />
          <AppPreview />
        </div>
      </main>
    </div>
  );
}