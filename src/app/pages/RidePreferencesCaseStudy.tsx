import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import rpCover from '@/assets/rp-cover.png';
import rpSocialReports from '@/assets/rp-social-reports.png';
import rpGoal from '@/assets/rp-goal.png';
import rpResearchSurvey from '@/assets/rp-research-survey.png';
import rpOptionsMap from '@/assets/rp-options-map.png';
import rpEcoplusIdeation from '@/assets/rp-ecoplus-ideation.png';
import rpUber from '@/assets/rp-uber.png';
import rpLyft from '@/assets/rp-lyft.png';
import rpBolt from '@/assets/rp-bolt.png';
import rpYandex from '@/assets/rp-yandex.png';
import rpMaxim from '@/assets/rp-maxim.png';
import rpEcoplusIntro from '@/assets/rp-ecoplus-intro.png';
import rpServiceInfo from '@/assets/rp-service-info.png';
import rpPreferencesUi from '@/assets/rp-preferences-ui.png';
import rpBrainstorm from '@/assets/rp-brainstorm.png';
import rpMeetingFindings from '@/assets/rp-meeting-findings.png';
import rpMusicChallenges from '@/assets/rp-music-challenges.png';
import rpInterviewFindings from '@/assets/rp-interview-findings.png';
import rpFinalDesign from '@/assets/rp-final-design.png';
import rpRatingUi from '@/assets/rp-rating-ui.png';
import rpReflection from '@/assets/rp-reflection.png';

