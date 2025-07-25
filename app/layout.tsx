import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "T.C. İletişim Başkanlığı - Eğitim Yönetim Sistemi",
  description: "Kamu personeli için geliştirilmiş açık kaynak eğitim yönetim sistemi",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
