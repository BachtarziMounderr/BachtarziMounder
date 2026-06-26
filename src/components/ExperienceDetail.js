import React from 'react';
import dashboard1 from '../img/dashboard1.png';
import dashboard2 from '../img/dashboard2.png';

const ExperienceDetail = () => {
  const technologies = [
    'React',
    'FastAPI',
    'Python',
    'PostgreSQL',
    'SQLAlchemy',
    'Alembic',
    'XGBoost',
    'WebSocket',
    'JWT',
    'Docker',
    'LoRa / CubeCell',
  ];

  const projectDetails = [
    'Developed during my internship at Sorbonne Université Paris, this project is a full-stack proof of concept for an intelligent digital twin applied to a solar-powered water pumping system. The goal was to build an end-to-end supervision architecture capable of receiving IoT sensor data, storing it, analyzing it with machine learning models, and displaying the system state in a real-time dashboard.',
    'The prototype covers the complete data flow: CubeCell sensor nodes transmit measurements through LoRa, a Python serial listener forwards the data to a FastAPI backend, PostgreSQL stores the measurements, XGBoost models predict the expected solar power and pump flow, and a React dashboard visualizes real-time behavior, historical trends, alerts, and digital twin comparisons.',
    'I designed the backend using a modular architecture with separated domains for authentication, users, sites, measurements, alerts, AI services, WebSocket communication, and digital twin logic. The database schema was managed with SQLAlchemy and Alembic migrations, while JWT authentication and role-based access control were implemented for admin and expert users.',
    'The AI layer uses XGBoost regression models to estimate the expected photovoltaic power and hydraulic flow. Anomaly detection is performed by comparing real measurements with predicted values using dynamic thresholds and physical business rules. This allows the system to detect abnormal conditions such as low solar production, pump degradation, overheating, high vibration, dry-run situations, and hydraulic inconsistencies.',
    'The digital twin module generates an expected system trajectory from the latest real measurement and compares incoming sensor data against this reference. This makes it possible to detect divergence between the physical system and its expected behavior, providing a foundation for predictive supervision and maintenance-oriented decision support.',
  ];

  const keyContributions = [
    'Built a modular FastAPI backend with PostgreSQL persistence.',
    'Designed SQLAlchemy models and Alembic migrations for users, sites, measurements, alerts, AI predictions, and digital twin instances.',
    'Implemented JWT authentication with ADMIN and EXPERT roles.',
    'Integrated IoT data ingestion from CubeCell LoRa nodes through a Python serial listener.',
    'Added WebSocket-based real-time updates between backend and React dashboard.',
    'Developed a React supervision dashboard with multi-site visualization, KPIs, historical charts, alerts, and digital twin runtime views.',
    'Generated a physically constrained synthetic dataset for solar pumping behavior.',
    'Trained XGBoost models for solar power and pump flow prediction.',
    'Implemented anomaly detection using prediction residuals, dynamic thresholds, and domain-specific physical rules.',
    'Dockerized the backend, frontend, and PostgreSQL services for easier deployment and testing.',
  ];

  const architectureSteps = [
    'CubeCell Sensor Node',
    'LoRa Communication',
    'CubeCell Receiver',
    'Python Serial Listener',
    'FastAPI Backend',
    'PostgreSQL Database',
    'XGBoost Prediction / Anomaly Detection',
    'WebSocket',
    'React Digital Twin Dashboard',
  ];

  const dashboardImages = [
    {
      src: dashboard1,
      alt: 'Main supervision dashboard for the solar pumping digital twin',
      caption: 'Multi-site supervision dashboard',
    },
    {
      src: dashboard2,
      alt: 'Twin runtime dashboard with prediction charts and comparison table',
      caption: 'Digital twin runtime workspace',
    },
  ];

  return (
    <main className="pt-24">
      <section className="section-padding overflow-hidden">
        <div className="container-max">
          <div className="animate-slide-up">
            <a
              href="/#experience"
              className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-[#66e3ff]/40 hover:text-white"
            >
              <span aria-hidden="true">←</span>
              Back to experience
            </a>

            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <div className="eyebrow">Internship Case Study</div>
                <h1 className="section-title">
                  Intelligent Digital <span className="text-outline">Twin</span>
                </h1>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c7ff6b]">
                  Sorbonne Université Paris
                </p>
                <p className="mt-5 text-gray-300 leading-8">
                  Developed during an internship at Sorbonne Université Paris, this project implements an intelligent digital twin prototype for a solar-powered water pumping system. It combines IoT data acquisition, a FastAPI backend, PostgreSQL storage, XGBoost-based prediction models, anomaly detection, WebSocket real-time updates, and a React dashboard for supervision and analysis.
                </p>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            {dashboardImages.map((image) => (
              <div
                key={image.src}
                className="reveal group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl"
              >
                <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-black/30">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </div>
                <p className="px-4 pb-3 pt-5 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="reveal rounded-[2rem] border border-white/10 bg-[#66e3ff]/[0.035] p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#66e3ff]">
                Project details
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-white">
                End-to-end digital twin supervision for solar pumping.
              </h2>
              <p className="mt-6 text-gray-400 leading-8">
                From LoRa sensor acquisition to machine-learning supervision, this proof of concept connects the physical system, backend intelligence, and dashboard experience into one coherent monitoring workflow.
              </p>
            </div>

            <div className="reveal rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 md:p-8">
              <div className="space-y-6">
                {projectDetails.map((paragraph) => (
                  <p key={paragraph} className="text-gray-300 leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="reveal rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c7ff6b]">
                Key contributions
              </p>
              <ul className="mt-8 grid gap-4">
                {keyContributions.map((contribution) => (
                  <li key={contribution} className="flex gap-4 text-gray-300 leading-7">
                    <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[#c7ff6b]" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal rounded-[2rem] border border-white/10 bg-black/20 p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#66e3ff]">
                Architecture
              </p>
              <div className="mt-8 space-y-3">
                {architectureSteps.map((step, index) => (
                  <div key={step}>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-gray-200">
                      {step}
                    </div>
                    {index < architectureSteps.length - 1 && (
                      <div className="ml-6 h-6 w-px bg-gradient-to-b from-[#66e3ff] to-[#c7ff6b]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal mt-6 rounded-[2rem] border border-white/10 bg-[#c7ff6b]/[0.035] p-7 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c7ff6b]">
              Technologies
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExperienceDetail;
