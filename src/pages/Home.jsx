import { useState, useContext } from "react";
import Header from "../components/Header";
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import Register from "../auth/Register";
import Login from "../auth/Login";
import { Helmet } from "react-helmet-async";
import Destinations from "../components/Destinations";

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
      <Helmet>
        <title>Travel Friends</title>
        <meta name="description" content="Demo to Travel" />
        <meta name="keywords" content="travel, demo travel" />
      </Helmet>
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

      <Destinations />
    </>
  );
}

export default Home;
