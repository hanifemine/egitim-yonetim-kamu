import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Download, TrendingUp, Users, BookOpen, Award } from "lucide-react"

export default function ReportsPage() {
  const departmentStats = [
    {
      department: "İnsan Kaynakları",
      totalUsers: 45,
      completedCourses: 234,
      averageScore: 87,
      completionRate: 92,
    },
    {
      department: "Bilgi İşlem",
      totalUsers: 32,
      completedCourses: 189,
      averageScore: 91,
      completionRate: 89,
    },
    {
      department: "Mali İşler",
      totalUsers: 28,
      completedCourses: 156,
      averageScore: 84,
      completionRate: 78,
    },
    {
      department: "Hukuk İşleri",
      totalUsers: 18,
      completedCourses: 98,
      averageScore: 89,
      completionRate: 85,
    },
  ]

  const monthlyProgress = [
    { month: "Ocak", completed: 45, enrolled: 67 },
    { month: "Şubat", completed: 67, enrolled: 89 },
    { month: "Mart", completed: 89, enrolled: 123 },
    { month: "Nisan", completed: 123, enrolled: 156 },
  ]

  const topCourses = [
    {
      title: "Dijital Dönüşüm Eğitimi",
      participants: 156,
      completionRate: 89,
      averageScore: 87,
    },
    {
      title: "İş Güvenliği Eğitimi",
      participants: 234,
      completionRate: 95,
      averageScore: 91,
    },
    {
      title: "Proje Yönetimi",
      participants: 78,
      completionRate: 76,
      averageScore: 84,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Raporlar ve Analitik</h2>
            <p className="text-gray-600">T.C. İletişim Başkanlığı eğitim performansını analiz edin</p>
          </div>
          <div className="flex space-x-3">
            <Select defaultValue="monthly">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Haftalık</SelectItem>
                <SelectItem value="monthly">Aylık</SelectItem>
                <SelectItem value="quarterly">Üç Aylık</SelectItem>
                <SelectItem value="yearly">Yıllık</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Rapor İndir
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Toplam Eğitim</p>
                  <p className="text-2xl font-bold">34</p>
                  <p className="text-xs text-green-600">+12% bu ay</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Aktif Kullanıcı</p>
                  <p className="text-2xl font-bold">1,247</p>
                  <p className="text-xs text-green-600">+8% bu ay</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Tamamlanma Oranı</p>
                  <p className="text-2xl font-bold">87%</p>
                  <p className="text-xs text-green-600">+5% bu ay</p>
                </div>
                <Award className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Ortalama Puan</p>
                  <p className="text-2xl font-bold">88</p>
                  <p className="text-xs text-green-600">+3% bu ay</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly Progress Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Aylık İlerleme</CardTitle>
              <CardDescription>Eğitim tamamlama ve kayıt istatistikleri</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyProgress.map((month, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{month.month}</span>
                      <span className="text-gray-500">
                        {month.completed}/{month.enrolled} tamamlandı
                      </span>
                    </div>
                    <Progress value={(month.completed / month.enrolled) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Courses */}
          <Card>
            <CardHeader>
              <CardTitle>En Popüler Eğitimler</CardTitle>
              <CardDescription>Katılım ve başarı oranlarına göre</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCourses.map((course, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{course.title}</h4>
                      <Badge variant="outline">{course.participants} kişi</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                      <div>
                        <span>Tamamlanma: </span>
                        <span className="font-medium">{course.completionRate}%</span>
                      </div>
                      <div>
                        <span>Ort. Puan: </span>
                        <span className="font-medium">{course.averageScore}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Departman Bazlı İstatistikler</CardTitle>
            <CardDescription>Departmanların eğitim performans analizi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Departman</th>
                    <th className="text-left py-3 px-4 font-medium">Kullanıcı Sayısı</th>
                    <th className="text-left py-3 px-4 font-medium">Tamamlanan Eğitim</th>
                    <th className="text-left py-3 px-4 font-medium">Ortalama Puan</th>
                    <th className="text-left py-3 px-4 font-medium">Tamamlanma Oranı</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentStats.map((dept, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{dept.department}</td>
                      <td className="py-3 px-4">{dept.totalUsers}</td>
                      <td className="py-3 px-4">{dept.completedCourses}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <span>{dept.averageScore}</span>
                          <Badge variant={dept.averageScore >= 85 ? "default" : "secondary"} className="text-xs">
                            {dept.averageScore >= 85 ? "Yüksek" : "Orta"}
                          </Badge>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <Progress value={dept.completionRate} className="w-16 h-2" />
                          <span className="text-sm">{dept.completionRate}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Export Options */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Rapor Dışa Aktarma</CardTitle>
            <CardDescription>Raporları farklı formatlarda indirin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Excel Raporu (.xlsx)
              </Button>
              <Button variant="outline" className="justify-start bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                PDF Raporu (.pdf)
              </Button>
              <Button variant="outline" className="justify-start bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                CSV Verisi (.csv)
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
