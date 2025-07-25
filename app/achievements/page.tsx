import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <main className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Başarılarım</h1>
        <Card>
          <CardHeader>
            <CardTitle>Başarılar</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Burada başarılarınız listelenecektir.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
