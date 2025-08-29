// components/Testimonials.js
"use client"
import { useState, useEffect ,useCallback} from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { GoArrowRight ,GoArrowLeft} from "react-icons/go";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            content: "Working with Dignisys has been a game-changer for our business. Their team not only provided cost-effective solutions but also guided us through every step with professionalism and transparency. We’ve noticed a significant improvement in efficiency and customer satisfaction since partnering with them.",
            author: "Michael Johnson",
            image: "/assets/testimonial1.jpg"
        },
        {
            id: 2,
            content: "Working with Dignisys has been a game-changer for our business. Their team not only provided cost-effective solutions but also guided us through every step with professionalism and transparency. We’ve noticed a significant improvement in efficiency and customer satisfaction since partnering with them.",
            author: "Sarah Williams",
            image: "/assets/testimonial2.jpg"
        },
        {
            id: 3,
            content: "Working with Dignisys has been a game-changer for our business. Their team not only provided cost-effective solutions but also guided us through every step with professionalism and transparency. We’ve noticed a significant improvement in efficiency and customer satisfaction since partnering with them.",
            author: "David Chen",
            image: "/assets/testimonial1.jpg"
        },
        {
            id: 4,
            content: "Working with Dignisys has been a game-changer for our business. Their team not only provided cost-effective solutions but also guided us through every step with professionalism and transparency. We’ve noticed a significant improvement in efficiency and customer satisfaction since partnering with them.",
            author: "Emily Rodriguez",
            image: "/assets/testimonial2.jpg"
        },
        {
            id: 5,
            content: "We've been working with Dignisys for over a year now, and their services have consistently exceeded our expectations. Highly recommended for any business looking to grow.",
            author: "James Wilson",
            image: "/assets/testimonial1.jpg"
        },
        {
            id: 6,
            content: "The team at Dignisys understands business needs perfectly. They delivered a customized solution that addressed all our challenges and helped us achieve our goals.",
            author: "Lisa Thompson",
            image: "/assets/testimonial2.jpg"
        },
        {
            id: 7,
            content: "Dignisys Limited is a newly startup providing cost effective timely services to different industries, enabling them to enhance their business and maximize their efficiencies.",
            author: "Robert Brown",
            image: "/assets/testimonial1.jpg"
        }
    ];

  const nextTestimonial = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, [testimonials.length]);

   const prevTestimonial = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    const getVisibleTestimonials = () => {
        const total = testimonials.length;
        const prevIndex = (currentIndex - 1 + total) % total;
        const nextIndex = (currentIndex + 1) % total;

        return [
            testimonials[prevIndex],
            testimonials[currentIndex],
            testimonials[nextIndex]
        ];
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000);

        return () => clearInterval(interval);
    }, [nextTestimonial]);

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <section className="py-28  bg-gray-50">
            <div className="">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Testimonials
                    </h2>
                    <p className='text-center mx-auto w-full md:w-[90%] lg:w-[70%]'>
                        Dignisys Limited. is newly startup providing cost effective timely services to different industries, enabling them to enhance their business and maximize their efficiencies to achieve their organizational mission & goals.
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
                        {visibleTestimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`p-6 transition-all duration-500 transform relative flex flex-col min-h-[300px] ${index === 1
                                        ? 'md:scale-110 md:z-10 md:shadow-2xl opacity-100 rounded-xl shadow-lg bg-white block'
                                        : 'md:scale-95 opacity-0 md:opacity-100 pointer-events-none blur-[1px] hidden md:block'
                                    }`}
                            >
                                {/* Navigation Arrows - Positioned on middle card */}
                                {index === 1 && (
                                    <>
                                        <button
                                            onClick={prevTestimonial}
                                            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full p-2 shadow-lg bg-[#FED322] text-white transition-all duration-300 hover:bg-[#e6c00d] hidden md:block"
                                            aria-label="Previous testimonial"
                                        >
                                            {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg> */}
                                            <GoArrowLeft color='black'/>
                                        </button>

                                        <button
                                            onClick={nextTestimonial}
                                            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full p-2 shadow-lg bg-[#FED322] text-white transition-all duration-300 hover:bg-[#e6c00d] hidden md:block"
                                            aria-label="Next testimonial"
                                        >
                                           <GoArrowRight  color='black'/>
                                        </button>
                                    </>
                                )}

                                {/* Mobile Navigation Arrows - Visible on small screens */}
                                <div className="flex justify-between items-center mb-4 md:hidden">
                                    <button
                                        onClick={prevTestimonial}
                                        className="rounded-full p-2 bg-[#FED322] text-white"
                                        aria-label="Previous testimonial"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextTestimonial}
                                        className="rounded-full p-2 bg-[#FED322] text-white"
                                        aria-label="Next testimonial"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Top Quote Icon */}
                                <div className="text-left mb-4">
                                    <FaQuoteLeft size={40} className={`${index === 1 ? 'text-gray-300' : 'text-[#FED322]'}`} />
                                </div>

                                {/* Testimonial Content */}
                                <div className="flex-grow">
                                    <p className="text-gray-700 text-base leading-relaxed text-center">
                                        {testimonial.content}
                                    </p>
                                </div>

                                {/* Author Info - Fixed at bottom with image 50% outside */}
                                <div className="mt-auto relative">
                                    {/* Author Name */}
                                    <div className="text-center mb-2">
                                        <h4 className={`text-lg font-semibold ${index === 1 ? 'text-gray-900' : 'text-gray-500'}`}>
                                            {testimonial.author}
                                        </h4>
                                    </div>

                                    {/* Author Image - Positioned 50% outside the bottom */}
                                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                                        <div className={`w-18 h-18 rounded-full p-1 bg-white ${index === 1 ? 'border-2 border-[#FED322]' : 'border-2 border-gray-300'}`}>
                                            <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Quote Icon */}
                                <div className="absolute bottom-4 right-6">
                                    <FaQuoteRight size={40} className={`${index === 1 ? 'text-gray-300' : 'text-[#FED322]'}`} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Navigation Dots */}
                    <div className="flex justify-center space-x-2 mt-12 md:hidden">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#FED322]' : 'bg-gray-300'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;