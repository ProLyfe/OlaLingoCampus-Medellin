import CustomButton from "@/components/ui/button/button";
import { languageJourneyData } from './language-journey-data';
import { useLandingContext } from '../landing-context';

const LanguageJourneyBanner = () => {
  const type = useLandingContext()
  const userData = languageJourneyData[type];

  return (
    <section className="bg-main py-[40px] mobile:py-[18px]">
      <div className="container_big">
        <div className="max-w-[815px] mx-[auto]">
          {/* <h2 className="text-[32px] mobile:text-[44px] font-semibold text-center text-optional mb-3">
            { userData.title }
          </h2> */}
          <p className="text-center text-optional">
            Offer your students an authentic experience by connecting with you to enhance their practical and cultural
          </p>
          {/* <div className="flex flex-col mobile:flex-row justify-center gap-6">
            <CustomButton
              className="w-full mobile:w-[226px]"
              btnSize="l"
              bgColor="main_white"
            >
              Join
            </CustomButton>
            <CustomButton
              className="w-full mobile:w-[226px]"
              btnSize="l"
              bgColor="outline"
            >
              Start Free Trial
            </CustomButton>
          </div> */}
        </div>        
      </div>
    </section>
  )
}

export default LanguageJourneyBanner;
