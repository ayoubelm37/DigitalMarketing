import Link from "next/link"
import { getTranslations, getDirection, type Locale } from '../../lib/i18n'

export async function generateStaticParams() {
  return ['en', 'ar', 'fr'].map((locale) => ({ locale }))
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const t = getTranslations(params.locale as Locale)
  const direction = getDirection(params.locale as Locale)
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 to-purple-950" dir={direction}>
      {/* Navigation placeholder - in a real app, you'd create a shared navigation component */}
      <div className="container mx-auto px-4 py-6">
        <Link href={`/${params.locale}/`} className="text-white hover:text-teal-400">
          ← {t.navigation.home}
        </Link>
      </div>

      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">{t.navigation.about}</h1>
        <div className="prose prose-lg prose-invert max-w-4xl">
          <p className="text-white/80">
            {t.aboutPage.paragraph1}
          </p>
          <p className="text-white/80">
            {t.aboutPage.paragraph2}
          </p>
          <h2 className="text-2xl font-bold text-teal-400 mt-8 mb-4">{t.aboutPage.ourMission}</h2>
          <p className="text-white/80">
            {t.aboutPage.missionParagraph}
          </p>
        </div>
      </section>
    </main>
  )
} 