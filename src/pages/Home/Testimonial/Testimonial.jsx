import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import RatingComponent from "../../../Shared/RatingComponent/RatingComponent";

const Testimonial = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 fill-current text-yellow-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18l-4-4 1.41-1.41L12 16.17l6.59-6.59L18 10l-6 6z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 fill-current text-gray-400"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-16c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z" />
          </svg>
        );
      }
    }
    return stars;
  };
  return (
    <div className="my-8">
      <SectionTitle
        mainHeading="TESTIMONIALS"
        subHeading="What Our Clients Say"
      />
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-6 testimonial">
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="https://via.placeholder.com/50"
              alt="Person Image"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
              <p className="text-gray-600">CEO, Company Name</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            ligula vel justo maximus fringilla. Ut non purus leo. Suspendisse
            nec sodales leo.
          </p>
          <div className="flex items-center mt-4">
            <RatingComponent />
          </div>
          <div className="border-t border-gray-300 mt-4 pt-4">
            <p className="text-sm text-gray-600">- John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
