// components/AboutUs.js
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const AboutUs = () => {
    return (
        <section className="py-16 md:py-16 lg:py-18 bg-white">
            <div className="container mx-auto px-10 sm:px-10 lg:px-10 xl:px-10 w-full">
                <div className="text-left mb-6 lg:mb-8">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#FED322] mb-2 sm:mb-3 md:mb-4">
                        About Us
                    </h4>
                </div>
                
                <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black lg:w-1/2">
                        Dignisys is a start-up venture by a team of investors and professionals with multitude of experience.
                    </h2>
                    <p className="text-gray-600 text-lg lg:w-1/2">
                       Experience in technology, travel, logistics, shipping, software development, federal contracting, BPO management and technology enablers. 
                    </p>
                </div>
                
               
                
                <div className="flex flex-col lg:flex-row justify-between gap-8">
               <div className="w-[550px] h-[400px] sm:h-[400px] md:h-[400px] relative">
                            <Image
                                src="/assets/aboutus.jpg"
                                alt="About Us"
                                fill
                                className="object-cover filter grayscale" 
                            />
                        </div>
                    <p className="text-gray-600 text-lg lg:w-1/2">
                      Using this vast pool of knowledge and experience Dignisys has the skills and backing to deliver outstanding and consistent services to our business partners and clients, enabling them to expand their business and maximize their efficiencies to achieve their organizational mission & goals. We say its start of something big and you are welcome to join us in our journey.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;