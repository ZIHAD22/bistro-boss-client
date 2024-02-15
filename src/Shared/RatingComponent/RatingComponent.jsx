import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";

const RatingComponent = ({ reviewRating }) => {
  console.log(reviewRating);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  function getRating(rating) {
    switch (rating) {
      case 1:
        return "Poor";
      case 2:
        return "Nothing special";
      case 3:
        return "Average";
      case 4:
        return "Very good";
      case 5:
        return "Excellent";
      default:
        return "None";
    }
  }

  return (
    <div style={{ maxWidth: 180, width: "100%" }}>
      {reviewRating ? (
        <Rating value={reviewRating} />
      ) : (
        <Rating
          value={reviewRating}
          onChange={setRating}
          onHoverChange={setHoveredRating}
        />
      )}
      <div>
        {!reviewRating && (
          <>
            <div>{`Selected: ${getRating(rating)}`}</div>
            <div>{`Hovered: ${getRating(hoveredRating)}`}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default RatingComponent;
