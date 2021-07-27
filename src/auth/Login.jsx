import { useContext, useState } from "react";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";

function Login({ currentModel }) {
  const { dispatch } = useContext(ModelContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const loginForm = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={loginForm}>
      <div className="model__heading">
        <h3>Login</h3>
      </div>

      <div className="group">
        <input
          type="email"
          className="group__control"
          placeholder="Enter email"
          onChange={handleChange("email")}
          value={email}
        />
      </div>

      <div className="group">
        <input
          type="password"
          className="group__control"
          placeholder="Enter password"
          onChange={handleChange("password")}
          value={password}
        />
      </div>

      <div className="group">
        <input type="submit" className="btn-dark" value="Login" />
        <span
          onClick={() => dispatch({ type: OPEN_MODEL, payload: currentModel })}
        >
          Create new account
        </span>
      </div>
    </form>
  );
}

export default Login;
