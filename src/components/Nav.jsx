import { useContext } from "react";
import { Link } from "react-router-dom";
import NavContext from "../context/NavContext";
import { NAV_TOGGLE } from "../context/types/NavTypes";

function Nav() {
  const { state, dispatch } = useContext(NavContext);

  return (
    <>
      {state ? <div className="navLayer"></div> : ""}

      <div className={state ? "nav nav--open" : "nav nav--close"}>
        <div className="nav__content">
          <li>
            <Link to="/" onClick={() => dispatch({ type: NAV_TOGGLE })}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => dispatch({ type: NAV_TOGGLE })}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => dispatch({ type: NAV_TOGGLE })}>
              Contact
            </Link>
          </li>
        </div>
      </div>
    </>
  );
}

export default Nav;
