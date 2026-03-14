import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function IAGLCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationMinimal />
      
      {/* Back button */}
      <div className="container mx-auto px-6 pt-24">
        <Link to="/" className="inline-flex items-center gap-2 text-black hover:opacity-70 transition-opacity font-['Lustria',serif]">
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-['Lustria',serif] text-black mb-4">
            IAGL Developer Portal
          </h1>
          <p className="text-xl font-['Lustria',serif] text-gray-600 mb-12">
            Improving partner onboarding from 4 months to 24h!
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-['Lustria',serif] text-black mb-8">
            Project Overview
          </h2>
          
          <p className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-12">
            IAG Loyalty is the company behind Avios, the loyalty points for airlines like British airways, Aer Lingus, 
            Iberia and Vueling. Partner onboarding on Developer portal used to be a manual process taking <strong className="font-bold">up 
            to 4 month</strong>, involving multiple teams, and Jira tickets. In this case study, we redesigned the 
            Developer portal, built a new internal platform to manage partners (PMT), centralized the information 
            and helped reduce the technical onboarding just to <strong className="font-bold">24 hours.</strong>
          </p>

          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">THE TEAM</h3>
              <p className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                1 designer, 4 Developers,<br/>
                1 Product manager and<br/>
                1 Delivery lead,
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">TIMELINE</h3>
              <p className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Sep 2023 - Dec 2025
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">Platform</h3>
              <p className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Responsive web<br/>
                (desktop-first)
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">MY ROLE</h3>
              <p className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Solo desinger, owner of<br/>
                the whole design<br/>
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Got Interested Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[32px] font-['Lustria',serif] text-black leading-tight">
            Got interested? You can read the details of what we did down here! ⬇️
          </h2>
        </div>
      </section>

      {/* The Problem Section (Blue Background) */}
      <section className="bg-[#D4E8EC] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[40px] font-['Lustria',serif] text-black mb-8">
              The Problem
            </h2>
            
            <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed mb-6">
              Partner onboarding at IAG Loyalty was slow, fragmented, and frustrating.
            </p>

            <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed mb-6">
              It took <strong className="font-bold">3-4 months</strong>, involved <strong className="font-bold">constant back-and-forth</strong> across 
              six teams, and left Sales Engineering and partners equally annoyed.
            </p>

            <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed">
              This blocked the business from onboarding more partners, slowed commercial growth, reduced partner satisfaction, and 
              created huge operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* Core Insight */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-['Lustria',serif] text-black mb-8">
            Core Insight
          </h2>
          
          <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed mb-6">
            Through weeks of mapping the real workflows (not the assumed ones), I uncovered the root issue:
          </p>

          <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed mb-6">
            The delays weren't caused by "complex tools" — they were caused by <strong className="font-bold">unclear ownership</strong> and <strong className="font-bold">scattered 
            processes</strong> across Identity, Sales Engineering, Loyalty Ops, CLM, and Data.
          </p>

          <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed mb-6">
            Everyone was doing the right tasks… but in the wrong order, with the wrong team owning each step.
          </p>

          <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed">
            Fixing this required redesigning the entire mental model and sequence of partner onboarding.
          </p>
        </div>
      </section>

      {/* What I Discovered */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-['Lustria',serif] text-black mb-8">
            What I Discovered (and why it worked)
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-[24px] font-['Lustria',serif] text-black mb-4">
                1. Automating application creation inside PMT
              </h3>
              <p className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
                Previously, Sales Engineering created Jira tickets → Identity team → manual checks → back-and-forth → delays.
              </p>
              <p className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
                We moved application creation fully into PMT, removing Identity from the critical path.
              </p>
              <p className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                This made the step: <strong className="font-bold">instant</strong>, <strong className="font-bold">owned</strong>, <strong className="font-bold">auditable</strong>, and <strong className="font-bold">scalable</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-[24px] font-['Lustria',serif] text-black mb-4">
                2. Enabling Sales Engineering to create partners directly
              </h3>
              <p className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
                Instead of dozens of Jira tickets bouncing between teams, PMT now lets Sales Engineering:
              </p>
              <ul className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4 list-disc list-inside space-y-2">
                <li>create partners</li>
                <li>create applications</li>
                <li>request approval</li>
                <li>and hand off to CLM automatically</li>
              </ul>
              <p className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                This eliminated the long "waiting gap" between teams.
              </p>
            </div>

            <div>
              <h3 className="text-[24px] font-['Lustria',serif] text-black mb-4">
                3. Integrating PMT with CLM
              </h3>
              <p className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
                Partner creation was heavily manual in CLM.
              </p>
              <p className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
                Now, PMT pre-fills data, reduces human error, and sends structured, validated information straight into CLM.
              </p>
              <p className="text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Result: <strong className="font-bold">no more chasing people for missing info.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Designed It (Blue Background) */}
      <section className="bg-[#D4E8EC] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[40px] font-['Lustria',serif] text-black mb-8">
              How I Designed It (My Process)
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-[24px] font-['Lustria',serif] text-black mb-4">
                  Discovering the real flow
                </h3>
                <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed mb-4">
I started by mapping every single step across all teams.
This meant reading documentation, interviewing stakeholders, and visually mapping the real process (not just the official one) — as shown on page 2–3 of your draft  .
                </p>
              
              </div>

              <div>
                <h3 className="text-[24px] font-['Lustria',serif] text-black mb-4">
                  Design principles driving every decision
                </h3>
                <ul className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed space-y-2">
                  <li>• <strong className="font-bold">Feasibility first</strong> — this project was deeply technical and dependent on backend constraints.</li>
                  <li>• <strong className="font-bold">Scalability</strong> — reusable components so devs could build once and reuse everywhere.</li>
                  <li>• <strong className="font-bold">Familiarity</strong> — mirrored the mental model Sales Engineering had built over years.</li>
                  <li>• <strong className="font-bold">Clarity</strong> — replaced scattered language with consistent terminology across PMT, Identity, CLM.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[24px] font-['Lustria',serif] text-black mb-4">
                  Designing with incomplete information
                </h3>
                <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed mb-4">
                  Many technical details were emerging mid-project.
                </p>
                <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed mb-4">
                  To keep moving, I focused on:
                </p>
                <ul className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed space-y-2">
                  <li>• simple flows</li>
                  <li>• safe defaults</li>
                  <li>• clear guardrails</li>
                  <li>• flexible UI that could absorb new requirements without redesign</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[24px] font-['Lustria',serif] text-black mb-4">
                  Validating the solution
                </h3>
                <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed mb-4">
                  Each major iteration went through:
                </p>
                <ol className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed space-y-2 mb-4 list-decimal list-inside">
                  <li>Internal reviews with PMT team</li>
                  <li>Stakeholder validation with Identity, Sales Engineering, LOPS, CLM</li>
                  <li>Live testing in Staging once devs implemented it</li>
                </ol>
                <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed">
                  This cycle revealed gaps early, allowing the system to evolve without rework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome & Impact (Gray Background) */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[40px] font-['Lustria',serif] text-black mb-8">
              Outcome & Impact
            </h2>

            <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed mb-4">
              ⏱ From 3–4 months → 24 hours
            </p>

            <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed mb-2">
              Sales Engineering confirmed the new flow achieves this target in practice.
            </p>

            <p className="text-[17px] font-['Lustria',serif] text-gray-800 leading-relaxed mb-8">
              (The rollout is recent, so more qualitative feedback will come as adoption grows.)
            </p>

            <div className="bg-black text-white p-8 rounded-lg space-y-4">
              <p className="text-[17px] font-['Lustria',serif] leading-relaxed">
                ⚡ <strong className="font-bold">Faster partner onboarding = more revenue potential</strong> Sales Engineering can onboard more partners in a shorter time.
              </p>
              <p className="text-[17px] font-['Lustria',serif] leading-relaxed">
                🤝 <strong className="font-bold">Higher partner satisfaction</strong> Less waiting, fewer errors, and a smoother journey.
              </p>
              <p className="text-[17px] font-['Lustria',serif] leading-relaxed">
                💰 <strong className="font-bold">Significant operational cost savings</strong> Multiple teams save hours per partner; this compounds at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-['Lustria',serif] text-black mb-6">
            Reflection
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-['Lustria',serif] text-black mb-3">
                What I Learned
              </h3>
              <p className="text-base font-['Lustria',serif] text-gray-700 leading-relaxed">
                This project taught me the importance of questioning existing processes rather than just 
                digitizing them. The biggest gains came from removing unnecessary steps, not from making 
                them faster.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-['Lustria',serif] text-black mb-3">
                If I Could Do It Again
              </h3>
              <p className="text-base font-['Lustria',serif] text-gray-700 leading-relaxed">
                I would have involved partners even earlier in the design process. While we did extensive 
                research and testing, having partners as co-designers from day one could have surfaced 
                insights even faster.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-['Lustria',serif] text-black mb-3">
                Looking Forward
              </h3>
              <p className="text-base font-['Lustria',serif] text-gray-700 leading-relaxed">
                We're now exploring AI-powered documentation that can answer partner questions in real-time 
                and provide personalized integration guidance based on their specific use case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
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