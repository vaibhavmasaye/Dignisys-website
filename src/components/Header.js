// components/Header.js
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Navbar from './Navbar';

export default function Header() {
  return (
    <>
      {/* Top Contact Bar - Not sticky */}
      <header className="w-full bg-white text-[#0A0A0A] px-4 sm:px-6 md:px-8 lg:px-10 relative z-40">
        <div className="w-full flex flex-col sm:flex-row sm:justify-end sm:items-center gap-2 sm:gap-4 md:gap-6 bg-white py-2 sm:py-3 px-3 sm:px-4 md:px-6 sm:h-12 md:h-14">
          
          {/* Email */}
          <div className="flex items-center gap-2 sm:mr-0 mt-4 sm:mt-0">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
              <MdEmail color="#FED322" className="text-xs sm:text-sm md:text-sm" />
            </div>
            <span className="text-xs sm:text-sm md:text-sm break-words">contact@dignisys.com</span>
          </div>
          
          {/* Phones */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 md:gap-4 mt-4 sm:mt-0">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                <IoCallSharp color="#FED322" className="text-xs sm:text-sm md:text-sm" />
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2 md:gap-4 gap-1">
                <p className="text-xs sm:text-sm md:text-sm">
                  <span className="text-black font-semibold">US: </span> 
                  <span className="whitespace-nowrap">+1 (512) 817-0605</span>
                </p>
                <p className="text-xs sm:text-sm md:text-sm">
                  <span className="text-black font-semibold">IN: </span> 
                  <span className="whitespace-nowrap">+1 (845) 213-1121</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar - Sticky at the top after header */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
    </>
  );
}