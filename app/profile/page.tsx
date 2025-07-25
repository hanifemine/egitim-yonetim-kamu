"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Edit,
  Upload,
  Download,
  Plus,
  X,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Award,
  Star,
  MessageCircle,
  UserPlus,
  Share2,
} from "lucide-react"
import { useState } from "react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [skills, setSkills] = useState(["Dijital Dönüşüm", "Proje Yönetimi", "İletişim Stratejisi"])
  const [newSkill, setNewSkill] = useState("")

  const userProfile = {
    name: "Ahmet Yılmaz",
    title: "Dijital Dönüşüm Uzmanı",
    department: "Bilgi İşlem Dairesi",
    email: "ahmet.yilmaz@iletisim.gov.tr",
    phone: "+90 312 XXX XX XX",
    location: "Ankara, Türkiye",
    joinDate: "15 Ocak 2024",
    employeeId: "IB2024001",
    bio: "10 yıllık deneyime sahip dijital dönüşüm uzmanı. Kamu kurumlarında teknoloji entegrasyonu ve süreç optimizasyonu konularında uzmanlaşmış.",
    experience: [
      {
        title: "Dijital Dönüşüm Uzmanı",
        company: "T.C. İletişim Başkanlığı",
        period: "2024 - Devam Ediyor",
        description: "Kurumsal dijital dönüşüm projelerinin yönetimi ve koordinasyonu",
      },
      {
        title: "Sistem Analisti",
        company: "T.C. Maliye Bakanlığı",
        period: "2020 - 2024",
        description: "Finansal sistemlerin analizi ve geliştirilmesi",
      },
    ],
    education: [
      {
        degree: "Yüksek Lisans",
        school: "Ankara Üniversitesi",
        field: "Bilgisayar Mühendisliği",
        year: "2018",
      },
      {
        degree: "Lisans",
        school: "ODTÜ",
        field: "Endüstri Mühendisliği",
        year: "2016",
      },
    ],
    certifications: ["PMP - Project Management Professional", "AWS Solutions Architect", "Scrum Master Certification"],
    stats: {
      completedCourses: 12,
      points: 2450,
      followers: 45,
      following: 32,
      posts: 18,
    },
  }

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback className="text-2xl">AY</AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0"
                  onClick={() => {
                    /* Handle photo upload */
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{userProfile.name}</h1>
                    <p className="text-xl text-gray-600">{userProfile.title}</p>
                    <p className="text-gray-500">{userProfile.department}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{userProfile.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Katılım: {userProfile.joinDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3 mt-4 md:mt-0">
                    <Button variant="outline">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Mesaj Gönder
                    </Button>
                    <Button variant="outline">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Takip Et
                    </Button>
                    <Button variant="outline">
                      <Share2 className="h-4 w-4 mr-2" />
                      Paylaş
                    </Button>
                    <Button onClick={() => setIsEditing(!isEditing)}>
                      <Edit className="h-4 w-4 mr-2" />
                      {isEditing ? "Kaydet" : "Düzenle"}
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{userProfile.stats.completedCourses}</div>
                    <div className="text-sm text-gray-600">Eğitim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{userProfile.stats.points}</div>
                    <div className="text-sm text-gray-600">Puan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{userProfile.stats.followers}</div>
                    <div className="text-sm text-gray-600">Takipçi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{userProfile.stats.following}</div>
                    <div className="text-sm text-gray-600">Takip</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="about">Hakkında</TabsTrigger>
            <TabsTrigger value="experience">Deneyim</TabsTrigger>
            <TabsTrigger value="skills">Yetenekler</TabsTrigger>
            <TabsTrigger value="cv">CV</TabsTrigger>
            <TabsTrigger value="activity">Aktivite</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Hakkımda</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <Textarea defaultValue={userProfile.bio} rows={4} placeholder="Kendinizi tanıtın..." />
                    ) : (
                      <p className="text-gray-700">{userProfile.bio}</p>
                    )}
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>İletişim Bilgileri</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <span>{userProfile.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <span>{userProfile.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Briefcase className="h-5 w-5 text-gray-500" />
                      <span>Personel No: {userProfile.employeeId}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Uzmanlık Alanları</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                          <span>{skill}</span>
                          {isEditing && (
                            <button onClick={() => removeSkill(skill)}>
                              <X className="h-3 w-3" />
                            </button>
                          )}
                        </Badge>
                      ))}
                    </div>
                    {isEditing && (
                      <div className="flex space-x-2 mt-3">
                        <Input
                          placeholder="Yeni yetenek ekle"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && addSkill()}
                        />
                        <Button size="sm" onClick={addSkill}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Başarılar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm">Altın Seviye Üye</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-blue-500" />
                        <span className="text-sm">En Aktif Öğrenen</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="h-5 w-5 text-green-500" />
                        <span className="text-sm">Sertifika Uzmanı</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5" />
                    <span>İş Deneyimi</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {userProfile.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4">
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-blue-600">{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.period}</p>
                        <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
                      </div>
                    ))}
                    {isEditing && (
                      <Button variant="outline" className="w-full bg-transparent">
                        <Plus className="h-4 w-4 mr-2" />
                        Deneyim Ekle
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5" />
                    <span>Eğitim</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {userProfile.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-green-200 pl-4">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-green-600">{edu.school}</p>
                        <p className="text-sm text-gray-500">
                          {edu.field} • {edu.year}
                        </p>
                      </div>
                    ))}
                    {isEditing && (
                      <Button variant="outline" className="w-full bg-transparent">
                        <Plus className="h-4 w-4 mr-2" />
                        Eğitim Ekle
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Sertifikalar</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {userProfile.certifications.map((cert, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-yellow-500" />
                        <span className="font-medium">{cert}</span>
                      </div>
                    </div>
                  ))}
                  {isEditing && (
                    <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                      <Button variant="ghost">
                        <Plus className="h-4 w-4 mr-2" />
                        Sertifika Ekle
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Yetenek Değerlendirmesi</CardTitle>
                <CardDescription>Kendinizi değerlendirin ve gelişim alanlarınızı belirleyin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { name: "Dijital Dönüşüm", level: 85 },
                    { name: "Proje Yönetimi", level: 90 },
                    { name: "İletişim Stratejisi", level: 75 },
                    { name: "Veri Analizi", level: 70 },
                    { name: "Takım Liderliği", level: 80 },
                  ].map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* CV Tab */}
          <TabsContent value="cv">
            <Card>
              <CardHeader>
                <CardTitle>CV Yönetimi</CardTitle>
                <CardDescription>CV'nizi yükleyin, düzenleyin ve paylaşın</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">CV Yükle</h3>
                    <p className="text-gray-500 mb-4">PDF, DOC veya DOCX formatında dosyanızı sürükleyin</p>
                    <Button>
                      <Upload className="h-4 w-4 mr-2" />
                      Dosya Seç
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex-col bg-transparent">
                      <Edit className="h-6 w-6 mb-2" />
                      <span>CV Oluşturucu</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col bg-transparent">
                      <Download className="h-6 w-6 mb-2" />
                      <span>CV İndir</span>
                    </Button>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Mevcut CV</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
                            <span className="text-red-600 font-bold">PDF</span>
                          </div>
                          <div>
                            <p className="font-medium">Ahmet_Yilmaz_CV.pdf</p>
                            <p className="text-sm text-gray-500">Son güncelleme: 15 Mart 2024</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Son Aktiviteler</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          type: "course",
                          title: "Dijital Dönüşüm Eğitimi tamamlandı",
                          time: "2 saat önce",
                          icon: GraduationCap,
                        },
                        {
                          type: "post",
                          title: "Yeni bir gönderi paylaştı",
                          time: "1 gün önce",
                          icon: MessageCircle,
                        },
                        {
                          type: "follow",
                          title: "Fatma Demir'i takip etmeye başladı",
                          time: "2 gün önce",
                          icon: UserPlus,
                        },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                          <activity.icon className="h-5 w-5 text-blue-600 mt-1" />
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.title}</p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>İstatistikler</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm">Profil görüntüleme</span>
                        <span className="font-medium">127</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Gönderi etkileşimi</span>
                        <span className="font-medium">45</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Ağ büyümesi</span>
                        <span className="font-medium text-green-600">+12%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
