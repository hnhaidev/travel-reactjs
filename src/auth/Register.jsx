import { useContext, useState } from "react";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";

function Register({ currentModel }) {
  const { dispatch } = useContext(ModelContext);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const registerForm = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={registerForm}>
      <div className="model__heading">
        <h3>Create new account</h3>
      </div>
      <div className="group">
        <input
          type="text"
          className="group__control"
          placeholder="Enter name"
          onChange={handleChange("name")}
          value={name}
        />
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
        <input type="submit" className="btn-dark" value="Register" />
        <span
          onClick={() => dispatch({ type: OPEN_MODEL, payload: currentModel })}
        >
          Already have an account?
        </span>
      </div>
    </form>
  );
}

export default Register;
