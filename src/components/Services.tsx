import { BadgeDollarSign, CircleSlash, Wrench, CalendarClock, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-white/[0.04] p-7",
        "transition-all duration-default ease-default",
        "hover:-translate-y-0.5 hover:border-green-bright/35 hover:bg-white/[0.06]"
      )}
    >
      <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-green-500/15">
        <Icon className="size-6 text-green-bright" />
      </div>
      <h3 className="mb-2 font-sans text-lg font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--fg-on-dark-muted)]">{description}</p>
    </div>
  )
}

interface ProcessStepProps {
  number: number
  title: string
  description: string
  isLast?: boolean
}

function ProcessStep({ number, title, description, isLast }: ProcessStepProps) {
  return (
    <div className="relative px-5 text-center">
      {/* Dashed connector line */}
      {!isLast && (
        <div
          className="absolute left-[calc(50%+27px)] top-7 h-0.5 max-lg:hidden"
          style={{
            width: "calc(100% - 54px)",
            background:
              "repeating-linear-gradient(90deg, rgba(143, 224, 160, 0.4) 0 6px, transparent 6px 12px)",
          }}
        />
      )}

      {/* Number circle */}
      <div className="relative z-10 mx-auto mb-5 flex size-14 items-center justify-center rounded-full border-2 border-green-bright bg-ink-900 font-display text-[26px] font-semibold text-green-bright">
        {number}
      </div>

      <h4 className="mb-2 font-sans text-[16.5px] font-bold text-white">{title}</h4>
      <p className="text-sm leading-snug text-[var(--fg-on-dark-muted)]">{description}</p>
    </div>
  )
}

const services: ServiceCardProps[] = [
  {
    icon: BadgeDollarSign,
    title: "Fair cash offers",
    description:
      "A real, no-obligation number based on your home's true market value — not a lowball.",
  },
  {
    icon: CircleSlash,
    title: "No fees or commissions",
    description: "Keep what's yours. We cover the closing costs, and you pay zero agent fees.",
  },
  {
    icon: Wrench,
    title: "Sell as-is",
    description:
      "Skip the repairs and the deep clean. We buy in any condition, foundation to roof.",
  },
  {
    icon: CalendarClock,
    title: "Close on your schedule",
    description: "Need 7 days or 60? You choose the closing date that works for your life.",
  },
]

const steps: Omit<ProcessStepProps, "isLast">[] = [
  {
    number: 1,
    title: "Tell us about your home",
    description: "Share your address and a few details. It takes about two minutes.",
  },
  {
    number: 2,
    title: "Get your cash offer",
    description: "Ziaire reviews it and calls you within 24 hours with a fair, honest number.",
  },
  {
    number: 3,
    title: "Pick your closing date",
    description: "Accept the offer and choose when to close — in as little as 7 days.",
  },
  {
    number: 4,
    title: "Get paid in cash",
    description: "Sign, close, and walk away with cash in hand. No surprises, no waiting.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-ink-800 py-24 max-md:py-16">
      <div className="mx-auto max-w-[1180px] px-8 max-sm:px-5">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-[700px] text-center">
          <div className="mb-4 inline-flex items-center gap-2.5 text-eyebrow font-extrabold uppercase tracking-eyebrow text-green-bright">
            <span className="inline-block h-[1.5px] w-[22px] rounded-sm bg-green-bright" />
            <span className="text-[13px] text-green-bright">★</span>
            What We Do
          </div>
          <h2 className="font-display text-h1 font-medium tracking-tight text-white [text-wrap:balance]">
            We make selling <em className="italic text-green-bright">simple</em>.
          </h2>
          <p className="mt-4 text-body-lg leading-relaxed text-[var(--fg-on-dark-muted)]">
            Whatever the situation — foreclosure, an inherited or vacant home, repairs you can't
            face, or life simply changing — we remove the friction, the fees, and the waiting, and
            hand you a fair cash offer instead.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-12 text-center">
          <div className="mb-3 text-eyebrow font-extrabold uppercase tracking-eyebrow text-green-bright">
            How It Works
          </div>
          <h3 className="font-display text-h2 font-medium tracking-tight text-white">
            Four simple steps to cash in hand
          </h3>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} {...step} isLast={index === steps.length - 1} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#"
            className={cn(
              "inline-flex items-center gap-2.5 rounded-md bg-green-600 px-8 py-4 font-sans text-base font-bold text-white",
              "shadow-[0_4px_18px_rgba(61,174,85,0.30)]",
              "transition-all duration-default ease-default",
              "hover:bg-green-500 hover:shadow-[0_6px_24px_rgba(61,174,85,0.42)]",
              "active:translate-y-px"
            )}
          >
            Get my cash offer
            <ArrowRight className="size-[18px]" />
          </a>
        </div>
      </div>
    </section>
  )
}
