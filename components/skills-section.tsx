"use client"

import { Code, Server, Wrench, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/lib/language-context"

export default function SkillsSection() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.programming"),
      icon: Code,
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "SQL", level: 80 },
        { name: "C++", level: 70 },
        { name: "HTML/CSS", level: 75 },
        { name: "C", level: 70 },
        { name: "PHP", level: 70 },
        { name: "TypeScript", level: 70 },
        { name: "React.js", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "Vue.js", level: 70 },
        { name: "MATLAB", level: 75 },
      ],
    },
    {
      title: t("skills.databases"),
      icon: Server,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Microsoft Access", level: 70 },
      ],
    },
    {
      title: t("skills.tools"),
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "Visual Studio", level: 85 },
        { name: "Microsoft 365 Admin", level: 90 },
        { name: "Suite Office (Word, PowerPoint, Excel, Outlook, Teams,...)", level: 90 },
        { name: "Microsoft Exchange", level: 80 },
        { name: "Microsoft Azure", level: 75 },
        { name: "NumPy/Pandas", level: 75 },
        { name: "Active Directory", level: 80 },
        { name: "Eclipse", level: 85 },
        { name: "IntelliJ", level: 85 },
        { name: "Rider", level: 80 },
        { name: "Google Collab", level: 90 },
        { name: "VS Code", level: 80 },
        { name: "LogMeIn", level: 80 },
        { name: "SolarWinds", level: 80 },
      ],
    },
    {
      title: t("skills.languages"),
      icon: Globe,
      skills: [
        { name: "Français", level: 100 },
        { name: "English", level: 73 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("skills.title")}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
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
