"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  MessageCircle,
  UserPlus,
  Users,
  Star,
  Share2,
  MoreHorizontal,
  Send,
  Heart,
  Bookmark,
  Eye,
} from "lucide-react"
import { useState } from "react"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("feed")

  const experts = [
    {
      id: 1,
      name: "Dr. Fatma Demir",
      title: "Dijital Dönüşüm Uzmanı",
      department: "Strateji Geliştirme",
      expertise: ["Dijital Dönüşüm", "Veri Analizi", "AI"],
      followers: 234,
      rating: 4.8,
      isFollowing: false,
      avatar: "FD",
      bio: "15 yıllık deneyime sahip dijital dönüşüm uzmanı",
    },
    {
      id: 2,
      name: "Mehmet Kaya",
      title: "Proje Yönetimi Uzmanı",
      department: "Genel Sekreterlik",
      expertise: ["Proje Yönetimi", "Agile", "Scrum"],
      followers: 189,
      rating: 4.9,
      isFollowing: true,
      avatar: "MK",
      bio: "PMP sertifikalı proje yönetimi uzmanı",
    },
    {
      id: 3,
      name: "Ayşe Özkan",
      title: "İletişim Stratejisti",
      department: "Basın ve Halkla İlişkiler",
      expertise: ["İletişim", "Medya", "Kriz Yönetimi"],
      followers: 156,
      rating: 4.7,
      isFollowing: false,
      avatar: "AÖ",
      bio: "Kamu iletişimi ve medya ilişkileri uzmanı",
    },
  ]

  const posts = [
    {
      id: 1,
      author: {
        name: "Dr. Fatma Demir",
        title: "Dijital Dönüşüm Uzmanı",
        avatar: "FD",
      },
      content:
        "Yapay zeka teknolojilerinin kamu yönetiminde kullanımı konusunda yeni bir makale yayınladım. Özellikle vatandaş hizmetlerinde AI chatbot uygulamaları üzerine detaylı bir analiz içeriyor. Görüşlerinizi merak ediyorum!",
      tags: ["AI", "Kamu Yönetimi", "Dijital Dönüşüm"],
      time: "2 saat önce",
      likes: 24,
      comments: 8,
      shares: 3,
      isLiked: false,
      isBookmarked: false,
    },
    {
      id: 2,
      author: {
        name: "Mehmet Kaya",
        title: "Proje Yönetimi Uzmanı",
        avatar: "MK",
      },
      content:
        "Agile metodolojilerinin kamu projelerinde uygulanması konusunda bir soru: Hangi departmanınızda Scrum framework'ü kullanıyorsunuz? Deneyimlerinizi paylaşabilir misiniz?",
      tags: ["Agile", "Scrum", "Proje Yönetimi"],
      time: "4 saat önce",
      likes: 18,
      comments: 12,
      shares: 2,
      isLiked: true,
      isBookmarked: true,
    },
    {
      id: 3,
      author: {
        name: "Ayşe Özkan",
        title: "İletişim Stratejisti",
        avatar: "AÖ",
      },
      content:
        "Sosyal medya kriz yönetimi eğitimi için hazırladığım sunumu paylaşıyorum. Özellikle kamu kurumları için kritik olan noktalara değindim. Feedback'lerinizi bekliyorum!",
      tags: ["Kriz Yönetimi", "Sosyal Medya", "İletişim"],
      time: "1 gün önce",
      likes: 31,
      comments: 15,
      shares: 7,
      isLiked: false,
      isBookmarked: false,
    },
  ]

  const questions = [
    {
      id: 1,
      title: "Dijital dönüşüm sürecinde en büyük zorluklar neler?",
      author: "Ali Şahin",
      department: "Bilgi İşlem",
      tags: ["Dijital Dönüşüm", "Teknoloji"],
      answers: 5,
      views: 127,
      time: "3 saat önce",
    },
    {
      id: 2,
      title: "Kamu projelerinde risk yönetimi nasıl yapılmalı?",
      author: "Zeynep Yıldız",
      department: "Strateji Geliştirme",
      tags: ["Proje Yönetimi", "Risk"],
      answers: 8,
      views: 89,
      time: "5 saat önce",
    },
    {
      id: 3,
      title: "Vatandaş memnuniyeti ölçümü için hangi metrikler kullanılmalı?",
      author: "Hasan Demir",
      department: "Kalite Yönetimi",
      tags: ["Kalite", "Ölçüm", "Vatandaş"],
      answers: 3,
      views: 156,
      time: "1 gün önce",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Topluluk</h1>
          <p className="text-gray-600">T.C. İletişim Başkanlığı çalışanları ile bilgi paylaşımı ve işbirliği</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Input placeholder="Ara..." className="w-80" />
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtrele
            </Button>
          </div>
          <Button>
            <MessageCircle className="h-4 w-4 mr-2" />
            Yeni Gönderi
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="feed">Ana Akış</TabsTrigger>
            <TabsTrigger value="experts">Uzmanlar</TabsTrigger>
            <TabsTrigger value="questions">Sorular</TabsTrigger>
            <TabsTrigger value="groups">Gruplar</TabsTrigger>
          </TabsList>

          {/* Feed Tab */}
          <TabsContent value="feed">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                {/* Create Post */}
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <div className="flex space-x-3">
                      <Avatar>
                        <AvatarFallback>AY</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Input placeholder="Bir şeyler paylaşın..." className="mb-3" />
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            <Badge variant="outline">Dijital Dönüşüm</Badge>
                            <Badge variant="outline">Proje Yönetimi</Badge>
                          </div>
                          <Button size="sm">
                            <Send className="h-4 w-4 mr-2" />
                            Paylaş
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Posts */}
                <div className="space-y-6">
                  {posts.map((post) => (
                    <Card key={post.id}>
                      <CardContent className="pt-6">
                        <div className="flex space-x-3">
                          <Avatar>
                            <AvatarFallback>{post.author.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold">{post.author.name}</h3>
                                <p className="text-sm text-gray-500">{post.author.title}</p>
                                <p className="text-xs text-gray-400">{post.time}</p>
                              </div>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>

                            <p className="mt-3 text-gray-700">{post.content}</p>

                            <div className="flex space-x-2 mt-3">
                              {post.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t">
                              <div className="flex space-x-6">
                                <Button variant="ghost" size="sm" className={post.isLiked ? "text-red-600" : ""}>
                                  <Heart className={`h-4 w-4 mr-1 ${post.isLiked ? "fill-current" : ""}`} />
                                  {post.likes}
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <MessageCircle className="h-4 w-4 mr-1" />
                                  {post.comments}
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Share2 className="h-4 w-4 mr-1" />
                                  {post.shares}
                                </Button>
                              </div>
                              <Button variant="ghost" size="sm" className={post.isBookmarked ? "text-blue-600" : ""}>
                                <Bookmark className={`h-4 w-4 ${post.isBookmarked ? "fill-current" : ""}`} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Trending Konular</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {["Dijital Dönüşüm", "AI", "Proje Yönetimi", "İletişim", "Veri Analizi"].map((topic, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm">{topic}</span>
                          <Badge variant="secondary">{index * 10 + 15}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Önerilen Uzmanlar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {experts.slice(0, 3).map((expert) => (
                        <div key={expert.id} className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>{expert.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{expert.name}</p>
                            <p className="text-xs text-gray-500">{expert.title}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            <UserPlus className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Experts Tab */}
          <TabsContent value="experts">
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Uzman ara..." className="pl-10" />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Uzmanlık Alanı" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tüm Alanlar</SelectItem>
                  <SelectItem value="digital">Dijital Dönüşüm</SelectItem>
                  <SelectItem value="project">Proje Yönetimi</SelectItem>
                  <SelectItem value="communication">İletişim</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filtrele
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experts.map((expert) => (
                <Card key={expert.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Avatar className="h-20 w-20 mx-auto mb-4">
                        <AvatarFallback className="text-lg">{expert.avatar}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-lg">{expert.name}</h3>
                      <p className="text-gray-600">{expert.title}</p>
                      <p className="text-sm text-gray-500">{expert.department}</p>

                      <div className="flex items-center justify-center space-x-1 mt-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{expert.rating}</span>
                        <span className="text-sm text-gray-500">({expert.followers} takipçi)</span>
                      </div>

                      <p className="text-sm text-gray-700 mt-3">{expert.bio}</p>

                      <div className="flex flex-wrap gap-1 mt-3 justify-center">
                        {expert.expertise.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-2 mt-4">
                        <Button size="sm" variant={expert.isFollowing ? "secondary" : "default"} className="flex-1">
                          <UserPlus className="h-4 w-4 mr-1" />
                          {expert.isFollowing ? "Takip Ediliyor" : "Takip Et"}
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Mesaj
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Questions Tab */}
          <TabsContent value="questions">
            <div className="mb-6 flex justify-between items-center">
              <div className="flex space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Soru ara..." className="pl-10 w-80" />
                </div>
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tümü</SelectItem>
                    <SelectItem value="tech">Teknoloji</SelectItem>
                    <SelectItem value="management">Yönetim</SelectItem>
                    <SelectItem value="communication">İletişim</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>
                <MessageCircle className="h-4 w-4 mr-2" />
                Soru Sor
              </Button>
            </div>

            <div className="space-y-4">
              {questions.map((question) => (
                <Card key={question.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{question.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span>Soran: {question.author}</span>
                          <span>{question.department}</span>
                          <span>{question.time}</span>
                        </div>
                        <div className="flex space-x-2">
                          {question.tags.map((tag, index) => (
                            <Badge key={index} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{question.answers}</div>
                        <div className="text-xs text-gray-500">Cevap</div>
                        <div className="flex items-center space-x-1 mt-2 text-xs text-gray-500">
                          <Eye className="h-3 w-3" />
                          <span>{question.views}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Groups Tab */}
          <TabsContent value="groups">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Dijital Dönüşüm Uzmanları",
                  description: "Kamu kurumlarında dijital dönüşüm deneyimleri",
                  members: 156,
                  posts: 89,
                  isJoined: true,
                },
                {
                  name: "Proje Yöneticileri",
                  description: "Proje yönetimi metodolojileri ve deneyimler",
                  members: 234,
                  posts: 145,
                  isJoined: false,
                },
                {
                  name: "İletişim Stratejistleri",
                  description: "Kamu iletişimi ve medya ilişkileri",
                  members: 98,
                  posts: 67,
                  isJoined: true,
                },
              ].map((group, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{group.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>{group.members} üye</span>
                      <span>{group.posts} gönderi</span>
                    </div>
                    <Button className="w-full" variant={group.isJoined ? "secondary" : "default"}>
                      <Users className="h-4 w-4 mr-2" />
                      {group.isJoined ? "Üye" : "Katıl"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
