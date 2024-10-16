import SectionTitle from '../section-title/section-title';
import { howItWorksData } from './how-it-works-data';
import { useLandingContext } from '../landing-context';
import whatsapp from '../../../../../public/assets/icons/whicon.png';
import Image from 'next/image';

const HowItWorks = () => {
  const type = useLandingContext()
  const userData = howItWorksData[type];

  return (
    <section className="bg-white py-[40px] mobile:py-[120px]">
      <div className="container_big">
        <SectionTitle>Contact us</SectionTitle>
        <div className="contactsection">
            <p className="text-center text-optional contactustext">
              We are excited to begin this educational journey together! You can now start teaching and connect with students from around the world. We offer a flexible environment, ready for you to inspire your students and grow your teaching career. Join us and start teaching today. 
            </p>
            <a href="tel:+3333" className="contactuswhat">
              <Image className="ml-[-30px]" src={whatsapp} height={90} alt='logo'/>
            </a>
            <a href="mailto:olalingo.learn@gmail.com" className="contactusmail">olalingo.learn@gmail.com</a>
        </div>
          </div>
    </section>
  )
}

export default HowItWorks;
