import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Bell } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Nueva convocatoria programa café",
    date: "2025-01-08",
    category: "Convocatoria",
    priority: "high",
    excerpt: "Inscripciones abiertas hasta el 31 de enero para el programa de mejoramiento de cultivos de café.",
  },
  {
    id: 2,
    title: "Entrega de insumos agrícolas",
    date: "2025-01-10",
    category: "Evento",
    priority: "medium",
    excerpt: "Este viernes se realizará la entrega de semillas y fertilizantes en la alcaldía.",
  },
  {
    id: 3,
    title: "Capacitación manejo de cultivos",
    date: "2025-01-15",
    category: "Capacitación",
    priority: "medium",
    excerpt: "Taller sobre técnicas sostenibles de cultivo en el centro comunitario.",
  },
]

export function NewsPanel() {
  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader className="border-b border-gray-100 pb-2 sm:pb-3">
        <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Noticias y Eventos
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-4">
        <div className="space-y-3 sm:space-y-4">
          {news.map((item) => (
            <div key={item.id} className="border-l-4 border-emerald-500 pl-3 sm:pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1 sm:gap-2">
                <Badge
                  variant="outline"
                  className={`text-xs self-start ${
                    item.priority === "high"
                      ? "bg-red-50 text-red-700 border-red-200"
                      : "bg-blue-50 text-blue-700 border-blue-200"
                  }`}
                >
                  {item.category}
                </Badge>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="w-3 h-3 mr-1 flex-shrink-0" />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
              </div>
              <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base line-clamp-2">{item.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2 sm:line-clamp-3">{item.excerpt}</p>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-emerald-600 hover:text-emerald-700 text-xs sm:text-sm"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Leer más
              </Button>
            </div>
          ))}
        </div>

        <Button variant="outline" size="sm" className="w-full mt-3 sm:mt-4 text-xs sm:text-sm">
          Ver todas las noticias
        </Button>
      </CardContent>
    </Card>
  )
}
