"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Bourse Familiale FMI"
              width={48}
              height={48}
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            <div className="flex flex-col">
              <span className="font-bold text-sm lg:text-base text-foreground">Bourse Familiale</span>
              <span className="text-xs text-muted-foreground">Programme FMI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("eligibilite")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Éligibilité
            </button>
            <button
              onClick={() => scrollToSection("processus")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Processus
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <ThemeToggle />
            <Button onClick={() => scrollToSection("demande")} size="sm" className="ml-4">
              Faire une demande
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("accueil")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("eligibilite")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg"
            >
              Éligibilité
            </button>
            <button
              onClick={() => scrollToSection("processus")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg"
            >
              Processus
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg"
            >
              FAQ
            </button>
            <div className="px-4">
              <Button onClick={() => scrollToSection("demande")} className="w-full">
                Faire une demande
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
