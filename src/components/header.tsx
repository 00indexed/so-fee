"use client"

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="container mx-auto px-4 py-6 relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          </div>
          <span className="font-bold text-xl">So-fee</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#app-demo" className="text-sm font-medium hover:text-blue-600 transition-colors">
            App Demo
          </Link>
          <Link href="#compare" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Compare
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="#register" className="hidden md:inline-flex">
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors">
              Join Alpha
            </button>
          </Link>
          <button 
            className="md:hidden" 
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg z-50 py-4 px-6 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link 
              href="#features" 
              className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#app-demo" 
              className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              App Demo
            </Link>
            <Link 
              href="#compare" 
              className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Compare
            </Link>
            <Link 
              href="#contact" 
              className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="#register" 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Alpha
            </Link>
          </div>
        </div>
      )}
    </header>
  )
} 