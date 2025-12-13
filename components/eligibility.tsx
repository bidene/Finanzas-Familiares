import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const criteria = [
  "Être chef de famille ou parent d'au moins un enfant à charge",
  "Revenus mensuels inférieurs au seuil défini pour votre région",
  "Résider légalement dans l'un des pays participants au programme",
  "Ne pas avoir bénéficié d'une aide similaire au cours des 12 derniers mois",
  "Pouvoir fournir les justificatifs de situation familiale et financière",
  "Être âgé de 18 ans ou plus au moment de la demande",
]

export function Eligibility() {
  return (
    <section id="eligibilite" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Animation sur le titre */}
          <div className="text-center mb-12 animate-scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Critères d'éligibilité</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vérifiez si vous remplissez les conditions pour bénéficier de notre aide financière.
            </p>
          </div>

          {/* Animation sur la carte principale */}
          <Card className="p-6 lg:p-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="space-y-4">
              {criteria.map((criterion, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted/50 hover:scale-105 transition-all animate-fade-in-up cursor-default"
                  style={{ animationDelay: `${300 + index * 50}ms` }}
                >
                  {/* Animation sur l'icône de validation */}
                  <CheckCircle2
                    className="w-6 h-6 text-success flex-shrink-0 mt-0.5 animate-scale-in"
                    style={{ animationDelay: `${350 + index * 50}ms` }}
                  />
                  <p className="text-foreground leading-relaxed">{criterion}</p>
                </div>
              ))}
            </div>

            {/* Animation sur la note importante */}
            <div
              className="mt-8 p-4 rounded-lg bg-accent/10 border border-accent/20 animate-slide-in-left"
              style={{ animationDelay: "800ms" }}
            >
              <p className="text-sm text-foreground">
                <strong className="text-accent">Note importante :</strong> Ces critères sont généraux. Des conditions
                spécifiques peuvent s'appliquer selon votre pays de résidence. Notre équipe évaluera votre situation
                personnelle lors de l'examen de votre demande.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
