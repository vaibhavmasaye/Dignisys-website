// components/Footer.js
import Image from 'next/image';
import { FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
    return (
     <footer className="text-black bg-white">
  <div className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-18">
    {/* Logo */}
    <div className="mb-6 sm:mb-8 md:mb-0">
      <div className="mb-3 sm:mb-4">
        <Image
          src="/assets/logo.png"
          alt="DIGNISYS Logo"
          width={150}
          height={50}
          className="h-8 sm:h-9 md:h-10 w-auto"
        />
      </div>
    </div>

    <div className="flex justify-between flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10">
      {/* Important Links */}
      <div className="mb-6 sm:mb-8 md:mb-0">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Important Links</h3>
        <ul className="space-y-1 sm:space-y-2">
          {['Home', 'Product Engineering', 'About Us', 'Mission & Vision', 'Leadership Team', 'Career With Us', 'Contact Us'].map((item) => (
            <li key={item}>
              <a href="#" className="text-black hover:text-gray-400 transition-colors text-sm sm:text-base">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Our Services */}
      <div className="mb-6 sm:mb-8 md:mb-0">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Our Services</h3>
        <ul className="space-y-1 sm:space-y-2">
          {['Logistics', 'Travel', 'BPO', 'KPO', 'Healthcare', 'Software Solution'].map((item) => (
            <li key={item}>
              <a href="#" className="text-black hover:text-gray-400 transition-colors text-sm sm:text-base">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="mb-6 sm:mb-8 md:mb-0">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Links</h3>
        <ul className="space-y-1 sm:space-y-2">
          {['Management', 'Terms Condition', 'Privacy Policy'].map((item) => (
            <li key={item}>
              <a href="#" className="text-black hover:text-gray-400 transition-colors text-sm sm:text-base">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Address */}
      <div className="mb-6 sm:mb-8 md:mb-0">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Address</h3>

        <div className="mb-3 sm:mb-4">
          <p className="font-medium text-sm sm:text-base">USA</p>
          <p className="text-black text-xs sm:text-sm">Dignisys. Inc.</p>
          <p className="text-black text-xs sm:text-sm">8 The Green STE R, Dover, DE 19901</p>

          <div className="mt-2 flex flex-col sm:flex-row gap-2 sm:gap-4">
            <div className='flex gap-2 items-center'>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                <MdEmail color="#FED322" className="text-xs sm:text-sm" />
              </div>
              <a href="mailto:contact@dignisys.com" className="text-black hover:text-gray-400 transition-colors text-xs sm:text-sm break-words">contact@dignisys.com</a>
            </div>
            <div className='flex gap-2 items-center'>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                <IoCallSharp color="#FED322" className="text-xs sm:text-sm" />
              </div>
              <a href="tel:+15128170605" className="text-black hover:text-gray-400 transition-colors text-xs sm:text-sm whitespace-nowrap">+1 (512) 817-0605</a>
            </div>
          </div>
        </div>

        <div>
          <p className="font-medium text-sm sm:text-base">INDIA</p>
          <p className="text-black text-xs sm:text-sm">Dignisys Limited</p>
          <p className="text-black text-xs sm:text-sm">A-401, Tower A, Bestech Business Tower, Sector – 66,</p>
          <p className="text-black text-xs sm:text-sm">Monat 800626, PUNJ68</p>
          <div className="mt-2 flex flex-col sm:flex-row gap-2 sm:gap-4">
            <div className='flex gap-2 items-center'>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                <MdEmail color="#FED322" className="text-xs sm:text-sm" />
              </div>
              <a href="mailto:contact@dignisys.com" className="text-black hover:text-gray-400 transition-colors text-xs sm:text-sm break-words">contact@dignisys.com</a>
            </div>
            <div className='flex gap-2 items-center'>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                <IoCallSharp color="#FED322" className="text-xs sm:text-sm" />
              </div>
              <a href="tel:+911724735486" className="text-black hover:text-gray-400 transition-colors text-xs sm:text-sm whitespace-nowrap">+91 172 473-5486</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright and Social Icons */}
    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#B1B1B1] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
      <p className="text-center text-black text-xs sm:text-sm">
        © Copyright 2021-2022. All Rights Reserved
      </p>
      <div className='flex justify-between w-full sm:w-auto sm:gap-3 md:gap-4 gap-4'>
        <a href="#" className="text-[#42464B] hover:text-[#FED322] transition-colors">
          <FaLinkedin className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5" />
        </a>
        <a href="#" className="text-[#42464B] hover:text-[#FED322] transition-colors">
          <FaFacebook className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5" />
        </a>
        <a href="#" className="text-[#42464B] hover:text-[#FED322] transition-colors">
          <FaXTwitter className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5" />
        </a>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;