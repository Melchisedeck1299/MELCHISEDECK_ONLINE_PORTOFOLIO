"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    // Navigation
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.education": "Formation",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.strengths": "Atouts",
    "nav.interests": "Centres d'intérêt",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Diplômé en Informatique, spécialisé en Science des Données",
    "hero.subtitle":
      "Plus de deux ans d'expérience dans le service à la clientèle et la gestion de bases de données. Actuellement en cours de certification Google Data Analytics, afin de renforcer mes compétences en analyse de données et prise de décision basée sur les données.",
    "hero.cta": "Découvrir mon parcours",
    "hero.download": "Télécharger CV",

    // Experience
    "experience.title": "Expérience Professionnelle",
    "experience.job1.title": "Commis à la douane",
    "experience.job1.company": "Axxess International Inc.",
    "experience.job1.period": "Août 2024 - Présent",
    "experience.job1.desc":
      "Traitement des documents nécessaires pour l'importation et l'exportation des marchandises, en s'assurant du respect des procédures douanières, Service Client. Vérification de la conformité des expéditions avec les réglementations et résolution des problèmes de dédouanement.",

    "experience.job2.title": "Stage en support informatique",
    "experience.job2.company": "Axxess International Inc.",
    "experience.job2.period": "Mai 2024 - Août 2024",
    "experience.job2.desc":
      "Assurer un support technique de niveau 1-2 pour les systèmes d'Axxess International Inc., en suivant les protocoles ministériels et en maintenant la documentation. Effectuer la maintenance, les sauvegardes, et les mises à jour pour améliorer l'efficacité des utilisateurs, et accomplir les tâches assignées par les collègues et le superviseur.",

    "experience.job3.title": "Commis à la douane",
    "experience.job3.company": "Axess International Inc.",
    "experience.job3.period": "Août 2021 - Mai 2024",
    "experience.job3.desc":
      "Traitement des documents nécessaires pour l'importation et l'exportation des marchandises, en s'assurant du respect des procédures douanières, Service Client. Vérification de la conformité des expéditions avec les réglementations et résolution des problèmes de dédouanement.",

    "experience.job4.title": "Agent aux ventes et service Client",
    "experience.job4.company": "Go Depo – Entrepôsage",
    "experience.job4.period": "Avril 2021 - Août 2021",
    "experience.job4.desc":
      "Soumission des contrats, gestion des litiges, inspection des sites et service à la clientèle.",

    // Education
    "education.title": "Formation",
    "education.degree1.title": "Baccalauréat en Informatique (Data Science)",
    "education.degree1.school": "Université du Québec à Trois-Rivières",
    "education.degree1.period": "Janvier 2020 - Juin 2025",
    "education.degree2.title": "Diplôme en Business Management",
    "education.degree2.school": "Strathmore University, Nairobi, Kenya",
    "education.degree2.period": "Septembre 2018 - Septembre 2021",
    "education.degree3.title": "Diplôme d'études secondaires",
    "education.degree3.school": "Complexe Scolaire Bozindo, Kinshasa, RDC",
    "education.degree3.period": "Septembre 2011 - Juillet 2017",

    // Skills
    "skills.title": "Compétences",
    "skills.programming": "Programmation",
    "skills.databases": "Bases de Données",
    "skills.tools": "Outils & Logiciels",
    "skills.languages": "Langues",

    // Projects
    "projects.title": "Projets Réalisés",
    "projects.project1.title": "Application 'Alter Ego'",
    "projects.project1.desc":
      "Application de gestion quotidienne intégrant l'organisation, le suivi des finances et la planification des tâches, avec une architecture modulaire évolutive.",
    "projects.project2.title": "Détection d'objets 3D (Deep Learning)",
    "projects.project2.desc":
      "Étude et implémentation d'algorithmes d'apprentissage profond pour la reconnaissance et la classification d'objets 3D.",
    "projects.project3.title": "Automatisation recensement emplois France",
    "projects.project3.desc":
      "Script Python exploitant l'API de France Travail pour stocker et analyser les tendances du marché de l'emploi dans MongoDB.",
    "projects.project4.title": "Simulation réseau en Java",
    "projects.project4.desc":
      "Simulateur de réseau avec gestion des connexions, transport et segmentation. Implémentation des protocoles réseau.",
    "projects.project5.title": "Analyse données système tickets",
    "projects.project5.desc":
      "Extraction et analyse des données pour identifier les tendances et optimiser le support technique via des outils de data science.",
    "projects.view": "Voir le projet",

    // Strengths
    "strengths.title": "Atouts",
    "strengths.mastery": "Maîtrise",
    "strengths.adaptability.title": "Adaptabilité",
    "strengths.adaptability.desc": "Capacité de m'intégrer facilement dans un environnement changeant",
    "strengths.communication.title": "Communication",
    "strengths.communication.desc": "Excellentes compétences en communication orale et écrite. Bilingue",
    "strengths.teamwork.title": "Travail d'équipe",
    "strengths.teamwork.desc": "Capacité d'organisation et travail en équipe multidisciplinaire",
    "strengths.analytical.title": "Esprit analytique",
    "strengths.analytical.desc":
      "Capacité à analyser des données complexes et à en extraire des insights pertinents pour la prise de décision",
    "strengths.initiative.title": "Autonomie & sens de l'initiative",
    "strengths.initiative.desc":
      "Habitude de prendre des initiatives, résoudre les problèmes de manière proactive et apprendre de façon autonome",
    "strengths.detail.title": "Sens du détail",
    "strengths.detail.desc":
      "Approche rigoureuse et méthodique, particulièrement utile dans l'analyse de données, les tests ou la cybersécurité",
    "strengths.results.title": "Orientation résultats",
    "strengths.results.desc":
      "Capacité à fixer des objectifs clairs et à optimiser les solutions pour atteindre les résultats attendus",

    // Interests
    "interests.title": "Centres d'intérêts et Loisirs",
    "interests.billiards": "Billard",
    "interests.boxing": "Boxe",
    "interests.soccer": "Soccer",
    "interests.reading": "Lecture",
    "interests.hiking": "Randonnée",
    "interests.hobby": "Loisir",
    "interests.personal": "Développement personnel",
    "interests.outdoor": "Plein air et bien-être",
    "interests.basketball": "Basketball",
    "interests.tennis": "Tennis",
    "interests.travel": "Voyage",
    "interests.discovery": "Découverte et culture",

    // Contact
    "contact.title": "Me Contacter",
    "contact.subtitle": "Intéressé par mon profil ? N'hésitez pas à me contacter !",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "contact.success": "Message envoyé avec succès !",

    // Chatbox
    "chat.title": "Assistant CV",
    "chat.placeholder": "Posez une question sur mon CV...",
    "chat.send": "Envoyer",
    "chat.welcome": "Bonjour ! Je peux répondre à vos questions sur mon parcours professionnel et mes compétences.",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.strengths": "Strengths",
    "nav.interests": "Interests",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Computer Science Graduate, specialized in Data Science",
    "hero.subtitle":
      "Over two years of experience in customer service and database management. Currently pursuing Google Data Analytics certification to strengthen my skills in data analysis and data-driven decision making.",
    "hero.cta": "Discover my journey",
    "hero.download": "Download CV",

    // Experience
    "experience.title": "Professional Experience",
    "experience.job1.title": "Customs Clerk",
    "experience.job1.company": "Axxess International Inc.",
    "experience.job1.period": "August 2024 - Present",
    "experience.job1.desc":
      "Processing documents necessary for import and export of goods, ensuring compliance with customs procedures, Customer Service. Verification of shipment compliance with regulations and resolution of customs clearance issues.",

    "experience.job2.title": "IT Support Intern",
    "experience.job2.company": "Axxess International Inc.",
    "experience.job2.period": "May 2024 - August 2024",
    "experience.job2.desc":
      "Provide level 1-2 technical support for Axxess International Inc. systems, following ministerial protocols and maintaining documentation. Perform maintenance, backups, and updates to improve user efficiency, and accomplish tasks assigned by colleagues and supervisor.",

    "experience.job3.title": "Customs Clerk",
    "experience.job3.company": "Axess International Inc.",
    "experience.job3.period": "August 2021 - May 2024",
    "experience.job3.desc":
      "Processing documents necessary for import and export of goods, ensuring compliance with customs procedures, Customer Service. Verification of shipment compliance with regulations and resolution of customs clearance issues.",

    "experience.job4.title": "Sales Agent and Customer Service",
    "experience.job4.company": "Go Depo – Warehousing",
    "experience.job4.period": "April 2021 - August 2021",
    "experience.job4.desc": "Contract submission, dispute management, site inspection and customer service.",

    // Education
    "education.title": "Education",
    "education.degree1.title": "Bachelor in Computer Science (Data Science)",
    "education.degree1.school": "Université du Québec à Trois-Rivières",
    "education.degree1.period": "January 2020 - June 2025",
    "education.degree2.title": "Diploma in Business Management",
    "education.degree2.school": "Strathmore University, Nairobi, Kenya",
    "education.degree2.period": "September 2018 - September 2021",
    "education.degree3.title": "High School Diploma",
    "education.degree3.school": "Complexe Scolaire Bozindo, Kinshasa, DRC",
    "education.degree3.period": "September 2011 - July 2017",

    // Skills
    "skills.title": "Skills",
    "skills.programming": "Programming",
    "skills.databases": "Databases",
    "skills.tools": "Tools & Software",
    "skills.languages": "Languages",

    // Projects
    "projects.title": "Projects",
    "projects.project1.title": "Alter Ego Application",
    "projects.project1.desc":
      "Daily management application integrating organization, financial tracking and task planning, with scalable modular architecture.",
    "projects.project2.title": "3D Object Detection (Deep Learning)",
    "projects.project2.desc":
      "Study and implementation of deep learning algorithms for 3D object recognition and classification.",
    "projects.project3.title": "France Job Listings Automation",
    "projects.project3.desc":
      "Python script using France Travail API to store and analyze job market trends in MongoDB.",
    "projects.project4.title": "Java Network Simulation",
    "projects.project4.desc":
      "Network simulator with connection management, transport and segmentation. Implementation of network protocols.",
    "projects.project5.title": "Ticket System Data Analysis",
    "projects.project5.desc":
      "Data extraction and analysis to identify trends and optimize technical support using data science tools.",
    "projects.view": "View project",

    // Strengths
    "strengths.title": "Strengths",
    "strengths.mastery": "Mastery",
    "strengths.adaptability.title": "Adaptability",
    "strengths.adaptability.desc": "Ability to easily integrate into a changing environment",
    "strengths.communication.title": "Communication",
    "strengths.communication.desc": "Excellent oral and written communication skills. Bilingual",
    "strengths.teamwork.title": "Teamwork",
    "strengths.teamwork.desc": "Organizational capacity and work in multidisciplinary teams",
    "strengths.analytical.title": "Analytical Thinking",
    "strengths.analytical.desc": "Ability to analyze complex data and extract relevant insights for decision making",
    "strengths.initiative.title": "Autonomy & Initiative",
    "strengths.initiative.desc": "Habit of taking initiative, solving problems proactively and learning autonomously",
    "strengths.detail.title": "Attention to Detail",
    "strengths.detail.desc":
      "Rigorous and methodical approach, particularly useful in data analysis, testing or cybersecurity",
    "strengths.results.title": "Results Oriented",
    "strengths.results.desc": "Ability to set clear objectives and optimize solutions to achieve expected results",

    // Interests
    "interests.title": "Interests & Hobbies",
    "interests.billiards": "Billiards",
    "interests.boxing": "Boxing",
    "interests.soccer": "Soccer",
    "interests.reading": "Reading",
    "interests.hiking": "Hiking",
    "interests.hobby": "Hobby",
    "interests.personal": "Personal Development",
    "interests.outdoor": "Outdoor & Wellness",
    "interests.basketball": "Basketball",
    "interests.tennis": "Tennis",
    "interests.travel": "Travel",
    "interests.discovery": "Discovery & Culture",

    // Contact
    "contact.title": "Contact Me",
    "contact.subtitle": "Interested in my profile? Feel free to reach out!",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.success": "Message sent successfully!",

    // Chatbox
    "chat.title": "CV Assistant",
    "chat.placeholder": "Ask a question about my CV...",
    "chat.send": "Send",
    "chat.welcome": "Hello! I can answer questions about my professional background and skills.",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["fr"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
