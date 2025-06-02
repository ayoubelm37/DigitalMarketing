import ScrollingLogos from "./scrolling-logos"

export default function TrustedBy() {
  const logos = [
    {
      src: "/1.jpg",
      alt: "Company 1",
      width: 120,
      height: 60,
    },
    {
      src: "/2.jpg",
      alt: "Company 2",
      width: 120,
      height: 60,
    },
    {
      src: "/3.jpg",
      alt: "Company 3",
      width: 120,
      height: 60,
    },
    {
      src: "/4.jpg",
      alt: "Company 4",
      width: 120,
      height: 60,
    },
    {
      src: "/5.jpg",
      alt: "Company 5",
      width: 120,
      height: 60,
    },
    {
      src: "/6.jpg",
      alt: "Company 6",
      width: 120,
      height: 60,
    },
    {
      src: "/7.png",
      alt: "Company 7",
      width: 120,
      height: 60,
    },
    {
      src: "/8.jpeg",
      alt: "Company 8",
      width: 120,
      height: 60,
    },
  ]

  return (
    <div className="flex flex-row items-center justify-center mt-12 space-x-8 w-full max-w-6xl mx-auto">
      <h2 className="text-black text-2xl font-bold tracking-wide whitespace-nowrap mr-8  shrink-0">
        They Trust Us
      </h2>
      <div className="overflow-x-auto">
        <ScrollingLogos logos={logos} speed={30} />
      </div>
    </div>
  )
} 