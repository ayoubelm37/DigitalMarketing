import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const ceoDescription = `With over a decade of experience in digital marketing, Houssam has helped hundreds of businesses achieve their goals. His vision and leadership drive our agency's success.`;

export default function AboutCEO() {
  return (
    <section className="w-full relative  py-20 px-4 z-20 overflow-hidden max-w-6xl mx-auto my-12 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1525] mb-8 text-center">
        With our expertise: turn your vision into tangible reality !
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-xl shadow-lg p-8">
        {/* Left column for the image */}
        <div className="flex justify-center md:justify-start">
          {/* Replace with actual image path and alt text */}
          <Image
            src="/houssam.jpeg"
            alt="Houssam"
            width={300}
            height={300}
            className="rounded-lg w-full max-w-sm object-cover"
          />
        </div>

        {/* Right column for the text content */}
        <div className="flex flex-col justify-center">
          <h3 className="text-rose-500 text-2xl font-bold mb-2">Houssam</h3>
          <p className="text-[#0a1525] text-lg font-semibold mb-4">CEO & Fondateur</p>
          <p className="text-gray-700 mb-4">
            {ceoDescription}
          </p>
          <p className="text-rose-500 text-sm font-bold mb-2">Contact Us</p>
          <p className="text-[#0a1525] text-xl font-bold mb-4">+212 635-589948</p>
          <Link href="https://www.linkedin.com/in/elakratihoussam/" className="text-[#0a1525] hover:text-rose-500 transition-colors">
            <FaLinkedin className="text-3xl" />
          </Link>
        </div>
      </div>
    </section>
  );
} 