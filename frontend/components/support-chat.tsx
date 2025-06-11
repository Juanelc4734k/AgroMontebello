"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, Phone, Mail, Clock, User, Bot, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant" | "system"
  timestamp: Date
}

export function SupportChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "¡Hola! Soy el asistente virtual de la Alcaldía de Montebello. ¿En qué puedo ayudarte hoy?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const quickQuestions = [
    "¿Cómo solicito insumos agrícolas?",
    "¿Cuándo son las próximas capacitaciones?",
    "¿Cómo reporto el avance de mi proyecto?",
    "¿Dónde descargo mis certificados?",
  ]

  const handleSend = async (message?: string) => {
    const messageToSend = message || input
    if (!messageToSend.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageToSend,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simular respuesta del asistente
    setTimeout(() => {
      const assistantResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAssistantResponse(messageToSend),
        sender: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantResponse])
      setIsLoading(false)
    }, 1500)
  }

  const getAssistantResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("insumos") || input.includes("semillas")) {
      return "Para solicitar insumos agrícolas, puedes usar el botón 'Solicitar Trámite' en la sección de Acciones Rápidas. Necesitarás tu cédula y especificar qué tipo de insumos requieres. El proceso toma aproximadamente 5-7 días hábiles."
    }

    if (input.includes("capacitacion") || input.includes("curso")) {
      return "Las próximas capacitaciones programadas son: 'Manejo Sostenible del Café' el 15 de enero y 'Técnicas de Riego' el 22 de enero. Puedes inscribirte en la sección 'Ver Capacitaciones' o llamando al (123) 456-7890."
    }

    if (input.includes("avance") || input.includes("progreso")) {
      return "Para reportar el avance de tu proyecto, ve a la sección 'Mis Programas', selecciona tu proyecto y haz clic en 'Reportar avance'. Puedes subir fotos, describir actividades realizadas y actualizar el porcentaje de progreso."
    }

    if (input.includes("certificado") || input.includes("descargar")) {
      return "Los certificados están disponibles en la sección 'Acciones Rápidas' > 'Descargar certificados'. También puedes acceder desde tu perfil de usuario. Si no aparece tu certificado, contacta a tu funcionario asignado."
    }

    return "Entiendo tu consulta. Para obtener ayuda más específica, puedes: 1) Usar las opciones de Acciones Rápidas, 2) Llamar al (123) 456-7890, 3) Escribir a info@montebello.gov.co, o 4) Visitar la alcaldía en horario de atención."
  }

  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader className="border-b border-gray-100">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Asistente Virtual
            <Badge variant="outline" className="ml-2 bg-emerald-50 text-emerald-700 border-emerald-200">
              En línea
            </Badge>
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setIsMinimized(!isMinimized)}>
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-3 sm:p-4">
          {/* Preguntas frecuentes */}
          <div className="mb-3 sm:mb-4">
            <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Preguntas frecuentes:</p>
            <div className="grid grid-cols-1 gap-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="h-auto p-2 sm:p-3 text-left text-xs sm:text-sm hover:bg-gray-50 justify-start"
                  onClick={() => handleSend(question)}
                >
                  <span className="line-clamp-2">{question}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Chat messages */}
          <div className="h-48 sm:h-64 overflow-y-auto mb-3 sm:mb-4 p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-2 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "assistant" && (
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-emerald-600" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-xs lg:max-w-md px-2 sm:px-3 py-2 rounded-lg ${
                      message.sender === "user" ? "bg-emerald-600 text-white" : "bg-white border border-gray-200"
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.sender === "user" ? "text-emerald-100" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>

                  {message.sender === "user" && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input area */}
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta aquí..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          {/* Contact options */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
            <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">¿Necesitas ayuda personalizada?</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <Button variant="outline" size="sm" className="h-8 sm:h-9 text-xs sm:text-sm">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Llamar</span>
                <span className="sm:hidden">Tel</span>
              </Button>
              <Button variant="outline" size="sm" className="h-8 sm:h-9 text-xs sm:text-sm">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Email
              </Button>
              <Button variant="outline" size="sm" className="h-8 sm:h-9 text-xs sm:text-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Agendar</span>
                <span className="sm:hidden">Cita</span>
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
