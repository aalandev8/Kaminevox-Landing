'use client';

import { useState, useEffect } from 'react';
import SocialIcons from '../Main/SocialIcons';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <nav className="flex justify-between items-center px-4 sm:px-8 py-6 md:py-10">
        {/* Sección izquierda para desktop: Enlaces de navegación */}
        <div className="hidden md:flex space-x-8 md:space-x-12">
          <a
            href="#about"
            className="text-white text-lg md:text-2xl font-mono uppercase tracking-widest hover:text-red-600 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#watch"
            className="text-white text-lg md:text-2xl font-mono uppercase tracking-widest hover:text-red-600 transition-colors duration-300"
          >
            Watch
          </a>
          <a
            href="#listen"
            className="text-white text-lg md:text-2xl font-mono uppercase tracking-widest hover:text-red-600 transition-colors duration-300"
          >
            Listen
          </a>
        </div>

        {/* Botón de hamburguesa para móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              // Icono X cuando el menú está abierto
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Icono de hamburguesa cuando el menú está cerrado
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Logo o espacio central si es necesario */}
        <div className="md:hidden flex-1"></div>

        {/* Sección derecha: Iconos sociales */}
        <div>
          <SocialIcons />
        </div>
      </nav>

      {/* Menú móvil expandible */}
      <div
        className={`md:hidden absolute w-full bg-black bg-opacity-90 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-60 py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 px-4">
          <a
            href="#about"
            onClick={handleLinkClick}
            className="text-white text-xl font-mono uppercase tracking-widest hover:text-red-600 transition-colors duration-300 py-2"
          >
            About
          </a>
          <a
            href="#watch"
            onClick={handleLinkClick}
            className="text-white text-xl font-mono uppercase tracking-widest hover:text-red-600 transition-colors duration-300 py-2"
          >
            Watch
          </a>
          <a
            href="#listen"
            onClick={handleLinkClick}
            className="text-white text-xl font-mono uppercase tracking-widest hover:text-red-600 transition-colors duration-300 py-2"
          >
            Listen
          </a>
        </div>
      </div>
    </header>
  );
}