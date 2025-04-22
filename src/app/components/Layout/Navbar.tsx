// Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import SocialIcons from '../Main/SocialIcons';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <nav className="flex justify-between items-center px-8 py-8 md:py-10">
        {/* Sección izquierda: Enlaces de navegación */}
        <div className="flex space-x-8 md:space-x-12">
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

        {/* Sección derecha: Iconos sociales */}
        <div>
          <SocialIcons />
        </div>
      </nav>
    </header>
  );
}