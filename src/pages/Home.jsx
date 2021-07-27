import { useState, useContext } from "react";
import Header from "../components/Header";
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import Register from "../auth/Register";
import Login from "../auth/Login";

function Home() {
  const { dispatch } = useContext(ModelContext);

  const [state] = useState({
    heading: "We are travel friends",
    paragraph:
      "Come and join us we travel the most famous and beautiful places in the word",
  });

  const [registerModel] = useState("registerModel");
  const [loginModel] = useState("loginModel");

  return (
    <>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button
          className="btn-default"
          onClick={() => dispatch({ type: OPEN_MODEL, payload: registerModel })}
        >
          Get Started
        </button>
      </Header>
      <Model current={registerModel}>
        <Register currentModel={loginModel} />
      </Model>
      <Model current={loginModel}>
        <Login currentModel={registerModel} />
      </Model>
    </>
  );
}

export default Home;
