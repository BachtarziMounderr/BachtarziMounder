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
    <section id="certificates" className="section-padding bg-white/[0.018] border-y border-white/[0.06]">
      <div className="container-max">
        <div className="animate-slide-up">
          <div className="grid lg:grid-cols-[1fr_.7fr] gap-10 items-end mb-20">
            <div>
              <div className="eyebrow">04 / Credentials</div>
              <h2 className="section-title">Certifi<span className="text-outline">cates</span></h2>
            </div>
            <p className="section-copy lg:ml-auto">
              A selection of my certifications and achievements
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className={`group card p-3 cursor-zoom-in overflow-hidden ${idx % 2 === 1 ? 'lg:translate-y-12' : ''}`}
                onClick={() => openModal(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(cert)}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-auto object-cover grayscale-[20%] transform transition-all duration-700 group-hover:scale-[1.035] group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                <div className="flex justify-between items-center px-2 py-3">
                  <p className="text-sm text-gray-300">{cert.alt}</p>
                  <span className="text-[10px] uppercase tracking-[.18em] text-[#c7ff6b]">View</span>
                </div>
              </div>
            ))}
          </div>

          {isOpen && activeCert && (
            <div
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
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
