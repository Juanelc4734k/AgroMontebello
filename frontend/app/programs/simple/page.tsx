import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Coffee, Wheat, Heart, Users, Gift, CheckCircle } from "lucide-react"

const programs = [
  {
    id: 1,
    name: "Programa de Café",
    simpleDescription: "Te ayudamos a mejorar tu cultivo de café y ganar más dinero",
    icon: Coffee,
    color: "from-amber-400 to-amber-600",
    benefits: [
      "Semillas gratis de café de buena calidad",
      "Te enseñamos técnicas nuevas",
      "Compramos tu café a mejor precio",
      "Fertilizantes sin costo",
    ],
    requirements: ["Tener un pedacito de tierra para café", "Ganas de aprender", "Vivir en Montebello"],
    participants: 156,
    available: true,
    testimonial: "Gracias a este programa, mi café ahora es el mejor de la vereda - Don José",
  },
  {
    id: 2,
    name: "Huerta Familiar",
    simpleDescription: "Aprende a hacer una huerta en tu casa para tener comida fresca",
    icon: Wheat,
    color: "from-green-400 to-green-600",
    benefits: [
      "Semillas de verduras gratis",
      "Te enseñamos a sembrar",
      "Comida fresca para tu familia",
      "Puedes vender lo que sobre",
    ],
    requirements: ["Un poquito de espacio en tu casa", "Tiempo para cuidar las plantas", "Querer aprender"],
    participants: 89,
    available: true,
    testimonial: "Ahora mi familia come verduras frescas todos los días - Doña María",
  },
]

export default function SimpleProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-yellow-50 to-green-50">
      <header className="bg-white shadow-lg border-b-4 border-green-500">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">🌱 Programas para Ti</h1>
            <p className="text-xl text-green-600">Escoge el programa que más te guste y te ayudamos gratis</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {programs.map((program) => {
            const IconComponent = program.icon
            return (
              <Card key={program.id} className="bg-white shadow-2xl border-0 overflow-hidden">
                <div className={`h-4 bg-gradient-to-r ${program.color}`}></div>

                <CardHeader className="bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-800">{program.name}</CardTitle>
                        <p className="text-lg text-gray-600 mt-1">{program.simpleDescription}</p>
                      </div>
                    </div>
                    {program.available && (
                      <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">✅ Disponible</Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Beneficios */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <Gift className="w-6 h-6 mr-2 text-green-600" />
                        ¿Qué recibes?
                      </h3>
                      <div className="space-y-3">
                        {program.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Requisitos */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <Heart className="w-6 h-6 mr-2 text-blue-600" />
                        ¿Qué necesitas?
                      </h3>
                      <div className="space-y-3">
                        {program.requirements.map((requirement, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <p className="text-gray-700">{requirement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mt-8 bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                    <div className="flex items-center mb-3">
                      <Heart className="w-6 h-6 text-blue-600 mr-2" />
                      <h4 className="text-lg font-bold text-blue-800">Lo que dicen nuestros campesinos:</h4>
                    </div>
                    <p className="text-blue-700 italic text-lg">"{program.testimonial}"</p>
                  </div>

                  {/* Stats y botones */}
                  <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-2" />
                        <span className="text-lg">{program.participants} familias ya participan</span>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8"
                      >
                        📞 Preguntar más
                      </Button>
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${program.color} text-white hover:opacity-90 px-8`}
                      >
                        🎯 ¡Me apunto!
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to action final */}
        <Card className="mt-12 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Tienes dudas? ¡No te preocupes!</h2>
            <p className="text-xl mb-6 opacity-95">
              Llámanos o ven a visitarnos. Te explicamos todo con paciencia y cariño.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8">
                📞 Llamar: (123) 456-7890
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8"
              >
                📍 Visitar la Alcaldía
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
