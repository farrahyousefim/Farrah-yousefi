import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { PasswordGate } from '@/app/components/PasswordGate';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import iaglCover from '@/assets/iagl developer portal project.png';
import iaglAppsIter1 from '@/assets/iagl-apps-iter1.png';
import iaglAppsIter2 from '@/assets/iagl-apps-iter2.png';
import iaglAppsIter3 from '@/assets/iagl-apps-iter3.png';
import iaglAppsIter4 from '@/assets/iagl-apps-iter4.png';
import iaglClmIntegration from '@/assets/iagl-clm-integration.png';
import iaglProcessMap from '@/assets/iagl-process-map.png';

export function IAGLCaseStudy() {
  return (
    <PasswordGate password="Farrahisanamazingdesigner!" projectName="IAGL Developer Portal">
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
            src={iaglCover}
            alt="IAGL Developer Portal cover"
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
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
            IAG Loyalty is the company behind Avios, the loyalty points for airlines like British Airways, Aer Lingus,
            Iberia and Vueling. Partner onboarding on Developer portal used to be a manual process taking{' '}
            <strong className="font-bold">up to 4 months</strong>, involving multiple teams, and Jira tickets. In this
            case study, we redesigned the Developer portal, built a new internal platform to manage partners (PMT),
            centralized the information and helped reduce the technical onboarding just to{' '}
            <strong className="font-bold">24 hours.</strong>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">THE TEAM</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                1 designer, 4 Developers,<br />
                1 Product manager and<br />
                1 Delivery lead,
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">TIMELINE</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Sep 2023 - Dec 2025
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">Platform</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Responsive web<br />
                (desktop-first)
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">MY ROLE</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Solo designer, owner of<br />
                the whole design process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Got Interested */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[24px] md:text-[32px] font-['Lustria',serif] text-black leading-tight">
            Got interested? You can read the details of what we did down here! ⬇️
          </h2>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
              The Problem
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              Partner onboarding at IAG Loyalty was slow, fragmented, and frustrating.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              It took <strong className="font-bold">3–4 months</strong>, involved{' '}
              <strong className="font-bold">constant back-and-forth</strong> across six teams, and left Sales
              Engineering and partners equally annoyed.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
              This blocked the business from onboarding more partners, slowed commercial growth, reduced partner
              satisfaction, and created huge operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* Core Insight */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Core Insight
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
            Through weeks of mapping the real workflows (not the assumed ones), I uncovered the root issue:
          </p>
          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
            <li>The delays weren't caused by "complex tools" — they were caused by unclear ownership and scattered processes across Identity, Sales Engineering, Loyalty Ops, CLM, and Data.</li>
            <li>Everyone was doing the right tasks… but in the wrong order, with the wrong team owning each step.</li>
            <li>Fixing this required redesigning the entire mental model and sequence of partner onboarding.</li>
          </ul>
        </div>
      </section>

      {/* What We Designed */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8 md:mb-12">
            What We Designed (and Why It Worked)
          </h2>

          {/* A. Automating application creation */}
          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            A. Automating application creation inside PMT
          </h3>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            Previously, Sales Engineering created Jira tickets → Identity team → manual checks → back-and-forth → delays.
            We moved application creation fully into PMT, removing Identity from the critical path.
            This made the step: instant, owned, auditable, and scalable.
          </p>

          <div className="space-y-8 mb-16">
            <img src={iaglAppsIter1} alt="Applications - first iteration" className="w-full rounded-lg" />
            <img src={iaglAppsIter2} alt="Applications - second iteration" className="w-full rounded-lg" />
            <img src={iaglAppsIter3} alt="Applications - third iteration" className="w-full rounded-lg" />
            <img src={iaglAppsIter4} alt="Applications - final design" className="w-full rounded-lg" />
          </div>

          {/* B. Enabling Sales Engineering */}
          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            B. Enabling Sales Engineering to create partners directly
          </h3>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
            Instead of dozens of Jira tickets bouncing between teams, PMT now lets Sales Engineering:
            create partners, create applications, request approval, and hand off to CLM automatically.
            This eliminated the long "waiting gap" between teams.
          </p>

          {/* C. Integrating PMT with CLM */}
          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            C. Integrating PMT with CLM
          </h3>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            Partner creation was heavily manual in CLM.
            Now, PMT pre-fills data, reduces human error, and sends structured, validated information straight into CLM.
            Result: no more chasing people for missing info.
          </p>
          <img src={iaglClmIntegration} alt="PMT and CLM integration" className="w-full rounded-lg" />
        </div>
      </section>

      {/* How I Designed It */}
      <section className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
              How I Designed It (My Process)
            </h2>

            <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
              Discovering the real flow
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
              I started by mapping every single step across all teams.
              This meant reading documentation, interviewing stakeholders, and visually mapping the real process
              (not just the official one).
            </p>
            <img src={iaglProcessMap} alt="Pre-sales onboarding process map" className="w-full rounded-lg mb-8 md:mb-12" />

            <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
              Design principles driving every decision
            </h3>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2 mb-8 md:mb-12">
              <li><strong className="font-bold">Feasibility first</strong> — this project was deeply technical and dependent on backend constraints.</li>
              <li><strong className="font-bold">Scalability</strong> — reusable components so devs could build once and reuse everywhere.</li>
              <li><strong className="font-bold">Familiarity</strong> — mirrored the mental model Sales Engineering had built over years.</li>
              <li><strong className="font-bold">Clarity</strong> — replaced scattered language with consistent terminology across PMT, Identity, CLM.</li>
            </ul>

            <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
              Designing with incomplete information
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
              Many technical details were emerging mid-project. To keep moving, I focused on:
            </p>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2 mb-8 md:mb-12">
              <li>Simple flows</li>
              <li>Safe defaults</li>
              <li>Clear guardrails</li>
              <li>Flexible UI that could absorb new requirements without redesign</li>
            </ul>

            <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
              Validating the solution
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
              Each major iteration went through:
            </p>
            <ol className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-decimal list-inside space-y-2">
              <li>Internal reviews with PMT team</li>
              <li>Stakeholder validation with Identity, Sales Engineering, LOPS, CLM</li>
              <li>Live testing in Staging once devs implemented it</li>
            </ol>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mt-4">
              This cycle revealed gaps early, allowing the system to evolve without rework.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome & Impact */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Outcome & Impact
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
            ⏱ From 3–4 months → 24 hours
          </p>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            Sales Engineering confirmed the new flow achieves this target in practice.
            (The rollout is recent, so more qualitative feedback will come as adoption grows.)
          </p>
          <div className="bg-black text-white rounded-lg p-6 md:p-10 space-y-4">
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] leading-relaxed">
              ⚡ <strong className="font-bold">Faster partner onboarding = more revenue potential</strong> — Sales Engineering can onboard more partners in a shorter time.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] leading-relaxed">
              🤝 <strong className="font-bold">Higher partner satisfaction</strong> — Less waiting, fewer errors, and a smoother journey.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] leading-relaxed">
              💰 <strong className="font-bold">Significant operational cost savings</strong> — Multiple teams save hours per partner; this compounds at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Reflection
          </h2>
          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed space-y-6">
            <li>Turning an ambiguous, multi-team workflow into a clear end-to-end product.</li>
            <li>Letting the business unlock partner onboarding speed they didn't think was possible.</li>
            <li>Designing something both technically feasible and strategically impactful.</li>
            <li><strong className="font-bold">Designing with incomplete information</strong> — many technical details were unknown at the start, so I learned to design flexible flows that could adapt as the system matured.</li>
            <li><strong className="font-bold">Connecting six teams with different mental models</strong> — I had to translate language, align terminology, and help everyone see the process end-to-end, not just their own part.</li>
            <li><strong className="font-bold">Letting feasibility guide the solution</strong> — in such a technical project, choosing the simplest and most scalable path was key to delivering fast and reducing dev cost.</li>
            <li><strong className="font-bold">Respecting existing mental models</strong> — Sales Engineering had deep domain knowledge, so mirroring their language and habits was essential for adoption.</li>
            <li><strong className="font-bold">Working inside a system, not just a feature</strong> — this taught me how small changes in sequencing or ownership can unlock massive improvements.</li>
          </ul>
        </div>
      </section>

      {/* Back to Portfolio */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto text-center">
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
    </PasswordGate>
  );
}
