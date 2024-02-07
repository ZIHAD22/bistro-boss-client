import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// image for category
import cate1 from "../../../assets/home/slide1.jpg";
import cate2 from "../../../assets/home/slide2.jpg";
import cate3 from "../../../assets/home/slide3.jpg";
import cate4 from "../../../assets/home/slide4.jpg";
import cate5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="mb-10">
      <SectionTitle
        subHeading="From 11:00am to 10:00pm"
        mainHeading="ORDER ONLINE"
      />
      <div className="text-center">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="text-center mx-auto" src={cate1} alt="" />
            <p
              className="text-center mt-[-60px] pb-[60px] text-white text-4xl uppercase"
              style={{ textShadow: "1px 2px 3px black" }}
            >
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cate2} className="mx-auto" alt="" />
            <p
              className="text-center mt-[-60px] pb-[60px] text-white text-4xl uppercase"
              style={{ textShadow: "1px 2px 3px black" }}
            >
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cate3} className="mx-auto" alt="" />
            <p
              className="text-center mt-[-60px] pb-[60px] text-white text-4xl uppercase"
              style={{ textShadow: "1px 2px 3px black" }}
            >
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cate4} className="mx-auto" alt="" />
            <p
              className="text-center mt-[-60px] pb-[60px] text-white text-4xl uppercase"
              style={{ textShadow: "1px 2px 3px black" }}
            >
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cate5} className="mx-auto" alt="" />
            <p
              className="text-center mt-[-60px] pb-[60px] text-white text-4xl uppercase"
              style={{ textShadow: "1px 2px 3px black" }}
            >
              Salads
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
