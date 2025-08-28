// components/MobileMenu.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileMenu = ({ isOpen, onClose, isScrolled }) => {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Career', path: '/career' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      
      {/* Menu */}
      <div className="absolute right-0 top-0 h-full w-3/4 bg-white shadow-lg">
        <div className="p-6">
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 p-2">
            <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Items */}
          <div className="mt-12 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={onClose}
                className={`block text-lg ${
                  pathname === item.path
                    ? 'font-bold text-gray-900 border-l-4 border-[#FED322] pl-4'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Contact Button */}
            <Link
              href="/contact"
              onClick={onClose}
              className="block mt-8 px-6 py-3 bg-[#FED322] text-black font-semibold rounded-full text-center"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;