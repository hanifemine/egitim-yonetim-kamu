import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, BarChart3, Calendar, Award, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const stats = [
    {
      title: "Toplam Kullanıcı",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Aktif Eğitimler",
      value: "34",
      change: "+5%",
      icon: BookOpen,
      color: "text-green-600",
    },
    {
      title: "Tamamlanan Eğitimler",
      value: "156",
      change: "+23%",
      icon: Award,
      color: "text-purple-600",
    },
    {
      title: "Ortalama Başarı",
      value: "87%",
      change: "+3%",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      title: "Yeni Eğitim Modülü Eklendi",
      description: "Dijital Dönüşüm Eğitimi",
      time: "2 saat önce",
      type: "course",
    },
    {
      id: 2,
      title: "Kullanıcı Kaydı Tamamlandı",
      description: "25 yeni personel sisteme eklendi",
      time: "4 saat önce",
      type: "user",
    },
    {
      id: 3,
      title: "Eğitim Tamamlandı",
      description: "İş Güvenliği Eğitimi - Grup A",
      time: "1 gün önce",
      type: "completion",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Hoş Geldiniz</h2>
          <p className="text-gray-600">T.C. İletişim Başkanlığı Eğitim Yönetim Sistemi</p>
        </div>

        {/* Add Loyalty Program Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600 mt-1">{stat.change} geçen aydan</p>
              </CardContent>
            </Card>
          ))}

          {/* Add Loyalty Points Card */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-700">Sadakat Puanı</CardTitle>
              <Award className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">2,450</div>
              <p className="text-xs text-red-600 mt-1">Altın seviye</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Son Aktiviteler</span>
              </CardTitle>
              <CardDescription>Sistemdeki son güncellemeler ve aktiviteler</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                    <div className="flex-shrink-0">
                      {activity.type === "course" && <BookOpen className="h-5 w-5 text-blue-600" />}
                      {activity.type === "user" && <Users className="h-5 w-5 text-green-600" />}
                      {activity.type === "completion" && <Award className="h-5 w-5 text-purple-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Hızlı İşlemler</CardTitle>
              <CardDescription>Sık kullanılan işlemler</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/courses/new">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Yeni Eğitim Ekle
                </Button>
              </Link>
              <Link href="/users/new">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Kullanıcı Ekle
                </Button>
              </Link>
              <Link href="/reports/generate">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Rapor Oluştur
                </Button>
              </Link>
              <Link href="/calendar">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Eğitim Takvimi
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* System Info */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>T.C. İletişim Başkanlığı Eğitim Sistemi</CardTitle>
            <CardDescription>Modern kamu yönetimi için geliştirilmiş eğitim platformu</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-900">Kişiselleştirilmiş Öğrenme</h3>
                <p className="text-sm text-red-700 mt-1">AI destekli gelişim patikası ve kaynak önerileri</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900">Sadakat Programı</h3>
                <p className="text-sm text-blue-700 mt-1">Eğitimleri tamamlayarak puan kazanın ve ödüller alın</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900">Topluluk Desteği</h3>
                <p className="text-sm text-green-700 mt-1">Meslektaşlarınızla etkileşim ve deneyim paylaşımı</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
