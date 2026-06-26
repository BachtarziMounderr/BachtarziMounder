import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#06080d]/80 backdrop-blur-2xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container-max px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="group flex items-center gap-3 text-white transition-colors duration-300"
            >
              <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold group-hover:border-[#c7ff6b] group-hover:text-[#c7ff6b] transition-all">BM</span>
              <span className="hidden sm:block text-xs font-semibold tracking-[0.18em] uppercase">Portfolio</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 rounded-full border border-white/10 bg-white/[0.035] p-1.5 backdrop-blur-xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-400 hover:text-white hover:bg-white/[0.06] rounded-full px-4 py-2 text-xs font-medium transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-[#c7ff6b] hover:border-[#c7ff6b]/50 transition-colors duration-300"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-3 py-3 space-y-1 bg-[#0d1119]/95 border border-white/10 backdrop-blur-2xl rounded-2xl mt-2 shadow-2xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white hover:bg-white/[0.06] rounded-xl block px-4 py-3 text-sm font-medium transition-colors duration-300 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
