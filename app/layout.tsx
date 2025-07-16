import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { getTranslations, getDirection } from './lib/i18n'


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hela | Digital Marketing Agency",
  description: "Leading digital marketing agency helping businesses grow online",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const direction = getDirection(locale as 'en' | 'ar' | 'fr')
  const t = getTranslations(locale as 'en' | 'ar' | 'fr')
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
