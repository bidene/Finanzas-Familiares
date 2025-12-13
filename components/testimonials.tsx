"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Marie Dubois",
    location: "Paris, France",
    amount: "3 500€",
    image: "/images/testimonial-1.jpg",
    text: "Grâce à la Bourse Familiale, j'ai pu surmonter mes difficultés financières. Le processus était simple et l'équipe très professionnelle.",
    delay: 0,
  },
  {
    name: "Ahmed Benali",
    location: "Lyon, France",
    amount: "5 000€",
    image: "/images/testimonial-2.jpg",
    text: "Une aide précieuse qui nous a permis de faire face aux dépenses imprévues. Je recommande vivement ce programme d'aide.",
    delay: 0.2,
  },
  {
    name: "Sophie Martin",
    location: "Marseille, France",
    amount: "4 200€",
    image: "/images/testimonial-3.jpg",
    text: "Le soutien financier reçu a changé la vie de ma famille. Procédure rapide et équipe à l'écoute. Merci infiniment!",
    delay: 0.4,
  },
  {
    name: "Jean-Pierre Lefebvre",
    location: "Bilbao, Espagne",
    amount: "6 000€",
    image: "/images/testimonial-4.jpg",
    text: "Un programa serio y eficaz. La ayuda no reembolsable nos permitió recuperar la estabilidad financiera.",
    delay: 0.6,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Témoignages de <span className="text-primary">Bénéficiaires</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Découvrez les histoires de familles qui ont bénéficié de notre programme d'aide financière
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: testimonial.delay }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Quote className="h-10 w-10 text-primary/40" />
                  </div>

                  <p className="text-lg mb-6 leading-relaxed text-pretty">"{testimonial.text}"</p>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{testimonial.amount}</p>
                      <p className="text-xs text-muted-foreground">Aide reçue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-semibold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm font-medium">
              Plus de <span className="font-bold text-primary">2 500 familles</span> aidées
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
