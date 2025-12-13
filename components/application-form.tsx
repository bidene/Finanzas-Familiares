"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Loader2 } from "lucide-react"

const WHATSAPP_NUMBER = "34616094517" // Numéro WhatsApp au format international sans +

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const address = formData.get("address") as string
    const birthPlace = formData.get("birthPlace") as string
    const birthDate = formData.get("birthDate") as string
    const requestedAmount = formData.get("requestedAmount") as string
    const country = formData.get("country") as string
    const dependents = formData.get("dependents") as string
    const income = formData.get("income") as string
    const situation = formData.get("situation") as string

    const message = `🎯 NOUVELLE DEMANDE - BOURSE FAMILIALE FMI

📋 *Informations personnelles:*
• Nom complet: ${firstName} ${lastName}
• Email: ${email}
• Téléphone: ${phone}
• Adresse: ${address}
• Lieu de naissance: ${birthPlace}
• Date de naissance: ${birthDate}
• Pays: ${country}

💰 *Demande financière:*
• Montant demandé: ${requestedAmount}€

👨‍👩‍👧‍👦 *Situation familiale:*
• Personnes à charge: ${dependents}
• Revenu mensuel: ${income}€

📝 *Description de la situation:*
${situation}

---
Demande reçue le ${new Date().toLocaleDateString("fr-FR")} à ${new Date().toLocaleTimeString("fr-FR")}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/"34616094517" ${WHATSAPP_NUMBER}?text=${encodedMessage}`

    // Simuler un délai
    await new Promise((resolve) => setTimeout(resolve, 1000))

    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="demande" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8 lg:p-12">
              <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Demande envoyée avec succès !</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Votre demande a été envoyée via WhatsApp. Notre équipe vous contactera sous 48 heures.
              </p>
              <p className="text-sm text-muted-foreground">
                Numéro de suivi :{" "}
                <strong className="text-foreground">
                  BF-{Math.random().toString(36).substring(2, 10).toUpperCase()}
                </strong>
              </p>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="demande" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Faire une demande d'aide</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Remplissez ce formulaire pour soumettre votre demande. Tous les champs sont obligatoires.
            </p>
          </div>

          <Card className="p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">NB : Document requis</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Vous devez envoyer la photo de votre carte d'identité (recto et verso) pour la vérification de votre
                    dossier. ✅
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input id="firstName" name="firstName" placeholder="Votre prénom" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input id="lastName" name="lastName" placeholder="Votre nom" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="votre@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+33 6 12 34 56 78" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Adresse</Label>
                <Input id="address" name="address" placeholder="Votre adresse complète" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="birthPlace">Lieu de naissance</Label>
                  <Input id="birthPlace" name="birthPlace" placeholder="Paris, France" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Date de naissance</Label>
                  <Input id="birthDate" name="birthDate" type="date" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="country">Pays de résidence</Label>
                  <Input id="country" name="country" placeholder="France" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dependents">Nombre de personnes à charge</Label>
                  <Input id="dependents" name="dependents" type="number" placeholder="2" min="0" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="requestedAmount">Montant demandé (€)</Label>
                  <Input
                    id="requestedAmount"
                    name="requestedAmount"
                    type="number"
                    placeholder="5000"
                    min="0"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="income">Revenu mensuel (€)</Label>
                  <Input id="income" name="income" type="number" placeholder="1200" min="0" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="situation">Décrivez votre situation</Label>
                <Textarea
                  id="situation"
                  name="situation"
                  placeholder="Expliquez brièvement votre situation familiale et financière..."
                  rows={5}
                  required
                />
              </div>

              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-sm text-foreground">
                  En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre
                  politique de confidentialité et aux réglementations en vigueur.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
