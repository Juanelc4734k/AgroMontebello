"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, User, Shield } from "lucide-react"

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
      
      try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  email, 
                  password,
              }),
          });

          const data = await response.json();
          
          if (response.ok) {
              // Almacenar token y redirigir
              localStorage.setItem('token', data.token);
              router.push('/dashboard');
          } else {
              setError(data.message || 'Error en el login');
          }
      } catch (err) {
          setError('Error de conexión con el servidor');
      }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Plataforma Montebello</h1>
          <p className="text-gray-600">Programas Productivos Rurales</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Iniciar Sesión</CardTitle>
            <CardDescription>Accede a tu cuenta para gestionar programas y trámites</CardDescription>
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
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="farmer-email">Correo electrónico o Cédula</Label>
                    <Input id="farmer-email" type="text" value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder="ejemplo@correo.com o 12345678" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farmer-password">Contraseña</Label>
                    <Input id="farmer-password" type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder="Tu contraseña" required />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="admin">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Correo institucional</Label>
                    <Input id="admin-email" type="email" placeholder="funcionario@montebello.gov.co" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Contraseña</Label>
                    <Input id="admin-password" type="password" placeholder="Contraseña institucional" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Iniciando sesión..." : "Acceder al Panel"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 space-y-2">
              <Button variant="link" className="w-full text-sm">
                ¿Olvidaste tu contraseña?
              </Button>
              <Button variant="link" className="w-full text-sm">
                ¿No tienes cuenta? Regístrate aquí
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-600">
          <p>¿Necesitas ayuda? Contacta al: (123) 456-7890</p>
        </div>
      </div>
    </div>
  )
}
