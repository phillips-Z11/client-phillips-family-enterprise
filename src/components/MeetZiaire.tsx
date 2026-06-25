import { Handshake } from "lucide-react"

export function MeetZiaire() {
  return (
    <section id="meet-ziaire" className="bg-paper py-24 max-md:py-16">
      <div className="mx-auto max-w-[1180px] px-8 max-sm:px-5">
        <div className="grid items-center gap-14 max-md:grid-cols-1 md:grid-cols-[0.85fr_1.15fr]">
          {/* Photo Column */}
          <div className="relative">
            <img
              src="/headshot.png"
              alt="Ziaire Phillips, founder of Phillips Family Enterprises"
              className="aspect-square w-full rounded-xl object-cover shadow-lg"
            />

            {/* Floating Badge */}
            <div className="absolute -right-5 bottom-6 flex items-center gap-3 rounded-lg border border-line bg-white px-5 py-4 shadow-lg max-md:right-4">
              <div className="flex size-10 flex-none items-center justify-center rounded-full bg-green-100 text-green-600">
                <Handshake className="size-5" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight text-ink-800">Ziaire Phillips</div>
                <div className="mt-0.5 text-xs text-slate-500">Founder & Lead Buyer</div>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2.5 text-eyebrow font-extrabold uppercase tracking-eyebrow text-green-700">
              <span className="inline-block h-[1.5px] w-[22px] rounded-sm bg-green-500" />
              <span className="text-[13px] text-green-500">★</span>
              Meet the Founder
            </div>

            <h2 className="font-display text-h1 font-medium tracking-tight text-ink-800 [text-wrap:balance]">
              Hi, I'm <em className="italic text-blue-600">Ziaire</em>.
            </h2>

            <p className="mt-5 text-[17px] leading-relaxed text-slate-700">
              I started Phillips Family Enterprises because selling a home shouldn't feel like a
              battle. For 5+ years I've worked directly with homeowners — listening first, making
              fair offers, and closing on their timeline.
            </p>

            <p className="mt-5 text-[17px] leading-relaxed text-slate-700">
              <em className="font-medium italic text-ink-800">
                When you reach out, you talk to me — not a call center.
              </em>{" "}
              I'll walk you through every number, answer every question, and never pressure you into
              a decision. That's a promise from my family to yours.
            </p>

            {/* Signature */}
            <div className="mt-6">
              <div className="font-display text-[34px] font-semibold italic text-blue-600">
                Ziaire Phillips
              </div>
              <div className="mt-1 text-sm font-semibold tracking-wide text-slate-500">
                Founder, Phillips Family Enterprises
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
