import { useState } from "react"
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function HeroForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="w-full rounded-xl bg-white p-7 shadow-[0_28px_64px_rgba(8,24,50,0.38),0_8px_20px_rgba(8,24,50,0.20),0_0_0_1px_rgba(255,255,255,0.08)]">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <p className="mb-5 text-center font-display text-[21px] font-semibold tracking-tight text-ink-800">
            Get your free, no-obligation cash offer
          </p>

          {/* Property Address */}
          <div className="mb-3">
            <label className="mb-1.5 block text-left text-xs font-semibold tracking-[0.01em] text-slate-700">
              Property address
            </label>
            <Input
              type="text"
              name="address"
              placeholder="123 Main St, City, State ZIP"
              autoComplete="street-address"
              icon={<MapPin />}
            />
          </div>

          {/* Phone & Email row */}
          <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-left text-xs font-semibold tracking-[0.01em] text-slate-700">
                Phone
              </label>
              <Input
                type="tel"
                name="phone"
                placeholder="(555) 000-0000"
                autoComplete="tel"
                icon={<Phone />}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-left text-xs font-semibold tracking-[0.01em] text-slate-700">
                Email
              </label>
              <Input
                type="email"
                name="email"
                placeholder="you@email.com"
                autoComplete="email"
                icon={<Mail />}
              />
            </div>
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            className={cn(
              "mt-4 flex w-full items-center justify-center gap-2.5 rounded-md bg-green-600 px-6 py-4 font-sans text-base font-bold text-white",
              "shadow-[0_4px_18px_rgba(61,174,85,0.28)]",
              "transition-all duration-default ease-default",
              "hover:bg-green-700 hover:shadow-[0_6px_22px_rgba(61,174,85,0.40)]",
              "active:translate-y-px active:shadow-none"
            )}
          >
            Get my cash offer
            <ArrowRight className="size-[18px]" />
          </button>

          {/* Privacy note */}
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11.5px] font-medium text-slate-400">
            <ShieldCheck className="size-3 text-green-600" />
            Your information is private and never shared. No obligation.
          </div>
        </form>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-2 py-4 text-center duration-slow">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Check className="size-7" strokeWidth={2.4} />
          </div>
          <p className="mb-2 font-display text-[26px] font-semibold tracking-tight text-ink-800">
            Thank you for reaching out
          </p>
          <p className="mx-auto max-w-xs text-[15px] leading-relaxed text-slate-700">
            Phillips Family Enterprises will be in touch shortly.
          </p>
        </div>
      )}
    </div>
  )
}
