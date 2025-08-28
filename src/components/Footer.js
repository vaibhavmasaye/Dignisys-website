// components/Footer.js
import Image from 'next/image';
import { FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="text-black bg-white">
            <div className=" py-8 px-18">
                {/* Logo */}
                <div className="mb-8 md:mb-0 md:w-1/4">
                    <div className="mb-4">
                        <Image
                            src="/assets/logo.png"
                            alt="DIGNISYS Logo"
                            width={150}
                            height={50}
                            className="h-10 w-auto"
                        />
                    </div>
                </div>

                <div className="flex justify-between flex-col lg:flex-row">
                    {/* Important Links */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Important Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'Product Engineering', 'About Us', 'Mission & Vision', 'Leadership Team', 'Career With Us', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-black hover:text-gray-400 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {['Logistics', 'Travel', 'BPO', 'KPO', 'Healthcare', 'Software Solution'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-black hover:text-gray-400 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Links</h3>
                        <ul className="space-y-2">
                            {['Management', 'Terms Condition', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-black hover:text-gray-400 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*  Address */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Address</h3>

                        <div className="mb-4">
                            <p className="font-medium">USA</p>
                            <p className="text-black">Dignisys. Inc.</p>
                            <p className="text-black">8 The Green STE R, Dover, DE 19901</p>

                              <div className="mt-2 flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <div className='flex gap-2 items-center'>
                                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                                        <MdEmail color="#FED322" size={16} />
                                    </div>
                                    <a href="mailto:contact@dignisys.com" className="text-black hover:text-gray-400 transition-colors text-sm break-words">contact@dignisys.com</a>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                                        <IoCallSharp color="#FED322" size={16} />
                                    </div>
                                    <a href="tel:+15128170605" className="text-black hover:text-gray-400 transition-colors">+1 (512) 817-0605</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="font-medium">INDIA</p>
                            <p className="text-black">Dignisys Limited</p>
                            <p className="text-black">A-401, Tower A, Bestech Business Tower, Sector – 66,</p>
                            <p className="text-black">Monat 800626, PUNJ68</p>
                            <div className="mt-2 flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <div className='flex gap-2 items-center'>
                                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                                        <MdEmail color="#FED322" size={16} />
                                    </div>
                                    <a href="mailto:contact@dignisys.com" className="text-black hover:text-gray-400 transition-colors text-sm break-words">contact@dignisys.com</a>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                                        <IoCallSharp color="#FED322" size={16} />
                                    </div>
                                    <a href="tel:+911724735486" className="text-black hover:text-gray-400 transition-colors text-sm whitespace-nowrap">+91 172 473-5486</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links and Address */}

                </div>

                {/* Copyright for mobile */}
                              <div className="mt-8 pt-6 border-t border-[#B1B1B1] flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-center text-black text-xs">
                        © Copyright 2021-2022. All Rights Reserved
                    </p>
                    <div className='flex justify-between w-full sm:w-auto sm:gap-4 gap-6'>
                        <a href="#" className="text-[#42464B] hover:text-[#FED322] transition-colors">
                            <FaLinkedin size={25} />
                        </a>
                        <a href="#" className="text-[#42464B] hover:text-[#FED322] transition-colors">
                            <FaFacebook size={25}/>
                        </a>
                        <a href="#" className="text-[#42464B] hover:text-[#FED322] transition-colors">
                            <FaXTwitter size={25}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;