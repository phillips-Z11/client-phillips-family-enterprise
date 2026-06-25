import { Award, Banknote, Home, CalendarCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface StatProps {
  icon: LucideIcon
  value: string
  label: string
}

function Stat({ icon: Icon, value, label }: StatProps) {
  return (
    <div className="bg-paper p-7">
      <Icon className="mb-3.5 size-[22px] text-green-600" />
      <div className="font-display text-[44px] font-semibold leading-none tracking-tight text-blue-600">
        {value}
      </div>
      <div className="mt-2.5 text-sm font-semibold leading-snug text-slate-700">{label}</div>
    </div>
  )
}

const stats: StatProps[] = [
  { icon: Award, value: "5+", label: "Years buying homes for cash" },
  { icon: Banknote, value: "$0", label: "Agent fees or commissions" },
  { icon: Home, value: "Any", label: "Condition — we buy as-is" },
  { icon: CalendarCheck, value: "7–14", label: "Days to close, your pick" },
]

export function About() {
  return (
    <section id="about" className="bg-white py-24 max-md:py-16">
      <div className="mx-auto max-w-[1180px] px-8 max-sm:px-5">
        <div className="grid items-center gap-16 max-md:grid-cols-1 md:grid-cols-2">
          {/* Copy */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2.5 text-eyebrow font-extrabold uppercase tracking-eyebrow text-green-700">
              <span className="inline-block h-[1.5px] w-[22px] rounded-sm bg-green-500" />
              <span className="text-[13px] text-green-500">★</span>
              Who We Are
            </div>
            <h2 className="font-display text-[clamp(32px,3.6vw,46px)] font-medium leading-tight tracking-tight text-ink-800 [text-wrap:balance]">
              A family operator, not a faceless <em className="italic text-blue-600">iBuyer</em>.
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-slate-700">
              Phillips Family Enterprises has spent 5+ years helping homeowners sell on their own
              terms — quickly and without the runaround. Facing foreclosure, an inherited or vacant
              property, costly repairs, or a divorce? We buy houses in any condition with cash, so
              you skip the repairs, the showings, and the months of waiting.
            </p>
            <p className="mt-5 text-[16.5px] leading-relaxed text-slate-700">
              No repairs. No agent commissions. No drawn-out closing. We craft a fair solution,
              close on your schedule, and connect every property with our network of qualified cash
              buyers. And every call comes straight from Ziaire — never a call center.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line max-sm:grid-cols-1">
            {stats.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
