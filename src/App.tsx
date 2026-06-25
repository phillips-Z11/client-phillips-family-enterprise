import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Testimonials } from "@/components/Testimonials"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { MeetZiaire } from "@/components/MeetZiaire"
import { Footer } from "@/components/Footer"

export function App() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <Hero />
      <Testimonials />
      <About />
      <Services />
      <MeetZiaire />
      <Footer />
    </div>
  )
}

export default App
