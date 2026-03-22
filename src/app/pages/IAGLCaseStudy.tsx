import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { PasswordGate } from '@/app/components/PasswordGate';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import iaglCover from '@/assets/Hero image_ PMT partner detail page showing applications with statuses, inside a browser mockup (1).png';
import iaglAppsIter4 from '@/assets/iagl-apps-iter4.png';
import iaglClmIntegration from '@/assets/iagl-clm-integration.png';
import iaglProcessMap from '@/assets/iagl-process-map.png';

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full bg-gray-100 border border-dashed border-gray-300 rounded-lg flex items-center justify-center py-16 px-8 my-8">
      <p className="font-['Lustria',serif] text-[14px] text-gray-400 text-center italic">{label}</p>
    </div>
  );
}

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

      {/* Title + Meta */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-4">
            IAG Loyalty Developer Portal
          </h1>
          <p className="text-[18px] md:text-[22px] font-['Lustria',serif] text-gray-600 italic leading-relaxed mb-10 md:mb-14">
            Reducing partner onboarding from 67 days to 8 — and building the system to get it to 24 hours.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-gray-200 pt-8">
            <div>
              <h3 className="text-[12px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">Role</h3>
              <p className="text-[15px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Solo Senior Product Designer — owned the full design process
              </p>
            </div>
            <div>
              <h3 className="text-[12px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">Team</h3>
              <p className="text-[15px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                4 developers, 1 PM, 1 delivery lead
              </p>
            </div>
            <div>
              <h3 className="text-[12px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">Timeline</h3>
              <p className="text-[15px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Sep 2023 – ongoing (~2.5 years)
              </p>
            </div>
            <div>
              <h3 className="text-[12px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">Platform</h3>
              <p className="text-[15px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Responsive web (desktop-first)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[36px] font-['Lustria',serif] text-black mb-8">
              The Problem
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              IAG Loyalty runs Avios, the loyalty currency behind British Airways, Iberia, Aer Lingus and Vueling. They have 69M+ members and dozens of partners across travel, retail, hospitality and finance.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              When a new partner wanted to integrate with Avios APIs, the technical onboarding took around <strong className="lustria-bold">3–4 months</strong>. Partners were frustrated. The business was losing revenue. Six internal teams were involved and nobody had a clear picture of the full process.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
              They first came to us because the Developer Portal looked outdated and had accessibility issues. We cleaned it up. But in our conversations the real problem surfaced: the onboarding process itself was broken.
            </p>
            <ImagePlaceholder label="Old Developer Portal — the 'before'" />
          </div>
        </div>
      </section>

      {/* What Was Actually Going Wrong */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-['Lustria',serif] text-black mb-8">
            What Was Actually Going Wrong
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
            I spent weeks mapping the real workflow — not the documented one, the actual one. I sat with Sales Engineering, traveled to London, watched how Loyalty Ops used CLM, read through Jira boards and Confluence pages, and talked to everyone separately because each person told a slightly different story.
          </p>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
            The root cause wasn't bad tools. It was <strong className="lustria-bold">scattered ownership and no source of truth</strong>. Partner information lived across Jira tickets, emails, spreadsheets and at least four different systems. Six teams touched the process but nobody could see it end-to-end. Sales Engineering spent most of their time chasing people for information instead of actually onboarding partners.
          </p>
          <img src={iaglProcessMap} alt="Pre-sales partner onboarding flow — the full swim lane chart across 6 teams" className="w-full rounded-lg" />
          <p className="text-[13px] font-['Lustria',serif] text-gray-400 mt-3 text-center italic">The pre-sales partner onboarding flow — mapping 6 teams across Mobilise → Discover → On-board → Validate → Launch → Post Live</p>
        </div>
      </section>

      {/* What We Built */}
      <section className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[36px] font-['Lustria',serif] text-black mb-4">
              What We Built
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-10 md:mb-14">
              We created <strong className="lustria-bold">PMT (Partner Management Tool)</strong> — a brand new internal platform that centralised the onboarding data and automated the manual handoffs. We also redesigned the Developer Portal for partners. The idea: put Sales Engineering in the driver's seat. Instead of filing Jira tickets and waiting for other teams, they could now handle most of the process themselves.
            </p>

            {/* A */}
            <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
              A. Application Creation
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              Previously, creating an API application for a partner meant: SE files a Jira ticket → Identity team manually creates it → back-and-forth → approval → delays. This alone could take weeks.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              We moved application creation fully into PMT. SE could now create, manage and push applications from staging to production — with a built-in approval flow and audit trail.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
              The tricky part was convincing Identity team to let go. They were initially skeptical and wanted to stay as gatekeepers. After seeing how the system worked — with proper audit logs and guardrails — they trusted the process enough to step back. We even simplified the approval from a two-step flow (SE peer review → Identity approval) down to a single step once we saw the extra layer was slowing things down without adding real safety.
            </p>
            <img src={iaglAppsIter4} alt="PMT: Partner detail page with applications table showing STG/PRD environments" className="w-full rounded-lg mb-3" />
            <p className="text-[13px] font-['Lustria',serif] text-gray-400 mb-8 text-center italic">PMT partner detail page — applications with staging/production environments, statuses, and actions</p>
            <ImagePlaceholder label="PMT: Application detail view with 'Approved (Live)' status, scopes, and properties" />

            {/* B */}
            <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4 mt-10">
              B. CLM Integration
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              This was the biggest chunk. CLM (Customer Loyalty Management) is the core system that manages everything about how Avios points work — partner configs, promoter codes, programmes, business rules. Creating a partner there used to involve multiple teams, manual Jira tickets, and a lot of back-and-forth.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              We integrated PMT directly with CLM so that SE could create partners, obtain CLM codes, and set up promoter codes — all from one place. The system validates data before sending it, pre-fills where possible, and keeps staging and production environments in sync.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
              This was by far the hardest design challenge. Partner info was split across PMT's own database, CLM, Partner Hub (another legacy system), and SAP. Each system had different naming conventions. Partner types (Award, Redemption, Opco) each had different rules. And the integration had to happen in phases — we started with Award partners in staging only, while the design needed to already account for the full future state.
            </p>
            <ImagePlaceholder label="PMT: Partner profile page with side navigation — General Info, Partnerhub ID, Award, Redemption sections" />
            <img src={iaglClmIntegration} alt="Domain modeling session — mapping the partner and application setup journey" className="w-full rounded-lg mb-3" />
            <p className="text-[13px] font-['Lustria',serif] text-gray-400 mb-8 text-center italic">Domain modeling session — mapping the partner setup and application setup journeys</p>

            {/* C */}
            <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4 mt-10">
              C. Developer Portal Redesign
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
              In parallel, we gave the Developer Portal a complete redesign — better navigation, documentation, customer journeys, and self-service features so partners could manage more on their own.
            </p>
            <ImagePlaceholder label="New Developer Portal homepage — dark themed design with 'Build excellent loyalty experiences'" />
          </div>
        </div>
      </section>

      {/* How I Worked */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-['Lustria',serif] text-black mb-8">
            How I Worked
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 italic">
            This was not a "do research, make wireframes, hand off" kind of project. It was two years of continuous discovery embedded in a deeply technical product.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-[18px] md:text-[20px] font-['Lustria',serif] text-black mb-3">Research was daily conversation.</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                There was no clean requirements doc to start from. I asked the same questions to different people, cross-checked their answers, documented every decision, and still sometimes got it wrong. When that happened, I adjusted — more indirect questions, more stakeholders involved, decisions documented together.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] md:text-[20px] font-['Lustria',serif] text-black mb-3">Design and dev were inseparable.</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                I couldn't design a single screen without understanding the backend. I spent most days with developers learning how the APIs worked, what CLM technically provided, what was possible. They were my primary research partners. Over two years I went from being shy about technical architecture to confidently navigating it.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] md:text-[20px] font-['Lustria',serif] text-black mb-3">Feasibility drove every decision.</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                In a project this technical, I couldn't come up with a "pure UX" solution and throw it over the wall. Every design started with "is this technically possible and how?" — then we'd iterate from there. I focused on simple flows, safe defaults, clear guardrails, and a flexible UI that could absorb new requirements without a full redesign.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] md:text-[20px] font-['Lustria',serif] text-black mb-3">Testing was a team sport.</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Each major feature went through: internal team review → stakeholder walkthrough → prototype testing (I used Figma Make for near-live prototypes, which was a game changer) → staging testing → production testing. And still, real feedback only came after actual use.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] md:text-[20px] font-['Lustria',serif] text-black mb-3">I designed for incomplete information.</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Many technical details only emerged mid-project. The CLM integration plan changed multiple times. I learned to design the full vision while shipping incrementally — the partner page needed to work for partial integration today and full integration six months later.
              </p>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mt-4">
                One example: we spent weeks designing an approval flow for pushing partners to production — complicated both technically and in the UI. In a user test, we discovered from the actual users that this step didn't carry the risk we assumed. They could just manually fix mistakes in CLM. That saved us a huge amount of work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[36px] font-['Lustria',serif] text-black mb-8">
              Impact
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
              <strong className="lustria-bold">Mean Time to Configure dropped from 67 days to 8 working days</strong> — confirmed by Sales Engineering's own tracking. Our north star target is 24 hours for technical onboarding (contract signing to staging credentials), which is now achievable for straightforward partners.
            </p>

            <ImagePlaceholder label="Slack screenshot: 'Our Mean Time To Configure prior to automation is sitting at 67 days, however, since Operational Efficiency, we are down to 8 working days!!'" />

            <div className="bg-black text-white rounded-lg p-6 md:p-10 space-y-5 mt-8">
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] leading-relaxed">
                <strong className="lustria-bold">Sales Engineering can onboard more partners in less time</strong> — directly enabling revenue growth.
              </p>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] leading-relaxed">
                <strong className="lustria-bold">Multiple teams save hours per partner</strong> — less chasing, fewer Jira tickets, fewer emails.
              </p>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] leading-relaxed">
                <strong className="lustria-bold">Higher partner satisfaction</strong> — shorter wait times and fewer errors.
              </p>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] leading-relaxed">
                <strong className="lustria-bold">The work is still ongoing</strong> — adding scopes to applications, editing promoter codes, and continuing the CLM integration are all active.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[36px] font-['Lustria',serif] text-black mb-8">
            What I Learned
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-[17px] font-['Lustria',serif] text-black mb-2 lustria-bold">Observe, don't just ask.</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                I sat with Loyalty Ops and watched them work instead of relying on what they said. The real process was always messier than the described one.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-['Lustria',serif] text-black mb-2 lustria-bold">Design for the system, not the feature.</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Small changes in sequencing or ownership unlocked massive improvements. This project taught me to think in systems — how teams, tools and processes connect — not just screens.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-['Lustria',serif] text-black mb-2 lustria-bold">When experience can't come first, protect it in small ways.</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                During the heavy integration phase, pixel-perfect UI wasn't the priority. But I still invested in cloning, pre-filling, better error messages and consistent terminology. Those small things kept the product usable while the technical foundation was being built.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-['Lustria',serif] text-black mb-2 lustria-bold">Being a solo designer on a technical project means becoming bilingual.</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                I learned backend architecture not because I wanted to but because I had to. It made me a better designer — I stopped proposing things that couldn't be built and started co-creating solutions with developers.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-['Lustria',serif] text-black mb-2 lustria-bold">Trust takes time and showing up.</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                We traveled to London, ran workshops, sat with teams. Building relationships with six different teams across the organisation wasn't optional — it was the foundation that made the technical work possible.
              </p>
            </div>
          </div>
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
