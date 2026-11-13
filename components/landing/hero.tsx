"use client";
export function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-5 pt-4 md:pt-12 text-center">
      <h1 className=" text-2xl md:text-4xl font-medium leading-[1.1] tracking-tight text-neutral-950
       sm:text-5xl md:text-[54px]">
        The event management platform
        <br />
        built for every occasion
      </h1>

      <p className="mt-4 sm:mt-8 md:mt-6 max-w-4xl text-xs sm:text-xl md:text-lg leading-6 text-neutral-500">
        Evenly gives organisers a complete toolkit to plan, run and wrap up an event —
         plus dedicated portals for your participants and your staff. Nothing locked behind a paywall.
      </p>
    </section>
  );
}