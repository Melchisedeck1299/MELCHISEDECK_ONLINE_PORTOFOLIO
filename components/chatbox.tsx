"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const getBotResponse = async (userMessage: string): Promise<string> => {
    console.log("Envoi à l'API OpenAI :", userMessage)
    try {
      const res = await fetch("/api/chat-rag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })

      const data = await res.json()
      console.log("Réponse de l'API :", data)
      return data.reply
    } catch (err) {
      console.error("Erreur de requête API :", err)
      return t("language") === "fr"
        ? "Une erreur est survenue. Veuillez réessayer plus tard."
        : "An error occurred. Please try again later."
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    const responseText = await getBotResponse(inputValue)

    const botResponse: Message = {
      id: messages.length + 2,
      text: responseText,
      isBot: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, botResponse])
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

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            {/* Zone des messages avec scroll */}
            <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
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
              <div ref={messagesEndRef} />
            </div>

            {/* Champ de saisie + bouton */}
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
