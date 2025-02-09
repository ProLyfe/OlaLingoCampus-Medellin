import Image from 'next/image'
import CustomButton from "@/components/ui/button/button";
import { bannerData } from './introduction-banner-data';
import { useLandingContext } from '../landing-context';
import Link from '../../../../../node_modules/next/link';
import { usePathname } from 'next/navigation';

const IntroductionBanner = () => {
  const type = useLandingContext()
  const { title, content } = bannerData[type];
  const pathname = usePathname();

  return (
    <section className='py-[40px] mobile:py-[100px]'>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[74px] container_big">
        <div>
          <h1 className='leading-[135%] text-4xl mobile:text-6xl text-h font-bold pb-3'>{title}</h1>
          <p className='text-txt text-xl'>{ content }</p>
          <div className='flex flex-col mobile:flex-row gap-6 pt-[32px]'>
            <Link href="#contactus">
              <CustomButton
                className="w-full mobile:w-[226px]"
                btnSize="l"
                bgColor="main"
                >
                {pathname === '/' ? "Ver más" : "Ver más"}
              </CustomButton>
            </Link>
            {/* <CustomButton
              className="w-full mobile:w-[226px]"
              btnSize="l"
              bgColor="light"
            >
              Start Free Trial
            </CustomButton> */}
          </div>
        </div>
        <div className='flex items-center'>
          <Image
            src="/assets/landing/introdusing-banner.png"
            width={817}
            height={432}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  )
}

export default IntroductionBanner;
