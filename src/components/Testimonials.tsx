import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  initial: string
}

function TestimonialCard({ quote, name, location, initial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-line bg-white px-7 py-7 shadow-md">
      {/* Stars */}
      <div className="mb-4 flex gap-0.5 text-green-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>

      {/* Quote */}
      <p className="mb-5 flex-1 text-body leading-relaxed text-ink-text before:content-['\201C'] after:content-['\201D']">
        {quote}
      </p>

      {/* Person */}
      <div className="flex items-center gap-3 border-t border-line pt-4">
        <div className="flex size-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 font-display text-[19px] font-semibold text-white">
          {initial}
        </div>
        <div>
          <div className="text-sm font-bold text-ink-800">{name}</div>
          <div className="text-caption text-slate-500">{location}</div>
        </div>
      </div>
    </div>
  )
}

const testimonials: TestimonialCardProps[] = [
  {
    quote:
      `I needed to sell my property quickly and didn’t want to deal with repairs, 
      showings, or waiting months for a buyer. Phillips Family Realty made the process simple, 
      explained everything clearly, and closed on my timeline. I highly recommend them!`,
    name: "William R",
    location: "Hockessin, DE",
    initial: "WR",
  },
  {
    quote:
    `I was facing a challenging financial situation and needed a solution quickly. Phillips 
    Family Realty worked with me every step of the way, gave me options, and helped me move 
    forward with confidence.`,
    name: "Terrell B",
    location: "Wilmington, DE",
    initial: "TB",
  },
  {
    quote:
      `From our first conversation, I felt like I was treated with respect and honesty. 
      They gave me a fair offer, handled all the details, and made selling my home stress-free. 
      The entire experience was much easier than I expected.`,
    name: "Lillian K",
    location: "Newark, DE",
    initial: "LK",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="bg-paper-2 py-24 max-md:py-16">
      <div className="mx-auto max-w-295 px-4 max-sm:px-5">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-175 text-center">
          <div className="mb-4 inline-flex items-center gap-2.5 text-eyebrow font-extrabold uppercase tracking-eyebrow text-green-700">
            <span className="inline-block h-[1.5px] w-5.5 rounded-sm bg-green-500" />
            <span className="text-[13px] text-green-500">★</span>
            What Sellers Say
          </div>
          <h2 className="font-display text-h1 font-medium tracking-tight text-ink-800 text-balance">
            Trusted by families like <em className="italic text-blue-600">yours</em>.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
