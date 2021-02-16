import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GenresPage from "./Pages/GenresPage";
import NavBar from "./Components/NavBar";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <div className="app flex">
        <Router>
          <div className="navbar absolute z-10">
            <NavBar />
          </div>
          <div className="App z-0 ml-6 ">
            <Switch>
              <Route path="/genres">
                <GenresPage />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
