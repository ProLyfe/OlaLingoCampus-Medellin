import ContactBlock from './contact-block'
import SupportBlock from './support-block'

const ContactUs = () =>  {
  return (
    <section className="py-[40px] mobile:py-[120px]">
      <div className='container_big'>
        <div className="flex flex-col mobile:flex-row gap-[25px] justify-center">
          <ContactBlock />
          <SupportBlock />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

