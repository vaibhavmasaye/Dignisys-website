// components/HeroSection.js
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Image Container with Limited Height */}
      <div className="absolute inset-0 z-0 h-[70vh] sm:h-[75vh] md:h-[80vh]">
        <Image
          src="/assets/heroSection.jpg"
          alt="Contact Us Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 my-4 sm:my-6 md:my-8">
        <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-10 justify-between">
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-6/12 text-black text-center lg:text-left mb-8 lg:mb-10">
            <h1 className="text-xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight md:leading-snug">
              Accelerating Your Business with Integrated Tech, BPM & Logistics Solutions.
            </h1>
            <h3 className="text-base xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl mb-4 sm:mb-5 md:mb-6 leading-relaxed md:leading-snug">
              Dignisys bridges software development, process optimization, travel, logistics, BPO/KPO, and healthcare services—empowering organizations to operate smarter, scale faster, and embrace an AI-ready future.
            </h3>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-[#FED322] text-black text-sm sm:text-base font-semibold transition-colors duration-300 rounded-full hover:bg-[#f8c90e] shadow-md w-auto">
              Get In Touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;