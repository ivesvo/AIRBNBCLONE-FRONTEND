import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewExp from './components/NewExp'
import ExpList from './components/ExpList'
import Detail from './components/Detail'

function App() {

  return (
    <div className="App">
      {/* <Navbar/>
      <Jumbotron/>
      <ExpList/> */}
      <Router>
        <Switch>


          <Route exact={true} path="/addexp">
            <NewExp />
          </Route>
          <Route exact={true} path="/">
            <ExpList />
          </Route>
          <Route exact={true} path="/exps/:expId">
            <Detail />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;