export function RidePreferencesCaseStudy() {
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
            src={rpCover}
            alt="Ride Preferences cover"
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
            Snapp is a super app with more than <strong className="font-bold">52 million</strong> users
            and <strong className="font-bold">2.8 million</strong> rides a day for its ride hailing service!
            Such many users have large number of different needs. We decided to let the users{' '}
            <strong className="font-bold">personalized their ride</strong> in order to have{' '}
            <strong className="font-bold">less conflict</strong> and{' '}
            <strong className="font-bold">cancelation rate and a more luxurious and enjoyable ride experience</strong>{' '}
            in the passenger and driver android and PWA applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">MY ROLE</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Responsible for design, competitor analysis, and collaborating in user interviews.
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">THE TEAM</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                1 designer, 2 product managers, 2 UX researchers, 2 UX writers and 7+ engineers.
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">TIMELINE</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Jun 22 – Oct 2022
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Got Interested */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[24px] md:text-[32px] font-['Lustria',serif] text-black leading-tight">
            Got interested? You can read the details down here! ⬇️
          </h2>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              Problem statement
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              Around 30% of social reports issues in each month were about ride preferences.
              Subjects like music in the car, carrying luggage, wheelchair, transporting pets, smoking etc.{' '}
              <strong className="font-bold">How might we let users add some personalized changes to their ride?</strong>
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">
                What was the problem?
              </h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Passengers sometimes find it hard to talk to drivers about their preferences,
                or they might have unmet needs that cause them or the drivers to cancel the ride.
                (like wheelchair or help)
              </p>
            </div>
          </div>
          <div>
            <img
              src={rpSocialReports}
              alt="Social reports data visualization"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* The Goal */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              The goal
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              This project was mainly about enhancing the in-app experience for our users and adding
              a sense of <strong className="font-bold">coolness</strong> and{' '}
              <strong className="font-bold">luxury</strong> to our app. But how can we know if we have
              reached our goal if we can't measure it? (I did not add exact numbers as they are confidential)
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">
                Success metrics
              </h3>
              <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                <li>Increase usage of Snapp! Plus by X%</li>
                <li>Decreasing cancelation rate after accept for both passengers and drivers.</li>
                <li>Decreasing cancelation rate after arrival for both passengers and drivers.</li>
                <li>Increasing driver ratings by X%</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={rpGoal}
              alt="Goal illustration"
              className="w-[399px] rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Digging Deeper */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              Digging deeper into user's ride preferences
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              By social reports we only get notified that people have some special requests.
              We wanted to <strong className="font-bold">evaluate the current ride options</strong> that
              we have in Snapp and{' '}
              <strong className="font-bold">
                get an idea of what passengers and drivers would think about the options we found in special reports.
              </strong>
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">
                What did we want to find out?
              </h3>
              <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                <li>Ride options usage and familiarity</li>
                <li>Ride options passengers are most willing to pay for</li>
                <li>Ride options passengers need the most</li>
                <li>Ride options drivers would use most</li>
                <li>Ride options drivers would cancel the ride for</li>
                <li>Reasons behind canceling the ride</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={rpResearchSurvey}
              alt="Research survey"
              className="w-[477px] rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Online Survey Results */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Online survey results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
              <li>Snapp EcoPlus has a <strong className="font-bold">low awareness</strong> and <strong className="font-bold">usage</strong> in comparison to other ride options.</li>
              <li>There is a <strong className="font-bold">false knowledge</strong> about Ecoplus service type.</li>
              <li><strong className="font-bold">"Driver Help"</strong>, <strong className="font-bold">"AC/Heater"</strong> and <strong className="font-bold">"Carrying Load"</strong> are the main options that passengers tend to pay for.</li>
              <li><strong className="font-bold">"Playing Desired Music"</strong> and <strong className="font-bold">"Silent Mode"</strong> are the most needed options in respondents' rides.</li>
            </ul>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
              <li><strong className="font-bold">"Carrying Load"</strong>, <strong className="font-bold">"More Than 3 Passengers"</strong> and <strong className="font-bold">"Driver Help"</strong> have the highest ride share among ride items.</li>
              <li>Among these items <strong className="font-bold">"More Than 3 Passengers"</strong> and <strong className="font-bold">"Having Pet"</strong> have the highest share of cancelation.</li>
              <li>
                The <strong className="font-bold">reasons</strong> of cancelling or not accepting the ride by drivers for different ride options:
                <ul className="mt-2 ml-4 space-y-1 list-none">
                  <li><strong className="font-bold">Carrying load:</strong> Vehicle depreciation, dirtiness, time consuming</li>
                  <li><strong className="font-bold">AC:</strong> fuel consumption, high maintenance cost</li>
                  <li><strong className="font-bold">Smoking:</strong> annoying for later passengers</li>
                  <li><strong className="font-bold">Wheelchair:</strong> not having enough space, needs movement, needs to help passenger</li>
                  <li><strong className="font-bold">Pet:</strong> dirtiness, carrying without cage, loud noise</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Listing First Ride Preferences */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-4">
            Listing the first ride preferences options
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            With the knowledge we got from the social report, online surveys, and the meetings
            we had with our team, we listed the ride preferences that we could technically provide
            in Snapp and decided on where and how they were gonna be placed in the ride flow.
          </p>
          <img
            src={rpOptionsMap}
            alt="Ride preferences options mapping"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Ideating the Details */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              Ideating the details of ride options
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              We have found out in the online surveys that Snapp Ecoplus{' '}
              <strong className="font-bold">usage and familiarity</strong> are low and as Ecoplus
              has newer cars, top-rated drivers, and better car models, there are options that we
              can make sure only Ecoplus can provide like AC. Boom! that was the opportunity to only
              devote those items to Snapp Ecoplus and the rest will be applied for all service types.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Unlike a new service type idea, adding some options to Ecoplus service type, would
                give us the opportunity to test with the smaller group of plus users first and in
                case of success, we could extend it to all service types.
              </p>
            </div>
          </div>
          <div>
            <img
              src={rpEcoplusIdeation}
              alt="Ecoplus options ideation"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Comparing Competitors */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-4">
            Comparing competitors!
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8 md:mb-12">
            Before going further in the process, it was time to take a look at what our competitors
            have done and get inspiration. I was focusing on options they had included and for which
            service types they were available from Asia to US market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 md:mb-12">
            {/* Uber */}
            <div className="flex flex-col items-start gap-4">
              <img
                src={rpUber}
                alt="Uber competitor analysis"
                className="w-[345px] rounded-lg"
              />
              <div>
                <h4 className="text-[13px] font-['Lustria',serif] text-black uppercase tracking-wider mb-1">Features</h4>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 mb-2">LUX black service type</p>
                <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 list-disc list-inside space-y-1 mb-4">
                  <li>Temperature</li>
                  <li>Quiet ride</li>
                  <li>Help with the bags</li>
                </ul>
                <h4 className="text-[13px] font-['Lustria',serif] text-black uppercase tracking-wider mb-1">Insight</h4>
                <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 list-disc list-inside space-y-1">
                  <li>Creates awareness of ride preferences by an introductory pop up.</li>
                  <li>Ride preferences options come right after the user chooses the service type.</li>
                </ul>
              </div>
            </div>

            {/* Lyft */}
            <div className="flex flex-col items-start gap-4">
              <img
                src={rpLyft}
                alt="Lyft competitor analysis"
                className="w-[329px] rounded-lg"
              />
              <div>
                <h4 className="text-[13px] font-['Lustria',serif] text-black uppercase tracking-wider mb-1">Features</h4>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 mb-2">Comfort & black service type</p>
                <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 list-disc list-inside space-y-1 mb-4">
                  <li>Conversation</li>
                  <li>Temperature</li>
                  <li>Bags (Only for black)</li>
                </ul>
                <h4 className="text-[13px] font-['Lustria',serif] text-black uppercase tracking-wider mb-1">Insight</h4>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700">
                  Not much awareness towards the ride preferences user can set it after selecting the
                  pick-up destination so she might not know that its a benefit of choosing comfort/black service type.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Bolt */}
            <div>
              <img
                src={rpBolt}
                alt="Bolt competitor analysis"
                className="w-full rounded-lg mb-4"
              />
              <h4 className="text-[13px] font-['Lustria',serif] text-black uppercase tracking-wider mb-1">Features</h4>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 mb-2">LUX service type</p>
              <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 list-disc list-inside space-y-1 mb-4">
                <li>Quiet ride</li>
                <li>Extra hand</li>
                <li>Custom request (note)</li>
              </ul>
              <h4 className="text-[13px] font-['Lustria',serif] text-black uppercase tracking-wider mb-1">Insight</h4>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700">
                Users can set the options as default for their future rides, which seems really helpful.
              </p>
            </div>

            {/* Yandex */}
            <div>
              <img
                src={rpYandex}
                alt="Yandex competitor analysis"
                className="w-full rounded-lg mb-4"
              />
              <h4 className="text-[13px] font-['Lustria',serif] text-black uppercase tracking-wider mb-1">Features</h4>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 mb-2">Comfort+ & comfort service type</p>
              <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 list-disc list-inside space-y-1 mb-4">
                <li>Pet transportation</li>
                <li>Ski or snow board</li>
                <li>Child safety seat</li>
                <li>I'll open the door myself</li>
                <li>Quiet ride</li>
              </ul>
              <h4 className="text-[13px] font-['Lustria',serif] text-black uppercase tracking-wider mb-1">Insight</h4>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700">
                Yandex has the most variety of different ride options for each service type and the tab
                style made it easier to choose the ride options.
              </p>
            </div>

            {/* Maxim */}
            <div>
              <img
                src={rpMaxim}
                alt="Maxim competitor analysis"
                className="w-full rounded-lg mb-4"
              />
              <h4 className="text-[13px] font-['Lustria',serif] text-black uppercase tracking-wider mb-1">Features</h4>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 mb-2">LUX service type</p>
              <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 list-disc list-inside space-y-1 mb-4">
                <li>Child seat</li>
                <li>Luggage</li>
                <li>Pet</li>
                <li>Driver assistance</li>
                <li>Air conditioner</li>
                <li>Greet with a sign</li>
                <li>Tip ...</li>
              </ul>
              <h4 className="text-[13px] font-['Lustria',serif] text-black uppercase tracking-wider mb-1">Insight</h4>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700">
                It was not clear what comfort means in Maxim, the ride options with all their variety
                could be set for all service types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designing First Ideas */}
      <section className="bg-black text-white py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] mb-8 md:mb-12">
              Designing the first ideas
            </h2>

            {/* Ecoplus Introduction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-10 md:mb-16">
              <div>
                <h3 className="text-[13px] font-['Lustria',serif] uppercase tracking-wider mb-4">
                  Snapp Ecoplus introduction
                </h3>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-300 leading-relaxed">
                  The first time the user selects a service type there is a page with little info,
                  and it's only showed to the user once. For increasing the{' '}
                  <strong className="text-white font-bold">familiarity</strong> and{' '}
                  <strong className="text-white font-bold">awareness</strong> we needed to change this
                  info, so we talked to commercial team to see how much we can be detailed about Ecoplus
                  features and with the help of our UX writers rewrote it.
                </p>
              </div>
              <img
                src={rpEcoplusIntro}
                alt="Ecoplus introduction screens"
                className="w-full rounded-lg"
              />
            </div>

            {/* Service Type Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-10 md:mb-16">
              <img
                src={rpServiceInfo}
                alt="Service type info screens"
                className="w-full rounded-lg"
              />
              <div>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-300 leading-relaxed">
                  To increase the familiarity of service types we needed a place that users can always
                  go to and read. It would also give us the flexibility to change or add any needed info
                  in future. The number of people each service type could include is also mentioned there.
                </p>
              </div>
            </div>

            {/* Ride Preferences Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-[20px] md:text-[24px] font-['Lustria',serif] mb-6">
                  Ride preferences options
                </h3>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-300 leading-relaxed mb-4">
                  We decided to have the following options for Ecoplus service type:
                </p>
                <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-300 list-disc list-inside space-y-1 mb-6">
                  <li>Silent mode</li>
                  <li>Music</li>
                  <li>Temperature</li>
                </ul>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-300 leading-relaxed mb-4">
                  and the rest for all service types:
                </p>
                <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-300 list-disc list-inside space-y-1 mb-6">
                  <li>Wheelchair</li>
                  <li>Luggage</li>
                  <li>Need assistant</li>
                </ul>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-300 leading-relaxed">
                  After talking to commercial team, we decided to not consider{' '}
                  <strong className="text-white font-bold">pets</strong> and{' '}
                  <strong className="text-white font-bold">cigarettes</strong> for now.
                  <br /><br />
                  Aaaand it was just the beginning! each option had its own challenge!
                </p>
              </div>
              <img
                src={rpPreferencesUi}
                alt="Ride preferences UI"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brainstorming */}
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-4">
              Brainstorming on our first iteration
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
              With our first ideas brought to life, I wanted to involve the entire stakeholders
              in the early stage concepts because creating such a feature required many minds.
              I presented the design and we discussed how all these options would work, the corner
              cases, and the challenges we might face.
            </p>
            <p className="text-[15px] font-['Lustria',serif] text-gray-500 mb-8">
              We had a couple of big meetings with stakeholders from different teams and verticals
              like user, pricing, driver, developers (back-end and android team)
            </p>
            <img
              src={rpBrainstorm}
              alt="Brainstorming session board"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Findings of Meetings */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Key finding of the meetings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <img
              src={rpMeetingFindings}
              alt="Meeting key findings"
              className="w-full rounded-lg"
            />
            <div>
              <h3 className="text-[20px] font-['Lustria',serif] text-black mb-4">
                When to show the options to drivers?
              </h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
                <strong className="font-bold">First idea:</strong> "Showing the ride options after
                the driver accepted the ride and not charging the driver for cancelation". Acceptance
                rate will stay steady but the cancelation rate might increase.
              </p>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                <strong className="font-bold">Second idea:</strong> "Showing the ride option after the
                driver accepted the ride and charging the driver for cancelation." Acceptance rate will
                stay the same and the cancelation rate won't increase, however, if after the roll out
                the cancelation rate increases we will change our strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges: Music */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-[20px] font-['Lustria',serif] text-black mb-4">
              Challenges with the music option
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
              Music had been asked a lot by users and can also add luxury and get attention in PR,
              but there were serious challenges like:
            </p>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-3">
              <li>
                At first, we had it as just an option to turn off and on, but what if the passenger
                doesn't like the music?
              </li>
              <li>
                Secondly, we decided to let the passenger specify the music genre but it was a
                challenge itself because drivers might not know the genres.
              </li>
              <li>
                After specifying the genres providing them was also a challenge, for either passenger
                or driver currently, we don't have the resources in our app.
              </li>
            </ul>
          </div>
          <img
            src={rpMusicChallenges}
            alt="Music option challenges"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Challenge Cards */}
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-[20px] font-['Lustria',serif] text-black mb-4">
                Guaranteeing ride preferences
              </h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-4">
                We needed to think of how to encourage drivers to accommodate passengers' preferences.
              </p>
              <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                <li>We will inform passengers that the driver will be notified and <strong className="font-bold">may be</strong> able to accommodate the preferences.</li>
                <li>In the driver app accommodating to the preferences is a must.</li>
                <li>To evaluate the drivers, we add a new item in the <strong className="font-bold">ratings</strong> for ride preferences and encourage passengers to rate.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-[20px] font-['Lustria',serif] text-black mb-4">
                Is silent ride appropriate for Iran's culture?
              </h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                We were not sure if this option means the driver should not talk or the music should
                be off too? And how would the drivers in Iran think if we shush them beforehand? Or,
                if the option is off, means that the passenger prefers to talk? Which is still not ok
                for Iran's culture.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-[20px] font-['Lustria',serif] text-black mb-4">
                AC is a rule in all Snapp service types but an emphasis in Ecoplus
              </h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                Turning the AC on is a rule for all Snapp cars and putting it in Ecoplus would give
                the false signal that only Ecoplus cars have to obey this rule, so we needed to display
                it in a way that users know this option is just for assuring that the cab they hail
                has a working AC and they won't be surprised!
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-[20px] font-['Lustria',serif] text-black mb-4">
                I need help needs to be Clarified
              </h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                This was our only option that would add an extra charge to the ride fare. It was
                really hard to specify how much help it means, is it helping a disabled passenger
                to sit in the car? or it's help with the luggage or shopping bags? these items would
                also increase the cancelation rate because drivers don't want trouble.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In-depth Interviews */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              Getting more insights by in-depth interviews
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              We had many challenges and many questions that only the users themselves could answer,
              so our research team and I did some in-depth interviews with{' '}
              <strong className="font-bold">5 Eco drivers</strong> and{' '}
              <strong className="font-bold">5 Ecoplus drivers.</strong>
            </p>
            <h4 className="text-[13px] font-['Lustria',serif] text-black uppercase tracking-wider mb-3">
              Objectives
            </h4>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2">
              <li>Discover what users say, think, do, & feel regarding ride preferences items.</li>
              <li>How users work with ride preferences & their problems.</li>
              <li>Explore alternative future improvements to ride preferences</li>
              <li>Users' knowledge & preference of music</li>
            </ul>
          </div>
          <img
            src={rpInterviewFindings}
            alt="Interview findings"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Interview Key Findings */}
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
              Interviews key findings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-[20px] font-['Lustria',serif] text-black mb-4">Music</h3>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                  Drivers divide music genres into normal (pop), happy, mellow, Persian folk, & extreme music.
                  They may not know how to treat this feature, and it is confusing for them. They think it is
                  a disturbance and is not necessary. They don't mind following passengers' requests.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-[20px] font-['Lustria',serif] text-black mb-4">Wheelchair</h3>
                <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                  <li>They might do it for morality.</li>
                  <li>It takes so much of their time.</li>
                  <li>Wheelchair makes their car dirty.</li>
                  <li>They probably won't accept the ride with wheelchair, but if they get a ride they won't cancel it.</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-[20px] font-['Lustria',serif] text-black mb-4">AC</h3>
                <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                  <li>Promoting content on why using AC is good for the car via: Online courses, Interview with repairmen.</li>
                  <li>Providing loans which cover AC cost</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-[20px] font-['Lustria',serif] text-black mb-4">Silent ride</h3>
                <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                  <li>It may be extremely insulting to drivers.</li>
                  <li>Almost all of the drivers think it is unnecessary.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Design Decisions */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Final design decisions for the MVP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <img
              src={rpFinalDesign}
              alt="Final design decisions"
              className="w-full rounded-lg"
            />
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-['Lustria',serif] text-black mb-3">Music</h3>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                  Music for our MVP version was kept as simple as possible just to select if they want
                  the music in the car or not, and the rest would be dealt during the ride by passengers
                  and drivers. For future we are gonna have a music provider like Snapp radio or give our
                  driver AUX cables so the passengers can play their own desired music in the car.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-['Lustria',serif] text-black mb-3">Temperature</h3>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                  Turning the AC on is a rule for all Snapp service types but putting it here would
                  create the misunderstanding that it is only for Ecoplus cars, so we tried to show
                  the users that it's just an extra assurance for those who want AC and don't wanna
                  get a ride with a not working AC car.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-['Lustria',serif] text-black mb-3">Silent ride</h3>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                  The most sensitive item due to driver's interviews and most asked from users, we
                  decided to keep it but handle it in writing in a way that it's the least offensive
                  for drivers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-[20px] font-['Lustria',serif] text-black mb-4">Rating</h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
              To monitor if the drivers accommodate passengers' preferences, we added an item in
              rating reasons, rest of our work for showing the users that they are being cared about
              and being monitored had postponed for the in-app navigation feature to cover.
            </p>
          </div>
          <img
            src={rpRatingUi}
            alt="Rating UI screens"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Options Not Included */}
      <section className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
              Options not included in MVP version
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div>
                <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">
                  I need help
                </h3>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                  Due to the unclearness and dependency to pricing we decided to not have it for the MVP version.
                </p>
              </div>
              <div>
                <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">
                  Service type description
                </h3>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                  We decided to set a whole new task for this so we didn't have it for our MVP version.
                </p>
              </div>
              <div>
                <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">
                  Wheelchair
                </h3>
                <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                  The wheelchair would decrease the acceptance rate, but after the second phase of our
                  accessibility feature in which drivers won't pay commission for these rides, we will add the wheelchair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-4">
            The impact
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            The roll-out is quite new for a month for 20% of our android users, we measured our
            metrics and we already got interesting results:
          </p>
          <div className="bg-black text-white rounded-lg p-6 md:p-10 text-left space-y-4 max-w-2xl mx-auto">
            <p className="text-[20px] font-['Lustria',serif] leading-relaxed">
              ⬆️ Snapp Ecoplus usage increased by 17%
            </p>
            <p className="text-[20px] font-['Lustria',serif] leading-relaxed">
              ⬇️ Cancelation rate after accept decreased by 5%
            </p>
            <p className="text-[20px] font-['Lustria',serif] leading-relaxed">
              ⬇️ Cancelation rate after arrival decreased by 10%
            </p>
            <p className="text-[20px] font-['Lustria',serif] leading-relaxed">
              😶 Driver rating hasn't changed
            </p>
          </div>
          <p className="text-[15px] font-['Lustria',serif] text-gray-500 mt-6">
            For confidentiality reasons, I have omitted the actual values for these metrics.
          </p>
        </div>
      </section>

      {/* Reflection */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              Reflection
            </h2>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed space-y-6">
              <li>
                <strong className="font-bold">Collaborate with other teams and verticals.</strong>{' '}
                This project was unique in its dependency on other verticals; each item was related to
                another team and our meetings sometimes had +20 people in it! it was important to keep
                all on the same page. Hearing their opinions and learning what they do in a huge product
                like Snapp, the art of collaboration and accepting all you were assuming or researching
                might not be working or be frankly dismissed was a great lesson for me.
              </li>
              <li>
                <strong className="font-bold">Engaging in user research.</strong>{' '}
                As the only designer of this project, I was working closely with our research team
                participating in all user interviews, making sure if the research is directed to our
                design decisions, there was even an interview going on for another project but I asked
                them to let me participate and ask my own questions at the end, which was highly beneficial.
              </li>
              <li>
                <strong className="font-bold">Documenting is the key!</strong>{' '}
                This project was going on and off a lot and I did documenting along the way which helped
                me to stay on track; arranging the data for this project that is more complicated and do
                not follow a simple process was quite challenging.
              </li>
              <li>
                <strong className="font-bold">Strengthening my holistic view.</strong>{' '}
                It is easy to miss a corner or get biased, but it is a very important skill to not
                forget to see all the aspects of a problem, and working with all different verticals
                was really eye opening for me in that regard.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={rpReflection}
              alt="Reflection illustration"
              className="w-[486px] rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
            Next Steps
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
            We have so much for the future of this project, changes in each service type description,
            adding more options and improving the current ones, and encouraging passengers to rate and
            use ride options.
          </p>
        </div>
      </section>

      {/* Back to Top */}
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
  );
}
