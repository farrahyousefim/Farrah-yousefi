import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { PasswordGate } from '@/app/components/PasswordGate';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import bsCover from '@/assets/bs-cover.png';
import bsProblem from '@/assets/bs-problem.png';
import bsUserGroups from '@/assets/bs-user-groups.png';
import bsPersonaSummary from '@/assets/bs-persona-summary.png';
import bsInterviewAnalysis from '@/assets/bs-interview-analysis.png';
import bsDesignCompartments from '@/assets/bs-design-compartments.png';
import bsShortcutsRedesign from '@/assets/bs-shortcuts-redesign.png';

export function BackstageCaseStudy() {
  return (
    <PasswordGate password="Farrahisanamazingdesigner!" projectName="Backstage Home Page Redesign">
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
            src={bsCover}
            alt="Backstage Home Page Redesign cover"
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
            IAG Loyalty is the company behind Avios, the loyalty currency for airlines like British Airways, Aer Lingus, Iberia, and Vueling. The platform engineering team maintains an internal developer portal called <strong className="font-bold">Backstage</strong> — originally built by Spotify — which we customize for our organisation's needs.
          </p>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
            Backstage is where developers request access to tools, tech leads monitor product health compliance, and engineering managers track the state of their domains.
          </p>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
            There wasn't a specific problem statement driving this project. We had an out-of-the-box homepage plugin that wasn't doing much — and we saw an opportunity. The homepage was already a high-traffic page, so we wanted to use it to solve issues we were seeing elsewhere: keeping users updated on what needs their attention, surfacing their tasks so nothing gets forgotten, and fixing usability problems with the existing shortcuts and navigation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">THE TEAM</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                1 designer, 4 devs,<br />
                1 PM, 1 delivery lead
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">TIMELINE</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Nov 2025 – Feb 2026
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
                Solo designer — full<br />
                process ownership
              </p>
            </div>
          </div>
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
              The Backstage homepage was an out-of-the-box plugin that shipped with almost nothing — a greeting, a search bar, a grid of tool shortcuts, and a starred entities sidebar. That was it. No task surfacing, no health signals, no awareness of what users needed to do or what the platform could offer them.
            </p>
            <img
              src={bsProblem}
              alt="Original Backstage homepage"
              className="w-full rounded-lg mb-4"
            />
            <p className="text-[13px] font-['Lustria',serif] text-gray-500 italic mb-8">
              The original homepage: a wall of tool icons and a search bar. No prioritisation, no signals, no personalization.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              Meanwhile, through support channels and conversations, we kept hearing the same friction points: people forgetting about pending approvals, not knowing their product health was failing, and never discovering Backstage features they could actually benefit from.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
              The homepage was one of the most viewed pages in Backstage — yet it contributed nothing to any of these problems. We wanted to change that.
            </p>
            <blockquote className="border-l-4 border-black pl-6 py-2">
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed italic">
                Instead of asking "what should we add to the homepage?" I reframed the question: <strong className="font-bold">"What tasks are people failing or doing slowly today — and what jobs does the homepage need to support?"</strong>
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Discovery & Research */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Discovery & Research
          </h2>

          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            To understand what should go on the homepage, I first needed to understand the people who land on it. Backstage serves three distinct persona groups, each with fundamentally different reasons for visiting.
          </p>

          <img
            src={bsUserGroups}
            alt="Three user groups: Developer, Tech Lead, Engineering Manager"
            className="w-full rounded-lg mb-2"
          />
          <p className="text-[13px] font-['Lustria',serif] text-gray-500 italic mb-8">
            The three primary Backstage personas and their arrival intents.
          </p>

          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            The research setup
          </h3>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
            I ran <strong className="font-bold">13 user research sessions</strong> across all three persona groups — 8 developers, 3 tech leads, and 2 engineering managers. Each session was 30 minutes and packed three activities into one sitting:
          </p>
          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2 mb-8">
            <li><strong className="font-bold">Interview</strong> — understanding their Backstage usage, frustrations, and mental models</li>
            <li><strong className="font-bold">Concept test</strong> — showing two homepage concepts and gathering feedback on what they'd click first, what was unclear, and what was missing</li>
            <li><strong className="font-bold">Card sorting</strong> — users organised potential homepage features into "needed," "nice to have," and "not needed" buckets</li>
          </ul>

          <img
            src={bsInterviewAnalysis}
            alt="Interview analysis process showing clustering of insights"
            className="w-full rounded-lg mb-2"
          />
          <p className="text-[13px] font-['Lustria',serif] text-gray-500 italic mb-8">
            Clustering research findings into patterns across all 13 interviews.
          </p>

          <img
            src={bsPersonaSummary}
            alt="Persona summary cards for Developer, Engineering Manager, and Tech Lead"
            className="w-full rounded-lg mb-2"
          />
          <p className="text-[13px] font-['Lustria',serif] text-gray-500 italic mb-8">
            Persona cards synthesised from the research — goals, frustrations, tasks, and needs for each group.
          </p>

          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            What I found
          </h3>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
            Across all 13 sessions, four core problems kept surfacing that the homepage could address:
          </p>
          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2 mb-8">
            <li><strong className="font-bold">Not knowing what needs to be done</strong> — Pending approvals forgotten. Failing product health scores unnoticed. Tasks slipping through the cracks.</li>
            <li><strong className="font-bold">Not knowing what Backstage offers</strong> — Users don't browse and don't explore. Useful features exist but go undiscovered unless someone tells them directly.</li>
            <li><strong className="font-bold">Not knowing how things work</strong> — Product Health setup is confusing. Shortcut links are mistaken for tool request actions. Navigation is unpredictable.</li>
          </ul>

          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            One insight cut across everything: <strong className="font-bold">users don't come to Backstage daily, and they don't come to browse.</strong> They arrive with a specific task — request access, check compliance, find a team — and want to leave as soon as it's done.
          </p>

          <blockquote className="border-l-4 border-black pl-6 py-2 mb-8">
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed italic">
              The homepage is the one guaranteed touchpoint. If it doesn't surface what matters in 5 seconds, users will navigate past it — every time.
            </p>
          </blockquote>

          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            Persona needs — what each group actually wants on the homepage
          </h3>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
            The card sorting results revealed sharp differences in what each persona considers essential versus noise:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-[14px] md:text-[15px] font-['Lustria',serif]">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left text-[12px] uppercase tracking-wider text-gray-500 py-3 pr-4 w-[20%]"></th>
                  <th className="text-left text-[12px] uppercase tracking-wider text-gray-500 py-3 pr-4 w-[27%]">Developer</th>
                  <th className="text-left text-[12px] uppercase tracking-wider text-gray-500 py-3 pr-4 w-[27%]">Tech Lead</th>
                  <th className="text-left text-[12px] uppercase tracking-wider text-gray-500 py-3 w-[27%]">Eng. Manager</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 align-top"><strong className="font-bold text-black">Primary goal</strong></td>
                  <td className="py-3 pr-4 align-top">"I click what I need and leave."</td>
                  <td className="py-3 pr-4 align-top">"What is failing? What needs fixing?"</td>
                  <td className="py-3 align-top">"Show me the health of the whole domain."</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 align-top"><strong className="font-bold text-black">Must have</strong></td>
                  <td className="py-3 pr-4 align-top">Quick shortcuts, access requests, catalog search</td>
                  <td className="py-3 pr-4 align-top">Team product health, approvals, trends/history</td>
                  <td className="py-3 align-top">Domain health snapshot, reliability metrics, team list</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 align-top"><strong className="font-bold text-black">Nice to have</strong></td>
                  <td className="py-3 pr-4 align-top">Personal stats, toolbox utilities</td>
                  <td className="py-3 pr-4 align-top">Documentation, compliance alerts</td>
                  <td className="py-3 align-top">SLA/SLO stats, AWS costs</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 align-top"><strong className="font-bold text-black">Noise</strong></td>
                  <td className="py-3 pr-4 align-top">Global product health, generic to-dos</td>
                  <td className="py-3 pr-4 align-top">PagerDuty widget, Skill Exchange</td>
                  <td className="py-3 align-top">Generic to-dos, individual component shortcuts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Defining the Homepage's Role */}
      <section className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
              Defining the Homepage's Role
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              Before opening Figma, I needed to settle an important question with the team: what is a homepage actually <em>good at</em>?
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
              A homepage is not good at depth, education, or replacing core workflows. It's best at <strong className="font-bold">orientation and direction</strong>. A good homepage answers three questions in under 5 seconds:
            </p>
            <ol className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-decimal list-inside space-y-2 mb-6">
              <li>What is going on that matters to me right now?</li>
              <li>What should I do next?</li>
              <li>Where do I go to do it?</li>
            </ol>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
              Anything beyond that belongs deeper in the product.
            </p>

            <blockquote className="border-l-4 border-black pl-6 py-2 mb-8">
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                <strong className="font-bold">The homepage role statement:</strong> The Backstage homepage is not a place to browse or learn — it's a place to quickly understand what matters right now and get routed to the right action with minimal effort. It's a decision board, not a destination.
              </p>
            </blockquote>

            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
              This framing was equally important for setting boundaries. I was explicit with stakeholders: <strong className="font-bold">not all problems can be solved with a homepage.</strong> The homepage can surface Product Health issues but can't fix the PH model. It can point to the catalog but can't fix inconsistent information architecture. It can route users to tools but can't fix broken access request flows. Naming what the homepage <em>isn't</em> responsible for protected the project from becoming a feature dump.
            </p>
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Design Approach
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
            I recognised early that this was a <strong className="font-bold">complex problem</strong> — multiple persona groups, competing needs, uncertain value of individual features. I used the Cynefin framework to guide my approach: in complex domains, you probe, sense, and respond rather than analyse and execute.
          </p>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            This translated into two practical principles:
          </p>

          <div className="space-y-6 mb-8">
            <blockquote className="border-l-4 border-black pl-6 py-2">
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                <strong className="font-bold">Start small, ship incrementally</strong><br />
                No big-bang redesign. Release one widget at a time. Keep the blast radius small. Each homepage section is a modular block that can be fixed or replaced without breaking the rest.
              </p>
            </blockquote>
            <blockquote className="border-l-4 border-black pl-6 py-2">
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                <strong className="font-bold">Test assumptions, not just designs</strong><br />
                Before designing solutions, I logged explicit assumptions and tested them. Several were disproven — preventing investment in features that wouldn't have worked.
              </p>
            </blockquote>
          </div>

          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            Assumption tracking
          </h3>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
            I kept a running log of assumptions and their outcomes. This turned out to be one of the most valuable practices in the project:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-[14px] md:text-[15px] font-['Lustria',serif]">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left text-[12px] uppercase tracking-wider text-gray-500 py-3 pr-4 w-[60%]">Assumption</th>
                  <th className="text-left text-[12px] uppercase tracking-wider text-gray-500 py-3 w-[40%]">Outcome</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">A bigger search bar will invite more searching</td>
                  <td className="py-3"><span className="inline-block bg-red-100 text-red-700 text-[12px] font-bold px-2 py-0.5 rounded">Disproven</span></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Catalog quick links will increase ownership awareness</td>
                  <td className="py-3"><span className="inline-block bg-red-100 text-red-700 text-[12px] font-bold px-2 py-0.5 rounded">Disproven</span></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Users will click on notifications</td>
                  <td className="py-3"><span className="inline-block bg-red-100 text-red-700 text-[12px] font-bold px-2 py-0.5 rounded">Disproven</span></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Putting To-Dos at the top increases task engagement</td>
                  <td className="py-3"><span className="inline-block bg-green-100 text-green-700 text-[12px] font-bold px-2 py-0.5 rounded">Validated</span></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Pending request visibility helps approval rates</td>
                  <td className="py-3"><span className="inline-block bg-green-100 text-green-700 text-[12px] font-bold px-2 py-0.5 rounded">Validated</span></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Promotion buttons increase engagement with Backstage features</td>
                  <td className="py-3"><span className="inline-block bg-yellow-100 text-yellow-700 text-[12px] font-bold px-2 py-0.5 rounded">Partial — intent validated, execution needs work</span></td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Announcements mixed with to-dos work well</td>
                  <td className="py-3"><span className="inline-block bg-red-100 text-red-700 text-[12px] font-bold px-2 py-0.5 rounded">Disproven — must be separated</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Design */}
      <section className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
              Design
            </h2>

            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
              With the research synthesised and assumptions logged, I needed to decide where to start. I prioritised homepage sections based on frequency of use across personas and ease of building versus impact.
            </p>

            <img
              src={bsDesignCompartments}
              alt="Homepage compartments prioritisation board"
              className="w-full rounded-lg mb-2"
            />
            <p className="text-[13px] font-['Lustria',serif] text-gray-500 italic mb-8">
              Prioritising homepage sections: To-Dos and Product Health rose to the top, with quick shortcuts close behind.
            </p>

            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
              I kept the shortcuts and starred links since users were already relying on them — but redesigned the issues they had. Then I layered in new sections one at a time.
            </p>

            {/* Shortcuts redesign */}
            <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
              Shortcuts redesign
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              The original shortcuts were a wall of tool icons that dominated the entire screen. Worse, users consistently confused them with the "request access to a tool" action — they thought clicking a shortcut would start an access request, when it actually opened an external URL.
            </p>

            <img
              src={bsShortcutsRedesign}
              alt="Before and after of the shortcuts section redesign"
              className="w-full rounded-lg mb-2"
            />
            <p className="text-[13px] font-['Lustria',serif] text-gray-500 italic mb-8">
              Redesigned shortcuts: compact, clearly external links, most-used surfaced to top.
            </p>

            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              The new design addressed this with a URL preview and "open in new tab" icon on hover plus a tooltip, making it immediately clear these are external links. Only 6 items are visible by default (rest behind "show more"), and the most recently clicked links are surfaced to the top — stored locally as a lightweight personalisation starting point.
            </p>

            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
              <strong className="font-bold">A rookie mistake I caught early:</strong> I had the idea of letting users add their own custom URLs to shortcuts. After discussing with the team, I realised this would turn the section into a bookmark manager and handling custom icons for arbitrary links would be a significant technical burden. I killed the idea before it consumed any development time.
            </p>

            {/* My Stats */}
            <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
              My Stats — Product Health visibility
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
              Product Health is <em>the</em> primary reason tech leads and managers visit Backstage. But developers mostly don't care about it, and engineering managers own too many products to display cleanly.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
              For the MVP, I let users add product groups they care about themselves — avoiding the technical complexity of auto-populating from incomplete profile data. The section is named "My Stats" generically to future-proof it beyond Product Health data. Clicking a product group deep-links to the PH overview page with that group selected and its row expanded.
            </p>

            {/* To-Do */}
            <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
              To-Do / Needs Your Attention
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
              This section exists to make sure nothing is forgotten — pending approvals, failing compliance, overdue team updates. One research finding shaped the entire approach: when irrelevant items (like a Skill Exchange announcement) were mixed into the to-do list, users ignored the entire section. If everything looks like a priority, nothing is.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
              So I enforced a strict rule: <strong className="font-bold">only urgent, actionable items belong here.</strong> The section hides completely when there's nothing to show — no persistent empty state. Announcements and FYI content live in a separate section entirely.
            </p>

            {/* Platform News */}
            <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
              Platform News & Updates
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
              Users repeatedly told us they miss important updates because they get lost in Slack and email. The homepage needed a reliable, centralised channel for platform communications — new features, security reminders, version changes.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
              Each entry uses type labels ("Action required," "Security update," "New feature") so users can scan quickly. Unread entries appear bold; after clicking through they shift to a read state. Short and clear — no marketing language, no feature dumps.
            </p>

            {/* Promotion buttons */}
            <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
              Promotion buttons
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
              "Explore the Ecosystem" and "Access Developer Tools" — two persistent entry points for Backstage's most important but under-discovered features. These can be swapped over time to promote different capabilities like the Toolbox utilities.
            </p>

            {/* Edge cases */}
            <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
              Edge case design
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
              I designed and stress-tested three homepage states to make sure the layout held up: the <strong className="font-bold">busiest homepage</strong> (multiple products, many pending approvals, unread news), the <strong className="font-bold">emptiest homepage</strong> (no to-dos, one product, minimal shortcuts), and the <strong className="font-bold">normal homepage</strong> for a typical tech lead with a couple of products and some pending items.
            </p>
          </div>
        </div>
      </section>

      {/* How I Used AI */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            How I Used AI in This Project
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            I believe in being transparent about how I work. AI was a meaningful part of my workflow in this project — not as a replacement for thinking, but as an accelerator for the parts where speed matters and judgment is still mine.
          </p>

          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4 mb-8">
            <li>
              <strong className="font-bold">Research analysis</strong> — After conducting 13 user interviews, I had an enormous volume of transcript data to synthesise. I used ChatGPT to help cluster findings — I created a dedicated project, removed participant names from the transcripts, and asked it to surface the most important insights with supporting quotes. This dramatically accelerated the analysis phase while I retained full editorial control over which insights mattered and how they connected to design decisions.
            </li>
            <li>
              <strong className="font-bold">Prototyping with Figma Make</strong> — I used Figma Make (Figma's AI prototyping tool) to generate a fully functional website prototype for user testing. This collapsed what would normally be separate design and prototyping phases into a single workflow — producing a testable artifact faster than traditional static mockups while maintaining enough fidelity to get meaningful feedback.
            </li>
            <li>
              <strong className="font-bold">Design thinking partner</strong> — Throughout the project I used AI (Claude) as a thought partner — structuring arguments for stakeholders, refining UX copy, pressure-testing my homepage role definition, and expanding documentation drafts. I used it to think with, not to think for me.
            </li>
          </ul>

          <blockquote className="border-l-4 border-black pl-6 py-2">
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed italic">
              AI didn't make the design decisions — it made the <strong className="font-bold">space</strong> for better decisions. By compressing analysis time and prototype creation, I could invest more energy in the parts that require human judgment: interpreting what users actually mean, navigating organisational tensions, and making design trade-offs that balance competing needs.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Open Design Tensions */}
      <section className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
              Open Design Tensions
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              Good design work doesn't pretend every problem was solved. These tensions remained active throughout the project and shaped the ongoing roadmap:
            </p>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
              <li><strong className="font-bold">To-Dos vs. Stats duplication</strong> — if Product Health is failing, the same signal appears in both sections. Resolution direction: keep To-Dos purely action-oriented, use Stats for ongoing awareness.</li>
              <li><strong className="font-bold">Multi-product scaling</strong> — engineering managers with 7+ products create visual overwhelm. The user-driven "add your own groups" MVP works but doesn't scale gracefully.</li>
              <li><strong className="font-bold">Role-based content</strong> — can we send role-dependent tasks (e.g., "update team info" only to tech leads)? Desirable but not resolved in MVP.</li>
              <li><strong className="font-bold">Notification underuse</strong> — users consistently didn't recognise or engage with the built-in notification feature. An open challenge.</li>
              <li><strong className="font-bold">Feature discoverability format</strong> — the promotion buttons weren't landing in their current design. The intent is validated; the execution needs iteration.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Success Metrics
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
            We defined success criteria before shipping to avoid retrofitting narratives to outcomes:
          </p>
          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2">
            <li>Daily active usage of Backstage increases</li>
            <li>Time on homepage increases (indicating engagement rather than pass-through)</li>
            <li>Dev tooling approval completion rate improves</li>
            <li>Product Health compliance scores improve faster</li>
            <li>Reduction in ambiguity-related questions across platform engineering channels</li>
          </ul>
        </div>
      </section>

      {/* What I Learned */}
      <section className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
              What I Learned
            </h2>

            <div className="space-y-6">
              <blockquote className="border-l-4 border-black pl-6 py-2">
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                  <strong className="font-bold">On the homepage's role</strong><br />
                  A homepage is an orientation layer, not a destination. For a tool people don't visit daily, it carries the burden of catching users up and routing them efficiently. It points to problems — it doesn't fix them.
                </p>
              </blockquote>
              <blockquote className="border-l-4 border-black pl-6 py-2">
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                  <strong className="font-bold">On research-led design</strong><br />
                  The 13-interview study was the foundation for every design decision. Without it, the homepage would have been a feature dump. With it, every section had a clear reason to exist and a clear reason for its placement.
                </p>
              </blockquote>
              <blockquote className="border-l-4 border-black pl-6 py-2">
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                  <strong className="font-bold">On assumption tracking</strong><br />
                  Logging assumptions explicitly and tracking outcomes prevented investment in features that wouldn't have worked — like a bigger search bar or catalog quick links. Assumptions disproven early are assumptions that don't waste engineering time.
                </p>
              </blockquote>
              <blockquote className="border-l-4 border-black pl-6 py-2">
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                  <strong className="font-bold">On incremental delivery</strong><br />
                  The Cynefin framing protected me from the "big redesign" trap. Shipping one widget at a time, testing assumptions not just visuals, and keeping the blast radius small meant I could learn and adjust without breaking what already worked.
                </p>
              </blockquote>
              <blockquote className="border-l-4 border-black pl-6 py-2">
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                  <strong className="font-bold">On honesty with stakeholders</strong><br />
                  Naming what the homepage can't fix — Product Health model issues, catalogue IA, documentation quality — was as important as deciding what it should do. That boundary-setting managed expectations and kept scope realistic.
                </p>
              </blockquote>
              <blockquote className="border-l-4 border-black pl-6 py-2">
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                  <strong className="font-bold">On persona tensions</strong><br />
                  A single homepage can't serve three persona groups equally without some form of personalisation. The MVP used user-driven customisation as a lightweight proxy, but true role-based views are the long-term direction.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            What's Next
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
            The homepage redesign shipped, but the vision extends further. The long-term direction is for Backstage to evolve from a utility tool into a <strong className="font-bold">personalised, role-driven decision space</strong>. Upcoming explorations include:
          </p>
          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
            <li><strong className="font-bold">AI-powered assistance</strong> — a chatbot to answer questions about Product Health compliance, team ownership, and documentation, making Backstage more self-serve</li>
            <li><strong className="font-bold">Role-based personalisation</strong> — evolving from user-driven customisation to actual role-aware homepage views</li>
            <li><strong className="font-bold">Historical Product Health data</strong> — trend indicators, timestamps, and score comparisons (strongly requested by tech leads and managers)</li>
            <li><strong className="font-bold">Self-service editing</strong> — letting managers fix team ownership and domain groupings without filing engineering tickets</li>
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
