import { Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-ink-900 px-8 pb-9 pt-16 text-(--fg-on-dark-muted) max-sm:px-5">
      <div className="mx-auto max-w-295">
        {/* Footer Grid */}
        <div className="mb-12 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand Column */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/logo-crest.png"
                alt="Phillips Family Enterprises"
                className="h-14 w-auto"
              />
              <div>
                <div className="font-display text-lg font-semibold leading-none text-white">
                  Phillips Family Enterprises
                </div>
                <div className="mt-1 text-[8.5px] font-extrabold uppercase tracking-[0.22em] text-green-bright">
                  Real Estate Investors
                </div>
              </div>
            </div>
            <p className="max-w-75 text-sm leading-relaxed">
              Fast, fair, hassle-free cash offers for homeowners in any situation — and curated
              investment opportunities for our network of cash buyers. A family operator you can
              trust.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Company</h4>
            <nav className="flex flex-col gap-2.5">
              <a
                href="#about"
                className="text-sm font-medium text-(--fg-on-dark-muted) transition-colors hover:text-white"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-(--fg-on-dark-muted) transition-colors hover:text-white"
              >
                How It Works
              </a>
              <a
                href="#meet-ziaire"
                className="text-sm font-medium text-(--fg-on-dark-muted) transition-colors hover:text-white"
              >
                Meet Ziaire
              </a>
              <a
                href="#reviews"
                className="text-sm font-medium text-(--fg-on-dark-muted) transition-colors hover:text-white"
              >
                Reviews
              </a>
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
              Services
            </h4>
            <nav className="flex flex-col gap-2.5">
              <a
                href="#"
                className="text-sm font-medium text-(--fg-on-dark-muted) transition-colors hover:text-white"
              >
                Sell Your House
              </a>
              <a
                href="#"
                className="text-sm font-medium text-(--fg-on-dark-muted) transition-colors hover:text-white"
              >
                Cash Offers
              </a>
              <a
                href="#"
                className="text-sm font-medium text-(--fg-on-dark-muted) transition-colors hover:text-white"
              >
                Sell As-Is
              </a>
              <a
                href="#"
                className="text-sm font-medium text-(--fg-on-dark-muted) transition-colors hover:text-white"
              >
                Investment Properties
              </a>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+15550000000"
                className="flex items-center gap-2.5 text-sm font-medium text-(--fg-on-dark-muted) transition-colors hover:text-white"
              >
                <Phone className="size-4 flex-none text-green-bright" />
                (410) 996-4975
              </a>
              <a
                href="mailto:hello@phillipsfamilyenterprises.com"
                className="flex items-center gap-2.5 text-sm font-medium text-(--fg-on-dark-muted) transition-colors hover:text-white"
              >
                <Mail className="size-4 flex-none text-green-bright" />
                zphillips@phillipsfamilyrealty.com
              </a>
              <span className="flex items-center gap-2.5 text-sm font-medium">
                <Clock className="size-4 flex-none text-green-bright" />
                Mon–Sat, 8am–7pm
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm max-sm:flex-col max-sm:items-start">
          <span>&copy; 2026 Phillips Family Enterprises. All rights reserved.</span>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-(--fg-on-dark-muted) transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-(--fg-on-dark-muted) transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
