import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Episodes from "./containers/Episodes";
import Characters from "./containers/Characters";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/episodes">
            <Episodes />
          </Route>
          <Route exact path="/characters">
            <Characters />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
