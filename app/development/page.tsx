import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { TrendingUp, Target, BookOpen, Star, Trophy, Zap, Users, Calendar, ArrowRight, Gift, Crown } from "lucide-react"

export default function DevelopmentPage() {
  const userStats = {
    totalPoints: 2450,
    level: "Uzman",
    levelProgress: 75,
    nextLevel: "Lider",
    pointsToNext: 550,
    completedCourses: 12,
    certificates: 8,
    streak: 15,
  }

  const developmentPath = [
    {
      id: 1,
      title: "Dijital Dönüşüm Uzmanı",
      description: "Modern teknolojiler ve dijital süreçler",
      progress: 85,
      status: "Devam Ediyor",
      estimatedTime: "2 hafta",
      courses: ["Dijital Dönüşüm Temelleri", "Veri Analizi", "Proje Yönetimi"],
      nextCourse: "Yapay Zeka Uygulamaları",
    },
    {
      id: 2,
      title: "İletişim Stratejisti",
      description: "Etkili iletişim ve halkla ilişkiler",
      progress: 60,
      status: "Planlanan",
      estimatedTime: "3 hafta",
      courses: ["Kriz İletişimi", "Sosyal Medya Yönetimi", "Medya İlişkileri"],
      nextCourse: "Kriz İletişimi",
    },
    {
      id: 3,
      title: "Liderlik Gelişimi",
      description: "Takım yönetimi ve liderlik becerileri",
      progress: 30,
      status: "Önerilen",
      estimatedTime: "4 hafta",
      courses: ["Takım Yönetimi", "Motivasyon Teknikleri", "Karar Verme"],
      nextCourse: "Takım Yönetimi",
    },
  ]

  const recommendations = [
    {
      type: "Kurs",
      title: "Yapay Zeka ve Kamu Yönetimi",
      reason: "Dijital dönüşüm patikanıza uygun",
      duration: "6 saat",
      difficulty: "Orta",
      points: 150,
    },
    {
      type: "Kitap",
      title: "21. Yüzyılda Kamu İletişimi",
      reason: "İletişim becerilerinizi geliştirmek için",
      author: "Prof. Dr. Mehmet Özkan",
      pages: 280,
      points: 100,
    },
    {
      type: "Webinar",
      title: "Geleceğin Kamu Yönetimi",
      reason: "Sektör trendlerini takip etmek için",
      date: "25 Mart 2024",
      speaker: "Dr. Ayşe Demir",
      points: 75,
    },
    {
      type: "Podcast",
      title: "Dijital Dönüşüm Hikayeleri",
      reason: "İlham verici başarı hikayeleri",
      episodes: 12,
      duration: "30 dk/bölüm",
      points: 50,
    },
  ]

  const loyaltyProgram = {
    currentTier: "Altın",
    nextTier: "Platin",
    benefits: [
      "Öncelikli eğitim kayıtları",
      "Özel mentorluk seansları",
      "Premium içeriklere erişim",
      "Sertifika hızlandırma",
    ],
    rewards: [
      { name: "Kahve Kuponu", points: 500, available: true },
      { name: "Kitap Hediye Çeki", points: 1000, available: true },
      { name: "Eğitim Semineri Bileti", points: 1500, available: false },
      { name: "Teknoloji Ürünü", points: 3000, available: false },
    ],
  }

  const leaderboard = [
    { rank: 1, name: "Fatma Demir", points: 3200, avatar: "FD" },
    { rank: 2, name: "Mehmet Kaya", points: 2800, avatar: "MK" },
    { rank: 3, name: "Ahmet Yılmaz", points: 2450, avatar: "AY", isCurrentUser: true },
    { rank: 4, name: "Ayşe Özkan", points: 2100, avatar: "AÖ" },
    { rank: 5, name: "Ali Şahin", points: 1950, avatar: "AŞ" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gelişim Patikası</h1>
          <p className="text-gray-600">Kişiselleştirilmiş öğrenme yolculuğunuz ve başarılarınız</p>
        </div>

        {/* User Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Toplam Puan</p>
                  <p className="text-2xl font-bold text-blue-600">{userStats.totalPoints}</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Seviye</p>
                  <p className="text-2xl font-bold text-purple-600">{userStats.level}</p>
                </div>
                <Trophy className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Tamamlanan</p>
                  <p className="text-2xl font-bold text-green-600">{userStats.completedCourses}</p>
                </div>
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Seri</p>
                  <p className="text-2xl font-bold text-orange-600">{userStats.streak} gün</p>
                </div>
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Level Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Seviye İlerlemesi</span>
                </CardTitle>
                <CardDescription>
                  {userStats.nextLevel} seviyesine {userStats.pointsToNext} puan kaldı
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="bg-purple-50 text-purple-700">
                      {userStats.level}
                    </Badge>
                    <Badge className="bg-purple-600">{userStats.nextLevel}</Badge>
                  </div>
                  <Progress value={userStats.levelProgress} className="h-3" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{userStats.totalPoints} puan</span>
                    <span>{userStats.totalPoints + userStats.pointsToNext} puan</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Development Paths */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Gelişim Patikalarınız</span>
                </CardTitle>
                <CardDescription>Size özel hazırlanmış öğrenme rotaları</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {developmentPath.map((path) => (
                    <div key={path.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{path.title}</h3>
                          <p className="text-gray-600 text-sm">{path.description}</p>
                        </div>
                        <Badge
                          variant={path.status === "Devam Ediyor" ? "default" : "secondary"}
                          className={path.status === "Devam Ediyor" ? "bg-green-600" : ""}
                        >
                          {path.status}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>İlerleme</span>
                            <span>{path.progress}%</span>
                          </div>
                          <Progress value={path.progress} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{path.estimatedTime}</span>
                          </div>
                          <span>{path.courses.length} eğitim</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium">Sıradaki: {path.nextCourse}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            Devam Et
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Size Özel Öneriler</CardTitle>
                <CardDescription>AI destekli kişiselleştirilmiş kaynak önerileri</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{rec.type}</Badge>
                        <div className="flex items-center space-x-1 text-sm text-yellow-600">
                          <Star className="h-4 w-4" />
                          <span>{rec.points}</span>
                        </div>
                      </div>
                      <h4 className="font-medium mb-1">{rec.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{rec.reason}</p>
                      <div className="text-xs text-gray-500">
                        {rec.type === "Kurs" && `${rec.duration} • ${rec.difficulty}`}
                        {rec.type === "Kitap" && `${rec.author} • ${rec.pages} sayfa`}
                        {rec.type === "Webinar" && `${rec.date} • ${rec.speaker}`}
                        {rec.type === "Podcast" && `${rec.episodes} bölüm • ${rec.duration}`}
                      </div>
                      <Button size="sm" className="w-full mt-3 bg-transparent" variant="outline">
                        İncele
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Loyalty Program */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Crown className="h-5 w-5 text-yellow-500" />
                  <span>Sadakat Programı</span>
                </CardTitle>
                <CardDescription>Mevcut seviye: {loyaltyProgram.currentTier}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                    <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <p className="font-semibold text-yellow-700">{loyaltyProgram.currentTier} Üye</p>
                    <p className="text-sm text-yellow-600">Sıradaki: {loyaltyProgram.nextTier}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Avantajlarınız:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {loyaltyProgram.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rewards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gift className="h-5 w-5" />
                  <span>Ödüller</span>
                </CardTitle>
                <CardDescription>Puanlarınızla ödül kazanın</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {loyaltyProgram.rewards.map((reward, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{reward.name}</p>
                        <p className="text-xs text-gray-600">{reward.points} puan</p>
                      </div>
                      <Button
                        size="sm"
                        variant={reward.available ? "default" : "secondary"}
                        disabled={!reward.available}
                        className={reward.available ? "bg-red-600 hover:bg-red-700" : ""}
                      >
                        {reward.available ? "Al" : "Kilitli"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Liderlik Tablosu</span>
                </CardTitle>
                <CardDescription>Bu ayki en aktif öğrenenler</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center space-x-3 p-2 rounded-lg ${
                        user.isCurrentUser ? "bg-blue-50 border border-blue-200" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold">
                        {user.rank}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">{user.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-gray-600">{user.points} puan</p>
                      </div>
                      {user.rank <= 3 && (
                        <Trophy
                          className={`h-4 w-4 ${
                            user.rank === 1 ? "text-yellow-500" : user.rank === 2 ? "text-gray-400" : "text-orange-600"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
