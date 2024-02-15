import RatingComponent from "../../../Shared/RatingComponent/RatingComponent";

const TestimonialCard = ({ review: { name, details, rating } }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-white w-[80%] rounded-lg shadow-lg p-6 testimonial">
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
          <p className="text-gray-700">{details}</p>
          <div className="flex items-center mt-4">
            <RatingComponent reviewRating={rating} />
          </div>
          <div className="border-t border-gray-300 mt-4 pt-4">
            <p className="text-sm text-gray-600">- {name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
