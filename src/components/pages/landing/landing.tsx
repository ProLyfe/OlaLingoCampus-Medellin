import IntroductionBanner from './introduction-baner/introduction-banner'
import AboutUs from './about-us/about-us'
import KeyFeatures from './key-features/key-features'
import Subscriptions from './subscriptions/subscriptions'
import HowItWorks from './how-It-works/how-It-works'
import LanguageJourney from './language-journey/language-journey'
import LanguageJourneyBanner from './language-journey/language-journey-banner'
import Testimonials from './testimonials/testimonials'
import ContactUs from './contact-us/contact-us';
import Footer from './footer/footer'

import LandingContextProvider from './landing-context';

type LandingPageProps = {
  type: 'teacher' | 'student'
};

const LandingPage = ({ type = 'student' }: LandingPageProps) => {
  return (
    <LandingContextProvider type={type}>
      <IntroductionBanner />
      <LanguageJourneyBanner />
      {/* <AboutUs /> */}
      {/* <div className="flex justify-center bg-red">
        <p>Learn and practice with native speakers for an authentic language learning experience</p>
      </div> */}
      <KeyFeatures />
      {/* { type === 'student' && <Subscriptions /> } */}
      {/* <HowItWorks /> */}
      <LanguageJourney />
      {/* <Testimonials /> */}
      {/* <ContactUs /> */}
      <Footer />
    </LandingContextProvider>
  )
}

export default LandingPage;
