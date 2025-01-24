import { useQuery } from "@tanstack/react-query";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

import StarRatings from "react-star-ratings";
import { Navigation, Pagination } from 'swiper/modules';

const Review = () => {
    const axiosPublic = useAxiosPublic()
    const { data: reviewdata = [], isLoading } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('reviews')
            return data
        }
    })

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-xl font-bold text-center mb-6"> Reviews</h2>
            <Swiper
                
                pagination={{
                    clickable: true,
                  }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={15}
                // centeredSlides={true}
                className="mySwiper"
            >
                {reviewdata.map((revi) => (
                    <SwiperSlide key={revi._id}>
                        <div className="p-6 border rounded-lg max-w-80 shadow-lg bg-white">

                            <h3 className="text-lg font-semibold text-center mb-2">{revi.name}</h3>
                            {/* <Rating value={revi.rating} /> */}
                            <p className="text-gray-600 text-center mt-2">{revi.feedback}</p>
                            <div className="text-center">
                                <StarRatings
                                    rating={revi?.rating}
                                    starDimension="24px"
                                    starSpacing="2px"
                                    starRatedColor='rgb(255,165,0)'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Review;