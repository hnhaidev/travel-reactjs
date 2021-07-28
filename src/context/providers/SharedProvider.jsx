import { useReducer } from "react";
import SharedContext from "../SharedContext";
import SharedReducer from "../reducers/SharedReducer";
import services from "../../data/services";

function SharedProvider({ children }) {
  const [sharedData, dispatch] = useReducer(SharedReducer, {
    servicesData: services,
  });
  return (
    <SharedContext.Provider value={{ sharedData, dispatch }}>
      {children}
    </SharedContext.Provider>
  );
}

export default SharedProvider;
