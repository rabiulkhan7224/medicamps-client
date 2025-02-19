import banner1 from '../../assets/campbanner.webp';
import banner2 from '../../assets/female-doctor-vaccinating-her-colleague.webp';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

const Banner = () => {
  // Define animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="">
      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[80vh]"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[80vh]  object-cover"
              src={banner1}
              alt="Camp Banner"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <motion.div
                className=" text-center   text-white px-4"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="text-4xl md:text-6xl font-bold">
                  Join Our Health Camps
                </h1>
                <motion.p
                  className="mt-4 text-lg md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Promoting health and wellness for everyone.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[80vh] object-cover"
              src={banner2}
              alt="Female Doctor"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <motion.div
                className="text-center text-white px-4"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="text-4xl md:text-6xl font-bold">
                  Meet Our Experts
                </h1>
                <motion.p
                  className="mt-4 text-lg md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Experience quality care from top professionals.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
