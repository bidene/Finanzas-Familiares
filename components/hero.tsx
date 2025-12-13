"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToForm = () => {
    const element = document.getElementById("demande")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="accueil" className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success border border-success/20 mb-8 animate-fade-in-up">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium"></span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up text-balance"
              style={{ animationDelay: "0.1s" }}
            >
              Bourse Familiale FMI
              <br />
              <span className="text-primary">Aide Financière Gratuite</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Le programme d'aide aux familles en difficulté offre un soutien financier non remboursable. Découvrez si
              vous êtes éligible et obtenez l'aide dont vous avez besoin.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button size="lg" onClick={scrollToForm} className="w-full sm:w-auto group">
                Faire une demande
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("eligibilite")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                className="w-full sm:w-auto"
              >
                Vérifier mon éligibilité
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold mb-1">Non remboursable</h3>
                  <p className="text-sm text-muted-foreground">
                    Aide financière gratuite sans obligation de remboursement
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold mb-1">Rapide et simple</h3>
                  <p className="text-sm text-muted-foreground">Processus de demande simplifié en quelques minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold mb-1">Support dédié</h3>
                  <p className="text-sm text-muted-foreground">Accompagnement personnalisé à chaque étape</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-family.jpg"
                alt="Famille heureuse bénéficiant du programme"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold">2500+</p>
              <p className="text-sm">Familles aidées</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
