// components/ChooseUs.js

import { FaArrowRight } from "react-icons/fa6";

export default function ChooseUs() {
    return (
        <section className="py-8 md:py-12 lg:py-16 bg-[#163053]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 xl:gap-16">
                    {/* Left Column - Text Content */}
                    <div className="w-full lg:w-2/5">
                        <div className="text-left mb-6 lg:mb-8">
                            <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#FED322] mb-2 sm:mb-3 md:mb-4">
                                OUR KEY USP&apos;S
                            </h4>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                                Why Choose Us
                            </h2>
                        </div>
                    </div>

                    {/* Right Column - Feature List */}
                    <div className="w-full lg:w-3/5">
                        <div className="space-y-8 sm:space-y-10 md:space-y-12">
                            {/* Feature 1 */}
                            <div className="w-full">
                                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-3 md:gap-4">
                                    <FaArrowRight color="#FED322" size={25} />
                                    Broad Expertise & Versatility
                                </h4>
                                <p className="text-xs sm:text-sm md:text-base text-gray-300 ml-6 sm:ml-7 md:ml-10">
                                    Founded by professionals with deep experience across technology, travel, logistics, shipping, software development, federal contracting, BPO management, and tech enablement — enabling them to deliver consistent, high-quality services tailored to diverse business needs.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div>
                                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-3 md:gap-4">
                                    <FaArrowRight color="#FED322" size={25} />
                                    Cost-Effective & Efficient Services
                                </h4>
                                <p className="text-xs sm:text-sm md:text-base text-gray-300 ml-6 sm:ml-7 md:ml-10">
                                    A startup committed to offering cost-effective, timely solutions that help clients enhance business operations and achieve their objectives with efficiency.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div>
                                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-3 md:gap-4">
                                    <FaArrowRight color="#FED322" size={25} />
                                    Technology-Driven Execution
                                </h4>
                                <p className="text-xs sm:text-sm md:text-base text-gray-300 ml-6 sm:ml-7 md:ml-10">
                                    Our logistics network leverages clear, effective communication, process optimization, and modern tech to maximize freight efficiency and reduce back-haul wastage.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div>
                                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-3 md:gap-4">
                                    <FaArrowRight color="#FED322" size={25} />
                                    24/7 Support & Convenience
                                </h4>
                                <p className="text-xs sm:text-sm md:text-base text-gray-300 ml-6 sm:ml-7 md:ml-10">
                                    Positioned as a cutting-edge travel reservation service, offering affordable pricing, safe booking systems, and round-the-clock travel agent support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}