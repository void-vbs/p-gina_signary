import React from 'react';
import SignaryLogo from '../assets/Signary_Logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={SignaryLogo} alt="Signary" className="h-7 w-auto" />
            <span className="text-xl font-semibold text-[#1A1615]">Signary</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-12">
            <a 
              href="#caracteristicas" 
              className="text-[#4A4A4A] hover:text-[#1A1615] transition-colors font-medium"
            >
              Características
            </a>
            <a 
              href="#precios" 
              className="text-[#4A4A4A] hover:text-[#1A1615] transition-colors font-medium"
            >
              Precios
            </a>
            <a 
              href="#contactanos" 
              className="text-[#4A4A4A] hover:text-[#1A1615] transition-colors font-medium"
            >
              Contáctanos
            </a>
          </div>

          {/* CTA Button */}
          <button className="bg-[#1A1615] text-white px-7 py-2.5 rounded-full font-medium hover:bg-[#2A2625] transition-colors shadow-md">
            Prueba Signary
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
