import { NavigationMinimal } from '@/app/components/NavigationMinimal';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import arCoverFull from '@/assets/ar-cover-full.png';
import arIllustration1 from '@/assets/ar-illustration-1.png';
import arDiscoveryMediums from '@/assets/ar-discovery-mediums.png';
import arIllustration2 from '@/assets/ar-illustration-2.png';
import arDriverAssigned from '@/assets/ar-driver-assigned.png';
import arWhyFailed1 from '@/assets/ar-why-failed-1.png';
import arFinalRideFlow from '@/assets/ar-final-ride-flow.png';
import arFlowOverview from '@/assets/ar-flow-overview.png';
import arPassengerScreens from '@/assets/ar-passenger-screens.png';
import arIllustration3 from '@/assets/ar-illustration-3.png';
import arFinalProfile from '@/assets/ar-final-profile.png';
import arProfileOverview from '@/assets/ar-profile-overview.png';

export function RideAccessibilityCaseStudy() {
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
            src={arCoverFull}
            alt="Ride Accessibility cover"
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
            Snapp is a super app with more than <strong className="font-bold">52 million</strong> users
            and <strong className="font-bold">2.8 million</strong> rides a day for its ride hailing service!
            It is one of our most important duties to make it as accessible as possible for everyone, in this
            case study <strong className="font-bold">we added some changes to the app to make the communication
            between drivers and passengers with disability easier</strong> and to decrease the cancelation rate
            based on these problems.
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
                2 designers, 2 product managers, 1 UX researcher, 1 UX writer and 10+ engineers.
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-['Lustria',serif] text-black mb-3 uppercase tracking-wider">TIMELINE</h3>
              <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
                May 2022 - Oct 2022
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

      {/* The Opportunity */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
            The opportunity
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            We wanted to help all Snapp users with disability to use Snapp easier, first we checked the context
            of our current situation: (Because of NDA numbers are not the acutal ones))
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[16px] font-['Lustria',serif] text-gray-700">
                376 of total hearing impaired drivers had at least one ride in May 2022.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[16px] font-['Lustria',serif] text-gray-700">
                Passengers with disabilities with wheelchair, have a 35% cancelation rate.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[16px] font-['Lustria',serif] text-gray-700">
                In Snapp there are 8383 mobility impaired drivers and 642 hearing impaired ones.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[16px] font-['Lustria',serif] text-gray-700">
                From 2090 rides of hearing impaired passengers, cancelation rate is  15%.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[16px] font-['Lustria',serif] text-gray-700">
                3195 of our total mobility impairment drivers had at least one ride in May 2022.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[16px] font-['Lustria',serif] text-gray-700">
                12436 of rides in May 2022 had been done by mobility impairment drivers.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[16px] font-['Lustria',serif] text-gray-700">
                2241 of rides in May 2022 had been done by hearing impaired users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problems */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            The Problems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
              <li>Passengers had no clue if the driver that had accepted their ride was disabled.</li>
              <li>If passengers needed any help from drivers and they were connected to a mobility-impaired driver, they would cancel the ride.</li>
            </ul>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
              <li>Passengers would call the drivers, but if they had hearing impairments that would fail.</li>
              <li>The mobility impairment car plate was not known for most people.</li>
              <li>When using screen readers, the app had some problems functioning properly.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
            Our goal
          </h2>
          <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
            To be able to measure the success of our design, we set some metrics:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
              <li>Increasing the number of messages in chat with hearing-impaired drivers</li>
              <li>Enable 1% of Snapp users who are blind to be able to call a cab natively through screen readers (Android Talkback or iOS Voiceover).</li>
            </ul>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
              <li>Increasing the number of drivers with disability.</li>
              <li>Reduce post-acceptance cancelation for passengers with wheelchairs by 5%.</li>
              <li>Drivers and passengers with hearing impairments will not get calls and their rides will not get canceled because of this problem.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting to know drivers with disabilities */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              Getting to know drivers with disabilities
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              First, in the Q4 quarter of 2020, a research was conducted on deaf and hard-of-hearing
              drivers <strong className="font-bold">to calculate the effect of informing passengers about
              the disability of drivers on ride cancelation metric.</strong>
            </p>
            <img src={arIllustration1} alt="Driver interview illustration" className="w-[363px]" />
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h3 className="text-[13px] font-['Lustria',serif] text-black mb-4 uppercase tracking-wider">
              Points from the interview with drivers with hearing impairments:
            </h3>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
              <li>As they can not understand the writing like regular people, we can't use a survey method.</li>
              <li>Passenger calls drivers with hearing impairments and they can't respond or send SMS or message in app, and passenger don't realize and after some calls cancel the ride.</li>
              <li>During the ride passengers can't communicate with the driver (specially in first impressions and greetings!)</li>
              <li>Low hearing drivers want to deal with them like normal drivers, not deaf drivers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Learning about Snapp users with disabilities */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              Learning about Snapp users with disabilities
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-6">
              One of our big challenges was that in Snapp we didn't have added disability types in profile;
              So we do not have any data to recognize our users who have disabilities. To solve this problem
              we had to look for available resources and we did the discovery through these mediums:
            </p>
            <img src={arDiscoveryMediums} alt="Discovery mediums" className="w-full" />
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[16px] font-['Lustria',serif] text-gray-700">1. Users' content on social media</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[16px] font-['Lustria',serif] text-gray-700">2. Chat messages analysis</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[16px] font-['Lustria',serif] text-gray-700">3. Interviewing users with the help of UX research team</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[16px] font-['Lustria',serif] text-gray-700">4. Benchmarking foreign and internal apps</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[16px] font-['Lustria',serif] text-gray-700">5. Recorded issues by call center</p>
            </div>
          </div>
        </div>
      </section>

      {/* What did we find out */}
      <section className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <div>
                <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
                  What did we find out from all the discovery?
                </h2>
                <img src={arIllustration2} alt="Discovery findings illustration" className="w-[385px]" />
              </div>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-[16px] font-['Lustria',serif] text-gray-700">
                    Passengers with <strong className="font-bold">mobility impairments</strong> face the highest
                    number of post-acceptance cancelations among disability categories.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-[16px] font-['Lustria',serif] text-gray-700">
                    Passengers are not familiar with the <strong className="font-bold">car plate</strong> for
                    mobility-impaired drivers.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-[16px] font-['Lustria',serif] text-gray-700">
                    Both passengers and drivers need to be informed about each others disability.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-[16px] font-['Lustria',serif] text-gray-700">
                    Drivers with mobility impairments have no blockers on the ride, unless passengers take a
                    ride to ask for services. On such occasions, they should talk about their disability,
                    which is not a pleasant experience for them.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-[16px] font-['Lustria',serif] text-gray-700">
                    Users with hearing impairments <strong className="font-bold">cannot notice and answer
                    calls</strong>; this problem leads to ride cancelation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideating solutions - Mobility */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
            Ideating solutions based on our findings
          </h2>
          <h3 className="text-[20px] font-['Lustria',serif] text-black mb-6">
            🦽 Mobility impairment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-16">
            {[
              "After ride acceptance, a badge on your profile will inform the not-deaf side of the disability issue.",
              "Letting drivers and passengers mark themselves as a person with a disability in their profile.",
              "Removing the commission from the rides of certified passengers, showing in offering",
              "Passengers are suggested to upload a disability certificate, so their rides are offered to drivers as commission-free rides.",
              "Digital commission exemption: Drivers with disabilities (all types) can upload a disability certificate in their profile, so they will get exemption from paying commission.",
              "Drivers with disabilities have a wheelchair sign on their car plate, on app we show \"ژ\" which is better to be changed by the real sign, so passengers can understand the disability on their own.",
              "Showing a wheelchair sign on the offering page",
              "Sending an SMS to the driver side regarding the disability of the passenger.",
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <p className="text-[16px] font-['Lustria',serif] text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          {/* Hearing impairment */}
          <h3 className="text-[20px] font-['Lustria',serif] text-blue-600 mb-6">
            🦻🏼 Hearing impairment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-16">
            {[
              "Letting users mark themselves as Deaf/HOH in profile.",
              "For this group of users, we should remove all of the verbal communication mediums and focus on visual/vibrating notifications. To solve the problem for old versions we should send SMS stating the disability issue for the other side.",
              "If the driver is Deaf and the ride is requested as RFF, another SMS will be sent regarding the disability issue.",
              "As the not-deaf side cannot reach out by calling, chat is the other solution. But it is not enough, so we will send an SMS which explains the disability and offers to use chat or SMS + the phone.",
              "",
              "After ride acceptance, a badge on your profile will inform the not-deaf side of the disability issue.",
            ].filter(Boolean).map((item, i) => (
              <div key={i} className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-[16px] font-['Lustria',serif] text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          {/* Visual impairment */}
          <h3 className="text-[20px] font-['Lustria',serif] text-amber-600 mb-6">
            👁 Visual Impairments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "For this group of users on the passenger side, we aim to improve the experience for 3 main types of visual impaired:\n1. Blind\n2. Colorblind\n3. Low-vision and older users",
              "Compatibility with screen readers, giving awareness to the assigned driver, choosing accessible colors and design, and also compatibility with larger text sizes will enhance the experience of using Snapp!",
              "Fixing issues on Android, iOS, and PWA which are not accessible for screen reader users.",
              "Giving awareness to drivers about the impairment of the assigned passenger and educating them.",
              "",
              "Letting users choose their disability type in their profile and providing special features for them.",
            ].filter(Boolean).map((item, i) => (
              <div key={i} className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <p className="text-[16px] font-['Lustria',serif] text-gray-700 whitespace-pre-line">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bringing ideas to life */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-4">
              Bringing ideas to life
            </h2>
            <h3 className="text-[20px] font-['Lustria',serif] text-black mb-4">
              Driver assigned page changes
            </h3>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed">
              Here are the changes we made when the driver with disabilities is assigned in a ride.
              (Also an SMS will be sent to the passenger explaining the situation.)
            </p>
          </div>
          <img src={arDriverAssigned} alt="Driver assigned page changes" className="w-full rounded-lg" />
        </div>
      </section>

      {/* Why this solution didn't work (ride flow) */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <img src={arWhyFailed1} alt="Failed solution screenshot" className="w-[241px]" />
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              Why this solution didn't work out?
            </h2>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
              <li>Facing a disabled call button would not give the user the reason and make them confused, (is the call down?)</li>
              <li>Users tend to not take snack-bars seriously enough, so we needed a more obvious way to keep them informed.</li>
              <li>There are occasions that the chat is disabled, like in ride allotment, or when either of the passenger or driver's app are not up to date, so disabling the call button with no chat would leave no connection route but the SMS and in case the SMS doesn't deliver it will cause problems.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What did we finally do (ride flow) */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              What did we finally do?
            </h2>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
              <li>Call button will stay active so we can take the benefit of informing users better and give them the number of the driver in case SMS doesn't arrive.</li>
              <li>There won't be a need for a snackbar as informing the users will happen in the bottom sheet.</li>
              <li>In case the passenger or driver app is not up to date, by tapping on the call button a voice will be played telling them that the driver has hearing impairments.</li>
            </ul>
          </div>
          <img src={arFinalRideFlow} alt="Final ride flow solution" className="w-full rounded-lg" />
        </div>
      </section>

      {/* Final overview - ride flow */}
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-4">
              Final overview of what we did in ride flow
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
              I redesigned this flow so many times because it had many different possibilities and not missing
              the corner cases was really challenging, and it should have been in a way that developers, PMs
              and QA understand it well.
            </p>
            <img src={arFlowOverview} alt="Ride flow overview" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* Adding passengers accessibility */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              Adding passengers accessibility in the app
            </h2>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
              <li>Here we wanted to give the passengers the ability to add their disability in the app so the drivers will be informed and the cancelation after acceptance rate decreases.</li>
              <li>Based on our data, mobility-impaired passengers had the highest rate of cancelation because of their wheelchair and the help they needed.</li>
              <li>By proving their mobility, the drivers who accept their ride won't pay any commissions and will be more willing to accept the ride.</li>
            </ul>
          </div>
          <img src={arPassengerScreens} alt="Passenger accessibility screens" className="w-full rounded-lg" />
        </div>
      </section>

      {/* Why this solution didn't work (profile) */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <img src={arIllustration3} alt="Profile solution illustration" className="w-[416px]" />
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              Why this solution didn't work out?
            </h2>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
              <li>Users consider disability as a part of their personality, so they will look for it in the profile. On the other hand, the profile is upper on the sidebar and is used by users more and finally, based on our expert review and some competitive analysis, profile was a better choice to get these data.</li>
              <li>The texts were too long and would be repetitive over some time, and handling and updating them would be technically costly.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What did we finally do (profile) */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-6">
              What did we finally do?
            </h2>
            <ul className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed list-disc list-inside space-y-4">
              <li>Based on our interviews data and expert reviews, I did a benchmark on other products with accessibility section and as a result I decided to add it as a part of user info in users profile.</li>
              <li>Mobility impairment prove and commission free rides will be postponed to phase two due to technical difficulties.</li>
              <li>I put the accessibility section after the personal info and the less important user data had been drifted down.</li>
            </ul>
          </div>
          <img src={arFinalProfile} alt="Final profile solution" className="w-full rounded-lg" />
        </div>
      </section>

      {/* Final overview - profile */}
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-8">
              Final overview of what we did on profile
            </h2>
            <img src={arProfileOverview} alt="Profile overview" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-[28px] md:text-[40px] font-['Lustria',serif] text-black mb-4">
              The impact
            </h2>
            <p className="text-[15px] md:text-[17px] font-['Lustria',serif] text-gray-700 leading-relaxed mb-8">
              Adding all these changes to the Android app had a positive impact on the experience of passengers,
              and drivers with disabilities; we measured our metrics after the roll-out, so far our most important
              metrics have improved:
            </p>
            <div className="bg-black text-white rounded-lg p-6 md:p-10 text-left space-y-4 max-w-2xl mx-auto mb-6">
              <p className="text-[20px] font-['Lustria',serif] leading-relaxed">
                ⬇️ Cancelation rate of rides by passengers who got drivers with disabilities decreased by 25%
              </p>
              <p className="text-[20px] font-['Lustria',serif] leading-relaxed">
                ⬆️ Number of messages in chat with hearing-impaired drivers increased by 65%
              </p>
              <p className="text-[20px] font-['Lustria',serif] leading-relaxed">
                ⬇️ Post-acceptance cancelation for passengers with wheelchairs reduced by 3%
              </p>
            </div>
            <p className="text-[15px] font-['Lustria',serif] text-gray-500">
              For confidentiality reasons, I have omitted the actual values for these metrics.
            </p>
          </div>
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
                <strong className="font-bold">Accessibility is more than a contrast check!</strong>{' '}
                Learning all about accessibility by taking courses, talking to experts in the field, giving
                solutions on how to improve the communication between users with different types of disability
                showed me that designing for accessibility is not just taking care of the interface and
                functionality of the app but the interaction between users has to get better.
              </li>
              <li>
                <strong className="font-bold">Adapting quick!</strong>{' '}
                This project was going on for a long time and handed over to me when first its PM and then
                its designer left our company. I had to ask all I needed to know from them in a few sessions,
                read all the documents and get ready like I was working on it the whole time! Following up on
                illustrations, data and collaborating with developers and QA, I was like a bridge between all
                these people trying to make sure everything was on track.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img src={arIllustration2} alt="Reflection illustration" className="w-[584px]" />
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
            We have so much for the future of this project; adding a section for passengers to prove their
            disability by uploading their documents and omitting the commission for drivers who accept their
            rides is the most important one of them, and for the second phase we are working on the problems
            of our users with visual impairment, we are currently working closely with our UX writers to make
            our app function better for screen readers.
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
  );
}
