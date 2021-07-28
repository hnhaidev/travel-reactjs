import { useReducer } from "react";
import DestinationsReducer from "../reducers/DestinationsReducer";
import { destinations } from "../../data/destinations";
import DestinationsContext from "../DestinationsContext";
function DestinationsProvider({ children }) {
  const [destinationsData, dispatch] = useReducer(DestinationsReducer, {
    destinations,
    details: {},
  });

  return (
    <DestinationsContext.Provider value={{ destinationsData, dispatch }}>
      {children}
    </DestinationsContext.Provider>
  );
}

export default DestinationsProvider;
