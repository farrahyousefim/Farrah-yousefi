import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import erpCoverFull from '@/assets/erp-cover-full.png';
import erpOldDesign from '@/assets/erp-old-design.png';
import erpColors from '@/assets/erp-colors.png';
import erpTypography from '@/assets/erp-typography.png';
import erpComponents from '@/assets/erp-components.png';
import erpProblems from '@/assets/erp-problems.png';
import erpTableBefore from '@/assets/erp-table-before.png';
import erpTableAfter from '@/assets/erp-table-after.png';
import erpDashboardRedesign from '@/assets/erp-dashboard-redesign.png';
import erpDashboardFinal from '@/assets/erp-dashboard-final.png';

export function ErpCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationMinimal />

      {/* Back button */}
      <div className="container mx-auto px-4 md:px-6 pt-20 md:pt-24">
        <Link to="/" className="inline-flex items-center gap-2 text-black hover:opacity-70 transition-opacity font-['Lustria',serif]">
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
      </div>

      {/* Cover */}
      <section className="container mx-auto px-4 md:px-6 mt-8">
        <div className="max-w-5xl mx-auto">
          <img
            src={erpCoverFull}
            alt="ERP System cover"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Project Overview
          </h1>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
            Since 2008, Momtaz Pharmaceutical Distribution Company has been working to distribute drugs and
            related products nationwide. They had an old ERP system from another provider and it was the time
            to build their brand new system. I joined the project when some parts of the designs were done and
            developed, but had so many user experience problems. There was a need for a design system, redesigns
            and improvements like responsive or dark mode and also designing new sections of the system.
          </p>
          <p className="text-[15px] font-['Lustria',serif] text-gray-500 italic">
            This case study is not fully done yet, soon it will be updated!
          </p>
        </div>
      </section>

      {/* Where to start */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              Where to start?!
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
              When I joined the company an XD file got handed over to me, full of old messy designs, with no
              sign of consistency, wrong spacing, and other UI&UX problems.
            </p>
          </div>
          <img src={erpOldDesign} alt="Old messy design files" className="w-full rounded-lg" />
        </div>
      </section>

      {/* Style guide */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-4">
            Style guide
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
            To bring consistency into life, my first step was to set some ground rules by creating a style guide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <img src={erpColors} alt="Color system" className="w-full rounded-lg" />
            <img src={erpTypography} alt="Typography system" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* Building the component library */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              Building the component library
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
              I checked the files and started to list the most usable items and created components for the ease
              of my future designs. I did this component on Adobe XD and still almost based on what had been
              designed and developed already, I wanted to edit and improve them after I established some ground rules.
            </p>
          </div>
          <img src={erpComponents} alt="Component library" className="w-full rounded-lg" />
        </div>
      </section>

      {/* Time to solve the problems */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
            Time to solve the problems and improve the experience
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            I checked the files and started to list the most usable items and created components for the ease
            of my future designs. I did this component on Adobe XD and still almost based on what had been
            designed and developed already, I wanted to edit and improve them after I established some ground rules.
          </p>
          <img src={erpProblems} alt="UX problems identified" className="w-full rounded-lg mb-10 md:mb-16" />

          {/* Tables redesign */}
          <h3 className="text-[24px] md:text-[32px] font-['Lustria',serif] text-black mb-4">
            Tables redesign
          </h3>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            A huge search box on top which was wasting space and was not even recognizable, chips were so tiny
            and the color contrast was poor. Rows were not scannable were problems that I had to solve in this table.
          </p>
          <img src={erpTableBefore} alt="Table before and after comparison" className="w-full rounded-lg mb-8" />

          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            The first thing that I did was change the art-board size to a standard one, so we don't lose
            anything on different monitor sizes, it gave the table a more appealing look, made it more
            scannable and usable.
          </p>
          <img src={erpTableAfter} alt="Redesigned table" className="w-[500px] rounded-lg" />
        </div>
      </section>

      {/* Dashboard redesign */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
            Dashboard redesign
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            The dashboard, which was the first page that users see, was a plain background with some buttons
            for side menus; I redesigned it with the most used items by users.
          </p>
          <img src={erpDashboardRedesign} alt="Dashboard redesign comparison" className="w-full rounded-lg mb-8" />
          <img src={erpDashboardFinal} alt="Final dashboard design" className="w-full rounded-lg" />
        </div>
      </section>

      {/* To be continued */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-500 italic mb-8 md:mb-12">
            to be continued...
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-black hover:opacity-70 transition-opacity font-['Lustria',serif] text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
