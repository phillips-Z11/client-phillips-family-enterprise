import { Phone } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-[14px]">
      <nav className="flex h-[72px] items-center justify-between gap-6 px-5 w-full">
        
        
        {/* Logo area */}
        <a href="#" className="flex shrink-0 items-center gap-[11px] no-underline">
          <img src="/logo-crest.png" alt="Phillips Family Enterprises" className="h-[38px] w-auto" />
          <div className="h-7 w-px bg-line-strong" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-[17.5px] font-semibold tracking-[0.02em] text-ink-800 whitespace-nowrap">
              Phillips Family Enterprises
            </span>
            <span className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.22em] text-green-700">
              Real Estate Investors
            </span>
          </div>
        </a>

        {/* Nav links (hidden on mobile) */}
        <ul className="flex list-none gap-7 max-lg:hidden">
          <li><a href="#about" className="text-[14.5px] font-medium text-slate-700 hover:text-ink-800">About</a></li>
          <li><a href="#services" className="text-[14.5px] font-medium text-slate-700 hover:text-ink-800">How It Works</a></li>
          <li><a href="#reviews" className="text-[14.5px] font-medium text-slate-700 hover:text-ink-800">Reviews</a></li>
          <li><a href="#meet-ziaire" className="text-[14.5px] font-medium text-slate-700 hover:text-ink-800">Contact</a></li>
        </ul>

        {/* Right side */}
        <div className="flex items-center">
          <a href="tel:+15550000000" className="inline-flex items-center gap-[7px] rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 hover:shadow-md no-underline">
            <Phone className="size-4" />
            (555) 000-0000
          </a>
        </div>
      </nav>
    </header>
  )
}
