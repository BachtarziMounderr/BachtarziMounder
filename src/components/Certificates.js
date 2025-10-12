import React, { useState, useEffect } from 'react';
import cert1 from '../img/cert1.png';
import cert2 from '../img/cert2.png';
import cert3 from '../img/cert3.png';
import cert4 from '../img/cert4.png';

const Certificates = () => {
  const certificates = [
    { src: cert1, alt: 'Certificate 1' },
    { src: cert2, alt: 'Certificate 2' },
    { src: cert3, alt: 'Certificate 3' },
    { src: cert4, alt: 'Certificate 4' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  const openModal = (cert) => {
    setActiveCert(cert);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveCert(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section id="certificates" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="animate-slide-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Certificates
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              A selection of my certifications and achievements
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="card p-3 cursor-zoom-in"
                onClick={() => openModal(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(cert)}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-3">{cert.alt}</p>
              </div>
            ))}
          </div>

          {isOpen && activeCert && (
            <div
              className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div
                className="relative max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute -top-10 right-0 text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-full px-4 py-2 text-sm"
                  aria-label="Close"
                >
                  Close
                </button>
                <img
                  src={activeCert.src}
                  alt={activeCert.alt}
                  className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-zoom-out"
                  onClick={closeModal}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
