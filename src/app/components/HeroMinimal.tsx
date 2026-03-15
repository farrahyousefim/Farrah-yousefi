import { motion } from 'motion/react';
import { Link } from 'react-router';
import heroImage from '@/assets/Farrah-hero.png';

export function HeroMinimal() {
  return (
    <section className="bg-[#fffcfb] pt-[72px]">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        {/* Name — large, centered, tight top padding */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-['Lustria',serif] text-[24px] md:text-[38px] text-black tracking-[0.08em] uppercase text-center pt-4 md:pt-8 mb-2"
        >
          Farrah Yousefi
        </motion.h1>

        {/* Tagline — centered, editorial, tight gap to image */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-['Lustria',serif] text-[22px] md:text-[38px] text-black leading-[1.15] text-center max-w-[900px] mx-auto mb-6 md:mb-8"
        >
          Product designer. Researcher. Strategist: The one who brings clarity to chaos and good energy to every room.
        </motion.p>

        {/* Portrait — centered, contained */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex flex-col items-center pb-[40px] md:pb-[60px]"
        >
          <Link to="/about" className="block relative w-[180px] md:w-[220px] group cursor-pointer">
            <div className="relative overflow-hidden w-[180px] h-[240px] md:w-[220px] md:h-[290px]">
              <img
                src={heroImage}
                alt="Farrah Yousefi"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 25%' }}
              />
              {/* Dark hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <span className="font-['Lustria',serif] text-[15px] tracking-[0.12em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  About Me
                </span>
              </div>
            </div>
          </Link>

        </motion.div>
      </div>
    </section>
  );
}
