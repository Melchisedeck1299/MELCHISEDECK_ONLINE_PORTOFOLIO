"use client"

import { Brain, Users, MessageSquare, Search, Lightbulb, Eye, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/lib/language-context"

export default function StrengthsSection() {
  const { t } = useLanguage()

  const strengths = [
    {
      name: t("strengths.adaptability.title"),
      description: t("strengths.adaptability.desc"),
      level: 90,
      icon: Brain,
    },
    {
      name: t("strengths.communication.title"),
      description: t("strengths.communication.desc"),
      level: 85,
      icon: MessageSquare,
    },
    {
      name: t("strengths.teamwork.title"),
      description: t("strengths.teamwork.desc"),
      level: 85,
      icon: Users,
    },
    {
      name: t("strengths.analytical.title"),
      description: t("strengths.analytical.desc"),
      level: 80,
      icon: Search,
    },
    {
      name: t("strengths.initiative.title"),
      description: t("strengths.initiative.desc"),
      level: 75,
      icon: Lightbulb,
    },
    {
      name: t("strengths.detail.title"),
      description: t("strengths.detail.desc"),
      level: 75,
      icon: Eye,
    },
    {
      name: t("strengths.results.title"),
      description: t("strengths.results.desc"),
      level: 80,
      icon: Target,
    },
  ]

  return (
    <section id="strengths" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("strengths.title")}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {strengths.map((strength, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <strength.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">{strength.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{strength.description}</p>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{t("strengths.mastery")}</span>
                  <span className="text-sm text-gray-500">{strength.level}%</span>
                </div>
                <Progress value={strength.level} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
