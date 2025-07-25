"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { BookOpen, Eye, EyeOff, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
    position: "",
    employeeId: "",
  })
  const [errors, setErrors] = useState({})

  const departments = [
    "Genel Sekreterlik",
    "Basın ve Halkla İlişkiler",
    "Dijital Dönüşüm",
    "İnsan Kaynakları",
    "Bilgi İşlem",
    "Mali İşler",
    "Hukuk İşleri",
    "Strateji Geliştirme",
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "Ad gerekli"
    if (!formData.lastName.trim()) newErrors.lastName = "Soyad gerekli"
    if (!formData.email.includes("@iletisim.gov.tr")) {
      newErrors.email = "Kurumsal e-posta adresi gerekli"
    }
    if (!formData.employeeId.trim()) newErrors.employeeId = "Personel numarası gerekli"
    if (!formData.department) newErrors.department = "Departman seçimi gerekli"
    if (formData.password.length < 8) newErrors.password = "Parola en az 8 karakter olmalı"
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Parolalar eşleşmiyor"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Registration logic here
    console.log("Registration attempt:", formData)
    // Redirect to profile completion
    window.location.href = "/profile?welcome=true"
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Registration Benefits */}
        <div className="hidden lg:block space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <BookOpen className="h-16 w-16 text-red-600" />
              <div className="text-left">
                <h1 className="text-3xl font-bold text-gray-900">Eğitim Yolculuğunuza</h1>
                <p className="text-lg text-gray-600">Başlamaya Hazır mısınız?</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Kişiselleştirilmiş Gelişim Patikası</h3>
                <p className="text-gray-600">Size özel hazırlanmış eğitim rotası ve hedefler</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Akıllı Kaynak Önerileri</h3>
                <p className="text-gray-600">AI destekli kişisel gelişim ve verimlilik kaynakları</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Sadakat Puanları ve Ödüller</h3>
                <p className="text-gray-600">Eğitimleri tamamlayarak puan kazanın, ödüller alın</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Topluluk Desteği</h3>
                <p className="text-gray-600">Meslektaşlarınızla etkileşim ve deneyim paylaşımı</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Sertifika ve Rozetler</h3>
                <p className="text-gray-600">Tamamladığınız eğitimler için resmi sertifikalar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4 lg:hidden">
                <BookOpen className="h-12 w-12 text-red-600" />
              </div>
              <CardTitle className="text-2xl">Kayıt Ol</CardTitle>
              <CardDescription>T.C. İletişim Başkanlığı personeli için hesap oluşturun</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Ad</Label>
                    <Input
                      id="firstName"
                      placeholder="Adınız"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Soyad</Label>
                    <Input
                      id="lastName"
                      placeholder="Soyadınız"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Kurumsal E-posta</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ad.soyad@iletisim.gov.tr"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employeeId">Personel Numarası</Label>
                  <Input
                    id="employeeId"
                    placeholder="Personel numaranız"
                    value={formData.employeeId}
                    onChange={(e) => handleInputChange("employeeId", e.target.value)}
                    required
                  />
                  {errors.employeeId && <p className="text-red-500 text-xs mt-1">{errors.employeeId}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Departman</Label>
                  <Select onValueChange={(value) => handleInputChange("department", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Departmanınızı seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Pozisyon</Label>
                  <Input
                    id="position"
                    placeholder="Görev unvanınız"
                    value={formData.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Parola</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Güçlü bir parola oluşturun"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Parola Tekrar</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Parolanızı tekrar girin"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    <Link href="/terms" className="text-red-600 hover:underline">
                      Kullanım şartlarını
                    </Link>{" "}
                    ve{" "}
                    <Link href="/privacy" className="text-red-600 hover:underline">
                      gizlilik politikasını
                    </Link>{" "}
                    kabul ediyorum
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Hesap Oluştur
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Zaten hesabınız var mı?{" "}
                  <Link href="/login" className="text-red-600 hover:underline font-medium">
                    Giriş yapın
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
