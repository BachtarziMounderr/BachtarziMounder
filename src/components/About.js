import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="animate-slide-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
          </div>
          
          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Who I Am
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm a 22-year-old Master 2 student in Data Science and Artificial Intelligence at Constantine University 2. 
                  My passion lies at the intersection of cutting-edge AI technologies and practical problem-solving.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  I specialize in machine learning, data analysis, and full-stack web development, with expertise in React, 
                  Express.js, and MongoDB. My goal is to leverage these skills to create innovative solutions that address 
                  real-world challenges.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  When I'm not coding or studying, you'll find me exploring the latest developments in AI, 
                  contributing to open-source projects, or collaborating with fellow developers on exciting new ideas.
                </p>
              </div>
              
              {/* Visual Elements */}
              <div className="space-y-6">
                {/* Education Card */}
                <div className="card p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Master's Degree</h4>
                      <p className="text-gray-600">Data Science & AI</p>
                      <p className="text-sm text-gray-500">Constantine University 2</p>
                    </div>
                  </div>
                </div>
                
                {/* Interests Card */}
                <div className="card p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Problem Solving</h4>
                      <p className="text-gray-600">Real-world AI applications</p>
                      <p className="text-sm text-gray-500">Innovation & Impact</p>
                    </div>
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
