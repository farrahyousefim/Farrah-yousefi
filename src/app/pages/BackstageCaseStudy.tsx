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
          <h1 className="text-[28px] md:text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Project Overview
          </h1>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
            IAG Loyalty is the company behind Avios, the loyalty points for airlines like British Airways, Aer Lingus,
            Iberia and Vueling. In this project, I worked on the platform engineering team's internal tool called
            backstage, a product bought from Spotify that we customize to best suit our needs.
            <br />
            In this case study I will tell you how I repurposed the home page of backstage!
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
                Nov 2025 - Feb 2026
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

      {/* The Problem */}
      <section className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
              The Problem
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              Backstage homepage was an out of box plug in that had nothing but some shortcuts, starred links and a search.
            </p>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
              We wanted to use this opportunity to help the users and the business to reach their mutual goals.
            </p>
            <img
              src={bsProblem}
              alt="Original Backstage homepage"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Discovery and Strategy */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Discovery and Strategy
          </h2>

          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4 mb-8">
            <li>
              In order to know what to put on the home page we needed to know users needs and problems, we looked into
              the different users groups we had. The most important ones were developers, tech leads and engineering managers.
            </li>
            <li>
              I studied the persona's needs and summarized them based on their intentions when they land on backstage home page
            </li>
          </ul>

          <img
            src={bsUserGroups}
            alt="User groups and personas"
            className="w-full rounded-lg mb-8"
          />

          <img
            src={bsPersonaSummary}
            alt="Persona needs summary"
            className="w-full rounded-lg mb-8"
          />

          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4 mb-8">
            <li>
              I set up an interview, a concept test and a card sorting exercise all in one 30 min session with devs,
              tech leads and engineering managers.
            </li>
            <li>
              The amount of content I got from interviewing 13 users was enormous! I enjoyed each and every one of them
              but now it was the hardest part, <strong className="font-bold">to turn the data into insight!</strong>
            </li>
            <li>
              In analysing the interviews Chat GPT was a great help! I created a project in Chat GPT, removed the names
              from transcribes of the interviews and asked Chat GPT to give me the most important insights + actual quotes
              to support it.
            </li>
          </ul>

          <img
            src={bsInterviewAnalysis}
            alt="Interview analysis"
            className="w-full rounded-lg mb-8 md:mb-12"
          />

          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            Main issues discovered that can be used in relation to home page
          </h3>
          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2 mb-8">
            <li>Not knowing what needs to be done</li>
            <li>Not knowing backstage capabilities</li>
            <li>Not knowing how things work</li>
            <li>Not knowing where things are</li>
            <li>(Not knowing who owns what and how to find related teams)</li>
          </ul>

          <blockquote className="border-l-4 border-black pl-6 py-2 mb-8">
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed italic">
              There are some areas that we could improve on product health, catalogue or dev tooling,
              But what is the role of Home page in this? How can home page be helpful?
            </p>
          </blockquote>

          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            Mainly users come to backstage to get a job done like:
          </h3>
          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2 mb-8">
            <li>Request access to a tool</li>
            <li>Accept requests</li>
            <li>Fill product health form</li>
            <li>Check out their product health status</li>
            <li>Look for teams or docs</li>
          </ul>

          <div className="space-y-6 mb-8">
            <blockquote className="border-l-4 border-black pl-6 py-2">
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                <strong className="font-bold">Home Page Role</strong><br />
                In general home page is a place of orientation, to bring most important things to users attention
                and tell them where to go next.
              </p>
            </blockquote>

            <blockquote className="border-l-4 border-black pl-6 py-2">
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                <strong className="font-bold">Home Page Goal</strong><br />
                Home page needs to be a place that brings what is important and most frequently used in front of
                the specific users groups eyes.
              </p>
            </blockquote>
          </div>

          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2 mb-8">
            <li>Highlighting what they need to do</li>
            <li>Highlighting what else they can benefit from in backstage that they are not aware of</li>
            <li>Help them get what they want easy and fast</li>
            <li>Teach them things they don't know or answering their questions</li>
          </ul>

          <blockquote className="border-l-4 border-black pl-6 py-2 mb-8">
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
              <strong className="font-bold">Roll out strategy</strong><br />
              We also decided to go with an incremental and very easy to implement approach. And of course with
              user test afterwards to check if we are actually going in the right direction.
            </p>
          </blockquote>

          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            Success metrics
          </h3>
          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2">
            <li>Daily usage of backstage increases</li>
            <li>Time on home page increases</li>
            <li>More dev tooling approval will be done</li>
            <li>Faster product health improvements for compliance scores</li>
            <li>Less ambiguity and questions across what goes on in platform engineering</li>
          </ul>
        </div>
      </section>

      {/* Design */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Design
          </h2>

          <img
            src={bsDesignCompartments}
            alt="Home page compartments"
            className="w-full rounded-lg mb-8"
          />

          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
            We wanted to start small and incremental, so I picked these 4 compartments for home page and prioritized them based on:
          </p>
          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2 mb-8">
            <li>Frequency of use across different personas</li>
            <li>Ease of building vs impact</li>
          </ul>

          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
            I started by keeping the shortcuts and starred links as users were using them, but redesigning the issues they had.
          </p>

          {/* Redesigning the shortcuts */}
          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            Redesigning the shortcuts
          </h3>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
            The issues users had with shortcuts was that they were highly confusing with requesting access to a tool
            within backstage and did not look like links out. The new design should have these points:
          </p>
          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2 mb-6">
            <li>Look like links out</li>
            <li>Do not dominate the whole screen</li>
            <li>Be more relevant to each user</li>
            <li>Easy to implement as links are not that critical anyway</li>
          </ul>

          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
            What I did:
          </p>
          <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4 mb-8">
            <li>
              I added a link of the web page and an open in new tab icon on hover for open in new tab + an
              "open new tab" tool tip
            </li>
            <li>
              I also designed only 6 items to be visible and the rest hidden on show more — to keep the shortcuts
              relevant to each user's personal use, after talking to our devs we decided to show the links users
              click on top. This setting is stored on their computer and if they changed their PC it will be lost,
              but is a good starting point for now to test and see how many users we are going to get.
            </li>
          </ul>

          <img
            src={bsShortcutsRedesign}
            alt="Shortcuts redesign"
            className="w-full rounded-lg mb-8"
          />

          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
            <strong className="font-bold">A rookie mistake</strong> 😅<br />
            To maximize the customization, I had this idea of letting users add their own links to the shortcut section
            but after discussing it with the team I realized we do not want to turn this section into a bookmark feature
            and also adding custom icons for those links would be a big hassle!
          </p>

          {/* Product stats */}
          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            Product stats
          </h3>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
            My goal was to bring the <strong className="font-bold">product health</strong> on top of home page, so users
            know what they need to take care of. But I needed to keep in mind "Mostly devs do not care much about Product
            health so <strong className="font-bold">we need to find a way for users to deprioritize or hide it on the home page!</strong>
          </p>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            The development of Product health also could be tricky by default as some Engineering managers or tech leads
            own multiple products that we even have not listed properly in their profile. The easiest way out for the MVP
            was to let users add product groups that they care about to that section themselves.
          </p>

          {/* To do section */}
          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            To do section
          </h3>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            To direct users attention to the tasks at hand, so nothing is left forgotten.
            Risks: So far there is not much there but the pending tool request…
          </p>

          {/* Platform news */}
          <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] text-black mb-4">
            Platform news
          </h3>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
            Platform news and announcements can be a very good place to:
          </p>
          <ol className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-decimal list-inside space-y-2 mb-6">
            <li>Keep a set of important news visible and not lost in Slack or emails, like new features and updates</li>
            <li>Tell users about some backstage capabilities</li>
            <li>Is relevant for all users and helps them utilize backstage</li>
            <li>Risks: How to make it interesting to read and click on?</li>
            <li>Implementation: using announcement feature for now, with the possibility to read more in announcement section for users</li>
            <li>How about the built-in notification feature? What are the differences and pros and cons?</li>
          </ol>

          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            <strong className="font-bold">AI chat bot:</strong> to help answer any questions users might have about e.g. teams
            or product health compliance.
          </p>

          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            <strong className="font-bold">Search</strong> index needs to be improved! The design of the search is also now more
            prominent, maybe we can include the AI there to look more like today's AI than a website classic chat bot.
          </p>
        </div>
      </section>

      {/* Development and test */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Development and test
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
            <strong className="font-bold">Using AI to prototype</strong>
          </p>
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
