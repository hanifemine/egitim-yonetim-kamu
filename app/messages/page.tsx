"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Send, MoreVertical, Phone, Video, Paperclip, Smile, Circle, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: 1,
      name: "Dr. Fatma Demir",
      title: "Dijital Dönüşüm Uzmanı",
      lastMessage: "Yarın toplantı için sunumu hazırladım",
      time: "14:30",
      unread: 2,
      online: true,
      avatar: "FD",
    },
    {
      id: 2,
      name: "Mehmet Kaya",
      title: "Proje Yönetimi Uzmanı",
      lastMessage: "Proje planını gözden geçirebilir misin?",
      time: "13:45",
      unread: 0,
      online: false,
      avatar: "MK",
    },
    {
      id: 3,
      name: "Ayşe Özkan",
      title: "İletişim Stratejisti",
      lastMessage: "Teşekkürler, çok faydalı oldu",
      time: "12:20",
      unread: 1,
      online: true,
      avatar: "AÖ",
    },
    {
      id: 4,
      name: "Ali Şahin",
      title: "Veri Analisti",
      lastMessage: "Rapor hazır, inceleyebilirsin",
      time: "11:15",
      unread: 0,
      online: false,
      avatar: "AŞ",
    },
  ]

  const messages = [
    {
      id: 1,
      senderId: 2,
      content: "Merhaba Ahmet, dijital dönüşüm projesi hakkında konuşabilir miyiz?",
      time: "14:25",
      isOwn: false,
    },
    {
      id: 2,
      senderId: 1,
      content: "Tabii ki! Hangi konular hakkında konuşmak istiyorsun?",
      time: "14:26",
      isOwn: true,
    },
    {
      id: 3,
      senderId: 2,
      content: "Özellikle AI entegrasyonu konusunda deneyimlerini merak ediyorum. Hangi araçları önerirsin?",
      time: "14:27",
      isOwn: false,
    },
    {
      id: 4,
      senderId: 1,
      content:
        "Kamu kurumları için en uygun çözümler Microsoft Power Platform ve Azure AI Services. Detaylı bir sunum hazırlayabilirim.",
      time: "14:28",
      isOwn: true,
    },
    {
      id: 5,
      senderId: 2,
      content: "Harika! Yarın toplantı için sunumu hazırladım, beraber gözden geçirebiliriz.",
      time: "14:30",
      isOwn: false,
    },
  ]

  const selectedConversation = conversations.find((conv) => conv.id === selectedChat)

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Handle message sending
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mesajlar</h1>
          <p className="text-gray-600">Meslektaşlarınızla iletişim kurun ve bilgi paylaşımı yapın</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Sohbetler</span>
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Kişi ara..." className="pl-10" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[500px]">
                <div className="space-y-1">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 cursor-pointer hover:bg-gray-50 border-l-4 ${
                        selectedChat === conversation.id ? "border-blue-500 bg-blue-50" : "border-transparent"
                      }`}
                      onClick={() => setSelectedChat(conversation.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarFallback>{conversation.avatar}</AvatarFallback>
                          </Avatar>
                          {conversation.online && (
                            <Circle className="absolute bottom-0 right-0 h-3 w-3 text-green-500 fill-current" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-sm truncate">{conversation.name}</p>
                            <span className="text-xs text-gray-500">{conversation.time}</span>
                          </div>
                          <p className="text-xs text-gray-500 truncate">{conversation.title}</p>
                          <p className="text-sm text-gray-700 truncate mt-1">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread > 0 && (
                          <Badge className="bg-red-500 text-white text-xs">{conversation.unread}</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-3 flex flex-col">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarFallback>{selectedConversation.avatar}</AvatarFallback>
                        </Avatar>
                        {selectedConversation.online && (
                          <Circle className="absolute bottom-0 right-0 h-3 w-3 text-green-500 fill-current" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{selectedConversation.name}</h3>
                        <p className="text-sm text-gray-500">{selectedConversation.title}</p>
                        <p className="text-xs text-gray-400">
                          {selectedConversation.online ? "Çevrimiçi" : "Son görülme: 2 saat önce"}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 p-0">
                  <ScrollArea className="h-[400px] p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.isOwn ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${message.isOwn ? "text-blue-100" : "text-gray-500"}`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Smile className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Mesajınızı yazın..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Mesajlaşmaya Başlayın</h3>
                  <p className="text-gray-500">Bir sohbet seçin veya yeni bir konuşma başlatın</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  )
}
