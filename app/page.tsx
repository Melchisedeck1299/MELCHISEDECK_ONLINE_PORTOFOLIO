"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import StrengthsSection from "@/components/strengths-section"
import InterestsSection from "@/components/interests-section"
import ContactSection from "@/components/contact-section"
import Chatbox from "@/components/chatbox"
import LanguageToggle from "@/components/language-toggle"
import { LanguageProvider } from "@/lib/language-context"

export default function CVWebsite() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <LanguageToggle />

        <main>
          <HeroSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <StrengthsSection />
          <InterestsSection />
          <ContactSection />
        </main>

        <Chatbox />
      </div>
    </LanguageProvider>
  )
}
