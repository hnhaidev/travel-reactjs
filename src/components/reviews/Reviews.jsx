import { useContext, useState } from "react";
import SharedContext from "../../context/SharedContext";
import ReviewBody from "./ReviewBody";

function Reviews() {
  const [heading] = useState("What our customers are saying");

  const {
    sharedData: { reviews },
  } = useContext(SharedContext);

  return (
    <div className="reviews">
      <div className="container">
        <div className="heading headingAnimation">{heading}</div>
        <div className="row ml-minus-15 mr-minus-15">
          {reviews.length > 0
            ? reviews.map((review, idx) => (
                <ReviewBody key={idx} review={review} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
