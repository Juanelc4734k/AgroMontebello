import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FileText, TrendingUp, MapPin, Plus, Download, Filter, Search, MoreHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header administrativo */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Panel Administrativo</h1>
              <p className="text-sm text-gray-600">Gestión de Programas Productivos</p>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                Funcionario
              </Badge>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Programa
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Métricas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Beneficiarios</p>
                  <p className="text-3xl font-bold text-gray-900">1,247</p>
                  <p className="text-sm text-emerald-600">+12% este mes</p>
                </div>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Programas Activos</p>
                  <p className="text-3xl font-bold text-gray-900">15</p>
                  <p className="text-sm text-blue-600">3 nuevos</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Veredas Cubiertas</p>
                  <p className="text-3xl font-bold text-gray-900">23</p>
                  <p className="text-sm text-purple-600">100% cobertura</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Tasa de Éxito</p>
                  <p className="text-3xl font-bold text-gray-900">89%</p>
                  <p className="text-sm text-emerald-600">+5% vs anterior</p>
                </div>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contenido principal con tabs */}
        <Tabs defaultValue="programs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="programs">Programas</TabsTrigger>
            <TabsTrigger value="beneficiaries">Beneficiarios</TabsTrigger>
            <TabsTrigger value="procedures">Trámites</TabsTrigger>
            <TabsTrigger value="reports">Reportes</TabsTrigger>
          </TabsList>

          <TabsContent value="programs" className="space-y-6">
            <Card className="bg-white border border-gray-200">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Gestión de Programas</CardTitle>
                    <CardDescription>Administra todos los programas productivos</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input placeholder="Buscar programas..." className="pl-10 w-64" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filtros
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Exportar
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Programa Café Sostenible {i}</h3>
                          <p className="text-sm text-gray-600">Vereda El Progreso • 45 beneficiarios</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                              Activo
                            </Badge>
                            <span className="text-xs text-gray-500">Creado: 15 Ene 2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="beneficiaries">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle>Gestión de Beneficiarios</CardTitle>
                <CardDescription>Administra campesinos y familias beneficiarias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Panel de gestión de beneficiarios</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="procedures">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle>Gestión de Trámites</CardTitle>
                <CardDescription>Revisa y procesa solicitudes de los campesinos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Panel de gestión de trámites</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle>Reportes y Estadísticas</CardTitle>
                <CardDescription>Genera reportes detallados sobre el desempeño</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Sistema de reportes y analytics</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
