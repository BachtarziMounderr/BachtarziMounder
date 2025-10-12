import React from 'react';
import { FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-max">
        <div className="text-center">
          {/* Main Footer Content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Bachtarzi Mounder
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Master's Student in Data Science & AI | Web Developer | Problem Solver
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('skills');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('certificates');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
            >
              Certificates
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          
          {/* Copyright and Signature */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 mb-4">
              © {new Date().getFullYear()} Bachtarzi Mounder. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Built with <FaHeart className="text-red-500 animate-pulse" /> by Bachtarzi Mounder
            </p>
          </div>
        </div>
        
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          title="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
