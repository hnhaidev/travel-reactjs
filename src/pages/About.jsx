import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import AboutImage from "../components/pages-parts/AboutImage";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [state] = useState({
    heading: "about us",
    pageHeading: "word best travel agency comapny since 2005",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere, magnam velit, animi, est earum qui ratione consequatur deleniti illum fugiat placeat. Dignissimos architecto deleniti obcaecati quia, earum fuga aliquam!",
  });

  return (
    <>
      <Helmet>
        <title>About Pages</title>
        <meta name="description" content="Demo to Travel" />
        <meta name="keywords" content="travel, demo travel" />
      </Helmet>
      <PageContainer data={state}>
        <AboutImage />
      </PageContainer>
    </>
  );
}

export default About;
