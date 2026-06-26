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
    <section id="contact" className="section-padding overflow-hidden">
      <div className="container-max">
        <div className="animate-slide-up">
          <div className="mb-20">
            <div className="eyebrow">06 / Contact</div>
            <h2 className="section-title">Get In <span className="text-outline">Touch</span></h2>
            <p className="section-copy mt-8">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-8 lg:gap-16">
            <div>
              <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="group p-5 cursor-pointer rounded-2xl border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.035] transition-all duration-300"
                  onClick={() => handleContactClick(contact)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 bg-gradient-to-br ${contact.color} rounded-full flex items-center justify-center text-white`}>
                      <contact.icon size={18} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs uppercase tracking-[.15em] text-gray-500">{contact.label}</h4>
                      <p className="text-gray-200 mt-1 break-all group-hover:text-[#66e3ff] transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Let's Work Together
                </h3>
                <p className="text-gray-400 leading-8">
                  Whether you have a project in mind, want to collaborate on something exciting, 
                  or just want to say hello, I'd love to hear from you. I'm particularly interested 
                  in opportunities that involve AI, data science, or innovative web development.
                </p>
              </div>
            </div>
            
            <div className="card p-6 md:p-10">
              <h3 className="text-2xl font-semibold text-white mb-8">
                Send Me a Message
              </h3>
              
              <form 
                action="https://formspree.io/f/meorgyby" 
                method="POST"
                className="max-w-2xl mx-auto space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[.15em] text-gray-500 mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-0 py-3 bg-transparent text-white border-0 border-b border-white/15 focus:ring-0 focus:border-[#66e3ff] outline-none transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-[.15em] text-gray-500 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-0 py-3 bg-transparent text-white border-0 border-b border-white/15 focus:ring-0 focus:border-[#66e3ff] outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-[.15em] text-gray-500 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-0 py-3 bg-transparent text-white border-0 border-b border-white/15 focus:ring-0 focus:border-[#66e3ff] outline-none transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-[.15em] text-gray-500 mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full px-0 py-3 bg-transparent text-white border-0 border-b border-white/15 focus:ring-0 focus:border-[#66e3ff] outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me more about your project or inquiry..."
                  ></textarea>
                </div>
                
                <div>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
