import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExperienceDetail from './components/ExperienceDetail';

function App() {
  const isExperienceDetailPage = window.location.pathname === '/experience/sorbonne-internship';

  useEffect(() => {
    const root = document.documentElement;
    const updatePointer = (event) => {
      root.style.setProperty('--pointer-x', `${event.clientX}px`);
      root.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty('--scroll-progress', progress);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const revealElements = document.querySelectorAll(
      '.reveal, .animate-slide-up, .animate-fade-in'
    );
    revealElements.forEach((element) => observer.observe(element));

    window.addEventListener('pointermove', updatePointer, { passive: true });
    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', updatePointer);
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />
      <Navbar />
      {isExperienceDetailPage ? (
        <ExperienceDetail />
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Certificates />
          <Projects />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
