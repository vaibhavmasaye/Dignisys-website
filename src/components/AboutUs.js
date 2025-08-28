// components/AboutUs.js (Alternative with better spacing)
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const AboutUs = () => {
    return (
        <section className="py-12 md:py-14 lg:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <div className="text-left mb-6 lg:mb-8">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#FED322] mb-2 sm:mb-3 md:mb-4">
                        About Us
                    </h4>
                </div>
                
                {/* First Row */}
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10 lg:mb-12">
                    <div className="lg:w-1/2 flex items-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black">
                            Dignisys is a start-up venture by a team of investors and professionals with multitude of experience.
                        </h2>
                    </div>
                    <div className="lg:w-1/2 flexs">
                        <p className="text-gray-600 text-base sm:text-lg md:text-lg">
                           Experience in technology, travel, logistics, shipping, software development, federal contracting, BPO management and technology enablers. 
                        </p>
                    </div>
                </div>
                
                {/* Second Row */}
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
                    <div className="lg:w-1/2">
                        <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] relative">
                            <Image
                                src="/assets/aboutus.jpg"
                                alt="About Us"
                                fill
                                className="object-cover filter grayscale" 
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex">
                        <p className="text-gray-600 text-base sm:text-lg md:text-lg">
                          Using this vast pool of knowledge and experience Dignisys has the skills and backing to deliver outstanding and consistent services to our business partners and clients, enabling them to expand their business and maximize their efficiencies to achieve their organizational mission & goals. We say its start of something big and you are welcome to join us in our journey.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;