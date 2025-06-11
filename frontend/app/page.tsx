import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Bell, Settings, LogOut } from "lucide-react"
import { MainDashboard } from "@/components/main-dashboard"
import { QuickActions } from "@/components/quick-actions"
import { WeatherInfo } from "@/components/weather-info"
import { NewsPanel } from "@/components/news-panel"
import { SupportChat } from "@/components/support-chat"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Institucional */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center h-auto sm:h-16 py-3 sm:py-0 gap-3 sm:gap-0">
            {/* Logo y título */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-lg">M</span>
                </div>
                <div>
                  <h1 className="text-base sm:text-lg font-semibold text-gray-900">Alcaldía de Montebello</h1>
                  <p className="text-xs sm:text-sm text-gray-600">Programas Productivos Rurales</p>
                </div>
              </div>
            </div>

            {/* Información del usuario y acciones */}
            <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-between sm:justify-end">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                <Users className="w-3 h-3 mr-1" />
                1,247 Beneficiarios
              </Badge>

              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>

              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">Juan Campesino</p>
                  <p className="text-xs text-gray-600">Vereda El Progreso</p>
                </div>
              </div>

              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6">
          {/* Sidebar de navegación */}
          <div className="xl:col-span-1 order-2 xl:order-1">
            <div className="space-y-6">
              {/* Acciones rápidas */}
              <QuickActions />

              {/* Información del clima */}
              <WeatherInfo />

              {/* Panel de noticias */}
              <NewsPanel />
            </div>
          </div>

          {/* Contenido principal */}
          <div className="xl:col-span-3 order-1 xl:order-2">
            <div className="space-y-6">
              {/* Dashboard principal */}
              <MainDashboard />

              {/* Chat de soporte */}
              <SupportChat />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
