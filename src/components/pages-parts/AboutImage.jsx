import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function AboutImage() {
  const [image] = useState("/assets/about/about.jpg");
  return (
    <div className="page__image">
      <LazyLoadImage src={image} alt={image} />
    </div>
  );
}

export default AboutImage;
