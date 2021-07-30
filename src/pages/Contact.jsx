import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/pages-parts/ContactForm";
import PageContainer from "../components/pages-parts/PageContainer";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [state] = useState({
    heading: "contact us",
    pageHeading: "leave your messge in the contact form",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere, magnam velit, animi, est earum qui ratione consequatur deleniti illum fugiat placeat. Dignissimos architecto deleniti obcaecati quia, earum fuga aliquam!",
  });

  return (
    <>
      <Helmet>
        <title>Contact Pages</title>
        <meta name="description" content="Demo to Travel" />
      </Helmet>
      <PageContainer data={state}>
        <ContactForm />
      </PageContainer>
    </>
  );
}

export default About;
