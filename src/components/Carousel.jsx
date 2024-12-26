// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/images/istockphoto-1498170916-1024x1024.jpg'
import bgimg2 from '../assets/images/istockphoto-1498170898-1024x1024.jpg'
import bgimg3 from '../assets/images/volunteer-service-6772198_1280.jpg'

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto '>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1} 
            text='Join Hands to Make a Difference: Volunteer Today!'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Empower Communities Through Your Skills: Volunteer With Us!'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Be the Change: Volunteer and Impact Lives!'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
