import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <div className="animate-slide-up">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-24 mb-20 items-end">
            <div>
              <div className="eyebrow">01 / About</div>
              <h2 className="section-title">About <span className="text-outline">Me</span></h2>
            </div>
            <p className="section-copy lg:ml-auto">
              I build at the intersection of intelligent systems, useful data, and thoughtful digital experiences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-8 lg:gap-16">
              <div className="space-y-7 border-l border-white/10 pl-6 md:pl-10">
                <h3 className="text-2xl font-semibold text-white">
                  Who I Am
                </h3>
                
                <p className="text-lg text-gray-400 leading-8">
                  I'm a 22-year-old Master 2 student in Data Science and Artificial Intelligence at Constantine University 2. 
                  My passion lies at the intersection of cutting-edge AI technologies and practical problem-solving.
                </p>
                
                <p className="text-lg text-gray-400 leading-8">
                  I specialize in machine learning, data analysis, and full-stack web development, with expertise in React, 
                  Express.js, and MongoDB. My goal is to leverage these skills to create innovative solutions that address 
                  real-world challenges.
                </p>
                
                <p className="text-lg text-gray-400 leading-8">
                  When I'm not coding or studying, you'll find me exploring the latest developments in AI, 
                  contributing to open-source projects, or collaborating with fellow developers on exciting new ideas.
                </p>
              </div>
              
              <div className="space-y-5">
                <div className="card p-7 group hover:border-[#66e3ff]/40 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 border border-[#66e3ff]/30 bg-[#66e3ff]/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#66e3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Master's Degree</h4>
                      <p className="text-gray-300">Data Science & AI</p>
                      <p className="text-sm text-gray-500">Constantine University 2</p>
                    </div>
                  </div>
                </div>
                
                <div className="card p-7 group hover:border-[#c7ff6b]/40 hover:-translate-y-1 lg:ml-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 border border-[#c7ff6b]/30 bg-[#c7ff6b]/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#c7ff6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Problem Solving</h4>
                      <p className="text-gray-300">Real-world AI applications</p>
                      <p className="text-sm text-gray-500">Innovation & Impact</p>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
