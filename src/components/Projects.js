import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaPython, FaReact, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiMongodb, SiPytorch } from 'react-icons/si';

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
    {
  id: 4,
  title: "Advanced-Semantic-Segmentation-with-U-Net-and-SegNet",
  description: "Advanced semantic image segmentation in PyTorch using U-Net and SegNet architectures with VGG and ResNet backbones. The project covers multi-class clothing segmentation and binary pet segmentation, featuring class remapping, strong data augmentation, attention mechanisms, and Dice/IoU-driven optimization on GPU.",
  technologies: ["Python", "PyTorch", "U-Net", "VGG", "SegNet"],
  icons: [FaPython, SiPytorch, FaDatabase],
  githubUrl: "https://github.com/BachtarziMounderr/Advanced-Semantic-Segmentation-with-U-Net-and-SegNet",
  liveUrl: "",
  image: "🖼️",
  featured: true
}
,
  ];

  const handleProjectClick = (projectId) => {
    // Placeholder for project detail view or navigation
    console.log(`Project ${projectId} clicked`);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <div className="animate-slide-up">
          <div className="grid lg:grid-cols-[1fr_.7fr] gap-10 items-end mb-20">
            <div>
              <div className="eyebrow">05 / Selected Work</div>
              <h2 className="section-title">Featured <span className="text-outline">Projects</span></h2>
            </div>
            <p className="section-copy lg:ml-auto">
              A showcase of my technical skills and problem-solving abilities through real-world projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, projectIndex) => (
              <div
                key={project.id}
                className={`project-card group cursor-pointer ${projectIndex === 0 ? 'md:col-span-2' : ''}`}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="font-mono text-xs text-gray-500">PROJECT / 0{projectIndex + 1}</span>
                  {project.featured && (
                    <span className="text-[10px] uppercase tracking-[.18em] border border-[#c7ff6b]/30 bg-[#c7ff6b]/10 text-[#c7ff6b] px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <div className={projectIndex === 0 ? 'md:grid md:grid-cols-[1fr_.75fr] md:gap-14 md:items-end' : ''}>
                  <div>
                    <div className="text-6xl mb-6 opacity-90 group-hover:scale-110 group-hover:-rotate-3 origin-left transition-transform duration-500">
                      {project.image}
                    </div>
                    <h3 className={`${projectIndex === 0 ? 'text-3xl md:text-5xl' : 'text-2xl'} font-semibold tracking-tight text-white mb-4 group-hover:text-[#66e3ff] transition-colors duration-300`}>
                  {project.title}
                    </h3>
                
                    <p className="text-gray-400 mb-7 leading-7">
                      {project.description}
                    </p>
                  </div>
                
                  <div>
                    <div className="mb-7">
                      <h4 className="text-[10px] uppercase tracking-[.18em] text-gray-500 mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="text-xs text-gray-300 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.035]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                
                    <div className="flex gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                        className="flex-1 border border-white/10 hover:border-white/25 bg-white/[0.04] text-white text-sm font-medium py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <FaGithub /> GitHub
                      </button>
                  
                      {project.liveUrl && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                          className="flex-1 bg-[#66e3ff] hover:bg-[#8beaff] text-gray-950 text-sm font-semibold py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <div className="rounded-[2rem] p-8 md:p-12 border border-white/10 bg-white/[0.025] flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                Want to See More?
                </h3>
                <p className="text-gray-400 max-w-2xl">
                I'm constantly working on new projects and improving existing ones. 
                Check out my GitHub profile for the latest updates and contributions.
                </p>
              </div>
              <button
                onClick={() => window.open('https://github.com', '_blank')}
                className="btn-primary flex items-center justify-center gap-2 shrink-0"
              >
                <FaGithub />
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
