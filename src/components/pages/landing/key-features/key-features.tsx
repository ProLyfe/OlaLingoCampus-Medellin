import SectionTitle from '../section-title/section-title'
import Image from 'next/image'
import { keyFeaturesData } from './key-features-data'
import { useLandingContext } from '../landing-context';


const KeyFeatures = () => {
  const type = useLandingContext()
  const userData = keyFeaturesData[type];

  return (
    <section className="py-[40px] mobile:py-[120px]">
      <div className="container_big">
        <SectionTitle>What is Olalingo ?</SectionTitle>
        <div className='flex justify-center'>
        <div className='flex flex-col mobile:grid grid-rows-2 grid-cols-3 mt-[48px] gap-x-[24px] gap-y-[32px]'>
          { userData.map(item => (
            <div key={item.title} className='flex flex-col items-center max-w-[364px]'>
              <Image
                className="mb-[20px]"
                src="/assets/landing/4885abcbd874145e13b3c640d0887a76.jpg"
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
