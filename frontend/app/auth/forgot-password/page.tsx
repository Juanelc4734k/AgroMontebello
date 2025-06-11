"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Leaf, User, Shield, ArrowLeft, Mail, Phone, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState<"request" | "sent" | "reset">("request")
  const [resetMethod, setResetMethod] = useState<"email" | "phone">("email")
  const [userType, setUserType] = useState<"farmer" | "admin">("farmer")

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setStep("sent")
    }, 2000)
  }

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate verification
    setTimeout(() => {
      setIsLoading(false)
      setStep("reset")
    }, 1500)
  }

  const handleNewPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate password update
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to login
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Plataforma Montebello</h1>
          <p className="text-gray-600">Recuperar Contraseña</p>
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
            <CardTitle>
              {step === "request" && "Recuperar Contraseña"}
              {step === "sent" && "Código Enviado"}
              {step === "reset" && "Nueva Contraseña"}
            </CardTitle>
            <CardDescription>
              {step === "request" && "Te ayudaremos a recuperar el acceso a tu cuenta"}
              {step === "sent" && "Revisa tu correo o mensajes para el código de verificación"}
              {step === "reset" && "Crea una nueva contraseña segura"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === "request" && (
              <>
                <Tabs
                  defaultValue="farmer"
                  className="space-y-4"
                  onValueChange={(value) => setUserType(value as "farmer" | "admin")}
                >
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
                    <div className="space-y-4">
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          Ingresa tu correo electrónico o número de cédula para recuperar tu contraseña.
                        </AlertDescription>
                      </Alert>

                      <form onSubmit={handlePasswordReset} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="farmer-identifier">Correo electrónico o Cédula</Label>
                          <Input id="farmer-identifier" type="text" placeholder="juan@correo.com o 12345678" required />
                        </div>

                        <div className="space-y-3">
                          <Label>¿Cómo prefieres recibir el código?</Label>
                          <div className="grid grid-cols-2 gap-2">
                            <Button
                              type="button"
                              variant={resetMethod === "email" ? "default" : "outline"}
                              onClick={() => setResetMethod("email")}
                              className="h-auto p-3"
                            >
                              <Mail className="w-4 h-4 mr-2" />
                              <div className="text-left">
                                <div className="font-medium">Email</div>
                                <div className="text-xs opacity-75">Más seguro</div>
                              </div>
                            </Button>
                            <Button
                              type="button"
                              variant={resetMethod === "phone" ? "default" : "outline"}
                              onClick={() => setResetMethod("phone")}
                              className="h-auto p-3"
                            >
                              <Phone className="w-4 h-4 mr-2" />
                              <div className="text-left">
                                <div className="font-medium">SMS</div>
                                <div className="text-xs opacity-75">Más rápido</div>
                              </div>
                            </Button>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-emerald-600 hover:bg-emerald-700"
                          disabled={isLoading}
                        >
                          {isLoading
                            ? "Enviando..."
                            : `Enviar código por ${resetMethod === "email" ? "correo" : "SMS"}`}
                        </Button>
                      </form>
                    </div>
                  </TabsContent>

                  <TabsContent value="admin">
                    <div className="space-y-4">
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          Ingresa tu correo institucional para recuperar tu contraseña.
                        </AlertDescription>
                      </Alert>

                      <form onSubmit={handlePasswordReset} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="admin-email">Correo institucional</Label>
                          <Input id="admin-email" type="email" placeholder="funcionario@montebello.gov.co" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="admin-employee-id">Código de empleado (opcional)</Label>
                          <Input id="admin-employee-id" type="text" placeholder="EMP-2024-001" />
                          <p className="text-xs text-gray-600">Ayuda a verificar tu identidad más rápido</p>
                        </div>

                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                          {isLoading ? "Enviando..." : "Enviar código por correo"}
                        </Button>
                      </form>
                    </div>
                  </TabsContent>
                </Tabs>
              </>
            )}

            {step === "sent" && (
              <div className="space-y-4">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Hemos enviado un código de verificación a tu{" "}
                    {resetMethod === "email" ? "correo electrónico" : "teléfono"}. El código expira en 15 minutos.
                  </AlertDescription>
                </Alert>

                <form onSubmit={handleVerifyCode} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="verification-code">Código de verificación</Label>
                    <Input
                      id="verification-code"
                      type="text"
                      placeholder="123456"
                      maxLength={6}
                      className="text-center text-lg tracking-widest"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
                    {isLoading ? "Verificando..." : "Verificar código"}
                  </Button>

                  <div className="text-center">
                    <Button type="button" variant="link" className="text-sm" onClick={() => setStep("request")}>
                      ¿No recibiste el código? Enviar de nuevo
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {step === "reset" && (
              <div className="space-y-4">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Código verificado correctamente. Ahora puedes crear una nueva contraseña.
                  </AlertDescription>
                </Alert>

                <form onSubmit={handleNewPassword} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nueva contraseña</Label>
                    <Input id="new-password" type="password" placeholder="Mínimo 8 caracteres" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-new-password">Confirmar nueva contraseña</Label>
                    <Input
                      id="confirm-new-password"
                      type="password"
                      placeholder="Repite la nueva contraseña"
                      required
                    />
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium mb-2">Tu contraseña debe tener:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Al menos 8 caracteres</li>
                      <li>• Una letra mayúscula</li>
                      <li>• Una letra minúscula</li>
                      <li>• Un número</li>
                    </ul>
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
                    {isLoading ? "Actualizando..." : "Cambiar contraseña"}
                  </Button>
                </form>
              </div>
            )}

            {step === "request" && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  ¿Recordaste tu contraseña?{" "}
                  <Link href="/auth/login" className="text-emerald-600 hover:underline font-medium">
                    Inicia sesión
                  </Link>
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-600">
          <p>¿Problemas para recuperar tu cuenta? Contacta al: (123) 456-7890</p>
        </div>
      </div>
    </div>
  )
}
