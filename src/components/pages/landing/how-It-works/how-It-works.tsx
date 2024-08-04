import SectionTitle from '../section-title/section-title';
import { howItWorksData } from './how-it-works-data';
import { useLandingContext } from '../landing-context';

const HowItWorks = () => {
  const type = useLandingContext()
  const userData = howItWorksData[type];

  return (
    <section className="bg-white py-[40px] mobile:py-[120px]">
      <div className="container_big">
        <SectionTitle>How It Works</SectionTitle>
        <div className='flex flex-col gap-5 mobile:gap-6 mobile:flex-row justify-center items-center mobile:items-start mt-12'>
          {userData.map((item, index) => (
            <div className='flex gap-5' key={item.title}>
              <div>
                <div className='flex justify-center items-center w-[60px] h-[60px] mobile:w-[84px] mobile:h-[84px] rounded-full bg-mainAdditional'>
                  <span className='text-[28px] mobile:text-[58px] text-optional font-semibold'>
                    {index + 1}
                  </span>
                </div>
              </div>
              <div className='max-w-[260px]'>
                <h5 className='text-h font-bold text-[22px]'>{item.title}</h5>
                <p className='text-base text-txt'>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks;
