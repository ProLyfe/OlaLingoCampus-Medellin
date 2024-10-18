import SectionTitle from '../section-title/section-title'
import Image from 'next/image'
import { keyFeaturesData } from './key-features-data'
import { useLandingContext } from '../landing-context';
import { usePathname } from 'next/navigation';

const KeyFeatures = () => {
  const type = useLandingContext()
  const userData = keyFeaturesData[type];
  const pathname = usePathname();

  return (
    <section className="py-[40px] mobile:py-[120px]">
      <div className="container_big">
        <SectionTitle>{pathname === '/' ? "What is OlaLingo ?" : "¿Qué es OlaLingo?"}</SectionTitle>
        <div className='flex justify-center'>
        <div className='flex flex-col mobile:grid grid-rows-2 grid-cols-3 mt-[48px] gap-x-[24px] gap-y-[32px]'>
          { userData.map(item => (
            <div key={item.title} className='flex flex-col items-center max-w-[364px] imagecontainer'>
              <Image
                className="mb-[20px]"
                src={item.imagesrc}
                width={400}
                height={400}
                alt="check icon"
              />
              <h5 className='text-h mb-[9px] text-[22px] font-semibold text-center'>{ item.title }</h5>
              <p className='text-txt font-lg text-center'>{ item.content }</p>
            </div>
          )) }
        </div>
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures;
