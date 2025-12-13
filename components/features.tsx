import { Card } from "@/components/ui/card"
import { Shield, Zap, Users, Globe, FileCheck, Headphones } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Sécurité garantie",
    description: "Vos données sont protégées et traitées en toute confidentialité selon les normes internationales.",
  },
  {
    icon: Zap,
    title: "Traitement rapide",
    description: "Réponse sous 48 heures et versement sous 7 jours ouvrés après validation de votre dossier.",
  },
  {
    icon: Users,
    title: "Aide personnalisée",
    description: "Chaque demande est étudiée individuellement pour répondre au mieux à vos besoins spécifiques.",
  },
  {
    icon: Globe,
    title: "Accessible partout",
    description: "Programme disponible dans plus de 50 pays à travers le monde pour aider les familles.",
  },
  {
    icon: FileCheck,
    title: "Processus transparent",
    description: "Suivi en temps réel de votre demande avec notifications à chaque étape du processus.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Notre équipe est disponible pour répondre à toutes vos questions à tout moment.",
  },
]

export function Features() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Pourquoi choisir notre programme ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un programme d'aide conçu pour offrir un soutien efficace et durable aux familles en difficulté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover-lift hover:shadow-xl transition-all border-border animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-transform hover:scale-110 hover:rotate-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
