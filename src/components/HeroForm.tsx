import { useState } from "react"
import { MapPin, Phone, Mail, User, ArrowRight, ShieldCheck, Check, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useSubmitContactFormMutation } from "@/store/slices/apiSlice"

export function HeroForm() {
  const [submitContactForm, { isLoading, isSuccess, isError }] = useSubmitContactFormMutation()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitContactForm(formData)
  }

  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-[0_28px_64px_rgba(8,24,50,0.38),0_8px_20px_rgba(8,24,50,0.20),0_0_0_1px_rgba(255,255,255,0.08)] sm:p-7">
      {!isSuccess ? (
        <form onSubmit={handleSubmit}>
          <p className="mb-4 text-center font-display text-[19px] font-semibold tracking-tight text-ink-800 sm:mb-5 sm:text-[21px]">
            Get your free, no-obligation cash offer
          </p>

          {/* Name Row */}
          <div className="mb-2.5 grid grid-cols-2 gap-2 sm:mb-3 sm:gap-3">
            <div>
              <label className="mb-1 block text-left text-[11px] font-semibold tracking-[0.01em] text-slate-700 sm:mb-1.5 sm:text-xs">
                First name
              </label>
              <Input
                type="text"
                name="firstName"
                placeholder="John"
                autoComplete="given-name"
                icon={<User />}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-left text-[11px] font-semibold tracking-[0.01em] text-slate-700 sm:mb-1.5 sm:text-xs">
                Last name
              </label>
              <Input
                type="text"
                name="lastName"
                placeholder="Doe"
                autoComplete="family-name"
                icon={<User />}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Property Address */}
          <div className="mb-2.5 sm:mb-3">
            <label className="mb-1 block text-left text-[11px] font-semibold tracking-[0.01em] text-slate-700 sm:mb-1.5 sm:text-xs">
              Property address
            </label>
            <Input
              type="text"
              name="address"
              placeholder="123 Main St, City, State ZIP"
              autoComplete="street-address"
              icon={<MapPin />}
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone & Email row */}
          <div className="mb-2.5 grid grid-cols-1 gap-2 sm:mb-3 sm:grid-cols-2 sm:gap-3">
            <div>
              <label className="mb-1 block text-left text-[11px] font-semibold tracking-[0.01em] text-slate-700 sm:mb-1.5 sm:text-xs">
                Phone
              </label>
              <Input
                type="tel"
                name="phone"
                placeholder="(555) 000-0000"
                autoComplete="tel"
                icon={<Phone />}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-left text-[11px] font-semibold tracking-[0.01em] text-slate-700 sm:mb-1.5 sm:text-xs">
                Email
              </label>
              <Input
                type="email"
                name="email"
                placeholder="you@email.com"
                autoComplete="email"
                icon={<Mail />}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Error Message */}
          {isError && (
            <p className="mt-2 text-center text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}

          {/* CTA Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "mt-3 flex w-full items-center justify-center gap-2.5 rounded-md bg-green-600 px-5 py-3.5 font-sans text-[15px] font-bold text-white sm:mt-4 sm:px-6 sm:py-4 sm:text-base",
              "shadow-[0_4px_18px_rgba(61,174,85,0.28)]",
              "transition-all duration-default ease-default",
              "hover:bg-green-700 hover:shadow-[0_6px_22px_rgba(61,174,85,0.40)]",
              "active:translate-y-px active:shadow-none",
              "disabled:cursor-not-allowed disabled:opacity-70"
            )}
          >
            {isLoading ? (
              <>
                Submitting
                <Loader2 className="size-4 animate-spin sm:size-[18px]" />
              </>
            ) : (
              <>
                Get my cash offer
                <ArrowRight className="size-4 sm:size-[18px]" />
              </>
            )}
          </button>

          {/* Privacy note */}
          <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10.5px] font-medium text-slate-400 sm:mt-3 sm:text-[11.5px]">
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
