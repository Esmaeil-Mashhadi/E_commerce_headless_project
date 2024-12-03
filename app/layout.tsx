import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Layout from "@/components/layout/Layout"
import { yekan } from "@/utils/fonts"

export const metadata: Metadata = {
  title: "فروشگاه قاطی شاپ",
  description: "همراه همیشگی شما",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
