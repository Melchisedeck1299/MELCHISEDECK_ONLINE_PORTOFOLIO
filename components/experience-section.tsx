"use client"

import { Briefcase, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"

export default function ExperienceSection() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t("experience.job1.title"),
      company: t("experience.job1.company"),
      period: t("experience.job1.period"),
      description: t("experience.job1.desc"),
      technologies: ["Procédures douanières", "Service client", "Documentation", "Conformité"],
    },
    {
      title: t("experience.job2.title"),
      company: t("experience.job2.company"),
      period: t("experience.job2.period"),
      description: t("experience.job2.desc"),
      technologies: ["Active Directory", "Microsoft 365", "LogMeIn", "SolarWinds", "Support technique"],
    },
    {
      title: t("experience.job3.title"),
      company: t("experience.job3.company"),
      period: t("experience.job3.period"),
      description: t("experience.job3.desc"),
      technologies: ["Import/Export", "Service client", "Réglementations", "Documentation"],
    },
    {
      title: t("experience.job4.title"),
      company: t("experience.job4.company"),
      period: t("experience.job4.period"),
      description: t("experience.job4.desc"),
      technologies: ["Ventes", "Gestion litiges", "Service client", "Inspection"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("experience.title")}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center text-blue-600 font-medium mb-2">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
