import { useEffect, useState } from 'react';
import AnimatedCounter from './AnimatedCounter';
import Image from 'next/image';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats = [
    {
      logo: "/img1.webp",
      title: "الزيارات العضوية",
      value: 77
    },
    {
      logo: "/img2.webp",
      title: "ثورة العائد على الاستثمار",
      value: 241
    },
    {
      logo: "/img3.webp",
      title: "التفاعل",
      value: 73
    },
    {
      logo: "/img4.webp",
      title: "الظهور",
      value: 81
    }
  ];

  return (
    <div id="stats-section" className="grid grid-cols-2 gap-8 text-center my-12">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center p-6">
          <div className="w-16 h-16 mb-4">
            <Image 
              src={stat.logo}
              alt={stat.title}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <p className="text-rose-500 text-sm font-bold mb-2">{stat.title}</p>
          {isVisible && (
            <div className="text-[#0a1525]">
              <AnimatedCounter end={stat.value} suffix="%" prefix="+" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 