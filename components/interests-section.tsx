"use client"

import {
  TableIcon as Billiards,
  BoxIcon as Boxing,
  ClubIcon as Football,
  BookOpen,
  Mountain,
  Circle,
  Plane,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export default function InterestsSection() {
  const { t } = useLanguage()

  const interests = [
    {
      name: t("interests.billiards"),
      category: t("interests.hobby"),
      icon: Billiards,
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: t("interests.boxing"),
      category: t("interests.hobby"),
      icon: Boxing,
      color: "bg-red-100 text-red-600",
    },
    {
      name: t("interests.soccer"),
      category: t("interests.hobby"),
      icon: Football,
      color: "bg-green-100 text-green-600",
    },
    {
      name: t("interests.reading"),
      category: t("interests.personal"),
      icon: BookOpen,
      color: "bg-amber-100 text-amber-600",
    },
    {
      name: t("interests.hiking"),
      category: t("interests.outdoor"),
      icon: Mountain,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: t("interests.basketball"),
      category: t("interests.hobby"),
      icon: Circle,
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: t("interests.tennis"),
      category: t("interests.hobby"),
      icon: Circle,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      name: t("interests.travel"),
      category: t("interests.discovery"),
      icon: Plane,
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("interests.title")}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="pt-6">
                <div
                  className={`w-16 h-16 mx-auto rounded-full ${interest.color} flex items-center justify-center mb-4`}
                >
                  <interest.icon className="h-8 w-8" />
                </div>
                <h3 className="font-medium text-lg mb-1">{interest.name}</h3>
                <p className="text-sm text-gray-500">{interest.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
