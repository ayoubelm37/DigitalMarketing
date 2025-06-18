import Link from "next/link"
import { getTranslations, getDirection, type Locale } from '../../lib/i18n'

export async function generateStaticParams() {
  return ['en', 'ar', 'fr'].map((locale) => ({ locale }))
}

export default function ContactPage({ params: { locale } }: { params: { locale: Locale } }) {
  const t = getTranslations(locale)
  const direction = getDirection(locale)
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 to-purple-950" dir={direction}>
      {/* Navigation placeholder */}
      <div className="container mx-auto px-4 py-6">
        <Link href={`/${locale}/`} className="text-white hover:text-teal-400">
          ← {t.navigation.home}
        </Link>
      </div>

      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">{t.navigation.contact}</h1>

        <div className="bg-slate-900/50 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  {t.contactPage.name}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  {t.contactPage.email}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-white mb-2">
                {t.contactPage.subject}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">
                {t.contactPage.message}
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              {t.contactPage.sendMessage}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
} 