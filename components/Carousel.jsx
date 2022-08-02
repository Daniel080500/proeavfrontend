import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export const Carousel = ({ images }) => {
    return (
        <div className="carousel-container">
            <div className="carousel-background"></div>
            <Swiper navigation={true} modules={[Navigation, Autoplay, EffectCoverflow, Pagination]} autoplay={{ delay: 5000 }} effect={"coverflow"} speed={4000} className="mySwiper"  >
                {images.map((image) => (
                    <SwiperSlide key={image}>
                        <img
                            src={image}
                            alt="Carousel Image"
                            style={{ width: "100%", height: "540px" }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};