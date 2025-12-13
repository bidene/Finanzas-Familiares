"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Qui peut bénéficier de cette aide ?",
    answer:
      "Toute famille en difficulté financière répondant aux critères d'éligibilité peut faire une demande. L'aide est destinée principalement aux parents avec enfants à charge dont les revenus sont inférieurs au seuil défini.",
  },
  {
    question: "Quel est le montant de l'aide accordée ?",
    answer:
      "Le montant varie selon votre situation familiale et financière. Il est calculé en fonction du nombre de personnes à charge, de vos revenus actuels et de vos besoins spécifiques. En moyenne, l'aide se situe entre 1 500€ et 5 000€.",
  },
  {
    question: "L'aide est-elle vraiment non remboursable ?",
    answer:
      "Oui, cette aide est une subvention non remboursable. Une fois accordée, vous n'avez aucune obligation de remboursement. C'est un soutien financier gratuit destiné à vous aider à surmonter vos difficultés.",
  },
  {
    question: "Combien de temps prend le traitement de ma demande ?",
    answer:
      "Le délai moyen est de 48 heures pour une première réponse. Une fois votre dossier validé, le versement s'effectue sous 7 jours ouvrés directement sur votre compte bancaire.",
  },
  {
    question: "Quels documents dois-je fournir ?",
    answer:
      "Vous devrez fournir une pièce d'identité, un justificatif de domicile, des preuves de revenus (bulletins de salaire ou attestation), et un document attestant de votre situation familiale (livret de famille, acte de naissance des enfants).",
  },
  {
    question: "Puis-je faire une nouvelle demande après avoir reçu une aide ?",
    answer:
      "Un délai de 12 mois doit être respecté entre deux demandes. Cependant, si votre situation se dégrade significativement, vous pouvez contacter notre service pour étudier votre cas particulier.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Questions fréquentes</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trouvez les réponses aux questions les plus courantes sur notre programme d'aide.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-center text-foreground">
              Vous avez d'autres questions ? Contactez notre support à{" "}
              <a href="mailto:Jonasmatinez68@gmail.com" className="text-primary font-medium hover:underline">
                Jonasmatinez68@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
