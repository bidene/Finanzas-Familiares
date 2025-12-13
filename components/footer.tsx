import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Bourse Familiale FMI"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg"
              />
              <div className="flex flex-col">
                <span className="font-bold text-background">Bourse Familiale</span>
                <span className="text-xs text-background/70">Programme FMI</span>
              </div>
            </div>
            {/* </CHANGE> */}
            <p className="text-sm text-background/70 leading-relaxed">
              Un programme d'aide financière dédié au soutien des familles en difficulté à travers le monde.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Navigation</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#accueil" className="hover:text-background transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#eligibilite" className="hover:text-background transition-colors">
                  Éligibilité
                </a>
              </li>
              <li>
                <a href="#processus" className="hover:text-background transition-colors">
                  Processus
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Informations légales</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Jonasmatinez68@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+34 616 09 45 17</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/70">
          <p>© 2025 Bourse Familiale FMI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}