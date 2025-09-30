import React from 'react';
import { FaDownload, FaEye, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const handleDownloadCV = () => {
    // Placeholder for CV download functionality
    alert('CV download functionality will be implemented here');
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-accent-50">
      <div className="container-max text-center">
        <div className="animate-fade-in">
          {/* Profile Photo Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full flex items-center justify-center text-4xl font-bold text-primary-600 shadow-lg">
            BM
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Bachtarzi Mounder
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master's Student in Data Science & AI | Web Developer
          </h2>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about leveraging artificial intelligence and data science to solve real-world problems. 
            Currently pursuing my Master's degree while developing innovative web applications and machine learning solutions.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleDownloadCV}
              className="btn-primary flex items-center gap-2"
            >
              <FaDownload />
              Download CV
            </button>
            
            <button
              onClick={scrollToProjects}
              className="btn-secondary flex items-center gap-2"
            >
              <FaEye />
              View Projects
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce-gentle">
            <button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
            >
              <FaArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
