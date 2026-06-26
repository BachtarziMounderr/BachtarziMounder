import React from 'react';
import { FaDownload, FaEye, FaArrowDown } from 'react-icons/fa';
import CVFile from '../img/CV_Bachtarzi.pdf';

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a temporary anchor to trigger direct file download
    const link = document.createElement('a');
    link.href = CVFile;
    link.download = 'CV_Bachtarzi.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center overflow-hidden px-5 sm:px-8 lg:px-12 pt-28 pb-14">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-32 top-24 w-[34rem] h-[34rem] rounded-full border border-white/[0.07] animate-[orbit_30s_linear_infinite]">
          <div className="absolute left-1/2 -top-2 w-4 h-4 rounded-full bg-[#c7ff6b] shadow-[0_0_30px_#c7ff6b]" />
        </div>
        <div className="absolute right-16 top-52 w-72 h-72 rounded-full border border-[#66e3ff]/20 animate-[float_7s_ease-in-out_infinite]" />
        <div className="absolute right-36 top-72 text-[12rem] md:text-[20rem] leading-none font-bold text-white/[0.018] select-none">AI</div>
      </div>

      <div className="container-max w-full">
        <div className="animate-fade-in relative z-10 grid lg:grid-cols-[1fr_340px] gap-14 items-end">
          <div>
            <div className="eyebrow">Data / Intelligence / Web</div>
            <h1 className="text-[clamp(4.2rem,12vw,10rem)] font-bold leading-[0.78] tracking-[-0.08em] text-white">
              Bachtarzi
              <span className="block text-outline">Mounder</span>
            </h1>

            <h2 className="mt-10 text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Master's Student in Data Science & AI | Web Developer
            </h2>
          </div>

          <div className="lg:pb-2">
            <div className="w-16 h-1 bg-[#c7ff6b] mb-7" />
            <p className="text-base text-gray-400 leading-8">
              Passionate about leveraging artificial intelligence and data science to solve real-world problems. 
              Currently pursuing my Master's degree while developing innovative web applications and machine learning solutions.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mt-8">
              <button onClick={handleDownloadCV} className="btn-primary flex items-center justify-center gap-2">
                <FaDownload /> Download CV
              </button>
              <button onClick={scrollToProjects} className="btn-secondary flex items-center justify-center gap-2">
                <FaEye /> View Projects
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 flex items-center gap-5">
          <button
            onClick={() => {
              const element = document.getElementById('about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-11 h-11 rounded-full border border-white/15 text-gray-400 hover:text-[#c7ff6b] hover:border-[#c7ff6b]/60 transition-all flex items-center justify-center animate-bounce-gentle"
          >
            <FaArrowDown size={14} />
          </button>
          <span className="text-[10px] uppercase tracking-[.3em] text-gray-500">Scroll to explore</span>
          <div className="cinematic-rule flex-1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
