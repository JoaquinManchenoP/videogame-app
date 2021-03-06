import React, { useState, useContext } from "react";
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
import { AnimatePresence, motion } from "framer-motion";
import SearchPage from "./Pages/SearchPage";
import Store from "./Components/Context";

function App() {
  return (
    <>
      <Store>
        <div className="app flex">
          <Router>
            <div className="navbar absolute z-10">
              <NavBar />
            </div>

            <div className="App z-0  ">
           
                <Switch>
                  <Route path="/search">
                    <SearchPage />
                  </Route>
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
      </Store>
    </>
  );
}

export default App;
