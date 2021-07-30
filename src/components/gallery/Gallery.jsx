import { useContext, useState } from "react";
import GalleryContext from "../../context/GalleryContext";
import GalleryImage from "./GalleryImage";
import LightBox from "./LightBox";

function Gallery() {
  const {
    galleryStore: { gallery, lightBoxStatus },
    dispatch,
  } = useContext(GalleryContext);

  const [heading] = useState("Travelers captured images");
  return (
    <>
      {lightBoxStatus ? <LightBox /> : ""}
      <div className="gallery">
        <div className="container">
          <h2 className="heading mb-55 headingAnimation">{heading}</h2>
          <div className="row">
            {gallery.length
              ? gallery.map((glr, idx) => <GalleryImage key={idx} glr={glr} />)
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
