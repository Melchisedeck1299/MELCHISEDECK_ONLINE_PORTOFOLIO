"use client"

import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export default function EducationSection() {
  const { t } = useLanguage()

  const education = [
    {
      degree: t("education.degree1.title"),
      school: t("education.degree1.school"),
      period: t("education.degree1.period"),
    },
    {
      degree: t("education.degree2.title"),
      school: t("education.degree2.school"),
      period: t("education.degree2.period"),
    },
    {
      degree: t("education.degree3.title"),
      school: t("education.degree3.school"),
      period: t("education.degree3.period"),
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("education.title")}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 mb-2">{edu.degree}</CardTitle>
                <div className="flex items-center text-blue-600 font-medium mb-2">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  {edu.school}
                </div>
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  {edu.period}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
