// components/Navbar.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Get header height from the DOM
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    // Initial measurement
    updateHeaderHeight();

    // Update on resize
    window.addEventListener('resize', updateHeaderHeight);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerHeight]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Career', path: '/career' },
  ];

  // Always show white background on mobile screens (lg breakpoint and below)
  const isMobileScreen = typeof window !== 'undefined' && window.innerWidth < 1024;
  const shouldShowWhiteBg = isScrolled || isMobileScreen;

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          shouldShowWhiteBg 
            ? 'bg-white shadow-md top-0' 
            : `bg-transparent top-[${headerHeight}px]`
        }`}
        style={!shouldShowWhiteBg ? { top: `${headerHeight}px` } : {}}
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

            {/* Desktop Navigation - Show on lg screens and above */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative transition-colors duration-200 ${
                    pathname === item.path
                      ? `font-bold ${isScrolled ? 'text-gray-900' : 'text-black'}`
                      : `font-medium ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-black/90 hover:text-black'}`
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

            {/* Mobile Menu Button - Show on screens smaller than lg */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-md text-gray-900" // Always dark text on mobile
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        isScrolled={isScrolled}
      />
    </>
  );
};

export default Navbar;