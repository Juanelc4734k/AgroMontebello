import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, Users, Leaf, MilkIcon as Cow, Wheat, Coffee } from "lucide-react"

const programs = [
  {
    id: 1,
    name: "Café Sostenible",
    description: "Mejoramiento de cultivos de café con técnicas sostenibles y certificación orgánica",
    icon: Coffee,
    beneficiaries: 156,
    locations: ["El Progreso", "La Esperanza", "San José"],
    startDate: "2024-01-15",
    endDate: "2024-12-15",
    progress: 75,
    status: "Activo",
    budget: "$450,000,000",
    requirements: ["Tener cultivo de café", "Mínimo 1 hectárea", "Compromiso de participación"],
  },
  {
    id: 2,
    name: "Agricultura Familiar",
    description: "Fortalecimiento de la agricultura familiar con diversificación de cultivos",
    icon: Wheat,
    beneficiaries: 89,
    locations: ["La Esperanza", "El Mirador"],
    startDate: "2024-03-01",
    endDate: "2025-02-28",
    progress: 45,
    status: "Activo",
    budget: "$320,000,000",
    requirements: ["Ser agricultor familiar", "Disponibilidad de tierra", "Participar en capacitaciones"],
  },
  {
    id: 3,
    name: "Ganadería Sostenible",
    description: "Implementación de sistemas silvopastoriles y mejoramiento genético",
    icon: Cow,
    beneficiaries: 67,
    locations: ["San José", "El Progreso"],
    startDate: "2024-04-15",
    endDate: "2025-04-15",
    progress: 30,
    status: "Activo",
    budget: "$580,000,000",
    requirements: ["Tener ganado bovino", "Mínimo 5 hectáreas", "Certificado sanitario"],
  },
  {
    id: 4,
    name: "Cultivos Alternativos",
    description: "Promoción de cultivos alternativos como cacao, aguacate y frutales",
    icon: Leaf,
    beneficiaries: 45,
    locations: ["El Mirador", "La Esperanza"],
    startDate: "2024-06-01",
    endDate: "2025-05-31",
    progress: 15,
    status: "Inscripciones Abiertas",
    budget: "$280,000,000",
    requirements: ["Disponibilidad de tierra", "Interés en diversificación", "Compromiso a 2 años"],
  },
]

export default function ProgramsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activo":
        return "bg-green-100 text-green-800"
      case "Inscripciones Abiertas":
        return "bg-blue-100 text-blue-800"
      case "Finalizado":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Programas Productivos</h1>
              <p className="text-sm text-gray-600">Descubre y participa en nuestros programas</p>
            </div>
            <Button>Volver al Inicio</Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => {
            const IconComponent = program.icon
            return (
              <Card key={program.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{program.name}</CardTitle>
                        <Badge className={getStatusColor(program.status)}>{program.status}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-2">{program.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{program.beneficiaries} beneficiarios</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span>{new Date(program.startDate).getFullYear()}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium">Veredas:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {program.locations.map((location) => (
                        <Badge key={location} variant="outline" className="text-xs">
                          {location}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progreso del programa</span>
                      <span>{program.progress}%</span>
                    </div>
                    <Progress value={program.progress} className="h-2" />
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-medium mb-2">Requisitos:</h4>
                    <ul className="text-xs space-y-1">
                      {program.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-gray-600">Presupuesto: {program.budget}</span>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        Ver Detalles
                      </Button>
                      <Button size="sm">Inscribirse</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
