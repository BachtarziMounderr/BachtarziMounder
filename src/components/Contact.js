import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "bachtarzimounder0303@gmail.com",
      link: "mailto:bachtarzimounder0303@gmail.com",
      color: "from-red-500 to-red-600"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/bachtarzi-mounder",
      link: "https://www.linkedin.com/in/siradj-eddine-mounder-bachtarzi-07450236a",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/bachtarzi-mounder",
      link: "https://github.com/BachtarziMounderr",
      color: "from-gray-700 to-gray-800"
    },
    {
      icon: FaGlobe,
      label: "Portfolio",
      value: "bachtarzi-mounder.dev",
      link: "#",
      color: "from-green-500 to-green-600"
    }
  ];

  const handleContactClick = (contactItem) => {
    if (contactItem.link && contactItem.link !== '#') {
      window.open(contactItem.link, '_blank');
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="animate-slide-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="card p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => handleContactClick(contact)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center text-white`}>
                      <contact.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{contact.label}</h4>
                      <p className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Send Me a Message
              </h3>
              
              <form 
                action="https://formspree.io/f/meorgyby" 
                method="POST"
                className="max-w-2xl mx-auto space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me more about your project or inquiry..."
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="btn-primary px-8 py-3"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Additional Contact Info */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you have a project in mind, want to collaborate on something exciting, 
                or just want to say hello, I'd love to hear from you. I'm particularly interested 
                in opportunities that involve AI, data science, or innovative web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
