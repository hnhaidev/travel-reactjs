import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import DestinationInfo from "../components/DestinationInfo";
import Header from "../components/Header";
import DestinationsContext from "../context/DestinationsContext";
import { DETAILS } from "../context/types/DestinationType";

function Details() {
  const { id } = useParams();

  const { destinationsData, dispatch } = useContext(DestinationsContext);
  const { details } = destinationsData;

  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{details.name}</title>
      </Helmet>
      <Header heading={details.name} image={details.bigImage}></Header>
      <DestinationInfo details={details} />
    </>
  );
}

export default Details;
