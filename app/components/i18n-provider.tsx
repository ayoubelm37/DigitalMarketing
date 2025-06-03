"use client"

import type React from "react"

import { useEffect } from "react"
import "../lib/i18n"

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Set initial document direction based on saved language
    const savedLanguage = localStorage.getItem("i18nextLng")
    if (savedLanguage === "ar") {
      document.documentElement.dir = "rtl"
    } else {
      document.documentElement.dir = "ltr"
    }
  }, [])

  return <>{children}</>
}
