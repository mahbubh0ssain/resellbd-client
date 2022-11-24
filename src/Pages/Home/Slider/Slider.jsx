import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination } from "swiper";

export const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            style={{ height: "450px" }}
            src="http://cdn.shopify.com/s/files/1/0395/1129/3997/collections/used-furniture-558723_1200x1200.jpg?v=1603184995"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ height: "450px" }}
            src="https://austinhabitat.org/wp-content/uploads/IMG_4286-800x600.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ height: "450px" }}
            src="https://images.thestar.com/cAGSGq-8IMq4hxTeLGOBqZn-xXU=/1086x723/smart/filters:cb(2700061000):format(webp)/https://www.thestar.com/content/dam/thestar/life/homes/decor/2010/04/26/15_considerations_before_buying_used_furniture/usedfurniture.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ height: "450px" }}
            src="https://www.canterburyusedfurniture.com/uploads/3/4/0/5/34055085/l40_orig.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
