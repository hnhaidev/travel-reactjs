import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not found</title>
        <meta name="description" content="Demo to Travel" />
        <meta name="keywords" content="travel, demo travel" />
      </Helmet>
      <h1>Not founds</h1>
    </>
  );
}

export default NotFound;
