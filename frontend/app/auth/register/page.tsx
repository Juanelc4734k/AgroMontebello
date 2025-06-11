"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Leaf, User, Shield, ArrowLeft, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

const veredas = [
  "El Progreso",
  "La Esperanza",
  "San José",
  "El Mirador",
  "La Paz",
  "Buenos Aires",
  "El Carmen",
  "Santa Rosa",
]

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to login or dashboard
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Plataforma Montebello</h1>
          <p className="text-gray-600">Crear Nueva Cuenta</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-2 mb-2">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al login
                </Button>
              </Link>
            </div>
            <CardTitle>Registro de Usuario</CardTitle>
            <CardDescription>Completa tus datos para acceder a los programas productivos</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="farmer" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="farmer" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Campesino</span>
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Funcionario</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="farmer">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmer-first-name">Nombres *</Label>
                      <Input id="farmer-first-name" type="text" placeholder="Juan Carlos" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farmer-last-name">Apellidos *</Label>
                      <Input id="farmer-last-name" type="text" placeholder="Pérez González" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmer-document">Cédula de Ciudadanía *</Label>
                      <Input id="farmer-document" type="text" placeholder="12345678" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farmer-phone">Teléfono/Celular *</Label>
                      <Input id="farmer-phone" type="tel" placeholder="300-123-4567" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farmer-email">Correo Electrónico *</Label>
                    <Input id="farmer-email" type="email" placeholder="juan@correo.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farmer-vereda">Vereda *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu vereda" />
                      </SelectTrigger>
                      <SelectContent>
                        {veredas.map((vereda) => (
                          <SelectItem key={vereda} value={vereda.toLowerCase().replace(/\s+/g, "-")}>
                            {vereda}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farmer-address">Dirección/Finca</Label>
                    <Input id="farmer-address" type="text" placeholder="Finca La Esperanza, Km 5 vía..." />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmer-password">Contraseña *</Label>
                      <div className="relative">
                        <Input
                          id="farmer-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Mínimo 8 caracteres"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-1"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farmer-confirm-password">Confirmar Contraseña *</Label>
                      <div className="relative">
                        <Input
                          id="farmer-confirm-password"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Repite la contraseña"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-1"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="farmer-terms"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                      required
                    />
                    <Label htmlFor="farmer-terms" className="text-sm leading-relaxed">
                      Acepto los{" "}
                      <Link href="/terms" className="text-emerald-600 hover:underline">
                        términos y condiciones
                      </Link>{" "}
                      y autorizo el tratamiento de mis datos personales según la{" "}
                      <Link href="/privacy" className="text-emerald-600 hover:underline">
                        política de privacidad
                      </Link>
                      .
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    disabled={isLoading || !acceptTerms}
                  >
                    {isLoading ? "Creando cuenta..." : "Crear Cuenta de Campesino"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="admin">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <p className="text-sm text-blue-800">
                      <Shield className="w-4 h-4 inline mr-2" />
                      El registro de funcionarios requiere autorización previa del administrador del sistema.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-first-name">Nombres *</Label>
                      <Input id="admin-first-name" type="text" placeholder="María Elena" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-last-name">Apellidos *</Label>
                      <Input id="admin-last-name" type="text" placeholder="García López" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-document">Cédula de Ciudadanía *</Label>
                      <Input id="admin-document" type="text" placeholder="87654321" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-employee-id">Código de Empleado *</Label>
                      <Input id="admin-employee-id" type="text" placeholder="EMP-2024-001" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Correo Institucional *</Label>
                    <Input id="admin-email" type="email" placeholder="funcionario@montebello.gov.co" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-phone">Teléfono Institucional *</Label>
                      <Input id="admin-phone" type="tel" placeholder="(123) 456-7890" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-department">Dependencia *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona dependencia" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="agricultura">Secretaría de Agricultura</SelectItem>
                          <SelectItem value="desarrollo">Desarrollo Rural</SelectItem>
                          <SelectItem value="planeacion">Planeación</SelectItem>
                          <SelectItem value="sistemas">Sistemas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-password">Contraseña *</Label>
                      <div className="relative">
                        <Input
                          id="admin-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Mínimo 8 caracteres"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-1"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-confirm-password">Confirmar Contraseña *</Label>
                      <div className="relative">
                        <Input
                          id="admin-confirm-password"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Repite la contraseña"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-1"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="admin-terms"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                      required
                    />
                    <Label htmlFor="admin-terms" className="text-sm leading-relaxed">
                      Acepto los términos de uso institucional y me comprometo a usar la plataforma de manera
                      responsable y ética.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading || !acceptTerms}
                  >
                    {isLoading ? "Enviando solicitud..." : "Solicitar Acceso como Funcionario"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                ¿Ya tienes cuenta?{" "}
                <Link href="/auth/login" className="text-emerald-600 hover:underline font-medium">
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-600">
          <p>¿Necesitas ayuda con el registro? Contacta al: (123) 456-7890</p>
        </div>
      </div>
    </div>
  )
}
