

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/swiper-index.css";

import veg from '../img/veg.png';
import nonveg from '../img/non-veg.png';
import masaladosa from "../img/masala-dosa.jpg";
import { IngredientList } from "./IngredientList";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderHome() {
  return (
    <>
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
        className="mySwiper"
      >
        
        <SwiperSlide>
            <IngredientList 
                name={"Masala dosa"} 
                image={masaladosa}
                description={"Arguably South India’s most renowned culinary export, masala dosas are famous the world over."} 
                type={nonveg} 
                cost={"Rs. 125"}/>
        </SwiperSlide>
        <SwiperSlide>
            <IngredientList 
                name={"Masala dosa"} 
                image={masaladosa}
                description={"Arguably South India’s most renowned culinary export, masala dosas are famous the world over."} 
                type={nonveg} 
                cost={"Rs. 125"}/>
        </SwiperSlide>
        <SwiperSlide>
            <IngredientList 
                name={"Masala dosa"} 
                image={masaladosa}
                description={"Arguably South India’s most renowned culinary export, masala dosas are famous the world over."} 
                type={nonveg} 
                cost={"Rs. 125"}/>
        </SwiperSlide>
        <SwiperSlide>
            <IngredientList 
                name={"Masala dosa"} 
                image={masaladosa}
                description={"Arguably South India’s most renowned culinary export, masala dosas are famous the world over."} 
                type={nonveg} 
                cost={"Rs. 125"}/>
        </SwiperSlide>
        <SwiperSlide>
            <IngredientList 
                name={"Masala dosa"} 
                image={masaladosa}
                description={"Arguably South India’s most renowned culinary export, masala dosas are famous the world over."} 
                type={veg} 
                cost={"Rs. 125"}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
