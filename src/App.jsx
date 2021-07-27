import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ModelProvider from "./context/providers/ModelProvider";
import Nav from "./components/Nav";
import NavProvider from "./context/providers/NavProvider";
import Toggle from "./components/Toggle";

function App() {
  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <Toggle />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route component={NotFound} />
          </Switch>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
