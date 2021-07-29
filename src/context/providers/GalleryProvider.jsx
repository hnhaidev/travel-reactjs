import { useReducer } from "react";
import GalleryContext from "../GalleryContext";
import GalleryReducer from "../reducers/GalleryReducer";
import gallery from "../../data/gallery";

function GalleryProvider({ children }) {
  const [galleryStore, dispatch] = useReducer(GalleryReducer, {
    gallery,
    lightBoxStatus: false,
    currentLightBox: {},
  });
  return (
    <GalleryContext.Provider value={{ galleryStore, dispatch }}>
      {children}
    </GalleryContext.Provider>
  );
}

export default GalleryProvider;
