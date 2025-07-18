import type { Metadata } from "next"
import Link from "next/link"
import { getTranslations, getDirection, type Locale } from "../../lib/i18n"

// Define proper types for Next.js 15
interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return ["en", "ar", "fr"].map((locale) => ({ locale }))
}

export default async function AboutPage({ params }: PageProps) {
  // Await the params since they're now a Promise in Next.js 15
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const direction = getDirection(locale as Locale)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 to-purple-950" dir={direction}>
      <div className="container mx-auto px-4 py-6">
        <Link href={`/${locale}/`} className="text-white hover:text-teal-400">
          ← {t.navigation.home}
        </Link>
      </div>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">{t.navigation.about}</h1>
        <div className="prose prose-lg prose-invert max-w-4xl">
          <p className="text-white/80">{t.aboutPage.paragraph1}</p>
          <p className="text-white/80">{t.aboutPage.paragraph2}</p>
          <h2 className="text-2xl font-bold text-teal-400 mt-8 mb-4">{t.aboutPage.ourMission}</h2>
          <p className="text-white/80">{t.aboutPage.missionParagraph}</p>
        </div>
      </section>
    </main>
  )
}

// If you have generateMetadata, update it too
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "About Us",
    description: "Learn more about our company and mission",
    openGraph: {
      title: "About Us",
      description: "Learn more about our company and mission",
      locale: locale,
    },
  }
}
