import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import aboutImage from '@/assets/d509ae547dba052d2a2bc1109d1abea829fdc06e.png';

export function AboutMinimal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workExperience = [
    { company: 'Reaktor', role: 'Product Designer', period: 'Oct 2023 - Present', current: true },
    { company: 'Snapp', role: 'Product Designer', period: 'Oct 2021 - 2023', current: false },
    { company: 'Momtaz', role: 'UI&UX Designer', period: 'Dec 2019 - Nov 2021', current: false },
    { company: 'Adowing', role: 'UI&UX Designer', period: 'Jul 2018 - Dec 2019', current: false }
  ];

  const skills = [
    ['User Research', 'User Testing', 'Agile'],
    ['UI Design', 'Interaction', 'Design Strategy']
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section divider with gap */}
        <div className="flex items-center gap-4 mb-20">
          <div className="flex-1 h-[1px] bg-gray-400 opacity-55" />
          <h2 className="text-4xl font-['Lustria',serif] text-black px-4">About</h2>
          <div className="flex-1 h-[1px] bg-gray-400 opacity-55" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex gap-16 items-start mb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative w-[476px] h-[595px] flex-shrink-0"
            >
              <img
                src={aboutImage}
                alt="About"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 pt-8"
            >
              <p className="text-base font-['Lustria',serif] leading-relaxed text-black mb-12">
                I am a curious, proactive product designer who loves to learn, make people's lives easier, 
                and truly enjoys collaboration and storytelling. I love working closely with technology, 
                and people. As a designer, I'm open to learn and adapt to new ways of work, new skills, 
                and new industries as long as I'm solving meaningful problems that help people and make 
                their lives easier.
              </p>

              {/* Work Experience */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-base font-['Lustria',serif] text-black">Work Experience</h3>
                  <div className="flex-1 h-[1px] bg-black" />
                </div>

                <div className="space-y-4">
                  {workExperience.map((job, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {/* Timeline dot */}
                      <div className="mt-1 flex-shrink-0">
                        {job.current ? (
                          <div className="w-[14px] h-[14px] border border-black rounded-full" />
                        ) : (
                          <div className="w-[14px] h-[14px] bg-black rounded-full" />
                        )}
                      </div>
                      
                      <p className="text-base font-['Lustria',serif] text-black">
                        {job.company} . {job.role} . {job.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 h-[1px] bg-black" />
                </div>

                <div className="space-y-2">
                  {skills.map((skillRow, rowIndex) => (
                    <div key={rowIndex} className="flex gap-2">
                      {skillRow.map((skill) => (
                        <div
                          key={skill}
                          className="px-4 py-2 border border-black rounded-full"
                        >
                          <p className="text-[13px] font-['Lustria',serif] text-black">
                            {skill}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}