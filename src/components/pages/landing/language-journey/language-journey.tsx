import CustomButton from "@/components/ui/button/button";
import { languageJourneyData } from './language-journey-data';
import { useLandingContext } from '../landing-context';

const LanguageJourney = () => {
  const type = useLandingContext()
  const userData = languageJourneyData[type];

  return (
    <section className="bg-main py-[40px] mobile:py-[120px]">
      <div className="container_big">
        <div className="max-w-[815px] mx-[auto]">
          <h2 className="text-[32px] mobile:text-[44px] font-semibold text-center text-optional mb-3">
            { userData.title }
          </h2>
          <p className="text-lg mobile:text-xl text-center text-optional mb-8">
            { userData.content }
          </p>
          <div className="flex flex-col mobile:flex-row justify-center gap-6">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdUbp98bjGFi_-KZpt99bnJqJIg2thn6wfGhjV9-J0bKUkYWQ/viewform?embedded=true" width="640" height="797">Chargement…</iframe>          </div>
        </div>        
      </div>
    </section>
  )
}

export default LanguageJourney;
