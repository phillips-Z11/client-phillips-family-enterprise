import { Clock, BadgeCheck, Handshake } from "lucide-react"
import { HeroForm } from "@/components/HeroForm"

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-ink-800">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-position-[55%_35%]"
        style={{ backgroundImage: "url('/hero-background.jpeg')" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 78% 78% at 50% 48%, rgba(10, 44, 78, 0.28) 0%, rgba(10, 44, 78, 0.58) 100%),
            linear-gradient(180deg, rgba(10, 44, 78, 0.12) 0%, rgba(10, 44, 78, 0.42) 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-165 flex-col items-center px-6 py-10 text-center sm:py-14 md:py-16">
        {/* Eyebrow */}
        <div className="mb-5 inline-flex items-center gap-2.5 text-eyebrow font-extrabold uppercase tracking-eyebrow text-green-bright [text-shadow:0_1px_8px_rgba(8,24,50,0.55)]">
          <span className="inline-block h-[1.5px] w-5.5 rounded-sm bg-green-500" />
          <span className="text-[13px] text-green-500">★</span>
          5+ Years
          <span className="inline-block h-[1.5px] w-5.5 rounded-sm bg-green-500" />
        </div>

        {/* Headline */}
        <h1 className="mb-3 font-display text-display font-medium tracking-tight text-white [text-shadow:0_2px_24px_rgba(8,24,50,0.45),0_1px_3px_rgba(8,24,50,0.30)] text-balance sm:mb-4">
          <em className="no-wrap">Sell your house fast. </em>
          <br />
          Get paid in <em className="italic text-[#86D898]">cash</em>.
        </h1>

        {/* Subtext */}
        <p className="mb-2 max-w-120 text-body-lg text-white/70 [text-shadow:0_1px_12px_rgba(8,24,50,0.50)] sm:mb-10">
          No repairs. No agent fees. No waiting on financing.
        </p>

        {/* Form Card */}
        <HeroForm />

        {/* Trust Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
          <span className="flex items-center gap-2 text-sm font-semibold text-white/90 [text-shadow:0_1px_8px_rgba(8,24,50,0.55)]">
            <Clock className="size-3.75 text-green-bright" />
            Close in 7–14 days
          </span>
          <span className="text-white/20 max-sm:hidden">·</span>
          <span className="flex items-center gap-2 text-sm font-semibold text-white/90 [text-shadow:0_1px_8px_rgba(8,24,50,0.55)]">
            <BadgeCheck className="size-3.75 text-green-bright" />
            No repairs needed
          </span>
          <span className="text-white/20 max-sm:hidden">·</span>
          <span className="flex items-center gap-2 text-sm font-semibold text-white/90 [text-shadow:0_1px_8px_rgba(8,24,50,0.55)]">
            <Handshake className="size-3.75 text-green-bright" />
            Ziaire calls within 24 hours
          </span>
        </div>
      </div>
    </section>
  )
}
