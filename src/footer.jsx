import React from 'react';
// 1. Apni image ko yahan sahi path se import karein
import footer from './assets/footerbg.png'; 
import { Facebook, Instagram, Sprout } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <div id='footer' className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#fcfbf9] font-serif overflow-hidden">
      
      {/* 2. Background Layer: Isse image hamesha visible rahegi */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `url(${footer})`,
          backgroundPosition: 'center right', // Desktop pe right dikhayega
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* 3. Content: z-10 taake text image ke upar aaye */}
      <div className="relative z-10 text-center px-6">
        
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <div className="w-10 h-10 border border-[#b8860b] rounded-full flex items-center justify-center text-[#b8860b] opacity-60">
            <Sprout size={20} strokeWidth={1.5} />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-[10px] tracking-[0.4em] font-[Oranienbaum]  font-bold text-[#c29143] mb-6">
          NEWSLETTER SIGNUP
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-[38px] text-[#2d2d2d] leading-tight font-[Oranienbaum] mb-14 font-medium max-w-lg mx-auto">
          Want To Get Updates On Hair <br className="hidden md:block" /> & Wellness News?
        </h1>

        {/* Links */}
        <div className="flex justify-center gap-10 mb-10 text-[13px] text-gray-500 font-sans tracking-wide">
          <a href="#" className="hover:text-[#f8be29] transition-colors  font-[Montserrat]">About Us</a>
          <a href="#" className="hover:text-[#f8be29] transition-colors  font-[Montserrat]">Contacts</a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-3 mb-20">
          <a href="#" className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-gray-300 transition-all hover:bg-[#f8be29]">
            <Facebook size={14} />
          </a>
          <a href="#" className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-gray-300 transition-all hover:bg-[#f8be29]">
            <Instagram size={14} />
          </a>
        </div>

        {/* Footer */}
        <footer className="text-[10px] text-[#221D1a] tracking-widest  font-[Montserrat]">
          &copy; COPYRIGHT © 2026 HINA NISAR. ALL RIGHTS RESERVED.

        </footer>
      </div>
    </div>
  );
};

export default NewsletterSection;