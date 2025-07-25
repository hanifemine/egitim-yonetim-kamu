"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { BookOpen, Eye, EyeOff, Shield, Users, Award } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const validateLogin = () => {
    const newErrors = {}

    if (!email.trim()) newErrors.email = "E-posta gerekli"
    if (!email.includes("@iletisim.gov.tr")) {
      newErrors.email = "Kurumsal e-posta adresi kullanın"
    }
    if (!password.trim()) newErrors.password = "Parola gerekli"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateLogin()) {
      return
    }

    // Login logic here
    console.log("Login attempt:", { email, password })
    // Redirect to dashboard
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <BookOpen className="h-16 w-16 text-red-600" />
              <div className="text-left">
                <h1 className="text-3xl font-bold text-gray-900">T.C. İletişim Başkanlığı</h1>
                <p className="text-lg text-gray-600">Eğitim Yönetim Sistemi</p>
              </div>
            </div>
            <p className="text-xl text-gray-700 mb-8">
              Kamu personelinin gelişimi için tasarlanmış modern eğitim platformu
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Kişiselleştirilmiş Öğrenme</h3>
                <p className="text-gray-600">Size özel gelişim patikası ve kaynak önerileri</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Sadakat Programı</h3>
                <p className="text-gray-600">Eğitimleri tamamlayarak puan kazanın ve ödüller alın</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Güvenli Platform</h3>
                <p className="text-gray-600">Kamu standardlarında güvenlik ve veri koruması</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4 lg:hidden">
                <BookOpen className="h-12 w-12 text-red-600" />
              </div>
              <CardTitle className="text-2xl">Giriş Yap</CardTitle>
              <CardDescription>Eğitim platformuna erişmek için bilgilerinizi girin</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta Adresi</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@iletisim.gov.tr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Parola</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Parolanızı girin"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">
                      Beni hatırla
                    </Label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-red-600 hover:underline">
                    Parolamı unuttum
                  </Link>
                </div>
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Giriş Yap
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Hesabınız yok mu?{" "}
                  <Link href="/register" className="text-red-600 hover:underline font-medium">
                    Kayıt olun
                  </Link>
                </p>
              </div>

              {/* Additional Login Options */}
              <div className="mt-6 pt-6 border-t">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">Kurumsal hesapla giriş</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Shield className="h-4 w-4 mr-2" />
                    LDAP ile Giriş Yap
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Text */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Giriş yaparken sorun mu yaşıyorsunuz?</p>
            <Link href="/help" className="text-red-600 hover:underline">
              Teknik destek alın
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
