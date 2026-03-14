import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import Frame2608499 from '@/imports/Frame2608499-8-236';

export function ProjectsMinimal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "IAGL Developer Portal",
      description: "Improving partner onboarding from 4 month to 24h!",
      imageOnRight: true
    }
  ];

  return (
    <section id="projects" ref={ref} className="pb-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section divider with gap */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-[1px] bg-gray-400 opacity-55" />
          <h2 className="text-4xl font-['Lustria',serif] text-black px-4">Projects</h2>
          <div className="flex-1 h-[1px] bg-gray-400 opacity-55" />
        </div>

        <div className="space-y-32 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex items-center gap-8">
                {/* Black info box */}
                <div className="relative bg-black text-white p-16 w-[560px] h-[422px] flex flex-col justify-between z-10">
                  {/* Double circle icon */}
                  <div className="absolute top-16 left-16 flex items-center">
                    <div className="w-[23px] h-[23px] bg-white rounded-full" />
                    <div className="w-[23px] h-[23px] border border-white rounded-full -ml-3" />
                  </div>

                  <div className="mt-16">
                    <h3 className="text-4xl font-['Lustria',serif] leading-normal whitespace-pre-wrap mb-4">
                      {project.title}
                    </h3>
                    <p className="text-base font-['Lustria',serif] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <Link to="/projects/iagl-developer-portal" className="flex items-center gap-1 text-base font-['Lustria',serif] hover:opacity-70 transition-opacity self-start">
                    View Project
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Project image */}
                <div className="relative w-[680px] h-[383px] -ml-24">
                  <Frame2608499
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative circle */}
                  <div className="absolute -right-12 bottom-8 w-[60px] h-[60px] bg-black rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}