import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

export default function Header() {
  return (
   <header className="w-full bg-white text-[#0A0A0A]">
  <div className="w-full flex flex-col sm:flex-row sm:justify-end sm:items-center gap-3 sm:gap-6 bg-white py-3 px-4 sm:px-6 sm:h-14">
    
    {/* Email */}
    <div className="flex items-center gap-2 sm:mr-0">
      <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
        <MdEmail color="#FED322" size={16} />
      </div>
      <span className="text-sm break-words">contact@dignisys.com</span>
    </div>
    
    {/* Phones */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
          <IoCallSharp color="#FED322" size={16} />
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-1">
          <p className="text-sm">
            <span className="text-black font-semibold">US: </span> 
            <span className="whitespace-nowrap">+1 (512) 817-0605</span>
          </p>
          <p className="text-sm">
            <span className="text-black font-semibold">IN: </span> 
            <span className="whitespace-nowrap">+1 (845) 213-1121</span>
          </p>
        </div>
      </div>
    </div>

  </div>
</header>
  )
}
