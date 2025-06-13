"use client"

import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function HeroSection() {
  const { t } = useLanguage()

  const scrollToNext = () => {
    const element = document.getElementById("experience")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              MM
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Melchisedeck Mvita</h1>
            <h2 className="text-xl md:text-2xl text-blue-600 font-medium">{t("hero.title")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("hero.subtitle")}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToNext} size="lg" className="bg-blue-600 hover:bg-blue-700">
              {t("hero.cta")}
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://drive.google.com/uc?export=download&id=1oRkXFZxAyDdzb0doFROT2729Y0ZQCCc7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                {t("hero.download")}
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:mvitamelchisedeck@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/Melchisedeck1299" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/in/melchis-mvita-85a3b935b" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
