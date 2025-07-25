import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"


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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
 
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
