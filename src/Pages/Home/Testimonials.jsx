import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const axiosPublic = useAxiosPublic()
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            return res.data
        }
    })
    return (
        <div className="bg-white py-20">
            <div className="md:max-w-7xl mx-auto ">
                <div className="mb-16">
                    <h2 className='text-3xl text-center font-semibold'>Testimonals</h2>
                </div>
                <div>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                        spaceBetween={20}
                        slidesPerView={3}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className="p-4 bg-white shadow-md rounded-lg text-gray-700 space-y-5 min-h-[250px]">
                                    <div className="flex gap-4">
                                        <img className="w-10 h-10 object-cover rounded-full" src={review.image} />
                                        <div>
                                            <h4>{review.name}</h4>
                                            <p>{review.designation}</p>
                                        </div>
                                    </div>
                                    <p>{review.review}</p>
                                    <Rating style={{ maxWidth: 150 }} value={review.rating} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;