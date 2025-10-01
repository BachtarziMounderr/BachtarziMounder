import React from 'react';
import { 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaChartBar,
  FaBrain,
  FaServer,
  FaCode,
  FaCloud,
  FaDatabase
} from 'react-icons/fa';

import { 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiTensorflow, 
  SiMongodb, 
  SiExpress 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science & AI",
      skills: [
        { name: "Python", icon: FaPython, color: "text-blue-500" },
        { name: "Pandas", icon: SiPandas, color: "text-green-600" },
        { name: "NumPy", icon: SiNumpy, color: "text-yellow-600" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-600" },
        { name: "TensorFlow", icon: SiTensorflow, color: "text-red-500" },
        { name: "Machine Learning", icon: FaBrain, color: "text-purple-600" },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-600" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "Full-Stack", icon: FaCode, color: "text-indigo-600" },
        { name: "REST APIs", icon: FaServer, color: "text-blue-600" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "SQL", icon: FaDatabase, color: "text-blue-600" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        { name: "Data Visualization", icon: FaChartBar, color: "text-pink-600" },
        { name: "Cloud Computing", icon: FaCloud, color: "text-blue-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="animate-slide-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent solutions and modern web applications
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-900 text-center">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group cursor-pointer flex flex-col items-center"
                      title={skill.name}
                    >
                      <skill.icon className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                      <p className="text-center text-sm font-medium text-gray-700 mt-3 group-hover:text-primary-600 transition-colors duration-300">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies 
                in data science, artificial intelligence, and web development. My passion for learning 
                drives me to explore new tools and methodologies that can enhance my problem-solving capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
