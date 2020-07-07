import React from "react";
import "./App.css";
import DetailExp from "./components/DetailExp";
import ExperiencesList from "./components/ExperiencesList";
import AddExp from "./components/AddExp";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UpdatePage from "./components/UpdatePage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/exps/:expId">
          <DetailExp />
        </Route>
        <Route path="/add">
          <AddExp />
        </Route>
        <Route exact path="/exps">
          <ExperiencesList />
        </Route>
        <Route path="/exps/:expId/update">
          <UpdatePage />
        </Route>
        <Route path="/footer">
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
