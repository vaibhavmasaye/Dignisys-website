// components/CompanySuccess.js
"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CompanySuccess = () => {
  const stats = [
    { id: 1, title: 'Custom Apps', value: 200 },
    { id: 2, title: 'Happy Customers', value: 45 },
    { id: 3, title: 'Hours of Work', value: 3560 },
    { id: 4, title: 'Development Awards', value: 750 },
  ];

  const [animatedValues, setAnimatedValues] = useState(
    stats.map(() => 0) // start from 0
  );

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 10000; // ms
      const stepTime = Math.max(Math.floor(duration / end), 20);

      const timer = setInterval(() => {
        start += 1;
        setAnimatedValues((prev) => {
          const newValues = [...prev];
          newValues[i] = start;
          return newValues;
        });
        if (start >= end) clearInterval(timer);
      }, stepTime);
    });
  }, []);

  return (
    <>
      {/* Title */}
      <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mx-auto text-center">
        Company Success
      </h2>

      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Image - Smaller + Centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[45%] h-auto">
          <Image
            src="/assets/map.png"
            alt="Company Success Background"
            width={800}
            height={600}
            className="object-contain mx-auto"
            priority
          />
        </div>

        {/* Stats Content */}
        <div className="relative z-10 w-full mx-auto mt-12 sm:mt-16 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={stat.id} className="group">
                <div
                  className="text-4xl md:text-5xl text-gray-800 mb-3 font-bold flip"
                >
                  {animatedValues[i]}
                </div>
                <p className="text-gray-600 font-medium">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .flip {
          display: inline-block;
          animation: flipIn 0.5s ease-in-out;
        }
        @keyframes flipIn {
          0% {
            transform: rotateX(90deg);
            opacity: 0;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default CompanySuccess;
