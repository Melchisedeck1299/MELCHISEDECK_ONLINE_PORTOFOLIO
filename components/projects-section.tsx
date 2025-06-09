"use client"

import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"

export default function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("projects.project1.title"),
      description: t("projects.project1.desc"),
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Architecture modulaire", "Gestion quotidienne", "Finances", "Planification"],
      liveUrl: "https://github.com/Melchisedeck1299/Alter_Ego",
      
    },
    {
      title: t("projects.project2.title"),
      description: t("projects.project2.desc"),
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Deep Learning", "Python", "Reconnaissance 3D", "Classification"],
      liveUrl: "https://github.com/Melchisedeck1299/3D_Object_detection",
    },
    {
      title: t("projects.project4.title"),
      description: t("projects.project4.desc"),
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Java", "Simulation réseau", "Protocoles", "Connexions"],
      liveUrl: "https://github.com/Melchisedeck1299/TP3_reseau",
    },
    {
      title: t("projects.project5.title"),
      description: t("projects.project5.desc"),
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Data Science", "Analyse tendances", "Support technique", "Optimisation"],
      liveUrl: "https://colab.research.google.com/drive/1Ji5lm2rf5tioc_Dz6xYOrCbtIM-3u-cn?usp=sharing",
      
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("projects.title")}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t("projects.view")}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
