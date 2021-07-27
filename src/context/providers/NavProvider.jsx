import { useReducer } from "react";
import NavContext from "../NavContext";
import NavReducer from "../reducers/NavReducer";

function NavProvider({ children }) {
  const [state, dispatch] = useReducer(NavReducer, false);

  return (
    <NavContext.Provider value={{ state, dispatch }}>
      {children}
    </NavContext.Provider>
  );
}

export default NavProvider;
