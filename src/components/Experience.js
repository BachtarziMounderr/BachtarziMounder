import React from 'react';

const Experience = () => {
  const technologies = [
    'Python',
    'FastAPI',
    'PostgreSQL',
    'React',
    'XGBoost',
    'WebSocket',
    'IoT',
    'Docker',
    'SQLAlchemy',
    'Alembic',
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <div className="animate-slide-up">
          <div className="eyebrow">03 / Experience</div>
          <h2 className="section-title">
            Work <span className="text-outline">Experience</span>
          </h2>

          <div className="mt-16 grid gap-6">
            <article className="card group relative overflow-hidden p-7 md:p-10">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#66e3ff]/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />
              <div className="absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-[#c7ff6b]/[0.08] blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#c7ff6b]">
                    Internship
                  </p>
                  <h3 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                    Intelligent Digital Twin Prototype
                  </h3>
                  <p className="mt-6 text-lg text-gray-400">
                    Sorbonne Université Paris
                  </p>
                </div>

                <div>
                  <p className="text-gray-300 leading-8">
                    Developed during an internship at Sorbonne Université Paris, this project implements an intelligent digital twin prototype for a solar-powered water pumping system. It combines IoT data acquisition, a FastAPI backend, PostgreSQL storage, XGBoost-based prediction models, anomaly detection, WebSocket real-time updates, and a React dashboard for supervision and analysis.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:border-[#66e3ff]/40 hover:text-white"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10">
                    <a
                      href="/experience/sorbonne-internship"
                      className="btn-secondary inline-flex items-center gap-3"
                    >
                      See more
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
