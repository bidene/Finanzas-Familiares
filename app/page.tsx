import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Eligibility } from "@/components/eligibility"
import { Process } from "@/components/process"
import { Stats } from "@/components/stats"
import { ApplicationForm } from "@/components/application-form"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Eligibility />
        <Process />
        <Testimonials />
        <ApplicationForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
