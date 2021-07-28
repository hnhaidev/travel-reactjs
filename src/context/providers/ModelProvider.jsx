import ModelContext from "../ModelContext";
import { useReducer } from "react";
import ModelReducer from "../reducers/ModelReducer";

function ModelProvider({ children }) {
  const [state, dispatch] = useReducer(ModelReducer, {
    modelStatus: false,
    current: "",
  });

  return (
    <ModelContext.Provider value={{ state, dispatch }}>
      {children}
    </ModelContext.Provider>
  );
}

export default ModelProvider;
