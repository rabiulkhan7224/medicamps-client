
import banner1 from '../../assets/campbanner.jpg'
import banner2 from '../../assets/female-doctor.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div>

        
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-[60vh]"
        >
          <SwiperSlide><img  className='w-full content-center object-cover '   src={banner1} alt="" /></SwiperSlide>
          <SwiperSlide><img  className='w-full object-cover' src={banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img  className='w-full object-cover' src={banner1} alt="" /></SwiperSlide>
          
        </Swiper>
        </div>
    );
};

export default Banner;