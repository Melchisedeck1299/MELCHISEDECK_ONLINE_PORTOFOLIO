"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useLanguage } from "@/lib/language-context"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

export default function Chatbox() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t("chat.welcome"),
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const predefinedResponses: Record<string, string> = {
    expérience:
      "J'ai plus de 2 ans d'expérience dans le service client et la gestion de bases de données, avec des postes chez Axxess International Inc. et Go Depo.",
    experience:
      "I have over 2 years of experience in customer service and database management, with positions at Axxess International Inc. and Go Depo.",
    compétences:
      "Mes principales compétences incluent Python, Java, SQL, MongoDB, MySQL, et les outils Microsoft 365. Je maîtrise aussi NumPy, Pandas et Git.",
    skills:
      "My main skills include Python, Java, SQL, MongoDB, MySQL, and Microsoft 365 tools. I also master NumPy, Pandas and Git.",
    formation:
      "Je suis actuellement étudiant en Baccalauréat en Informatique (Data Science) à l'UQTR et diplômé en Business Management de Strathmore University au Kenya.",
    education:
      "I am currently a Computer Science (Data Science) student at UQTR and graduated in Business Management from Strathmore University in Kenya.",
    projets:
      "J'ai réalisé plusieurs projets incluant l'application Alter Ego, la détection d'objets 3D avec deep learning, et l'automatisation du recensement d'emplois en France.",
    projects:
      "I have completed several projects including the Alter Ego application, 3D object detection with deep learning, and automation of job listings in France.",
    contact: "Vous pouvez me contacter à mvitamelchisedeck@gmail.com ou au +1 (819) 979 5455.",
    douane:
      "J'ai une expérience significative en tant que commis à la douane, traitant les documents d'import/export et assurant la conformité réglementaire.",
    customs:
      "I have significant experience as a customs clerk, processing import/export documents and ensuring regulatory compliance.",
    "data science":
      "Je suis spécialisé en Data Science avec des compétences en Python, NumPy, Pandas, et MongoDB. Je travaille actuellement sur ma certification Google Data Analytics.",
    stage:
      "J'ai effectué un stage en support informatique chez Axxess International Inc. où j'ai fourni un support technique niveau 1-2.",
    internship:
      "I completed an IT support internship at Axxess International Inc. where I provided level 1-2 technical support.",
    disponibilité:
      "Je suis actuellement étudiant et ouvert aux opportunités de stage et d'emploi dans le domaine de la data science et du développement.",
    availability:
      "I am currently a student and open to internship and job opportunities in data science and development.",
  }

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }

    return t("language") === "fr"
      ? "Merci pour votre question ! Pour des informations plus détaillées, n'hésitez pas à me contacter directement."
      : "Thank you for your question! For more detailed information, feel free to contact me directly."
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)

    setInputValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg z-50"
        size="sm"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-xl z-50 flex flex-col">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Bot className="h-5 w-5 mr-2 text-blue-600" />
              {t("chat.title")}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 px-4">
              <div className="space-y-4 pb-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot ? "bg-gray-100 text-gray-900" : "bg-blue-600 text-white"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.isBot ? (
                          <Bot className="h-4 w-4 mt-0.5 text-blue-600" />
                        ) : (
                          <User className="h-4 w-4 mt-0.5" />
                        )}
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t("chat.placeholder")}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
