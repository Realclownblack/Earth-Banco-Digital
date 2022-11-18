import '../../assets/css/Carousel_react.css'
import {Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Carousel_react = (props) => {

    return (
        <div className='Carousel_react-div' >
                        <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                // pagination={{
                // clickable: true,
                // }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                  }}
                navigation={false}
                modules={[Autoplay,Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide ><div className='Carousel_react-box'> <a className='Carousel_react-button' href="">Pix</a></div></SwiperSlide>
                <SwiperSlide ><div className='Carousel_react-box'> <a className='Carousel_react-button' href="">Emprestimo</a></div></SwiperSlide>
                <SwiperSlide ><div className='Carousel_react-box'> <a className='Carousel_react-button' href="">Cartoes</a></div></SwiperSlide>
                <SwiperSlide ><div className='Carousel_react-box'> <a className='Carousel_react-button' href="">Fatura</a></div></SwiperSlide>
                <SwiperSlide ><div className='Carousel_react-box'> <a className='Carousel_react-button' href="">Extrato</a></div></SwiperSlide>
                <SwiperSlide ><div className='Carousel_react-box'> <a className='Carousel_react-button' href="">Transferencia</a></div></SwiperSlide>
            </Swiper>
        </div>
    )
}