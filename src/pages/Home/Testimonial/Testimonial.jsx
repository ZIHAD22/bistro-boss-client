import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, History } from "swiper/modules";
import { useEffect, useState } from "react";
import Loading from "../../../Shared/Loading/Loading";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loading = async () => {
      const data = await fetch("http://localhost:5000/review");
      const result = await data.json();
      setReviews(result);
      setLoading(false);
    };

    loading();
  }, []);

  return (
    <div className="my-8">
      <SectionTitle
        mainHeading="TESTIMONIALS"
        subHeading="What Our Clients Say"
      />
      {loading ? (
        <Loading hight="h-[150px]" />
      ) : (
        <>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={true}
            history={{
              key: "slide",
            }}
            modules={[Navigation, Pagination, History]}
            className="mySwiper"
          >
            {reviews.map((item) => (
              <SwiperSlide key={item._id} data-history="1">
                <TestimonialCard review={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default Testimonial;
