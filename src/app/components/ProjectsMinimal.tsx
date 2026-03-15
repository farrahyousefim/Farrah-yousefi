import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { Link } from 'react-router';
import ridePreferencesImg from '@/assets/snapp ride prefrences.png';
import iaglImg from '@/assets/developer portal.png';
import backstageImg from '@/assets/backstage-cover.png';
import accessibilityImg from '@/assets/snapp accessibilty.png';

const projects = [
  {
    title: 'Ride Preferences',
    description: 'Creating a luxury and enjoyable ride experience for passengers and drivers.',
    link: '/projects/ride-preferences',
    image: ridePreferencesImg,
    category: 'Oct 2022',
  },
  {
    title: 'IAGL Developer Portal',
    description: 'Improving partner onboarding from 4 months to 24 hours.',
    link: '/projects/iagl-developer-portal',
    image: iaglImg,
    category: 'Nov 2025',
  },
  {
    title: 'Backstage Home Page Redesign',
    description: 'Redesigning IAGL Backstage to generate value for users and business.',
    link: '/projects/backstage-home-redesign',
    image: backstageImg,
    category: 'Jan 2026',
  },
  {
    title: 'Ride Accessibility',
    description: 'Making Snapp ride-hailing app more accessible for both passengers and drivers.',
    link: '/projects/ride-accessibility',
    image: accessibilityImg,
    category: 'May 2022',
  },
];

export function ProjectsMinimal() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % projects.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const project = projects[current];

  return (
    <section
      id="projects"
      className="relative w-full"
      style={{ height: '100vh' }}
    >
      {/* Full-screen background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay — bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Text overlay — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-10 md:px-12 md:pb-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
          >
            <Link to={project.link} className="block group">
              <h2 className="font-['Lustria',serif] text-[13px] md:text-[15px] tracking-[0.12em] uppercase text-white/60 mb-2 md:mb-3">
                {project.category}
              </h2>
              <h3 className="font-['Lustria',serif] text-[28px] md:text-[42px] text-white leading-[1.15] mb-2 md:mb-3 max-w-[700px]">
                {project.title}
              </h3>
              <p className="font-['Lustria',serif] text-[16px] md:text-[22px] text-white/80 leading-[1.35] max-w-[700px]">
                {project.description}
              </p>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators — bottom right */}
      <div className="absolute bottom-10 right-6 md:bottom-14 md:right-12 z-10 flex items-center gap-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? 'bg-white w-6' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Counter — top right */}
      <div className="absolute top-8 right-6 md:right-12 z-10">
        <span className="font-['Lustria',serif] text-[13px] tracking-[0.1em] text-white/50">
          {current + 1} / {projects.length}
        </span>
      </div>
    </section>
  );
}

export function ProjectsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#DCDED4] py-12 md:py-20">
      {/* Header row */}
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 mb-6">
        <div className="border-b border-black/15 pb-4">
          <h2 className="font-['Lustria',serif] text-[24px] md:text-[32px] text-black leading-[1.2]">
            All Projects
          </h2>
        </div>
      </div>

      {/* Horizontal row of cards */}
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Link to={project.link} className="block group">
                {/* Tall image */}
                <div className="relative overflow-hidden mb-3 md:mb-5" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Category */}
                <p className="font-['Lustria',serif] text-[11px] md:text-[12px] text-black/40 tracking-[0.05em] mb-1 md:mb-2">
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="font-['Lustria',serif] text-[14px] md:text-[17px] text-black leading-[1.3] uppercase tracking-[0.03em] mb-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-['Lustria',serif] text-[12px] md:text-[14px] text-black/50 leading-[1.5]">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
