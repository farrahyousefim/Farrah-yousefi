import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { Footer } from '@/app/components/Footer';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import heroImage from '@/assets/d509ae547dba052d2a2bc1109d1abea829fdc06e.png';

const experience = [
  { company: 'Reaktor', role: 'Product Designer', period: 'Oct 2023 - Present', active: true },
  { company: 'Snapp', role: 'Product Designer', period: 'Oct 2021 - 2023', active: false },
  { company: 'Momtaz', role: 'UI&UX Designer', period: 'Dec 2019 - Nov 2021', active: false },
  { company: 'Adowing', role: 'UI&UX Designer', period: 'Jul 2018 - Dec 2019', active: false },
];

const skills = [
  'User Research', 'User Testing', 'Agile',
  'UI Design', 'Interaction', 'Design Strategy',
];

export function About() {
  return (
    <div className="min-h-screen bg-[#fffcfb]">
      <NavigationMinimal />

      {/* Hero — split layout: image left, name right */}
      <div className="pt-[72px] grid grid-cols-2 min-h-screen">
        {/* Left — Photo */}
        <div className="relative">
          <img
            src={heroImage}
            alt="Farrah Yousefi"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right — Name + credits */}
        <div className="flex flex-col justify-center px-16">
          <h1 className="font-['Lustria',serif] text-[120px] text-black leading-[0.95] tracking-[-0.02em] mb-16">
            Farrah
            <br />
            Yousefi
          </h1>
          <p className="font-['Lustria',serif] text-[14px] text-black/50 leading-[2]">
            Product Designer
            <br />
            Based in Amsterdam
            <br />
            Previously Tehran
          </p>
        </div>
      </div>

      {/* Tagline — centered, italic */}
      <div className="mx-auto max-w-[700px] px-8 py-20 text-center">
        <p className="font-['Lustria',serif] text-[28px] text-black leading-[1.4] italic">
          Product designer. Researcher. Strategist: The one who brings clarity to chaos and good energy to every room.
        </p>
      </div>

      {/* Bio text — narrow column */}
      <div className="mx-auto max-w-[600px] px-8 pb-20">
        <p className="font-['Lustria',serif] text-[17px] text-black/80 leading-[1.9] mb-10">
          I am a curious, proactive product designer who loves to learn, make people's lives easier, and truly enjoys collaboration and storytelling. I love working closely with technology, and people.
        </p>
        <p className="font-['Lustria',serif] text-[17px] text-black/80 leading-[1.9]">
          As a designer, I'm open to learn and adapt to new ways of work, new skills, and new industries as long as I'm solving meaningful problems that help people and make their lives easier.
        </p>
      </div>

      {/* Work Experience */}
      <div className="mx-auto max-w-[600px] px-8 pb-16">
        <h2 className="font-['Lustria',serif] text-[13px] tracking-[0.15em] uppercase text-black/40 mb-10">
          Work Experience
        </h2>
        <div className="space-y-0">
          {experience.map((job, index) => (
            <div key={index} className="flex items-start gap-5">
              <div className="flex flex-col items-center pt-[7px]">
                <div className={`w-[10px] h-[10px] rounded-full ${
                  job.active
                    ? 'border-[1.5px] border-black/30 bg-transparent'
                    : 'bg-black'
                }`} />
                {index < experience.length - 1 && (
                  <div className="w-[1px] h-10 bg-black/15" />
                )}
              </div>
              <p className="font-['Lustria',serif] text-[15px] text-black/70 leading-[1.5] pb-6">
                {job.company} · {job.role} · {job.period}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-[600px] px-8">
        <div className="h-[0.5px] bg-black/15 mb-16" />
      </div>

      {/* Skills */}
      <div className="mx-auto max-w-[600px] px-8 pb-24">
        <h2 className="font-['Lustria',serif] text-[13px] tracking-[0.15em] uppercase text-black/40 mb-8">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="font-['Lustria',serif] text-[13px] text-black/60 border border-black/20 rounded-full px-5 py-2.5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Back link */}
      <div className="mx-auto max-w-[600px] px-8 pb-20 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors font-['Lustria',serif] text-[13px] tracking-[0.1em] uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      <Footer />
    </div>
  );
}
