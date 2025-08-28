import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white text-black pl-4">
      <div className="w-full flex flex-col md:flex-row md:justify-end md:items-center gap-2 md:gap-6 bg-white py-2 md:h-12">
        
        {/* Email */}
        <div className="flex items-center gap-2 md:mr-6">
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
            <MdEmail color="#FED322" size={16} />
          </div>
          <span className="text-sm text-gray-500">contact@dignisys.com</span>
        </div>
        
        {/* Phones */}
        <div className="flex items-center gap-2 md:gap-4 pr-0 md:pr-8">
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
            <IoCallSharp color="#FED322" size={16} />
          </div>
          <p className="text-sm text-gray-500">
            <span className="text-black font-semibold">US: </span> +1 (512) 817-0605
          </p>
          <p className="text-sm text-gray-500">
            <span className="text-black font-semibold">IN: </span> +1 (845) 213-1121
          </p>
        </div>
      </div>
    </header>
  )
}
