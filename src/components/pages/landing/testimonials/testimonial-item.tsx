import Image from 'next/image'
import { Star } from "lucide-react";

type TestimonialitemProps = {
  img: string
  name: string
  starsNumber: number
  content: React.ReactNode
}

const Testimonialitem = ({img, name, starsNumber, content}: TestimonialitemProps) => {
  return (
    <div className="bg-white p-[30px] rounded-[20px] h-full">
      <div className='flex gap-3 mb-6'>
        <Image
          src={img} 
          width={38}
          height={38}
          alt="testimonial person image"
        />
        <div>
          <span className='text-[#373737] text-sm font-semibold'>{ name }</span>
          <div className='flex gap-1'>
            {
              Array(starsNumber).fill('').map((_, index) => {
                return <Star key={`star_${index}`} fill="#ECA51A" color="#ECA51A" width={14} height={14}></Star>
              })
            }
          </div>
        </div>
      </div>
      <div className='text-text text-base'>
        { content }
      </div>
    </div>
  )
}

export default Testimonialitem;
