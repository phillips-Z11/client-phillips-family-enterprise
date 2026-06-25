import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  initial: string
}

function TestimonialCard({ quote, name, location, initial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-line bg-white p-7 shadow-md">
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
      "Ziaire called the next morning, gave us a fair number, and we closed in eleven days. No repairs, no agents, no stress — exactly what he promised.",
    name: "Marcus & Dana Reed",
    location: "Hockessin, DE",
    initial: "M",
  },
  {
    quote:
      "I inherited a house that needed a lot of work. Phillips Family Enterprises bought it as-is and let me pick the closing date. Honest people, start to finish.",
    name: "Teresa Okafor",
    location: "Wilmington, DE",
    initial: "T",
  },
  {
    quote:
      "After two failed listings, I was done with showings. Ziaire made it simple — cash offer, clear paperwork, and money in hand on my schedule. Highly recommend.",
    name: "James Whitfield",
    location: "Newark, DE",
    initial: "J",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="bg-paper-2 py-24 max-md:py-16">
      <div className="mx-auto max-w-[1180px] px-8 max-sm:px-5">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-[700px] text-center">
          <div className="mb-4 inline-flex items-center gap-2.5 text-eyebrow font-extrabold uppercase tracking-eyebrow text-green-700">
            <span className="inline-block h-[1.5px] w-[22px] rounded-sm bg-green-500" />
            <span className="text-[13px] text-green-500">★</span>
            What Sellers Say
          </div>
          <h2 className="font-display text-h1 font-medium tracking-tight text-ink-800 [text-wrap:balance]">
            Trusted by families like <em className="italic text-blue-600">yours</em>.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
