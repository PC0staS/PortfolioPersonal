'use client'
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1e1e1e] text-white">
      <div className="flex justify-between items-center p-4 px-4 sm:px-8 lg:px-50">
        <div className="text-base sm:text-lg font-bold">Explora mi Portfolio</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link scroll href={'/' + '#proyectos'} className="hover:underline">Proyectos</Link>
          <Link scroll href={'/' + '#experiencia'} className="cursor-not-allowed">Experiencia</Link>
          <Link scroll href={'/' + '#contacto'} className="hover:underline">Contacto</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col space-y-1 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1e1e1e] border-t border-gray-600">
          <div className="flex flex-col space-y-4 p-4">
            <Link 
              scroll 
              href={'/' + '#proyectos'} 
              className="hover:underline py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link 
              scroll 
              href={'/' + '#experiencia'} 
              className="cursor-not-allowed py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Experiencia
            </Link>
            <Link 
              scroll 
              href={'/' + '#contacto'} 
              className="hover:underline py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
