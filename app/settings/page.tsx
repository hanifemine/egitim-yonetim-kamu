import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Shield, Bell, Database, Users } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Sistem Ayarları</h2>
          <p className="text-gray-600">T.C. İletişim Başkanlığı sistem yapılandırması ve tercihler</p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general">Genel</TabsTrigger>
            <TabsTrigger value="users">Kullanıcılar</TabsTrigger>
            <TabsTrigger value="security">Güvenlik</TabsTrigger>
            <TabsTrigger value="notifications">Bildirimler</TabsTrigger>
            <TabsTrigger value="integrations">Entegrasyonlar</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sistem Bilgileri</CardTitle>
                  <CardDescription>Temel sistem yapılandırması</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="system-name">Sistem Adı</Label>
                    <Input id="system-name" defaultValue="Kamu Eğitim Yönetim Sistemi" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Kurum Adı</Label>
                    <Input id="organization" defaultValue="T.C. Örnek Bakanlığı" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Açıklama</Label>
                    <Textarea
                      id="description"
                      defaultValue="Kamu kurumu personeli için geliştirilmiş açık kaynak eğitim yönetim sistemi"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Saat Dilimi</Label>
                    <Select defaultValue="turkey">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="turkey">Türkiye (UTC+3)</SelectItem>
                        <SelectItem value="utc">UTC (UTC+0)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sistem Tercihleri</CardTitle>
                  <CardDescription>Genel sistem davranışları</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Otomatik Yedekleme</Label>
                      <p className="text-sm text-gray-500">Günlük otomatik veri yedeklemesi</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Sistem Logları</Label>
                      <p className="text-sm text-gray-500">Detaylı sistem loglarını kaydet</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Performans İzleme</Label>
                      <p className="text-sm text-gray-500">Sistem performansını izle</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Oturum Zaman Aşımı (dakika)</Label>
                    <Input id="session-timeout" type="number" defaultValue="30" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* User Settings */}
          <TabsContent value="users">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Kullanıcı Yönetimi</span>
                  </CardTitle>
                  <CardDescription>Kullanıcı kayıt ve yetkilendirme ayarları</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Otomatik Kullanıcı Onayı</Label>
                      <p className="text-sm text-gray-500">Yeni kullanıcıları otomatik onayla</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>E-posta Doğrulaması</Label>
                      <p className="text-sm text-gray-500">Kayıt sırasında e-posta doğrula</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="default-role">Varsayılan Rol</Label>
                    <Select defaultValue="user">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">Kullanıcı</SelectItem>
                        <SelectItem value="instructor">Eğitmen</SelectItem>
                        <SelectItem value="admin">Yönetici</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Parola Politikası</CardTitle>
                  <CardDescription>Güvenli parola gereksinimleri</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="min-length">Minimum Uzunluk</Label>
                    <Input id="min-length" type="number" defaultValue="8" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Büyük Harf Zorunlu</Label>
                      <p className="text-sm text-gray-500">En az bir büyük harf</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Sayı Zorunlu</Label>
                      <p className="text-sm text-gray-500">En az bir rakam</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Özel Karakter</Label>
                      <p className="text-sm text-gray-500">En az bir özel karakter</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Güvenlik Ayarları</span>
                  </CardTitle>
                  <CardDescription>Sistem güvenliği ve erişim kontrolü</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>İki Faktörlü Kimlik Doğrulama</Label>
                      <p className="text-sm text-gray-500">2FA zorunlu kıl</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>IP Kısıtlaması</Label>
                      <p className="text-sm text-gray-500">Belirli IP adreslerinden erişim</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-attempts">Maksimum Giriş Denemesi</Label>
                    <Input id="max-attempts" type="number" defaultValue="5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lockout-duration">Hesap Kilitleme Süresi (dakika)</Label>
                    <Input id="lockout-duration" type="number" defaultValue="15" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Veri Güvenliği</CardTitle>
                  <CardDescription>Veri koruma ve şifreleme ayarları</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Veri Şifreleme</Label>
                      <p className="text-sm text-gray-500">Veritabanı şifrelemesi aktif</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>SSL/TLS Zorunlu</Label>
                      <p className="text-sm text-gray-500">HTTPS bağlantısı zorunlu</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Güvenlik Logları</Label>
                      <p className="text-sm text-gray-500">Güvenlik olaylarını kaydet</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Bildirim Ayarları</span>
                </CardTitle>
                <CardDescription>E-posta ve sistem bildirimleri</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">E-posta Bildirimleri</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Yeni Kullanıcı Kaydı</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Eğitim Tamamlama</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Sistem Güncellemeleri</Label>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Güvenlik Uyarıları</Label>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Sistem Bildirimleri</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Yedekleme Durumu</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Performans Uyarıları</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Hata Bildirimleri</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Bakım Bildirimleri</Label>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-4 border-t">
                  <h4 className="font-medium">E-posta Yapılandırması</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="smtp-server">SMTP Sunucusu</Label>
                      <Input id="smtp-server" placeholder="smtp.kurum.gov.tr" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-port">Port</Label>
                      <Input id="smtp-port" type="number" defaultValue="587" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-username">Kullanıcı Adı</Label>
                      <Input id="smtp-username" placeholder="sistem@kurum.gov.tr" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-password">Parola</Label>
                      <Input id="smtp-password" type="password" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations */}
          <TabsContent value="integrations">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="h-5 w-5" />
                    <span>Veritabanı Entegrasyonu</span>
                  </CardTitle>
                  <CardDescription>Harici veritabanı bağlantıları</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="db-host">Veritabanı Sunucusu</Label>
                    <Input id="db-host" defaultValue="localhost" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="db-name">Veritabanı Adı</Label>
                    <Input id="db-name" defaultValue="egitim_sistemi" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="db-type">Veritabanı Türü</Label>
                    <Select defaultValue="postgresql">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="postgresql">PostgreSQL</SelectItem>
                        <SelectItem value="mysql">MySQL</SelectItem>
                        <SelectItem value="mongodb">MongoDB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Bağlantıyı Test Et
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>API Entegrasyonları</CardTitle>
                  <CardDescription>Harici sistem entegrasyonları</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">LDAP/Active Directory</h4>
                      <p className="text-sm text-gray-500">Kullanıcı kimlik doğrulaması</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">İK Sistemi</h4>
                      <p className="text-sm text-gray-500">Personel bilgileri senkronizasyonu</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">E-İmza Sistemi</h4>
                      <p className="text-sm text-gray-500">Sertifika imzalama</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="flex justify-end pt-6">
          <Button className="flex items-center space-x-2">
            <Save className="h-4 w-4" />
            <span>Ayarları Kaydet</span>
          </Button>
        </div>
      </main>
    </div>
  )
}
