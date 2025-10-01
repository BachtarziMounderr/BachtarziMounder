import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaPython, FaReact, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiMongodb } from 'react-icons/si';

const Projects = () => {
  const projects = [

    {
      id: 2,
      title: "Mini-shazam",
      description: "A lightweight Shazam-like app built with Python (Flask) and HTML/CSS. Upload audio snippets (up to 10), match them against a local database, and get the song title & artist",
      technologies: ["Python 3.10+", "Flask (backend & routing)", "HTML/CSS", "SQLite ", "Audio fingerprinting logic"],
      icons: [FaReact, FaDatabase, SiMongodb],
      githubUrl: "https://github.com/BachtarziMounderr/Mini-shazam",
      liveUrl: "#",
      image: "🎵",
      featured: true
    },
    {
      id: 3,
      title: "XRP-price-prediction",
      description: "This project applies Artificial Intelligence (AI) techniques to predict the future prices of the cryptocurrency **XRP** using a **Long Short-Term Memory (LSTM)** neural network.",
      technologies: ["Python 3.10+", "TensorFlow / Keras ", "Scikit-learn", "Matplotlib / Seaborn ", "Joblib / Pickle"],
      icons: [FaReact, FaPython, FaDatabase],
      githubUrl: "https://github.com/BachtarziMounderr/XRP-price-prediction",
      liveUrl: "#",
      image: "📊",
      featured: true
      
      
    },
        {
      id: 1,
      title: "Movie Recommendation System",
      description: "An intelligent movie recommendation engine built with machine learning algorithms. Uses collaborative filtering and content-based approaches to suggest personalized movie recommendations based on user preferences and viewing history.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
      icons: [FaPython, SiTensorflow, FaDatabase],
      githubUrl: "https://github.com/BachtarziMounderr/movie-recommendation-system",
      liveUrl: "https://colab.research.google.com/drive/1iVk-w_S62pIk_MgfzJaLqiXAc3ScS09Q?usp=sharing",
      image: "🎬",
      featured: true
    },
  ];

  const handleProjectClick = (projectId) => {
    // Placeholder for project detail view or navigation
    console.log(`Project ${projectId} clicked`);
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="animate-slide-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              A showcase of my technical skills and problem-solving abilities through real-world projects
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-card group cursor-pointer transition-all duration-500 ease-in-out transform hover:-translate-y-2 ${
                  project.featured ? 'ring-2 ring-primary-500 ring-opacity-50' : ''
                }`}
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Project Image/Icon */}
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                  {project.featured && (
                    <span className="ml-2 text-xs bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg border border-gray-200 group-hover:bg-primary-50 group-hover:text-primary-600 group-hover:border-primary-200 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, '_blank');
                    }}
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg transform group-hover:scale-105"
                  >
                    <FaGithub className="group-hover:scale-110 transition-transform duration-300" />
                    GitHub
                  </button>
                  
                  {project.liveUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                      className="flex-1 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg transform group-hover:scale-105"
                    >
                      <FaExternalLinkAlt className="group-hover:scale-110 transition-transform duration-300" />
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 max-w-3xl mx-auto border border-primary-100 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Want to See More?
              </h3>
              <p className="text-gray-600 mb-6">
                I'm constantly working on new projects and improving existing ones. 
                Check out my GitHub profile for the latest updates and contributions.
              </p>
              <button
                onClick={() => window.open('https://github.com', '_blank')}
                className="btn-primary flex items-center gap-2 mx-auto group"
              >
                <FaGithub className="group-hover:scale-110 transition-transform duration-300" />
                View All Projects on GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
