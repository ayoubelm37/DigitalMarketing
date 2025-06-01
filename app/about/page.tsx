import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 to-purple-950">
      {/* Navigation placeholder - in a real app, you'd create a shared navigation component */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="text-white hover:text-teal-400">
          ← Back to Home
        </Link>
      </div>

      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
        <div className="prose prose-lg prose-invert max-w-4xl">
          <p className="text-white/80">
            Founded in 2015, YourBrand is a leading digital marketing agency dedicated to helping businesses achieve
            their online goals. Our team of experts specializes in creating tailored digital strategies that drive
            results.
          </p>
          <p className="text-white/80">
            With a focus on innovation and data-driven approaches, we&apos;ve helped over 600 businesses increase their
            online visibility, generate more leads, and boost their revenue through effective digital marketing
            campaigns.
          </p>
          <h2 className="text-2xl font-bold text-teal-400 mt-8 mb-4">Our Mission</h2>
          <p className="text-white/80">
            Our mission is to empower businesses with the digital tools and strategies they need to thrive in today&apos;s
            competitive online landscape. We believe in transparency, measurable results, and building long-term
            partnerships with our clients.
          </p>
        </div>
      </section>
    </main>
  )
}