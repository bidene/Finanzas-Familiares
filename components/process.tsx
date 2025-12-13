import { Card } from "@/components/ui/card"
import { FileText, Search, CheckCircle, Banknote } from "lucide-react"

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Soumission de la demande",
    description: "Remplissez le formulaire en ligne avec vos informations personnelles et vos documents justificatifs.",
  },
  {
    icon: Search,
    number: "02",
    title: "Évaluation du dossier",
    description: "Notre équipe examine votre demande et vérifie votre éligibilité selon les critères du programme.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Validation et approbation",
    description: "Vous recevez une notification de décision sous 48 heures avec les détails de votre aide.",
  },
  {
    icon: Banknote,
    number: "04",
    title: "Versement de l'aide",
    description: "Le montant approuvé est transféré directement sur votre compte bancaire sous 7 jours.",
  },
]

export function Process() {
  return (
    <section id="processus" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Comment ça marche ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un processus simple et transparent en 4 étapes pour obtenir votre aide financière.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border -z-10 animate-shimmer" />
              )}

              <Card
                className={`p-6 hover-lift hover:shadow-xl transition-all h-full border-border hover:border-primary/50 ${
                  index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-4 hover:animate-bounce-subtle">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center animate-pulse-subtle">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
