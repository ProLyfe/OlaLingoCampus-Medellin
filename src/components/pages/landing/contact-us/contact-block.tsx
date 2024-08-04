import Image from 'next/image'

const ContactBlock = () => {
  return (
    <div className='w-full mobile:w-[558px]'>
      <h2 className="text-[32px] mobile:text-[44px] text-center mobile:text-start font-semibold text-h mb-2">Contact us</h2>
      <p className="text-xl text-txt mb-10 text-center mobile:text-start">Fill up the form and our team will get back to you</p>
      <div className="flex flex-col mobile:flex-row flex-wrap items-center gap-[12px] mobile:gap-[27px]">
        <div className="flex gap-3 items-center">
          <div className='rounded-full bg-[#C1A8F5] inline-flex justify-center items-center w-[40px] h-[40px]'>
            <Image
              src='/assets/landing/call.svg' 
              width={25}
              height={24}
              alt="call icon"
            />
          </div>
          <span className='font-semibold'>+1 (555) 123-4567</span>
        </div>
        <div className="flex gap-3 items-center">
          <div className='rounded-full bg-[#C1A8F5] inline-flex justify-center items-center w-[40px] h-[40px]'>
            <Image
              src='/assets/landing/sms.svg' 
              width={25}
              height={24}
              alt="call icon"
            />
          </div>
          <span className='font-semibold'>support@lms.com</span>
        </div>
      </div>
    </div>
  )
}

export default ContactBlock;
