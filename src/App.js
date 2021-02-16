import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GenresPage from "./Pages/GenresPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/genres">
            <GenresPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
