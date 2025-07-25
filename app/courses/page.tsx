import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Search, Plus, Filter, BookOpen, Users, Clock, Award } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Dijital Dönüşüm Eğitimi",
      description: "Kamu kurumlarında dijital dönüşüm süreçleri ve uygulamaları",
      category: "Teknoloji",
      duration: "40 saat",
      participants: 156,
      completed: 89,
      status: "Aktif",
      startDate: "2024-01-15",
      instructor: "Dr. Ahmet Yılmaz",
      progress: 67,
    },
    {
      id: 2,
      title: "İş Güvenliği Eğitimi",
      description: "Temel iş güvenliği kuralları ve uygulamaları",
      category: "Güvenlik",
      duration: "16 saat",
      participants: 234,
      completed: 198,
      status: "Aktif",
      startDate: "2024-02-01",
      instructor: "Mühendis Fatma Demir",
      progress: 85,
    },
    {
      id: 3,
      title: "Proje Yönetimi",
      description: "Kamu projelerinde etkili proje yönetimi teknikleri",
      category: "Yönetim",
      duration: "32 saat",
      participants: 78,
      completed: 45,
      status: "Devam Ediyor",
      startDate: "2024-03-10",
      instructor: "Prof. Dr. Mehmet Kaya",
      progress: 58,
    },
    {
      id: 4,
      title: "Veri Güvenliği",
      description: "Kişisel verilerin korunması ve siber güvenlik",
      category: "Güvenlik",
      duration: "24 saat",
      participants: 145,
      completed: 12,
      status: "Başlayacak",
      startDate: "2024-04-15",
      instructor: "Uzman Ayşe Özkan",
      progress: 8,
    },
  ]

  const getStatusBadge = (status: string) => {
    const colors = {
      Aktif: "bg-green-100 text-green-800",
      "Devam Ediyor": "bg-blue-100 text-blue-800",
      Başlayacak: "bg-yellow-100 text-yellow-800",
      Tamamlandı: "bg-gray-100 text-gray-800",
    }
    return <Badge className={colors[status as keyof typeof colors]}>{status}</Badge>
  }

  const getCategoryBadge = (category: string) => {
    const colors = {
      Teknoloji: "bg-purple-100 text-purple-800",
      Güvenlik: "bg-red-100 text-red-800",
      Yönetim: "bg-blue-100 text-blue-800",
    }
    return (
      <Badge variant="outline" className={colors[category as keyof typeof colors]}>
        {category}
      </Badge>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Eğitim Yönetimi</h2>
            <p className="text-gray-600">T.C. İletişim Başkanlığı eğitimlerini yönetin ve takip edin</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtrele
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Yeni Eğitim
            </Button>
          </div>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Eğitim ara..." className="pl-10" />
            </div>
          </CardContent>
        </Card>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                    <div className="flex space-x-2 mb-3">
                      {getCategoryBadge(course.category)}
                      {getStatusBadge(course.status)}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>İlerleme</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="flex items-center justify-center space-x-1">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium">{course.participants}</span>
                      </div>
                      <div className="text-xs text-gray-500">Katılımcı</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1">
                        <Award className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium">{course.completed}</span>
                      </div>
                      <div className="text-xs text-gray-500">Tamamlanan</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium">{course.duration}</span>
                      </div>
                      <div className="text-xs text-gray-500">Süre</div>
                    </div>
                  </div>

                  {/* Instructor and Date */}
                  <div className="pt-4 border-t">
                    <div className="text-sm text-gray-600 mb-1">
                      <strong>Eğitmen:</strong> {course.instructor}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Başlangıç:</strong> {course.startDate}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      Detaylar
                    </Button>
                    <Button size="sm" className="flex-1">
                      Yönet
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">34</div>
                <div className="text-sm text-gray-600">Toplam Eğitim</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">613</div>
                <div className="text-sm text-gray-600">Toplam Katılımcı</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">344</div>
                <div className="text-sm text-gray-600">Tamamlanan</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">112</div>
                <div className="text-sm text-gray-600">Toplam Saat</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
