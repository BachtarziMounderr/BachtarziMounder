import React from 'react';
import { FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="text-white px-5 sm:px-8 lg:px-12 pb-10">
      <div className="container-max border-t border-white/10 pt-14">
        <div className="grid md:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <h3 className="text-4xl md:text-6xl font-bold tracking-[-.06em] text-white mb-4">
              Bachtarzi Mounder
            </h3>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Master's Student in Data Science & AI | Web Developer | Problem Solver
            </p>
          </div>
          <div className="md:text-right text-[10px] uppercase tracking-[.25em] text-[#c7ff6b]">
            Available for meaningful work
          </div>
        </div>

        <div className="flex flex-wrap gap-x-7 gap-y-3 mb-10">
          {['about', 'skills', 'experience', 'certificates', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 capitalize"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-gray-600">
            Â© {new Date().getFullYear()} Bachtarzi Mounder. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-2">
            Built with <FaHeart className="text-red-500 animate-pulse" /> by Bachtarzi Mounder
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="fixed z-40 bottom-6 right-6 w-11 h-11 border border-white/15 bg-[#0d1119]/80 backdrop-blur-xl hover:border-[#c7ff6b]/60 hover:text-[#c7ff6b] text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center"
          title="Scroll to top"
        >
          <FaArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
