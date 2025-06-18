import en from '../locales/en.json'
import ar from '../locales/ar.json'
import fr from '../locales/fr.json'

const translations = {
  en,
  ar,
  fr,
}

export type Locale = 'en' | 'ar' | 'fr'

export type Translations = typeof en

export function getTranslations(locale: Locale): Translations {
  return translations[locale]
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr'
} 