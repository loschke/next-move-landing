'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-gradient-brand">NEXT MOVE AI</span>
        </Link>
        
        {/* CTA Button */}
        <Link 
          href="#contact" 
          className="px-6 py-2 gradient-brand hover:opacity-90 text-white font-medium rounded-lg transition-all shadow-lg"
        >
          Kontakt
        </Link>
      </div>
    </header>
  );
}
