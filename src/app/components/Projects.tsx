import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Modern Workspace",
      category: "Brand Design",
      description: "A comprehensive brand identity system for a modern coworking space",
      image: "https://images.unsplash.com/photo-1700619663145-34b53a04d940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwc2V0dXB8ZW58MXx8fHwxNzY5NzM3MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Branding", "UI Design", "Strategy"]
    },
    {
      title: "Gradient Dreams",
      category: "Digital Art",
      description: "Experimental digital artwork exploring color theory and abstract forms",
      image: "https://images.unsplash.com/photo-1762503203730-ca33982518af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwZ3JhZGllbnQlMjBkZXNpZ258ZW58MXx8fHwxNzY5NzMyMTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Art Direction", "Visual Design"]
    },
    {
      title: "Architectural Vision",
      category: "Web Design",
      description: "Portfolio website for an award-winning architecture firm",
      image: "https://images.unsplash.com/photo-1552835376-89b8cdfacb4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NzU3MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Web Design", "Development", "UX"]
    },
    {
      title: "Creative Studio",
      category: "Mobile App",
      description: "iOS app for creative professionals to manage projects on the go",
      image: "https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3Njk2OTYzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Mobile", "UI Design", "Prototyping"]
    },
    {
      title: "Tech Interface",
      category: "Product Design",
      description: "Dashboard design for a SaaS analytics platform",
      image: "https://images.unsplash.com/photo-1763107228544-2ad5d71c21f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGlnaXRhbCUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njk3NTcwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Product Design", "Data Viz", "UX"]
    },
    {
      title: "Portrait Series",
      category: "Photography",
      description: "Editorial photography series for a fashion magazine",
      image: "https://images.unsplash.com/photo-1660018322118-184703f102fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBob3RvZ3JhcGh5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5NzM4NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Photography", "Art Direction"]
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-slate-900">Selected Works</h2>
          <p className="text-xl text-slate-600">
            A curated collection of projects that showcase my design approach
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-slate-900/80 flex items-center justify-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-slate-500 uppercase tracking-wider">{project.category}</p>
                <h3 className="text-2xl text-slate-900 group-hover:text-slate-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
