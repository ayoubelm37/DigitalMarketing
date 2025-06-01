import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    img: "/img1.webp",
    title: "Boost Engagement, Multiply Profits!",
    text: (
      <>
        We enhance client engagement on social media with our digital marketing solutions. The secret? Engaging content and intelligent targeting, key elements of our digital marketing solutions, make the difference.<br /><br />
        Experience growth in audience interaction and brand visibility online with our specialized digital marketing solutions.<br /><br />
        <span className="font-bold">Each campaign is an opportunity for growth and profit, showcasing our digital marketing solutions.</span>
      </>
    ),
  },
  {
    img: "/img2.webp",
    title: "Optimize Your Revenue: Profitability, Simplified!",
    text: (
      <>
        We are connoisseurs in forging a dynamic online presence for our clients, integrating our digital marketing solutions into a holistic strategy. This approach surpasses mere online visibility; it cultivates a digital reputation that resonates with reliability and active participation.<br /><br />
        <span className="font-bold">Each campaign is an opportunity for growth and profit, showcasing our digital marketing solutions.</span>
      </>
    ),
  },
  {
    img: "/img3.webp",
    title: "Elevate Your Brand, Conquer the Digital Realm!",
    text: (
      <>
        We are experts in creating a robust online presence for our clients. Our strategy goes beyond mere visibility; we build a digital reputation that inspires trust and engagement.<br /><br />
        <span className="font-bold">Your brand doesn&apos;t just exist online, it thrives.</span>
      </>
    ),
  },
  {
    img: "/img4.webp",
    title: "Make a Lasting Impression, Enduringly!",
    text: (
      <>
        Your brand doesn&apos;t just exist online, it thrives. We are adept at the art of distinction in branding, using our digital marketing solutions to craft unparalleled visuals that embody the core of your brand. This approach renders your brand indelible in a crowded marketplace.<br /><br />
        <span className="font-bold">We bring your vision to life, ensuring that your image makes an impact and endures.</span>
      </>
    ),
  },
];

export default function DigitalMarketingSolutions() {
  return (
    <section className="relative  py-20 px-4 z-20 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1525] mb-4 leading-tight">
          Digital Marketing Solutions: Guaranteeing Tangible Results for Your Business
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-[#0a1525] rounded-2xl shadow-lg p-8 flex flex-col items-start justify-between min-h-[420px]">
            <Image src={card.img} alt={card.title} width={400} height={220} className="rounded-lg mb-6 w-full object-cover" />
            <h3 className="text-2xl font-bold text-rose-500 mb-4 text-left leading-snug">{card.title}</h3>
            <p className="text-white/90 text-base mb-6 text-left">{card.text}</p>
            <span className="text-rose-500 text-2xl">↗</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="/contact"
          className="bg-[#ed1c24] hover:bg-[#c81018] text-white font-bold text-lg px-12 py-4 rounded-lg shadow transition-colors duration-300"
        >
          Contact Us
        </Link>
      </div>
      {/* Zigzag SVG shape at the bottom */}
      <div className="absolute left-0 bottom-0 w-full pointer-events-none">
        <svg viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <polygon 
            points="0,80 480,60 960,90 1440,60 1920,100 1920,120 0,120" 
            fill=""  // <-- light gray, adjust as needed
          />
          <polyline 
            points="0,80 480,60 960,90 1440,60 1920,100" 
            stroke="#ed1c24" 
            strokeWidth="4" 
            fill="none" 
          />
        </svg>
      </div>
    </section>
  );
}
