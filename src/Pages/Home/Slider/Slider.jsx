import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination } from "swiper";

export const Slider = () => {
  return (
    <div className="px-6">
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
            className="relative"
            style={{ height: "650px", objectFit: "fill" }}
            src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2022-05/sdc-359.jpg"
            alt=""
          />
          <div className="absolute bottom-20 text-left px-12 grid  grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl text-yellow-400 font-bold">Regal Sofa</h2>
              <p className="text-white">
                Looking for a smart, stylish and beautiful sofa to decorate your
                living room and waiting room? Do you want to make your living
                room more welcoming and attractive to your guests? Here you have
                come to the right place!!!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative"
            style={{ height: "650px", objectFit: "fill" }}
            src="https://austinhabitat.org/wp-content/uploads/IMG_4286-800x600.jpg"
            alt=""
          />
          <div className="absolute bottom-20 text-left px-12 grid  grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 ">
                Otobi chair
              </h2>
              <p className="text-white">
                Completely engage enabled e-business without reliable customer
                service. Compellingly build magnetic niche markets before global
                vortals. Dramatically formulate 24/365 channels and distributed
                portals. Energistically generate 24/365 methods of empowerment
                for real-time.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative"
            style={{ height: "650px", objectFit: "fill" }}
            src="https://images.thestar.com/cAGSGq-8IMq4hxTeLGOBqZn-xXU=/1086x723/smart/filters:cb(2700061000):format(webp)/https://www.thestar.com/content/dam/thestar/life/homes/decor/2010/04/26/15_considerations_before_buying_used_furniture/usedfurniture.jpeg"
            alt=""
          />
          <div className="absolute bottom-20 text-left px-12 grid  grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 ">
                Woden trunk
              </h2>
              <p className="text-white">
                Continually coordinate ethical web services after
                bricks-and-clicks strategic theme areas. Progressively innovate
                sustainable ideas with wireless networks. Competently fabricate
                dynamic bandwidth for orthogonal manufactured products.
                Distinctively engineer effective ROI.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative"
            style={{ height: "650px", objectFit: "fill" }}
            src="https://www.canterburyusedfurniture.com/uploads/3/4/0/5/34055085/l40_orig.jpg"
            alt=""
          />
          <div className="absolute bottom-20 text-left px-12 grid  grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 ">
                Wooden Table
              </h2>
              <p className="text-white">
                Continually coordinate ethical web services after
                bricks-and-clicks strategic theme areas. Progressively innovate
                sustainable ideas with wireless networks. Competently fabricate
                dynamic bandwidth for orthogonal manufactured products.
                Distinctively engineer effective ROI.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
