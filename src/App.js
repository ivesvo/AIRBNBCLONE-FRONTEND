import React from "react";
import "./App.css";
import DetailExp from "./components/DetailExp";
import ExperiencesList from "./components/ExperiencesList";
import AddExp from "./components/AddExp";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/exps/:expId">
          <DetailExp />
        </Route>
        <Route path="/add">
          <AddExp />
        </Route>
        <Route path="/exps">
          <ExperiencesList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
