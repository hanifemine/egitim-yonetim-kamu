import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <main className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          T.C. İletişim Başkanlığı Eğitim Yönetim Sistemine Hoş Geldiniz
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Modern kamu yönetimi için geliştirilmiş eğitim platformu.
        </p>
        <div className="space-x-4">
          <Link href="/login">
            <Button size="lg">Giriş Yap</Button>
          </Link>
          <Link href="/register">
            <Button size="lg" variant="outline">
              Kayıt Ol
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
