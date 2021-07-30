import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Cities from "../components/cities/Cities";
import DestinationInfo from "../components/destinationInfo/DestinationInfo";
import Header from "../components/Header";
import DestinationsContext from "../context/DestinationsContext";
import { CITIES, DETAILS } from "../context/types/DestinationType";

function Details() {
  const { id } = useParams();

  const { destinationsData, dispatch } = useContext(DestinationsContext);
  const { details, filteredCities } = destinationsData;

  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
    dispatch({ type: CITIES, payload: id });
    window.scroll(0, 0);
  }, [id, dispatch]);

  return (
    <>
      <Helmet>
        <title>{details.name}</title>
      </Helmet>
      <Header heading={details.name} image={details.bigImage}></Header>
      <DestinationInfo details={details} />
      <Cities cities={filteredCities} name={details.name} />
    </>
  );
}

export default Details;
