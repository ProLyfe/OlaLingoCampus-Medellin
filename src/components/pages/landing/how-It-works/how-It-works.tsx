import SectionTitle from '../section-title/section-title';
import { howItWorksData } from './how-it-works-data';
import { useLandingContext } from '../landing-context';
import whatsapp from '../../../../../public/assets/icons/whicon.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const HowItWorks = () => {
  const type = useLandingContext()
  const userData = howItWorksData[type];
  const pathname = usePathname();

  return (
    <section className="bg-white py-[40px] mobile:py-[120px]" id="contactus">
      <div className="container_big">
  <SectionTitle>{pathname === '/' ? "Contáctenos" : "Contáctenos"}</SectionTitle>
        <div className="contactsection">
            <p className="text-center text-optional contactustext">
            {pathname === '/' ? "Únete a OlaLingo Campus y aumenta tus ingresos. Aprovecha esta oportunidad para hacer crecer tu negocio con nosotros." : 
            "Estamos entusiasmados de comenzar este viaje educativo juntos! Ahora puedes comenzar a enseñar y conectarte con estudiantes de todo el mundo. Ofrecemos un entorno flexible, listo para que inspires a tus estudiantes y desarrolles tu carrera docente. Únete a nosotros y comienza a enseñar hoy mismo."}
              
            </p>
            <a href="tel:+573233501939" className="contactusmail">
              +573233501939
            </a>
            <a href="tel:+573233501939" className="contactuswhat">
              <Image className="ml-[-30px]" src={whatsapp} height={90} alt='logo'/>
            </a>
            <a href="mailto:olalingo.learn@gmail.com" className="contactusmail">olalingo.learn@gmail.com</a>
        </div>
          </div>
    </section>
  )
};

export default HowItWorks;
