// components/AboutUs.js
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const AboutUs = () => {
    return (
        <section className="py-12 md:py-14 lg:py-16 bg-white test">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <div className="text-left mb-6 lg:mb-8">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#FED322] mb-2 sm:mb-3 md:mb-4">
                        About Us
                    </h4>
                </div>
                
                <div className="test flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10 lg:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black lg:w-1/2">
                        Dignisys is a start-up venture by a team of investors and professionals with multitude of experience.
                    </h2>
                    <p className="test text-gray-600 text-base sm:text-lg md:text-lg lg:w-1/2">
                       Experience in technology, travel, logistics, shipping, software development, federal contracting, BPO management and technology enablers. 
                    </p>
                </div>
                
                <div className="test flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-10">
                    <div className="w-full lg:w-[550px] h-[300px] sm:h-[350px] md:h-[400px] relative">
                        <Image
                            src="/assets/aboutus.jpg"
                            alt="About Us"
                            fill
                            className="object-cover filter grayscale" 
                        />
                    </div>
                    <p className="test text-gray-600 text-base sm:text-lg md:text-lg lg:w-1/2">
                      Using this vast pool of knowledge and experience Dignisys has the skills and backing to deliver outstanding and consistent services to our business partners and clients, enabling them to expand their business and maximize their efficiencies to achieve their organizational mission & goals. We say its start of something big and you are welcome to join us in our journey.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;