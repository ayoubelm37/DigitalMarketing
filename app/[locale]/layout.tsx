import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { getDirection, Locale } from '../lib/i18n'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hela | Digital Marketing Agency",
  description: "Leading digital marketing agency helping businesses grow online",
}

export async function generateStaticParams() {
  return ['en', 'ar', 'fr'].map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode,
  params: { locale: Locale }
}>) {
  const direction = getDirection(locale)
  return (
    <html lang={locale} dir={direction}>
      <head >
         <link rel="icon" href="/logoo.png" />
       
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 