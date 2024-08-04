import styles from './testimonials.module.scss'
import SectionTitle from '../section-title/section-title';
import Testimonialitem from './testimonial-item';
import { testimonialsData } from './testimonials-data';
import { useLandingContext } from '../landing-context';
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import 'swiper/css';

const Testimonials = () => {
  const swiperRef: any = useRef(null);
  const type = useLandingContext()
  const userData = testimonialsData[type];

  const onSwiperInit = (swiper: any) => {
    swiperRef.current = swiper;
  };

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className="py-[40px] mobile:py-[120px] flex justify-center">
      <div className='container_big'>
        <div className="max-w-[1140px] mx-[auto]">
          <div className='pb-[40px] flex flex-row justify-between items-center'>
            <h2 className="text-[32px] mobile:text-[36px] font-semibold text-h text-center">Testimonials</h2>
            <div className='flex flex-row gap-6'>
              <button
                onClick={goPrev}
                className={`${styles.prev_slide}`}
                style={{ direction: "ltr" }}
              >
                <ChevronLeft></ChevronLeft>
              </button>
              <button
                onClick={goNext}
                className={`${styles.next_slide}`}
                style={{ direction: "ltr" }}
              >
                <ChevronRight></ChevronRight>
              </button>
            </div>
          </div>
          <Swiper
            grabCursor={true}
            ref={swiperRef}
            onSwiper={onSwiperInit}
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              860: {
                slidesPerView: 3,
              },
              600: {
                slidesPerView: 2,
              },
            }}
          >
            {
              userData.map((item, index) => (
                <SwiperSlide key={item.name + index} style={{ height: "auto" }}>
                  <Testimonialitem 
                    name={item.name}
                    img={item.imgSrc}
                    content={item.content}
                    starsNumber={item.startsNumber}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
