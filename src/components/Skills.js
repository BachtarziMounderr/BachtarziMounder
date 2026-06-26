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
    <section id="skills" className="section-padding bg-white/[0.018] border-y border-white/[0.06] overflow-hidden">
      <div className="container-max">
        <div className="animate-slide-up">
          <div className="mb-20">
            <div className="eyebrow">02 / Capabilities</div>
            <h2 className="section-title">Skills & <span className="text-outline">Expertise</span></h2>
            <p className="section-copy mt-8">
              A comprehensive toolkit for building intelligent solutions and modern web applications
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-5">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="card p-6 md:p-8 group hover:border-white/20">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-semibold text-white">
                  {category.title}
                  </h3>
                  <span className="text-xs text-gray-600 font-mono">0{categoryIndex + 1}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="cursor-pointer flex items-center gap-3 min-h-16 rounded-2xl border border-white/[0.07] bg-black/10 px-4 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300"
                      title={skill.name}
                    >
                      <skill.icon className={`text-2xl ${skill.color} transition-transform duration-300`} />
                      <p className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <div className="rounded-3xl p-8 md:p-12 border border-[#c7ff6b]/20 bg-[#c7ff6b]/[0.035] grid md:grid-cols-[.65fr_1.35fr] gap-6">
              <h3 className="text-2xl font-semibold text-white">
                Always Learning & Growing
              </h3>
              <p className="text-gray-400 leading-8">
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
