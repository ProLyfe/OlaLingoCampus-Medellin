import CustomButton from "@/components/ui/button/button";
import SectionTitle from '../section-title/section-title';
import Image from 'next/image';
import { aboutUsData } from './about-us-data';
import { useLandingContext } from '../landing-context';

const AboutUs = () => {
  const type = useLandingContext()
  const { title, content } = aboutUsData[type];

  return (
    <section className="bg-white py-[40px] mobile:py-[120px]">
      <div className="container_big">
        <div>
          <SectionTitle>{ title }</SectionTitle>
          <div className="flex justify-center pt-3 pb-8">
            <p className="text-txt text-lg text-center max-w-[794px]">{ content }</p>
          </div>
          <div className="flex justify-center pb-10">
            <CustomButton
              className="w-full mobile:w-[226px]"
              btnSize="l"
              bgColor="main"
            >
              Join
            </CustomButton>
          </div>
        </div>
        { 
          type === 'student' && (
            <div className="flex gap-3 mobile:gap-[2.2%]">
              <div>
                <Image
                  className="rounded-[20px] mobile:rounded-[30px]"
                  src="/assets/landing/4885abcbd874145e13b3c640d0887a76.jpg"
                  width={1120}
                  height={673}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex gap-3 flex-col justify-between">
                <Image
                  className="rounded-[20px] mobile:rounded-[30px]"
                  src="/assets/landing/671db09a7cb7565148286f7e9087234d.jpeg"
                  width={468}
                  height={321}
                  alt="Picture of the author"
                />
                <Image
                  className="rounded-[20px] mobile:rounded-[30px]"
                  src="/assets/landing/d3b0d7a5b397ff1a745eb88cbe5ad625.jpeg"
                  width={468}
                  height={321}
                  alt="Picture of the author"
                />
              </div>
            </div>
          )
        }

        {
          type === 'teacher' && (
            <div className="flex gap-3 mobile:gap-[2.2%]">
              <div className="flex gap-3 flex-col justify-between">
                <Image
                  className="rounded-[20px] mobile:rounded-[30px]"
                  src="/assets/landing/t6288.jpg"
                  width={468}
                  height={321}
                  alt="Picture of the author"
                />
                <Image
                  className="rounded-[20px] mobile:rounded-[30px]"
                  src="/assets/landing/t6289.jpg"
                  width={468}
                  height={321}
                  alt="Picture of the author"
                />
              </div>
              <div>
                <Image
                  className="rounded-[20px] mobile:rounded-[30px]"
                  src="/assets/landing/t6287.jpg"
                  width={1120}
                  height={673}
                  alt="Picture of the author"
                />
              </div>
            </div>
          )
        }

      </div>
    </section>
  )
}

export default AboutUs;