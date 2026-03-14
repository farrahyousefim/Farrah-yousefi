import { motion } from 'motion/react';
import heroImage from '@/assets/d509ae547dba052d2a2bc1109d1abea829fdc06e.png';

export function HeroMinimal() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="container mx-auto px-6">
        <div className="relative w-[729px] h-[526px] ml-20">
          {/* Left vertical black bar */}
          <div className="absolute bg-[#0c0e10] h-[379px] w-[67px] left-[-34px] top-[112px]" />
          
          {/* Large decorative circle */}
          <div className="absolute left-[334.5px] top-[213px] w-[60px] h-[60px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <circle cx="30" cy="30" fill="black" r="30" />
            </svg>
          </div>

          {/* Main image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-[394.5px] h-[526px]"
          >
            <img
              src={heroImage}
              alt="Portfolio"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            />
          </motion.div>

          {/* Black box with text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bg-black left-[335px] top-[286px] w-[372px] px-[24px] py-[16px]"
          >
            <div className="flex flex-col font-['Lustria',serif] text-[36px] text-white leading-[normal] whitespace-pre-wrap">
              <p className="relative shrink-0 w-full">Farrah Yousefi</p>
              <p className="relative shrink-0 w-full">Product Designer</p>
            </div>
            
            {/* Small decorative circle */}
            <div className="absolute left-[328px] top-[80px] w-[17px] h-[17px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <circle cx="8.5" cy="8.5" fill="white" r="8.5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}