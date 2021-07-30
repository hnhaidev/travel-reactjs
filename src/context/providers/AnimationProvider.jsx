import { useEffect } from "react";
import AnimationContext from "../AnimationContext";

function AnimationProvider({ children }) {
  const scrollAnimation = () => {
    const animation = (elements, className) => {
      elements.forEach((element) => {
        const elementPositon = element.getBoundingClientRect().top;
        const viewPortHeight = window.innerHeight - 150;

        if (elementPositon < viewPortHeight) {
          element.classList.add(className);
        }
        //
        else {
          element.classList.remove(className);
        }
      });
    };

    const elements = document.querySelectorAll(".animation");
    animation(elements, "animate");

    const headingElements = document.querySelectorAll(".headingAnimation");
    animation(headingElements, "headingAnimate");
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <AnimationContext.Provider value>{children}</AnimationContext.Provider>
  );
}

export default AnimationProvider;
