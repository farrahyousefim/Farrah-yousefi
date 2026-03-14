import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Heart, Zap } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Pushing boundaries with innovative design solutions that captivate and inspire"
    },
    {
      icon: Heart,
      title: "User-Centered",
      description: "Designing with empathy and intention to create meaningful user experiences"
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "Delivering high-quality work efficiently without compromising on craftsmanship"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-slate-900">About Me</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            I'm a passionate designer with over 5 years of experience creating digital products 
            that blend aesthetics with functionality. My approach combines strategic thinking 
            with artistic vision to deliver solutions that truly resonate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 rounded-3xl bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-slate-900">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
