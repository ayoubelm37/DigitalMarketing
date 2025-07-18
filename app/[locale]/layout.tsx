import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { getDirection, getTranslations, Locale } from '../lib/i18n'

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

export async function generateStaticParams() {
  return ['en', 'ar', 'fr'].map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: Promise<Record<string, string>>
}) {
  const resolvedParams = await params
  const direction = getDirection(resolvedParams.locale as Locale)
  const t = getTranslations(resolvedParams.locale as Locale)
  return (
    <html lang={resolvedParams.locale} dir={direction}>
      <head>
        <title>{t.title || "Hela | Digital Marketing Agency"}</title>
        <meta name="description" content="Leading digital marketing agency helping businesses grow online" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
