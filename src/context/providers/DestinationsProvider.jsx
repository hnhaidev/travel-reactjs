import { useReducer } from "react";
import DestinationsReducer from "../reducers/DestinationsReducer";
import { destinations } from "../../data/destinations";
import DestinationsContext from "../DestinationsContext";
import Cities from "../../data/cities";

function DestinationsProvider({ children }) {
  const [destinationsData, dispatch] = useReducer(DestinationsReducer, {
    destinations,
    details: {},
    cities: Cities,
    filteredCities: [],
  });

  return (
    <DestinationsContext.Provider value={{ destinationsData, dispatch }}>
      {children}
    </DestinationsContext.Provider>
  );
}

export default DestinationsProvider;
