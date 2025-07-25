import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus, Filter, Download } from "lucide-react"

export default function UsersPage() {
  const users = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      email: "ahmet.yilmaz@kurum.gov.tr",
      department: "İnsan Kaynakları",
      role: "Yönetici",
      status: "Aktif",
      joinDate: "2024-01-15",
      completedCourses: 12,
    },
    {
      id: 2,
      name: "Fatma Demir",
      email: "fatma.demir@kurum.gov.tr",
      department: "Bilgi İşlem",
      role: "Uzman",
      status: "Aktif",
      joinDate: "2024-02-20",
      completedCourses: 8,
    },
    {
      id: 3,
      name: "Mehmet Kaya",
      email: "mehmet.kaya@kurum.gov.tr",
      department: "Mali İşler",
      role: "Personel",
      status: "Pasif",
      joinDate: "2023-11-10",
      completedCourses: 5,
    },
    {
      id: 4,
      name: "Ayşe Özkan",
      email: "ayse.ozkan@kurum.gov.tr",
      department: "Hukuk İşleri",
      role: "Uzman",
      status: "Aktif",
      joinDate: "2024-03-05",
      completedCourses: 15,
    },
  ]

  const getStatusBadge = (status: string) => {
    return status === "Aktif" ? (
      <Badge className="bg-green-100 text-green-800">Aktif</Badge>
    ) : (
      <Badge variant="secondary">Pasif</Badge>
    )
  }

  const getRoleBadge = (role: string) => {
    const colors = {
      Yönetici: "bg-purple-100 text-purple-800",
      Uzman: "bg-blue-100 text-blue-800",
      Personel: "bg-gray-100 text-gray-800",
    }
    return <Badge className={colors[role as keyof typeof colors]}>{role}</Badge>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Kullanıcı Yönetimi</h2>
            <p className="text-gray-600">T.C. İletişim Başkanlığı personelini yönetin</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Dışa Aktar
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Yeni Kullanıcı
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Kullanıcı ara..." className="pl-10" />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filtrele
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Kullanıcı Listesi</CardTitle>
            <CardDescription>Toplam {users.length} kullanıcı bulunmaktadır</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kullanıcı</TableHead>
                  <TableHead>Departman</TableHead>
                  <TableHead>Rol</TableHead>
                  <TableHead>Durum</TableHead>
                  <TableHead>Tamamlanan Eğitimler</TableHead>
                  <TableHead>Kayıt Tarihi</TableHead>
                  <TableHead>İşlemler</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={`/placeholder.svg?height=32&width=32&query=${user.name}`} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{user.department}</TableCell>
                    <TableCell>{getRoleBadge(user.role)}</TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{user.completedCourses}</span>
                        <span className="text-sm text-gray-500">eğitim</span>
                      </div>
                    </TableCell>
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Düzenle
                        </Button>
                        <Button variant="outline" size="sm">
                          Detay
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1,247</div>
                <div className="text-sm text-gray-600">Toplam Kullanıcı</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1,156</div>
                <div className="text-sm text-gray-600">Aktif Kullanıcı</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">91</div>
                <div className="text-sm text-gray-600">Pasif Kullanıcı</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">8.5</div>
                <div className="text-sm text-gray-600">Ort. Eğitim/Kullanıcı</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
