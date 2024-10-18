import CustomButton from "@/components/ui/button/button";
import { languageJourneyData } from './language-journey-data';
import { useLandingContext } from '../landing-context';
import { usePathname } from 'next/navigation';

const LanguageJourney = () => {
  const type = useLandingContext()
  const userData = languageJourneyData[type];
  const pathname = usePathname();

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
            {pathname === '/' ? 
         <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdoY58VNG5NNcxOZHm4sGRsGQ3GaXVgUQqQUcF0jFZTdeNlRQ/viewform?embedded=true" width="100%" height="1300">Chargement…</iframe>
        : <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfhFoD6YYzl09rh_WN3_FBKWpXkb7bhXpk0Xr1oVlghpfs-1A/viewform?embedded=true" width="100%" height="1300">Chargement…</iframe>         
        } </div>
        </div>        
      </div>
    </section>
  )
}
export default LanguageJourney;
