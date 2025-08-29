'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // scroll threshold
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Career', path: '/career' },
  ];

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent absolute'
      }`}
    >
      <div className="px-8 sm:px-10 md:px-12 lg:px-14">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="DIGNISYS Logo"
                width={150}
                height={50}
                className="h-8 sm:h-9 md:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative transition-colors duration-200 ${
                  pathname === item.path
                    ? `font-bold ${isScrolled ? 'text-gray-900' : 'text-black'}`
                    : `font-medium ${
                        isScrolled
                          ? 'text-gray-700 hover:text-gray-900'
                          : 'text-black/90 hover:text-black'
                      }`
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FED322]"></span>
                )}
              </Link>
            ))}

            {/* Contact Button */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 rounded-full border border-[#FED322] bg-[#FED322] text-black hover:bg-[#f8c90e] hover:border-[#f8c90e] transition-all duration-200"
            >
              Contact Us →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="p-2 rounded-md text-black">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
